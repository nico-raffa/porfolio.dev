/**
 * Detección de la foto de perfil, compartida entre el hero del portafolio y el
 * encabezado del CV. La foto es opcional: si no hay ningún archivo en
 * public/nicolas.(jpg|jpeg|png|webp), ambos caen al monograma y nada se ve roto.
 */
import fs from 'node:fs';

const candidates = ['nicolas.jpg', 'nicolas.jpeg', 'nicolas.png', 'nicolas.webp'];

/** Ruta pública de la foto (`/nicolas.jpg`), o `null` si todavía no hay ninguna. */
export const photoSrc: string | null = (() => {
  const file = candidates.find((name) => fs.existsSync(new URL(`../../public/${name}`, import.meta.url)));
  return file ? `/${file}` : null;
})();
