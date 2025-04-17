"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: 'TRACTORES',
    icon: <img 
      src="/maquinaslogos/case/tractor.webp" 
      alt="Tractor" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/tractores'
  },
  {
    id: 2,
    name: 'COSECHADORAS',
    icon: <img 
      src="/maquinaslogos/case/cosechadora.webp" 
      alt="Cosechadora" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/cosechadoras'
  },
  {
    id: 3,
    name: 'SEMBRADORAS',
    icon: <img 
      src="/maquinaslogos/case/sembradora.webp" 
      alt="Cosechadora" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/sembradoras'
  },
  {
    id: 4,
    name: 'PULVERIZADORAS',
    icon: <img 
      src="/maquinaslogos/case/pulverizadora.webp" 
      alt="Pulverizadora" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/pulverizadoras'
  },
  {
    id: 5,
    name: 'AGRICULTURA DE PRECISIÓN',
    icon: <img 
      src="/maquinaslogos/case/monitores-i.webp" 
      alt="Agricultura de Precisión" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/agricultura-precision'
  },
  {
    id: 6,
    name: 'HENO Y FORRAJE',
    icon: <img 
      src="/maquinaslogos/case/heno.webp" 
      alt="Heno y Forraje" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/heno-forraje'
  }
];

// Variantes simples similares a las de ProductLinesPage
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function CaseEquipmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/imagenes/equipment/case/case.webp"
            alt="Case IH Logo" 
            className="h-12 md:h-16"
          />
        </motion.div>
        <motion.p 
          className="text-gray-300 text-center text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Somos concesionario oficial de la marca CASE IH, comercializamos toda su línea de productos; 
          teniendo una sólida estructura en administración, venta de repuestos y servicio de posventa.
        </motion.p>
      </div>
      
      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

        
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
            <Link href={category.href} className="h-full">
              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-all duration-300 text-white h-full flex flex-col">
                                <CardHeader className="flex flex-col items-center justify-between text-center p-8 h-full">
                  <div className="flex items-center justify-center h-32 text-[#8f131a] group-hover:text-[#b71921] transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mt-4">
                      {category.name}
                    </h3>
                    </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}