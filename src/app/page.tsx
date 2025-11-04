'use client'

import Hero from '@/components/home/Hero'
import Marcas from '@/components/home/Marcas'
import Nosotros from '@/components/home/Nosotros'
import Contacto from '@/components/home/Contacto'
import Novedades from '@/components/home/Novedades'
import dynamic from 'next/dynamic';
import GrupoPuebleSkeleton from '@/components/GrupoPuebleSkeleton'


const GrupoPueble = dynamic(
  () => import('@/components/home/GrupoPueble'),
  {
    // Esto es clave:
    // 1. Muestra el skeleton mientras el JS real se descarga
    loading: () => <GrupoPuebleSkeleton />,
    
    // 2. Tu componente es 'use client' y usa 'window' (para isMobile)
    //    así que lo deshabilitamos del renderizado en servidor.
    ssr: false, 
  }
);

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Fondo general con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-gray-900" />

      {/* Patrón SVG global (rejilla + puntos) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="global-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-pattern)" />
        </svg>
      </div>

      {/* Contenido encima */}
      <div className="relative z-10">
        <Hero />
        <GrupoPueble />
        <Marcas />
        <Nosotros />
        <Novedades />
        <Contacto />
      </div>
    </main>
  )
}
