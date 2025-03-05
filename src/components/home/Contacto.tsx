'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare, Loader2 } from 'lucide-react'
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
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
    e.preventDefault() // Previene el envío tradicional del formulario
    setIsLoading(true)
    
    try {
      // Obtener el formulario como elemento HTML
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Enviar el formulario usando fetch en lugar de form.submit()
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para evitar problemas de CORS con FormSubmit
      });
      
      // Mostramos mensaje de éxito
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      });
      
      // Limpiamos el formulario
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      });
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">
      {/* Contenido principal */}
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
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  action="https://formsubmit.co/beelbonacossa@gmail.com" 
                  method="POST"
                >
                  {/* Campo oculto para personalizar la página de agradecimiento */}
                  <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html" />
                  {/* Campo oculto para prevenir captcha */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Campo oculto para personalizar el asunto del correo */}
                  <input type="hidden" name="_subject" value="Nuevo mensaje del sitio web" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Correo Electrónico" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <Input 
                    placeholder="Asunto" 
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <Textarea 
                    placeholder="Mensaje" 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-white/20 text-white [&::placeholder]:text-white/70 border-0 focus:ring-2 focus:ring-red-500 min-h-[150px]"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </Button>
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
                <p className="text-gray-200 text-center">Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3">
                <Phone className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">+54 9 381 661 8632</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-red-500" />
                <CardTitle className="text-2xl text-white">Correo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center">recepcion@pueblemaquinarias.com.ar</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}