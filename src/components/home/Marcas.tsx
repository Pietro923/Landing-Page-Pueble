'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function Marcas() {
  const marcas = [
    {
      marca: "JCB",
      descripcion: "Equipos innovadores y duraderos para construcción y agricultura.",
      imagen: "/imagenes/equipment/jcb/jcb.png",
      ruta: "/equipos/jcb",
    },
    {
      marca: "Case",
      descripcion: "Máquinas confiables diseñadas para maximizar la productividad.",
      imagen: "/imagenes/equipment/case/caseih.avif",
      ruta: "/equipos/case",
    },
  ];

  return (
    <section className="py-24 bg-red-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Maquinaria Agrícola</h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12">
          Nuestro compromiso con el cliente, la calidad y la excelencia nos llevó a convertirnos en representantes de las marcas más destacadas en cada uno de sus segmentos. En nuestros concesionarios podrás encontrar las soluciones que tu campo necesita.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marcas.map((marca, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 hover:shadow-lg transition-all">
              <img 
                src={marca.imagen} 
                alt={marca.marca} 
                className="w-full h-40 object-contain bg-white rounded-t-lg p-4"
              />
              <CardHeader className="text-center p-4">
                <CardTitle className="text-2xl text-white">{marca.marca}</CardTitle>
                <CardDescription className="text-gray-200">{marca.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                
                <Link href={marca.ruta}>
                  <Button className="bg-red-500 hover:bg-red-600">Ver más</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">¿Necesitas asesoramiento personalizado?</h3>
          <p className="text-gray-200 mb-4">Nuestro equipo está disponible 24/7 para ayudarte.</p>
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600"
          >
            Contactar Gerente de Ventas
          </Button>
        </div>
      </div>
    </section>
  );
}
