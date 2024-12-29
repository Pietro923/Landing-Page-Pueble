import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Contáctanos
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm shadow-lg ">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <Building2 className="w-6 h-6 text-red-800 mr-3" />
                  Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán 4000
                </p>
                <p className="flex items-center text-gray-700">
                  <Phone className="w-6 h-6 text-red-800 mr-3" />
                  +54 9 381 661 8632
                </p>
                <p className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-800 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@pueblesa.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Correo Electrónico" />
                <Textarea placeholder="Mensaje" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit"
                >
                  <Button className="w-full bg-red-800 hover:bg-red-900 text-white transition">
                    Enviar Mensaje
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
