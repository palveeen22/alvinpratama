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
      <MotionArticle variants={sectionVariants} className="space-y-4">
        <h1 className="text-base md:text-lg text-foreground/80 text-pretty">
          {t('title')}
        </h1>

        <h2 className="text-base md:text-lg text-foreground/80 text-pretty">
          {t('subTitle')}
        </h2>

        <p className="text-base md:text-lg text-foreground/80 text-pretty">
          {t('description')}
        </p>

        <p className="text-base md:text-lg text-foreground/80 text-pretty">
          {t('subDesc')}
        </p>
      </MotionArticle>

      <LatestPage data='project' />
      <LatestPage data='blog' />
    </MotionSection>
  )
}