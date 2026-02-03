'use client'

import { useState } from 'react'
import { useI18n } from '@/app/i18n/I18nProvider'
import Image from 'next/image'

interface ProjectCarouselProps {
    screenshots: {
        src: string
        alt: string
    }[]
}

export default function ProjectCarousel({ screenshots }: ProjectCarouselProps) {
    const { t } = useI18n()
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    if (screenshots.length === 0) {
        return null
    }

    return (
        <div className="relative w-full">
            {/* Main Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                <Image
                    src={screenshots[currentIndex].src}
                    alt={screenshots[currentIndex].alt}
                    fill
                    className="object-contain p-4"
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Navigation Buttons */}
            {screenshots.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded-full p-2 hover:bg-black dark:hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        aria-label={t('carousel.prev')}
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
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded-full p-2 hover:bg-black dark:hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        aria-label={t('carousel.next')}
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
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {screenshots.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {screenshots.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-black dark:bg-white w-8'
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                            aria-label={`${t('carousel.goto')} ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
