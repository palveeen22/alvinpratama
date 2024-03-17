import React from 'react'
import { MotionArticle, MotionDiv, MotionSection } from '@/components/MotionClient'
import { project } from '@/data';



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
                <h1 className='text-5xl dark:text-foreground/100 font-bold text-pretty'>
                    {project.title}
                </h1>
                <p className='text-xl break-words dark:text-foreground/80 text-pretty'>
                    {project.pharagraph}
                </p>

            </MotionArticle>

        </MotionSection>
    )
}

export default page