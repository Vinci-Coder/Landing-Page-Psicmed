"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import { UserIcon, UsersIcon, BrainIcon, GraduationCapIcon, HeartHandshakeIcon, MonitorIcon, Sparkles, Lightbulb, Leaf } from "lucide-react"

export default function Services() {
  const services = [
  {
    icon: <UserIcon className="h-6 w-6 text-primary" />,
    title: "Psicoterapia Individual",
    description:
      "Atendimento psicológico para crianças, adolescentes e adultos com base em Gestalt-terapia e TCC (Terapia Cognitivo-Comportamental). Apoio para ansiedade, autoestima, depressão e luto.",
    accentColor: "rgba(79, 124, 172, 0.5)",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-indigo-500" />,
    title: "Psicoterapia Infantil e Orientação de Pais",
    description:
      "Intervenção lúdica para crianças com foco em comportamento e emoções. Orientações práticas e humanizadas para pais.",
    accentColor: "rgba(99, 102, 241, 0.5)",
  },
  {
    icon: <BrainIcon className="h-6 w-6 text-emerald-500" />,
    title: "Avaliação Psicológica e Psicodiagnóstico",
    description:
      "Investigação de aspectos emocionais, cognitivos e comportamentais, com emissão de relatórios técnicos e devolutivas.",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    icon: <GraduationCapIcon className="h-6 w-6 text-amber-500" />,
    title: "Avaliação Neuropsicológica",
    description:
      "Análise aprofundada de funções como atenção, memória, linguagem, percepção e funções executivas.",
    accentColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: <HeartHandshakeIcon className="h-6 w-6 text-pink-500" />,
    title: "Avaliações para Cirurgias",
    description:
      "Avaliação psicológica para procedimentos como cirurgia bariátrica, vasectomia e laqueadura, conforme exigências médicas.",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <MonitorIcon className="h-6 w-6 text-blue-500" />,
    title: "Avaliação para Posse e Porte de Arma",
    description:
      "Emissão de laudo psicológico conforme normas da Polícia Federal para posse e porte de arma de fogo.",
    accentColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-violet-500" />,
    title: "Avaliação de Transtornos do Neurodesenvolvimento",
    description:
      "Triagem e diagnóstico de TEA, TDAH e outros transtornos do neurodesenvolvimento com base em critérios clínicos e cognitivos.",
    accentColor: "rgba(139, 92, 246, 0.5)",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-lime-500" />,
    title: "Psicopedagogia Clínica",
    description:
      "Intervenção para dificuldades escolares e transtornos de aprendizagem, com foco no desenvolvimento cognitivo e acadêmico.",
    accentColor: "rgba(132, 204, 22, 0.5)",
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: "Oficinas Terapêuticas",
    description:
      "Atividades em grupo com base no Transforma Infância, promovendo autoestima, habilidades sociais e regulação emocional em crianças e adolescentes.",
    accentColor: "rgba(34, 197, 94, 0.5)",
  },
]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#fff] to-[#D4E9F7] dark:from-background dark:to-muted/10 bg-[#fdf1eb]"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Serviços Psicológicos Especializados</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Atendimentos clínicos e avaliações psicológicas baseadas em evidências, voltados para diagnóstico, intervenção e promoção da saúde mental.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg dark:bg-background/80">
                <CardHeader className="pb-2">
                  <FrostedGlassIcon icon={service.icon} color={service.accentColor} className="mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
