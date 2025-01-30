'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Mail, User, FileText, Briefcase, Phone, GraduationCap, Clock } from 'lucide-react';
import { motion } from "framer-motion";

export default function TrabajaConNosotros() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    areaInteres: "",
    experiencia: "",
    nivelEstudio: "",
    disponibilidad: "",
    mensaje: "",
    cv: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const areasInteres = [
    "Ventas",
    "Mecánica",
    "Administración",
    "Atención al Cliente",
    "Logística",
    "Sistemas",
    "Otro"
  ];

  const nivelesEstudio = [
    "Secundario Finalizado",
    "Terciario en Curso",
    "Terciario Finalizado",
    "Universitario en Curso",
    "Universitario Finalizado"
  ];

  const disponibilidadHoraria = [
    "Full Time",
    "Part Time"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        setFormData({ ...formData, cv: file });
        setFileName(file.name);
      } else {
        alert("Por favor, sube un archivo PDF");
        e.target.value = '';
      }
    }
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Datos enviados:", formData);
      setSubmitStatus('success');
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        areaInteres: "",
        experiencia: "",
        nivelEstudio: "",
        disponibilidad: "",
        mensaje: "",
        cv: null,
      });
      setFileName("");
    } catch (error) {
      setSubmitStatus('error');
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 opacity-95 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Trabaja con Nosotros
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Únete a nuestro equipo y sé parte de una empresa líder en el sector agrícola
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="nombre"
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="apellido"
                      type="text"
                      name="apellido"
                      placeholder="Apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaInteres">Área de Interés</Label>
                <Select onValueChange={handleSelectChange('areaInteres')} value={formData.areaInteres}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un área" />
                  </SelectTrigger>
                  <SelectContent>
                    {areasInteres.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experiencia">Experiencia Laboral</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="experiencia"
                    type="text"
                    name="experiencia"
                    placeholder="Resume tu experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nivelEstudio">Nivel de Estudios</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Select onValueChange={handleSelectChange('nivelEstudio')} value={formData.nivelEstudio}>
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Selecciona tu nivel de estudios" />
                      </SelectTrigger>
                      <SelectContent>
                        {nivelesEstudio.map((nivel) => (
                          <SelectItem key={nivel} value={nivel}>
                            {nivel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disponibilidad">Disponibilidad Horaria</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Select onValueChange={handleSelectChange('disponibilidad')} value={formData.disponibilidad}>
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Selecciona tu disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {disponibilidadHoraria.map((disponibilidad) => (
                          <SelectItem key={disponibilidad} value={disponibilidad}>
                            {disponibilidad}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos sobre ti y por qué te gustaría trabajar con nosotros"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Curriculum Vitae (PDF)</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="pl-10"
                    required
                  />
                </div>
                {fileName && (
                  <p className="text-sm text-gray-500">
                    Archivo seleccionado: {fileName}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Upload className="animate-bounce" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Upload />
                    Enviar Postulación
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center font-medium"
                >
                  ¡Postulación enviada con éxito! Nos pondremos en contacto contigo pronto.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center font-medium"
                >
                  Hubo un error al enviar tu postulación. Por favor, intenta nuevamente.
                </motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}