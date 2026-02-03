import fs from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

export type LocalizedText = {
  en?: string
  fr?: string
}

export interface Project {
  slug: string
  title: string | LocalizedText
  subtitle: string | LocalizedText
  summary: string | LocalizedText
  description: string | LocalizedText
  role: string | LocalizedText
  stack: string[]
  tags: string[]
  screenshots: {
    src: string
    alt: string
  }[]
  links: {
    live?: string
    github?: string
  }
}

const projectsFile = path.join(process.cwd(), 'content', 'projects.json')

const loadProjects = cache(async (): Promise<Project[]> => {
  const raw = await fs.readFile(projectsFile, 'utf8')
  const parsed = JSON.parse(raw) as Project[]
  const normalizeText = (value: unknown) =>
    typeof value === 'string' || (value && typeof value === 'object') ? value : ''

  return parsed
    .map((project) => ({
      ...project,
      slug: String(project.slug ?? ''),
      title: normalizeText(project.title),
      subtitle: normalizeText(project.subtitle),
      summary: normalizeText(project.summary),
      description: normalizeText(project.description),
      role: normalizeText(project.role),
    stack: Array.isArray(project.stack) ? project.stack.map(String) : [],
    tags: Array.isArray(project.tags) ? project.tags.map(String) : [],
    screenshots: Array.isArray(project.screenshots)
      ? project.screenshots.map((shot) => ({
          src: String(shot?.src ?? ''),
          alt: String(shot?.alt ?? ''),
        }))
      : [],
      links: typeof project.links === 'object' && project.links !== null ? project.links : {},
    }))
    .sort((a, b) => {
      const getTitle = (value: Project['title']) =>
        typeof value === 'string' ? value : value?.en ?? value?.fr ?? ''
      return getTitle(a.title).localeCompare(getTitle(b.title))
    })
})

export async function getAllProjects(): Promise<Project[]> {
  return loadProjects()
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await loadProjects()
  return projects.find((project) => project.slug === slug)
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await loadProjects()
  return projects.map((project) => project.slug)
}
