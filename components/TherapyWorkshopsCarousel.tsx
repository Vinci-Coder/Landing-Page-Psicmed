"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const workshopImages = [
  { src: "/SALA 5 (1).jpg", alt: "Oficina Terapêutica 1" },
  { src: "/Sala 03.jpg", alt: "Oficina Terapêutica 2" },
]

export default function TherapyWorkshopsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workshopImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workshopImages.length) % workshopImages.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleSlides = () => {
    const total = workshopImages.length
    const center = currentIndex
    const left = (center - 1 + total) % total
    const right = (center + 1) % total
    return [left, center, right]
  }

  const [leftIndex, centerIndex, rightIndex] = getVisibleSlides()

  return (
    <section className="bg-[#D4E9F7] dark:from-background dark:to-muted/10 py-20" id="workshops">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 px-4">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2">
            Oficinas Terapêuticas
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Criatividade e Emoção em Movimento
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Registros visuais das nossas oficinas que acolhem, despertam e conectam.
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center max-w-[1200px] mx-auto px-4">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-primary text-white rounded-full hover:bg-primary/80"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative flex items-center justify-center w-full gap-4">
          <div className="hidden md:block -mr-24 z-0 w-[350px] h-[200px] opacity-60 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow">
            <Image
              src={workshopImages[leftIndex].src}
              alt={workshopImages[leftIndex].alt}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[85%] max-w-[300px] md:w-[600px] h-[250px] md:h-[400px] z-10 scale-100 transition-all duration-500 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={workshopImages[centerIndex].src}
              alt={workshopImages[centerIndex].alt}
              width={800}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="hidden md:block -ml-24 z-0 w-[350px] h-[200px] opacity-60 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow">
            <Image
              src={workshopImages[rightIndex].src}
              alt={workshopImages[rightIndex].alt}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-primary text-white rounded-full hover:bg-primary/80"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
