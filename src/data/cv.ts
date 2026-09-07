/**
 * Fuente única de los datos NO traducibles del CV: contacto, enlaces, cifras,
 * fechas, nombres de empresas e instituciones.
 *
 * La prosa (etiquetas, resúmenes, detalles técnicos y nombres de tecnologías
 * que llevan palabras, como "modelado ER") vive en src/i18n/{es,en}.ts.
 *
 * REGLA: toda cifra de este archivo tiene que existir textual en la sección 4
 * ("Métricas verificables") de perfil-nicolas-raffagnini.md. Nada estimado,
 * nada redondeado hacia arriba.
 */

export type Lang = 'es' | 'en';

export const profile = {
  name: 'Nicolás Raffagnini',
  initials: 'NR',
  email: 'nicolas.raffagnini95@gmail.com',
  phone: '+54 341 203 6305',
  phoneHref: 'tel:+543412036305',
  whatsapp: 'https://wa.me/5493412036305',
  linkedin: 'https://www.linkedin.com/in/nicolas-raffagnini',
  linkedinLabel: 'linkedin.com/in/nicolas-raffagnini',
  github: 'https://github.com/nico-raffa',
  githubLabel: 'github.com/nico-raffa',
  location: 'Rosario, Santa Fe, Argentina',
  photo: '/nicolas.jpg',
  updated: '2026-08',
} as const;

/**
 * Las cuatro cifras del encabezado. Son las mismas que van en la tarjeta OG
 * (scripts/make-og.mjs): quien llega desde LinkedIn ve lo mismo dos veces.
 * El rótulo de cada una es prosa y vive en el diccionario, bajo `proof.labels`.
 */
export type ProofId = 'sales' | 'modules' | 'tests' | 'savings';

export const proofMetrics: { id: ProofId; value: string }[] = [
  { id: 'sales', value: '+30%' },
  { id: 'modules', value: '33' },
  { id: 'tests', value: '~1.059' },
  { id: 'savings', value: 'USD 150' },
];

export const pdf: Record<Lang, string> = {
  es: '/CV-Nicolas-Raffagnini-ES.pdf',
  en: '/CV-Nicolas-Raffagnini-EN.pdf',
};

/** Empresas y períodos. El rol y la prosa de cada una salen del diccionario. */
export type JobId = 'nbg' | 'wotech' | 'nocountry';

export const jobs: { id: JobId; company: string; note?: string; short: string; from: string; to: string | null }[] = [
  { id: 'nbg', company: 'Nutriblend Group S.A.S.', note: 'WinWar', short: 'NBG', from: '2025', to: null },
  { id: 'wotech', company: 'WOTECH', short: 'WOTECH', from: '2024', to: '2025' },
  { id: 'nocountry', company: 'No Country', short: 'NO COUNTRY', from: '2023', to: '2024' },
];

export type EducationId = 'tecnicatura' | 'coursera' | 'microsoft' | 'coderhouse';

export const education: { id: EducationId; institution: string; period: string }[] = [
  { id: 'tecnicatura', institution: 'Terciario J. J. de Urquiza, Rosario', period: '2023 – 2025' },
  { id: 'coursera', institution: 'Coursera', period: '2025 – 2026' },
  { id: 'microsoft', institution: 'Microsoft', period: '2025 – 2026' },
  { id: 'coderhouse', institution: 'Coderhouse', period: '2022' },
];
