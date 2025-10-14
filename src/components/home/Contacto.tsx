'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2, CheckCircle2, Send } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: t('contacto.phone'),
      content: "+54 381 589-7858",
      link: "tel:+543815897858"
    },
    {
      icon: Mail,
      title: t('contacto.emailInfo'),
      content: "recepcion@pueblemaquinarias.com.ar",
      link: "mailto:recepcion@pueblemaquinarias.com.ar"
    },
    {
      icon: MapPin,
      title: t('contacto.address'),
      content: "Ruta Nacional 9 KM 1301, Tucumán",
      link: "https://maps.app.goo.gl/Q8uDt7ZbTKY8JFeN7"
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Error al enviar el mensaje')

      setSubmitStatus('success')
      toast({
        title: "✅ Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto pronto.",
      })
      
      setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: error instanceof Error ? error.message : "Hubo un problema al enviar tu mensaje.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-24">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wider mb-2 text-sm lg:text-base">| {t('contacto.badge')}</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4">
            {t('contacto.title')}
          </h2>
          <p className="text-base lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            {t('contacto.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Send className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">{t('contacto.form.title')}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
                <Input 
                  placeholder={t('contacto.name')}
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                  required
                  disabled={isLoading}
                />
                <Input 
                  type="email" 
                  placeholder={t('contacto.email')} 
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <Input 
                placeholder={t('contacto.asunto')} 
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                required
                disabled={isLoading}
              />
              
              <Textarea 
                placeholder={t('contacto.message')} 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 min-h-[120px] lg:min-h-[160px] rounded-xl resize-none text-sm lg:text-base"
                required
                disabled={isLoading}
              />
              
              <Button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-base lg:text-lg py-5 lg:py-6 rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 lg:w-5 lg:h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    ¡Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 lg:p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center text-sm lg:text-base"
                  >
                    ✅ Tu mensaje ha sido enviado exitosamente
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 lg:p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center text-sm lg:text-base"
                  >
                    ❌ Hubo un error. Por favor intenta nuevamente.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">{t('contacto.informacion')}</h3>
              <div className="space-y-3 lg:space-y-6">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 transition-colors">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-red-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-semibold mb-1 text-sm lg:text-base">{item.title}</h4>
                        <p className="text-gray-300 text-xs lg:text-sm break-words">{item.content}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-2xl">
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{t('contacto.horarios.title')}</h3>
              <div className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-300">
                <div className="flex justify-between">
                  <span>{t('contacto.horarios.days')}</span>
                  <span className="font-semibold text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contacto.horarios.sab')}</span>
                  <span className="font-semibold text-white">8:00 - 12:00</span>
                </div>
                <div className="pt-2 lg:pt-3 border-t border-white/10">
                  <span className="text-red-400 font-semibold text-xs lg:text-sm">{t('contacto.horarios.emer')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}