import type { ReactNode } from 'react'

interface ProjectLinkProps {
  href: string
  label: string
  icon?: ReactNode
}

export function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.09.8 1.2-.24 2.35-.93 3.63-.84 1.54.12 2.7.73 3.47 1.86-3.18 1.9-2.43 6.1.49 7.27-.58 1.53-1.33 3.05-2.68 3.89ZM12.03 7.25C11.88 4.97 13.73 3.1 15.86 2.92c.29 2.63-2.39 4.58-3.83 4.33Z" />
    </svg>
  )
}

export function GooglePlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path fill="#34A853" d="M2.5 3.2c-.3.4-.5 1-.5 1.8v14c0 .8.2 1.4.5 1.8L13.4 12 2.5 3.2Z" />
      <path fill="#4285F4" d="m16.9 14.8-3.5-2.8L2.5 20.8c.5.5 1.3.6 2.1.2l12.3-6.2Z" />
      <path fill="#FBBC04" d="M19.2 10.9 16.9 9.7 13.4 12l3.5 2.8 2.3-1.2c1.3-.7 1.3-2 0-2.7Z" />
      <path fill="#EA4335" d="M4.6 3c-.8-.4-1.6-.3-2.1.2l10.9 8.8 3.5-2.3L4.6 3Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 5h5v5" />
      <path d="m13 11 6-6" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export default function ProjectLink({ href, label, icon }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-black hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:border-white dark:hover:bg-gray-800"
    >
      {icon}
      <span>{label}</span>
      <ExternalLinkIcon />
    </a>
  )
}
