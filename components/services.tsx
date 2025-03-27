"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Lightbulb, TrendingUp, Zap } from "lucide-react"

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações web personalizados construídos com as tecnologias mais recentes para desempenho ideal.",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Design UI/UX",
    description: "Experiências de usuário intuitivas e envolventes que mantêm seu público voltando para mais.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Marketing Digital",
    description: "Campanhas estratégicas que aumentam a visibilidade e impulsionam conversões em canais digitais.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Estratégia de Marca",
    description: "Desenvolvimento abrangente de marca para estabelecer uma forte presença e identidade no mercado.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Otimização SEO",
    description: "Estratégias orientadas por dados para melhorar o ranking de pesquisa e aumentar o tráfego orgânico.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Otimização de Performance",
    description: "Acelere suas plataformas digitais para melhor experiência do usuário e taxas de conversão.",
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="serviços" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_40%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Oferecemos uma gama abrangente de serviços digitais para ajudar seu negócio a prosperar no cenário digital.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-3 rounded-xl inline-block mb-4 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

