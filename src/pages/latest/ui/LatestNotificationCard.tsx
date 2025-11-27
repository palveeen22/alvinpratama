import { formatBlogDate, MotionDiv, MotionP } from '@/shared/lib';
import React from 'react'
import { TBlogDetails } from '@/shared/types';

type TProps = {
  blog: TBlogDetails;
  isHovered: boolean;
}

export const LatestNotificationCard = ({
  blog,
  isHovered,
}: TProps) => (
  <MotionDiv
    className="relative z-10 group bg-card rounded-2xl overflow-hidden"
    animate={{
      y: isHovered ? -6 : 0,
      boxShadow: isHovered
        ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    }}
    transition={{
      duration: 0.2,
      ease: "easeOut"
    }}
  >
    <div className="p-3 md:p-5 lg:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <h3 className="font-medium text-sm md:text-base lg:text-lg text-card-foreground transition-colors line-clamp-2 leading-relaxed">
              {blog.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <span className="text-xs text-muted-foreground whitespace-nowrap font-medium">
            {formatBlogDate(blog.createdAt)}
          </span>
        </div>
      </div>
    </div>
  </MotionDiv>
);