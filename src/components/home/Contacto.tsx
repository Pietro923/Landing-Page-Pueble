// src/components/home/Contacto.tsx
'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      // Éxito
      setSubmitStatus('success')
      toast({
        title: "✅ Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      })
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      })

      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      toast({
        variant: "destructive",
        title: "❌ Error",
        description: error instanceof Error ? error.message : "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">
      <div className="relative z-10 container mx-auto px-4">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white border-b-2 border-red-500 inline-block">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-200">
            Estamos aquí para responder tus consultas y brindarte la mejor atención.
          </p>
        </motion.div>

        {/* Formulario y tarjetas de contacto */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Envía un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                    <Input 
                      type="email" 
                      placeholder="Correo Electrónico" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Input 
                    placeholder="Asunto" 
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                    required
                    disabled={isLoading}
                  />
                  <Textarea 
                    placeholder="Mensaje" 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500 min-h-[150px]"
                    required
                    disabled={isLoading}
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-lg shadow-lg hover:shadow-red-700/40 transform hover:-translate-y-1 transition-all duration-300"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        ¡Enviado!
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </Button>

                  {/* Mensajes de estado */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center"
                      >
                        ✅ Tu mensaje ha sido enviado exitosamente
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center"
                      >
                        ❌ Hubo un error. Por favor intenta nuevamente.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tarjetas de información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">
                  Ruta Nacional 9 KM 1301, San Miguel de Tucumán, Tucumán
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3">
                <Phone className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">+543815897858</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Correo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">
                  recepcion@pueblemaquinarias.com.ar
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>A
    </section>
  )
}