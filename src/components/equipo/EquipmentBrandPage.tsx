"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Phone, Info, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const isEmpty = products.length === 0;

  // Define brand-specific styles para mantener consistencia con ProductLinesPage
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
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${style.bg} py-4 px-4 sm:px-6 lg:px-8`}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 rounded-2xl overflow-hidden"
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          {/* Display brand logo if available */}
          {style.logoPath && (
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-block p-4">
                <img
                  src={style.logoPath}
                  alt={`${brand} Logo`}
                  className="h-12 md:h-16"
                />
              </div>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {categoryTitle}
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1 mx-auto my-5" 
            style={{ backgroundColor: style.accent }}
          ></motion.div>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {categoryDescription}
          </motion.p>
        </div>
      </motion.section>
      
      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
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
              Actualmente no hay productos de {categoryTitle.toLowerCase()} disponibles. 
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
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="group h-full flex flex-col bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-all duration-300 shadow-lg">
  <CardHeader className="p-0">
    <div className="relative overflow-hidden rounded-t-lg">
      <div className="aspect-video">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <Badge
          className="mb-2"
          style={{
            backgroundColor: style.accent,
            color: style.buttonText === "text-black" ? "#000" : "#fff",
          }}
        >
          {product.category}
        </Badge>
      </div>
    </div>
    <div className="p-4 pt-2">
      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
    </div>
  </CardHeader>

  <CardContent className="px-4 pb-4 pt-0 flex-grow flex flex-col">
    <p className="text-gray-300 mb-4">{product.description}</p>

    {(product.specs.power || product.specs.weight || product.specs.capacity) && (
      <div className="mt-auto space-y-2 text-gray-300 bg-white/5 p-4 rounded-lg">
        {product.specs.power && (
          <div className="flex justify-between">
            <span className="font-medium">Potencia:</span>
            <span>{product.specs.power}</span>
          </div>
        )}
        {product.specs.weight && (
          <div className="flex justify-between">
            <span className="font-medium">Peso:</span>
            <span>{product.specs.weight}</span>
          </div>
        )}
        {product.specs.capacity && (
          <div className="flex justify-between">
            <span className="font-medium">Capacidad:</span>
            <span>{product.specs.capacity}</span>
          </div>
        )}
      </div>
    )}
  </CardContent>

  <CardFooter className="px-4 pb-4 pt-2 border-t border-white/10 flex gap-4 flex-wrap">
    {product.pdfUrl && (
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 min-w-[140px] flex-1 text-black border-white/20 hover:bg-white transition-colors"
        onClick={() => window.open(product.pdfUrl, "_blank")}
      >
        <FileDown className="w-4 h-4" />
        Ficha Técnica
      </Button>
    )}
    <Link
      href={`https://wa.me/+543814674252?text=Hola! Estoy en la pagina Web. Me interesa el ${product.name} de ${brand}. ¿Me podrias asesorar?. Gracias!`}
      target="_blank"
      className="flex-1 min-w-[120px]"
    >
      <Button
        className="w-full"
        style={{
          backgroundColor: style.accent,
          color: style.buttonText === "text-black" ? "#000" : "#fff",
        }}
      >
        <Phone className="w-4 h-4 mr-2" />
        Consultar
      </Button>
    </Link>
  </CardFooter>
</Card>

              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      
      {/* CTA Section - agregado inspirado en ProductLinesPage */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border-0 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesita asesoramiento especializado?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está a su disposición para ayudarle a seleccionar 
            el modelo de {categoryTitle.toLowerCase()} ideal para sus operaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button 
                size="lg"
                className="px-8 py-6 text-lg w-full sm:w-auto"
                style={{
                  backgroundColor: style.accent,
                  color: style.buttonText === "text-black" ? "#000" : "#fff"
                }}
              >
                Contacte con nosotros
              </Button>
            </Link>
            <Link
              href={`https://wa.me/+543814674252?text=Hola! Estoy interesado en ${categoryTitle}. ¿Podría recibir más información?`}
              target="_blank"
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors w-full sm:w-auto flex items-center"
                
              >
               <img src="/imagenes/logos/whatsapp.svg" className="w-6 h-6 md:w-7 md:h-7 -ml-1" alt="WhatsApp" />
                WhatsApp
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default EquipmentBrandPage;