import { itemVariants, MotionDiv, MotionSpan } from '@/shared/lib'
import { TProjectDetail } from '@/shared/types';
import React from 'react'

export const ProjectDetailsKeywoard = ({ project }: { project: TProjectDetail }) => {
  return (
    <MotionDiv
      className="mb-8"
      variants={itemVariants}
    >
      <h2 className="text-xl font-bold mb-4">Keywords</h2>
      <div className="flex flex-wrap gap-2">
        {project.keywords.map((keyword, index) => (
          <MotionSpan
            key={index}
            className="py-1 px-3 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {keyword}
          </MotionSpan>
        ))}
      </div>
    </MotionDiv>
  )
};