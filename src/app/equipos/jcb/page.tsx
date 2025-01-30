"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: 'EXCAVADORAS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-2a2 2 0 0 1 2-2h12M6 12V8m12 4v-2m-6 2V4m0 8v4m-6 0v2m12-2v2M3 12h18" />
      </svg>
    ),
    href: '/equipos/jcb/excavadoras'
  },
  {
    id: 2,
    name: 'CARGADORES FRONTALES',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M7 8v8m10-8v8M12 4v16M4 16v-4h16v4" />
      </svg>
    ),
    href: '/equipos/jcb/cargadores-frontales'
  },
  {
    id: 3,
    name: 'MINICARGADORES',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-4h16v4M6 12V8h12v4M12 4v16" />
      </svg>
    ),
    href: '/equipos/jcb/minicargadores'
  },
  {
    id: 4,
    name: 'ROLOS COMPACTADORES',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v16m-8-8h16M8 8h8M6 12h12" />
      </svg>
    ),
    href: '/equipos/jcb/rolos-compactadores'
  },
  {
    id: 5,
    name: 'RETROEXCAVADORAS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-4h16v4M6 12V8m12 4V8M3 12h18M12 4v8" />
      </svg>
    ),
    href: '/equipos/jcb/retroexcavadora'
  },
  {
    id: 6,
    name: 'MANIPULADORES TELESCÓPICOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-4h12l4-4v8M6 12V8m12 4V8M3 12h18" />
      </svg>
    ),
    href: '/equipos/jcb/manipuladores-telescopicos'
  }
];

export default function JCBEquipmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/imagenes/equipment/jcb/jcb.png" 
              alt="JCB Logo" 
              className="h-16"
            />
          </div>
          <p className="text-white text-center text-lg max-w-3xl mx-auto">
            Somos distribuidor oficial JCB en Argentina. JCB es líder en retroexcavadoras en el mercado 
            global, une fuerza, robustez, estabilidad y seguridad en toda su amplia gama de equipos. 
            Máxima eficiencia con el consumo más bajo y optimizado del mercado.
          </p>
        </div>
      

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className="text-[#fcb026] group-hover:text-[#ffc251] transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-300">
                    {category.name}
                  </h3>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}