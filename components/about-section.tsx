"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FDE2E4] dark:bg-[#1f2937]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-[#ec7894] px-3 py-1 text-sm text-primary-foreground mb-2" >
              Psicóloga Kalynna Moreira
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experienced Psychologist Dedicated to Your Well-being
            </h2>
            <p className="text-muted-foreground md:text-xl">
              With over 15 years of experience, I provide compassionate psychological services to help you navigate
              life's challenges and achieve lasting well-being.
            </p>
            <div className="space-y-4 mt-6">
              <p>
                I believe in a holistic approach to mental health that considers the whole person—mind, body, and
                spirit. My practice is grounded in evidence-based techniques while being flexible enough to adapt to
                your unique needs and circumstances.
              </p>
              <p>
                Whether you're dealing with anxiety, depression, relationship issues, or seeking personal growth, I'm
                here to provide a safe, non-judgmental space where you can explore your thoughts and feelings.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative lg:ml-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl w-full shadow-xl">
              <Image
                src="/Kalynna.jpg"
                alt="Psicóloga Kalynna Moreira"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Psicóloga Kalynna Moreira</h3>
                <p className="text-white/80">Ph.D. Clinical Psychology</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-medium">10+ Anos de Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}