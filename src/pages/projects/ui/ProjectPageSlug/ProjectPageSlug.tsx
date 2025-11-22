import { notFound } from 'next/navigation';
import { HeaderBack } from '@/shared/ui/HeaderBack';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Metadata } from 'next';
import { containerVariants, getMetadata, getUrl, itemVariants, MotionDiv, MotionP } from '@/shared/lib';
import { ProjectDetailsKeywoard } from './ProjectDetailsKeywoard';
import { ProjecDetailsFeature } from './ProjecDetailsFeature';
import { ProjectDetailsTechStack } from './ProjectDetailsTechStack';
import { TProjectDetail } from '@/shared/types';
import { ProjectDetailsImage } from './ProjectDetailsImage';
import { projects } from '../../model/projects';


export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string, locale: string } }): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = projects.find((project: TProjectDetail) => project.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project does not exist.',
    };
  }

  const title = project.metaTitle
  const description = project.metaDescription
  const baseUrl = getUrl({ path: '' });
  const canonicalUrl = `${baseUrl}/${locale}/projects/${slug}`;


  return await getMetadata(
    {
      title: title,
      description: description,
      imageUrl: project.image,
      canonicalUrl: canonicalUrl,
      urlData: canonicalUrl,
      openGraphArticle: {
        ogUrl: canonicalUrl
      }
    }
  )
};


export const ProjectPageSlug = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const t = useTranslations("detail");

  const project = projects.find((project: TProjectDetail) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <MotionDiv
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center pb-16">

        <HeaderBack backText={t("back")} />

        <div className="w-full px-4">
          <ProjectDetailsImage project={project} />

          <MotionDiv
            className="flex justify-between items-start mb-4"
            variants={itemVariants}
          >
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 rounded-md border"
            >
              <span>
                {t('view')}
              </span>
            </Link>
          </MotionDiv>

          <MotionP
            className="text-lg mb-8"
            variants={itemVariants}
          >
            {project.desc}
          </MotionP>

          <ProjectDetailsTechStack project={project} />
          <ProjectDetailsKeywoard project={project} />
          <ProjecDetailsFeature project={project} />
        </div>
      </div>
    </MotionDiv>
  );
}