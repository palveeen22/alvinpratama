import { MotionArticle, MotionSection } from '@/components/MotionClient'
import { SelfInfo } from '@/data/data';
import Icons from '@/components/ui/Icons';
import { useTranslations } from 'next-intl';

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

export default function Home() {
  const t = useTranslations("selfInfo")

  return (
    <MotionSection
      className='w-full flex flex-col justify-center gap-14 md:gap-20 flex-grow'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionArticle
        className='flex flex-col gap-4'
        variants={sectionVariants}
      >
        <h1 className='text-4xl dark:text-foreground/100 font-bold text-pretty'>
          {t('title')}
        </h1>
        <p className='text-xl break-words dark:text-foreground/80 text-pretty text-justify'>
          {t('description')}
        </p>
        <span className='mt-1'>
          <Icons />
        </span>
      </MotionArticle>
    </MotionSection>
  )
}