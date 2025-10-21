// src/components/home/GrupoPueble.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from "react-i18next";
import Image from 'next/image';
// Componente de tarjeta individual
const EmpresaCard = ({ empresa, index, active, handleClick }: any) => {
  const { t } = useTranslation();
  const isActive = active === empresa.id;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Alternar imágenes automáticamente cuando hay múltiples brands
  useEffect(() => {
  if (empresa.brands.length <= 1 || !isActive) {
    setCurrentImageIndex(0) // Reset cuando no esté activo
    return
  }
  
  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % empresa.brands.length)
  }, 4000)
  
  return () => clearInterval(interval)
}, [empresa.brands.length, isActive])

  const currentBrand = empresa.brands[currentImageIndex];

  return (
    <motion.div
      className={`relative ${
        isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-700 ease-out-flex cursor-pointer overflow-hidden rounded-3xl`}
      onClick={() => handleClick(empresa.id)}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      {/* Imágenes de fondo con transición */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={currentBrand.image}
          alt={currentBrand.name}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>
      
      {/* Overlay con gradiente - CAMBIA según la marca activa */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`gradient-${currentImageIndex}`}
          className={`absolute inset-0 bg-gradient-to-b ${currentBrand.color} opacity-70`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>
      
      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6">
        {/* Título visible siempre (versión colapsada) */}
        {!isActive && (
          <motion.h3
            className="font-bold text-white text-2xl lg:text-xl lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-6 transition-all duration-500"
            style={{ whiteSpace: 'nowrap' }}
          >
            {empresa.title}
          </motion.h3>
        )}

        {/* Contenido expandido (solo visible cuando está activo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: isActive ? 0.3 : 0 }}
          className={`${isActive ? 'flex flex-col' : 'hidden'} space-y-6`}
        >
          {/* Logos de las marcas */}
          <div className="flex items-center gap-4 flex-wrap">
            {empresa.brands.map((brand: any, idx: number) => (
              <motion.button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center min-w-[120px] h-[80px] border-2 transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'border-white shadow-lg shadow-white/50 scale-105' 
                    : 'border-white/30 hover:border-white/50 hover:scale-102'
                }`}
                whileHover={{ scale: idx === currentImageIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-[50px] max-w-[100px] object-contain"
                />
              </motion.button>
            ))}
          </div>

          {/* Indicadores de imagen (si hay múltiples) */}
          {empresa.brands.length > 1 && (
            <div className="flex gap-2 justify-start">
              {empresa.brands.map((brand: any, idx: number) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ver ${empresa.brands[idx].name}`}
                />
              ))}
            </div>
          )}

          {/* Nombre de la empresa */}
          <h3 className="font-bold text-white text-4xl">
            {empresa.title}
          </h3>

          {/* Descripción */}
          <p className="text-white/90 text-lg max-w-lg leading-relaxed">
            {t(`grupoPueble.${empresa.id}`)}
          </p>
          
          {/* Botón */}
          <a
            href={empresa.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            {t("grupoPueble.learnMore")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Indicador de "click para expandir" cuando no está activo */}
      {!isActive && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Componente principal
export default function GrupoPueble() {
  const [active, setActive] = useState('pueble-sa');
  const { t } = useTranslation();

  // Define las empresas del Grupo Pueble DENTRO del componente para poder usar t()
  const empresasGrupo = [
    {
      id: 'pueble-sa',
      title: 'Pueble S.A.',
      brands: [
        {
          name: 'Case IH',
          logo: '/imagenes/equipment/case/case.webp',
          image: '/imagenes/inicio/carousel3.webp',
          color: 'from-red-600 to-red-800'
        },
        {
          name: 'JCB',
          logo: '/imagenes/equipment/jcb/jcb.svg',
          image: '/imagenes/grupo_Pueble/vehiculos/jcb-construccion.webp',
          color: 'from-yellow-600 to-yellow-800'
        }
      ],
      link: 'https://landing-page-pueble.vercel.app/',
    },
    {
      id: 'kia',
      title: 'CP Motors',
      brands: [
        {
          name: 'KIA',
          logo: '/imagenes/grupo_Pueble/logos_empresas/kia_logo.jpg',
          image: '/imagenes/grupo_Pueble/vehiculos/kia_vehiculo.webp',
          color: 'from-red-100 to-red-300'
        }
      ],
      link: 'https://www.instagram.com/kia.tucuman/?hl=es',
    },
    {
      id: 'masi-sa',
      title: 'Masi S.A',
      brands: [
        {
          name: 'Ducati',
          logo: '/imagenes/grupo_Pueble/logos_empresas/ducati_logo2.png',
          image: '/imagenes/grupo_Pueble/vehiculos/ducati_vehiculo.webp',
          color: 'from-red-600 to-red-700'
        }
      ],
      link: 'https://www.instagram.com/ducatitucuman/?hl=es-la',
    },
    {
      id: 'ubmotors',
      title: 'UB Motors',
      brands: [
        {
          name: 'Audi',
          logo: '/imagenes/grupo_Pueble/logos_empresas/audi_logo.png',
          image: '/imagenes/grupo_Pueble/vehiculos/a5_audi.webp',
          color: 'from-gray-800 to-gray-900'
        }
      ],
      link: 'https://ubmotors.com.ar/',
    },
    {
      id: 'semage-sa',
      title: 'Semage S.A',
      brands: [
        {
          name: 'Acobra',
          logo: '/imagenes/grupo_Pueble/logos_empresas/Semage.PNG',
          image: '/imagenes/grupo_Pueble/vehiculos/semage_vehiculo.webp',
          color: 'from-blue-700 to-blue-800'
        }
      ],
      link: 'https://www.instagram.com/semage_unimil/',
    }
  ];

  return (
    <section id="grupo-pueble" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
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
            | {t("grupoPueble.badge")}
          </motion.p>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            {t("grupoPueble.title")}
            <br className="hidden md:block" />
            <Image 
              src="/imagenes/logos/LogoPueble.webp" 
              alt="Logo de Pueble S.A."
              width={184}
              height={164}
              priority
              className="mx-auto"
            />
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            {t("grupoPueble.description")}
          </motion.p>
        </motion.div>

        {/* Galería de empresas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex lg:flex-row flex-col min-h-[700px] gap-5"
        >
          {empresasGrupo.map((empresa, index) => (
            <EmpresaCard
              key={empresa.id}
              empresa={empresa}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </motion.div>

        {/* Indicador de interacción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            {t("grupoPueble.detail")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}