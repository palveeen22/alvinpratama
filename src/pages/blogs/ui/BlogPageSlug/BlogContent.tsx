import { itemVariants, MotionDiv } from '@/shared/lib';
import React from 'react'

export const BlogContent = ({ processedContent }: { processedContent: React.JSX.Element[] }) => {
  return (
    <MotionDiv
      variants={itemVariants}
      className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300"
    >
      {processedContent}
    </MotionDiv>
  )
};