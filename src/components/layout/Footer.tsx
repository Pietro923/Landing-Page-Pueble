'use client'

import { Button } from "@/components/ui/button";
import { 
  Building2,
  MapPin,
  Phone, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Pietrobutton } from "@/components/layout/p-popover";

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/543815897858?text=¡Hola! Tengo una consulta sobre Pueble S.A', '_blank');
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-red-900 text-white relative overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />

      <div className="relative container mx-auto px-4  pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* ─── SOBRE NOSOTROS ─────────────────────────────── */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-3 border-white shadow-[4px_4px_0px_0px_white] bg-red-600">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-2xl font-titillium">PUEBLE S.A</span>
            </div>

            <p className="text-gray-300 font-medium leading-relaxed">
              Líder en maquinaria agrícola y de construcción.  
              Más de 20 años brindando soluciones confiables al campo argentino.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button 
                      size="icon" 
                      className="border-3 cursor-pointer border-white shadow-[3px_3px_0px_0px_white] hover:shadow-[5px_5px_0px_0px_white] transition-all bg-red-700 hover:bg-red-800"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ─── CONTACTO ─────────────────────────────── */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-black text-xl mb-6 text-white border-b-2 border-red-500 inline-block">CONTACTO</h3>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <a href="tel:+543815897858" 
                className="text-white hover:underline flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-red-500" />
                  +54 381 589-7858
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <a href="mailto:recepcion@pueblemaquinarias.com.ar" 
                className="text-white hover:underline flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-red-500" />
                  recepcion@pueblemaquinarias.com.ar
                </a>
              </li>
              <li className="flex gap-3 items-start text-gray-300">
                <a 
                  href="https://www.google.com/maps/place/PUEBLE+S.A./@-26.7684015,-65.2193973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex gap-3 items-center"
                >
                  <MapPin className="w-5 h-5 text-red-500" />
                  Ruta Nacional 9 KM 1301, Tucumán
                </a>
              </li>
            </ul>
          </div>

          {/* ─── TRABAJA CON NOSOTROS ─────────────────────────────── */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-red-500" />
              <h3 className="font-black text-xl">TRABAJA CON NOSOTROS</h3>
            </div>
            <p className="text-gray-300 font-medium">
              ¿Querés formar parte de nuestro equipo? Dejanos tus datos y te contactaremos.
            </p>

            <Link href="/trabaja-con-nosotros">
              <Button 
                className="mt-3 w-full font-black border-2 border-white shadow-[2px_2px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_white] transition-all bg-red-600 hover:bg-red-700"
                size="sm"
              >
                POSTULARME
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            {/* CTA WhatsApp */}
            <div className="mt-8 p-5 border-3 border-white shadow-[4px_4px_0px_0px_white] bg-red-600">
              <h5 className="font-black mb-3 text-white text-lg">¿NECESITÁS ASESORAMIENTO?</h5>
              <p className="text-sm font-medium mb-4">
                Contactanos por WhatsApp
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="w-full font-black border-2 border-white shadow-[2px_2px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_white] transition-all bg-white text-red-600 hover:bg-gray-100"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                CHATEAR AHORA
              </Button>
            </div>
          </div>
        </div>

{/* ─── COPYRIGHT ─────────────────────────────── */}
       <div className="py-6 mt-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Pueble S.A. Todos los derechos reservados.</p>
          <Pietrobutton/>
        </div>
    </div>
  </footer>
  );
}
