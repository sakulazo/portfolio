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
    },
  });
};
