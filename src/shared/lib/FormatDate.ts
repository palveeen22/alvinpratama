import { format, Locale } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

function formatDate(inputDateString: string) {
  const date = new Date(inputDateString)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Adding 1 to get the correct month (zero-based index)
  const year = date.getFullYear()

  // Pad single-digit day or month with leading zero
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedDay}/${formattedMonth}/${year}`
}


 const formatStacks = (values: string[]) =>
    values.toString().replaceAll(',', ' • ')


// Format date based on locale
function formatDateFn(date: Date, locale: string = 'en') {
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

const formatBlogDate = (date: Date): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
};


export {
  formatDate,
  formatStacks,
  formatDateFn,
  formatBlogDate
}