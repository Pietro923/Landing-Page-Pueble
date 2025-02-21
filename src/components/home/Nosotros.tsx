'use client'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link";

export default function Nosotros() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">
      

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen con animación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-1/2"
          >
            <img 
              src="imagenes/empresa/Equipo Pueble SA.jpeg" 
              alt="Sobre Nosotros" 
              className="rounded-xl shadow-2xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* Texto con animación */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Sobre <span className="text-red-400 border-b-2 border-red-500 inline-block">nosotros</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Somos concesionario oficial de las marcas <strong>CASE IH</strong> y <strong>JCB</strong>. Comercializamos toda la línea de sus productos y diversas marcas de maquinarias agrícolas usadas. Contamos con una sólida estructura en administración, venta de repuestos y servicio de posventa, manteniendo nuestro compromiso con la <strong>Responsabilidad Social Empresaria</strong>.
            </p>
            <Link href={"/nosotros"}>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white"
              size="lg"
            >
              Conoce más
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}