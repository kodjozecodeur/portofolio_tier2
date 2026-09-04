'use client'

import Image from 'next/image'
import { resolveLocalized, useI18n } from '@/app/i18n/I18nProvider'
import type { Project } from '@/app/data/projects'
import ProjectLink, { AppleIcon, GooglePlayIcon } from './ProjectLink'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useI18n()
  const title = resolveLocalized(project.title, locale)
  const summary = resolveLocalized(project.summary, locale)
  const screenshotSlots = Array.from({ length: 3 }, (_, index) => project.screenshots[index])

  return (
    <article className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white transition-all duration-300 hover:border-black hover:shadow-lg dark:border-gray-700 dark:bg-darkTheme dark:hover:border-white">
      <div className="grid grid-cols-2 gap-1 bg-gray-100 p-1 dark:bg-gray-800">
        {screenshotSlots.map((screenshot, index) => (
          <div
            key={screenshot?.src ?? `placeholder-${index}`}
            className={`relative overflow-hidden rounded-md bg-white dark:bg-gray-900 ${
              index === 0 ? 'col-span-2 aspect-video' : 'aspect-[4/3]'
            }`}
          >
            {screenshot ? (
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 15vw, 10vw"
              />
            ) : (
              <span className="flex h-full items-center justify-center p-2 text-center text-[10px] leading-tight text-gray-400 dark:text-gray-500">
                {t('project.screenshotComingSoon')}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">{title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{summary}</p>
        </div>

        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{t('project.role')}</span>{' '}
            {resolveLocalized(project.role, locale)}
          </p>
          <div>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{t('project.stack')}</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {(project.links.live || project.links.appStore || project.links.playStore || project.links.github) && (
          <div className="flex flex-wrap gap-2">
            {project.links.live && <ProjectLink href={project.links.live} label={t('project.viewLive')} />}
            {project.links.appStore && (
              <ProjectLink href={project.links.appStore} label={t('project.appStore')} icon={<AppleIcon />} />
            )}
            {project.links.playStore && (
              <ProjectLink href={project.links.playStore} label={t('project.playStore')} icon={<GooglePlayIcon />} />
            )}
            {project.links.github && <ProjectLink href={project.links.github} label={t('project.github')} />}
          </div>
        )}
      </div>
    </article>
  )
}
