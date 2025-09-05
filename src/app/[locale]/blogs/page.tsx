import React from 'react';
import { BlogGrid } from './_components/blog-grid';
import { useTranslations } from 'next-intl';
import { MotionDiv, MotionSection } from '@/components/MotionClient';
import { Metadata } from 'next';
import { getUrl } from '@/lib/urls';
import { getHeaders } from '@/lib/getHeaders';
import { getMetadata } from '@/lib/metadata';
import { blogPosts } from '@/data/data';

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Blog";
  const description =
    "Explore practical articles, guides, and tutorials on modern web development—covering React, Next.js, TypeScript, and backend tools for developers and product teams.";
  const url = getUrl({ path: (await getHeaders()).path });

  return await getMetadata(
    {
      title: title,
      description: description,
      openGraphArticle: {
        ogUrl: url
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
  const t = useTranslations("blog")

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-14 md:gap-20 flex-grow h-screen"
    >
      <MotionDiv
        variants={sectionVariants}
      >
        <h1 className="text-3xl md:text-5xl dark:text-foreground/100 font-bold text-pretty">{t('pageTitle')}</h1>
        <p className="text-base md:text-xl break-words dark:text-foreground/80 text-pretty">{t('pageDescription')}</p>
      </MotionDiv>
      {blogPosts?.map((blog, idx) => (
        <BlogGrid key={idx} post={blog} />
      ))}
    </MotionSection>
  );
}