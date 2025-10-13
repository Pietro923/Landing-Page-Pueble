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
  Calendar,
  Lightbulb,
  CheckCircle2
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Company() {
  const [contactLink, setContactLink] = useState("");
  
  const facilities = [
    {
      icon: Factory,
      title: 'Planta Principal',
      description: 'Moderna planta de producción con tecnología de última generación para maquinaria agrícola'
    },
    {
      icon: Wrench,
      title: 'Taller Especializado',
      description: 'Centro de servicio técnico y mantenimiento certificado con personal capacitado'
    },
    {
      icon: Shield,
      title: 'Control de Calidad',
      description: 'Laboratorio de pruebas y certificación de equipos de máxima precisión'
    }
  ];

  const teams = [
    {
      name: "Equipo de Postventa",
      managerImage: "/imagenes/gerentes/gerentedeventas.jpeg",
      managerName: "Angel Ortiz",
      managerTitle: "Gerente de Post Venta",
      description: "Expertos en mantenimiento y soporte técnico para garantizar el máximo rendimiento de tus equipos."
    },
    {
      name: "Equipo AFS",
      managerImage: "/imagenes/gerentes/gerentedeafs.jpg",
      managerName: "Guido Meier",
      managerTitle: "Gerente de AFS",
      description: "Especialistas en sistemas de agricultura de precisión para optimizar tus cosechas."
    },
    {
      name: "Administración",
      managerImage: "/imagenes/gerentes/gerentedeadministracion.jpeg",
      managerName: "Fátima Zamorano",
      managerTitle: "Gerente de Administración",
      description: "Nuestro equipo administrativo asegura una gestión eficiente y transparente."
    },
    {
      name: "Equipo Comercial",
      managerImage: "/imagenes/gerentes/gerentedeequipocomercial.jpeg",
      managerName: "Christian de la Vega",
      managerTitle: "Gerente General",
      description: "Enfocados en brindar soluciones a medida, acompañamos a cada cliente en todo el proceso."
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
    <section className="min-h-screen bg-gradient-to-br from-red-950 via-slate-950 to-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-0 sm:px-4 relative">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-red-500 font-semibold uppercase tracking-wider mb-3 text-xs sm:text-sm"
          >
            | Conoce Nuestras Instalaciones
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white text-transparent bg-clip-text px-2"
          >
            Nuestra Empresa
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Infraestructura de primer nivel con tecnología de punta para garantizar la mejor calidad 
            en productos y servicios para el sector agrícola
          </motion.p>
        </motion.div>

        {/* Sede Central Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-20 items-center"
        >
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Sede Central</h2>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Ubicación</p>
                  <p className="text-white font-semibold text-sm sm:text-base">Ruta Nacional 9 KM 1301, Tucumán</p>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Nuestra sede central cuenta con más de 
                <span className="text-white font-bold"> 5000m²</span> dedicados a la 
                exhibición, venta y mantenimiento de 
                <span className="text-white font-bold"> maquinaria agrícola y de construcción</span> de 
                primera línea.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-lg border border-red-500/20">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">5000m²</div>
                  <p className="text-xs sm:text-sm text-gray-300">Área total</p>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-lg border border-red-500/20">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">24/7</div>
                  <p className="text-xs sm:text-sm text-gray-300">Atención</p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/50 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Contactar Ahora
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.a>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg sm:rounded-2xl blur opacity-30" />
            <div className="relative bg-black rounded-lg sm:rounded-2xl overflow-hidden">
              <video
                src="/imagenes/inauguracion/conse5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg sm:rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Instalaciones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-red-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
            >
              | Nuestras Instalaciones
            </motion.p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2">
              Infraestructura de <span className="text-red-500">Calidad</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 rounded-lg transition-all duration-300 h-full">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-white">{facility.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <p className="text-xs sm:text-sm text-gray-400">{facility.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Educación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-900/30 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-6 sm:p-10 lg:p-16 border border-white/10 hover:border-red-500/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                    ¡Conectamos con la Educación!
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    En Pueble valoramos la formación de futuros profesionales. Si sos docente universitario o secundario, 
                    te invitamos a que tus estudiantes vivan una 
                    <span className="text-red-300 font-semibold"> experiencia real</span> en 
                    el mundo de la maquinaria agrícola y de construcción.
                  </p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/543815897858?text=Hola!%20Quiero%20agendar%20una%20visita%20guiada."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/50 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Agendar Visita Educativa
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Equipos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-red-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
            >
              | El Talento Detrás Del Éxito
            </motion.p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2">
              Nuestros <span className="text-red-500">Equipos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teams.map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 rounded-lg overflow-hidden transition-all duration-300 h-full">
                  {/* Team name header */}
                  <div className="bg-gradient-to-r from-red-600/20 to-red-900/20 border-b border-red-500/20 px-4 sm:px-6 py-3 sm:py-4">
                    <h4 className="text-sm sm:text-base font-bold text-white text-center">{team.name}</h4>
                  </div>

                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col items-center text-center">
                    {/* Manager image */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-red-500 shadow-lg"
                    >
                      <Image
                        src={team.managerImage}
                        alt={team.managerName}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Manager info */}
                    <div className="space-y-0.5 sm:space-y-1">
                      <p className="text-sm sm:text-base font-bold text-white">{team.managerName}</p>
                      <p className="text-xs sm:text-sm text-red-400 font-semibold">{team.managerTitle}</p>
                    </div>

                    {/* Description */}
                    <div className="pt-2 sm:pt-3 border-t border-white/10">
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{team.description}</p>
                    </div>

                    {/* Checkmark accent */}
                    <div className="mt-2">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiencia Inmersiva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-red-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
            >
              | Visita Nuestras Instalaciones
            </motion.p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              Experiencia Inmersiva en <span className="text-red-500">Pueble</span>
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Descubrí el corazón de nuestra operación y conocé de primera mano cómo la innovación 
              y la pasión se combinan para crear soluciones excepcionales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">¿Qué incluye tu visita?</h3>
                <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Sumérgete en una experiencia educativa única donde la teoría cobra vida. 
                  Nuestras visitas guiadas están diseñadas para inspirar y educar, ofreciendo 
                  una perspectiva integral de la industria agrícola moderna.
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {visitHighlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 border border-white/5 hover:border-red-500/20 transition-all"
                      >
                        <div className="p-2 bg-red-600 rounded-lg flex-shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5">{highlight.title}</h5>
                          <p className="text-gray-400 text-xs">{highlight.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg sm:rounded-2xl blur opacity-30" />
              <div className="relative bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl">
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
            </motion.div>
          </div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/543815897858?text=Hola!%20Quiero%20agendar%20una%20visita%20guiada%20para%20mi%20grupo%20de%20estudiantes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/40"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Reservá Tu Visita Ahora
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
              Respuesta inmediata • Sin costo • Horarios flexibles
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}