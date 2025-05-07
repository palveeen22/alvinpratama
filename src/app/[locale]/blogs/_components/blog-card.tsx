'use client'

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { formatDistance } from 'date-fns';
import { MotionArticle } from '@/components/MotionClient';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: Date;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }:BlogCardProps) => {
  const locale = useLocale();
  
  // // Choose date-fns locale based on the app locale
  // const dateLocale = locale === 'ru' ? ru : enUS;
  
  // // Format the date relative to today (e.g. "2 days ago")
  // const formattedDate = formatDistance(
  //   new Date(post.createdAt),
  //   new Date(),
  //   { addSuffix: true, locale: dateLocale }
  // );

  // Get excerpt or truncate content if no excerpt
  const displayExcerpt = post.excerpt || post.content.substring(0, 150) + '...';
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25 
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <MotionArticle
      className="rounded-lg overflow-hidden border h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link href={`/${locale}/blogs/${post.id}`}>
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-2">
            {post.title}
          </h2>
          {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {formattedDate}
          </p> */}
          <p className="mb-4 flex-grow">
            {displayExcerpt}
          </p>
          <div className="flex justify-between items-center mt-auto pt-4 border-t">
            <span className="font-medium text-sm hover:underline">
              Read more
            </span>
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </MotionArticle>
  );
};