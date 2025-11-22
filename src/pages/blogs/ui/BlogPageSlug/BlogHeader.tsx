import { formatBlogDate, getStackColor, itemVariants, MotionDiv, MotionSpan } from '@/shared/lib';
import Image from 'next/image';
import React from 'react'
import { TBlogDetails } from '@/shared/types';

export const BlogHeader = ({ post }: { post: TBlogDetails }) => {
  return (
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
          className="relative aspect-video rounded-xl overflow-hidden mb-12"
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
  )
};