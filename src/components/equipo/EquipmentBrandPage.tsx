"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Phone } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: {
    power: string;
    weight: string;
    capacity: string;
  };
  pdfUrl: string;
}

interface EquipmentBrandPageProps {
  brand: string;
  products: Product[];
  categoryTitle: string;
  categoryDescription: string;
}

const EquipmentBrandPage: React.FC<EquipmentBrandPageProps> = ({ 
  brand, 
  products, 
  categoryTitle, 
  categoryDescription 
}) => {
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
        <div className="container mx-auto px-4 ">
          <h1
            className={`text-4xl md:text-5xl font-bold ${
              brand === "JCB" ? "text-gray-300" : "text-white"
            } text-center mb-4`}
          >
            {categoryTitle}
          </h1>
          <p
            className={`${
              brand === "JCB" ? "text-gray-300" : "text-white"
            } text-center text-lg max-w-2xl mx-auto`}
          >
            {categoryDescription}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        {products.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <Badge className="mb-2 text-center justify-center">{product.category}</Badge>
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-300 mb-4 ">{product.description}</p>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>Potencia:</strong> {product.specs.power}
                    </p>
                    <p>
                      <strong>Peso:</strong> {product.specs.weight}
                    </p>
                    <p>
                      <strong>Capacidad:</strong> {product.specs.capacity}
                    </p>
                  </div>
                </CardContent>
              <CardFooter className="flex gap-4 flex-wrap">
                <Button
                  variant="outline"
                  className="flex-1 min-w-[140px]"
                  onClick={() => window.open(product.pdfUrl, "_blank")}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Ficha Técnica
                </Button>
                <Link
                  href={`https://wa.me/+5491112345678?text=Me interesa el ${product.name}`}
                  target="_blank"
                  className="flex-1 min-w-[120px]"
                >
                  <Button
                    className="w-full"
                    style={{
                      backgroundColor: brand === "Case" ? "#8f131a" : brand === "JCB" ? "#fcb026" : undefined,
                      color: brand === "JCB" ? "#000" : "#fff",
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Consultar
                  </Button>
                </Link>
              </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Aún no hay productos cargados en esta línea. Vuelva pronto para más información.
          </p>
        )}
      </div>
    </div>
  );
};

export default EquipmentBrandPage;
