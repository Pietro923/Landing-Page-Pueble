'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Nombre" 
                      className="bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500"
                    />
                    <Input 
                      type="email" 
                      placeholder="Correo Electrónico" 
                      className="bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <Input 
                    placeholder="Asunto" 
                    className="bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500"
                  />
                  <Textarea 
                    placeholder="Mensaje" 
                    className="bg-white/20 text-white placeholder-gray-300 border-0 focus:ring-2 focus:ring-red-500 min-h-[150px]"
                  />
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    size="lg"
                  >
                    Enviar Mensaje
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
                <p className="text-gray-200 text-center">info@pueblesa.com</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}