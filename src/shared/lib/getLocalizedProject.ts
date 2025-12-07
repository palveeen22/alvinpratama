import { Locale, TProjectDetail } from "../types";

export const getLocalizedProject = (
  project: TProjectDetail,
  locale: Locale
): {
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
} => {
  return {
    id: project.id,
    slug: project.slug,
    url: project.url,
    image: project.image,
    stacks: project.stacks,
    title: project.title[locale],
    desc: project.desc[locale],
    keywords: project.keywords[locale],
    features: project.features[locale],
    architectureHighlights: project.architectureHighlights[locale],
    metaTitle: project.metaTitle[locale],
    metaDescription: project.metaDescription[locale],
  };
};

export const getLocalizedProjects = (projects: TProjectDetail[], locale: Locale) => {
  return projects.map((project) => getLocalizedProject(project, locale));
};
