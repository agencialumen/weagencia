import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

// Lista completa de projetos com detalhes adicionais
const projectsData = [
  {
    id: "dashboard-adag",
    title: "Dashboard ADAG",
    category: "Web Design",
    image: "https://iili.io/3ucdi0J.png",
    description: "Dashboard interativo para visualização de dados financeiros.",
    fullDescription:
      "Desenvolvemos um dashboard financeiro interativo que permite aos usuários visualizar e analisar dados complexos de forma intuitiva. O sistema apresenta gráficos dinâmicos, relatórios personalizáveis e alertas inteligentes para auxiliar na tomada de decisões financeiras.",
    technologies: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
    client: "ADAG Finanças",
    date: "Março 2023",
    link: "https://exemplo.com/dashboard",
    // Aqui você pode adicionar mais imagens para a galeria de cada projeto
    gallery: [
      "https://iili.io/3ucdi0J.png",
      "https://iili.io/3ucdi0J.png",
      // Adicione mais URLs de imagens aqui conforme necessário
    ],
  },
  {
    id: "website-academia",
    title: "Web Site Academia",
    category: "Web Design",
    image: "https://iili.io/3uchkba.png",
    description:
      "Website responsivo para academias, com informações, agendamentos online e integração com redes sociais.",
    fullDescription:
      "Criamos um website completo para academia com sistema de agendamento online, área de membros, integração com redes sociais e design responsivo. O site permite que os clientes visualizem horários de aulas, façam agendamentos e acompanhem seu progresso.",
    technologies: ["React", "Next.js", "MongoDB", "Stripe API"],
    client: "Academia Fitness",
    date: "Janeiro 2023",
    link: "https://exemplo.com/academia",
    // Aqui você pode adicionar mais imagens para a galeria de cada projeto
    gallery: [
      "https://iili.io/3uchkba.png",
      // Adicione mais URLs de imagens aqui conforme necessário
    ],
  },
  {
    id: "hiven-money-app",
    title: "Hiven Money APP",
    category: "Apps Mobile",
    image: "https://iili.io/3u0dxAQ.png",
    description: "App que gera ganhos automatizados e faz o dinheiro 'trabalhar como uma abelha'.",
    fullDescription:
      "Desenvolvemos um aplicativo móvel inovador que ajuda os usuários a automatizar seus investimentos e maximizar seus ganhos. O app utiliza algoritmos avançados para analisar o mercado e sugerir as melhores oportunidades de investimento, fazendo o dinheiro 'trabalhar como uma abelha'.",
    technologies: ["React Native", "GraphQL", "MongoDB", "Firebase"],
    client: "Hiven Finance",
    date: "Maio 2023",
    link: "https://exemplo.com/hiven",
    // Aqui você pode adicionar mais imagens para a galeria de cada projeto
    gallery: [
      "https://iili.io/3u0dxAQ.png",
      // Adicione mais URLs de imagens aqui conforme necessário
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

