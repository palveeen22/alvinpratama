import { en } from "@/lib/dictionaries/en";
import { ru } from "@/lib/dictionaries/ru";
import type { Dictionary, Lang } from "@/types";

export const LANGS = ["de", "en", "ru"] as const;
export const DEFAULT_LANG: Lang = "en";
export const DICTIONARIES = { en, de, ru };
export const DEFAULT_DICTIONARY = DICTIONARIES[DEFAULT_LANG];

export const LANGUAGES: Record<Lang, { label: string; value: Lang; dictionary: Dictionary }> = {
  en: {
    label: "English",
    value: "en",
    dictionary: DICTIONARIES.en,
  },
  ru: {
    label: "Русский",
    value: "ru",
    dictionary: DICTIONARIES.ru,
  },
  de: {
    label: "Deutsch",
    value: "de",
    dictionary: DICTIONARIES.de,
  },
};

export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, { dictionary, ...rest }]) => ({ ...rest }));

export const getDictionary = (lang: Lang): Dictionary => LANGUAGES[lang].dictionary;
