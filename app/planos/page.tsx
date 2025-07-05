"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Tipos de serviços disponíveis para o plano personalizado
const availableServices = [
  { id: "website", name: "Website Responsivo", price: 120 },
  { id: "ecommerce", name: "E-commerce", price: 180 },
  { id: "landing", name: "Landing Page", price: 90 },
  { id: "seo", name: "Otimização SEO", price: 70 },
  { id: "social", name: "Gestão de Redes Sociais", price: 100 },
  { id: "ads", name: "Campanhas de Anúncios", price: 120 },
  { id: "branding", name: "Identidade Visual", price: 150 },
  { id: "app", name: "Aplicativo Mobile", price: 200 },
  { id: "dashboard", name: "Dashboard Personalizado", price: 160 },
  { id: "support", name: "Suporte Técnico 24/7", price: 80 },
]

// Planos pré-definidos
const predefinedPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    description: "Ideal para pequenos negócios que estão começando sua presença digital",
    features: [
      "Website Responsivo",
      "Otimização SEO Básica",
      "Integração com Redes Sociais",
      "Formulário de Contato",
      "Hospedagem Incluída",
      "Suporte por Email",
    ],
    popular: false,
    whatsappMessage: "Olá! Estou interessado no plano Starter da Lokaly Hub. Poderia me fornecer mais informações?",
  },
  {
    id: "pro",
    name: "Professional",
    price: 199,
    description: "Perfeito para empresas em crescimento que precisam de uma presença digital mais robusta",
    features: [
      "Website Responsivo Premium",
      "E-commerce Básico",
      "Otimização SEO Avançada",
      "Gestão de Redes Sociais (2 plataformas)",
      "Campanhas de Anúncios Básicas",
      "Analytics e Relatórios Mensais",
      "Hospedagem Premium",
      "Suporte Prioritário",
    ],
    popular: true,
    whatsappMessage:
      "Olá! Estou interessado no plano Professional da Lokaly Hub. Poderia me fornecer mais informações?",
  },
  {
    id: "infinity",
    name: "Infinity",
    price: 349,
    description: "Solução completa para empresas que buscam dominar o ambiente digital",
    features: [
      "Website + E-commerce Completo",
      "Aplicativo Mobile Básico",
      "Dashboard Personalizado",
      "Otimização SEO Premium",
      "Gestão de Redes Sociais (4 plataformas)",
      "Campanhas de Anúncios Avançadas",
      "Identidade Visual Completa",
      "Analytics e Relatórios Semanais",
      "Hospedagem Premium",
      "Suporte 24/7 Dedicado",
    ],
    popular: false,
    whatsappMessage: "Olá! Estou interessado no plano Infinity da Lokaly Hub. Poderia me fornecer mais informações?",
  },
]

export default function PlanosPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showAllServices, setShowAllServices] = useState(false)

  // Calcular o preço total do plano personalizado
  const calculateCustomPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = availableServices.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)
  }

  // Alternar a seleção de um serviço
  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId))
    } else {
      setSelectedServices([...selectedServices, serviceId])
    }
  }

  // Serviços a serem exibidos (todos ou apenas os primeiros 5)
  const displayedServices = showAllServices ? availableServices : availableServices.slice(0, 5)

  // Construir a mensagem do WhatsApp para o plano personalizado
  const buildCustomWhatsappMessage = () => {
    const selectedServiceNames = selectedServices
      .map((id) => {
        const service = availableServices.find((s) => s.id === id)
        return service?.name
      })
      .join(", ")

    return `Olá! Estou interessado em um plano personalizado da Lokaly Hub com os seguintes serviços: ${selectedServiceNames}. Poderia me fornecer mais informações?`
  }

  // Codificar a mensagem para URL
  const encodeWhatsappMessage = (message: string) => {
    return encodeURIComponent(message)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#0a0118] text-white">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Cabeçalho da página */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text mb-4"
            >
              Planos & Preços
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 max-w-2xl"
            >
              Escolha o plano ideal para impulsionar sua presença digital. Todos os planos incluem suporte dedicado e
              atualizações contínuas.
            </motion.p>
          </div>

          <Link href="/">
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-900/20 rounded-full px-4 py-2 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
        </div>

        {/* Banner promocional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-900/30 to-black border border-purple-500/20 rounded-2xl p-6 md:p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-4">
              OFERTA ESPECIAL
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Primeiro mês com <span className="text-purple-400">50% de desconto</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              Assine qualquer plano agora e ganhe 50% de desconto no primeiro mês. Além disso, oferecemos uma análise
              gratuita da sua presença digital atual.
            </p>
            <div className="inline-block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <a
                  href="https://wa.me/5521964579176?text=Olá!%20Estou%20interessado%20na%20oferta%20especial%20com%2050%%20de%20desconto%20no%20primeiro%20mês.%20Poderia%20me%20fornecer%20mais%20informações?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full px-6 py-3 shadow-[0_0_20px_rgba(168,85,247,0.5)] inline-flex items-center group"
                >
                  Aproveitar Oferta
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Planos pré-definidos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
            >
              Nossos Planos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Soluções completas para atender às necessidades do seu negócio
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {predefinedPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${
                  plan.popular
                    ? "from-purple-900/30 to-black border-purple-500/30"
                    : "from-purple-900/20 to-black border-purple-900/20"
                } border rounded-2xl overflow-hidden relative ${
                  plan.popular ? "shadow-[0_0_30px_rgba(147,51,234,0.2)]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold text-white">R${plan.price}</span>
                    <span className="text-gray-400 text-sm">/mês</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute -inset-1 ${
                        plan.popular ? "bg-gradient-to-r from-purple-600 to-fuchsia-600" : "bg-purple-500/50"
                      } rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ${
                        plan.popular ? "animate-pulse" : ""
                      }`}
                    ></div>
                    <a
                      href={`https://wa.me/5521964579176?text=${encodeWhatsappMessage(plan.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
                          : "bg-purple-900/40 hover:bg-purple-900/60 text-white"
                      } border-none rounded-full py-3 inline-flex items-center justify-center group transition-all duration-300`}
                    >
                      Contratar Plano
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Plano personalizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl overflow-hidden p-6 md:p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              Plano Personalizado
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Selecione apenas os serviços que você precisa e crie um plano sob medida para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedServices.includes(service.id)
                    ? "bg-purple-900/40 border border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.2)]"
                    : "bg-black/40 border border-purple-900/20 hover:bg-purple-900/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      selectedServices.includes(service.id)
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                        : "bg-gray-700"
                    }`}
                  >
                    {selectedServices.includes(service.id) && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className="text-white">{service.name}</span>
                </div>
                <span className="text-purple-300 font-medium">R${service.price}/mês</span>
              </div>
            ))}
          </div>

          {/* Botão para mostrar/esconder mais serviços */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              {showAllServices ? (
                <>
                  Mostrar menos
                  <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Mostrar mais opções
                  <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Resumo e botão de contratação */}
          <div className="bg-black/40 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Seu Plano Personalizado</h3>
              <p className="text-gray-400 mb-2">
                {selectedServices.length === 0
                  ? "Selecione os serviços desejados acima"
                  : `${selectedServices.length} serviço(s) selecionado(s)`}
              </p>
              {selectedServices.length > 0 && (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-white">R${calculateCustomPrice()}</span>
                  <span className="text-gray-400 text-sm ml-1">/mês</span>
                </div>
              )}
            </div>

            <a
              href={`https://wa.me/5521964579176?text=${encodeWhatsappMessage(buildCustomWhatsappMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative ${
                selectedServices.length === 0
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
              } text-white border-none rounded-full px-6 py-3 inline-flex items-center group transition-all duration-300`}
              onClick={(e) => selectedServices.length === 0 && e.preventDefault()}
            >
              Contratar Plano Personalizado
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-900/30 rounded-2xl overflow-hidden p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Tire suas dúvidas sobre nossos planos e serviços</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-2">Posso mudar de plano depois?</h3>
              <p className="text-gray-400 text-sm">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entrarão em vigor
                no próximo ciclo de faturamento.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-2">Qual é o prazo de entrega dos projetos?</h3>
              <p className="text-gray-400 text-sm">
                O prazo varia de acordo com a complexidade do projeto. Websites simples podem levar de 1 a 2 semanas,
                enquanto projetos mais complexos podem levar de 4 a 8 semanas.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-2">Os planos exigem contrato de fidelidade?</h3>
              <p className="text-gray-400 text-sm">
                Não exigimos contratos de fidelidade. Você pode cancelar seu plano a qualquer momento, com aviso prévio
                de 30 dias.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-2">
                O que acontece se eu precisar de um serviço adicional?
              </h3>
              <p className="text-gray-400 text-sm">
                Você pode adicionar serviços extras ao seu plano a qualquer momento. Entre em contato conosco para
                discutir suas necessidades e obter um orçamento personalizado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}

