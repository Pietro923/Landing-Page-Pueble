import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

// Contact Section
export default function Contact() {
  return (
    <section id="contacto" className="bg-red-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Parque Industrial Aut. Circunvalación Km 1294, San Miguel de Tucumán 4000
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +54 9 381 661 8632
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@pueblesa.com
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Correo Electrónico" />
                <Textarea placeholder="Mensaje" />
                <Button type="submit">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}