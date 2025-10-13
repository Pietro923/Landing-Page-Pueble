// src/app/trabaja-con-nosotros/page.tsx
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
import { Upload, FileText, Loader2, CheckCircle2, AlertCircle, Briefcase, Users, Zap, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function TrabajaConNosotros() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    areaInteres: "",
    tipoPostulacion: "empleo",
    experiencia: "",
    nivelEstudio: "",
    disponibilidad: "",
    mensaje: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const areasInteresPasantia = [
    "Administración",
    "Sistemas",
    "Logística",
    "Ventas",
    "Atención al Cliente",
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

  const tiposPostulacion = [
    { id: "empleo", label: "Empleo" },
    { id: "pasantia", label: "Pasantía" }
  ];

  const oportunidades = [
    {
      icon: Briefcase,
      titulo: "Empleos",
      descripcion: "Únete a nuestro equipo de profesionales experimentados en un ambiente dinámico y colaborativo."
    },
    {
      icon: Users,
      titulo: "Pasantías",
      descripcion: "Gana experiencia práctica mientras estudias. Aprende de profesionales y contribuye al equipo."
    },
    {
      icon: Zap,
      titulo: "Crecimiento",
      descripcion: "Oportunidades de capacitación continua y desarrollo profesional para tu carrera."
    },
    {
      icon: BookOpen,
      titulo: "Mentoría",
      descripcion: "Acceso a mentores experimentados que te guiarán en tu desarrollo laboral."
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" && file.size <= 10 * 1024 * 1024) {
        setCvFile(file);
        setFileName(file.name);
      } else {
        toast({
          variant: "destructive",
          title: "Archivo inválido",
          description: "Por favor, sube un archivo PDF válido (máximo 10MB).",
        });
        e.target.value = '';
      }
    }
  };
  
  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cvFile) {
      toast({
        variant: "destructive",
        title: "CV requerido",
        description: "Debes adjuntar tu CV en formato PDF.",
      });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submitFormData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitFormData.append(key, value);
      });
      submitFormData.append('cv', cvFile);
      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitFormData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la postulación');
      }
      
      setSubmitStatus('success');
      toast({
        title: "✅ Postulación enviada",
        description: "Gracias por tu interés. Revisaremos tu postulación y nos pondremos en contacto contigo pronto.",
      });
      
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        areaInteres: "",
        tipoPostulacion: "empleo",
        experiencia: "",
        nivelEstudio: "",
        disponibilidad: "",
        mensaje: "",
      });
      setCvFile(null);
      setFileName("");
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: error instanceof Error ? error.message : "Hubo un problema al enviar tu postulación. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-950 to-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center flex-col mb-6 lg:mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src="/imagenes/logos/LogoPueble.webp"
                alt="Logo de Pueble S.A"
                width={300}
                height={100}
                className="w-auto h-20 sm:h-24 lg:h-32 object-contain"
                priority
              />
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 mb-4"
          >
            Únete a Nuestro Equipo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            En Pueble SA creemos que nuestro mayor activo son las personas. Buscamos profesionales 
            comprometidos que quieran crecer junto a nosotros.
          </motion.p>
        </motion.div>

        {/* Oportunidades Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {oportunidades.map((oportunidad, idx) => {
            const Icon = oportunidad.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                whileHover={{ translateY: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/20 hover:border-red-500/50 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{oportunidad.titulo}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{oportunidad.descripcion}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full"
        >
          <Card className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-xl border border-red-500/20 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent pointer-events-none"></div>
            
            <CardHeader className="text-center space-y-2 pb-6 sm:pb-8 relative z-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Formulario de Postulación
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg">
                Completa el formulario, adjunta tu CV y envía tu postulación.
                <span className="block text-gray-400 text-xs sm:text-sm mt-1">Nos pondremos en contacto contigo pronto.</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Tipo de Postulación */}
                <div className="space-y-2">
                  <Label className="text-gray-300 font-semibold text-sm sm:text-base">Tipo de Postulación *</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {tiposPostulacion.map((tipo) => (
                      <motion.button
                        key={tipo.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setFormData({ ...formData, tipoPostulacion: tipo.id })}
                        className={`py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold transition-all duration-200 border-2 text-xs sm:text-sm lg:text-base ${
                          formData.tipoPostulacion === tipo.id
                            ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/50'
                            : 'bg-white/5 border-gray-600 text-gray-300 hover:border-red-500/50'
                        }`}
                      >
                        {tipo.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-gray-300 font-medium text-xs sm:text-sm">Nombre Completo</Label>
                    <Input
                      id="nombre"
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-gray-300 font-medium text-xs sm:text-sm">Apellido</Label>
                    <Input
                      id="apellido"
                      type="text"
                      name="apellido"
                      placeholder="Apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-medium text-xs sm:text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-300 font-medium text-xs sm:text-sm">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Área de Interés */}
                <div className="space-y-2">
                  <Label htmlFor="areaInteres" className="text-gray-300 font-medium text-xs sm:text-sm">Área de Interés</Label>
                  <Select 
                    onValueChange={handleSelectChange('areaInteres')} 
                    value={formData.areaInteres}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                      <SelectValue placeholder="Selecciona un área" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border border-gray-600 text-gray-300 rounded-lg">
                      {(formData.tipoPostulacion === "pasantia" ? areasInteresPasantia : areasInteres).map((area) => (
                        <SelectItem key={area} value={area} className="hover:bg-red-600/30">
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experiencia Laboral */}
                <div className="space-y-2">
                  <Label htmlFor="experiencia" className="text-gray-300 font-medium text-xs sm:text-sm">
                    {formData.tipoPostulacion === "pasantia" ? "Experiencia Previa" : "Experiencia Laboral"}
                  </Label>
                  <Input
                    id="experiencia"
                    type="text"
                    name="experiencia"
                    placeholder={formData.tipoPostulacion === "pasantia" ? "Resume cualquier experiencia previa relevante" : "Resume tu experiencia laboral relevante"}
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* Nivel de Estudios y Disponibilidad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nivelEstudio" className="text-gray-300 font-medium text-xs sm:text-sm">Nivel de Estudios</Label>
                    <Select 
                      onValueChange={handleSelectChange('nivelEstudio')} 
                      value={formData.nivelEstudio}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border border-gray-600 text-gray-300 rounded-lg">
                        {nivelesEstudio.map((nivel) => (
                          <SelectItem key={nivel} value={nivel} className="hover:bg-red-600/30">
                            {nivel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disponibilidad" className="text-gray-300 font-medium text-xs sm:text-sm">Disponibilidad Horaria</Label>
                    <Select 
                      onValueChange={handleSelectChange('disponibilidad')} 
                      value={formData.disponibilidad}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                        <SelectValue placeholder="Selecciona disponibilidad" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border border-gray-600 text-gray-300 rounded-lg">
                        {disponibilidadHoraria.map((disp) => (
                          <SelectItem key={disp} value={disp} className="hover:bg-red-600/30">
                            {disp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Mensaje Personal */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-gray-300 font-medium text-xs sm:text-sm">Mensaje Personal</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre ti, tus motivaciones..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="min-h-[120px] sm:min-h-[140px] bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all resize-none text-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="cv" className="text-gray-300 font-medium flex items-center gap-2 text-xs sm:text-sm">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                    Curriculum Vitae (PDF) *
                  </Label>
                  <div className="relative">
                    <div className="relative border-2 border-dashed border-gray-500 rounded-lg p-6 sm:p-8 hover:border-red-500 hover:bg-red-500/5 transition-all duration-300 group">
                      <Input
                        id="cv"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        required
                        disabled={isSubmitting}
                      />
                      <div className="text-center pointer-events-none">
                        {fileName ? (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="space-y-2 sm:space-y-3"
                          >
                            <div className="flex justify-center">
                              <FileText className="h-10 w-10 sm:h-14 sm:w-14 text-red-500 group-hover:text-red-400" />
                            </div>
                            <div className="flex items-center justify-center gap-2 sm:gap-3">
                              <div className="flex-1 truncate max-w-xs">
                                <p className="text-gray-200 font-semibold truncate text-xs sm:text-sm">{fileName}</p>
                                <p className="text-xs text-gray-400">
                                  Haz clic para cambiar
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="space-y-2 sm:space-y-3"
                          >
                            <Upload className="h-10 w-10 sm:h-14 sm:w-14 mx-auto text-gray-400 group-hover:text-red-400 transition-colors" />
                            <div>
                              <p className="text-gray-200 text-xs sm:text-sm">
                                <span className="font-bold text-red-500">
                                  Haz clic para subir
                                </span>{" "}
                                o arrastra y suelta
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                Sólo archivos PDF (máximo 10MB)
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 sm:py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                        Enviando Postulación...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ¡Enviado Exitosamente!
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                        Enviar Postulación
                      </>
                    )}
                  </Button>
                </motion.div>
                
                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className="text-center p-4 sm:p-6 bg-gradient-to-r from-green-600/20 to-green-700/20 rounded-lg border border-green-500/30 backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                      >
                        <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-green-400 mb-2 sm:mb-3" />
                      </motion.div>
                      <p className="text-green-400 font-bold text-base sm:text-lg">
                        ¡Postulación enviada con éxito! 
                      </p>
                      <p className="text-green-300 text-xs sm:text-sm mt-2">
                        Gracias por tu interés en Pueble SA. Revisaremos tu postulación y nos pondremos en contacto pronto.
                      </p>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className="text-center p-4 sm:p-6 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg border border-red-500/30 backdrop-blur-sm"
                    >
                      <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-red-400 mb-2 sm:mb-3" />
                      <p className="text-red-400 font-bold text-base sm:text-lg">
                        Hubo un error al enviar tu postulación
                      </p>
                      <p className="text-red-300 text-xs sm:text-sm mt-2">
                        Por favor, verifica tu conexión e intenta nuevamente.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}