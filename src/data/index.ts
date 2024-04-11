import type { Dictionary } from "@/types";
import { useLocale, useTranslations } from "next-intl";

export const project = {
    title: "Projects",
    pharagraph: "Some things that I've created during my learning journey...."
}

// const t = useTranslations("selfInfo")

export const NAV_MENU_LINK = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: '/blogs',
  },
];

export function getLocalizedNavMenuLinks(): typeof NAV_MENU_LINK {
  const locale = useLocale();
  
  return NAV_MENU_LINK.map((link) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));
}


export const allPosts = [
	{ description: "testx", title: "blabla", date: "2024/12/1", slug:"content-security-policy" },
	{ description: "testx", title: "blabla", date: "2024/12/1", slug:"content-security-policy" },
	{ description: "testx", title: "blabla", date: "2024/12/1", slug:"content-security-policy" },
];

export const projects = [
	{ url: "string", title: "WaterHub",  stacks: ["text", "test", "textt"] },
	{ url: "string", title: "Pintar Ai",  stacks: ["text", "test", "textt"] },
	{ url: "string", title: "Pesanaja", stacks: ["text", "test", "textt"] },
	{ url: "string", title: "WebcamToy", stacks: ["text", "test", "textt"] },
	{ url: "string", title: "Turun Tangan", stacks: ["text", "test", "textt"]},
	{ url: "string", title: "Belinsky Studio", stacks: ["text", "test", "textt"]},
];
