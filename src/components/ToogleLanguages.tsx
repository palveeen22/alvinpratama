'use client'
import React, { MouseEventHandler, useTransition } from 'react';
import { Button } from './ui/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './Dropdown';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';

export function ToogleLanguages() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();

    const onSelectChange: MouseEventHandler<HTMLDivElement> = (event) => {
        const nextLocale = event.currentTarget.dataset.value;
        console.log(nextLocale);
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Languages className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'>Ru</Languages>
                    <Languages className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'>En</Languages>
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem data-value="en" onClick={onSelectChange}>
                    En
                </DropdownMenuItem>
                <DropdownMenuItem data-value="ru" onClick={onSelectChange}>
                    Ru
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
