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
  Code,
  ExternalLink,
  Github,
  Heart
} from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href:"https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href:"https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href:"https://www.linkedin.com/company/grupo-pueble/" },
  ];
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-red-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold w-fit border-b-2 border-red-500">Sobre Nosotros</h3>
            <p className="text-gray-300 leading-relaxed">
              Pueble S.A. es líder en maquinaria agrícola y de construcción, ofreciendo soluciones 
              confiables y de calidad para el campo argentino desde hace más de 20 años.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-white/10 text-white rounded-full p-2 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold w-fit border-b-2 border-red-500">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <Building2 className="w-5 h-5 flex-shrink-0" />
                <span>Av. Circunvalación km. 1294, San Miguel de Tucuman, Tucumán</span>
              </li>
              <li className="flex gap-3 items-start text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/PUEBLE+S.A./@-26.7684015,-65.2193973,17z/data=!3m1!4b1!4m6!3m5!1s0x94225e94c0835bbf:0x8568c458ceb402c1!8m2!3d-26.7684063!4d-65.2168224!16s%2Fg%2F11bzrcb9mm?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Cómo llegar?
                </a>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+543815897858</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>recepcion@pueblemaquinarias.com.ar</span>
              </li>
            </ul>
          </div>
          {/* Trabaja con nosotros */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 w-fit border-b-2 border-red-500">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-xl font-bold">Trabaja con Nosotros</h3>
            </div>
            <p className="text-gray-300">
              ¿Querés ser parte de nuestro equipo? Dejanos tus datos.
            </p>
            <Link href="/trabaja-con-nosotros">
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-200 mt-5">
                Postularme
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Pueble S.A. Todos los derechos reservados.</p>
          
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Información del desarrollador"
              >
                <Code className="w-4 h-4" />
                <span>Design by P</span>
              </button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-72 p-0 bg-gray-800 text-gray-200 rounded-xl shadow-xl border-0" 
              side="top" 
              sideOffset={10}
              align="center"
            >
              <div className="p-4 bg-gradient-to-r from-red-800 to-red-900 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Pietro Bonacossa</h3>
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Full Stack Dev</span>
                </div>
                <p className="text-red-100 text-sm mt-1">Desarrollo web personalizado</p>
              </div>
              
              <div className="p-4">
                <p className="mb-4 text-sm text-gray-300">
                  Especialista en desarrollo de aplicaciones web modernas con React, Next.js y Tailwind CSS.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="https://portfolio-bonacossa.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-red-400" />
                    <span>Portfolio</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Pietro923" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 text-red-400" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/pietrobonacossa" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4 text-red-400" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="mailto:jpbonacossa@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-red-400" />
                    <span>Contacto</span>
                  </a>
                </div>
              </div>
              
              <div className="p-3 bg-gray-900 rounded-b-xl text-xs text-center flex items-center justify-center gap-1 text-gray-400">
                <span>Hecho con</span>
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                <span>y Next.js</span>
              </div>
            </PopoverContent>
          </Popover>
          
        </div>
      </div>
    </footer>
  );
}