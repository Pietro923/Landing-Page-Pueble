'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tractor, Shovel, Wheat, Sprout, Factory, Package } from 'lucide-react'
import { motion } from "framer-motion"

export default function Equipment() {
  const machines = [
    {
      name: 'Retroexcavadora',
      description: 'Ideal para excavaciones y movimientos de tierra',
      icon: Shovel,
      specs: ['Potencia: 120HP', 'Profundidad máx: 4.5m', 'Capacidad: 0.8m³'],
      color: 'red'
    },
    {
      name: 'Tractor',
      description: 'Potente y versátil para diversas tareas agrícolas',
      icon: Tractor,
      specs: ['Potencia: 180HP', 'Tracción 4x4', 'Cabina climatizada'],
      color: 'green'
    },
    {
      name: 'Cosechadora',
      description: 'Eficiente para la recolección de cultivos',
      icon: Wheat,
      specs: ['Ancho de corte: 9m', 'Sistema GPS', 'Tolva: 12000L'],
      color: 'yellow'
    },
    {
      name: 'Sembradora',
      description: 'Precisión en la siembra para maximizar el rendimiento',
      icon: Sprout,
      specs: ['36 líneas', 'Monitor digital', 'Dosificación variable'],
      color: 'blue'
    },
    {
      name: 'Fumigadora',
      description: 'Aplicación uniforme de productos fitosanitarios',
      icon: Factory,
      specs: ['Tanque: 3000L', 'Botalón: 28m', 'Control automático'],
      color: 'purple'
    },
    {
      name: 'Empacadora',
      description: 'Compactación eficiente de forrajes y residuos',
      icon: Package,
      specs: ['Pick-up: 2.2m', 'Atado automático', 'Alta densidad'],
      color: 'orange'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestro Equipo de Maquinaria</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contamos con la más moderna flota de maquinaria agrícola, diseñada para maximizar 
            la eficiencia y productividad de tu campo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {machines.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-center text-2xl mb-2">
                      {machine.name}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                      {machine.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {machine.specs.map((spec, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center justify-center text-sm text-gray-600"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full mt-6 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}