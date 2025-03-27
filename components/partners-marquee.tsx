"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Logos de exemplo - substitua pelos logos reais das empresas parceiras
const partners = [
  {
    name: "HACKERS DO BEM",
    logo: "https://iili.io/3ulBWAb.png",
  },
  {
    name: "CIBER SECURITY",
    logo: "https://iili.io/3ucZviQ.png",
  },
  {
    name: "MR.ROBOT",
    logo: "https://iili.io/3ucSJDP.png",
  },
  {
    name: "NMAP",
    logo: "https://iili.io/3ucmJmF.png",
  },
  {
    name: "E.CORP",
    logo: "https://iili.io/3ucZzVR.png",
  },
  {
    name: "BLACKHAT",
    logo: "https://iili.io/3ulYA1s.png",
  },
  {
    name: "KALI LINUX",
    logo: "https://iili.io/3ulEq2n.png",
  },
  {
    name: "OPENSSL",
    logo: "https://iili.io/3ulhNyX.png",
  },
]

export default function PartnersMarquee() {
  const [duplicatedPartners, setDuplicatedPartners] = useState(partners)
  const containerRef = useRef<HTMLDivElement>(null)

  // Duplicar os parceiros para criar um efeito de loop infinito
  useEffect(() => {
    setDuplicatedPartners([...partners, ...partners])
  }, [])

  return (
    <section className="py-12 relative overflow-hidden bg-black/40">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Referências que Guiam Nosso Trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
             Buscamos sempre seguir as melhores práticas em cibersegurança, com foco em inovação e eficiência.
          </motion.p>
        </div>
      </div>

      {/* Marquee de logos com movimento automático */}
      <div className="relative w-full overflow-hidden">
        {/* Gradiente de fade nas bordas */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-black/90 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-black/90 to-transparent pointer-events-none"></div>

        <div ref={containerRef} className="marquee-container">
          <div className="marquee">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="mx-8 inline-flex items-center justify-center h-20 group">
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-purple-900/20 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-10 w-auto opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

