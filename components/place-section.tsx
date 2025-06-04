"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const carouselImages = [
  { src: "/Sala 03.jpg", alt: "Sala de atendimento 1" },
  { src: "/Sala 5.jpg", alt: "Sala de atendimento 2" },
  { src: "/SALA 5 (1).jpg", alt: "Sala de atendimento 3" },
]

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleSlides = () => {
    const total = carouselImages.length
    const center = currentIndex
    const left = (center - 1 + total) % total
    const right = (center + 1) % total
    return [left, center, right]
  }

  const [leftIndex, centerIndex, rightIndex] = getVisibleSlides()

  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#FDE2E4] dark:from-background dark:to-muted/10 py-20" id="clinic">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 px-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Um lugar acolhedor para o seu cuidado
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Conheça o ambiente da clínica, pensado para proporcionar conforto, privacidade e tranquilidade em cada sessão.
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center max-w-[1200px] mx-auto px-4">
        {/* Botão anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-[#ec7894] text-white rounded-full hover:bg-primary/80"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative flex items-center justify-center w-full gap-4">
          {/* Miniatura esquerda (desktop only) */}
          <div className="hidden md:block -mr-24 z-0 w-[350px] h-[200px] opacity-60 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow">
            <Image
              src={carouselImages[leftIndex].src}
              alt={carouselImages[leftIndex].alt}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Imagem principal (mobile responsiva) */}
          <div className="w-[85%] max-w-[300px] md:w-[600px] h-[250px] md:h-[400px] z-10 scale-100 transition-all duration-500 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={carouselImages[centerIndex].src}
              alt={carouselImages[centerIndex].alt}
              width={800}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Miniatura direita (desktop only) */}
          <div className="hidden md:block -ml-24 z-0 w-[350px] h-[200px] opacity-60 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow">
            <Image
              src={carouselImages[rightIndex].src}
              alt={carouselImages[rightIndex].alt}
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Botão próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-[#ec7894] text-white rounded-full hover:bg-primary/80"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
