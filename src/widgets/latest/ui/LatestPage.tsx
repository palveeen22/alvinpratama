import { useLocale, useTranslations } from 'next-intl';
import { ProjectCard } from '@/widgets/ProjectCard';
import { projectsLatest } from '../model/latest';
import { HeaderTitle } from '@/shared/ui';
import { containerVariants, MotionSection } from '@/shared/lib';
import { blogPosts } from '@/pages/blogs/model/models';
import { LatestBlogCard } from './LatestBlogCard';

type LatestPageProps = {
  data: "project" | "blog";
};

export const LatestPage = ({ data }: LatestPageProps) => {
  const locale = useLocale();
  const tLatest = useTranslations("latestInfo");
  const tBlog = useTranslations("blog");

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
          <ProjectCard project={projectsLatest} />
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