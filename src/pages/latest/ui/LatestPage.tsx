import { useLocale, useTranslations } from 'next-intl';
import { ProjectCard } from '@/widgets/ProjectCard';
import { HeaderTitle } from '@/shared/ui';
import { containerVariants, getLocalizedProjects, MotionDiv, MotionSection } from '@/shared/lib';
import { blogPosts } from '@/pages/blogs/model/models';
import { LatestBlogCard } from './LatestBlogCard';
import { Locale } from '@/shared/types';
import { projects } from '@/pages/projects/model/projects';

type LatestPageProps = {
  data: "project" | "blog";
};

export const LatestPage = ({ data }: LatestPageProps) => {
  const locale = useLocale();
  const tLatest = useTranslations("latestInfo");
  const tBlog = useTranslations("blog");

  const projectList = getLocalizedProjects(projects, locale as Locale);

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data === 'project' ? (
        <>
          <HeaderTitle
            href={`/${locale}/projects`}
            title={tLatest("header")}
          />
          <MotionDiv
            variants={containerVariants}
            className="
          /* Mobile: Horizontal scroll */
          flex overflow-x-auto gap-4 pb-4 
          scrollbar-hide snap-x snap-mandatory
          /* Tablet and up: Grid layout */
          md:grid md:grid-cols-2 md:gap-2 md:overflow-visible md:pb-0
        "
            style={{
              /* Custom scrollbar styles for mobile */
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE/Edge */
            }}
          >
            {projectList.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale as Locale}
                index={index}
              />
            )).slice(0,2)}
          </MotionDiv>

        </>
      ) : (
        <>
          <HeaderTitle
            href={`/${locale}/blogs`}
            title={tBlog("pageTitle")}
          />
          <div className='flex flex-col gap-4'>
            <LatestBlogCard
              blogs={blogPosts}
              locale={locale}
            />
          </div>
        </>
      )}
    </MotionSection>
  );
};