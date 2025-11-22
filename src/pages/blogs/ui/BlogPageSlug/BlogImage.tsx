import { TBlogDetails } from '@/shared/types';
import React from 'react'
import Image from 'next/image';
import { itemVariants, MotionDiv } from '@/shared/lib';

export const BlogImage = ({ post }: { post: TBlogDetails }) => {
  return (
    <div className='w-full grid grid-cols-3 gap-2'>
      {post.image1 && (
        <MotionDiv
          variants={itemVariants}
        >
          <div className="sticky top-8">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image1}
                alt={`${post.title} - sidebar image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </MotionDiv>
      )}
      {post.image2 && (
        <MotionDiv
          variants={itemVariants}
        >
          <div className="sticky top-8">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image2}
                alt={`${post.title} - sidebar image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </MotionDiv>
      )}
      {post.image3 && (
        <MotionDiv
          variants={itemVariants}
        >
          <div className="sticky top-8">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image3}
                alt={`${post.title} - sidebar image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </MotionDiv>
      )}
    </div>
  )
};