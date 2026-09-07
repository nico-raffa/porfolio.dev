import type { Lang } from '../data/cv';
import { es } from './es';
import { en } from './en';
import type { Dict } from './types';

const dicts: Record<Lang, Dict> = { es, en };

export function useTranslations(lang: Lang): Dict {
  return dicts[lang];
}

/**
 * Las cuatro rutas del sitio. El portafolio vive en `/` y `/en`; la hoja
 * imprimible, en `/cv` y `/en/cv`. Todo el ruteo sale de esta tabla, así el
 * switch de idioma nunca manda al home desde el CV.
 */
export type Page = 'home' | 'cv';

const routes: Record<Page, Record<Lang, string>> = {
  home: { es: '/', en: '/en' },
  cv: { es: '/cv', en: '/en/cv' },
};

export function href(page: Page, lang: Lang): string {
  return routes[page][lang];
}

/** La misma página en el otro idioma. */
export function otherLang(lang: Lang, page: Page = 'home'): { lang: Lang; href: string } {
  const other: Lang = lang === 'es' ? 'en' : 'es';
  return { lang: other, href: routes[page][other] };
}

export function homeHref(lang: Lang): string {
  return routes.home[lang];
}

export function cvHref(lang: Lang): string {
  return routes.cv[lang];
}

export type { Dict };
