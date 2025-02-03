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
  Loader2
} from "lucide-react";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from "leaflet";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Fix marker icon after component mounts
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  const contactInfo = [
    {
      icon: Building2,
      title: "Oficina Central",
      info: "Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán 4000",
      info2: "Lunes a Viernes: 8:00 - 18:00",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+54 9 381 661 8632",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@pueblesa.com",
    },
  ];

  const position: LatLngTuple = [-26.810563, -65.168024]; // Definir explícitamente como LatLngTuple
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.nombre,
          reply_to: formData.email,
          subject: formData.asunto,
          message: formData.mensaje,
        },
        'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key de EmailJS
      );

      if (response.status === 200) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        });
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        });
        setSubmitStatus('success');
      } else {
        throw new Error('Error al enviar el mensaje');
      }
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
          <h2 className="text-4xl font-bold mb-4 text-white">Contáctanos</h2>
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
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{item.info}</p>
                    <p className="text-gray-300">{item.info2}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Formulario y mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Formulario */}
          <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/15 transition-colors duration-300 text-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send />
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

          {/* Mapa */}
          <Card className="bg-gradient-to-br from-red-800 to-red-600 text-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Ubicación</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-white/10 relative z-0">
                <MapContainer
                  center={position}
                  zoom={16}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Pueble S.A.<br />
                      Parque Industrial Aut. Circunvalación Km 1294<br />
                      San Miguel de Tucumán
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center text-white border-white/20 hover:bg-white/10 bg-red-500 px-4 py-2 rounded-md"
              >
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