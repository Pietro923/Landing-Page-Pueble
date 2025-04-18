"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/empresa', label: 'Empresa' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const equiposItems = [
    { href: '/equipos/case', label: 'Case IH', icon: '/imagenes/equipment/case/case.webp' },
    { href: '/equipos/jcb', label: 'JCB', icon: '/imagenes/equipment/jcb/jcb.svg' },
    { href: 'https://www.agroads.com.ar/e/pueble-sa/', label: 'Usados', icon: '/imagenes/equipment/agroads/agroads.webp', target: "_blank" },
  ]

  // Define los enlaces de redes sociales
const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
];

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
          <Link href="/" >
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
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ y: -1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className={`text-white px-3 py-2 rounded-md transition-all duration-200 relative group
                      ${isActivePage(item.href) ? 'font-medium' : 'hover:text-red-400'}`}
                  >
                    {item.label}
                    <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-md transition-all duration-200" />
                    {isActivePage(item.href) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-red-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              {/* Dropdown Equipos */}
              <motion.li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-white px-3 py-2 rounded-md transition-all duration-200 relative group
                    ${isActivePage('/equipos') ? 'font-medium' : 'hover:text-red-400'}`}
                >
                  Equipos
                  <motion.span
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.span>
                  <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-md transition-all duration-200" />
                </button>
  
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-zinc-800/90 backdrop-blur-sm rounded-lg shadow-xl border border-zinc-700/50 overflow-hidden"
                    >
                      {equiposItems.map((item) => (
                        item.href.startsWith("http") ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-3 hover:bg-zinc-700/50 transition-all duration-200 group"
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-8 h-8 object-contain mr-3 group-hover:scale-105 transition-transform duration-200"
                            />
                            <span className="text-white/90 group-hover:text-white font-medium">{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center px-4 py-3 hover:bg-zinc-700/50 transition-all duration-200 group"
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-8 h-8 object-contain mr-3 group-hover:scale-105 transition-transform duration-200"
                            />
                            <span className="text-white/90 group-hover:text-white font-medium">{item.label}</span>
                          </Link>
                        )
                      ))}

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>

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
            {/* Redes Sociales */}
            <div className="hidden md:flex items-center space-x-4">
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
                    <Icon className="w-5 h-5" />
                  </a>
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
              className="md:hidden overflow-hidden  backdrop-blur-sm"
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
                className="flex flex-col space-y-1 py-4"
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

                {/* Sección de Equipos */}
                <motion.li
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                  className="space-y-1"
                >
                  <div className="px-4 py-2">
                    <div className="text-white/80 font-medium mb-2">Equipos</div>
                    <div className="ml-4 space-y-2">
                      {equiposItems.map((item) => (
                        item.href.startsWith('http') ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center py-2 px-3 rounded-md text-white hover:bg-red-500/10 group"
                            onClick={handleNavigation}
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-6 h-6 object-contain mr-2 group-hover:scale-105 transition-transform duration-200"
                            />
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleNavigation}
                            className="flex items-center py-2 px-3 rounded-md text-white hover:bg-red-500/10 group"
                          >
                            <img
                              src={item.icon}
                              alt={item.label}
                              className="w-6 h-6 object-contain mr-2 group-hover:scale-105 transition-transform duration-200"
                            />
                            <span>{item.label}</span>
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