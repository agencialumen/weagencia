import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Lista completa de projetos com as imagens fornecidas
const allProjects = [
  {
    id: "dashboard-adag",
    title: "Dashboard ADAG",
    category: "Web Design",
    image: "/images/dashboard-adag.png",
    description: "Dashboard interativo para visualização de dados financeiros.",
  },
  {
    id: "website-academia",
    title: "Web Site Academia",
    category: "Web Design",
    image: "/images/website-academia.png",
    description:
      "Website responsivo para academias, com informações, agendamentos online e integração com redes sociais.",
  },
  {
    id: "hiven-money-app",
    title: "Hiven Money APP",
    category: "Apps Mobile",
    image: "/images/hiven-money-app.png",
    description: "App que gera ganhos automatizados e faz o dinheiro 'trabalhar como uma abelha'.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] text-white">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              Nossos Projetos
            </h1>
            <p className="text-gray-300">
              Explore nossa coleção de trabalhos e descubra como podemos transformar sua presença digital.
            </p>
          </div>

          <Link href="/#portfólio">
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-900/20 rounded-full px-4 py-2 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300"
            >
              <Link href={`/projetos/${project.id}`} className="block">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <div className="text-purple-400 hover:text-purple-300 mt-2 flex items-center text-sm font-medium">
                      Ver Detalhes
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

