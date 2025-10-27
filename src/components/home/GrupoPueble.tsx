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
  link?: string;
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
  translations: {
    description: string;
    learnMore: string;
  };
}

// ============================================
// 🛠️ UTILIDADES
// ============================================
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Placeholder blur para imágenes (base64 SVG pequeño)
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

// ============================================
// 🚀 COMPONENTE MEMOIZADO - TARJETA INDIVIDUAL
// ============================================
const EmpresaCard = memo(({ 
  empresa, 
  index, 
  active, 
  handleClick, 
  isMobile,
  translations 
}: EmpresaCardProps) => {
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
    }, 6000); // 6 segundos para mejor performance

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
    hover: shouldReduceMotion ? {} : { 
      scale: isActive ? 1 : 1.01,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
  }), [shouldReduceMotion, isActive]);

  const contentVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: 0.2,
        ease: 'easeOut'
      } 
    },
  }), [shouldReduceMotion]);

  return (
    <motion.div
      className={`relative ${ 
        isActive ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]' 
      } flex items-center justify-center min-w-[170px] h-[700px] 
      transition-[flex] duration-500 ease-out cursor-pointer overflow-hidden rounded-3xl`}
      onClick={handleCardClick}
      variants={cardVariants}
      whileHover="hover"
      style={{ willChange: 'transform' }}
    >
      {/* ===== IMAGEN DE FONDO (optimizada con Next Image) ===== */}
      <div className="absolute inset-0">
        {/* Placeholder mientras carga */}
        {!imageLoaded && (
          <div 
            className={`absolute inset-0 bg-gradient-to-b ${currentBrand.color} animate-pulse`} 
          />
        )}
        
        <Image
          src={currentBrand.image}
          alt={currentBrand.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500 ${ 
            imageLoaded ? 'opacity-100' : 'opacity-0' 
          }`}
          onLoad={() => setImageLoaded(true)}
          priority={index === 0}
          quality={isMobile ? 60 : 75}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
      </div>

      {/* Overlay con gradiente */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${currentBrand.color} opacity-70`} 
      />

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6">
        
        {/* Título colapsado */}
        {!isActive && (
          <div className="w-full h-full flex items-center justify-center p-4">
            
            {/* Mobile: Vertical (logos arriba, título abajo) */}
            <div className="flex lg:hidden flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {empresa.brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-2 flex items-center justify-center min-w-[80px] h-[70px]"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="max-h-[50px] max-w-[70px] object-contain"
                    />
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-white text-xl text-center">
                {empresa.title}
              </h3>
            </div>

            {/* Desktop: Vertical con todos los logos */}
            <div className="hidden lg:flex lg:flex-col items-center justify-center gap-4">
              <h3 className="font-bold text-white text-xl whitespace-nowrap italic">
                {empresa.title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {empresa.brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-3 flex items-center justify-center min-w-[100px] h-[70px]"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="max-h-[50px] max-w-[80px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contenido expandido */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={contentVariants}
          className={`${isActive ? 'flex flex-col' : 'hidden'} space-y-4`}
        >
          {/* Logos de marcas */}
          {empresa.brands.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap">
              {empresa.brands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleImageChange(idx, e)}
                  className={`bg-white/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center min-w-[100px] h-[70px] border-2 transition-all duration-200 ${ 
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
                  className={`h-2 rounded-full transition-all duration-200 ${ 
                    idx === currentImageIndex 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/40' 
                  }`}
                  aria-label={`Ver ${empresa.brands[idx].name}`}
                />
              ))}
            </div>
          )}

          {/* Nombre empresa */}
          <h3 className="font-bold text-white text-3xl lg:text-4xl italic">
            {empresa.title}
          </h3>

          {/* Descripción */}
          <p className="text-white/90 text-base lg:text-lg max-w-lg leading-relaxed">
            {translations.description}
          </p>

          {/* Botón */}
          <a
            href={currentBrand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 shadow-lg w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            {translations.learnMore}
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
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
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

  // Detectar móvil con debounce
  useEffect(() => {
    const checkMobile = debounce(() => {
      setIsMobile(window.innerWidth < 1024);
    }, 150);

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
          color: 'from-red-600 to-red-800',
          link: 'https://www.instagram.com/pueblesa/'
        },
        {
          name: 'JCB',
          logo: '/imagenes/equipment/jcb/jcb.svg',
          image: '/imagenes/grupo_Pueble/vehiculos/jcb-construccion.webp',
          color: 'from-yellow-600 to-yellow-800',
          link: 'https://www.instagram.com/jcbpueblesa/',
        }
      ],
      link: 'https://www.instagram.com/pueblesa/',
    },
    {
      id: 'kia',
      title: 'CP Motors',
      brands: [
        {
          name: 'KIA',
          logo: '/imagenes/grupo_Pueble/logos_empresas/kia_logo.jpg',
          image: '/imagenes/grupo_Pueble/vehiculos/kia_vehiculo.webp',
          color: 'from-red-100 to-red-300',
          link: 'https://www.instagram.com/kia.tucuman/?hl=es',
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
          color: 'from-red-600 to-red-700',
          link: 'https://www.instagram.com/ducatitucuman/?hl=es-la',
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
          color: 'from-gray-800 to-gray-900',
          link: 'https://www.instagram.com/audiubmotors/',
        }
      ],
      link: 'https://www.instagram.com/audiubmotors/',
    },
    {
      id: 'semage-sa',
      title: 'Semage S.A',
      brands: [
        {
          name: 'Acogra',
          logo: '/imagenes/grupo_Pueble/logos_empresas/acogra_logo.png',
          image: '/imagenes/grupo_Pueble/vehiculos/semage_vehiculo.webp',
          color: 'from-blue-700 to-blue-800',
          link: 'https://www.instagram.com/SemageGp/',
        }
      ],
      link: 'https://www.instagram.com/SemageGp/',
    }
  ], []);

  return (
    <section 
      id="grupo-pueble" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-24"
    >
      <div className="container mx-auto px-4">
        
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              width={230}
              height={200}
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
          transition={{ duration: 0.5, delay: 0.2 }}
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
              translations={{
                description: t(`grupoPueble.${empresa.id}`),
                learnMore: t("grupoPueble.learnMore")
              }}
            />
          ))}
        </motion.div>

        {/* Indicador de interacción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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