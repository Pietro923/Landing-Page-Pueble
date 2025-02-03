"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: 'TRACTORES',
    icon: <img 
      src="/maquinaslogos/case/tractor.svg" 
      alt="Tractor" 
      className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
      />,
    href: '/equipos/case/tractores'
  },
  {
    id: 2,
    name: 'COSECHADORAS',
    icon: <img 
    src="/maquinaslogos/case/cosechadora.svg" 
    alt="Cosechadora" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
    />,
    href: '/equipos/case/cosechadoras'
  },
  {
    id: 3,
    name: 'SEMBRADORAS',
    icon: <img 
    src="/maquinaslogos/case/sembradora.png" 
    alt="Cosechadora" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
  />,
    href: '/equipos/case/sembradoras'
  },
  {
    id: 4,
    name: 'PULVERIZADORAS',
    icon: <img 
    src="/maquinaslogos/case/pulverizadora.png" 
    alt="Pulverizadora" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
  />,
    href: '/equipos/case/pulverizadoras'
  },
  {
    id: 5,
    name: 'AGRICULTURA DE PRECISIÓN',
    icon: <img 
    src="/maquinaslogos/case/monitores-i.png" 
    alt="Agricultura de Precisión" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
  />,
    href: '/equipos/case/agricultura-precision'
  },
  {
    id: 6,
    name: 'HENO Y FORRAJE',
    icon: <img 
    src="/maquinaslogos/case/heno.png" 
    alt="Heno y Forraje" 
    className="w-full my-3 h-auto [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(84%)_saturate(5937%)_hue-rotate(357deg)_brightness(98%)_contrast(115%)]" 
  />,
    href: '/equipos/case/heno-forraje'
  }
];

export default function CaseEquipmentPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/imagenes/equipment/case/case.png"
              alt="Case IH Logo" 
              className="h-12"
            />
          </div>
          <p className="text-white text-center text-lg max-w-3xl mx-auto">
            Somos concesionario oficial de la marca CASE IH, comercializamos toda su línea de productos; 
            teniendo una sólida estructura en administración, venta de repuestos y servicio de posventa.
          </p>
        </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className="text-[#8f131a] group-hover:text-[#b71921] transition-colors duration-300">
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