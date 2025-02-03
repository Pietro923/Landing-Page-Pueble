"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: 'EXCAVADORAS',
    icon: <img 
    src="/maquinaslogos/jcb/miniexcavadora.png" 
    alt="Excavadoras" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
    href: '/equipos/jcb/excavadoras'
  },
  {
    id: 2,
    name: 'CARGADORES FRONTALES',
    icon: <img 
    src="/maquinaslogos/jcb/cargador.png" 
    alt="Cargadores Frontales" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
    href: '/equipos/jcb/cargadores-frontales'
  },
  {
    id: 3,
    name: 'MINICARGADORES',
    icon: <img 
    src="/maquinaslogos/jcb/cargador.png" 
    alt="MiniCargadores" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
    href: '/equipos/jcb/minicargadores'
  },
  {
    id: 4,
    name: 'ROLOS COMPACTADORES',
    icon: <img 
    src="/maquinaslogos/jcb/compactadores.png" 
    alt="Rolos Compactadores" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
    href: '/equipos/jcb/rolos-compactadores'
  },
  {
    id: 5,
    name: 'RETROEXCAVADORAS',
    icon: <img 
    src="/maquinaslogos/jcb/retroexcavadora.png" 
    alt="Retroexcavadoras" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
    href: '/equipos/jcb/retroexcavadora'
  },
  {
    id: 6,
    name: 'MANIPULADORES TELESCÓPICOS',
    icon: <img 
    src="/maquinaslogos/jcb/manipulador-telescopico.png" 
    alt="Manipuladores Telescópicos" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(66%)_sepia(75%)_saturate(634%)_hue-rotate(360deg)_brightness(103%)_contrast(103%)]"
  />,
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
              src="/imagenes/equipment/jcb/jcb.svg" 
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