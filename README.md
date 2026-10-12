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
3. **Deploy** - Sube `dist/` a `/srv/portfolio/dist` en el VPS vía SSH y Caddy lo sirve

### Modelo (GitOps de escritura única)

- Un solo escritor: tu máquina local. El VPS **solo recibe el build** (no clona el repo).
- Mismo patrón que `sakulazo/landing` y `sakulazo/gestaller`.

### Requisitos

- Clave SSH `~/.ssh/id_ed25519` autorizada en el VPS
- `sakulito` con sudo sin contraseña en el VPS
- `pnpm` instalado localmente

### URL

https://portfolio.sakulazo.com
