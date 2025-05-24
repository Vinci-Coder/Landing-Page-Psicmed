import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A abordagem compassiva da psicóloga Kalynna me ajudou a superar a ansiedade com a qual luto há anos. Suas técnicas me deram ferramentas que uso todos os dias para gerenciar o estresse e viver mais plenamente.",
      name: "Michael R.",
      title: "Client for 2 years",
      avatar: "MR",
    },
    {
      quote:
        "As sessões de terapia de casal salvaram nosso casamento. Aprendemos a nos comunicar com eficácia e a entender as necessidades um do outro. Sou grata pelo espaço seguro que a psicóloga Kalynna criou para nós.",
      name: "Jennifer & David",
      title: "Couples Therapy",
      avatar: "JD",
    },
    {
      quote:
        "Depois de anos lutando contra traumas, finalmente encontrei a cura através da terapia EMDR. A experiência e a paciência da psicóloga Kalynna fizeram toda a diferença na minha jornada de recuperação.",
      name: "Sarah T.",
      title: "Trauma Recovery",
      avatar: "ST",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#D4E9F7] to-[#fff] dark:from-background dark:to-muted/10 bg-[#fdf1eb]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Você Não Está sozinho(a)</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conheça experiências de pessoas que enfrentaram dificuldades e encontraram apoio, escuta e novos caminhos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
