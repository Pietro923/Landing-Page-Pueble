'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { ChevronRight, Tractor, Award, Clock, Users } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useCallback } from "react";
import Image from 'next/image';

export default function Hero() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  type ImageItem = {
    src: string;
    type: 'photo' | 'logo';
    bgColor?: string;
    width?: number;
    height?: number;
  };
  

  const features = [
    {
      icon: <Tractor className="w-6 h-6" />,
      title: "Maquinaria de Primera",
      description: "Equipos de alta calidad"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "20+ Años",
      description: "De experiencia en el sector"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Soporte 24/7",
      description: "Asistencia permanente"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipo Experto",
      description: "Personal calificado"
    }
  ];
  
  // Configuración de las imágenes con tipos y estilos específicos
  const allImages: ImageItem[][] = [
    [
      { src: "/imagenes/inicio/carousel1.webp", type: "photo" },
      { src: "/imagenes/equipment/case/caselogo.webp", type: "logo", bgColor: "bg-white", width: 300, height: 200 },
      { src: "/imagenes/inicio/carousel3.webp", type: "photo" },
    ],
    [
      { src: "/imagenes/inicio/asd1.webp", type: "photo" },
      { src: "/imagenes/equipment/jcb/jcb.webp", type: "logo", bgColor: "bg-white", width: 300, height: 200 },
      { src: "/imagenes/inicio/asd3.webp", type: "photo" },
    ],
  ];
  
  
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const images = allImages[currentImageSet];
  
  // Función para avanzar al siguiente set de imágenes con transición suave
  const nextImageSet = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Esperar a que termine la animación de desvanecimiento antes de cambiar las imágenes
    setTimeout(() => {
      setCurrentImageSet((prev) => (prev + 1) % allImages.length);
      
      // Finalizar la transición después de que las nuevas imágenes aparezcan
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  }, [allImages.length, isTransitioning]);
  
  // Efecto para cambiar automáticamente el set de imágenes cada 5 segundos
  useEffect(() => {
    if (!autoPlay || isTransitioning) return;
    
    const timer = setTimeout(() => {
      nextImageSet();
    }, 5000); // 5 segundos
    
    return () => clearTimeout(timer);
  }, [currentImageSet, autoPlay, nextImageSet, isTransitioning]);
  
  // Pausar autoplay cuando el usuario interactúa manualmente
  const handleManualNavigation = () => {
    setAutoPlay(false);
    // Reactivar después de un tiempo de inactividad
    setTimeout(() => setAutoPlay(true), 15000); // 15 segundos de inactividad
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center">
      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-8 pt-24 pb-12">

        {/* Título */}
        <h1 className="text-6xl lg:text-8xl font-bold text-white px-4">
           Bienvenido a <span className="italic">Pueble S.A</span>
        </h1>
        
        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          Tu socio confiable en maquinaria agrícola y de construcción de alta calidad, brindando soluciones innovadoras para el campo argentino.
        </motion.p>
        {/* Botones flotantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 px-4"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 text-base"
            onClick={() => document.getElementById("marcas")?.scrollIntoView({ behavior: "smooth" })}
          >
            Descubre nuestros productos
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-gray-600 hover:bg-gray-700 shadow-lg hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-105 text-white hover:text-white text-base"
            asChild
          >
            <a href="mailto:recepcion@pueblemaquinarias.com.ar">Contáctanos</a>
          </Button>
        </motion.div>
      </div>
      
      {/* Carrusel de imágenes mejorado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageSet}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-7xl mx-auto px-4 mb-12"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={`${currentImageSet}-${index}`} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`relative overflow-hidden bg-gradient-to-t from-black/50 to-transparent rounded-2xl shadow-2xl aspect-[4/3] ${image.type === 'logo' ? `${image.bgColor || 'bg-white'} flex items-center justify-center p-4` : ''}`}
                  >
                    <Image
  src={image.src}
  alt={`Imagen ${index + 1}`}
  width={image.width || 400}     // valores por defecto si no los tenés
  height={image.height || 300}
  className={image.type === 'logo' 
    ? "w-auto h-auto max-w-[80%] max-h-[80%] object-contain mx-auto" 
    : "w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
  }
  style={{ objectFit: image.type === 'logo' ? 'contain' : 'cover' }}
/>
                    {image.type === 'photo' && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores de sets de imágenes */}
      <div className="flex justify-center gap-3 mb-6">
        {allImages.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => {
              setCurrentImageSet(idx);
              handleManualNavigation();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentImageSet ? 'bg-red-500 scale-110' : 'bg-gray-400 opacity-50'}`}
            aria-label={`Ver set de imágenes ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Características en tarjetas transparentes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto relative z-10"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:shadow-lg border border-white/10"
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
              {feature.icon} 
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">{feature.title}</h2>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}