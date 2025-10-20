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
import { useTranslation} from "react-i18next";
export default function TrabajaConNosotros() {
  const { t } = useTranslation();
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
    t('tcn.form.areas.interes1'),
    t('tcn.form.areas.interes2'),
    t('tcn.form.areas.interes3'),
    t('tcn.form.areas.interes4'),
    t('tcn.form.areas.interes5'),
    t('tcn.form.areas.interes6'),
    t('tcn.form.areas.interes7'),
  ];

  const areasInteresPasantia = [
    t('tcn.form.areas.pasantia1'),
    t('tcn.form.areas.pasantia2'),
    t('tcn.form.areas.pasantia3'),
    t('tcn.form.areas.pasantia4'),
    t('tcn.form.areas.pasantia5'),
    t('tcn.form.areas.pasantia6'),
  ];
  
  const nivelesEstudio = [
    t('tcn.form.nivel.estudio1'),
    t('tcn.form.nivel.estudio2'),
    t('tcn.form.nivel.estudio3'),
    t('tcn.form.nivel.estudio4'),
    t('tcn.form.nivel.estudio5'),
    t('tcn.form.nivel.estudio6'),
  ];
  
  const disponibilidadHoraria = [
    "Full Time",
    "Part Time"
  ];

  const tiposPostulacion = [
    { id: "empleo", label: t('tcn.form.type1') },
    { id: "pasantia", label: t('tcn.form.type2') },
  ];

  const oportunidades = [
    {
      icon: Briefcase,
      titulo: t('tcn.card1.title'),
      descripcion:  t('tcn.card1.desc'),
    },
    {
      icon: Users,
      titulo: t('tcn.card2.title'),
      descripcion: t('tcn.card2.desc'),
    },
    {
      icon: Zap,
      titulo: t('tcn.card3.title'),
      descripcion: t('tcn.card3.desc'),
    },
    {
      icon: BookOpen,
      titulo: t('tcn.card4.title'),
      descripcion: t('tcn.card4.desc'),
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
            {t('tcn.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            {t('tcn.subtitle')}
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
          <Card className="bg-gradient-to-br from-slate-900 to-slate-900 backdrop-blur-xl border border-red-500/20 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent pointer-events-none"></div>
            
            <CardHeader className="text-center space-y-2 pb-6 sm:pb-8 relative z-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                {t('tcn.form.title')}
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg">
                {t('tcn.form.subtitle')}
                <span className="block text-gray-400 text-xs sm:text-sm mt-1">{t('tcn.form.subtitle2')}</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Tipo de Postulación */}
                <div className="space-y-2">
                  <Label className="text-gray-300 font-semibold text-sm sm:text-base">{t('tcn.form.type.title')}</Label>
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
                    <Label htmlFor="nombre" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.name.title')}</Label>
                    <Input
                      id="nombre"
                      type="text"
                      name="nombre"
                      placeholder={t('tcn.form.name.placeholder')}
                      value={formData.nombre}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.surname.title')}</Label>
                    <Input
                      id="apellido"
                      type="text"
                      name="apellido"
                      placeholder={t('tcn.form.surname.placeholder')}
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
                    <Label htmlFor="email" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.email.title')}</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder={t('tcn.form.email.placeholder')}
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg [&::placeholder]:text-white/50 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.tel.title')}</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      placeholder={t('tcn.form.tel.placeholder')}
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
                  <Label htmlFor="areaInteres" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.area.title')}</Label>
                  <Select 
                    onValueChange={handleSelectChange('areaInteres')} 
                    value={formData.areaInteres}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                      <SelectValue placeholder={t('tcn.form.area.placeholder')} />
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
                  <Label
                    htmlFor="experiencia"
                    className="text-gray-300 font-medium text-xs sm:text-sm"
                  >
                    {formData.tipoPostulacion === "pasantia"
                      ? t('tcn.form.exp.prev') // nueva key para "Experiencia Previa"
                      : t('tcn.form.exp.title')} {/* ya definida como "Experiencia Laboral/previa" */}
                  </Label>

                  <Input
                    id="experiencia"
                    type="text"
                    name="experiencia"
                    placeholder={
                      formData.tipoPostulacion === "pasantia"
                        ? t('tcn.form.exp.placeholderPrev') // nueva key para "Resume cualquier experiencia previa relevante"
                        : t('tcn.form.exp.placeholder')    // nueva key para "Resume tu experiencia laboral relevante"
                    }
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
                    <Label htmlFor="nivelEstudio" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.level.title')}</Label>
                    <Select 
                      onValueChange={handleSelectChange('nivelEstudio')} 
                      value={formData.nivelEstudio}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                        <SelectValue placeholder={t('tcn.form.level.placeholder')} />
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
                    <Label htmlFor="disponibilidad" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.disp.title')}</Label>
                    <Select 
                      onValueChange={handleSelectChange('disponibilidad')} 
                      value={formData.disponibilidad}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full bg-white/10 text-white border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 rounded-lg hover:border-red-500/50 transition-all text-sm">
                        <SelectValue placeholder={t('tcn.form.disp.placeholder')} />
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
                  <Label htmlFor="mensaje" className="text-gray-300 font-medium text-xs sm:text-sm">{t('tcn.form.text.title')}</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder={t('tcn.form.text.placeholder')}
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
                                  {t('tcn.form.click.cambiar')}
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
                                  {t('tcn.form.click.title')}
                                </span>{" "}
                                {t('tcn.form.click.title2')}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {t('tcn.form.click.desc')}
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
                        {t('tcn.form.click.button')}
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