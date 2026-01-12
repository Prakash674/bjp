import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function EventsSlideshow() {
  // All event images except principal-photo.png
  const eventImages = [
    '/school-function.png',
    '/IMG_6908.jpg',
    '/IMG_6908.jpg',
    '/IMG_6908.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [eventImages.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length)
  }

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Current Image */}
          <img
            src={eventImages[currentIndex]}
            alt={`School event ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            key={currentIndex}
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-school-blue p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-school-blue p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
