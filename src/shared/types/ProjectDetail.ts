export type Locale = 'en' | 'ru';

export type ProjectType = 'all' | 'mobile' | 'web';


export type TProjectDetail = {
  id: string;
  slug: string;
  url: string;
  image: string;
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
  stacks: string[];
  keywords: Record<Locale, string[]>;
  features: Record<Locale, string[]>;
  architectureHighlights: Record<Locale, string[]>;
  metaTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
};

export type LocalizedProject = {
  id: string;
  slug: string;
  url: string;
  image: string;
  stacks: string[];
  title: string;
  desc: string;
  keywords: string[];
  features: string[];
  architectureHighlights: string[];
  metaTitle: string;
  metaDescription: string;
};