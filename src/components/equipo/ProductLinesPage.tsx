"use client";
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Info, ArrowRight } from "lucide-react";

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
  
  const brandStyles = {
    Case: {
      bg: "from-red-950 via-slate-950 to-black",
      accent: "#b71921",
      accentHover: "#8f131a",
      accentLight: "#ef4444",
      logoPath: "/imagenes/equipment/case/case.webp",
      lightText: "text-red-400",
      buttonText: "text-white",
      cardHover: "group-hover:shadow-red-500/30",
      gradientFrom: "from-red-600/20",
      gradientTo: "to-red-900/20",
      borderHover: "hover:border-red-500/50"
    },
    JCB: {
      bg: "from-yellow-950 via-slate-950 to-black",
      accent: "#fcb026",
      accentHover: "#e29600",
      accentLight: "#fbbf24",
      logoPath: "/imagenes/equipment/jcb/jcb.svg",
      lightText: "text-yellow-400",
      buttonText: "text-black",
      cardHover: "group-hover:shadow-yellow-500/30",
      gradientFrom: "from-yellow-600/20",
      gradientTo: "to-yellow-900/20",
      borderHover: "hover:border-yellow-500/50"
    },
    default: {
      bg: "from-blue-950 via-slate-950 to-black",
      accent: "#3b82f6",
      accentHover: "#2563eb",
      accentLight: "#60a5fa",
      logoPath: "",
      lightText: "text-blue-400",
      buttonText: "text-white",
      cardHover: "group-hover:shadow-blue-500/30",
      gradientFrom: "from-blue-600/20",
      gradientTo: "to-blue-900/20",
      borderHover: "hover:border-blue-500/50"
    }
  };
  
  const style = brandStyles[brand as keyof typeof brandStyles] || brandStyles.default;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${style.bg}  px-4 sm:px-6 lg:px-8`}>
      {/* Hero Section Mejorado */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {style.logoPath && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
                  <img
                    src={style.logoPath}
                    alt={`${brand} Logo`}
                    className="h-12 sm:h-16 md:h-20"
                  />
                </div>
              </motion.div>
            )}
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`${style.lightText} font-semibold uppercase tracking-wider mb-3 text-xs sm:text-sm`}
            >
              | {brand}
            </motion.p>
            
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight"
            >
              {category}
            </motion.h1>
            
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explorá nuestras diferentes líneas de {category.toLowerCase()} y encontrá 
              el equipo perfecto para tus necesidades específicas.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Product Lines Grid Mejorado */}
      <section className="container mx-auto px-4 pb-12 sm:pb-16 lg:pb-20">
        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 text-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Info className="w-10 h-10 sm:w-12 sm:h-12 text-white/70" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Sin líneas disponibles</h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mb-8">
              Actualmente no hay líneas de {category.toLowerCase()} disponibles. 
              Pronto agregaremos nuevos productos.
            </p>
            <Link href="/contacto">
              <Button 
                size="lg"
                className="font-semibold"
                style={{ backgroundColor: style.accent, color: style.buttonText === "text-black" ? "#000" : "#fff" }}
              >
                Contáctenos para más información
              </Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {lines.map((line) => (
              <motion.div key={line.id} variants={itemVariants} className="h-full">
                <Link href={line.href} className="block h-full group">
                  <div className="relative h-full">
                    {/* Efecto de brillo en hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${style.gradientFrom} ${style.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                    
                    <Card className={`relative h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 ${style.borderHover} rounded-2xl transition-all duration-300 shadow-xl ${style.cardHover} overflow-hidden hover:-translate-y-1`}>
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden">
                          <div className="aspect-video relative">
                            <img
                              src={line.image}
                              alt={line.name}
                              className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            {/* Overlay gradiente mejorado */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                            
                            {/* Título superpuesto */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-white/95 transition-colors">
                                {line.name}
                              </h3>
                              <div 
                                className="w-12 h-1 rounded-full transition-all duration-300 group-hover:w-20"
                                style={{ backgroundColor: style.accent }}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-5 sm:p-6 flex-grow flex flex-col">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {line.description}
                        </p>
                        <div className="flex-grow" />
                      </CardContent>

                      <CardFooter className="p-5 sm:p-6 pt-0 border-t border-white/10">
                        <Button
                          className="w-full group/btn flex items-center justify-between font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                          style={{
                            backgroundColor: style.accent,
                            color: style.buttonText === "text-black" ? "#000" : "#fff",
                          }}
                        >
                          <span>Ver Productos</span>
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      
      {/* CTA Section Mejorado */}
      <section className="container mx-auto px-4 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Efecto de brillo de fondo */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${style.gradientFrom} ${style.gradientTo} rounded-2xl blur-2xl opacity-30`} />
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`${style.lightText} font-semibold uppercase tracking-wider mb-3 text-xs sm:text-sm`}
            >
              | Asesoramiento Profesional
            </motion.p>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
              ¿Necesitás ayuda para elegir?
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo de expertos está disponible para ayudarte a seleccionar 
              el {category.toLowerCase()} ideal para tus operaciones específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="flex-1 sm:flex-initial">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                    style={{
                      backgroundColor: style.accent,
                      color: style.buttonText === "text-black" ? "#000" : "#fff"
                    }}
                  >
                    Contactar Ahora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              
              <Link
                href={`https://wa.me/+543814674252?text=Hola! Estoy interesado en ${category}. ¿Podría recibir más información?`}
                target="_blank"
                className="flex-1 sm:flex-initial"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  >
                    <img src="/imagenes/logos/whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
                    WhatsApp
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductLinesPage;