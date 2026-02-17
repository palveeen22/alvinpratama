'use client';

import React, { useMemo } from 'react';
import { TBlogDetails } from '@/shared/types';
import { formatBlogDate, MotionDiv } from '@/shared/lib';

type TProps = {
  blogs: TBlogDetails[];
  locale: string;
};

export const LatestBlogCard = ({ blogs, locale }: TProps) => {
  const latestBlogs = useMemo(() => {
    return blogs
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )
      .slice(0, 3);
  }, [blogs]);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      {latestBlogs.map((blog, index) => (
        <a
          key={blog.id}
          href={`/${locale}/blogs/${blog.slug}`}
          className="
            group block
            text-sm md:text-base
            text-foreground/90
            transition-colors
          "
        >
          <div className="flex items-baseline justify-between gap-4">
            <span
              className="
                font-medium
                group-hover:underline
                group-hover:decoration-dashed
                group-hover:underline-offset-4
              "
            >
              {blog.title}
            </span>

            <span className="text-xs text-foreground/50 whitespace-nowrap">
              {formatBlogDate(blog.createdAt)}
            </span>
          </div>
        </a>
      ))}
    </MotionDiv>
  );
};
