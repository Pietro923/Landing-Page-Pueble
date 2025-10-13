"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: 'TRACTORES',
    description: 'Potencia y eficiencia para tu campo',
    icon: '/maquinaslogos/case/tractor.webp',
    href: '/equipos/case/tractores',
    count: '15+ modelos'
  },
  {
    id: 2,
    name: 'COSECHADORAS',
    description: 'Tecnología de cosecha avanzada',
    icon: '/maquinaslogos/case/cosechadora.webp',
    href: '/equipos/case/cosechadoras',
    count: '7+ modelos'
  },
  {
    id: 3,
    name: 'SEMBRADORAS',
    description: 'Precisión en cada siembra',
    icon: '/maquinaslogos/case/sembradora.webp',
    href: '/equipos/case/sembradoras',
    count: '1+ modelos'
  },
  {
    id: 4,
    name: 'PULVERIZADORAS',
    description: 'Aplicación eficiente y uniforme',
    icon: '/maquinaslogos/case/pulverizadora.webp',
    href: '/equipos/case/pulverizadoras',
    count: '4+ modelos'
  },
  {
    id: 5,
    name: 'AGRICULTURA DE PRECISIÓN',
    description: 'Tecnología para maximizar rendimientos',
    icon: '/maquinaslogos/case/monitores-i.webp',
    href: '/equipos/case/agricultura-precision',
    count: '2+ soluciones'
  },
  {
    id: 6,
    name: 'HENO Y FORRAJE',
    description: 'Equipamiento para producción ganadera',
    icon: '/maquinaslogos/case/heno.webp',
    href: '/equipos/case/heno-forraje',
    count: '3+ modelos'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  }
};

export default function CaseEquipmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-block">
              <img 
                src="/imagenes/equipment/case/case.webp"
                alt="Case IH Logo" 
                className="h-16 md:h-20"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Equipamiento <span className="text-red-500">Case IH</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Concesionario oficial de <strong className="text-white">CASE IH</strong>. Comercializamos toda su línea de productos 
            con una sólida estructura en administración, venta de repuestos y servicio de posventa.
          </motion.p>
        </motion.div>
        
        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={category.href} className="block h-full group">
                <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 text-white h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                  
                  <CardHeader className="relative flex-grow p-6 lg:p-8">
                    {/* Badge de cantidad */}
                    <div className="absolute top-4 right-4 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">{category.count}</span>
                    </div>
                    
                    {/* Icono */}
                    <div className="flex items-center justify-center mb-6 h-24">
                      <img 
                        src={category.icon}
                        alt={category.name}
                        className="h-20 w-auto transition-all duration-500 group-hover:scale-110 [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]"
                      />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-center group-hover:text-red-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-gray-400 text-m text-center group-hover:text-gray-300 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  {/* Footer con CTA */}
                  <CardContent className="relative p-6 pt-0">
                    <div className="flex items-center justify-center gap-2 text-white group-hover:text-red-600 transition-colors duration-300 font-semibold">
                      <span>Ver modelos</span>
                      <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-gray-300 text-base lg:text-lg mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para asesorarte y encontrar el equipo perfecto para tus necesidades
            </p>
            <Link href="/contacto">
              <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105">
                Contactar asesor
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}