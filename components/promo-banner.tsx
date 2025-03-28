"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Layers, BarChart } from "lucide-react"
import Link from "next/link"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, Text, OrbitControls } from "@react-three/drei"
import type { JSX } from "react/jsx-runtime"

// Componente 3D para o lado direito do banner
function DigitalMarketingScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Environment preset="city" />

      <Float
        speed={2} // Velocidade da animação
        rotationIntensity={0.5} // Intensidade da rotação
        floatIntensity={0.5} // Intensidade da flutuação
      >
        <DigitalGlobe position={[0, 0, 0]} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2} position={[-2, 1, 0]}>
        <Text font="/fonts/Geist_Bold.json" fontSize={0.5} color="#a855f7" anchorX="center" anchorY="middle">
          Digital
        </Text>
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2} position={[2, -1, 0]}>
        <Text font="/fonts/Geist_Bold.json" fontSize={0.5} color="#d946ef" anchorX="center" anchorY="middle">
          Marketing
        </Text>
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

// Componente do globo digital
function DigitalGlobe(props: JSX.IntrinsicElements["group"]) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Animação de rotação
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group {...props}>
      {/* Esfera base */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.2}
          emissive="#2a0845"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Linhas de conexão */}
      <ConnectionLines />

      {/* Pontos de dados */}
      <DataPoints />
    </group>
  )
}

// Linhas de conexão no globo
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null)

  useEffect(() => {
    if (!linesRef.current) return

    // Criar linhas de conexão aleatórias
    const geometry = new THREE.BufferGeometry()
    const points = []

    for (let i = 0; i < 20; i++) {
      const radius = 1.5

      // Ponto inicial
      const theta1 = Math.random() * Math.PI * 2
      const phi1 = Math.random() * Math.PI
      const x1 = radius * Math.sin(phi1) * Math.cos(theta1)
      const y1 = radius * Math.sin(phi1) * Math.sin(theta1)
      const z1 = radius * Math.cos(phi1)

      // Ponto final
      const theta2 = Math.random() * Math.PI * 2
      const phi2 = Math.random() * Math.PI
      const x2 = radius * Math.sin(phi2) * Math.cos(theta2)
      const y2 = radius * Math.sin(phi2) * Math.sin(theta2)
      const z2 = radius * Math.cos(phi2)

      // Adicionar pontos para criar a linha
      points.push(x1, y1, z1)
      points.push(x2, y2, z2)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))

    // Atualizar a geometria
    linesRef.current.geometry = geometry
  }, [])

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry />
      <lineBasicMaterial color="#a855f7" transparent opacity={0.4} />
    </lineSegments>
  )
}

// Pontos de dados no globo
function DataPoints() {
  const pointsRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!pointsRef.current) return

    // Criar pontos de dados aleatórios
    const geometry = new THREE.BufferGeometry()
    const positions = []
    const colors = []
    const color = new THREE.Color()

    for (let i = 0; i < 100; i++) {
      const radius = 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.push(x, y, z)

      // Cor aleatória entre roxo e rosa
      color.setHSL(0.75 + Math.random() * 0.1, 0.8, 0.6)
      colors.push(color.r, color.g, color.b)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

    // Atualizar a geometria
    pointsRef.current.geometry = geometry
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial size={0.05} vertexColors />
    </points>
  )
}

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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Plano Personalizado</h2>

                  <p className="text-gray-300 mb-6">
                    Crie uma solução digital sob medida para o seu negócio. Você escolhe apenas os serviços que
                    realmente precisa, sem pagar por recursos desnecessários.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-900/30 p-2 rounded-lg mt-1">
                        <Lightbulb className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Você no controle</h3>
                        <p className="text-gray-400 text-sm">
                          Selecione exatamente os serviços que seu negócio precisa para crescer.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-900/30 p-2 rounded-lg mt-1">
                        <Layers className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Escalabilidade</h3>
                        <p className="text-gray-400 text-sm">
                          Adicione ou remova serviços conforme seu negócio evolui.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-900/30 p-2 rounded-lg mt-1">
                        <BarChart className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Resultados mensuráveis</h3>
                        <p className="text-gray-400 text-sm">
                          Acompanhe o desempenho de cada serviço com relatórios detalhados.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/planos">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] group">
                      Criar Meu Plano Personalizado
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="h-[350px] w-full rounded-xl overflow-hidden">
                  <DigitalMarketingScene />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

