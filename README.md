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

## Despliegue

El sitio se despliega como archivos estaticos servidos por Caddy en Docker.

### Flujo

```
make deploy MSG="fix: mobile scroll"
```

1. **Build** - `pnpm build` genera `dist/`
2. **Git** - `add` + `commit` + `push` a `origin/main`
3. **Deploy** - Sube `dist/` a `/srv/portfolio/dist` en el VPS vía SSH (usuario `sakulito`, puerto `42932`) y Caddy lo sirve

### Modelo (GitOps de escritura única)

- Un solo escritor: tu máquina local. El VPS **solo recibe el build** (no clona el repo).
- Mismo patrón que `sakulazo/landing` y `sakulazo/gestaller`.

### Requisitos

- Clave SSH `~/.ssh/id_ed25519` autorizada para `sakulito` en el VPS (`185.214.134.40:42932`)
- `sakulito` con sudo sin contraseña en el VPS
- `pnpm` instalado localmente

### URL

https://portfolio.sakulazo.com

## Posible mejora: propagación de caché del CV

**Situación actual:** el sitio está detrás de Cloudflare y el origin (Caddy) sirve el
PDF del CV con `Cache-Control: max-age=14400`. Esto significa que, tras actualizar el
CV y desplegar, Cloudflare y los navegadores pueden seguir sirviendo la versión anterior
durante hasta **4 horas** (TTL) sin necesidad de purgar nada; la propagación es
automática pero no inmediata.

**Impacto observado (ago 2026):** tras sustituir el PDF en `public/` y desplegar,
Cloudflare seguía sirviendo la copia antigua (`cf-cache-status: HIT`, `age` cercano al
TTL). El origin ya tenía la versión correcta; era un problema de caché edge, no de build.

**Mejora recomendada (no bloqueante, decidir cuándo moleste la demora):**

1. **Versionado en la URL del CV** - cambiar `Hero.astro` a
   `href="/Lucas_Sanchez_Acosta_CV.pdf?v=2"` y bumpear el número en cada cambio.
   Rápido, pero manual y propenso a olvidos.
2. **Content-hash en el nombre del archivo** - renombrar el PDF con su hash
   (`Lucas_Sanchez_Acosta_CV-<hash>.pdf`) y que el build/Makefile genere la referencia
   automáticamente. URL nueva por cada cambio → sin colisión de caché nunca.
3. **`Cache-Control: no-cache` en el origin** - configurar Caddy para ese PDF y que
   Cloudflare/navegador revaliden siempre contra el origin. Requiere editar la config
   del VPS (SSH).

Mientras tanto, una actualización del CV basta con `make deploy MSG="..."` y esperar el
TTL, o purgar manualmente la URL en el dashboard de Cloudflare si es urgente.
