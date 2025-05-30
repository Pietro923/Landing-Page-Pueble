'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Phone, 
  Mail,
  MapPin, 
  Send,
  MessageSquare,
  ArrowRight,
  Loader2,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  
  const contactInfo = [
    {
      icon: Building2,
      title: "Oficina Central",
      info: "Ruta Nacional 9 KM 1301, San Miguel de Tucumán, Tucumán",
      info2: "Lunes a Viernes: 8:00 - 18:00",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+543815897858",
      info2: "Atención al cliente", // Agregado para consistencia
    },
    {
      icon: Mail,
      title: "Email",
      info: "recepcion@pueblemaquinarias.com.ar",
      info2: "Soporte técnico y ventas", // Agregado para consistencia
    },
  ];
  
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
  ];
  
  // URL de Google Maps para usar en el enlace "Cómo llegar"
  const googleMapsLink = `https://www.google.com/maps/place/PUEBLE+S.A./@-26.7684015,-65.2193973,17z/data=!3m1!4b1!4m6!3m5!1s0x94225e94c0835bbf:0x8568c458ceb402c1!8m2!3d-26.7684063!4d-65.2168224!16s%2Fg%2F11bzrcb9mm?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D`;
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Obtener el formulario como elemento HTML
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Enviar el formulario usando fetch en lugar de form.submit()
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para evitar problemas de CORS con FormSubmit
      });
      
      // Mostramos mensaje de éxito
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      });
      
      // Limpiamos el formulario
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
      setSubmitStatus('success');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 relative">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white border-b-2 border-red-500 w-fit mx-auto pb-2">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para responder tus consultas y brindarte la mejor atención
          </p>
        </motion.div>
        
        {/* Tarjetas de información de contacto */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white h-full flex flex-col shadow-lg hover:shadow-red-900/30">
                  <CardHeader className="pb-2 flex justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-center">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-center pt-2 text-center">
                    <p className="text-gray-300 mb-2">{item.info}</p>
                    {item.info2 && (
                      <p className="text-gray-300 font-medium text-sm mt-2">{item.info2}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white overflow-hidden shadow-lg">
            <CardHeader className="pb-0">
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-3xl font-bold text-white tracking-tight underline decoration-red-500 decoration-2 underline-offset-8 w-fit mx-auto">
                ¡Conéctate con nosotros!
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mt-4">
                  Síguenos en nuestras redes sociales para estar al día con nuestras novedades
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-8 pb-6">
              <div className="flex flex-wrap justify-center gap-12">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 hover:text-red-500 transition-all duration-300 group"
                    >
                      <div className="p-6 bg-white/10 rounded-full group-hover:bg-white/20 group-hover:shadow-lg transition-all duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="font-medium text-lg">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Formulario y mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Formulario */}
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-md">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
                action="https://formsubmit.co/beelbonacossa@gmail.com" 
                method="POST"
                >
                {/* Campos ocultos para FormSubmit */}
                <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nuevo mensaje del sitio web" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Nombre" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <Input 
                  placeholder="Asunto" 
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                  required
                />
                <Textarea 
                  placeholder="Mensaje" 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500 min-h-[120px]"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center font-medium"
                  >
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center font-medium"
                  >
                    Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
          
          {/* Mapa con iframe */}
          <Card className="bg-gradient-to-br from-red-800 to-red-900 text-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Ubicación</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-white/10 relative z-0 shadow-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2553370575342!2d-65.2169265!3d-26.768129599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d003948aec7%3A0x5aca876c4fba6d96!2sJCB%20PUEBLE%20SA!5e0!3m2!1ses-419!2sar!4v1742484690853!5m2!1ses-419!2sar" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-white text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md">
                Cómo llegar
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}