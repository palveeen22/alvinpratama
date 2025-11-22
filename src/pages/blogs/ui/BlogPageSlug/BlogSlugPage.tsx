import React from 'react';
import { notFound } from 'next/navigation';
import { HeaderBack } from '@/shared/ui/HeaderBack';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { getMetadata, getUrl, MotionDiv, renderMarkdown } from '@/shared/lib';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { BlogImage } from './BlogImage';
import { blogPosts } from '../../model/models';

type SupportedLocale = 'en' | 'ru';

function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === 'en' || locale === 'ru';
}

const flattenedBlogPosts = blogPosts.flat();

export async function generateStaticParams() {
  return flattenedBlogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: {
  params: Promise<{ slug: string, locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params;

  // Validate locale
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const post = flattenedBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post does not exist.',
    };
  }

  const baseUrl = getUrl({ path: '' });
  const canonicalUrl = `${baseUrl}/${locale}/blogs/${slug}`;

  const publishedTime = post.createdAt.toISOString();

  return await getMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    imageUrl: post.coverImage,
    tags: post.tags,
    canonicalUrl: canonicalUrl,
    urlData: canonicalUrl,
    openGraphArticle: {
      publishedTime,
      section: post.tags[0] || "Blog",
      ogUrl: canonicalUrl
    }
  });
}

export const BlogSlugPage = ({ params }: { params: { slug: string, locale: string } })  => {
  const { slug } = params;
  const t = useTranslations('blog');

  const post = flattenedBlogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <article className="min-h-screen flex flex-col">
      <HeaderBack backText={t('back')} />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <BlogHeader post={post} />
        <BlogContent processedContent={renderMarkdown(post?.content)} />
        <BlogImage post={post} />
      </MotionDiv>
    </article>
  );
}