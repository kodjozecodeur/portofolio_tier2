'use client'

import Image from 'next/image'
import Link from 'next/link'
import { resolveLocalized, useI18n } from '@/app/i18n/I18nProvider'
import type { Project } from '@/app/data/projects'
import ProjectLink, { AppleIcon, GooglePlayIcon } from './ProjectLink'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useI18n()
  const firstScreenshot = project.screenshots[0]
  const title = resolveLocalized(project.title, locale)
  const summary = resolveLocalized(project.summary, locale)

  return (
    <article className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white transition-all duration-300 hover:border-black hover:shadow-lg dark:border-gray-700 dark:bg-darkTheme dark:hover:border-white">
      <Link
        href={`/projects/${project.slug}`}
        className="group block focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset dark:focus:ring-white"
      >
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

        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
            <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">{summary}</p>
          </div>
        </div>
      </Link>

      {(project.links.live || project.links.appStore || project.links.playStore) && (
        <div className="flex flex-wrap gap-2 px-6 pb-6">
          {project.links.live && (
            <ProjectLink href={project.links.live} label={t('project.viewLive')} />
          )}
          {project.links.appStore && (
            <ProjectLink href={project.links.appStore} label={t('project.appStore')} icon={<AppleIcon />} />
          )}
          {project.links.playStore && (
            <ProjectLink href={project.links.playStore} label={t('project.playStore')} icon={<GooglePlayIcon />} />
          )}
        </div>
      )}
    </article>
  )
}
