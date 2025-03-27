"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Briefcase, Users, Mail } from "lucide-react"

export default function FloatingMenu() {
  const [activeSection, setActiveSection] = useState("início")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show menu after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine active section based on scroll position
      const sections = ["início", "serviços", "portfólio", "equipe", "contato"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "início", icon: <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
    { id: "serviços", icon: <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
    { id: "portfólio", icon: <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
    { id: "equipe", icon: <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
    { id: "contato", icon: <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -50,
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-full py-1.5 sm:py-2 px-1 shadow-[0_0_10px_rgba(147,51,234,0.1)]">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="group relative"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <div
                className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 text-white shadow-[0_0_5px_rgba(168,85,247,0.3)]"
                    : "text-gray-400 hover:text-white bg-black/20"
                }`}
              >
                {item.icon}

                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

