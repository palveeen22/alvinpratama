'use client'

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarMenuProps {
  homeLabel: string;
  projectsLabel: string;
  blogLabel: string;
}

export const NavbarMenu = ({ homeLabel, projectsLabel, blogLabel }: NavbarMenuProps) => {
  let pathname = usePathname()
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  const locale = useLocale();


  const NAV_MENU_LINK = [
    {
      label: homeLabel,
      href: `/${locale}`,
    },
    {
      label: projectsLabel,
      href: `/${locale}/latest`,
    },
    {
      label: blogLabel,
      href: `/${locale}/blogs`,
    },
  ];


  return (
    <nav className='flex items-center gap-8'>
      {NAV_MENU_LINK.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className={cn(
            pathname === menu.href
              ? 'dark:text-foreground/90 font-medium text-foreground/100 underline decoration-wavy underline-offset-8'
              : 'dark:text-foreground/60 text-foreground/80 transition-colors hover:text-foreground/100 hover:dark:text-foreground/90'
          )}
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  )
}