/**
 * Genera public/og.png (1200×630) para las tarjetas de LinkedIn/WhatsApp/X.
 * Se corre a mano cuando cambia el contenido: `npm run og`.
 * Usa sharp, que ya viene con Astro. Tipografías: familias genéricas del sistema,
 * para no depender de fuentes instaladas.
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const W = 1200;
const H = 630;

/* Las mismas cuatro cifras que la franja del hero (`proofMetrics` en
   src/data/cv.ts), en el mismo orden: quien llega desde LinkedIn ve dos
   veces lo mismo. Si cambia una, cambian las dos. */
const rows = [
  ['+30%', 'más ventas minoristas'],
  ['33', 'módulos en producción'],
  ['~1.059', 'tests automatizados'],
  ['USD 150', 'de ahorro mensual de infra'],
];

const cells = rows
  .map((row, i) => {
    const x = 80 + (i % 2) * 545;
    const y = 380 + Math.floor(i / 2) * 110;
    return `
      <text x="${x}" y="${y}" font-family="monospace" font-size="46" font-weight="500" fill="#14171A">${row[0]}</text>
      <text x="${x}" y="${y + 30}" font-family="monospace" font-size="19" letter-spacing="1.6" fill="#55605C">${row[1].toUpperCase()}</text>`;
  })
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#F6F5F1"/>
  <rect x="0" y="0" width="${W}" height="10" fill="#0F5132"/>
  <text x="80" y="130" font-family="monospace" font-size="21" letter-spacing="1.6" fill="#55605C">NICOLÁS RAFFAGNINI · DESARROLLADOR FULL STACK · BACKEND &amp; DEVOPS</text>
  <text x="80" y="205" font-family="serif" font-size="58" fill="#14171A">Me hago cargo del producto</text>
  <text x="80" y="268" font-family="serif" font-size="58" fill="#14171A">de punta a punta.</text>
  <line x1="80" y1="320" x2="${W - 80}" y2="320" stroke="#DFDDD5" stroke-width="1"/>
  ${cells}
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`public/og.png · ${(png.length / 1024).toFixed(0)} KB`);
