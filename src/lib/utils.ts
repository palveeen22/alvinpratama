import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, Locale } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export default function formatDate(inputDateString: string) {
  const date = new Date(inputDateString)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Adding 1 to get the correct month (zero-based index)
  const year = date.getFullYear()

  // Pad single-digit day or month with leading zero
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedDay}/${formattedMonth}/${year}`
}


export const formatStacks = (values: string[]) =>
    values.toString().replaceAll(',', ' • ')


// Format date based on locale
export function formatDateFn(date: Date, locale: string = 'en') {
  const localeMap: Record<string, Locale> = {
    'en': enUS,
    'ru': ru,
  };

  return format(
    new Date(date), 
    'MMMM d, yyyy', 
    { locale: localeMap[locale] || enUS }
  );
}