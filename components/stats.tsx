"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "5+", label: "Membros da Equipe" },
  { value: "2025", label: "Fundação" },
  { value: "1", label: "Países" },
  { value: "10+", label: "Projetos Concluídos" },
]

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/30 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.2),transparent_50%)]"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 p-8 md:p-12 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

