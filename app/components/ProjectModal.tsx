'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
import ProjectCarousel from './ProjectCarousel'

interface ProjectModalProps {
  project: Project
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const router = useRouter()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const closeModal = useCallback((e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    // Prefer back to close intercepted route; fallback to home when no history.
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
      return
    }
    // Using replace to avoid adding to history stack
    router.replace('/')
  }, [router])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    // Focus close button on mount
    closeButtonRef.current?.focus()

    // Handle ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [router, closeModal])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-darkTheme rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeModal(e)
          }}
          type="button"
          className="absolute top-4 right-4 z-10 p-2 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded-full hover:bg-black dark:hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div>
            <h1 id="modal-title" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{project.subtitle}</p>
          </div>

          {/* Carousel */}
          <ProjectCarousel screenshots={project.screenshots} />

          {/* Overview Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </section>

          {/* What I Built Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">What I Built</h2>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Stack:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tags Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-md text-sm text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                >
                  View Live
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
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                >
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
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
