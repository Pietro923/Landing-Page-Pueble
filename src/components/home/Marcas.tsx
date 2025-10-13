'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Marcas() {
  const marcas = [
    {
      marca: "JCB",
      descripcion: "Equipos innovadores y duraderos para construcción y agricultura.",
      imagen: "/imagenes/inicio/asd1.webp",
      logo: "/imagenes/equipment/jcb/jcb.svg",
      ruta: "/equipos/jcb",
      color: "from-yellow-600 to-yellow-800",
      features: ["Construcción", "Agricultura", "Tecnología avanzada"]
    },
    {
      marca: "Case IH",
      descripcion: "Máquinas confiables diseñadas para maximizar la productividad.",
      imagen: "/imagenes/inicio/carousel1.webp",
      logo: "/imagenes/equipment/case/case.webp",
      ruta: "/equipos/case",
      color: "from-red-600 to-red-800",
      features: ["Maquinaria agrícola", "Alta productividad", "Servicio 24/7"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="marcas" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-red-400 text-lg uppercase tracking-wider mb-4"
          >
            | Nuestras Marcas
          </motion.p>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Maquinaria Agrícola y
            <br className="hidden md:block" />
            <span className="text-red-500"> de Construcción</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            Representantes oficiales de las marcas más destacadas en cada segmento. 
            Soluciones integrales para tu campo y construcción.
          </motion.p>
        </motion.div>

        {/* Tarjetas de marcas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {marcas.map((marca, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={marca.ruta}>
                <Card className="group overflow-hidden bg-transparent border-0 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  <div className="relative h-80 overflow-hidden">
                    {/* Imagen de fondo */}
                    <Image 
                      src={marca.imagen}
                      alt={marca.marca}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay con gradiente */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${marca.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                    
                    {/* Logo de la marca */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <Image
                        src={marca.logo}
                        alt={`Logo ${marca.marca}`}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <CardContent className="relative bg-gradient-to-br from-gray-900 to-black p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {marca.marca}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {marca.descripcion}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {marca.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón */}
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300"
                    >
                      Explorar productos
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            ¿Necesitás asesoramiento personalizado?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está disponible 24/7 para brindarte 
            la mejor atención y asesoramiento profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Contactar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <a 
              href="https://wa.me/543814674252?text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20solicitar%20asesoramiento!" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <img src="/imagenes/logos/whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}