"use client"
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button"
import { ChevronRight, Tractor, Award, Clock, Users } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from 'next/image';

// Tipos TypeScript mejorados
interface ImageItem {
  src: string;
  type: 'photo' | 'logo';
  bgColor?: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Constantes extraídas para mejor mantenimiento
const TIMERS = {
  TEXT_INTERVAL: 4000,
  IMAGE_INTERVAL: 5000,
  TRANSITION_DURATION: 500,
  AUTOPLAY_RESUME: 15000,
} as const;

const DESCRIPTION_SECTIONS = [
  "Desde el año de su fundación en el 2003 entendimos que la única manera de crecer era comercializar maquinarias de altísima calidad y evolución tecnológica.",
  "Luego, nos llevó casi 8 años entender que la mayor inversión debíamos hacerla en Postventa y a partir de ahí, se convirtió en la unidad de negocios más importante de la empresa.",
  "Hoy nuestra estrategia está basada en la permanente inversión en tecnología y en la cercanía al cliente atendiendo las 24 horas del día y respetando nuestra palabra Siempre."
] as const;

const FEATURES: Feature[] = [
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
] as const;

const ALL_IMAGES: ImageItem[][] = [
  [
    { 
      src: "/imagenes/inicio/carousel1.webp", 
      type: "photo",
      alt: "Maquinaria agrícola en acción" 
    },
    { 
      src: "/imagenes/equipment/case/caselogo.webp", 
      type: "logo", 
      bgColor: "bg-white", 
      width: 300, 
      height: 200,
      alt: "Logo Case"
    },
    { 
      src: "/imagenes/inicio/carousel3.webp", 
      type: "photo",
      alt: "Equipos de construcción"
    },
  ],
  [
    { 
      src: "/imagenes/inicio/asd1.webp", 
      type: "photo",
      alt: "Tractores en el campo"
    },
    { 
      src: "/imagenes/equipment/jcb/jcb.webp", 
      type: "logo", 
      bgColor: "bg-white", 
      width: 300, 
      height: 200,
      alt: "Logo JCB"
    },
    { 
      src: "/imagenes/inicio/asd3.webp", 
      type: "photo",
      alt: "Maquinaria pesada"
    },
  ],
] as const;

// Hook personalizado para manejar la lógica del autoplay
const useAutoPlay = (callback: () => void, delay: number, isActive: boolean) => {
  const callbackRef = useRef(callback);
  
  // Actualizar la referencia del callback sin reiniciar el efecto
  useEffect(() => {
    callbackRef.current = callback;
  });
  
  useEffect(() => {
    if (!isActive) return;
    
    const timer = setTimeout(() => {
      callbackRef.current();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay, isActive]); // Removido callback de las dependencias
};

// Hook personalizado para manejar transiciones
const useTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const executeWithTransition = useCallback(async (action: () => void) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    await new Promise(resolve => setTimeout(resolve, TIMERS.TRANSITION_DURATION));
    action();
    await new Promise(resolve => setTimeout(resolve, TIMERS.TRANSITION_DURATION));
    
    setIsTransitioning(false);
  }, [isTransitioning]);
  
  return { isTransitioning, executeWithTransition };
};

export default function HeroPreview() {
  // Estados
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  
  // Hooks personalizados
  const { isTransitioning, executeWithTransition } = useTransition();
  
  // Memoización de valores calculados
  const currentImages = useMemo(() => ALL_IMAGES[currentImageSet], [currentImageSet]);
  
  // Función para cambiar sección de texto
  const nextTextSection = useCallback(() => {
    setActiveSection(prev => (prev + 1) % DESCRIPTION_SECTIONS.length);
  }, []);
  
  // Función para cambiar set de imágenes
  const nextImageSet = useCallback(() => {
    executeWithTransition(() => {
      setCurrentImageSet(prev => (prev + 1) % ALL_IMAGES.length);
    });
  }, [executeWithTransition]);
  
  // Función para navegación manual
  const handleManualNavigation = useCallback(() => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), TIMERS.AUTOPLAY_RESUME);
  }, []);
  
  // Función para ir a una sección específica de texto
  const goToTextSection = useCallback((index: number) => {
    setActiveSection(index);
  }, []);
  
  // Función para ir a un set específico de imágenes
  const goToImageSet = useCallback((index: number) => {
    setCurrentImageSet(index);
    handleManualNavigation();
  }, [handleManualNavigation]);
  
  // Función para scroll suave
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  // Auto-avance del texto (con dependencias estables)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % DESCRIPTION_SECTIONS.length);
    }, TIMERS.TEXT_INTERVAL);
    
    return () => clearInterval(textInterval);
  }, []); // Sin dependencias para evitar reinicios
  
  // Auto-avance de imágenes
  useAutoPlay(nextImageSet, TIMERS.IMAGE_INTERVAL, autoPlay && !isTransitioning);
  
  // Componente para indicadores reutilizable
  const Indicators = ({ 
    total, 
    current, 
    onSelect, 
    className = "" 
  }: {
    total: number;
    current: number;
    onSelect: (index: number) => void;
    className?: string;
  }) => (
    <div className={`flex justify-center gap-3 ${className}`}>
      {Array.from({ length: total }, (_, idx) => (
        <button 
          key={idx} 
          onClick={() => onSelect(idx)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            idx === current ? 'bg-red-500 scale-110' : 'bg-gray-400 opacity-50'
          }`}
          aria-label={`Ir al elemento ${idx + 1}`}
        />
      ))}
    </div>
  );
  
  // Componente para tarjeta de característica
  const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:shadow-lg border border-white/10"
    >
      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
        {feature.icon} 
      </div>
      <h2 className="text-lg font-semibold text-white mb-2">{feature.title}</h2>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
  
  // Componente para item del carrusel
  const CarouselItemComponent = ({ image, index }: { image: ImageItem; index: number }) => (
    <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] ${
          image.type === 'logo' 
            ? `${image.bgColor || 'bg-white'} flex items-center justify-center p-4` 
            : 'bg-gradient-to-t from-black/50 to-transparent'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt || `Imagen ${index + 1}`}
          width={image.width || 400}
          height={image.height || 300}
          className={image.type === 'logo' 
            ? "w-auto h-auto max-w-[80%] max-h-[80%] object-contain mx-auto" 
            : "w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          }
          priority={index === 0} // Optimización de carga
        />
        {image.type === 'photo' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.div>
    </CarouselItem>
  );

  return (
    <div className="relative min-h-screen flex flex-col justify-center">
      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-8 pt-20 pb-12">
        {/* Título */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl lg:text-8xl font-bold text-white px-4"
        >
          Bienvenido a <span className="italic">Pueble S.A</span>
        </motion.h1>
        
        {/* Descripción con animación entre secciones */}
        <div className="max-w-3xl mx-auto px-4 min-h-24">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300"
            >
              {DESCRIPTION_SECTIONS[activeSection]}
            </motion.p>
          </AnimatePresence>
          
          {/* Indicadores para el texto */}
          <Indicators
            total={DESCRIPTION_SECTIONS.length}
            current={activeSection}
            onSelect={goToTextSection}
            className="mt-6"
          />
        </div>
        
        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 px-4"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 text-base"
            onClick={() => scrollToSection("marcas")}
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
      
      {/* Carrusel de imágenes */}
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
              {currentImages.map((image, index) => (
                <CarouselItemComponent
                  key={`${currentImageSet}-${index}`}
                  image={image}
                  index={index}
                />
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores de sets de imágenes */}
      <Indicators
        total={ALL_IMAGES.length}
        current={currentImageSet}
        onSelect={goToImageSet}
        className="mb-6"
      />
      
      {/* Tarjetas de características */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto relative z-10"
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </motion.div>
    </div>
  );
}