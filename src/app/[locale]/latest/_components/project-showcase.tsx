import React from 'react';
import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
import { projectsLatest } from '@/data';
import { useLocale, useTranslations } from 'next-intl';
// import { MotionDiv } from '@/components/MotionClient';
import Link from 'next/link';
import { ProjectCard } from './project-card';

export const ProjectShowcase = () => {
  const locale = useLocale();
  const t = useTranslations("latestInfo")

  // const containerVariants = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: { opacity: 1, x: 0 },
  // };

  return (
    <section>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-light">{t("header")}</h1>
        <Link href={`/${locale}/projects`}>
          <button className="flex items-center gap-2 transition-colors group">
            <span>{t("seeAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Mobile: Horizontal scroll, Desktop: Grid */}
      <ProjectCard project={projectsLatest} />
    </section>
  );
};