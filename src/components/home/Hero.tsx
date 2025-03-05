'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight, Tractor, Award, Clock, Users } from 'lucide-react'
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Hero() {
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

  const images = [
  "/imagenes/inicio/carousel1.jpg",
  "/imagenes/inicio/carousel2.jpg",
  "/imagenes/inicio/carousel3.jpg",
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center ">
      {/* Fondo moderno con gradiente */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-gray-900 opacity-95 z-0" /> */}

      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-8 pt-24 pb-12">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl lg:text-8xl font-bold text-white px-4"
        >
          Bienvenido a{' '}
          <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
            Pueble S.A.
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          Tu socio confiable en maquinaria agrícola de alta calidad, brindando soluciones innovadoras para el campo argentino.
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
  className="bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
  onClick={() => document.getElementById("marcas")?.scrollIntoView({ behavior: "smooth" })}
>
  Descubre nuestros productos
  <ChevronRight className="ml-2 h-4 w-4" />
</Button>

<Button 
  size="lg" 
  variant="outline"
  className="bg-gray-500 hover:bg-gray-600 shadow-lg hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-105 text-white hover:text-white"
  asChild
>
  <a href="mailto:recepcion@pueblemaquinarias.com.ar">Contáctanos</a>
</Button>
        </motion.div>
      </div>

      {/* Carrusel de imágenes mejorado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full max-w-7xl mx-auto px-4 mb-12"
      >
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
                >
                  <img 
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
          <CarouselNext className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
        </Carousel>
      </motion.div>

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
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}