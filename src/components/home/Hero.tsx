"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function HeroPreview() {
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/imagenes/inauguracion/conse5.mp4" type="video/mp4" />
        </video>
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <Play className="w-4 h-4 text-red-400" fill="currentColor" />
            <span className="text-red-300 font-medium">{t("hero.excellence")}</span>
          </motion.div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Bienvenido a
            <br />
            <span className="text-red-500 italic">Pueble S.A</span>
          </h1>

          {/* Título Secundario */}
          <p className="text-xl md:text-2xl font-bold text-white leading-tight">
            Una Empresa de
            <br />
            <span className="text-red-500 italic">Grupo Pueble</span>
          </p>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Líderes en maquinaria agrícola y de construcción. 
            Innovación, calidad y servicio excepcional desde 2003.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-7 font-semibold"
              onClick={() => scrollToSection("marcas")}
            >
              Explorar productos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-2xl text-white hover:text-white text-lg px-8 py-7 font-semibold transition-all duration-300"
              asChild
            >
              <a href="/contacto">Contactar ahora</a>
            </Button>
          </div>

          {/* Stats rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-12 pb-4 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">20+</div>
              <div className="text-sm text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Soporte técnico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-sm text-gray-400">Compromiso</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("marcas")}
        >
        </motion.div>
      </motion.div>
    </div>
  );
}