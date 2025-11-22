'use client'

import React, { MouseEventHandler, useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Check } from 'lucide-react';
import { Button } from '@/shared/ui';
import { languages } from '@/widgets/Navbar/model/language';

export function ToggleLanguages() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale() as keyof typeof languages;

  const onSelectChange: MouseEventHandler<HTMLDivElement> = (event) => {
    const nextLocale = event.currentTarget.dataset.value;

    if (nextLocale === localeActive) return;

    const pathWithoutLocale = pathname?.replace(new RegExp(`^/${localeActive}`), '') || '/';

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