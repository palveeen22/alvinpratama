import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { cardVariants, cn, containerVariants, MotionArticle, MotionSection } from '../lib';
import { useLocale, useTranslations } from 'next-intl';

type THeaderTitle = {
  href: string;
  title: string;
  style?: string;
}

export const HeaderTitle = ({ href, title, style }: THeaderTitle) => {
  const locale = useLocale();
  const t = useTranslations("latestInfo")

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(style ? style : "flex justify-between items-center mb-4")}>
      <MotionArticle
        variants={cardVariants}
      >
        <span className="text-xl md:text-2xl font-light">
          {title}
        </span>
      </MotionArticle>
      <Link href={href}>
        <button className="flex items-center gap-2 transition-colors group">
          <span>{t("seeAll")}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </MotionSection>
  )
};