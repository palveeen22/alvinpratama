'use client'
import { ExternalLink } from 'lucide-react'
import { Card, CardTitle } from './card'
import Link from 'next/link'
import { formatStacks } from '@/lib/utils'
import { TProjectCardProps } from '@/types'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"




const ProjectCard = ({ project }: TProjectCardProps) => {
    return (
        <AlertDialog>
            <div>
                <Card className='transition-all duration-300 hover:-translate-y-2 cursor-pointer'>
                    <div className='flex flex-row w-full justify-between items-center px-6 py-4'>
                        <div className='flex w-4/5 md:items-center md:flex-row  flex-col md:gap-4'>
                            <AlertDialogTrigger asChild>
                                <CardTitle className='text-base'>{project.title}</CardTitle>
                            </AlertDialogTrigger>
                            <p className='text-xs  text-muted-foreground line-clamp-1'>
                                {formatStacks(project.stacks)}
                            </p>
                        </div>
                        <Link href={project.url} target='_blank'>
                            <ExternalLink size={18} />
                        </Link>
                    </div>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>{project.title}</AlertDialogTitle>
                            <AlertDialogDescription>
                                {project.desc}
                            </AlertDialogDescription>
                            <AlertDialogDescription>
                                {formatStacks(project.stacks)}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </Card>
            </div>
        </AlertDialog>
    )
}

export default ProjectCard
