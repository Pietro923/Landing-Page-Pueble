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
    <div className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">

        {/* Patrón de fondo decorativo 
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
        */}
        
      <div className="container mx-auto px-4 py-24">
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
                src="/imagen 2.jpg"
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