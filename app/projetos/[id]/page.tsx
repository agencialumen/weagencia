import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

// Lista completa de projetos com detalhes adicionais
const projectsData = [
  {
    id: "ecommerce",
    title: "Plataforma E-commerce",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Uma solução moderna de e-commerce com experiência de checkout perfeita.",
    fullDescription:
      "Desenvolvemos uma plataforma de e-commerce completa com foco em experiência do usuário e altas taxas de conversão. O sistema inclui um checkout otimizado, integração com múltiplos meios de pagamento, gestão de estoque em tempo real e painel administrativo intuitivo.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: "FashionTech",
    date: "Janeiro 2023",
    link: "https://exemplo.com/ecommerce",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard Financeiro",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Dashboard interativo para visualização de dados financeiros.",
    fullDescription:
      "Criamos um dashboard financeiro interativo que permite aos usuários visualizar e analisar dados complexos de forma intuitiva. O sistema apresenta gráficos dinâmicos, relatórios personalizáveis e alertas inteligentes para auxiliar na tomada de decisões financeiras.",
    technologies: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    client: "InvestSmart",
    date: "Março 2023",
    link: "https://exemplo.com/dashboard",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "travel-app",
    title: "App Companheiro de Viagem",
    category: "Apps Mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "Aplicativo móvel para viajantes planejarem e acompanharem suas jornadas.",
    fullDescription:
      "Desenvolvemos um aplicativo móvel completo para viajantes que desejam planejar, organizar e compartilhar suas experiências de viagem. O app inclui recursos como planejamento de itinerário, mapas offline, recomendações locais e um diário de viagem com integração às redes sociais.",
    technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
    client: "TravelBuddy",
    date: "Maio 2023",
    link: "https://exemplo.com/travelapp",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "tech-branding",
    title: "Branding para Startup de Tecnologia",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    description: "Identidade de marca completa para uma startup de tecnologia inovadora.",
    fullDescription:
      "Criamos uma identidade de marca completa para uma startup de tecnologia em fase de crescimento. O projeto incluiu desenvolvimento de logotipo, sistema de identidade visual, diretrizes de marca, materiais de marketing e templates para redes sociais, tudo alinhado com o posicionamento inovador da empresa.",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    client: "NexTech Solutions",
    date: "Julho 2023",
    link: "https://exemplo.com/nextech",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "marketing-campaign",
    title: "Campanha de Lançamento de Produto",
    category: "Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "Campanha de marketing integrada para o lançamento de um novo produto.",
    fullDescription:
      "Desenvolvemos e executamos uma campanha de marketing digital integrada para o lançamento de um produto inovador. A estratégia incluiu marketing de conteúdo, mídia paga, influenciadores digitais, email marketing e eventos online, resultando em um lançamento bem-sucedido com ROI significativo.",
    technologies: ["Google Ads", "Meta Ads", "Mailchimp", "HubSpot", "Analytics"],
    client: "InnovateTech",
    date: "Setembro 2023",
    link: "https://exemplo.com/innovate",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] text-white">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              {project.title}
            </h1>
          </div>

          <Link href="/projetos">
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-900/20 rounded-full px-4 py-2 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Projetos
            </Button>
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl overflow-hidden mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-white">Sobre o Projeto</h2>
            <p className="text-gray-300 mb-8">{project.fullDescription}</p>

            <h3 className="text-xl font-bold mb-4 text-white">Galeria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-xl overflow-hidden"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Imagem ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full px-6 py-3 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                Visitar Projeto
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-purple-900/30 to-black/60 border border-purple-900/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Detalhes do Projeto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Cliente</h4>
                    <p className="text-white">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Data</h4>
                    <p className="text-white">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

