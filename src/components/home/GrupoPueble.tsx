'use client';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from "react-i18next";
import Image from 'next/image';

// ============================================
// 🎯 TIPOS
// ============================================
interface Brand {
  name: string;
  logo: string;
  image: string;
  color: string;
}

interface Empresa {
  id: string;
  title: string;
  brands: Brand[];
  link: string;
}

interface EmpresaCardProps {
  empresa: Empresa;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  isMobile: boolean;
}

// ============================================
// 🚀 COMPONENTE MEMOIZADO - TARJETA INDIVIDUAL
// ============================================
const EmpresaCard = memo(({ empresa, index, active, handleClick, isMobile }: EmpresaCardProps) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const isActive = active === empresa.id;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Obtener marca actual
  const currentBrand = useMemo(
    () => empresa.brands[currentImageIndex],
    [empresa.brands, currentImageIndex]
  );

  // Alternar imágenes solo si está activo y tiene múltiples marcas
  useEffect(() => {
    if (empresa.brands.length <= 1 || !isActive || isMobile) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % empresa.brands.length);
    }, 5000); // Aumentado a 5s para mejor performance

    return () => clearInterval(interval);
  }, [empresa.brands.length, isActive, isMobile]);

  // Handler para cambiar imagen (memoizado)
  const handleImageChange = useCallback((idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(idx);
  }, []);

  // Handler para click en tarjeta (memoizado)
  const handleCardClick = useCallback(() => {
    handleClick(empresa.id);
  }, [handleClick, empresa.id]);

  // Variantes de animación optimizadas
  const cardVariants = useMemo(() => ({
    hover: shouldReduceMotion ? {} : { scale: isActive ? 1 : 1.02 },
  }), [shouldReduceMotion, isActive]);

  const contentVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, delay: 0.3 }
    },
  }), [shouldReduceMotion]);

  return (
    <motion.div
      className={`relative ${
        isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-700 cursor-pointer overflow-hidden rounded-3xl`}
      onClick={handleCardClick}
      variants={cardVariants}
      whileHover="hover"
    >
      {/* ===== IMAGEN DE FONDO (optimizada con Next Image) ===== */}
      <div className="absolute inset-0">
        {/* Placeholder mientras carga */}
        {!imageLoaded && (
          <div className={`absolute inset-0 bg-gradient-to-b ${currentBrand.color} animate-pulse`} />
        )}
        
        <Image
          src={currentBrand.image}
          alt={currentBrand.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          priority={index === 0} // Solo primera imagen con priority
          quality={isMobile ? 75 : 85} // Menor calidad en móvil
        />
      </div>

      {/* Overlay con gradiente */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentBrand.color} opacity-70`} />

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6">
        {/* Título colapsado */}
        {!isActive && (
          <h3 className="font-bold text-white text-2xl lg:text-xl lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-6 transition-all duration-500 whitespace-nowrap">
            {empresa.title}
          </h3>
        )}

        {/* Contenido expandido */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={contentVariants}
          className={`${isActive ? 'flex flex-col' : 'hidden'} space-y-4`}
        >
          {/* Logos de marcas */}
          {empresa.brands.length > 1 && (
            <div className="flex items-center gap-3 flex-wrap">
              {empresa.brands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleImageChange(idx, e)}
                  className={`bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center min-w-[100px] h-[70px] border-2 transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'border-white shadow-lg scale-105'
                      : 'border-white/30 hover:border-white/50'
                  }`}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="max-h-[40px] max-w-[80px] object-contain"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Indicadores */}
          {empresa.brands.length > 1 && (
            <div className="flex gap-2">
              {empresa.brands.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleImageChange(idx, e)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Ver ${empresa.brands[idx].name}`}
                />
              ))}
            </div>
          )}

          {/* Nombre empresa */}
          <h3 className="font-bold text-white text-3xl lg:text-4xl">
            {empresa.title}
          </h3>

          {/* Descripción */}
          <p className="text-white/90 text-base lg:text-lg max-w-lg leading-relaxed">
            {t(`grupoPueble.${empresa.id}`)}
          </p>

          {/* Botón */}
          <a
            href={empresa.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            {t("grupoPueble.learnMore")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Indicador de click (solo desktop) */}
      {!isActive && !isMobile && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
});

EmpresaCard.displayName = 'EmpresaCard';

// ============================================
// 🎨 COMPONENTE PRINCIPAL
// ============================================
export default function GrupoPueble() {
  const [active, setActive] = useState('pueble-sa');
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handler memoizado para cambiar empresa activa
  const handleSetActive = useCallback((id: string) => {
    setActive(id);
  }, []);

  // Datos de empresas (memoizados)
  const empresasGrupo = useMemo<Empresa[]>(() => [
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
  ], []);

  return (
    <section id="grupo-pueble" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 lg:mb-16"
        >
          <p className="text-red-400 text-base lg:text-lg uppercase tracking-wider mb-4">
            | {t("grupoPueble.badge")}
          </p>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
            {t("grupoPueble.title")}
            <br className="hidden md:block" />
            <Image
              src="/imagenes/logos/LogoPueble.webp"
              alt="Logo de Pueble S.A."
              width={184}
              height={164}
              priority
              className="mx-auto mt-4"
            />
          </h2>

          <p className="text-gray-300 text-base lg:text-xl max-w-3xl mx-auto">
            {t("grupoPueble.description")}
          </p>
        </motion.div>

        {/* Galería de empresas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex lg:flex-row flex-col min-h-[600px] lg:min-h-[700px] gap-3 lg:gap-5"
        >
          {empresasGrupo.map((empresa, index) => (
            <EmpresaCard
              key={empresa.id}
              empresa={empresa}
              index={index}
              active={active}
              handleClick={handleSetActive}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

        {/* Indicador de interacción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6 lg:mt-8"
        >
          <p className="text-gray-400 text-xs lg:text-sm">
            {t("grupoPueble.detail")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}