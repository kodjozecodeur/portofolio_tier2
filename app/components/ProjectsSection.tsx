import { getAllProjects } from '@/app/data/projects'
import ProjectsSectionClient from './ProjectsSectionClient'

export default async function ProjectsSection() {
  const projects = await getAllProjects()
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
    )

  return <ProjectsSectionClient projects={featuredProjects} />
}
