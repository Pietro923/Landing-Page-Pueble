'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/equipos', label: 'Equipos' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = () => {
    setIsMobileMenuOpen(false)
  }

  const isActivePage = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header 
      initial={{ y: 0, backgroundColor: 'rgb(153, 27, 27)' }}
      animate={{ 
        y: 0,
        backgroundColor: isScrolled ? 'rgba(153, 27, 27, 0.95)' : 'rgb(153, 27, 27)'
      }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-md shadow-lg py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/"
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/imagenes/grupoPueble2.png" 
                alt="Logo de Pueble S.A." 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-16 w-24' : 'h-20 w-28'
                }`}
              />
            </motion.div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li 
                  key={item.href}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className={`text-white transition-all duration-300 px-4 py-2 rounded-lg
                              relative overflow-hidden
                              ${isActivePage(item.href)
                                ? 'text-red-200 font-semibold' 
                                : 'hover:text-red-300'}`}
                  >
                    {item.label}
                    {isActivePage(item.href) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-300"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Botón Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-red-300 hover:bg-red-700/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul 
                className="flex flex-col space-y-2 pt-4 pb-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.href}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className={`block transition-all duration-300 py-2 px-4 rounded-lg
                                ${isActivePage(item.href)
                                  ? 'bg-red-700 text-white font-semibold' 
                                  : 'text-white hover:bg-red-700/50 hover:text-red-300'}`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header