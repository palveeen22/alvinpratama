import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MotionArticle, MotionDiv, MotionSection } from '@/components/MotionClient';
import { Metadata } from 'next';
import { getUrl } from '@/lib/urls';
import { getMetadata } from '@/lib/metadata';
import { blogPosts } from '@/data/data';
import Link from 'next/link';
import { formatBlogDate } from '@/lib/format-date';

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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function BlogsPage() {
  const locale = useLocale();
  const t = useTranslations("blog")

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-14 md:gap-20 flex-grow h-screen"
    >
      <MotionArticle
        variants={sectionVariants}
      >
        <h1 className="text-3xl md:text-5xl dark:text-foreground/100 font-bold text-pretty">{t('pageTitle')}</h1>
        {/* <p className="text-base md:text-xl break-words dark:text-foreground/80 text-pretty">{t('pageDescription')}</p> */}
      </MotionArticle>
      <div
        className='flex flex-col gap-4'>
        {blogPosts
          ?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((blog, idx) => (
            <MotionDiv variants={cardVariants} key={idx}>
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
            </MotionDiv>
          ))}
      </div>
    </MotionSection>
  );
}