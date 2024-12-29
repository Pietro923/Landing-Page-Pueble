'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-red-800/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-red-800 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')} 
            className="relative z-10"
          >
            <img 
              src="imagenes/grupoPueble2.png" 
              alt="Logo de Pueble S.A." 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16 w-24' : 'h-20 w-28'
              }`}
            />
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={`#${item.href}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white hover:text-red-300 transition-colors duration-300 
                             relative after:content-[''] after:absolute after:w-full after:h-0.5 
                             after:bg-red-300 after:left-0 after:-bottom-1 after:scale-x-0 
                             after:transition-transform after:duration-300 
                             hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-red-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-6"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={`#${item.href}`}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block text-white hover:text-red-300 transition-colors 
                             duration-300 py-2 px-4 rounded-lg hover:bg-red-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;