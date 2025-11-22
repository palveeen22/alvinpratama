// i18n.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ locale }) => {
  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});