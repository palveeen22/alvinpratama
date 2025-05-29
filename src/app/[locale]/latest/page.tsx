import React from 'react'
import { MotionArticle, MotionDiv, MotionSection } from '@/components/MotionClient'
import { projects } from '@/data';
import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import { useLocale, useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { getUrl } from '@/lib/urls';
import { getHeaders } from '@/lib/getHeaders';
import { getMetadata } from '@/lib/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Discover my Latest Project";
  const description =
    "Explore my newest project that blends innovation and performance to deliver top-tier digital solutions. Learn more now!";
  const url = getUrl({ path: (await getHeaders()).path });

  return await getMetadata(
    {
      title: title,
      description: description,
      openGraphArticle: {
        ogUrl: url
      }
    }
  )
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ListProjectPage = () => {
  const t = useTranslations("latestInfo")
  const locale = useLocale();


  return (
    <MotionSection
      className='w-full flex flex-col gap-14 md:gap-20 flex-grow'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionArticle
        className='flex flex-col gap-4'
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
        <header className='flex w-full flex-row items-center justify-between gap-2'>
          <h3 className='text-lg'>{t("lastProject")}</h3>
          <Link
            className='text-foreground/80 hover:text-foreground/90 underline text-sm decoration-wavy hover:decoration-foreground/80 decoration-foreground/60 underline-offset-8'
            // href='https://github.com/palveeen22'
            href={`/${locale}/projects`}
          >
            {t("seeAll")}
          </Link>
        </header>
        <MotionDiv
          className='grid grid-cols-1 lg:grid-cols-2 gap-4'
          variants={containerVariants}
        >

          {projects.map((project, idx) => (
            <MotionDiv key={idx} variants={cardVariants}>
              <ProjectCard project={project} />
            </MotionDiv>
          )).slice(0, 4)}
        </MotionDiv>
      </MotionArticle>
    </MotionSection>
  )
}

export default ListProjectPage
