import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { HeaderBack } from '@/components/header-back';
// import { formatDateFn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { getStackColor } from '@/lib/color-proji';
import { MotionDiv, MotionSpan } from '@/components/MotionClient';
import { getUrl } from '@/lib/urls';
import { getHeaders } from '@/lib/getHeaders';
import { getMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { blogPosts } from '@/data/data';
import { formatBlogDate } from '@/lib/format-date';

// Flatten the nested array structure to get all blog posts
const flattenedBlogPosts = blogPosts.flat();

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = flattenedBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post does not exist.',
    };
  }

  const title = post.metaTitle;
  const description = post.metaDescription;
  const url = getUrl({ path: (await getHeaders()).path });

  return await getMetadata({
    title: title,
    description: description,
    imageUrl: post.coverImage,
    canonicalUrl: `${url}/${post?.slug}`,
    openGraphArticle: {
      ogUrl: url
    }
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string, locale: string } }) {
  const { slug, locale } = params;
  const t = useTranslations('blog');

  // Find the blog post with matching slug from flattened array
  const post = flattenedBlogPosts.find(post => post.slug === slug);

  // Handle case where post is not found
  if (!post) {
    notFound();
  }

  // Format the date based on locale
  // const formattedDate = formatDateFn(post.createdAt, locale);

  // Process content to handle markdown-like formatting (enhanced version)
  const processedContent = post.content
    .split('\n\n')
    .map((block, index) => {
      // Handle code blocks
      if (block.startsWith('```') && block.endsWith('```')) {
        const lines = block.split('\n');
        const language = lines[0].replace('```', '').trim() || 'text';
        const code = lines.slice(1, -1).join('\n');

        return (
          <div key={index} className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 text-sm font-medium capitalize border-b border-gray-200 dark:border-gray-700">
              {language}
            </div>
            <pre className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 overflow-x-auto">
              <code className="text-sm leading-relaxed">{code}</code>
            </pre>
          </div>
        );
      }

      // Handle headings (### Title)
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
            {block.replace('### ', '')}
          </h3>
        );
      }

      // Handle subheadings (## Title)
      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100">
            {block.replace('## ', '')}
          </h2>
        );
      }

      // Handle large headings (# Title)
      if (block.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold mt-12 mb-8 text-gray-900 dark:text-gray-100">
            {block.replace('# ', '')}
          </h1>
        );
      }

      // Handle unordered lists (lines starting with "- ")
      if (block.includes('\n- ') || block.startsWith('- ')) {
        const items = block.split('\n').filter(line => line.startsWith('- ')).map((line, idx) => (
          <li key={idx} className="my-2 text-gray-700 dark:text-gray-300">
            {line.replace('- ', '')}
          </li>
        ));
        return (
          <ul key={index} className="list-disc pl-6 my-6 space-y-1">
            {items}
          </ul>
        );
      }

      // Handle ordered lists (lines starting with numbers)
      if (block.match(/^\d+\. /)) {
        const items = block.split('\n').filter(line => line.match(/^\d+\. /)).map((line, idx) => (
          <li key={idx} className="my-2 text-gray-700 dark:text-gray-300">
            {line.replace(/^\d+\. /, '')}
          </li>
        ));
        return (
          <ol key={index} className="list-decimal pl-6 my-6 space-y-1">
            {items}
          </ol>
        );
      }

      // Handle blockquotes (lines starting with "> ")
      if (block.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 italic text-gray-700 dark:text-gray-300">
            {block.replace('> ', '')}
          </blockquote>
        );
      }

      // Handle inline code, bold, and other formatting
      const formatInlineElements = (text: string) => {
        const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
        
        return parts.map((part, idx) => {
          // Inline code
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code key={idx} className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded text-sm font-mono">
                {part.slice(1, -1)}
              </code>
            );
          }
          // Bold text
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={idx} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          // Italic text
          if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
            return <em key={idx} className="italic">{part.slice(1, -1)}</em>;
          }
          return part;
        });
      };

      // Regular paragraphs
      return (
        <p key={index} className="my-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {formatInlineElements(block)}
        </p>
      );
    });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

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
      {/* Back button */}
      <HeaderBack backText={t('back')} />

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Article header */}
        <MotionDiv variants={itemVariants} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6 gap-2">
            <span className="font-medium">{post.author}</span>
            <span className="hidden sm:inline">•</span>
            <time dateTime={post.createdAt.toISOString()} className="text-sm sm:text-base">
              {formatBlogDate(post?.createdAt)}
            </time>
            <span className="hidden sm:inline">•</span>
            <span className="text-sm sm:text-base bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
              {post.readingTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => {
              const bgColorClass = getStackColor(tag);
              
              return (
                <MotionSpan
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className={`py-2 px-4 rounded-full text-sm font-medium ${bgColorClass} bg-opacity-20 border border-current border-opacity-30 hover:bg-opacity-30 transition-all duration-200`}
                >
                  {tag}
                </MotionSpan>
              );
            })}
          </div>

          {/* Cover image (if available) */}
          {post.coverImage && (
            <MotionDiv 
              variants={itemVariants}
              className="relative aspect-video rounded-xl overflow-hidden mb-12 shadow-lg"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </MotionDiv>
          )}
        </MotionDiv>

        {/* Article content */}
        <MotionDiv
          variants={itemVariants}
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300"
        >
          {processedContent}
        </MotionDiv>
      </MotionDiv>
    </article>
  );
}