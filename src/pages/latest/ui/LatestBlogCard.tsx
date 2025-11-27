'use client';

import { TBlogDetails } from '@/shared/types';
import React, { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionButton, MotionDiv } from '@/shared/lib';
import { LatestNotification } from './LatestNotification';

type TProps = {
  blogs: TBlogDetails[];
  locale: string;
};

export const LatestBlogCard = ({ blogs, locale }: TProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const latestBlogs = useMemo(() => {
    return blogs
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, []);

  return (
    <div className="relative">
      <MotionDiv
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <span className="text-lg text-card-foreground">
          Blogs
        </span>
        
        <MotionButton
          onClick={() => setIsExpanded(false)}
          className="px-4 py-2 bg-card hover:bg-card/50 text-card-foreground text-sm font-medium rounded-full transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          Show Less
        </MotionButton>
      </MotionDiv>
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <MotionDiv
            key="collapsed"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.15 }
            }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(true);
              }}
              className="cursor-pointer"
            >
              <LatestNotification
                blog={latestBlogs[0]}
                locale={locale}
                index={0}
                isHovered={false}
                isCollapsed={true}
                onHoverStart={() => { }}
                onHoverEnd={() => { }}
              />
            </div>

            {/* Stacked cards behind */}
            {latestBlogs.length > 1 && (
              <>
                <MotionDiv
                  className="absolute top-2 left-2 right-2 h-full bg-white/40 dark:bg-[#363636]/40 rounded-2xl -z-10 shadow-sm"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                />
                {latestBlogs.length > 2 && (
                  <MotionDiv
                    className="absolute top-4 left-4 right-4 h-full bg-white/60 dark:bg-[#363636]/40 rounded-2xl -z-20 shadow-sm"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                )}
              </>
            )}
          </MotionDiv>
        ) : (
          <MotionDiv
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 }
            }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {latestBlogs.map((blog, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <MotionDiv
                  key={blog.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95,
                    transition: { duration: 0.15 }
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                >
                  <LatestNotification
                    blog={blog}
                    locale={locale}
                    index={index}
                    isHovered={isHovered}
                    isCollapsed={false}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  />
                </MotionDiv>
              );
            })}
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};