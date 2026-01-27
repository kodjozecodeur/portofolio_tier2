'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Project {
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

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const firstScreenshot = project.screenshots[0]

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
    >
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {firstScreenshot && (
          <Image
            src={firstScreenshot.src}
            alt={firstScreenshot.alt}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 bg-white dark:bg-darkTheme">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-black/5 dark:bg-white/10 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Project Title & Summary */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{project.summary}</p>
        </div>
      </div>
    </Link>
  )
}
