import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { HeaderBack } from '@/components/header-back';
import { formatDateFn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { getStackColor } from '@/lib/color-proji';
import { MotionDiv, MotionSpan } from '@/components/MotionClient';

const blogPosts = [
  {
    id: '2',
    title: 'Stop Using 100vh for Full-Height Layouts on Mobile: Here’s Why',
    content: `If you're using \`100vh\` for full-height layouts in your CSS, you might be unknowingly creating layout issues — especially on mobile devices.

### 🚫 The Problem:
\`100vh\` measures the viewport height *without accounting for dynamic browser UI elements*, such as the mobile address or navigation bars. This means your layout may look fine on desktop but:
- Content gets cut off on mobile
- Unwanted scrollbars appear
- Elements don't align correctly

### ✅ The Modern Fix: \`100dvh\`
Instead of hardcoding \`height: 100vh;\`, use:

\`\`\`css
height: 100dvh;
\`\`\`

The new \`dvh\` unit (Dynamic Viewport Height) adapts to visible screen size, **even when browser UI changes** — like when the address bar hides on scroll.

### 🧠 TL;DR
- **Before:** \`height: 100vh;\` → breaks layouts on mobile
- **Now:** \`height: 100dvh;\` → mobile-safe and reliable

It’s a tiny change with a big impact that saves hours of layout debugging.`,
    excerpt: 'Still using 100vh in CSS? Discover why 100dvh is the better choice for mobile-friendly full-height layouts.',
    createdAt: new Date('2025-05-01'),
    author: 'Alvin Pratama',
    readingTime: '1 min read',
    coverImage: '/assets/mob.jpeg',
    tags: ['CSS', 'Mobile', 'Responsive Design', 'Web Development']
  }
];


export default function BlogDetailPage({ params }: { params: { id: string, locale: string } }) {
  const { id, locale } = params;
  const t = useTranslations('blog');

  // Find the blog post with matching ID
  const post = blogPosts.find(post => post.id === id);

  // Handle case where post is not found
  if (!post) {
    notFound();
  }

  // Format the date based on locale
  const formattedDate = formatDateFn(post.createdAt, locale);

  // Process content to handle markdown-like formatting (simple version)
  const processedContent = post.content
    .split('\n\n')
    .map((block, index) => {
      // Handle code blocks
      if (block.startsWith('```') && block.endsWith('```')) {
        const language = block.split('\n')[0].replace('```', '');
        const code = block.split('\n').slice(1, -1).join('\n');

        return (
          <div key={index} className="my-6 rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm capitalize">{language}</div>
            <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      // Handle headings (e.g. ### Title)
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {block.replace('### ', '')}
          </h3>
        );
      }

      // Handle unordered lists (lines starting with "- ")
      if (block.startsWith('- ')) {
        const items = block.split('\n').map((line, idx) => (
          <li key={idx} className="my-1">{line.replace('- ', '')}</li>
        ));
        return <ul key={index} className="list-disc pl-6 my-4">{items}</ul>;
      }

      // Handle inline code (`like this`)
      const parts = block.split(/(`[^`]+`)/g).map((part, idx) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={idx} className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{part.slice(1, -1)}</code>;
        }
        return part;
      });

      return <p key={index} className="my-6 text-lg leading-relaxed">{parts}</p>;
    });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <article className="min-h-screen flex flex-col">
      {/* Back button */}
      <HeaderBack backText={t('back')} />

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.createdAt.toISOString()}>{formattedDate}</time>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => {
            const bgColorClass = getStackColor(tag);
            const borderColorClass = bgColorClass.replace('bg-', 'border-');

            return (
              <MotionSpan
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`py-1 px-3 rounded-full text-sm font-medium ${bgColorClass} bg-opacity-20 border border-opacity-30`}
                style={{ borderColor: `var(--${borderColorClass.split('-')[1]}-${borderColorClass.split('-')[2]})` }}
              >
                {tag}
              </MotionSpan>
            );
          })}
        </div>


        {/* Cover image (if available) */}
        {post.coverImage && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
      </header>

      {/* Article content */}
      <MotionDiv
        variants={itemVariants}
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        {processedContent}
      </MotionDiv>
    </article>
  );
}