"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.15),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
              Lumen Digital
            </span>
          </Link>

          <p className="text-gray-400 mb-6 max-w-md">
            Iluminando experiências digitais através de soluções inovadoras e excelência criativa.
          </p>

          <div className="flex space-x-4 mb-6">
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:contato@lumendigital.com.br"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="#serviços" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Serviços
            </Link>
            <Link href="#portfólio" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Portfólio
            </Link>
            <Link href="#equipe" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Equipe
            </Link>
            <Link href="#contato" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Contato
            </Link>
          </div>

          <div className="border-t border-purple-900/30 pt-6 w-full">
            <p className="text-gray-400 text-sm text-center">
              &copy; {currentYear} Lumen Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

