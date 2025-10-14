'use client'
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from "framer-motion"
import { 
  Target, 
  Users, 
  Award,
  Gem,
  Wrench,
  Shield,
  Handshake,
  Image as ImageIcon,
  Calendar,
  Lightbulb,
  ArrowRight
} from 'lucide-react'

export default function About() {
  const milestones = [
    { 
      year: 2003, 
      title: 'Fundación', 
      description: 'Nace PUEBLE S.A. con el propósito de representar y dedicarse a la venta específica de fertilizantes para todo el NOA.',
      imageAlt: 'Fundación de Pueble S.A. en 2003'
    },
    { 
      year: 2006, 
      title: 'Concesionario Oficial', 
      description: 'PUEBLE S.A. es nombrado concesionario oficial CASE IH en Tucumán, convirtiéndose en su actividad principal.',
      imageAlt: 'Nombramiento como concesionario oficial CASE IH'
    },
    { 
      year: 2012, 
      title: 'Nueva Sede', 
      description: 'Inauguración de la nueva concesionaria en el Parque Industrial de Tucumán, en Av. de Circunvalación km 1294.',
      image: '/imagenes/inauguracion/a2.webp',
      imageAlt: 'Inauguración de la nueva sede en 2012'
    },
    { 
      year: 20, 
      title: 'Importadores Oficiales de JCB', 
      description: 'Nos convertimos en Importadores Oficiales de JCB.',
      //image: '/imagenes/inauguracion/a2.webp',
      imageAlt: 'Importadores Oficiales de JCB'
    },
    { 
      year: 2016, 
      title: 'Reconocimiento Mundial', 
      description: 'PUEBLE S.A. obtiene la categoría Premium Pro en la evaluación mundial de World Class Dealer de CASE IH.',
      image: '/imagenes/inauguracion/dealer.webp',
      imageAlt: 'Reconocimiento Premium Pro de CASE IH'
    },
    { 
      year: 2025, 
      title: 'Expansión y Crecimiento', 
      description: 'PUEBLE S.A. traslada su concesionaria a una nueva sede, reafirmando su compromiso con la innovación.',
      image: '/imagenes/inauguracion/conse4.webp', 
      imageAlt: 'Nueva expansión y crecimiento 2025'
    }
  ];

  const values = [
    { icon: Shield, title: 'Confianza y Honestidad', description: 'Construimos relaciones basadas en la transparencia y el respeto mutuo.' },
    { icon: Target, title: 'Compromiso', description: 'Con nuestros clientes, empleados, accionistas y resultados.' },
    { icon: Handshake, title: 'Actitud de Servicio', description: 'Brindamos atención y soluciones con responsabilidad y empatía.' },
    { icon: Gem, title: 'Autocrítica', description: 'Compromiso con la excelencia y la mejora continua.' },
    { icon: Wrench, title: 'Responsabilidad', description: 'Cumplimos con nuestras obligaciones fiscales, sociales y ambientales.' },
    { icon: Award, title: 'Innovación', description: 'Apostamos a las nuevas tendencias y avances tecnológicos.' },
  ];

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-slate-950 to-black" />
      
      {/* Patrón SVG sutil */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="global-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-pattern)" />
        </svg>
      </div>

      <section className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-0 sm:px-4">
          
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
              | Quiénes Somos
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white text-transparent bg-clip-text px-2"
            >
              Nosotros
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Más de 20 años liderando el sector agrícola y de construcción en la región, 
              con compromiso, innovación y dedicación al servicio.
            </motion.p>
          </motion.div>

          {/* Hero Section con Imagen y Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-20 items-center"
          >
            {/* Contenido de texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Desde nuestra fundación en 2003, nos dedicamos a comercializar maquinaria de 
                  <span className="text-white font-semibold"> máxima calidad y avanzada tecnología.</span>
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  Con más de 20 años en el mercado, nuestra estrategia se basa en la 
                  <span className="text-white font-semibold"> inversión constante en tecnología</span> y en 
                  mantener una relación cercana con nuestros clientes, ofreciendo 
                  <span className="text-white font-semibold"> atención las 24 horas</span> y cumpliendo 
                  siempre con nuestra palabra.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Concesionarios Oficiales de:</p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <div className="px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                    <span className="text-white font-semibold text-xs sm:text-sm">CASE IH</span>
                  </div>
                  <div className="px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors">
                    <span className="text-white font-semibold text-xs sm:text-sm">JCB</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Imagen con overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <Image
                src="/imagenes/inauguracion/gp1.webp"
                alt="Equipo Pueble S.A."
                width={1280}
                height={853}
                className="rounded-xl sm:rounded-2xl w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl sm:rounded-2xl" />
            </motion.div>
          </motion.div>

          {/* Cita del CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/10 to-red-900/10 backdrop-blur-sm mb-12 lg:mb-20 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl border border-red-500/20 hover:border-red-500/40 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start"
              >
                <Image 
                  src="/imagenes/bedey.webp" 
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-red-500/30 shadow-lg" 
                  alt="Javier Rojas" 
                />
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4 text-center lg:text-left"
              >
                <p className="text-lg sm:text-xl lg:text-2xl italic text-gray-200 leading-relaxed font-light">
                  "El campo no se detiene, y nosotros tampoco. Trabajamos con quienes siembran el futuro, brindando la mejor maquinaria para cada desafío."
                </p>
                <div>
                  <p className="text-base sm:text-lg text-white font-bold">Javier Rojas</p>
                  <p className="text-sm text-red-400 font-semibold">CEO - Pueble S.A.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quiénes Somos y Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 lg:mb-20"
          >
            {/* Quiénes Somos */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 rounded-lg sm:rounded-2xl shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-lg sm:rounded-xl shadow-lg">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-2xl font-bold text-white">Quiénes Somos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                    Somos una empresa <span className="text-white font-semibold">líder en la venta y servicio</span> de maquinaria agrícola y de construcción, 
                    con más de 20 años de experiencia en el sector.
                  </p>
                  <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                    Contamos con un <span className="text-white font-semibold">equipo altamente capacitado</span> y la tecnología más avanzada 
                    para brindar soluciones integrales que optimizan la producción agrícola de nuestros clientes.
                  </p>
                  <div className="pt-2 flex items-center text-red-400 font-semibold text-xs sm:text-sm">
                    <span>Compromiso con la excelencia</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Objetivo */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-red-500/30 rounded-lg sm:rounded-2xl shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-lg sm:rounded-xl shadow-lg">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-2xl font-bold text-white">Nuestro Objetivo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                    Proporcionar <span className="text-white font-semibold">soluciones integrales y de alta calidad</span> que impulsen 
                    la productividad del sector agrícola y de construcción.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Ofrecer maquinaria de última generación',
                      'Brindar soporte técnico especializado',
                      'Garantizar la satisfacción de nuestros clientes',
                      'Contribuir al desarrollo sostenible'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Valores */}
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
                | Nuestros Valores
              </motion.p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2">
                Principios que nos <span className="text-red-500">definen</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600/10 to-red-900/10 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                    <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 rounded-lg transition-all duration-300 h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg flex-shrink-0">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <CardTitle className="text-sm sm:text-lg font-bold text-white">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 sm:px-6">
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Filosofía */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-20"
          >
            <div className="text-center mb-6 sm:mb-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-red-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
              >
                | Nuestra Filosofía
              </motion.p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2">
                El camino hacia la <span className="text-red-500">excelencia</span>
              </h2>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-lg sm:rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-red-500/20 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                      Desde nuestra fundación en 2003, comprendimos que el crecimiento solo sería posible comercializando maquinaria de 
                      <span className="text-white font-bold"> máxima calidad y avanzada tecnología.</span>
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                      Tras casi 8 años de experiencia, descubrimos que nuestra mayor inversión debía centrarse en el servicio 
                      <span className="text-white font-bold"> Post Venta</span>, convirtiéndose en la unidad de negocio más importante. 
                      Actualmente, nuestra estrategia se basa en la 
                      <span className="text-white font-bold"> inversión constante en tecnología</span> y en mantener una 
                      <span className="text-white font-bold"> relación cercana con nuestros clientes</span>, ofreciendo 
                      <span className="text-white font-bold"> atención las 24 horas</span> y cumpliendo siempre con nuestra palabra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline - Nuestra Historia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-red-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
              >
                | Nuestro Recorrido
              </motion.p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white px-2">
                Una Historia de <span className="text-red-500">Crecimiento</span>
              </h2>
            </div>

            <div className="relative">
              {/* Línea central */}
              <div className="absolute left-2 sm:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent sm:block hidden sm:-translate-x-1/2" />

              <div className="space-y-8 sm:space-y-12 lg:space-y-16 pl-12 sm:pl-0">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex gap-4 sm:gap-6 lg:gap-12 items-start lg:items-center
                      ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Punto en timeline mobile */}
                    <div className="absolute -left-10 sm:hidden flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="w-5 h-5 bg-black rounded-full border-3 border-red-600 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                      </motion.div>
                    </div>

                    {/* Punto en timeline desktop */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 bg-black rounded-full border-4 border-red-600 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                      </motion.div>
                    </div>

                    {/* Contenido */}
                    <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} w-full`}>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-red-500/30 rounded-lg p-4 sm:p-6 transition-all duration-300 group">
                        <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                          <div>
                            <h3 className="font-black text-2xl sm:text-3xl text-red-500">{milestone.year}</h3>
                            <h4 className="font-bold text-white text-base sm:text-lg mt-2">{milestone.title}</h4>
                          </div>
                          {milestone.image && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-gray-400 hover:text-red-500 hover:bg-red-600/10 p-2 h-auto flex-shrink-0"
                                >
                                  <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-72 sm:w-80 p-0 bg-black/95 border border-red-600/30 rounded-xl overflow-hidden">
                                <div className="relative">
                                  <Image
                                    src={milestone.image}
                                    alt={milestone.imageAlt}
                                    width={320}
                                    height={240}
                                    className="w-full h-40 sm:h-48 object-cover"
                                  />
                                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-4 h-4 text-red-500" />
                                      <span className="text-red-500 font-bold text-sm">{milestone.year}</span>
                                    </div>
                                    <h4 className="font-bold text-white text-sm sm:text-base">{milestone.title}</h4>
                                    <p className="text-gray-300 text-xs sm:text-sm">{milestone.description}</p>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="lg:w-5/12 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}