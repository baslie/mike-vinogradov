import { translations, type Lang, type TranslationKey } from './translations';

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'ru';
}
