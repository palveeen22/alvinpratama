import { ExternalLink } from 'lucide-react'
import { Card, CardTitle } from './card'
import Link from 'next/link'
import { formatStacks } from '@/lib/utils'
import { TProjectCardProps } from '@/types'




const ProjectCard = ({ project }: TProjectCardProps) => {
    return (
        <Link href={project.url} target='_blank'>
            <Card className='transition-all duration-300 hover:-translate-y-2'>
                <div className='flex flex-row w-full justify-between items-center px-6 py-4'>
                    <div className='flex w-4/5 md:items-center md:flex-row  flex-col md:gap-4'>
                        <CardTitle className='text-base'>{project.title}</CardTitle>
                        <p className='text-xs  text-muted-foreground line-clamp-1'>
                            {formatStacks(project.stacks)}
                        </p>
                    </div>
                    <ExternalLink size={18} />
                </div>
            </Card>
        </Link>
    )
}

export default ProjectCard
