"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const equiposItems = [
    { href: '/equipos/case', label: 'Case IH', icon: '/imagenes/equipment/case/caseih.avif' },
    { href: '/equipos/jcb', label: 'JCB', icon: '/imagenes/equipment/jcb/jcb.png' },
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
    setIsDropdownOpen(false)
  }

  const isActivePage = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80' : 'bg-black/90'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/imagenes/grupoPueble.png"
                  alt="Logo de Pueble S.A."
                  className={`transition-all duration-300 ${isScrolled ? 'h-16 w-24' : 'h-20 w-28'}`}
                />
              </motion.div>
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavigation}
                      className={`text-white transition-all duration-300 px-4 py-2 rounded-lg
                        ${isActivePage(item.href) ? 'text-red-200 font-semibold' : 'hover:text-red-300'}`}
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
                
                {/* Dropdown Equipos Mejorado */}
                <motion.li
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center text-white transition-all duration-300 px-4 py-2 rounded-lg
                      ${isActivePage('/equipos') || isDropdownOpen ? 'text-red-200 font-semibold' : 'hover:text-red-300'}`}
                  >
                    Equipos
                    <motion.span
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {equiposItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-8 h-8 object-contain mr-3"
                            />
                            <span className="text-gray-800 font-medium">{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
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
                  
                  {/* Mobile Equipos Menu */}
                  <motion.li
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <div className="px-4 py-2">
                      <div className="text-white mb-2">Equipos</div>
                      <div className="ml-4 space-y-2">
                        {equiposItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center py-2 px-3 rounded-lg text-white hover:bg-red-700/50"
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-6 h-6 object-contain mr-2"
                            />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Navbar