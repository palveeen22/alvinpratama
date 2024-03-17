import React from 'react'
import { MotionArticle, MotionDiv, MotionSection } from '@/components/MotionClient'
import { project } from '@/data';
import Link from 'next/link';
import { projects } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';



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
            <MotionArticle
                className='flex flex-col gap-6'
                variants={sectionVariants}
            >
                <header className='flex w-full flex-row items-center justify-between gap-2'>
                    <h3 className='text-lg'>Latest projects</h3>
                    <Link
                        className='text-foreground/80 hover:text-foreground/90 underline text-sm decoration-wavy hover:decoration-foreground/80 decoration-foreground/60 underline-offset-8'
                        href='https://github.com/rhmnaulia'
                        target='_blank'
                    >
                        See all projects
                    </Link>
                </header>
                <MotionDiv
                    className='grid grid-cols-2 gap-4'
                    variants={containerVariants}
                >
                    {projects.map((project, idx) => (
                        <MotionDiv key={idx} variants={cardVariants}>
                            <ProjectCard project={project} />
                        </MotionDiv>
                    ))}
                </MotionDiv>
            </MotionArticle>

        </MotionSection>
    )
}

export default page