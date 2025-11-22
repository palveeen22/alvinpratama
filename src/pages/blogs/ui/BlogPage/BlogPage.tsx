import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { containerVariants, getMetadata, getUrl, MotionSection } from '@/shared/lib';
import { blogPosts } from '../../model/models';
import { Icon } from '@/widgets/Icon/ui/Icon';
import { BlogPageCard } from './BlogPageCard';

export const generateMetadata = async ({ params }: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params;

  const title = "Blog";
  const description =
    "Explore practical articles, guides, and tutorials on modern web development—covering React, Next.js, TypeScript, and backend tools for developers and product teams.";

  const baseUrl = getUrl({ path: '' });
  const canonicalUrl = `${baseUrl}/${locale}/projects`;

  return await getMetadata(
    {
      title: title,
      description: description,
      canonicalUrl: canonicalUrl,
      urlData: canonicalUrl,
      openGraphArticle: {
        ogUrl: canonicalUrl
      }
    }
  )
};


export const BlogsPage = () => {
  const locale = useLocale();
  const t = useTranslations("blog")

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-2 flex-grow"
    >
      <div className='flex flex-col gap-8 md:gap-14'>
        <span className='flex flex-col gap-2 items-center text-center'>
          <h1 className='text-3xl md:text-5xl'>The Alvin Times</h1>
          <h3 className='text-base md:text-xl'>where coding meets small stories ⋅ and everyday exploration</h3>
        </span>
        <article className='flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Written by</span>
            <span className='text-base'>Alvin</span>
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>Connect</span>
            <div>
              <Icon />
            </div>
          </div>
        </article>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {blogPosts
            ?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((blog, idx) => (
              <BlogPageCard
                key={idx}
                blog={blog}
                locale={locale}
              />
            ))}
        </div>
      </div>
    </MotionSection>
  );
}