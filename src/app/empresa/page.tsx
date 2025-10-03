'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  Factory, 
  MapPin,  
  Shield, 
  Phone,
  Wrench,
  ArrowRight,
  Users,
  Clock,
  Star,
  Calendar
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Company() {
  const [contactLink, setContactLink] = useState("");
  
  const facilities = [
    {
      icon: Factory,
      title: 'Planta Principal',
      description: 'Moderna planta de producción con tecnología de última generación'
    },
    {
      icon: Wrench,
      title: 'Taller Especializado',
      description: 'Centro de servicio técnico y mantenimiento certificado'
    },
    {
      icon: Shield,
      title: 'Control de Calidad',
      description: 'Laboratorio de pruebas y certificación de equipos'
    }
  ];

  const teams = [
  {
    name: "Equipo de Postventa",
    managerImage: "/imagenes/gerentes/gerentedeventas.jpeg", // Imagen del gerente
    managerName: "Angel Ortiz",
    managerTitle: "Gerente de Post Venta",
    description: "Expertos en mantenimiento y soporte técnico para garantizar el máximo rendimiento de tus equipos."
  },
  {
    name: "Equipo AFS",
    managerImage: "/imagenes/gerentes/gerentedeafs.jpg", // Imagen del gerente
    managerName: "Guido Meier",
    managerTitle: "Gerente de AFS",
    description: "Especialistas en sistemas de agricultura de precisión para optimizar tus cosechas."
  },
  {
    name: "Administración",
    managerImage: "/imagenes/gerentes/gerentedeadministracion.jpeg", // Imagen del gerente
    managerName: "Fátima Zamorano",
    managerTitle: "Gerente de Administración",
    description: "Nuestro equipo administrativo asegura una gestión eficiente y transparente."
  },
  {
    name: "Equipo Comercial",
    managerImage: "/imagenes/gerentes/gerentedecomercial.jpeg", // Imagen del gerente
    managerName: "Christian de la Vega",
    managerTitle: "Gerente de Comercial",
    description: "Enfocados en brindar soluciones a medida, nuestro equipo comercial acompaña a cada cliente en todo el proceso de compra."
  }
];

  const visitHighlights = [
    {
      icon: Users,
      title: "Equipos Especializados",
      description: "Conocé a nuestros técnicos y especialistas en acción"
    },
    {
      icon: Factory,
      title: "Tecnología de Vanguardia",
      description: "Descubrí nuestra maquinaria y procesos de última generación"
    },
    {
      icon: Clock,
      title: "Flexibilidad Horaria",
      description: "Adaptamos los horarios según tu disponibilidad académica"
    }
  ];
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setContactLink("tel:+543815897858");
    } else {
      setContactLink("https://wa.me/543815897858?text=¡Hola!%20Quisiera%20hacer%20una%20consulta.");
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 relative">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white border-b-2 border-red-500 w-fit mx-auto">Nuestras Instalaciones</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Infraestructura de primer nivel para garantizar la mejor calidad en 
            productos y servicios para el sector agrícola
          </p>
        </motion.div>

        {/* Sección de instalaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Sede Central</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Tucumán, Argentina</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Nuestra sede central cuenta con más de <span className="font-semibold">5000m²</span> dedicados a la 
                  exhibición, venta y mantenimiento de <span className="font-semibold">maquinaria agrícola y de construcción </span> de 
                  primera línea.
                </p>
                <a
                  href={contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Contactar
                  <Phone className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            <div className="relative">
              <video
                src="/imagenes/inauguracion/conse5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{facility.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}

            {/* Mensaje mejorado para docentes */}
            <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-lg p-6 border border-red-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-red-600 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">¡Conectamos con la Educación!</h4>
                  <p className="text-gray-200 leading-relaxed">
                    En Pueble valoramos la formación de futuros profesionales. Si sos docente universitario o secundario, 
                    te invitamos a que tus estudiantes vivan una <span className="font-semibold text-red-300">experiencia real</span> en 
                    el mundo de la maquinaria agrícola y de construcción.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/543815897858?text=Hola!%20Quiero%20agendar%20una%20visita%20guiada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 text-center justify-center text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="mr-3 w-5 h-5" />
              Agendar Visita Educativa
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
            
          </motion.div>
        </div>

       {/* Sección de equipos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 border-b-2 border-red-500 w-fit mx-auto">
            Nuestros Equipos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teams.map((team, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white text-center overflow-hidden"
              >
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold mb-4 border-b-2 border-red-500 inline-block">
                    {team.name}
                  </CardTitle>
                  
                  {/* Imagen del gerente */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={team.managerImage}
                      alt={team.managerName}
                      fill
                      className="object-cover rounded-full border-2 border-red-500"
                    />
                  </div>
                  
                  {/* Información del gerente */}
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white">{team.managerName}</h4>
                    <p className="text-red-300 font-semibold text-sm">{team.managerTitle}</p>
                  </div>
                  
                  {/* Descripción del equipo */}
                  <p className="text-gray-300 text-sm leading-relaxed">{team.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>


        {/* Video de visita guiada mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 border-b-2 border-red-500 w-fit mx-auto">
              Experiencia Inmersiva en Pueble
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Descubrí el corazón de nuestra operación y conocé de primera mano cómo la innovación 
              y la pasión se combinan para crear soluciones excepcionales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Contenido informativo mejorado */}
            <div className="space-y-8 text-white">
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold mb-4 text-white">¿Qué incluye tu visita?</h4>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Sumérgete en una experiencia educativa única donde la teoría cobra vida. 
                  Nuestras visitas guiadas están diseñadas para inspirar y educar, ofreciendo 
                  una perspectiva integral de la industria agrícola moderna.
                </p>
                
                <div className="grid gap-4">
                  {visitHighlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 bg-red-600 rounded-lg flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-1">{highlight.title}</h5>
                          <p className="text-gray-400 text-sm">{highlight.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Video con marco mejorado */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video">
                  <video
                    src="/videos/visita.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    poster="/videos/thumbnail.webp"
                    className="w-full h-full object-cover"
                  >
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action mejorado */}
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/543815897858?text=Hola!%20Quiero%20agendar%20una%20visita%20guiada%20para%20mi%20grupo%20de%20estudiantes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:via-red-800 hover:to-red-900 transition-all duration-300 text-xl font-bold shadow-2xl hover:shadow-red-500/25 transform hover:scale-105"
              >
                <Calendar className="mr-3 w-6 h-6" />
                Reservá Tu Visita Ahora
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </motion.div>
            <p className="text-gray-400 mt-4 text-sm">
              Respuesta inmediata • Sin costo • Horarios flexibles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}