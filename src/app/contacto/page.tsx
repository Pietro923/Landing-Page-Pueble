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
  Clock, 
  MapPin, 
  Send,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from "leaflet";

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

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus consultas y brindarte la mejor atención
          </p>
        </motion.div>

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
                <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.info}</p>
                    <p className="text-gray-600">{item.info2}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Nombre" 
                    className="bg-white/50"
                  />
                  <Input 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    className="bg-white/50"
                  />
                </div>
                <Input 
                  placeholder="Asunto" 
                  className="bg-white/50"
                />
                <Textarea 
                  placeholder="Mensaje" 
                  className="bg-white/50 min-h-[120px]"
                />
                <Button className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500">
                  Enviar Mensaje
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

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