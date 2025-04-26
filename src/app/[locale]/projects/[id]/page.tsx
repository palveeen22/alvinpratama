import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data';
import { HeaderBack } from '@/components/header-back';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

// Project data type
interface ProjectData {
  id: string;
  url: string;
  image: string;
  title: string;
  desc: string;
  stacks: string[];
  keywords: string[];
  features: string[]
  architectureHighlights: string[]
}

// Generate dynamic color for stack based on its name
// This ensures every stack gets a consistent color even if not pre-defined
const getStackColor = (stack: string): string => {
  // Pre-defined colors for common technologies
  const commonStacks: Record<string, string> = {
    "TypeScript": "bg-blue-500",
    "JavaScript": "bg-yellow-500",
    "React": "bg-blue-400",
    "React Native": "bg-cyan-500",
    "Next.js": "bg-black",
    "Angular": "bg-red-600",
    "Vue.js": "bg-emerald-500",
    "Node.js": "bg-green-600",
    "Express": "bg-gray-600",
    "TailwindCSS": "bg-teal-500",
    "Bootstrap": "bg-purple-600",
    "MongoDB": "bg-green-500",
    "Mongoose": "bg-green-600",
    "PostgreSQL": "bg-blue-600",
    "MySQL": "bg-blue-800",
    "Firebase": "bg-yellow-600",
    "Supabase": "bg-emerald-600",
    "GraphQL": "bg-pink-600",
    "Apollo GraphQL": "bg-purple-500",
    "Redux": "bg-purple-400",
    "Zustand": "bg-indigo-400",
    "Redis": "bg-red-500",
    "Docker": "bg-blue-600",
    "AWS": "bg-yellow-700",
    "Stripe": "bg-indigo-500",
    "Chart.js": "bg-pink-500",
    "D3.js": "bg-orange-600",
    "CSS Modules": "bg-teal-600",
    "SASS": "bg-pink-400",
    "Prisma": "bg-indigo-600"
  };

  // If stack is in our common list, return its color
  if (commonStacks[stack]) {
    return commonStacks[stack];
  }

  // Otherwise generate a color based on the stack name
  // This creates a deterministic color based on the string
  const hash = stack.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Use the hash to pick from a few tailwind color options
  const colorOptions = [
    "bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-cyan-500",
    "bg-emerald-500", "bg-violet-500", "bg-fuchsia-500", "bg-rose-500"
  ];

  const colorIndex = Math.abs(hash) % colorOptions.length;
  return colorOptions[colorIndex];
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const locale = useLocale();
  const t = useTranslations("detail")



  // Get project by ID
  const project = projects.find(project => project.id === id);

  // Handle case where project is not found
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center pb-16">

        {/* Back to List Button */}
        <HeaderBack />

        {/* Project Content */}
        <div className="w-full px-4">
          {/* Title Image */}
          {project?.image && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={project?.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Project Title and GitHub Link */}
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 rounded-md border"
            >
              {/* <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg> */}
              <span>
                {t('view')}
              </span>
            </Link>
          </div>

          {/* Description */}
          <p className="text-lg mb-8">{project.desc}</p>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack, index) => {
                const bgColorClass = getStackColor(stack);
                const borderColorClass = bgColorClass.replace('bg-', 'border-');

                return (
                  <span
                    key={index}
                    className={`py-1 px-3 rounded-full text-sm font-medium ${bgColorClass} bg-opacity-20 border border-opacity-30`}
                    style={{ borderColor: `var(--${borderColorClass.split('-')[1]}-${borderColorClass.split('-')[2]})` }}
                  >
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword, index) => (
                <span key={index} className="py-1 px-3 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              {project?.features?.map((feature, idx) => (
                <ul key={idx} className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                </ul>
              ))}
            </div>

            <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">Architecture Highlights</h2>
              {project?.architectureHighlights?.map((item, idx) => (
                <ul key={idx} className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {item}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {/* <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <Image
                    src={`/api/placeholder/300/600`}
                    alt={`Screenshot ${num}`}
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div> */}

          {/* GitHub CTA */}
          {/* <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-3">Explore the Code</h2>
            <p className="mb-4">Check out the repository to see how this project was built</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              View on GitHub
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};