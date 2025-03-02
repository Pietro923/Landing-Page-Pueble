"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductLine {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface ProductLinesPageProps {
  brand: string;
  category: string;
  lines: ProductLine[];
}

const ProductLinesPage: React.FC<ProductLinesPageProps> = ({
  brand,
  category,
  lines
}) => {
  const isEmpty = lines.length === 0;

  return (
    <div 
    className={`min-h-screen py-4 px-4 sm:px-6 lg:px-8 ${
      brand === "Case"
        ? "bg-gradient-to-br from-red-900 via-black to-gray-900 "
        : brand === "JCB"
        ? "bg-gradient-to-br from-yellow-900 via-black to-gray-900 "
        : "bg-gradient-to-r from-blue-600 to-blue-800"
    }`}
    >
      {/* Hero Section */}
      <div
        className={`py-16 ${
          brand === "Case"
            ? "bg-gradient-to-br from-red-900 via-black to-gray-900 rounded-2xl"
            : brand === "JCB"
            ? "bg-gradient-to-br from-yellow-900 via-black to-gray-900 rounded-2xl"
            : "bg-gradient-to-r from-blue-600 to-blue-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${brand === 'JCB' ? 'text-gray-800' : 'text-white'} text-center mb-4`}>
            {category} {brand}
          </h1>
          <p className={`${brand === 'JCB' ? 'text-gray-800' : 'text-white'} text-center text-lg max-w-2xl mx-auto`}>
            Explore nuestras diferentes líneas de {category.toLowerCase()} y encuentre 
            el equipo perfecto para sus necesidades.
          </p>
        </div>
      </div>

      {/* Product Lines Grid */}
      <div className="container mx-auto px-4 py-16">
        {isEmpty ? (
          <div className="text-center py-16 ">
            <p className="text-gray-600 text-xl">
              Actualmente no hay líneas de {category.toLowerCase()} cargadas.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {lines.map((line) => (
              <Card key={line.id} className="flex flex-col bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 ">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={line.image}
                      alt={line.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Línea {line.name}</h3>
                </CardHeader>
                
                <CardContent className="flex-grow ">
                  <p className="text-gray-300">{line.description}</p>
                </CardContent>

                <CardFooter>
                  <Link href={line.href} className="w-full">
                    <Button 
                      className="w-full"
                      style={{
                        backgroundColor: brand === 'Case' ? '#8f131a' : brand === 'JCB' ? '#fcb026' : undefined,
                        color: brand === 'JCB' ? '#000' : '#fff'
                      }}
                    >
                      Ver Productos
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLinesPage;
