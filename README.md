# Portfolio - Lucas Sanchez

Sitio web personal de portfolio desarrollado con Astro y Tailwind CSS.

## Estructura del proyecto

```text
/
├── src/
│   ├── components/     # Componentes Astro (Navbar, Hero, About, etc.)
│   ├── layouts/        # Layout principal
│   ├── pages/          # Paginas (index.astro)
│   └── styles/         # Estilos globales (Tailwind)
├── public/             # Assets estaticos (favicon, CV)
├── Makefile            # Despliegue (patrón GitOps, ver sección "Despliegue")
└── package.json
```

## Comandos

| Comando                 | Accion                                       |
| :---------------------- | :------------------------------------------- |
| `pnpm install`          | Instala dependencias                         |
| `pnpm dev`              | Inicia servidor local en `localhost:4321`    |
| `pnpm check`            | Comprobacion de tipos (`astro check`)        |
| `pnpm build`            | Genera el sitio estatico en `./dist/`        |
| `pnpm preview`          | Previsualiza el build localmente             |
| `make deploy MSG="..."` | Build + push + despliegue al VPS             |
| `make purge`            | Purga la caché de Cloudflare                 |

## CI/CD

Cada push a `main`, cada pull request y cada ejecución manual disparan el workflow
[CI](.github/workflows/ci.yml), que verifica que el sitio se construye y que los
artefactos críticos existen:

1. `pnpm install --frozen-lockfile` — dependencias reproducibles (falla si el
   `package.json` y el lockfile no cuadran).
2. `pnpm check` — comprobación de tipos (`astro check`) sobre componentes y
   scripts; falla si hay errores de tipos aunque el build no truene.
3. `make build` — construye desde el Makefile, que es la fuente de verdad del
   comando de construcción. Si cambia `BUILD_CMD`, el CI lo hereda.
4. Verificación de `dist/`: `index.html`, `robots.txt`, `sitemap-index.xml`,
   `og-image.png`, `apple-touch-icon.png` y el PDF del CV.

El workflow **no despliega y no tiene secrets** (`permissions: contents: read`).
El despliegue es manual y local: meter claves SSH en GitHub daría a cualquiera con
permiso de push el control del VPS.

### Cloudflare

`make purge` invalida la caché del borde con `purge_everything` tras un despliegue.
La credencial (permiso mínimo: Zone > Cache Purge > Edit sobre la zona
`sakulazo.com`) es de cuenta, no del VPS: vive cifrada en `sakulazo/infra-secrets`
y `make purge` la descifra bajo demanda con `sops` (ADR-0014 de infra-vps).
No hay exports manuales ni `.env` en claro. Requiere `sops` y la clave age
(`SOPS_AGE_KEY_FILE`, exportada en `~/.bashrc`) en wsl-local:

```bash
make purge
```

## Despliegue

El sitio se despliega como archivos estaticos servidos por Caddy en Docker.

### Flujo

```
make deploy MSG="fix: mobile scroll"
```

1. **Build** - `pnpm build` genera `dist/`
2. **Git** - `add` + `commit` + `push` a `origin/main` (lista los archivos a
   commitear y bloquea `.env`/`acckey.txt`/`salida.txt`)
3. **Deploy** - Sube `dist/` a `/srv/portfolio/dist` en el VPS vía SSH y Caddy lo sirve
4. **Purge** - Purga la caché de Cloudflare (credencial cifrada en
   `infra-secrets`, descifrada con `sops` bajo demanda)
5. **Verify** - `curl` al sitio: con la caché purgada, el 200 refleja el build recién subido

### Modelo (GitOps de escritura única)

- Un solo escritor: tu máquina local. El VPS **solo recibe el build** (no clona el repo).
- Mismo patrón que `sakulazo/landing` y `sakulazo/gestaller`.

### Requisitos

- Clave SSH autorizada en el VPS
- Usuario con sudo sin contraseña en el VPS
- `pnpm` instalado localmente

### URL

https://portfolio.sakulazo.com
