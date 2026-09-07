/** DiagramId → componente. Lo consume CaseStudy.astro. */
import Agents from './Agents.astro';
import PurchaseOrder from './PurchaseOrder.astro';
import Infra from './Infra.astro';
import type { DiagramId } from '../../data/cases';

export const diagrams: Record<DiagramId, typeof Agents> = {
  agents: Agents,
  purchaseOrder: PurchaseOrder,
  infra: Infra,
};
