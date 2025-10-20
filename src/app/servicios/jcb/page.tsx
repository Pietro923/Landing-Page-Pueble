'use client'
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import { Wrench, ShoppingCart, Smartphone, Shield, PhoneCall, Star, ArrowRight, Zap } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useTranslation } from "react-i18next";

export default function ServiciosJCB() {
  const { t } = useTranslation();
  const services = [
    {
      icon: ShoppingCart,
      title: t('page.servicios.jcb.service.items1'),
      description: t('page.servicios.jcb.service.items1.desc'),
      contact: "https://wa.me/"
    },
    {
      icon: Wrench,
      title: t('page.servicios.jcb.service.items2'),
      description: t('page.servicios.jcb.service.items2.desc'),
      contact: "https://wa.me/3815821998?text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20hacer%20una%20consulta%20sobre%20la%20guardia%20de%20Repuestos%20JCB!"
    },
    {
      icon: PhoneCall,
      title: t('page.servicios.jcb.service.items3'),
      description: t('page.servicios.jcb.service.items3.desc'),
      contact: "https://wa.me/3814901111?text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20hacer%20una%20consulta%20sobre%20la%20guardia%20de%20Servicios%20JCB!"
    },
    {
      icon: Smartphone,
      title: t('page.servicios.jcb.service.items4'),
      description: t('page.servicios.jcb.service.items4.desc'),
      contact: "https://wa.me/"
    },
    {
      icon: Shield,
      title: t('page.servicios.jcb.service.items5'),
      description: t('page.servicios.jcb.service.items5.desc'),
      contact: "https://wa.me/"
    }
  ];  
  
  const imagesjcb = [
    "/imagenes/servicios/jcblivelink1.webp",
    "/imagenes/servicios/jcblivelink2.webp",
  ];
  
  const testimonials = [
    {
      name: "José Lauro Medina",
      role: t('page.servicios.jcb.testimonios.1.role'),
      comment: t('page.servicios.jcb.testimonios.1.comment'),
      image: "/imagenes/servicios/productor1.webp"
    },
    {
      name: "Fabersani SA",
      role: t('page.servicios.jcb.testimonios.2.role'),
      comment: t('page.servicios.jcb.testimonios.2.comment'),
      image: "/imagenes/servicios/empresaagricola.webp"
    }
  ];

  const benefits = [
    {
      title: t('page.servicios.jcb.beneficios.1.title'),
      desc: t('page.servicios.jcb.beneficios.1.desc'),
    },
    {
      title: t('page.servicios.jcb.beneficios.2.title'),
      desc: t('page.servicios.jcb.beneficios.2.desc'),
    },
    {
      title: t('page.servicios.jcb.beneficios.3.title'),
      desc: t('page.servicios.jcb.beneficios.3.desc'),
    },
    {
      title: t('page.servicios.jcb.beneficios.4.title'),
      desc: t('page.servicios.jcb.beneficios.4.desc'),
    }
  ];
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-950 via-slate-950 to-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-0 sm:px-4 relative">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-500 font-semibold uppercase tracking-wider mb-3 text-xs sm:text-sm"
          >
            | {t('page.servicios.jcb.badge')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white text-transparent bg-clip-text px-2"
          >
            {t('page.servicios.jcb.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            {t('page.servicios.jcb.desc')}
          </motion.p>
        </motion.div>

        {/* Servicios Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 lg:mb-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-900/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/30 rounded-lg sm:rounded-xl transition-all duration-300 h-full flex flex-col">
                  <CardContent className="flex flex-col justify-between h-full p-4 sm:p-6">
                    <div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg shadow-lg">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </div>
                        <CardTitle className="text-base sm:text-lg font-bold text-white">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                    {service.contact && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={service.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 mt-4 font-semibold text-xs sm:text-sm w-full"
                      >
                        {t('page.servicios.jcb.button')}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* JCB LiveLink Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
            >
              | {t('page.servicios.jcb.badge2')}
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white px-2">
              JCB <span className="text-yellow-500">{t('page.servicios.jcb.title2')}</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-900/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                <div className="pointer-events-none relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl p-6 sm:p-8 border border-white/10 hover:border-yellow-500/20 transition-all duration-300">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                    {t('page.servicios.jcb.desc2')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  {t('page.servicios.jcb.card.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-all"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-semibold text-xs sm:text-sm">{benefit.title}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/watch?v=BJlAb6UdTz8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                {t('page.servicios.jcb.card.button')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>

            {/* Carrusel de imágenes 
           
              <div className="pointer-events-none absolute -inset-1 rounded-lg sm:rounded-2xl blur opacity-30" />
              <Carousel className="w-full relative">
                <CarouselContent className="-ml-2 sm:-ml-4">
                  {imagesjcb.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full">
                      
                        <img 
                          src={image}
                          alt={`JCB LiveLink ${index + 1}`}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-2 sm:-left-10 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
                <CarouselNext className="absolute -right-2 sm:-right-10 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
              </Carousel>
            */}
          </div>
        </motion.div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-500 font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-xs sm:text-sm"
            >
              | {t('page.servicios.jcb.badge3')}
            </motion.p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              {t('page.servicios.jcb.title4')}<span className="text-yellow-500">{t('page.servicios.jcb.title5')}</span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2"
            >
              {t('page.servicios.jcb.subtitle')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-900/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/30 rounded-lg sm:rounded-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-yellow-500">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base sm:text-lg text-white">{testimonial.name}</CardTitle>
                        <CardDescription className="text-gray-400 text-xs sm:text-sm">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}