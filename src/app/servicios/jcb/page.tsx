// src/app/servicios/jcb/page.tsx
'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import { Wrench, ShoppingCart, Smartphone, Shield, PhoneCall } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function ServiciosJCB() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Venta y Postventa",
      description: "Asesoramiento, mantenimiento y soporte técnico 24/7 para tu maquinaria JCB.",
    },
    {
      icon: Wrench,
      title: "Guardia de Repuestos",
      description: "Lunes a Viernes 18:00 HS a 08:00 HS. Sábados y Domingos 24 HS.",
      contact: "https://wa.me/3815821998?text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20hacer%20una%20consulta%20sobre%20la%20guardia%20de%20Repuestos%20JCB!"
    },
    {
      icon: PhoneCall,
      title: "Guardia de Servicios",
      description: "Lunes a Viernes 18:00 HS a 08:00 HS. Sábados y Domingos 24 HS",
      contact: "https://wa.me/3814901111?text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20hacer%20una%20consulta%20sobre%20la%20guardia%20de%20Servicios%20JCB!"
    },
    {
      icon: Smartphone,
      title: "JCB LiveLink",
      description: "Supervisa y gestiona tu flota de construcción de forma remota con tecnología avanzada.",
    },
    {
      icon: Shield,
      title: "Garantía y Soporte",
      description: "Garantía extendida y soporte técnico permanente para optimizar el rendimiento de tu equipo JCB.",
    }
  ];  
  
  const imagesjcb = [
    "/imagenes/servicios/jcblivelink1.webp",
    "/imagenes/servicios/jcblivelink2.webp",
  ];
  
  const testimonials = [
    {
      name: "José Lauro Medina",
      role: "Productor Agrícola",
      comment: "El servicio de postventa de Pueble es increíble. Siempre están disponibles cuando los necesito.",
      image: "/imagenes/servicios/productor1.webp"
    },
    {
      name: "Fabersani SA",
      role: "Empresa Agrícola",
      comment: "JCB LiveLink ha revolucionado la forma en que gestiono mi flota de construcción. ¡Lo recomiendo totalmente!",
      image: "/imagenes/servicios/empresaagricola.webp"
    }
  ];
  
  return (
    <main className="relative overflow-hidden min-h-screen">

      {/* Fondo general con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-black to-gray-900" />

      {/* Patrón SVG global (rejilla + puntos) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="global-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-pattern)" />
        </svg>
      </div>
    <section className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 relative">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white border-b-2 border-yellow-500 inline-block">Nuestros Servicios JCB</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Asistencia especializada y permanente las 24 horas, los 365 días del año. Vehículos equipados para soluciones a campo y un taller totalmente preparado para garantizar la calidad en cada trabajo.
          </p>
        </motion.div>
        
        {/* Servicios destacados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white"
              >
                <CardContent className="mt-4 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg shadow-md">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </div>
                  {service.contact && (
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold text-lg shadow-lg hover:shadow-yellow-700/40 transform hover:-translate-y-1 transition-all duration-300 mt-4">
                      <a href={service.contact} target="_blank" rel="noopener noreferrer" className="w-full block text-center">
                        Contactar
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
        
        {/* JCB LiveLink */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="relative p-8">
            <h3 className="text-4xl font-bold text-white text-center mb-8 border-b-2 border-yellow-500 inline-block w-full pb-2">
              JCB LiveLink
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Carrusel de imágenes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative w-full max-w-7xl mx-auto"
              >
                <Carousel className="w-full">
                  <CarouselContent className="-ml-4">
                    {imagesjcb.map((image, index) => (
                      <CarouselItem key={index} className="pl-4 basis-full">
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/4]"
                        >
                          <img 
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
                  <CarouselNext className="absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300" />
                </Carousel>
              </motion.div>
              
              {/* Texto */}
              <div className="space-y-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  JCB LiveLink es una innovadora solución telemática que le ofrece el máximo control sobre su flota en un solo lugar. 
                  Con LiveLink, puedes administrar toda tu flota de forma remota y adoptar un enfoque proactivo para el mantenimiento de las máquinas, 
                  identificando áreas de posible tiempo de inactividad antes de que sucedan.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-yellow-500 font-semibold text-xl mb-4">Beneficios Principales</h4>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Seguridad Avanzada",
                        desc: "Establezca horarios de operación, geoperímetros y reciba alertas en caso de uso no autorizado."
                      },
                      {
                        title: "Gestión Inteligente de Flotas",
                        desc: "Acceda a análisis avanzados, informes programados y alertas de seguridad en tiempo real."
                      },
                      {
                        title: "Mayor Tiempo de Actividad",
                        desc: "Diagnóstico remoto y mantenimiento predictivo para minimizar el tiempo de inactividad."
                      },
                      {
                        title: "Optimización de Administración",
                        desc: "Monitoreo en tiempo real, programación de servicios y almacenamiento seguro de documentos."
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <div>
                          <h5 className="text-yellow-400 font-medium">{item.title}</h5>
                          <p className="text-gray-300">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-600/25 text-lg">
                  <a href="https://www.youtube.com/watch?v=BJlAb6UdTz8" target="_blank" rel="noopener noreferrer">
                    Descubre JCB LiveLink
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 border-b-2 border-yellow-500 inline-block">Testimonios</h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Conoce las experiencias de nuestros clientes y descubre por qué confían en nosotros para sus proyectos más importantes
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </main>
  );
}