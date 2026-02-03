import { getAllProjects } from '@/app/data/projects'
import ProjectsSectionClient from './ProjectsSectionClient'

export default async function ProjectsSection() {
  const projects = await getAllProjects()

  return <ProjectsSectionClient projects={projects} />
}
