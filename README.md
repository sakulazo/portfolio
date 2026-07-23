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
├── public/             # Assets estaticos (favicon)
├── deploy.sh           # Script de despliegue
└── package.json
```

## Comandos

| Comando             | Accion                                       |
| :------------------ | :------------------------------------------- |
| `pnpm install`      | Instala dependencias                         |
| `pnpm dev`          | Inicia servidor local en `localhost:4321`    |
| `pnpm build`        | Genera el sitio estatico en `./dist/`        |
| `pnpm preview`      | Previsualiza el build localmente             |
| `./deploy.sh "msg"` | Commitea, buildea y despliega al VPS         |

## Despliegue

El sitio se despliega como archivos estaticos servidos por Caddy en Docker.

### Flujo

```
./deploy.sh "fix: mobile scroll"
```

1. **Git** - `add` + `commit` + `push` automaticos
2. **Build** - `pnpm build` genera `dist/`
3. **Deploy** - Sube `dist/` al VPS vía SSH y Caddy lo sirve

### Requisitos

- SSH configurado con alias `vps-manager`
- `pnpm` instalado
- Acceso sudo sin contraseña a `cp`, `chown`, `mkdir` en el VPS

### URL

https://portfolio.sakulazo.com
