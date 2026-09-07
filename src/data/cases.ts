/**
 * Los cinco casos del portafolio: lo NO traducible de cada uno.
 * La prosa (Situación / Qué hice / Resultado y las viñetas técnicas) vive en
 * src/i18n/{es,en}.ts, bajo `cases.items.<id>`.
 *
 * REGLA: `metric.value` tiene que existir textual en la sección 4
 * ("Métricas verificables") de perfil-nicolas-raffagnini.md. Nada estimado.
 */

export type CaseId = 'multiagente' | 'erp' | 'infra' | 'rbac' | 'recepcion';
export type DiagramId = 'agents' | 'purchaseOrder' | 'infra';

/**
 * `product` son los dos sistemas; `decision` son las tres decisiones técnicas.
 * El CV en A4 imprime sólo las `decision`: los sistemas ya están contados
 * en su sección de experiencia y repetirlos gastaría media hoja.
 */
export type CaseKind = 'product' | 'decision';

export const cases: {
  id: CaseId;
  kind: CaseKind;
  company: string;
  year: string;
  /** La cifra que va grande. El rótulo es prosa y vive en el diccionario. */
  metric: string;
  stack: string[];
  diagram?: DiagramId;
}[] = [
  {
    id: 'multiagente',
    kind: 'product',
    company: 'NBG',
    year: '2025 – hoy',
    metric: '+30%',
    stack: ['TypeScript', 'API de Gemini', 'Redis', 'MySQL', 'Docker'],
    diagram: 'agents',
  },
  {
    id: 'erp',
    kind: 'product',
    company: 'NBG',
    year: '2025 – hoy',
    metric: '33',
    stack: [
      'Node.js 22',
      'Express 4',
      'Sequelize',
      'MySQL / MariaDB',
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Socket.IO',
      'Docker',
      'GitHub Actions',
      'Nginx',
    ],
    diagram: 'purchaseOrder',
  },
  {
    id: 'infra',
    kind: 'decision',
    company: 'NBG',
    year: '2025',
    metric: 'USD 150',
    stack: ['Linux', 'Nginx', 'Docker Compose', 'GitHub Actions', 'GHCR', 'rclone + systemd'],
    diagram: 'infra',
  },
  {
    id: 'rbac',
    kind: 'decision',
    company: 'NBG',
    year: '2025',
    metric: '~287',
    stack: ['Node.js 22', 'Express 4', 'Sequelize', 'MySQL', 'Mocha'],
  },
  {
    id: 'recepcion',
    kind: 'decision',
    company: 'NBG',
    year: '2025',
    metric: '3',
    stack: ['Modelado de dominio', 'Ledger append-only', 'RBAC'],
  },
];

export const productCases = cases.filter((c) => c.kind === 'product');
export const decisionCases = cases.filter((c) => c.kind === 'decision');
