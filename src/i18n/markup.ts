/**
 * Convierte los tramos entre acentos graves del contenido en <code>.
 * Escapa el HTML primero: los permisos del ERP llevan `<recurso>.<acción>.<scope>`
 * y esos signos tienen que verse, no interpretarse.
 */
export function inlineCode(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/`([^`]+)`/g, '<code class="code">$1</code>');
}
