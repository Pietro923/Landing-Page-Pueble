'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  History, 
  Target, 
  Users, 
  Award,
  Globe,
  Gem,
  ArrowRight
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
    { icon: Users, title: 'Compromiso', description: 'Con nuestros clientes y el sector agrícola' },
    { icon: Award, title: 'Excelencia', description: 'En cada servicio y producto que ofrecemos' },
    { icon: Globe, title: 'Alcance', description: 'Presencia y servicio en todo el país' },
    { icon: Gem, title: 'Calidad', description: 'Productos y servicios de primer nivel' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 40 años liderando el sector de maquinaria agrícola, 
            impulsando el desarrollo y la innovación en el campo argentino.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>Quiénes Somos</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Somos una empresa líder en la venta y servicio de maquinaria agrícola, 
                  con más de cuatro décadas de experiencia en el sector. Nuestro compromiso 
                  con la excelencia y la innovación nos ha permitido convertirnos en un 
                  referente en la industria.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Contamos con un equipo altamente capacitado y la tecnología más avanzada 
                  para brindar soluciones integrales que optimizan la producción agrícola 
                  de nuestros clientes.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>Nuestro Objetivo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
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
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white shadow-xl">
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
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}