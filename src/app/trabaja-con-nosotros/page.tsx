'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from 'next/image'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Mail, User, FileText, Briefcase, Phone, GraduationCap, Clock, Tractor, Building2, Users, Award, Heart, Shield } from 'lucide-react';
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function TrabajaConNosotros() {
  const { toast } = useToast();
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
    "Secundario en Curso",
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
      if (file.type === "application/pdf" && file.size <= 10 * 1024 * 1024) {
        setFormData({ ...formData, cv: file });
        setFileName(file.name);
      } else {
        alert("Por favor, sube un archivo PDF válido (máximo 10MB).");
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
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      toast({
        title: "Postulación enviada",
        description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
      });
      
      setSubmitStatus('success');
      
      setTimeout(() => {
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
        setIsSubmitting(false);
      }, 2000);
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu postulación. Por favor, inténtalo de nuevo.",
      });
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/imagenes/logos/LogoPueble.webp"
              alt="Logo de Pueble S.A"
              width={420}
              height={160}
            />
          </div>

          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Únete a Nuestro Equipo
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            En Pueble SA creemos que nuestro mayor activo son las personas. Buscamos profesionales 
            comprometidos que quieran crecer junto a nosotros y contribuir al desarrollo del sector 
            agrícola y de construcción.
          </motion.p>
        </motion.div>

        {/* Company Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Building2 className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Empresa Líder</h3>
              <p className="text-gray-300">
                Más de 20 años de experiencia en el sector, distribuyendo las mejores marcas de maquinaria.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Equipo Profesional</h3>
              <p className="text-gray-300">
                Trabajamos con un equipo multidisciplinario comprometido con la excelencia y el servicio.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Crecimiento Profesional</h3>
              <p className="text-gray-300">
                Ofrecemos oportunidades de desarrollo, capacitación continua y un ambiente de trabajo estimulante.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-4">¿Qué Ofrecemos?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Ambiente de Trabajo Positivo</h4>
                      <p className="text-gray-300">Un entorno colaborativo donde cada persona es valorada y respetada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Capacitación Continua</h4>
                      <p className="text-gray-300">Programas de formación para mantener actualizado tu conocimiento técnico.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Reconocimiento al Desempeño</h4>
                      <p className="text-gray-300">Valoramos y reconocemos el esfuerzo y los logros de nuestro equipo.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Estabilidad Laboral</h4>
                      <p className="text-gray-300">Ofrecemos contratos estables en una empresa sólida y en crecimiento.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Trabajo en Equipo</h4>
                      <p className="text-gray-300">Fomentamos la colaboración y el apoyo mutuo entre compañeros.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Tractor className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Tecnología de Vanguardia</h4>
                      <p className="text-gray-300">Trabajarás con las últimas tecnologías del sector agrícola y construcción.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                Formulario de Postulación
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo pronto.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Campos ocultos para configuración de FormSubmit */}
                <input type="hidden" name="_subject" value="Nueva postulación laboral - Pueble SA" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="" />
                <input type="hidden" name="_autoresponse" value="Gracias por tu postulación en Pueble SA. Hemos recibido tu información y pronto nos pondremos en contacto contigo para continuar con el proceso de selección." />
                <input type="hidden" name="_replyto" value={formData.email} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-gray-300">Nombre Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Input
                        id="nombre"
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="pl-10 bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-gray-300">Apellido</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Input
                        id="apellido"
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="pl-10 bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-300">Teléfono</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Input
                        id="telefono"
                        type="tel"
                        name="telefono"
                        placeholder="Tu teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="pl-10 bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="areaInteres" className="text-gray-300">Área de Interés</Label>
                  <Select 
                    onValueChange={handleSelectChange('areaInteres')} 
                    value={formData.areaInteres}
                  >
                    <SelectTrigger className="w-full bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500">
                      <SelectValue placeholder="Selecciona un área" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/20 backdrop-blur-sm border-0 text-gray-300">
                      {areasInteres.map((area) => (
                        <SelectItem key={area} value={area} className="hover:bg-white/10">
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="hidden" 
                    name="areaInteres" 
                    value={formData.areaInteres} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experiencia" className="text-gray-300">Experiencia Laboral</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                    <Input
                      id="experiencia"
                      type="text"
                      name="experiencia"
                      placeholder="Resume tu experiencia laboral relevante"
                      value={formData.experiencia}
                      onChange={handleChange}
                      className="pl-10 bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nivelEstudio" className="text-gray-300">Nivel de Estudios</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Select 
                        onValueChange={handleSelectChange('nivelEstudio')} 
                        value={formData.nivelEstudio}
                      >
                        <SelectTrigger className="w-full pl-10 bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500">
                          <SelectValue placeholder="Selecciona tu nivel de estudios" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/20 backdrop-blur-sm border-0 text-gray-300">
                          {nivelesEstudio.map((nivel) => (
                            <SelectItem key={nivel} value={nivel} className="hover:bg-white/10">
                              {nivel}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input 
                        type="hidden" 
                        name="nivelEstudio" 
                        value={formData.nivelEstudio} 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disponibilidad" className="text-gray-300">Disponibilidad Horaria</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                      <Select 
                        onValueChange={handleSelectChange('disponibilidad')} 
                        value={formData.disponibilidad}
                      >
                        <SelectTrigger className="w-full pl-10 bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500">
                          <SelectValue placeholder="Selecciona tu disponibilidad" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/20 backdrop-blur-sm border-0 text-gray-300">
                          {disponibilidadHoraria.map((disponibilidad) => (
                            <SelectItem key={disponibilidad} value={disponibilidad} className="hover:bg-white/10">
                              {disponibilidad}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input 
                        type="hidden" 
                        name="disponibilidad" 
                        value={formData.disponibilidad} 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-gray-300">Mensaje Personal</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre ti, tus motivaciones y por qué te gustaría formar parte del equipo de Pueble SA..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="min-h-[120px] bg-white/20 text-white border-0 focus:ring-2 focus:ring-red-500 [&::placeholder]:text-white/70"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cv" className="text-gray-300 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Curriculum Vitae (PDF)
                  </Label>
                  <div className="relative">
                    <div className="relative border-2 border-dashed border-gray-400 rounded-lg p-6 hover:border-red-500 transition-colors">
                      <Input
                        id="cv"
                        type="file"
                        name="attachment"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        required
                      />
                      <div className="text-center">
                        {fileName ? (
                          <div className="space-y-2">
                            <FileText className="h-12 w-12 mx-auto text-red-500" />
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex-1 truncate max-w-xs">
                                <p className="text-gray-300 font-medium truncate">{fileName}</p>
                                <p className="text-sm text-gray-400">
                                  Haz clic para cambiar el archivo
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="h-12 w-12 mx-auto text-gray-400" />
                            <div>
                              <p className="text-gray-300">
                                <span className="font-semibold text-red-500">
                                  Haz clic para subir
                                </span>{" "}
                                o arrastra y suelta
                              </p>
                              <p className="text-sm text-gray-400">
                                Sólo archivos PDF (máximo 10MB)
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Upload className="animate-bounce" />
                      Enviando Postulación...
                    </>
                  ) : (
                    <>
                      <Upload />
                      Enviar Postulación
                    </>
                  )}
                </Button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-green-600/20 rounded-lg border border-green-500/30"
                  >
                    <p className="text-green-400 font-medium">
                      ¡Postulación enviada con éxito! 
                    </p>
                    <p className="text-green-300 text-sm mt-1">
                      Gracias por tu interés en Pueble SA. Revisaremos tu postulación y nos pondremos en contacto contigo pronto.
                    </p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-red-600/20 rounded-lg border border-red-500/30"
                  >
                    <p className="text-red-400 font-medium">
                      Hubo un error al enviar tu postulación
                    </p>
                    <p className="text-red-300 text-sm mt-1">
                      Por favor, verifica tu conexión e intenta nuevamente.
                    </p>
                  </motion.div>
                )}
                </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}