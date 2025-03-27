"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { useRef } from "react"

const teamMembers = [
  {
    name: "Guilherme Vinicius",
    role: "CEO & Fundador",
    image: "https://iili.io/3uYmYqQ.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "ana@lumendigital.com.br",
    },
  },
  {
    name: "Lucas Ramos",
    role: "E-commerce",
    image: "https://iili.io/3uYb3PV.png",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "rafael@lumendigital.com.br",
    },
  },
  {
    name: "Gabriel França",
    role: "Conector",
    image: "https://iili.io/3uaqWj2.md.png",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "juliana@lumendigital.com.br",
    },
  },
  {
    name: "Loughan Perpetuo",
    role: "Líder de Marketing",
    image: "https://iili.io/3uacXJR.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "marcos@lumendigital.com.br",
    },
  },
  {
    name: "Gabriel Santos",
    role: "Desenvolvedor Frontend",
    image: "https://iili.io/3uahOve.png",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "carla@lumendigital.com.br",
    },
  },
]

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="equipe" className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Nossa Equipe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Conheça os talentos por trás da Lumen Digital
          </motion.p>
        </div>

        {/* Container com scroll horizontal em telas menores */}
        <div ref={scrollRef} className="relative overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-3 md:space-x-4 min-w-max md:min-w-0 md:grid md:grid-cols-5 md:gap-3 lg:gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-black/60 border border-purple-900/30 rounded-xl p-4 text-center hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all duration-300 w-[160px] md:w-auto flex-shrink-0"
              >
                <div className="flex flex-col items-center">
                  {/* Foto de perfil redonda */}
                  <div className="relative w-16 h-16 mb-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 blur-sm opacity-70"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Nome e cargo */}
                  <h3 className="text-base font-bold text-white mb-1 line-clamp-1">{member.name}</h3>
                  <p className="text-purple-300 text-xs mb-3 line-clamp-1">{member.role}</p>

                  {/* Links sociais */}
                  <div className="flex space-x-2">
                    <a
                      href={member.socialLinks.linkedin}
                      className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                    <a
                      href={member.socialLinks.twitter}
                      className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-3 w-3" />
                    </a>
                    <a
                      href={member.socialLinks.github}
                      className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                    <a
                      href={`mailto:${member.socialLinks.email}`}
                      className="p-1.5 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Indicador de scroll horizontal - visível apenas em dispositivos móveis */}
        <motion.div
          className="relative mt-3 text-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center justify-center space-x-2">
            <motion.div
              className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-900/30 text-purple-400"
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.div>
            <span className="text-xs text-purple-300">Arraste para ver mais</span>
          </div>

          {/* Efeito de gradiente para sugerir movimento */}
          <div className="absolute bottom-0 left-0 w-full h-8 pointer-events-none">
            <div className="absolute left-0 w-1/3 h-full bg-gradient-to-r from-transparent to-purple-500/10"></div>
            <div className="absolute right-0 w-1/3 h-full bg-gradient-to-l from-transparent to-purple-500/10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

