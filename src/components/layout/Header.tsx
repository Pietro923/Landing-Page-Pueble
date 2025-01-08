'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Marcar como cargado inmediatamente después del montaje
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: 'hero', label: 'Inicio' },
    { href: 'equipo', label: 'Equipo' },
    { href: 'servicios', label: 'Servicios' },
    { href: 'nosotros', label: 'Nosotros' },
    { href: 'empresa', label: 'Empresa' },
    { href: 'contacto', label: 'Contacto' },
  ];

  return (
    <motion.header 
      initial={{ y: 0, backgroundColor: 'rgb(153, 27, 27)' }} // Empezamos con el color rojo
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
          <motion.a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')} 
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="imagenes/grupoPueble2.png" 
              alt="Logo de Pueble S.A." 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16 w-24' : 'h-20 w-28'
              }`}
            />
          </motion.a>

          {/* Navegación Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li 
                  key={item.href}
                  whileHover={{ y: -2 }}
                >
                  <a 
                    href={`#${item.href}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-white transition-all duration-300 px-4 py-2 rounded-lg
                              relative overflow-hidden
                              ${activeSection === item.href 
                                ? 'text-red-200 font-semibold' 
                                : 'hover:text-red-300'}`}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-300"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
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
                    <a 
                      href={`#${item.href}`}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block transition-all duration-300 py-2 px-4 rounded-lg
                                ${activeSection === item.href 
                                  ? 'bg-red-700 text-white font-semibold' 
                                  : 'text-white hover:bg-red-700/50 hover:text-red-300'}`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;