import React from 'react';
import { BlogGrid } from './_components/blog-grid';
import { useTranslations } from 'next-intl';
import { MotionDiv, MotionSection } from '@/components/MotionClient';

const blogPosts = [
  {
    id: '2',
    title: 'Still using 100vh for full-height layouts in your CSS?',
    content: `You might be unintentionally breaking your mobile layouts. Why? ❌ 100vh doesn't account for dynamic browser UI (like the address bar), especially on mobile. So even though it looks like full height, part of your content might get cut off or cause awkward scroll behavior. The fix? ✅ Use 100dvh instead. It dynamically adapts to the actual visible screen height — even when the browser UI changes. It's a one-line change that can save you hours of layout debugging. /* Problematic on mobile / height: 100vh; / Mobile-friendly */ height: 100dvh; Small detail. Big impact.`,
    excerpt: 'You might be unintentionally breaking your mobile layouts with 100vh. Here\'s the fix.',
    createdAt: new Date('2025-05-01')
  }
];

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
      className="w-full flex flex-col gap-14 md:gap-20 flex-grow"
      >
      <MotionDiv
        variants={sectionVariants}
        >
        <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
        <p className="text-xl">{t('pageDescription')}</p>
      </MotionDiv>
      <BlogGrid posts={blogPosts} />
    </MotionSection>
  );
}