# Makefile — despliegue de portfolio.sakulazo.com
# Uso: make deploy MSG="descripción del cambio"

MSG        ?=
SSH_HOST   := sakulito@185.214.134.40
SSH_PORT   := 42932
SSH_KEY    := $(HOME)/.ssh/id_ed25519
REMOTE_DIR := /srv/portfolio/dist
GIT_REMOTE := origin
GIT_BRANCH := main

.PHONY: help build push deploy verify

help: ## Muestra la ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

build: ## Construye el portfolio (genera dist/)
	pnpm build

push: ## Commit + push a GitHub (requiere MSG="descripción")
	@test -n "$(MSG)" || { echo "ERROR: falta MSG=... p.ej. make deploy MSG=\"fix: scroll\""; exit 1; }
	git add -A
	git diff --cached --quiet || git commit -m "$(MSG)"
	git push $(GIT_REMOTE) $(GIT_BRANCH)

deploy: build push ## Build + push + subida al VPS
	@echo ">> Subiendo build a $(SSH_HOST):$(REMOTE_DIR)"
	@tar -C dist -cf - . | ssh -i $(SSH_KEY) -p $(SSH_PORT) $(SSH_HOST) \
	  'sudo rm -rf $(REMOTE_DIR)/_astro $(REMOTE_DIR)/en $(REMOTE_DIR)/index.html $(REMOTE_DIR)/favicon.ico $(REMOTE_DIR)/favicon.svg $(REMOTE_DIR)/Lucas_Sanchez_Acosta_CV.pdf \
	   && sudo tar -C $(REMOTE_DIR) -xf - \
	   && sudo chown -R www-data:www-data $(REMOTE_DIR) \
	   && sudo find $(REMOTE_DIR) -type f -exec chmod 644 {} + \
	   && sudo find $(REMOTE_DIR) -type d -exec chmod 755 {} +'
	@$(MAKE) verify

verify: ## Comprueba que https://portfolio.sakulazo.com responde 200
	@ssh -i $(SSH_KEY) -p $(SSH_PORT) $(SSH_HOST) 'curl -s -o /dev/null -w "HTTP %{http_code}\n" https://portfolio.sakulazo.com/'
