'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Phone, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  const navLinks = [
    { text: "Inicio", href: "hero" },
    { text: "Nosotros", href: "nosotros" },
    { text: "Servicios", href: "servicios" },
    { text: "Equipo", href: "equipo" },
    { text: "Contacto", href: "contacto" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-red-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sobre Nosotros</h3>
            <p className="text-gray-300 leading-relaxed">
              Pueble S.A. es líder en maquinaria agrícola, ofreciendo soluciones 
              confiables y de calidad para el campo argentino desde hace más de 40 años.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    size="icon"
                    variant="ghost"
                    className="hover:bg-white/10 text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.href}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <Building2 className="w-5 h-5 flex-shrink-0" />
                <span>Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 9 381 661 8632</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@pueblesa.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-300">
              Suscríbete para recibir noticias y actualizaciones.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-white text-red-900 hover:bg-gray-100">
                Suscribirse
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pueble S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}