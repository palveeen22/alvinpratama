'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ToogleMode } from './ToogleMode'
import { ToogleLanguages } from './ToogleLanguages'
import { NAV_MENU_LINK } from '@/data'



const Navbar = () => {
  let pathname = usePathname()
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
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
      <div className='flex items-center gap-4'>
        <ToogleMode />
        <ToogleLanguages />
      </div>

    </header>
  )
}

export default Navbar
