'use client'
import { useState, useEffect } from 'react'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Equipment from "@/components/sections/Equipment"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Company from "@/components/sections/Company"
import Contact from "@/components/sections/Contact"
import { MessageCircle, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar cuando mostrar el botón de scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="space-y-24">
          <section id="hero"><Hero /></section>
          <section id="equipo" className="scroll-mt-24"><Equipment /></section>
          <section id="servicios" className="scroll-mt-24"><Services /></section>
          <section id="nosotros" className="scroll-mt-24"><About /></section>
          <section id="empresa" className="scroll-mt-24"><Company /></section>
          <section id="contacto" className="scroll-mt-24"><Contact /></section>
        </div>
      </main>

      <Footer />
      
      {/* Botón de WhatsApp */}
      <motion.a
        href="https://wa.me/543816618632"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button 
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full h-14 w-14 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.a>

      {/* Botón de Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 left-4 z-50"
            aria-label="Volver arriba"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button 
              size="lg"
              variant="secondary"
              className="rounded-full h-14 w-14 shadow-lg"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}