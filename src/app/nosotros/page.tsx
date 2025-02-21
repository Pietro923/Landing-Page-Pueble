'use client'
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  History, 
  Target, 
  Users, 
  Award,
  Globe,
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
    { year: 2017, title: 'Reconocimiento Continuado', description: 'Renovación del reconocimiento Premium en la evaluación mundial de World Class Dealer de CASE IH.' }
];
  const values = [
    { icon: Shield, title: 'Confianza y Honestidad', description: 'Construimos relaciones basadas en la transparencia y el respeto mutuo.' },
    { icon: Target, title: 'Compromiso', description: 'Con nuestros clientes, empleados, socios y resultados.' },
    { icon: Handshake, title: 'Actitud de Servicio', description: 'Brindamos atención y soluciones con responsabilidad y empatía.' },
    { icon: Gem, title: 'Autocrítica', description: 'Compromiso con la excelencia y la mejora continua.' },
    { icon: Wrench, title: 'Responsabilidad', description: 'Cumplimos con nuestras obligaciones fiscales, sociales y ambientales.' },
    { icon: Award, title: 'Innovación', description: 'Apostamos a las nuevas tendencias y avances tecnológicos que facilitan el trabajo del agricultor.' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white border-b-2 border-red-500 inline-block">Nosotros</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 40 años liderando el sector de maquinaria agrícola, 
            impulsando el desarrollo y la innovación en el campo argentino.
          </p>
          <img 
            src="/imagenes/empresa/Equipo Pueble SA.jpeg"  
            alt="nosotros" 
            className="rounded-3xl mb-10 mt-10 w-full max-w-[1500px] h-auto max-h-[650px] object-cover mx-auto" 
          />
        </motion.div>

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
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold ">Quiénes Somos</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Somos una empresa líder en la venta y servicio de maquinaria agrícola, 
                  con más de cuatro décadas de experiencia en el sector. Nuestro compromiso 
                  con la excelencia y la innovación nos ha permitido convertirnos en un 
                  referente en la industria.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Contamos con un equipo altamente capacitado y la tecnología más avanzada 
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
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold ">Nuestro Objetivo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Nuestro principal objetivo es proporcionar soluciones integrales y de 
                  alta calidad que impulsen la productividad y eficiencia del sector agrícola. 
                  Nos esforzamos por:
                </p>
                <ul className="space-y-3">
                  {[
                    'Ofrecer maquinaria de última generación',
                    'Brindar soporte técnico especializado',
                    'Garantizar la satisfacción de nuestros clientes',
                    'Contribuir al desarrollo del sector agrícola'
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

        <div className="bg-white/10 backdrop-blur-sm mt-10 mb-10 p-4 md:p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            {/* Imagen */}
            <img 
              src="/imagenes/placeholdercachopuente.jpg" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover md:mr-12 mb-4 md:mb-0" 
              alt="Javier Nebbia" 
            />
            {/* Texto */}
            <div>
              <p className="text-white text-base md:text-lg italic">
                "El campo no se detiene, y nosotros tampoco. Trabajamos con quienes siembran el futuro, brindando la mejor maquinaria para cada desafío."
              </p>
              <p className="text-gray-300 font-semibold mt-2">Javier Bedey</p>
              <p className="text-gray-400 text-sm">Presidente</p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-red-500 w-fit mx-auto">
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
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
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

        <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-red-500 w-fit mx-auto">
          Nuestra Historia
        </h2>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <History className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Nuestra Historia</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-red-200" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start gap-6 ml-8">
                      <div className="absolute -left-10 flex items-center justify-center w-6 h-6">
                        <div className="w-6 h-6 bg-red-600 rounded-full" />
                        <div className="absolute w-4 h-4 bg-white rounded-full" />
                        <div className="absolute w-2 h-2 bg-red-600 rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-red-600">{milestone.year}</h3>
                        <h4 className="font-semibold mb-1">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}