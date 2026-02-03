"use client"

import { useI18n } from '@/app/i18n/I18nProvider'
import ProjectCard from './ProjectCard'
import type { Project } from '@/app/data/projects'

interface ProjectsSectionClientProps {
  projects: Project[]
}

export default function ProjectsSectionClient({ projects }: ProjectsSectionClientProps) {
  const { t } = useI18n()

  return (
    <div id="works" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
        {t('projects.kicker')}
      </h4>
      <h2 className="text-center text-5xl font-Ovo text-black dark:text-white">
        {t('projects.title')}
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
        {t('projects.subtitle')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <a
        href="https://github.com/kodjozecodeur/README"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-500 transition-colors"
      >
        {t('projects.showMore')}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}
