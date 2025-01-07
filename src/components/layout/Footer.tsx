'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Phone, 
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Briefcase,
  FileUp,
  X
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");

// Validación del archivo
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  setFileError("");

  if (file) {
    // Validar tipo de archivo
    if (file.type !== 'application/pdf') {
      setFileError("Solo se permiten archivos PDF");
      setSelectedFile(null);
      e.target.value = '';
      return;
    }

    // Validar tamaño (5MB máximo)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("El archivo no debe superar los 5MB");
      setSelectedFile(null);
      e.target.value = '';
      return;
    }

    setSelectedFile(file);
  }
};

// Remover archivo seleccionado
const removeFile = () => {
  setSelectedFile(null);
  setFileError("");
  // Resetear el input file
  const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
  if (fileInput) fileInput.value = '';
};

// Manejar envío del formulario
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Aquí iría la lógica para enviar el formulario
  console.log('Archivo seleccionado:', selectedFile);
};

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
                    onClick={(e) => handleScroll(e, link.href)}
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

          {/* Trabaja con nosotros */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          <h3 className="text-xl font-bold">Trabaja con Nosotros</h3>
        </div>
        <p className="text-gray-300">
          ¿Querés ser parte de nuestro equipo? Dejanos tus datos.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input 
            type="text" 
            placeholder="Nombre completo" 
            required
            className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
          />
          <Input 
            type="email" 
            placeholder="Correo electrónico" 
            required
            className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
          />
          <div className="space-y-1">
            <Input 
              type="file"
              accept=".pdf"
              className="hidden"
              id="cv-upload"
              onChange={handleFileChange}
            />
            {!selectedFile ? (
              <label 
                htmlFor="cv-upload"
                className="flex items-center justify-center gap-2 w-full p-2 cursor-pointer bg-white/10 border border-white/10 rounded-md text-gray-300 hover:bg-white/20 transition-colors"
              >
                <FileUp className="w-4 h-4" />
                Subir CV (PDF)
              </label>
            ) : (
              <div className="flex items-center justify-between gap-2 w-full p-2 bg-white/10 border border-white/10 rounded-md text-gray-300">
                <div className="truncate flex-1">
                  {selectedFile.name}
                </div>
                <button 
                  type="button"
                  onClick={removeFile}
                  className="flex-shrink-0 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {fileError && (
              <p className="text-red-400 text-sm mt-1">{fileError}</p>
            )}
          </div>
          <Button className="w-full bg-white text-red-900 hover:bg-gray-100">
            Postularme
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