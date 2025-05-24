import { Button } from "@/components/ui/button"
import { Calendar, Heart, Users, Phone, Stethoscope, MessageCircle, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CssGridBackground from "@/components/css-grid-background"
import FramerSpotlight from "@/components/framer-spotlight"
import SpecialtiesSection from "@/components/specialties-section"
import StructuredData from "@/components/structured-data"
import AboutSection from "@/components/about-section"
import PlaceSection from "@/components/place-section"
import TherapyWorkshopsCarousel from "@/components/TherapyWorkshopsCarousel"

export default function Home() {
  return (
    <>
      {/* <StructuredData /> */}
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/home.jpg"
              alt="Fundo"
              fill
              className="object-cover z-[-1] opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-[#000]/50 mix-blend-multiply"></div>
          </div>

          <CssGridBackground />
          <FramerSpotlight />

          <div className="relative z-10 container px-4 md:px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-[#fff0f3] drop-shadow-md">
                Cuidar de si é um ato de coragem
              </h1>
              <p className="text-xl md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mb-12 text-[#fef3f7]">
                Construa novos caminhos para lidar com seus sentimentos e viva com mais leveza, presença e sentido.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a
                  href="https://wa.me/5585997663878?text=Olá%2C+gostaria+de+agendar+uma+consulta+com+a+Psicóloga+Kalynna."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="flex items-center gap-3 px-5 py-6 h-[60px] bg-[#ec7894] hover:bg-[#ec7894]/70 text-white rounded-xl border-0 shadow-[0_0_15px_rgba(255,182,193,0.5)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
                    <Calendar className="h-5 w-5 text-white relative z-10" />
                    <span className="text-[15px] font-medium font-sans relative z-10">Agendar Consulta</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
            <svg
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[100px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
                className="fill-[#FDE2E4]"
              />
            </svg>
          </div>
        </section>

        <AboutSection />

        <SpecialtiesSection />

        <Services />

        <TherapyWorkshopsCarousel />

        <Testimonials />

        <PlaceSection />

        <section id="contact" className="py-20 bg-[#FDE2E4] dark:bg-muted/10" aria-labelledby="contact-heading">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Agende sua Consulta
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Dê o primeiro passo para cuidar da sua saúde mental. Entre em contato para agendar sua primeira sessão.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" /> Contatos
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <a
                  href="https://wa.me/5585997663878?text=Olá%2C+gostaria+de+agendar+uma+consulta+com+a+Psicóloga+Kalynna."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (85) 9 9766-3878
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=psicologakalynna@gmail.com&su=Agendamento%20de%20Consulta&body=Olá%2C%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Psicóloga%20Kalynna."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  psicologakalynna@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5z"
                  />
                </svg>
                <a
                  href="https://www.instagram.com/psicologakalynna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @psicologakalynna
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Rua Virgílio Paes, 2617</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg w-full aspect-video">
              <iframe
                src="https://www.google.com/maps?q=Rua+Virgílio+Paes,+2617&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-8 lg:ml-10 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

        <a
          href="https://wa.me/5585997663878?text=Olá%2C+gostaria+de+mais+informações+sobre+agendar+uma+consulta+com+a+Psicóloga+Kalynna."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Fale no WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.672.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.521-.075-.149-.672-1.612-.921-2.206-.242-.579-.487-.5-.672-.51-.173-.007-.373-.009-.572-.009s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.488 1.694.623.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.007-1.412.248-.694.248-1.29.173-1.412-.074-.123-.273-.198-.571-.347m-5.421 7.405h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.646-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.452-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05.003C5.495 0 .162 5.332.16 11.888a11.82 11.82 0 001.605 6.003L.057 24l6.236-1.632a11.84 11.84 0 005.782 1.478h.005c6.555 0 11.89-5.332 11.893-11.888a11.822 11.822 0 00-3.487-8.414" />
          </svg>
        </a>

        <Footer />
      </div>
    </>
  )
}