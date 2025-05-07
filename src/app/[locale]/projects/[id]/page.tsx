import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import { HeaderBack } from '@/components/header-back';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getStackColor } from '@/lib/color-proji';
import { MotionDiv, MotionP, MotionSpan, MotionSvg, MotionUl } from '@/components/MotionClient';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const t = useTranslations("detail");

  // Get project by ID
  const project = projects.find(project => project.id === id);

  // Handle case where project is not found
  if (!project) {
    notFound();
  }

  return (
    <MotionDiv
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center pb-16">

        {/* Back to List Button */}
        <HeaderBack backText={t("back")} />

        {/* Project Content */}
        <div className="w-full px-4">
          {/* Title Image */}
          {project?.image && (
            <MotionDiv
              className="relative aspect-video rounded-lg overflow-hidden mb-8"
              variants={fadeIn}
            >
              <Image
                src={project?.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </MotionDiv>
          )}

          {/* Project Title and GitHub Link */}
          <MotionDiv
            className="flex justify-between items-start mb-4"
            variants={itemVariants}
          >
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 rounded-md border"
            >
              <span>
                {t('view')}
              </span>
            </Link>
          </MotionDiv>

          {/* Description */}
          <MotionP
            className="text-lg mb-8"
            variants={itemVariants}
          >
            {project.desc}
          </MotionP>

          {/* Tech Stack */}
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

          {/* Keywords */}
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

          {/* Project Details */}
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
                    <MotionSvg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: idx * 0.1 + 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </MotionSvg>
                    {feature}
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
                    <MotionSvg
                      className="w-5 h-5 text-blue-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: idx * 0.1 + 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </MotionSvg>
                    {item}
                  </li>
                </MotionUl>
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}