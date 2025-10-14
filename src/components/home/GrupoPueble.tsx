// src/components/home/GrupoPueble.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from "react-i18next";

// Define las empresas del Grupo Pueble
const empresasGrupo = [
  {
    id: 'pueble-sa',
    title: 'Pueble S.A.',
    description: 'Maquinaria agrícola de primera línea',
    image: "/imagenes/inicio/carousel3.webp", // Cambia por tu imagen
    link: 'https://landing-page-pueble.vercel.app/',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'jcb',
    title: 'JCB',
    description: 'Maquinaria de construcción de primera línea',
    image: '/imagenes/inicio/asd1.webp', // Cambia por tu imagen
    link: 'https://landing-page-pueble.vercel.app/',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    id: 'kia',
    title: 'CP Motors - KIA',
    description: 'Concesionario oficial KIA',
    image: '/imagenes/empresas/kia.jpeg', // Cambia por tu imagen
    link: 'https://www.instagram.com/kia.tucuman/?hl=es',
    color: 'from-red-100 to-red-300'
  },
  {/*
    id: 'semage-sa',
    title: 'Semage S.A',
    description: 'Servicio de posventa de maquinarias agrícolas y viales CASE IH y CASE (servicio y repuestos originales)',
    image: '/imagenes/grupo/empresa3.webp', // Cambia por tu imagen
    link: 'https://www.instagram.com/semage_unimil/',
    color: 'from-blue-600 to-blue-800'
  */},
  {
    id: 'masi-sa',
    title: 'Masi S.A - Ducati',
    description: 'Concesionario oficial DUCATI',
    image: '/imagenes/grupo/empresa4.webp', // Cambia por tu imagen
    link: 'https://www.instagram.com/ducatitucuman/?hl=es-la',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 'ubmotors',
    title: 'UB Motors - Audi',
    description: 'Concesionario oficial AUDI',
    image: '/imagenes/grupo/empresa5.webp', // Cambia por tu imagen
    link: 'https://ubmotors.com.ar/',
    color: 'from-yellow-600 to-yellow-800'
  }
];

// Componente de tarjeta individual
const EmpresaCard = ({ empresa, index, active, handleClick }: any) => {
  const { t } = useTranslation();
  const isActive = active === empresa.id;

  return (
    <motion.div
      className={`relative ${
        isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-700 ease-out-flex cursor-pointer overflow-hidden rounded-3xl`}
      onClick={() => handleClick(empresa.id)}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      {/* Imagen de fondo */}
      <img
        src={empresa.image}
        alt={empresa.title}
        className="absolute w-full h-full object-cover"
      />
      
      {/* Overlay con gradiente */}
      <div className={`absolute inset-0 bg-gradient-to-b ${empresa.color} opacity-70`} />
      
      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6">
        {/* Título visible siempre */}
        <motion.h3
          className={`font-bold text-white ${
            isActive ? 'text-4xl' : 'text-2xl lg:text-xl lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-6'
          } transition-all duration-500`}
          style={!isActive ? { whiteSpace: 'nowrap' } : {}}
        >
          {empresa.title}
        </motion.h3>

        {/* Contenido expandido (solo visible cuando está activo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: isActive ? 0.3 : 0 }}
          className={`${isActive ? 'block' : 'hidden'} mt-4`}
        >
          <p className="text-white/90 text-lg mb-6 max-w-lg">
            {t(`grupoPueble.${empresa.id}`)}
          </p>
          
          <a
            href={empresa.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
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

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 ">
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
            <span className="text-red-500"> Grupo Pueble</span>
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