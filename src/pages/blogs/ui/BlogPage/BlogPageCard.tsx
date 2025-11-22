'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import { TBlogDetails } from '@/shared/types';
import { formatBlogDate } from '@/shared/lib';

type BlogPageCardProps = {
  blog: TBlogDetails;
  locale?: string;
};

export const BlogPageCard = ({
  blog,
  locale = 'en'
}: BlogPageCardProps) => {

  return (
    <Link
      href={`/${locale}/blogs/${blog?.slug}`}
      className="group block"
    >
      <div className="flex flex-col gap-4">
        {/* Image Container */}
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl">
          <Image
            src={blog?.coverImage}
            alt={`${blog?.title} Blogs | Alvin Pratama`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-3xl"
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Date and Like */}
        <div className="flex items-center">
          <span className="text-sm font-light">
            {formatBlogDate(blog?.createdAt)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium leading-snug hover:underline decoration-dashed underline-offset-8 transition-colors">
          {blog?.title}
        </h3>

        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/assets/me.jpeg"
              alt={blog?.author}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm font-medium">
            {blog?.author}
          </span>
        </div>
      </div>
    </Link>
  );
};