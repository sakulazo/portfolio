// src/pages/cv-ats.txt.ts
//
// El CV para ATS en texto plano, generado desde los mismos datos que la
// página /cv-ats (src/data/cv-ats.ts). Es el formato que mejor leen los
// parsers de ATS y el que se pega en los formularios de los portales.
//
// Se sirve como archivo estático: el build lo deja en dist/cv-ats.txt.
import type { APIRoute } from 'astro';
import { toPlainText } from '../data/cv-ats';

export const GET: APIRoute = () => {
  return new Response(toPlainText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Al pulsar la URL el navegador descarga el archivo en vez de mostrarlo.
      // El nombre va sin acentos a propósito: es ASCII y así no depende de cómo
      // lo interprete el cliente. El botón "Descargar .txt" de la página usa
      // el atributo `download`, que tiene prioridad sobre esta cabecera.
      'Content-Disposition': 'attachment; filename="CV_Lucas_Sanchez_Acosta.txt"',
    },
  });
};
