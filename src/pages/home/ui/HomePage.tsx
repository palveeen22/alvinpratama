import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { containerVariants, getHeaders, getMetadata, getUrl, MotionArticle, MotionSection, sectionVariants } from '@/shared/lib';
import { LatestPage } from '@/pages/latest';
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
        <h1 className='text-xl md:text-2xl dark:text-foreground/100 font-light text-pretty'>
          {t('subTitle')}
        </h1>
      </MotionArticle>
      <LatestPage data='project' />
      <LatestPage data='blog' />
    </MotionSection>
  )
}