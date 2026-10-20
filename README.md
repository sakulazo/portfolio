# Portfolio - Lucas Sanchez

Sitio web personal de portfolio desarrollado con Astro y Tailwind CSS.

## Estructura del proyecto

```text
/
├── src/
│   ├── components/     # Componentes Astro (Navbar, Hero, About, etc.)
│   ├── layouts/        # Layout principal
│   ├── pages/          # Paginas (index.astro, cv.astro)
│   └── styles/         # Estilos globales (Tailwind)
├── public/             # Assets estaticos (favicon, iconos)
├── Makefile            # Despliegue (patrón GitOps, ver sección "Despliegue")
└── package.json
```

## Currículum (`/cv`)

`src/pages/cv.astro` es una página A4 autocontenida. **No hay PDF pregenerado**:
el botón «Imprimir / Guardar como PDF» abre el diálogo de impresión del
navegador (`window.print()`), desde el que se puede guardar como PDF o enviar a
la impresora. Los fondos se fuerzan con `print-color-adjust: exact` para que el
lateral azul se imprima aunque el navegador tenga «Gráficos de fondo»
desactivado.

- El contenido vive en `src/data/cv.ts`, **deliberadamente independiente** de
  `src/data/site.ts` (el portfolio): el CV puede cambiar de enfoque —o cambiar
  el portfolio— sin que uno dependa del otro.
- Impresión a dos páginas: la primera es la hoja A4 completa (lateral + perfil
  + experiencia) y la segunda recoge la sección de proyectos. En pantalla, por
  debajo de 900 px, el CV pasa a una columna con el lateral arriba.
- La foto se importa de `src/assets/yo_bien_cortado.png` (el mismo archivo que
  usa el hero del portfolio), no en base64 dentro del HTML.

## CV para ATS (`/cv-ats`)

Versión del currículum **para portales de empleo**, distinta del CV visual:
una sola columna, sin foto, sin color, sin gráficos y sin tablas, con las
palabras clave de las ofertas objetivo.

| Artefacto | Ruta | Para qué sirve |
| :-------- | :--- | :------------- |
| Página | `/cv-ats` | Se imprime a PDF desde el navegador (botón «Imprimir / PDF») |
| Texto plano | `/cv-ats.txt` | Se sube al portal o se pega en el formulario: es lo que mejor leen los parsers de ATS |

- La descarga del `.txt` se llama **`CV_Lucas_Sanchez_Acoste.txt`**: lo fija el
  atributo `download` del botón y, para quien abra la URL directamente, la
  cabecera `Content-Disposition` que añade Caddy (ver `infra-vps`, site block
  de `portfolio.sakulazo.com`). El sitio es estático, así que la cabecera del
  endpoint Astro no se aplica: la pone el servidor.

- El contenido vive en `src/data/cv-ats.ts` y **el `.txt` se genera con
  `toPlainText()` a partir de los mismos datos**, así que la página y el
  archivo de texto no pueden desincronizarse.
- Reglas que sigue, y por qué: nada en cabecera ni pie (muchos parsers lo
  descartan), datos de contacto al principio del cuerpo, encabezados de
  sección en mayúsculas, viñetas con `-`, fechas inequívocas (`jun. 2025 -
  Actualidad`), texto seleccionable y nunca una imagen.
- Solo se declaran aptitudes defendibles: cada cifra y cada tecnología del
  documento se corresponde con código o con una operación real.

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
4. Verificación de `dist/`: `index.html`, `cv/index.html`, `robots.txt`,
   `sitemap-index.xml`, `og-image.png` y `apple-touch-icon.png`.

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
