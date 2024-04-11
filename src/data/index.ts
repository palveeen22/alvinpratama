import type { Dictionary } from "@/types";


export const project = {
    title: "Projects",
    pharagraph: "Some things that I've created during my learning journey...."
}

// export const NAVBAR_OPTIONS: { label: keyof Dictionary["navbar"]; href: string }[] = [
//   { label: "home", href: "/" },
//   { label: "about", href: "/about" },
//   { label: "portfolio", href: "/portfolio" },
//   { label: "contactUs", href: "/contact" },
// ];

export const NAV_MENU_LINK: { label: keyof Dictionary["navbar"]; href: string }[] = [
  {
    label: 'home',
    href: '/',
  },
  // {
  //   label: 'About',
  //   href: '/about',
  // },
  {
    label: 'projects',
    href: '/projects',
  },
  {
    label: 'blog',
    href: '/blogs',
  },
]

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
