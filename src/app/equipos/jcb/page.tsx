"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function JCBEquipmentPage() {
const { t } = useTranslation();
const categories = [
  {
    id: 1,
    name: t('page.equipos.jcb.categories1'),
    description: t('page.equipos.jcb.categories1.desc'),
    icon: '/maquinaslogos/jcb/miniexcavadora.webp',
    href: '/equipos/jcb/excavadoras',
    count: '12+ ' +t('page.equipos.jcb.model')
  },
  {
    id: 2,
    name: t('page.equipos.jcb.categories2'),
    description: t('page.equipos.jcb.categories2.desc'),
    icon: '/maquinaslogos/jcb/cargador.webp',
    href: '/equipos/jcb/cargadores-frontales',
    count: '8+ ' +t('page.equipos.jcb.model')
  },
  {
    id: 3,
    name: t('page.equipos.jcb.categories3'),
    description: t('page.equipos.jcb.categories3.desc'),
    icon: '/maquinaslogos/jcb/manipulador.webp',
    href: '/equipos/jcb/minicargadores',
    count: '6+ ' +t('page.equipos.jcb.model'),
  },
  {
    id: 4,
    name: t('page.equipos.jcb.categories4'),
    description: t('page.equipos.jcb.categories4.desc'),
    icon: '/maquinaslogos/jcb/compactadores.webp',
    href: '/equipos/jcb/rolos-compactadores',
    count: '2+ ' +t('page.equipos.jcb.model'),
  },
  {
    id: 5,
    name: t('page.equipos.jcb.categories5'),
    description: t('page.equipos.jcb.categories5.desc'),
    icon: '/maquinaslogos/jcb/retroexcavadora.webp',
    href: '/equipos/jcb/retroexcavadora',
    count: '3+ ' +t('page.equipos.jcb.model')
  },
  {
    id: 6,
    name: t('page.equipos.jcb.categories6'),
    description: t('page.equipos.jcb.categories6.desc'),
    icon: '/maquinaslogos/jcb/manipulador-telescopico.webp',
    href: '/equipos/jcb/manipuladores-telescopicos',
    count: '5+ ' +t('page.equipos.jcb.model')
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
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
                src="/imagenes/equipment/jcb/jcb.svg" 
                alt="JCB Logo" 
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
            {t('page.equipos.jcb.title1')} <span className="text-yellow-500">JCB</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {t('page.equipos.jcb.desc1')} <strong className="text-white">JCB</strong>  {t('page.equipos.jcb.desc3')}
          </motion.p>

          {/* Stats rápidos 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">#1</div>
              <div className="text-xs sm:text-sm text-gray-400">En retroexcavadoras</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">150+</div>
              <div className="text-xs sm:text-sm text-gray-400">Países</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-1">-30%</div>
              <div className="text-xs sm:text-sm text-gray-400">Menor consumo</div>
            </div>
          </motion.div>*/}
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
                <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 text-white h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                  
                  <CardHeader className="relative flex-grow p-6 lg:p-8">
                    {/* Badge de cantidad */}
                    <div className="absolute top-4 right-4 bg-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-3 py-1">
                      <span className="text-yellow-400 text-xs font-semibold">{category.count}</span>
                    </div>
                    
                    {/* Icono */}
                    <div className="flex items-center justify-center mb-6 h-24">
                      <img 
                        src={category.icon}
                        alt={category.name}
                        className="h-20 w-auto transition-all duration-500 group-hover:scale-110 [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(82%)_sepia(60%)_saturate(1343%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
                      />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  {/* Footer con CTA */}
                  <CardContent className="relative p-6 pt-0">
                    <div className="flex items-center justify-center gap-2 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300 font-semibold">
                      <span> {t('page.equipos.jcb.button')}</span>
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
               {t('page.equipos.jcb.quest')}
            </h3>
            <p className="text-gray-300 text-base lg:text-lg mb-6 max-w-2xl mx-auto">
               {t('page.equipos.jcb.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                   {t('page.equipos.jcb.button2')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a 
                href="https://wa.me/543814674252?text=Hola! Necesito información sobre equipos JCB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
                  <img src="/imagenes/logos/whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}