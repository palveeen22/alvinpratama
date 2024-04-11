'use client'
import React from 'react'
import { MotionSection } from '@/components/MotionClient'
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

const page = () => {
    const t = useTranslations("coming")

    return (
        <MotionSection
            className='w-full flex flex-col gap-14 md:gap-20 flex-grow'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {t("text")}
        </MotionSection>
    )
}

export default page