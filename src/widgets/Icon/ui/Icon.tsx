import Link from 'next/link'
import { SOCIAL_LINKS } from '../model/icons';

export const Icon = () => {
  return (
    <div className='inline-flex gap-4 mt-1 items-center'>
      {SOCIAL_LINKS.map((item, index) => (
        <Link
          href={item.url}
          target='_blank'
          key={index}
          className='hover:text-muted-foreground transition-colors'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
};