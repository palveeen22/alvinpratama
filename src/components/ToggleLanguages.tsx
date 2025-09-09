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
import { Check } from 'lucide-react';

// Language configuration
const languages = {
  en: { flag: '🇺🇸', label: 'English', short: 'EN' },
  ru: { flag: '🇷🇺', label: 'Русский', short: 'RU' }
} as const;

export function ToggleLanguages() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale() as keyof typeof languages;

  const onSelectChange: MouseEventHandler<HTMLDivElement> = (event) => {
    const nextLocale = event.currentTarget.dataset.value;

    // Don't do anything if same locale is selected
    if (nextLocale === localeActive) return;

    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${localeActive}`), '') || '/';

    // Create the new path with the selected locale
    const newPath = `/${nextLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    startTransition(() => {
      router.replace(newPath);
    });
  };

  const currentLanguage = languages[localeActive];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='gap-2 min-w-[80px]'
          disabled={isPending}
        >
          <span className='text-base'>{currentLanguage?.flag}</span>
          <span className='font-medium text-sm'>{currentLanguage?.short}</span>
          {/* <Languages className='h-4 w-4 opacity-60' /> */}
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[120px]'>
        {Object.entries(languages).map(([locale, lang]) => (
          <DropdownMenuItem
            key={locale}
            data-value={locale}
            onClick={onSelectChange}
            className='flex items-center justify-between cursor-pointer'
            disabled={isPending}
          >
            <div className='flex items-center gap-2'>
              <span className='text-base'>{lang.flag}</span>
              <span>{lang.label}</span>
            </div>
            {localeActive === locale && (
              <Check className='h-4 w-4 text-green-600' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}