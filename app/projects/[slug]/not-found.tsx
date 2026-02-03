'use client'

import Link from 'next/link'
import { useI18n } from '@/app/i18n/I18nProvider'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-white dark:bg-darkTheme flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">{t('project.notFound.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('project.notFound.body')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          {t('project.back')}
        </Link>
      </div>
    </div>
  )
}
