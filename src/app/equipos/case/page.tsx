"use client"
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: 'TRACTORES',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M6 16v2m12-2v2M3 12h3m12 0h3M12 3v4m-4 5h8" />
      </svg>
    ),
    href: '/equipos/case/tractores'
  },
  {
    id: 2,
    name: 'COSECHADORAS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M2 16h20M6 16v2m12-2v2M8 10V6m8 4V6" />
      </svg>
    ),
    href: '/equipos/case/cosechadoras'
  },
  {
    id: 3,
    name: 'SEMBRADORAS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v16m-4-4l4 4l4-4M8 8h8M6 12h12" />
      </svg>
    ),
    href: '/equipos/case/sembradoras'
  },
  {
    id: 4,
    name: 'PULVERIZADORAS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v2m0 12v2M4 12h2m12 0h2M7.05 7.05l1.41 1.41m7.07-1.41l-1.41 1.41M7.05 16.95l1.41-1.41m7.07 1.41l-1.41-1.41" />
      </svg>
    ),
    href: '/equipos/case/pulverizadoras'
  },
  {
    id: 5,
    name: 'AGRICULTURA DE PRECISIÓN',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4v4m0 12v-4m8-4h-4M8 12H4m11.66-5.66l-2.83 2.83m2.83 8.49l-2.83-2.83M7.34 6.34L4.51 9.17m2.83 8.49l-2.83-2.83" />
      </svg>
    ),
    href: '/equipos/case/agricultura-precision'
  },
  {
    id: 6,
    name: 'HENO Y FORRAJE',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4c-1.5 0-3 .5-4 2-1-1.5-2.5-2-4-2s-3 .5-4 2v10c1-1.5 2.5-2 4-2s3 .5 4 2c1-1.5 2.5-2 4-2s3 .5 4 2c1-1.5 2.5-2 4-2s3 .5 4 2V6c-1-1.5-2.5-2-4-2s-3 .5-4 2c-1-1.5-2.5-2-4-2z" />
      </svg>
    ),
    href: '/equipos/case/heno-forraje'
  }
];

export default function CaseEquipmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative py-10 overflow-hidden">
      {/* Hero Section */}
      <div className="bg-[#8f131a] py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/imagenes/equipment/case/caseih.avif" 
              alt="Case IH Logo" 
              className="h-16"
            />
          </div>
          <p className="text-white text-center text-lg max-w-3xl mx-auto">
            Somos concesionario oficial de la marca CASE IH, comercializamos toda su línea de productos; 
            teniendo una sólida estructura en administración, venta de repuestos y servicio de posventa.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className="text-[#8f131a] group-hover:text-[#b71921] transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}