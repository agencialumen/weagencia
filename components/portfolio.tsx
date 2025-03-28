"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Projetos em destaque com as imagens fornecidas
const featuredProjects = [
  {
    id: "dashboard-adag",
    title: "Dashboard ADAG",
    category: "Web Design",
    image: "https://iili.io/3ucdi0J.png",
    description: "Dashboard interativo para visualização de dados financeiros.",
  },
  {
    id: "website-academia",
    title: "Web Site Academia",
    category: "Web Design",
    image: "https://iili.io/3uchkba.png",
    description:
      "Website responsivo para academias, com informações, agendamentos online e integração com redes sociais.",
  },
  {
    id: "hiven-money-app",
    title: "Hiven Money APP",
    category: "Apps Mobile",
    image: "https://iili.io/3u0dxAQ.png",
    description: "App que gera ganhos automatizados e faz o dinheiro 'trabalhar como uma abelha'.",
  },
]

export default function Portfolio() {
  return (
    <section id="portfólio" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(147,51,234,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Nosso Portfólio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Explore nossos projetos mais recentes e veja como ajudamos empresas a transformar sua presença digital.
          </motion.p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
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
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/projetos">
            <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full px-8 py-6 shadow-[0_0_20px_rgba(168,85,247,0.5)] text-lg">
              Ver Todos os Projetos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

