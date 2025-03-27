"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PromoBanner() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-gradient-to-br from-black to-purple-900/30 border border-purple-900/30 rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-900/30 shadow-[0_0_30px_rgba(147,51,234,0.2)]">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Infinity</h2>
                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                    Apenas R$149/Mês
                  </div>
                  <p className="text-gray-300 mb-6">
                    Nosso pacote premium com recursos ilimitados para impulsionar sua presença digital. Inclui
                    desenvolvimento, design e suporte contínuo.
                  </p>
                  <Link href="/planos">
                    <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] group">
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative h-[300px] w-full">
                  {/* 3D Metallic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform perspective-1000 rotate-y-12 rotate-x-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80"></div>
                    <div className="absolute inset-0 bg-[url('/metallic-texture.svg')] opacity-10 mix-blend-overlay"></div>

                    {/* Reflective Highlight */}
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shine_4s_ease-in-out_infinite]"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Infinity</h3>
                      <p className="text-gray-300 text-sm mb-4 text-center">
                        Soluções digitais ilimitadas para seu negócio
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm">
                        R$149/mês
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-10 right-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                  ></motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-10 left-10 w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(219,39,119,0.7)]"
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

