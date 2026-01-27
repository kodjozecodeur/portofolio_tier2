import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/app/data/projects'
import ProjectModal from '@/app/components/ProjectModal'

interface InterceptedProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function InterceptedProjectPage({ params }: InterceptedProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectModal project={project} />
}
