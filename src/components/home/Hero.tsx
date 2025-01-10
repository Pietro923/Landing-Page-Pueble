'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight, Tractor, Award, Clock, Users } from 'lucide-react'
import { motion } from "framer-motion"

export default function Hero() {
  const features = [
    {
      icon: <Tractor className="w-6 h-6" />,
      title: "Maquinaria de Primera",
      description: "Equipos de alta calidad"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "30+ Años",
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

  return (
    <div className="relative py-24 bg-red-900 text-white overflow-hidden">
        
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Bienvenido a{' '}
              <span className="text-red-300">Pueble S.A.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Tu socio confiable en maquinaria agrícola de alta calidad, brindando soluciones innovadoras para el campo argentino.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600"
              >
                Descubre nuestros productos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-gray-400 bg-gray-600"
              >
                Contáctanos
              </Button>
            </div>
          </motion.div>

          {/* Imagen o ilustración */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="imagenes/imagen 2.jpg"
                alt="Maquinaria Pueble"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
            >
              <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}