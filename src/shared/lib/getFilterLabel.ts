import { Locale, ProjectType } from "../types";

export const getFilterLabel = (type: ProjectType, locale: Locale) => {
  const labels = {
    en: {
      all: 'All Projects',
      mobile: 'Mobile Apps',
      web: 'Web Apps'
    },
    ru: {
      all: 'Все проекты',
      mobile: 'Мобильные приложения',
      web: 'Веб-приложения'
    }
  };

  return labels[locale as 'en' | 'ru']?.[type] || labels.en[type];
};