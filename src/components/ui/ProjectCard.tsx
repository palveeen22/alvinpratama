import { ExternalLink } from 'lucide-react'
import { Card, CardTitle } from './card'
import Link from 'next/link'
import { formatStacks } from '@/lib/utils'
import { TProjectCardProps } from '@/types'
import { useLocale } from 'next-intl'




const ProjectCard = ({ project }: TProjectCardProps) => {
  const locale = useLocale();

  return (
    <Link href={`/${locale}/projects/${project?.id}`}>
      <Card className='transition-all duration-300 hover:-translate-y-2 cursor-pointer'>
        <div className='flex flex-row w-full justify-between items-center px-6 py-4'>
          <div className='flex w-4/5 justify-start flex-col md:gap-4'>
            <CardTitle className='text-base'>{project.title}</CardTitle>
            <p className='text-xs  text-muted-foreground line-clamp-1'>
              {formatStacks(project.stacks)}
            </p>
          </div>
          <span>
            <ExternalLink size={18} />
          </span>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
