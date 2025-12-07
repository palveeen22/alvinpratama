import React from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { containerVariants, getLocalizedProjects, getMetadata, getUrl, MotionArticle, MotionDiv, MotionSection, sectionVariants } from '@/shared/lib';
import { ProjectCard } from '@/widgets/ProjectCard';
import { projects } from '../../model/projects';
import { Locale } from '@/shared/types';

export const generateMetadata = async ({ params }: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params;

  const title = "Creative Projects & Experiments, Building for Impact";
  const description =
    "Browse my favorite digital experiments and side projects—designed to solve real problems, explore new ideas, and make a meaningful impact through code.";

  const baseUrl = getUrl({ path: '' });
  const canonicalUrl = `${baseUrl}/${locale}/projects`;

  return await getMetadata(
    {
      title: title,
      description: description,
      canonicalUrl: canonicalUrl,
      urlData: canonicalUrl,
      openGraphArticle: {
        ogUrl: canonicalUrl
      }
    }
  )
};


export const ProjectPage = () => {
  const locale = useLocale();
  const t = useTranslations("projectInfo")

  const projectList = getLocalizedProjects(projects, locale as Locale);

  return (
    <MotionSection
      className='w-full flex flex-col gap-14 md:gap-20 flex-grow'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionArticle
        variants={sectionVariants}
      >
        <h1 className='text-3xl md:text-5xl dark:text-foreground/100 font-bold text-pretty'>
          {t("header")}
        </h1>
        <p className='text-base md:text-xl break-words dark:text-foreground/80 text-pretty'>
          {t("desc")}
        </p>
      </MotionArticle>
      <MotionArticle
        className='flex flex-col gap-6'
        variants={sectionVariants}
      >
        {/* <header className='flex w-full flex-row items-center justify-between gap-2'>
          <h3 className='text-lg'>{t("lastProject")}</h3>
        </header> */}
        {/* <MotionDiv
          className='grid grid-cols-1 lg:grid-cols-2 gap-4'
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <MotionDiv key={idx} variants={cardVariants}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </MotionDiv> */}
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
          ))}
        </MotionDiv>
      </MotionArticle>
    </MotionSection>
  )
};