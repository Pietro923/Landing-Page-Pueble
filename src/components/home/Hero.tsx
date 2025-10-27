"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HeroPreview() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const retryCountRef = useRef(0);
  const maxRetries = 3;
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Función para intentar reproducir el video de forma segura
  const tryPlayVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      retryCountRef.current = 0; // Resetear contador si reproduce correctamente
    } catch (error) {
      // Solo loguear si es un error real, no una interrupción esperada
      if (error instanceof Error && error.name !== 'AbortError') {
        console.warn('Error reproduciendo video:', error.message);
        
        // Reintentar solo si no hemos excedido el límite
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          setTimeout(() => tryPlayVideo(), 500);
        }
      }
      // Si es AbortError, simplemente lo ignoramos (es comportamiento normal del navegador)
    }
  };

  // Efecto principal para manejar el video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handler para cuando el video está listo
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      tryPlayVideo();
    };

    // Handler para cuando el video termina (backup del loop)
    const handleEnded = () => {
      video.currentTime = 0;
      tryPlayVideo();
    };

    // Handler para errores de carga
    const handleError = (e: Event) => {
      console.error("Error cargando video:", e);
      setIsVideoLoaded(false);
    };

    // Agregar event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Intentar cargar el video
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Manejar visibilidad de la pestaña
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRef.current && isVideoLoaded) {
        // Solo intentar reproducir si el video ya estaba cargado
        tryPlayVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVideoLoaded]);

  // Manejar cuando el usuario interactúa con la página (para navegadores que requieren interacción)
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current && isVideoLoaded) {
        tryPlayVideo();
      }
    };

    // Agregar listeners para diferentes tipos de interacción
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isVideoLoaded]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de poster como fallback */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" />
        )}
        
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/imagenes/inauguracion/conse5.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
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
            className="mt-3 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <Play className="w-4 h-4 text-red-400" fill="currentColor" />
            <span className="text-red-300 font-medium">{t("hero.excellence")}</span>
          </motion.div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {t('hero.welcome')}
            <br />
            <span className="text-red-600 italic">Pueble S.A.</span>
          </h1>

          {/* Título Secundario */}
          <p className="text-xl md:text-2xl font-bold text-white leading-tight text-center">
            {t('hero.gp')}
            <br />
            <Image 
              src="/imagenes/logos/LogoPueble.webp" 
              alt="Logo de Pueble S.A."
              width={230}
              height={200}
              priority
              className="mx-auto scale-110 md:scale-125 lg:scale-150 transition-transform duration-500"
            />
          </p>
          
          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-white bg-red-600 hover:bg-red-700 shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-7 font-semibold"
              onClick={() => scrollToSection("marcas")}
            >
              {t('hero.explore')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-2xl text-white hover:text-white text-lg px-8 py-7 font-semibold transition-all duration-300"
              asChild
            >
              <a href="/contacto">{t('hero.contact')}</a>
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
              <div className="text-sm text-gray-400">{t('stats.experience')}</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-sm text-gray-400">{t('stats.support')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-sm text-gray-400">{t('stats.commitment')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}