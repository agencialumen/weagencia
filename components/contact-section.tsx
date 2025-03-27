"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio de email
      // Em um ambiente real, você usaria um serviço como EmailJS, SendGrid, etc.
      // Aqui estamos apenas simulando o envio

      // Exemplo de como seria com EmailJS:
      // await emailjs.send(
      //   "service_id",
      //   "template_id",
      //   {
      //     from_name: formState.name,
      //     from_email: formState.email,
      //     company: formState.company,
      //     message: formState.message,
      //     to_email: "lumenagenciaofc@gmail.com",
      //   },
      //   "user_id"
      // );

      // Simulação de tempo de envio
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostrar mensagem de sucesso
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.")

      // Limpar formulário
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Fale conosco – estamos aqui para ajudar!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/30 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>
              <p className="text-gray-300 mb-8">
                Tem um projeto em mente ou quer saber mais sobre nossos serviços? Preencha o formulário e nossa equipe
                entrará em contato rapidamente.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-3 rounded-lg text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-400">lumenagenciaofc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-3 rounded-lg text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Telefone</h4>
                    <p className="text-gray-400">+55 (21) 96457-9176</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-3 rounded-lg text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Endereço</h4>
                    <p className="text-gray-400">Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Seu Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-purple-900/20 border-purple-900/50 focus:border-purple-500 text-white placeholder:text-gray-500"
                    placeholder="João Silva"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Seu Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-purple-900/20 border-purple-900/50 focus:border-purple-500 text-white placeholder:text-gray-500"
                    placeholder="joao@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome da Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="bg-purple-900/20 border-purple-900/50 focus:border-purple-500 text-white placeholder:text-gray-500"
                    placeholder="Sua Empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-purple-900/20 border-purple-900/50 focus:border-purple-500 text-white placeholder:text-gray-500 min-h-[120px]"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full py-6 shadow-[0_0_20px_rgba(168,85,247,0.5)] text-lg group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

