'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Marcas() {
  const marcas = [
    {
      marca: "JCB",
      descripcion: "Equipos innovadores y duraderos para construcción y agricultura.",
      imagen: "/imagenes/equipment/jcb/jcb.png",
      ruta: "/equipos/jcb",
    },
    {
      marca: "Case",
      descripcion: "Máquinas confiables diseñadas para maximizar la productividad.",
      imagen: "/imagenes/equipment/case/caselogo.png",
      ruta: "/equipos/case",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-4 text-white"
        >
          Maquinaria Agrícola
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Nuestro compromiso con el cliente, la calidad y la excelencia nos llevó a convertirnos en representantes de las marcas más destacadas en cada uno de sus segmentos. En nuestros concesionarios podrás encontrar las soluciones que tu campo necesita.
        </motion.p>

        {/* Tarjetas de marcas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {marcas.map((marca, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-0 hover:shadow-lg transition-all"
            >
              <img 
                src={marca.imagen} 
                alt={marca.marca} 
                className="w-full h-40 object-contain bg-white rounded-t-lg p-4"
              />
              <CardHeader className="text-center p-4">
                <CardTitle className="text-2xl text-white">{marca.marca}</CardTitle>
                <CardDescription className="text-gray-200">{marca.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href={marca.ruta}>
                  <Button className="bg-red-500 hover:bg-red-600">Ver más</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* CTA (Llamado a la acción) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-lg bg-white/10 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-2 text-white">¿Necesitas asesoramiento personalizado?</h3>
          <p className="text-gray-200 mb-4">Nuestro equipo está disponible 24/7 para ayudarte.</p>
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600"
          >
            Contactar Gerente de Ventas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}