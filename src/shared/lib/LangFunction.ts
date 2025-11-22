// Define supported locales
export type SupportedLocale = 'en' | 'ru';

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === 'en' || locale === 'ru';
}