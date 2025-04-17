"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

// Asegúrate de instalar framer-motion: npm i framer-motion

const categories = [
  {
    id: 1,
    name: 'EXCAVADORAS',
    icon: <img 
      src="/maquinaslogos/jcb/miniexcavadora.webp" 
      alt="Excavadoras" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/excavadoras'
  },
  {
    id: 2,
    name: 'CARGADORES FRONTALES',
    icon: <img 
      src="/maquinaslogos/jcb/cargador.webp" 
      alt="Cargadores Frontales" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/cargadores-frontales'
  },
  {
    id: 3,
    name: 'MINICARGADORES',
    icon: <img 
      src="/maquinaslogos/jcb/manipulador.webp" 
      alt="MiniCargadores" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/minicargadores'
  },
  {
    id: 4,
    name: 'ROLOS COMPACTADORES',
    icon: <img 
      src="/maquinaslogos/jcb/compactadores.webp" 
      alt="Rolos Compactadores" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/rolos-compactadores'
  },
  {
    id: 5,
    name: 'RETROEXCAVADORAS',
    icon: <img 
      src="/maquinaslogos/jcb/retroexcavadora.webp" 
      alt="Retroexcavadoras" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/retroexcavadora'
  },
  {
    id: 6,
    name: 'MANIPULADORES TELESCÓPICOS',
    icon: <img 
      src="/maquinaslogos/jcb/manipulador-telescopico.webp" 
      alt="Manipuladores Telescópicos" 
      className="h-20 w-auto my-3 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
    />,
    href: '/equipos/jcb/manipuladores-telescopicos'
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

export default function JCBEquipmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/imagenes/equipment/jcb/jcb.svg" 
            alt="JCB Logo" 
            className="h-16"
          />
        </motion.div>
        <motion.p 
          className="text-gray-300 text-center text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Somos distribuidor oficial JCB en Argentina. JCB es líder en retroexcavadoras en el mercado 
          global, une fuerza, robustez, estabilidad y seguridad en toda su amplia gama de equipos. 
          Máxima eficiencia con el consumo más bajo y optimizado del mercado.
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
                    <div className="flex items-center justify-center h-32 text-[#fcb026] group-hover:text-[#ffc251] transition-colors duration-300">
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