"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServiciosDropdownOpen, setIsServiciosDropdownOpen] = useState(false)
  const [isEquiposDropdownOpen, setIsEquiposDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const serviciosItems = [
    { href: '/servicios/case', label: 'Case IH', icon: '/imagenes/equipment/case/case.webp' },
    { href: '/servicios/jcb', label: 'JCB', icon: '/imagenes/equipment/jcb/jcb.svg' },
  ]
  
  const equiposItems = [
    { href: '/equipos/case', label: 'Case IH', icon: '/imagenes/equipment/case/case.webp' },
    { href: '/equipos/jcb', label: 'JCB', icon: '/imagenes/equipment/jcb/jcb.svg' },
    { href: 'https://www.agroads.com.ar/e/pueble-sa/', label: 'Usados', icon: '/imagenes/equipment/agroads/agroads.webp', target: "_blank" },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
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
    setIsServiciosDropdownOpen(false)
    setIsEquiposDropdownOpen(false)
  }

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
      setIsMobileMenuOpen(false) 
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const isActivePage = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="fixed w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-zinc-950/90 to-zinc-950/85"/>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/imagenes/logos/LogoPueble.webp" 
                alt="Logo de Pueble S.A."
                width={152}
                height={150}
                priority
              />
            </motion.div>
          </Link>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className={`text-white px-4 py-2 rounded-md transition-all duration-300 relative group text-sm uppercase tracking-wide font-medium
                      ${isActivePage(item.href) ? 'text-red-400' : 'hover:text-red-400'}`}
                  >
                    {item.label}
                    <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-md transition-all duration-300" />
                    {isActivePage(item.href) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-1 right-1 h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              {/* Dropdown Servicios */}
              <motion.li
                className="relative"
                onMouseEnter={() => setIsServiciosDropdownOpen(true)}
                onMouseLeave={() => setIsServiciosDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-white px-4 py-2 rounded-md transition-all duration-300 relative group text-sm uppercase tracking-wide font-medium
                    ${isActivePage('/servicios') ? 'text-red-400' : 'hover:text-red-400'}`}
                >
                  Servicios
                  <motion.span
                    animate={{ rotate: isServiciosDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                  <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-md transition-all duration-300" />
                </button>

                <AnimatePresence>
                  {isServiciosDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-60 bg-zinc-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-zinc-700/30 overflow-hidden"
                    >
                      {serviciosItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleNavigation}
                          className="flex items-center px-5 py-4 hover:bg-zinc-800 transition-all duration-200 group border-b border-zinc-800/50 last:border-0"
                        >
                          <div className="bg-zinc-800 p-2 rounded-md mr-3 group-hover:bg-zinc-700 transition-colors duration-200">
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-white/90 group-hover:text-white text-sm font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              
              {/* Dropdown Equipos */}
              <motion.li
                className="relative"
                onMouseEnter={() => setIsEquiposDropdownOpen(true)}
                onMouseLeave={() => setIsEquiposDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-white px-4 py-2 rounded-md transition-all duration-300 relative group text-sm uppercase tracking-wide font-medium
                    ${isActivePage('/equipos') ? 'text-red-400' : 'hover:text-red-400'}`}
                >
                  Equipos
                  <motion.span
                    animate={{ rotate: isEquiposDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                  <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-md transition-all duration-300" />
                </button>

                <AnimatePresence>
                  {isEquiposDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-60 bg-zinc-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-zinc-700/30 overflow-hidden"
                    >
                      {equiposItems.map((item) => (
                        item.href.startsWith("http") ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-5 py-4 hover:bg-zinc-800 transition-all duration-200 group border-b border-zinc-800/50 last:border-0"
                          >
                            <div className="bg-zinc-800 p-2 rounded-md mr-3 group-hover:bg-zinc-700 transition-colors duration-200">
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <span className="text-white/90 group-hover:text-white text-sm font-medium">{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center px-5 py-4 hover:bg-zinc-800 transition-all duration-200 group border-b border-zinc-800/50 last:border-0"
                          >
                            <div className="bg-zinc-800 p-2 rounded-md mr-3 group-hover:bg-zinc-700 transition-colors duration-200">
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <span className="text-white/90 group-hover:text-white text-sm font-medium">{item.label}</span>
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>

            <div className="h-8 w-px bg-zinc-700/50"></div>

            {/* Search Bar */}
            <div className="flex items-center space-x-2 ml-4">
              <Input 
                type="text" 
                placeholder="Buscar..." 
                className="w-48 text-white bg-zinc-800/50 border-zinc-700 focus:border-red-500 focus:ring-red-500 [&::placeholder]:text-white/70"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                variant="outline" 
                size="icon" 
                className="text-white hover:bg-red-700 border-zinc-700 bg-red-800 hover:text-white"
                onClick={handleSearch}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" aria-hidden="true"/>
              </Button>
            </div>

            <div className="h-8 w-px bg-zinc-700/50"></div>
            
            {/* Redes Sociales */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-red-500/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden backdrop-blur-sm"
            >
              {/* Mobile Search Bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center space-x-2 mt-4">
                  <Input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full text-white bg-zinc-800/50 border-zinc-700 focus:border-red-500 focus:ring-red-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="text-white hover:bg-red-700 border-zinc-700 bg-red-800 hover:text-white"
                    onClick={handleSearch}
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <motion.ul 
                className="flex flex-col space-y-1 py-2"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {/* Navegación principal */}
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
                      className={`block px-4 py-2 rounded-md transition-all duration-200 
                        ${isActivePage(item.href)
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white font-medium'
                          : 'text-white hover:bg-red-500/10'}`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Sección de Servicios */}
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="mt-2"
                >
                  <div className="px-6 py-2">
                    <div className="text-red-500 font-semibold uppercase text-xs tracking-wider mb-3">Servicios</div>
                    <div className="ml-2 space-y-1">
                      {serviciosItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleNavigation}
                          className="flex items-center py-2 px-3 rounded-lg text-white bg-zinc-800/50 hover:bg-zinc-800 mb-1 group"
                        >
                          <div className="bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-700 transition-colors duration-200">
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="ml-2 font-medium text-sm">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.li>

                {/* Sección de Equipos */}
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="mt-2"
                >
                  <div className="px-6 py-2">
                    <div className="text-red-500 font-semibold uppercase text-xs tracking-wider mb-3">Equipos</div>
                    <div className="ml-2 space-y-1">
                      {equiposItems.map((item) => (
                        item.href.startsWith('http') ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center py-2 px-3 rounded-lg text-white bg-zinc-800/50 hover:bg-zinc-800 mb-1 group"
                            onClick={handleNavigation}
                          >
                            <div className="bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-700 transition-colors duration-200">
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <span className="ml-2 font-medium text-sm">{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center py-2 px-3 rounded-lg text-white bg-zinc-800/50 hover:bg-zinc-800 mb-1 group"
                          >
                            <div className="bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-700 transition-colors duration-200">
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <span className="ml-2 font-medium text-sm">{item.label}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </motion.li>
              </motion.ul>

              {/* Redes Sociales en Mobile */}
              <div className="px-4 py-4 border-t border-zinc-700/50">
                <div className="flex items-center justify-center space-x-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-400 transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar