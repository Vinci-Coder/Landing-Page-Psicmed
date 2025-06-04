import FeatureCard from "@/components/feature-card"
import { Brain, Heart, Users, Sparkles, Lightbulb, Leaf } from "lucide-react"

export default function SpecialtiesSection() {
  const specialties = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Avaliação Psicológica",
    description:
      "Investigações detalhadas para compreender aspectos emocionais, cognitivos e comportamentais do paciente.",
    accentColor: "rgba(79, 124, 172, 0.5)",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-emerald-500" />,
    title: "Psicodiagnóstico",
    description:
      "Processo clínico que identifica transtornos e apoia decisões terapêuticas e médicas fundamentadas.",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-500" />,
    title: "Psicopedagogia Clínica",
    description:
      "Atendimento a crianças e adolescentes com dificuldades de aprendizagem, promovendo desenvolvimento escolar e emocional.",
    accentColor: "rgba(99, 102, 241, 0.5)",
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    title: "Transtorno do Espectro Autista (TEA)",
    description:
      "Intervenção especializada para promover autonomia, comunicação e qualidade de vida em indivíduos com TEA.",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-amber-500" />,
    title: "Avaliação Pré-Cirúrgica",
    description:
      "Laudos psicológicos para procedimentos como bariátrica, vasectomia e laqueadura, conforme exigências médicas e legais.",
    accentColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: "Avaliação para Posse de Arma",
    description:
      "Avaliação psicológica conforme critérios da Polícia Federal para emissão de laudo de aptidão à posse e porte de arma.",
    accentColor: "rgba(132, 204, 22, 0.5)",
  },
]

  return (
    <section  className="py-20 bg-gradient-to-b from-[#FDE2E4] to-[#fff]" id="specialties" aria-labelledby="specialties-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 id="specialties-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Áreas de Atuação
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Atenção clínica especializada em avaliação, desenvolvimento emocional e apoio em processos terapêuticos diversos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <FeatureCard
              key={index}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              accentColor={specialty.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
