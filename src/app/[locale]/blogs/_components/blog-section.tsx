import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { blogPosts } from '@/data/data';
import { formatBlogDate } from '@/lib/format-date';
import Link from 'next/link';

export const BlogSection = () => {
  const locale = useLocale();
  const t = useTranslations()

  return (
    <section>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-light">{t("navbarLabel.blog")}</h1>
       <Link href={`${locale}/blogs`}>
        <button className="flex items-center gap-2 transition-colors group">
          <span>{t("latestInfo.seeAll")}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
       </Link>
      </div>

      <article className='flex flex-col gap-4'>
        {blogPosts?.map((blog, idx) => (
          <Link
            href={`/${locale}/blogs/${blog.slug}`}
            key={idx}
            className='group flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 md:gap-4 text-sm md:text-base'
          >
            <span className='group-hover:underline decoration-wavy underline-offset-4'>
              {blog?.title}
            </span>
            <span className='self-end md:self-auto'>
              {formatBlogDate(blog?.createdAt)}
            </span>
          </Link>
        ))}
      </article>

    </section>
  );
};