# Makefile — despliegue de un sitio estático (Astro)
# Contrato estándar (ADR-0004): help / build / push / deploy MSG= / verify
# Plantilla canónica: infra-vps/templates/Makefile.static
# Uso: make deploy MSG="descripción del cambio"

# ── Variables por proyecto ────────────────────────────────────────────
# SITE_NAME: nombre corto · SITE_URL: URL pública · REMOTE_DIR: raíz servida por
# Caddy (¡debe empezar por /srv/!) · REMOTE_OWNER: propietario real en /srv ·
# BUILD_CMD: comando de build. SIN comentarios inline (los espacios rompen owner:group).
SITE_NAME    := portfolio
SITE_URL     := https://portfolio.sakulazo.com/
REMOTE_DIR   := /srv/portfolio/dist
REMOTE_OWNER := www-data
BUILD_CMD    := pnpm build

# ── Infraestructura SSH (común) ───────────────────────────────────────
# Conexión por el alias de ~/.ssh/config (Host vps), no por IP cruda: el alias
# es la fuente de verdad de user/port/key. Override: make ... SSH_ALIAS=vps-manager
SSH_ALIAS  ?= vps
GIT_REMOTE := origin
GIT_BRANCH := main

.PHONY: help build push deploy verify purge

help: ## Muestra la ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

build: ## Construye el sitio (genera dist/)
	$(BUILD_CMD)

push: ## Commit + push a GitHub (requiere MSG="descripción")
	@test -n "$(MSG)" || { echo "ERROR: falta MSG=... p.ej. make deploy MSG=\"fix: texto\""; exit 1; }
	git add -A
	# Guardia: lista lo que se commitea y bloquea archivos sensibles (.env y
	# congéneres), por si un gitignore incompleto los dejara al descubierto.
	@if ! git diff --cached --quiet; then \
	  echo ">> Archivos a commitear:"; \
	  git diff --cached --name-status; \
	  if git diff --cached --name-only | grep -qE '(^|/)(\.env|acckey\.txt|salida\.txt)'; then \
	    echo "ERROR: archivos sensibles en el stage (.env, acckey.txt o salida.txt)"; \
	    exit 1; \
	  fi; \
	fi
	git diff --cached --quiet || git commit -m "$(MSG)"
	git push $(GIT_REMOTE) $(GIT_BRANCH)

deploy: build push ## Build + push + subida al VPS (limpia el destino completo)
	@case "$(REMOTE_DIR)" in /srv/*) ;; *) echo "ERROR: REMOTE_DIR inseguro: $(REMOTE_DIR)"; exit 1;; esac
	@echo ">> $(SITE_NAME): subiendo build a $(SSH_ALIAS):$(REMOTE_DIR)"
	@tar -C dist -cf - . | ssh $(SSH_ALIAS) \
	  'sudo find $(REMOTE_DIR) -mindepth 1 -delete && sudo mkdir -p $(REMOTE_DIR) && sudo tar -C $(REMOTE_DIR) -xf - \
	   && sudo chown -R $(REMOTE_OWNER):$(REMOTE_OWNER) $(REMOTE_DIR) \
	   && sudo find $(REMOTE_DIR) -type f -exec chmod 644 {} + \
	   && sudo find $(REMOTE_DIR) -type d -exec chmod 755 {} +'
	@$(MAKE) purge
	@$(MAKE) verify

verify: ## Comprueba que el sitio responde 200
	@ssh $(SSH_ALIAS) 'curl -s -o /dev/null -w "$(SITE_NAME): HTTP %{http_code}\n" $(SITE_URL)'

purge: ## Purga toda la caché de Cloudflare (purge_everything). Requiere CLOUDFLARE_API_TOKEN y CLOUDFLARE_ZONE_ID (env vars, nunca en repo)
	@test -n "$$CLOUDFLARE_API_TOKEN" || { echo "ERROR: falta CLOUDFLARE_API_TOKEN (export CLOUDFLARE_API_TOKEN=...)"; exit 1; }
	@test -n "$$CLOUDFLARE_ZONE_ID" || { echo "ERROR: falta CLOUDFLARE_ZONE_ID (export CLOUDFLARE_ZONE_ID=...)"; exit 1; }
	@echo ">> Purgando caché de Cloudflare (purge_everything) en zona $$CLOUDFLARE_ZONE_ID..."
	@curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$$CLOUDFLARE_ZONE_ID/purge_cache" \
	  -H "Authorization: Bearer $$CLOUDFLARE_API_TOKEN" \
	  -H "Content-Type: application/json" \
	  --data '{"purge_everything":true}' \
	  | grep -q '"success":true' \
	  && echo "Cloudflare: caché purgada correctamente" \
	  || { echo "Cloudflare: fallo al purgar"; exit 1; }
