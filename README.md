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
2. `make build` — construye desde el Makefile, que es la fuente de verdad del
   comando de construcción. Si cambia `BUILD_CMD`, el CI lo hereda.
3. Verificación de `dist/`: `index.html`, `robots.txt`, `sitemap-index.xml`,
   `og-image.png`, `apple-touch-icon.png` y el PDF del CV.

El workflow **no despliega y no tiene secrets** (`permissions: contents: read`).
El despliegue es manual y local: meter claves SSH en GitHub daría a cualquiera con
permiso de push el control del VPS.

### Cloudflare

`make purge` invalida la caché del borde con `purge_everything` tras un despliegue.
Requiere dos variables de entorno, que **nunca** van al repositorio:

```bash
export CLOUDFLARE_API_TOKEN=...   # permiso minimo: Zone > Cache Purge > Edit
export CLOUDFLARE_ZONE_ID=...    # Zone ID del dominio en el panel de Cloudflare
make purge
```

## Despliegue

El sitio se despliega como archivos estaticos servidos por Caddy en Docker.

### Flujo

```
make deploy MSG="fix: mobile scroll"
```

1. **Build** - `pnpm build` genera `dist/`
2. **Git** - `add` + `commit` + `push` a `origin/main`
3. **Deploy** - Sube `dist/` a `/srv/portfolio/dist` en el VPS vía SSH y Caddy lo sirve

### Modelo (GitOps de escritura única)

- Un solo escritor: tu máquina local. El VPS **solo recibe el build** (no clona el repo).
- Mismo patrón que `sakulazo/landing` y `sakulazo/gestaller`.

### Requisitos

- Clave SSH autorizada en el VPS
- Usuario con sudo sin contraseña en el VPS
- `pnpm` instalado localmente

### URL

https://portfolio.sakulazo.com
