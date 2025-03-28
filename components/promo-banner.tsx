"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Layers, BarChart } from "lucide-react"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

// Componente de Visualização Futurista 2025
const FuturisticServiceScanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMobile()
  const animationRef = useRef<number>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Serviços digitais personalizados para 2025
  const digitalServices = [
    { id: 1, name: "Neural SEO", accuracy: 99.7, status: "ATIVO", priority: "ALTA", color: "#9333ea" },
    { id: 2, name: "Hyper-Targeting", accuracy: 98.2, status: "ATIVO", priority: "ALTA", color: "#d946ef" },
    { id: 3, name: "Bio-Content", accuracy: 97.5, status: "ATIVO", priority: "MÉDIA", color: "#8b5cf6" },
    { id: 4, name: "Quantum Analytics", accuracy: 99.9, status: "ATIVO", priority: "CRÍTICA", color: "#ec4899" },
    { id: 5, name: "Neuro-Email", accuracy: 96.8, status: "ATIVO", priority: "MÉDIA", color: "#6366f1" },
    { id: 6, name: "Meta-Ads", accuracy: 98.4, status: "ATIVO", priority: "ALTA", color: "#a855f7" },
    { id: 7, name: "AR Engagement", accuracy: 95.7, status: "ATIVO", priority: "MÉDIA", color: "#14b8a6" },
    { id: 8, name: "AI Personalization", accuracy: 99.8, status: "ATIVO", priority: "CRÍTICA", color: "#f43f5e" },
  ]

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

      setMousePosition({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", () => setIsHovering(true))
      container.addEventListener("mouseleave", () => setIsHovering(false))
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", () => setIsHovering(true))
        container.removeEventListener("mouseleave", () => setIsHovering(false))
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !isMounted) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o canvas para a resolução do dispositivo
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Configurações
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = Math.min(centerX, centerY) * 0.8

    // Criar imagem de rosto para escaneamento (simulado)
    const faceImage = new Image()
    faceImage.crossOrigin = "anonymous"
    faceImage.src =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(`
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#9333ea" strokeWidth="2"/>
        <circle cx="70" cy="80" r="10" fill="#9333ea"/>
        <circle cx="130" cy="80" r="10" fill="#9333ea"/>
        <path d="M 70 120 Q 100 150 130 120" fill="none" stroke="#9333ea" strokeWidth="2"/>
        <path d="M 50 50 L 80 60 M 150 50 L 120 60" fill="none" stroke="#9333ea" strokeWidth="2"/>
      </svg>
    `)

    // Rede neural (nós e conexões)
    const neuralNodes: any[] = []
    const numNodes = 50

    for (let i = 0; i < numNodes; i++) {
      neuralNodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(${147 + Math.random() * 100}, ${51 + Math.random() * 100}, ${234 + Math.random() * 20}, ${Math.random() * 0.8 + 0.2})`,
        speed: Math.random() * 0.5 + 0.1,
        connections: [],
      })
    }

    // Criar conexões entre nós próximos
    for (let i = 0; i < neuralNodes.length; i++) {
      for (let j = i + 1; j < neuralNodes.length; j++) {
        const dx = neuralNodes[i].x - neuralNodes[j].x
        const dy = neuralNodes[i].y - neuralNodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < rect.width * 0.2) {
          neuralNodes[i].connections.push(j)
        }
      }
    }

    // Dados de análise
    const dataPoints: any[] = []
    const numDataPoints = 100

    for (let i = 0; i < numDataPoints; i++) {
      dataPoints.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        value: Math.floor(Math.random() * 100),
        color: `rgba(${147 + Math.random() * 100}, ${51 + Math.random() * 100}, ${234 + Math.random() * 20}, ${Math.random() * 0.8 + 0.2})`,
        size: Math.random() * 10 + 8,
        speed: Math.random() * 2 - 1,
        direction: Math.random() * Math.PI * 2,
      })
    }

    // Elementos de interface
    const interfaceElements = [
      { type: "rect", x: 20, y: 20, width: 150, height: 80, label: "NEURAL SCAN", value: "ACTIVE" },
      { type: "rect", x: rect.width - 170, y: 20, width: 150, height: 80, label: "QUANTUM PROCESS", value: "99.8%" },
      { type: "rect", x: 20, y: rect.height - 100, width: 150, height: 80, label: "BIO-METRICS", value: "VERIFIED" },
      {
        type: "rect",
        x: rect.width - 170,
        y: rect.height - 100,
        width: 150,
        height: 80,
        label: "AI SYNC",
        value: "COMPLETE",
      },
    ]

    // Função para desenhar texto com efeito de digitalização
    const drawDigitalText = (
      text: string,
      x: number,
      y: number,
      fontSize: number,
      color: string,
      glitchFactor = 0.2,
    ) => {
      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = color

      // Texto principal
      ctx.fillText(text, x, y)

      // Efeito de glitch
      if (Math.random() < glitchFactor) {
        ctx.fillStyle = "#00ffff80"
        ctx.fillText(text, x + Math.random() * 4 - 2, y + Math.random() * 4 - 2)
      }
    }

    // Função para desenhar retângulo com efeito de digitalização
    const drawDigitalRect = (
      x: number,
      y: number,
      width: number,
      height: number,
      color: string,
      borderColor: string,
    ) => {
      // Fundo
      ctx.fillStyle = color
      ctx.fillRect(x, y, width, height)

      // Borda
      ctx.strokeStyle = borderColor
      ctx.lineWidth = 2
      ctx.strokeRect(x, y, width, height)

      // Linhas de escaneamento
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      for (let i = 0; i < height; i += 4) {
        if (i % 8 === 0) {
          ctx.fillRect(x, y + i, width, 1)
        }
      }

      // Cantos
      ctx.strokeStyle = "#00ffff"
      ctx.lineWidth = 2

      const cornerSize = 10

      // Canto superior esquerdo
      ctx.beginPath()
      ctx.moveTo(x, y + cornerSize)
      ctx.lineTo(x, y)
      ctx.lineTo(x + cornerSize, y)
      ctx.stroke()

      // Canto superior direito
      ctx.beginPath()
      ctx.moveTo(x + width - cornerSize, y)
      ctx.lineTo(x + width, y)
      ctx.lineTo(x + width, y + cornerSize)
      ctx.stroke()

      // Canto inferior esquerdo
      ctx.beginPath()
      ctx.moveTo(x, y + height - cornerSize)
      ctx.lineTo(x, y + height)
      ctx.lineTo(x + cornerSize, y + height)
      ctx.stroke()

      // Canto inferior direito
      ctx.beginPath()
      ctx.moveTo(x + width - cornerSize, y + height)
      ctx.lineTo(x + width, y + height)
      ctx.lineTo(x + width, y + height - cornerSize)
      ctx.stroke()
    }

    // Função de animação
    let lastTime = 0
    let scanProgress = 0
    let scanActive = false
    let scanCompleteTime = 0
    let detectedServices: any[] = []

    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      // Limpar canvas
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Desenhar fundo
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, rect.width)
      gradient.addColorStop(0, "rgba(10, 10, 20, 1)")
      gradient.addColorStop(1, "rgba(5, 5, 15, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Desenhar grade digital
      ctx.strokeStyle = "rgba(147, 51, 234, 0.1)"
      ctx.lineWidth = 1

      // Linhas horizontais
      for (let y = 0; y < rect.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(rect.width, y)
        ctx.stroke()
      }

      // Linhas verticais
      for (let x = 0; x < rect.width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, rect.height)
        ctx.stroke()
      }

      // Desenhar rede neural
      neuralNodes.forEach((node, i) => {
        // Mover nós
        node.x += Math.sin(time * 0.001 + i) * node.speed
        node.y += Math.cos(time * 0.001 + i) * node.speed

        // Manter dentro dos limites
        if (node.x < 0) node.x = rect.width
        if (node.x > rect.width) node.x = 0
        if (node.y < 0) node.y = rect.height
        if (node.y > rect.height) node.y = 0

        // Desenhar conexões
        node.connections.forEach((j: number) => {
          const targetNode = neuralNodes[j]
          const dx = targetNode.x - node.x
          const dy = targetNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < rect.width * 0.2) {
            const opacity = 1 - distance / (rect.width * 0.2)

            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(targetNode.x, targetNode.y)
            ctx.stroke()

            // Partícula movendo-se ao longo da conexão
            if (Math.random() < 0.02) {
              const particlePos = Math.random()
              const particleX = node.x + dx * particlePos
              const particleY = node.y + dy * particlePos

              ctx.fillStyle = "#00ffff"
              ctx.beginPath()
              ctx.arc(particleX, particleY, 2, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        })

        // Desenhar nó
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Desenhar dados de análise
      dataPoints.forEach((point) => {
        // Mover pontos
        point.x += Math.cos(point.direction) * point.speed
        point.y += Math.sin(point.direction) * point.speed

        // Manter dentro dos limites
        if (point.x < 0 || point.x > rect.width) {
          point.direction = Math.PI - point.direction
        }
        if (point.y < 0 || point.y > rect.height) {
          point.direction = -point.direction
        }

        // Desenhar ponto
        if (Math.random() < 0.8) {
          // Efeito de cintilação
          ctx.fillStyle = point.color
          ctx.font = `${point.size}px monospace`
          ctx.fillText(point.value.toString(), point.x, point.y)
        }
      })

      // Desenhar elementos de interface
      interfaceElements.forEach((element) => {
        if (element.type === "rect") {
          drawDigitalRect(
            element.x,
            element.y,
            element.width,
            element.height,
            "rgba(10, 10, 30, 0.7)",
            "rgba(147, 51, 234, 0.5)",
          )

          drawDigitalText(element.label, element.x + 10, element.y + 20, 12, "#00ffff")

          drawDigitalText(element.value, element.x + 10, element.y + 50, 16, "#ffffff")
        }
      })

      // Lógica de escaneamento
      const scanDuration = 5000 // 5 segundos
      const scanCooldown = 3000 // 3 segundos

      if (!scanActive && time - scanCompleteTime > scanCooldown) {
        scanActive = true
        scanProgress = 0
        detectedServices = []
      }

      if (scanActive) {
        scanProgress += deltaTime / scanDuration

        if (scanProgress >= 1) {
          scanActive = false
          scanCompleteTime = time

          // Selecionar serviços detectados aleatoriamente
          const numDetected = Math.floor(Math.random() * 3) + 3 // 3-5 serviços
          const shuffled = [...digitalServices].sort(() => 0.5 - Math.random())
          detectedServices = shuffled.slice(0, numDetected)
        }

        // Desenhar interface de escaneamento
        const scanY = centerY - 100
        const scanHeight = 200
        const scanWidth = rect.width * 0.7
        const scanX = centerX - scanWidth / 2

        // Fundo do escaneamento
        ctx.fillStyle = "rgba(10, 10, 30, 0.5)"
        ctx.fillRect(scanX, scanY, scanWidth, scanHeight)

        // Borda
        ctx.strokeStyle = "rgba(147, 51, 234, 0.7)"
        ctx.lineWidth = 2
        ctx.strokeRect(scanX, scanY, scanWidth, scanHeight)

        // Título
        drawDigitalText("NEURAL SERVICE SCANNER 2025", scanX + 20, scanY + 30, 16, "#00ffff")

        // Barra de progresso
        const progressWidth = (scanWidth - 40) * scanProgress

        ctx.fillStyle = "rgba(147, 51, 234, 0.3)"
        ctx.fillRect(scanX + 20, scanY + 50, scanWidth - 40, 20)

        ctx.fillStyle = "rgba(147, 51, 234, 0.7)"
        ctx.fillRect(scanX + 20, scanY + 50, progressWidth, 20)

        // Texto de status
        drawDigitalText(
          `ESCANEANDO SERVIÇOS PERSONALIZADOS... ${Math.floor(scanProgress * 100)}%`,
          scanX + 20,
          scanY + 90,
          14,
          "#ffffff",
        )

        // Linha de escaneamento
        const scanLineY = scanY + scanProgress * scanHeight

        ctx.strokeStyle = "#00ffff"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(scanX, scanLineY)
        ctx.lineTo(scanX + scanWidth, scanLineY)
        ctx.stroke()

        // Efeito de brilho na linha de escaneamento
        const scanGlow = ctx.createLinearGradient(0, scanLineY - 10, 0, scanLineY + 10)
        scanGlow.addColorStop(0, "rgba(0, 255, 255, 0)")
        scanGlow.addColorStop(0.5, "rgba(0, 255, 255, 0.5)")
        scanGlow.addColorStop(1, "rgba(0, 255, 255, 0)")

        ctx.fillStyle = scanGlow
        ctx.fillRect(scanX, scanLineY - 10, scanWidth, 20)

        // Desenhar rosto para escaneamento
        if (faceImage.complete) {
          ctx.drawImage(
            faceImage,
            scanX + scanWidth / 2 - 50,
            scanY + scanHeight / 2 - 50 + Math.sin(time * 0.005) * 5,
            100,
            100,
          )

          // Linhas de escaneamento facial
          const numScanLines = 10
          const scanLineSpacing = 100 / numScanLines

          for (let i = 0; i < numScanLines; i++) {
            if (i / numScanLines <= scanProgress) {
              const lineY = scanY + scanHeight / 2 - 50 + i * scanLineSpacing + Math.sin(time * 0.005) * 5

              ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(scanX + scanWidth / 2 - 50, lineY)
              ctx.lineTo(scanX + scanWidth / 2 + 50, lineY)
              ctx.stroke()
            }
          }

          // Pontos de referência facial
          if (scanProgress > 0.3) {
            const points = [
              { x: -30, y: -20 }, // Olho esquerdo
              { x: 30, y: -20 }, // Olho direito
              { x: 0, y: 0 }, // Nariz
              { x: -20, y: 20 }, // Canto esquerdo da boca
              { x: 20, y: 20 }, // Canto direito da boca
              { x: -40, y: -30 }, // Sobrancelha esquerda
              { x: 40, y: -30 }, // Sobrancelha direita
              { x: 0, y: 40 }, // Queixo
            ]

            points.forEach((point) => {
              const x = scanX + scanWidth / 2 + point.x
              const y = scanY + scanHeight / 2 + point.y + Math.sin(time * 0.005) * 5

              ctx.fillStyle = "#00ffff"
              ctx.beginPath()
              ctx.arc(x, y, 2, 0, Math.PI * 2)
              ctx.fill()

              // Linhas de conexão
              ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(scanX + scanWidth / 2, scanY + scanHeight / 2 + Math.sin(time * 0.005) * 5)
              ctx.lineTo(x, y)
              ctx.stroke()
            })
          }
        }
      } else {
        // Mostrar serviços detectados
        if (detectedServices.length > 0) {
          const resultsY = centerY - 120
          const resultsHeight = 240
          const resultsWidth = rect.width * 0.8
          const resultsX = centerX - resultsWidth / 2

          // Fundo dos resultados
          ctx.fillStyle = "rgba(10, 10, 30, 0.7)"
          ctx.fillRect(resultsX, resultsY, resultsWidth, resultsHeight)

          // Borda
          ctx.strokeStyle = "rgba(147, 51, 234, 0.7)"
          ctx.lineWidth = 2
          ctx.strokeRect(resultsX, resultsY, resultsWidth, resultsHeight)

          // Título
          drawDigitalText("SERVIÇOS PERSONALIZADOS DETECTADOS", resultsX + 20, resultsY + 30, 16, "#00ffff")

          // Subtítulo
          drawDigitalText("ANÁLISE DE COMPATIBILIDADE NEURAL COMPLETA", resultsX + 20, resultsY + 50, 12, "#ffffff80")

          // Serviços detectados
          detectedServices.forEach((service, index) => {
            const serviceY = resultsY + 80 + index * 30

            // Indicador de status
            ctx.fillStyle = "#00ff00"
            ctx.beginPath()
            ctx.arc(resultsX + 20, serviceY - 4, 4, 0, Math.PI * 2)
            ctx.fill()

            // Nome do serviço
            drawDigitalText(service.name, resultsX + 35, serviceY, 14, "#ffffff")

            // Precisão
            drawDigitalText(`${service.accuracy}%`, resultsX + 200, serviceY, 14, "#00ffff")

            // Status
            drawDigitalText(service.status, resultsX + 280, serviceY, 14, "#00ff00")

            // Prioridade
            const priorityColor =
              service.priority === "CRÍTICA" ? "#ff3366" : service.priority === "ALTA" ? "#ffcc00" : "#00cc88"

            drawDigitalText(service.priority, resultsX + 360, serviceY, 14, priorityColor)
          })

          // Botão de ação
          const buttonX = resultsX + resultsWidth / 2 - 100
          const buttonY = resultsY + resultsHeight - 50
          const buttonWidth = 200
          const buttonHeight = 30

          drawDigitalRect(
            buttonX,
            buttonY,
            buttonWidth,
            buttonHeight,
            "rgba(147, 51, 234, 0.3)",
            "rgba(147, 51, 234, 0.7)",
          )

          drawDigitalText("IMPLEMENTAR SERVIÇOS", buttonX + 30, buttonY + 20, 14, "#ffffff")

          // Efeito de pulsação no botão
          const pulseOpacity = ((Math.sin(time * 0.005) + 1) / 2) * 0.3 + 0.2

          ctx.fillStyle = `rgba(147, 51, 234, ${pulseOpacity})`
          ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight)
        }
      }

      // Efeito de escaneamento global
      const globalScanY = (Math.sin(time * 0.0005) * 0.5 + 0.5) * rect.height
      const globalScanGradient = ctx.createLinearGradient(0, globalScanY - 20, 0, globalScanY + 20)
      globalScanGradient.addColorStop(0, "rgba(147, 51, 234, 0)")
      globalScanGradient.addColorStop(0.5, "rgba(147, 51, 234, 0.1)")
      globalScanGradient.addColorStop(1, "rgba(147, 51, 234, 0)")

      ctx.fillStyle = globalScanGradient
      ctx.fillRect(0, globalScanY - 20, rect.width, 40)

      // Efeito de ruído digital
      for (let i = 0; i < 100; i++) {
        if (Math.random() < 0.01) {
          const noiseX = Math.random() * rect.width
          const noiseY = Math.random() * rect.height
          const noiseWidth = Math.random() * 100 + 50
          const noiseHeight = Math.random() * 5 + 1

          ctx.fillStyle = "rgba(147, 51, 234, 0.1)"
          ctx.fillRect(noiseX, noiseY, noiseWidth, noiseHeight)
        }
      }

      // Efeito de glitch ocasional
      if (Math.random() < 0.01) {
        const glitchX = Math.random() * rect.width
        const glitchY = Math.random() * rect.height
        const glitchWidth = Math.random() * 100 + 20
        const glitchHeight = Math.random() * 20 + 5

        ctx.fillStyle = "rgba(0, 255, 255, 0.2)"
        ctx.fillRect(glitchX, glitchY, glitchWidth, glitchHeight)
      }

      // Timestamp
      const date = new Date()
      const timestamp = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`

      drawDigitalText(timestamp, rect.width - 200, rect.height - 20, 12, "#00ffff80")

      // Coordenadas
      const coords = `LAT: 37.7749° N  LON: 122.4194° W  ALT: 142m`

      drawDigitalText(coords, 20, rect.height - 20, 12, "#00ffff80")

      // Continuar animação
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted])

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden rounded-xl">
      {/* Fundo escuro */}
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Canvas para renderização avançada */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{
          transform: isHovering
            ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
            : "perspective(1000px)",
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      />

      {/* Efeito de reflexo */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 hologram-reflection"></div>
      </div>

      {/* Overlay de brilho */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-fuchsia-600/5 to-transparent"></div>
      </div>
    </div>
  )
}

export default function PromoBanner() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
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
                <div className="h-[350px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/30">
                  {isMounted && <FuturisticServiceScanner />}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hologram-reflection {
          animation: reflection 8s ease-in-out infinite;
        }
        
        @keyframes reflection {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .scan-line {
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(350px); }
        }
      `}</style>
    </section>
  )
}

