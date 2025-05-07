'use client'
import React, { MouseEventHandler, useTransition } from 'react';
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/Dropdown';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';

export function ToggleLanguages() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const onSelectChange: MouseEventHandler<HTMLDivElement> = (event) => {
    const nextLocale = event.currentTarget.dataset.value;

    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${localeActive}`), '') || '/';

    // Create the new path with the selected locale
    const newPath = `/${nextLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Languages className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Languages className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem data-value="en" onClick={onSelectChange}>
          🇺🇸  En
        </DropdownMenuItem>
        <DropdownMenuItem data-value="ru" onClick={onSelectChange}>
          🇷🇺  Ru
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}