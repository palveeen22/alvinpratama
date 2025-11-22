import { getStackColor, itemVariants, MotionDiv, MotionSpan } from '@/shared/lib';
import { TProjectDetail } from '@/shared/types';
import React from 'react'

export const ProjectDetailsTechStack = ({ project }: { project: TProjectDetail }) => {
  return (
    <MotionDiv
      className="mb-8"
      variants={itemVariants}
    >
      <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack, index) => {
          const bgColorClass = getStackColor(stack);
          const borderColorClass = bgColorClass.replace('bg-', 'border-');

          return (
            <MotionSpan
              key={index}
              className={`py-1 px-3 rounded-full text-sm font-medium ${bgColorClass} bg-opacity-20 border border-opacity-30`}
              style={{ borderColor: `var(--${borderColorClass.split('-')[1]}-${borderColorClass.split('-')[2]})` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {stack}
            </MotionSpan>
          );
        })}
      </div>
    </MotionDiv>
  )
};