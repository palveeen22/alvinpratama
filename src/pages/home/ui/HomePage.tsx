import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { getHeaders, getMetadata, getUrl, MotionArticle, MotionSection } from '@/shared/lib';
import { LatestPage } from '@/pages/latest';
import { BlogsPage } from '@/pages/blogs';
import { statTitle } from '../model/selfInfo';

export const metadata = async (): Promise<Metadata> => {
  const title = statTitle;
  const url = getUrl({ path: (await getHeaders()).path });

  return await getMetadata({
    title,
    openGraphArticle: {
      ogUrl: url
    },
  });
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

export const HomePage = () => {
  const t = useTranslations("selfInfo")

  return (
    <MotionSection
      className='w-full flex flex-col gap-8 md:gap-14 flex-grow'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionArticle
        variants={sectionVariants}
      >
        <h1 className='text-2xl dark:text-foreground/100 font-light text-pretty'>
          {t('subTitle')}
        </h1>
      </MotionArticle>
      <LatestPage />
      <BlogsPage />
    </MotionSection>
  )
}