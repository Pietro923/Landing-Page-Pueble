'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-full lg:w-1/2"
        >
          <img 
            src="https://placehold.co/600x400" 
            alt="Sobre Nosotros" 
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4">Sobre nosotros</h2>
          <p className="text-xl max-w-2xl mx-auto lg:mx-0">
            Somos concesionario oficial de las marcas CASE IH y JCB. Comercializamos toda la línea de sus productos y diversas marcas de maquinarias agrícolas usadas. Contamos con una sólida estructura en administración, venta de repuestos y servicio de posventa, manteniendo nuestro compromiso con la Responsabilidad Social Empresaria.
          </p>
          <div className="mt-6">
            <Button className="bg-red-500 hover:bg-red-600">
              Conoce más
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
