'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Loader2, 
  CheckCircle2, 
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  ArrowRight
} from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next";

export default function ContactPage() {
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
      title: t('page.contacto.items1'),
      content: "+54 381 589-7858",
      description: t('page.contacto.items1.desc'),
      link: "tel:+543815897858"
    },
    {
      icon: Mail,
      title: t('page.contacto.items2'),
      content: "recepcion@pueblemaquinarias.com.ar",
      description: t('page.contacto.items2.desc'),
      link: "mailto:recepcion@pueblemaquinarias.com.ar"
    },
    {
      icon: MapPin,
      title: t('page.contacto.items3'),
      content: "Ruta Nacional 9 KM 1301, Tucumán",
      description: "San Miguel de Tucumán",
      link: "https://maps.app.goo.gl/Q8uDt7ZbTKY8JFeN7"
    }
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/Pueblemaquinarias" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/casepueblesa/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-pueble/" },
  ]

  const googleMapsLink = "https://www.google.com/maps/place/PUEBLE+S.A./@-26.7684015,-65.2193973,17z/data=!3m1!4b1!4m6!3m5!1s0x94225e94c0835bbf:0x8568c458ceb402c1!8m2!3d-26.7684063!4d-65.2168224!16s%2Fg%2F11bzrcb9mm?entry=ttu"

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
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <p className="text-red-500 font-semibold uppercase tracking-wider mb-2 text-sm lg:text-base">| {t('page.contacto.badge')}</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4">
            {t('page.contacto.title')}
          </h2>
          <p className="text-base lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            {t('page.contacto.subtitle')}
          </p>
        </motion.div>

        {/* Tarjetas de info rápida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          {contactInfo.map((item, idx) => {
            const Icon = item.icon
            return (
              <a
                key={idx}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-6 hover:bg-white/10 transition-all group shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1 text-sm lg:text-base">{item.title}</h4>
                    <p className="text-gray-300 text-xs lg:text-sm break-words mb-1">{item.content}</p>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-12">
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
              <h3 className="text-xl lg:text-2xl font-bold text-white"> {t('page.contacto.form.title')}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
                <Input 
                  placeholder= {t('page.contacto.form.placeholder.name')}
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                  required
                  disabled={isLoading}
                />
                <Input 
                  type="email" 
                  placeholder={t('page.contacto.form.placeholder.email')}
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <Input 
                placeholder={t('page.contacto.form.placeholder.subjet')}
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="bg-white/10 text-white border-white/20 focus:border-red-500 placeholder:text-white/50 h-11 lg:h-12 rounded-xl text-sm lg:text-base"
                required
                disabled={isLoading}
              />
              
              <Textarea 
                placeholder={t('page.contacto.form.placeholder.men')}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl"
        >
            {/* Mapa */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">{t('page.contacto.card.ubi')}</h3>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-white/10 mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.4430790144108!2d-65.21637952744011!3d-26.768524027075227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225e94c0835bbf%3A0x8568c458ceb402c1!2sCase%20IH%20-%20Pueble%20SA!5e0!3m2!1ses-419!2sar!4v1760376738722!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              >
                {t('page.contacto.card.ubi.button')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Horarios */}
            <div className="mt-6 bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/30 rounded-2xl lg:rounded-3xl p-5 lg:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white">{t('page.contacto.card.horario')}</h3>
              </div>
              
              <div className="space-y-2 lg:space-y-3 text-sm lg:text-base text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span>{t('page.contacto.card.horario.days')}</span>
                  <span className="font-semibold text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span>{t('page.contacto.card.horario.days1')}</span>
                  <span className="font-semibold text-white">8:00 - 12:00</span>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <span className="text-red-400 font-bold text-sm lg:text-base">{t('page.contacto.card.horario.datails')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl"
        >
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {t('page.contacto.card.horario.redes')}
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              {t('page.contacto.card.horario.desc')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 hover:text-red-500 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:text-red-500" />
                  </div>
                  <span className="font-medium text-sm lg:text-base text-white">{social.label}</span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}