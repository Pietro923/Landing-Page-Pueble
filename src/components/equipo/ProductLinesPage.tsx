"use client";
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Info } from "lucide-react";

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
  
  // Define brand-specific styles
  const brandStyles = {
    Case: {
      bg: "from-red-900 via-black to-gray-900",
      accent: "#b71921",
      accentHover: "#8f131a",
      logoPath: "/imagenes/equipment/case/case.png",
      lightText: "text-red-300",
      buttonText: "text-white",
      cardHover: "group-hover:shadow-red-500/20"
    },
    JCB: {
      bg: "from-yellow-800 via-black to-gray-900",
      accent: "#fcb026",
      accentHover: "#e29600",
      logoPath: "/imagenes/equipment/jcb/jcb.svg",
      lightText: "text-yellow-300",
      buttonText: "text-black",
      cardHover: "group-hover:shadow-yellow-500/20"
    },
    default: {
      bg: "from-blue-700 via-blue-900 to-gray-900",
      accent: "#3b82f6",
      accentHover: "#2563eb",
      logoPath: "",
      lightText: "text-blue-300",
      buttonText: "text-white",
      cardHover: "group-hover:shadow-blue-500/20"
    }
  };
  
  // Select current brand style or fallback to default
  const style = brandStyles[brand as keyof typeof brandStyles] || brandStyles.default;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${style.bg}`}>
      {/* Hero Section */}
      <section className="relative pt-8 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            {/* Display brand logo if available */}
            {style.logoPath && (
              <div className="flex justify-center mb-6">
                <div className="inline-block p-6">
                  <img
                    src={style.logoPath}
                    alt={`${brand} Logo`}
                    className="h-12 md:h-16"
                  />
                </div>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              <span>{category}</span>
            </h1>
            
            <div className="w-24 h-1 mx-auto my-6" style={{ backgroundColor: style.accent }}></div>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore nuestras diferentes líneas de {category.toLowerCase()} y encuentre 
              el equipo perfecto para sus necesidades específicas.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Product Lines Grid */}
      <section className="container mx-auto px-4 py-16">
        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <Info className="w-16 h-16 text-white/50 mb-4" />
            <h3 className="text-2xl font-medium text-white mb-2">Sin resultados</h3>
            <p className="text-white/70 max-w-md">
              Actualmente no hay líneas de {category.toLowerCase()} disponibles. 
              Pronto agregaremos nuevos productos.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {lines.map((line) => (
              <motion.div key={line.id} variants={itemVariants}>
                <Link href={line.href} className="block h-full">
                <Card className="group h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video">
                          <img
                            src={line.image}
                            alt={line.name}
                            className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 w-full p-4">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {line.name}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                      <CardContent className="p-6 flex-grow flex flex-col">
                        <p className="text-white/80 text-sm mb-4">{line.description}</p>
                        {/* si querés que crezca solo si hace falta empujar */}
                        <div className="flex-grow" />
                      </CardContent>

                      <CardFooter className="p-5 pt-0 border-t border-white/10">
                        <Button
                          className="w-full group flex items-center justify-between mt-2"
                          style={{
                            backgroundColor: style.accent,
                            color: style.buttonText === "text-black" ? "#000" : "#fff",
                          }}
                        >
                          <span>Ver Productos</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </CardFooter>
                </Card>

                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesita asesoramiento especializado?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está a su disposición para ayudarle a seleccionar 
            el modelo de {category.toLowerCase()} ideal para sus operaciones.
          </p>
          <Link href="/contacto">
            <Button 
              size="lg"
              className="px-8 py-6 text-lg"
              style={{
                backgroundColor: style.accent,
                color: style.buttonText === "text-black" ? "#000" : "#fff"
              }}
            >
              Contacte con nosotros
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductLinesPage;