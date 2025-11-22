import { itemVariants, MotionDiv, MotionUl } from '@/shared/lib';
import { TProjectDetail } from '@/shared/types';

export const ProjecDetailsFeature = ({ project }: { project: TProjectDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <MotionDiv
        className="rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        variants={itemVariants}
        whileHover={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Features</h2>
        {project?.features?.map((feature, idx) => (
          <MotionUl
            key={idx}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <li className="flex items-start">
              - {feature}
            </li>
          </MotionUl>
        ))}
      </MotionDiv>

      <MotionDiv
        className="rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        variants={itemVariants}
        whileHover={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Architecture Highlights</h2>
        {project?.architectureHighlights?.map((item, idx) => (
          <MotionUl
            key={idx}
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <li className="flex items-start">
              - {item}
            </li>
          </MotionUl>
        ))}
      </MotionDiv>
    </div>
  )
};