"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Soluções de design inovadoras",
  "Equipe especializada em tecnologias digitais",
  "Implementação de tecnologia de ponta",
  "Desenvolvimento de estratégias orientadas por dados",
  "Abordagem personalizada para cada cliente",
  "Suporte contínuo e otimização",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/30 rounded-3xl overflow-hidden p-8 md:p-12 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.2),transparent_50%)]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
                Por que escolher a Lokaly Hub?
              </h2>
              <p className="text-gray-300 mb-8">
                Transformamos sua visão digital em realidade com soluções inovadoras que cativam o público e geram
                resultados significativos. Nossa equipe combina expertise técnica com excelência criativa para entregar
                experiências digitais excepcionais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-purple-900/40 to-black/40 border border-purple-900/30 rounded-2xl p-8 relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-white">Clientes adoram esses benefícios</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600/20 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Experiências Imersivas</h4>
                      <p className="text-gray-400 text-sm">
                        Criamos jornadas digitais cativantes que mantêm os usuários engajados e sempre voltando por
                        mais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600/20 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Otimização de Performance</h4>
                      <p className="text-gray-400 text-sm">
                        Sites e aplicações ultrarrápidos que proporcionam experiências de usuário perfeitas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600/20 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Soluções Integradas</h4>
                      <p className="text-gray-400 text-sm">
                        Estratégias digitais abrangentes que se alinham com seus objetivos e metas de negócio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

