'use client'
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from "framer-motion"
import { 
  Target, 
  Users, 
  Award,
  Gem,
  Wrench,
  Shield,
  Handshake
} from 'lucide-react'
export default function About() {
  const milestones = [
    { year: 2003, title: 'Fundación', description: 'Nace PUEBLE S.A. con el propósito de representar y dedicarse a la venta específica de fertilizantes para todo el NOA.' },
    { year: 2006, title: 'Concesionario Oficial', description: 'PUEBLE S.A. es nombrado concesionario oficial CASE IH en Tucumán, convirtiéndose en su actividad principal.' },
    { year: 2012, title: 'Nueva Sede', description: 'Inauguración de la nueva concesionaria en el Parque Industrial de Tucumán, en Au. de Circunvalación km 1294.' },
    { year: 2016, title: 'Reconocimiento Mundial', description: 'PUEBLE S.A. obtiene la categoría Premium en la evaluación mundial de World Class Dealer de CASE IH.' },
    { year: 2017, title: 'Reconocimiento Continuado', description: 'Renovación del reconocimiento Premium en la evaluación mundial de World Class Dealer de CASE IH.' },
    { year: 2025, title: 'Expansión y Crecimiento', description: 'PUEBLE S.A. traslada su concesionaria a una nueva sede, reafirmando su compromiso con la innovación y el crecimiento en la región.' }
];
  const values = [
    { icon: Shield, title: 'Confianza y Honestidad', description: 'Construimos relaciones basadas en la transparencia y el respeto mutuo.' },
    { icon: Target, title: 'Compromiso', description: 'Con nuestros clientes, empleados, accionistas y resultados.' },
    { icon: Handshake, title: 'Actitud de Servicio', description: 'Brindamos atención y soluciones con responsabilidad y empatía.' },
    { icon: Gem, title: 'Autocrítica', description: 'Compromiso con la excelencia y la mejora continua.' },
    { icon: Wrench, title: 'Responsabilidad', description: 'Cumplimos con nuestras obligaciones fiscales, sociales y ambientales.' },
    { icon: Award, title: 'Innovación', description: 'Apostamos a las nuevas tendencias y avances tecnológicos que facilitan el trabajo del agricultor.' },
  ];
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        {/* Hero Section con Imagen y Texto lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-8 mb-16"
        >
          {/* Contenido de texto */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl font-bold mb-6 text-white border-b-2 border-red-500 inline-block">Nosotros</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Desde nuestra fundación en 2003, nos dedicamos a comercializar maquinaria de máxima calidad y avanzada tecnología.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Con más de 20 años en el mercado, nuestra estrategia se basa en la inversión constante en tecnología y en mantener una relación cercana con nuestros clientes, ofreciendo atención las 24 horas y cumpliendo siempre con nuestra palabra.
            </p>
          </div>
          
          {/* Imagen */}
          <div className="lg:w-1/2">
          <Image
    src="/imagenes/empresa/Equipo Pueble SA.jpeg"
    alt="Equipo Pueble S.A."
    width={1280}
    height={853} // ajustá al tamaño real
    className="rounded-3xl w-full h-auto object-cover shadow-lg"
  />
          </div>
        </motion.div>
        
        {/* Cita del CEO */}
        <div className="bg-gradient-to-r from-red-900/40 to-black/40 backdrop-blur-sm mt-6 mb-12 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            {/* Imagen */}
            <img 
              src="/imagenes/bedey.png" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-600/30" 
              alt="Javier Rojas" 
            />
            {/* Texto */}
            <div>
              <p className="text-white text-xl md:text-2xl italic font-light">
                "El campo no se detiene, y nosotros tampoco. Trabajamos con quienes siembran el futuro, brindando la mejor maquinaria para cada desafío."
              </p>
              <p className="text-gray-300 font-semibold mt-3 text-lg">Javier Rojas</p>
              <p className="text-gray-400">CEO</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Quiénes Somos</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Somos una empresa <span className="text-white font-semibold">líder en la venta y servicio</span> de maquinaria agrícola y de construcción, 
                  con más de 20 años de experiencia en el sector. Nuestro compromiso 
                  con la excelencia y la innovación nos ha permitido convertirnos en un 
                  referente en la industria.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Contamos con un <span className="text-white font-semibold">equipo altamente capacitado</span> y la tecnología más avanzada 
                  para brindar soluciones integrales que optimizan la producción agrícola 
                  de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold ">Nuestro Objetivo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Nuestro principal objetivo es proporcionar <span className="text-white font-semibold">soluciones integrales y de 
                  alta calidad</span> que impulsen la productividad y eficiencia del <span className="text-white font-semibold">sector agrícola y de construcción</span>. 
                  Nos esforzamos por:
                </p>
                <ul className="space-y-3">
                  {[
                    'Ofrecer maquinaria de última generación',
                    'Brindar soporte técnico especializado',
                    'Garantizar la satisfacción de nuestros clientes',
                    'Contribuir al desarrollo del sector agrícola y de construcción'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Valores */}
        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-red-500 w-fit mx-auto">
          Nuestros <span className="text-red-500 ">Valores</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Nuestra Filosofía - Párrafo completo */}
        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-red-500 w-fit mx-auto">
          Nuestra Filosofia
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 rounded-lg p-8 bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Desde nuestra fundación en 2003, comprendimos que el crecimiento solo sería posible comercializando maquinaria de <span className="font-bold">máxima calidad y avanzada tecnología.</span> Tras casi 8 años de experiencia, descubrimos que nuestra mayor inversión debía centrarse en el servicio <span className="font-bold">Post Venta</span>, convirtiéndose en la unidad de negocio más importante de la empresa. Actualmente, nuestra estrategia se basa en la inversión constante en tecnología y en mantener una relación cercana con nuestros clientes, ofreciendo atención las 24 horas y cumpliendo siempre con nuestra palabra.
          </p>
        </motion.div>
        
        {/* Nuestra Historia */}
        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-red-500 w-fit mx-auto">
          Nuestra Historia
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Timeline Alternado (Zigzag) con mejoras responsive */}
          <div className="mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardContent className="py-8">
                <div className="relative">
                  {/* Línea central - visible solo en desktop */}
                  <div className="absolute left-1/2 top-0 h-full w-0.5 bg-red-600/50 hidden md:block" />
                  
                  {/* Línea lateral - visible solo en mobile */}
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-red-600/50 md:hidden" />
                  
                  <div className="space-y-10">
                    {milestones.map((milestone, index) => (
                      <div key={index} 
                        className={`relative flex md:items-center gap-4 md:gap-6  
                          ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                          flex-row items-start`}
                      >
                        {/* Punto de tiempo para mobile */}
                        <div className="absolute left-4 flex items-center justify-center w-8 h-8 md:hidden -translate-x-1/2 ">
                          <div className="w-8 h-8 bg-black/50 rounded-full border-2 border-red-600 flex items-center justify-center">
                            <div className="w-3 h-3 bg-red-600 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Contenido en mobile (siempre a la derecha) */}
                        <div className="md:hidden ml-10 w-full">
                          <div className="bg-black/30 p-4 rounded-lg border-l-2 border-red-600">
                            <h3 className="font-bold text-xl text-red-600">{milestone.year}</h3>
                            <h4 className="font-semibold mb-1">{milestone.title}</h4>
                            <p className="text-gray-300 text-sm">{milestone.description}</p>
                          </div>
                        </div>
                        
                        {/* Contenido para desktop (alternando lados) */}
                        <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center hidden md:block `}>
                          <div className={`bg-black/30 p-4 rounded-lg ${index % 2 === 0 ? 'border-r-2' : 'border-l-2'} border-red-600 hover:bg-white/5 transition-colors duration-200`}>
                            <h3 className="font-bold text-xl text-red-600">{milestone.year}</h3>
                            <h4 className="font-semibold mb-1">{milestone.title}</h4>
                            <p className="text-gray-300">{milestone.description}</p>
                          </div>
                        </div>
                        
                        {/* Punto central para desktop */}
                        <div className="absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 hidden md:flex">
                          <div className="w-10 h-10 bg-black/50 rounded-full border-2 border-red-600 flex items-center justify-center">
                            <div className="w-4 h-4 bg-red-600 rounded-full" />
                          </div>
                        </div>
                        
                        <div className="md:w-5/12 hidden md:block"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}