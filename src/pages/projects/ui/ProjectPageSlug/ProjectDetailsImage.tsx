import { fadeIn, MotionDiv } from '@/shared/lib';
import { LocalizedProject } from '@/shared/types';
import Image from 'next/image';
import React from 'react'

export const ProjectDetailsImage = ({ project }: { project: LocalizedProject }) => {
  return (
    <>
      {project?.image && (
        <MotionDiv
          className="relative aspect-video rounded-lg overflow-hidden mb-8"
          variants={fadeIn}
        >
          <Image
            src={project?.image}
            alt={`Project ${project.title} Alvin Pratama`}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </MotionDiv>
      )}
    </>
  )
};