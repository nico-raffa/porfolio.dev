/**
 * Validación social. Hoy está vacío a propósito: no hay ninguna recomendación
 * en el dossier y acá no se inventa nada.
 *
 * Para cargarlo: pegá la recomendación TEXTUAL (de LinkedIn, de un mail, de
 * donde sea), sin editarla para que suene mejor. Con el array vacío la sección
 * no se renderiza: no queda ningún hueco en la página.
 *
 *   export const testimonials: Testimonial[] = [
 *     {
 *       quote: 'Nicolás se hizo cargo de…',
 *       name: 'Nombre Apellido',
 *       role: 'Rol al momento de trabajar juntos',
 *       company: 'Empresa',
 *       source: 'https://www.linkedin.com/in/…',
 *     },
 *   ];
 */

export type Testimonial = {
  /** La cita, textual. Sin comillas: las pone el componente. */
  quote: string;
  name: string;
  /** El rol que tenía cuando trabajaron juntos, no el de hoy. */
  role: string;
  company: string;
  /** URL de la recomendación, si es pública. Sin esto la cita no es verificable. */
  source?: string;
};

export const testimonials: Testimonial[] = [];
