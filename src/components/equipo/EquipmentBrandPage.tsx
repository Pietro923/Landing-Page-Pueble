"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown, Phone, Info, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { t } from "i18next";
import BackButton from "../layout/backButton";

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
        staggerChildren: 0.08,
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
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
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
            {categoryTitle}
          </motion.h1>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {categoryDescription}
          </motion.p>
        </div>
      </motion.section>
      
      {/* Products Section Mejorado */}
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t('ebp.empty')}</h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mb-8">
              {t('ebp.empty2')} {categoryTitle.toLowerCase()} {t('ebp.empty3')}
            </p>
            <Link href="/contacto">
              <Button 
                size="lg"
                className="font-semibold"
                style={{ backgroundColor: style.accent, color: style.buttonText === "text-black" ? "#000" : "#fff" }}
              >
                {t('ebp.contact')}
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
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="h-full">
                <div className="group relative h-full">
                  {/* Efecto de brillo en hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${style.gradientFrom} ${style.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                  
                  <Card className={`relative h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 ${style.borderHover} rounded-2xl transition-all duration-300 shadow-xl ${style.cardHover} overflow-hidden hover:-translate-y-1`}>
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          {/* Overlay gradiente mejorado */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                          
                          {/* Badge flotante */}
                          <div className="absolute top-4 right-4">
                            <Badge
                              className="backdrop-blur-md font-semibold shadow-lg"
                              style={{
                                backgroundColor: `${style.accent}ee`,
                                color: style.buttonText === "text-black" ? "#000" : "#fff",
                              }}
                            >
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Título del producto */}
                      <div className="p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </CardHeader>

                    <CardContent className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex-grow flex flex-col">
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Especificaciones mejoradas */}
                      {(product.specs.power || product.specs.weight || product.specs.capacity) && (
                        <div className="mt-auto">
                          <div className={`flex items-center gap-2 mb-3 ${style.lightText}`}>
                            <Zap className="w-4 h-4" />
                            <span className="font-semibold text-sm">{t('ebp.especs')}</span>
                          </div>
                          <div className="space-y-2 text-xs sm:text-sm bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            {product.specs.power && (
                              <div className="flex justify-between items-center py-1">
                                <span className="text-gray-400">{t('ebp.poten')}</span>
                                <span className="text-white font-semibold">{product.specs.power}</span>
                              </div>
                            )}
                            {product.specs.weight && (
                              <div className="flex justify-between items-center py-1 border-t border-white/10">
                                <span className="text-gray-400">{t('ebp.peso')}</span>
                                <span className="text-white font-semibold">{product.specs.weight}</span>
                              </div>
                            )}
                            {product.specs.capacity && (
                              <div className="flex justify-between items-center py-1 border-t border-white/10">
                                <span className="text-gray-400">{t('ebp.cap')}</span>
                                <span className="text-white font-semibold">{product.specs.capacity}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                      {product.pdfUrl && (
                        <Button
                          variant="outline"
                          className="flex items-center justify-center gap-2 flex-1 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-sm sm:text-base"
                          onClick={() => window.open(product.pdfUrl, "_blank")}
                        >
                          <FileDown className="w-4 h-4" />
                          {t('ebp.ficha')}
                        </Button>
                      )}
                      <Link
                        href={`https://wa.me/+543814674252?text=Hola! Estoy en la pagina Web. Me interesa el ${product.name} de ${brand}. ¿Me podrias asesorar?. Gracias!`}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button
                          className="w-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                          style={{
                            backgroundColor: style.accent,
                            color: style.buttonText === "text-black" ? "#000" : "#fff",
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {t('ebp.consul')}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
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
              {t('productLines.hero.brandPrefix')}
            </motion.p>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
              {t('productLines.hero.needHelp')}
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('ebp.text')}
              {categoryTitle.toLowerCase()} {t('ebp.text2')}
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
                    {t('productLines.cta.contact')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              
              <Link
                href={`https://wa.me/+543814674252?text=Hola! Estoy interesado en ${categoryTitle}. ¿Podría recibir más información?`}
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
      <BackButton />
    </div>
  );
};

export default EquipmentBrandPage;