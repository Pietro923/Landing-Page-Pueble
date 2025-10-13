// src/app/page.tsx
import Hero from '@/components/home/Hero'
import Marcas from '@/components/home/Marcas'
import Nosotros from '@/components/home/Nosotros'
import GrupoPueble from '@/components/home/GrupoPueble'
import Contacto from '@/components/home/Contacto'
import Novedades from '@/components/home/Novedades'

export default function Home() {
  return (
    <main className="overflow-hidden z-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-black to-gray-900">
        <Hero />
      </div>

      {/* Separador decorativo */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      {/* Marcas Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900">
        <Marcas />
      </div>

      {/* Separador decorativo */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      {/* Nosotros Section */}
      <div className="bg-gradient-to-br from-red-900 via-black to-gray-900">
        <Nosotros />
      </div>

      {/* Separador con patrón */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* Grupo Pueble Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-red-900">
        <GrupoPueble />
      </div>

      {/* Separador decorativo */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      {/* Novedades Section */}
      <div className="bg-gradient-to-br from-red-900 via-black to-gray-900">
        <Novedades />
      </div>

      {/* Separador con forma ondulada */}
      <div className="relative h-16">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#7f1d1d', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#991b1b', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#7f1d1d', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,0 C150,60 350,0 600,50 C850,100 1050,40 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)"></path>
        </svg>
      </div>

      {/* Contacto Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-red-900">
        <Contacto />
      </div>
    </main>
  )
}