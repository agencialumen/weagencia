"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-900/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
                Lokaly Hub
              </span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/#início" className="text-gray-300 hover:text-white transition-colors relative group">
                  Início
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#serviços" className="text-gray-300 hover:text-white transition-colors relative group">
                  Serviços
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-300 hover:text-white transition-colors relative group">
                  Portfólio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#equipe" className="text-gray-300 hover:text-white transition-colors relative group">
                  Equipe
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-300 hover:text-white transition-colors relative group">
                  Contato
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link href="/planos">
              <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full px-6 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Comece Agora
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-b border-purple-900/20"
        >
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/#início"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/#serviços"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/projetos"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Portfólio
            </Link>
            <Link
              href="/#equipe"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Equipe
            </Link>
            <Link
              href="/#contato"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-900/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <div className="pt-4">
              <Link href="/planos" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Comece Agora
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

