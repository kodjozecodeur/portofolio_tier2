import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/app/data/projects'
import ProjectPageClient from '@/app/components/ProjectPageClient'

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs()
    return slugs.map((slug) => ({
        slug,
    }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return <ProjectPageClient project={project} />
}
