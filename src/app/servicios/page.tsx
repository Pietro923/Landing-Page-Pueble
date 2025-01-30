'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Wrench, 
  Users, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  ChevronRight
} from 'lucide-react'

export default function Service() {
  const services = [
    {
      icon: Wrench,
      title: "Mantenimiento y Reparación",
      description: "Mantenemos tu maquinaria en óptimas condiciones con nuestro servicio técnico especializado.",
      features: [
        "Mantenimiento preventivo programado",
        "Reparaciones con garantía",
        "Diagnóstico computarizado",
        "Repuestos originales"
      ]
    },
    {
      icon: Users,
      title: "Capacitación y Asesoría",
      description: "Te ayudamos a maximizar el rendimiento de tu inversión con capacitación especializada.",
      features: [
        "Entrenamiento personalizado",
        "Workshops técnicos",
        "Certificaciones oficiales",
        "Consultoría operativa"
      ]
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Estamos disponibles cuando nos necesites con nuestro servicio de asistencia permanente.",
      features: [
        "Atención de emergencias",
        "Soporte técnico remoto",
        "Monitoreo en tiempo real",
        "Respuesta inmediata"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Garantía Extendida",
      description: "Protege tu inversión con nuestros planes de garantía extendida y mantenimiento.",
      features: [
        "Cobertura completa",
        "Planes personalizados",
        "Beneficios exclusivos",
        "Transferible"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Servicios Post Venta</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Respaldamos tu inversión con un servicio técnico de excelencia y soporte continuo 
            para garantizar el máximo rendimiento de tu maquinaria.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-red-500 rounded-lg">
                        <Icon className="w-6 h-6 " />
                      </div>
                      <CardTitle className="text-xl ">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 ">
                          <ChevronRight className="w-4 h-4 text-red-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 bg-red-500 hover:bg-red-600"
                    >
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Headphones className="w-12 h-12 text-red-400" />
                <div className="text-left">
                  <h3 className="text-xl font-bold">¿Necesitas asistencia técnica?</h3>
                  <p className="">Nuestro equipo está disponible 24/7 para ayudarte</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-red-500 hover:bg-red-600"
              >
                Contactar Soporte
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}