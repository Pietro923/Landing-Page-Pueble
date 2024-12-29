'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  Factory, 
  MapPin,  
  Shield, 
  Phone,
  Wrench,
  ArrowRight
} from 'lucide-react'

export default function Company() {
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

  return (
    <section id="empresa" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestras Instalaciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Infraestructura de primer nivel para garantizar la mejor calidad en 
            productos y servicios para el sector agrícola
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>Sede Central</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nuestra sede central cuenta con más de 5000m² dedicados a la 
                  exhibición, venta y mantenimiento de maquinaria agrícola de 
                  primera línea.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  Contactar
                  <Phone className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="relative">
              <Image
                src="/imagen 2.jpg"
                alt="Vista aérea de Pueble S.A."
                width={800}
                height={100}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg" />
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
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{facility.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              );
            })}

            <Button 
              variant="outline" 
              className="w-full border-red-200 hover:bg-red-50"
            >
              Agendar una visita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg border border-red-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">+5000m²</h3>
              <p className="text-gray-600">De instalaciones</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">24/7</h3>
              <p className="text-gray-600">Soporte técnico</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">+15</h3>
              <p className="text-gray-600">Centros de servicio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}