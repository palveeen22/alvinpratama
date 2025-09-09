import { MotionArticle, MotionSection } from '@/components/MotionClient'
import { useTranslations } from 'next-intl';
import { ProjectShowcase } from './latest/_components/product-card';
import { BlogSection } from './blogs/_components/blog-section';

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

export default function Home() {
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

      <ProjectShowcase />

      <BlogSection />

    </MotionSection>
  )
}