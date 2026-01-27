import fs from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'
import matter from 'gray-matter'

export interface Project {
  slug: string
  title: string
  subtitle: string
  summary: string
  description: string
  role: string
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

const projectsDir = path.join(process.cwd(), 'content', 'projects')

const loadProjects = cache(async (): Promise<Project[]> => {
  const entries = await fs.readdir(projectsDir, { withFileTypes: true })
  const files = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
  const projects = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(projectsDir, file.name)
      const raw = await fs.readFile(filePath, 'utf8')
      const { data } = matter(raw)
      const slug = typeof data.slug === 'string' && data.slug.trim().length > 0
        ? data.slug.trim()
        : file.name.replace(/\.md$/, '')

      return {
        slug,
        title: String(data.title ?? ''),
        subtitle: String(data.subtitle ?? ''),
        summary: String(data.summary ?? ''),
        description: String(data.description ?? ''),
        role: String(data.role ?? ''),
        stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        screenshots: Array.isArray(data.screenshots)
          ? data.screenshots.map((shot: { src?: unknown; alt?: unknown }) => ({
              src: String(shot?.src ?? ''),
              alt: String(shot?.alt ?? ''),
            }))
          : [],
        links: typeof data.links === 'object' && data.links !== null ? data.links : {},
      } satisfies Project
    })
  )

  return projects.sort((a, b) => a.title.localeCompare(b.title))
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
