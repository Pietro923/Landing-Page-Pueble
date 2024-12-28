import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

// Service Section
export default function Service() {
  return (
    <section id="servicios" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios Post Venta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="w-6 h-6 mr-2" />
                Mantenimiento y Reparación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ofrecemos servicios de mantenimiento preventivo y reparación para mantener tu maquinaria en óptimas condiciones.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Capacitación y Asesoría
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brindamos capacitación y asesoría técnica para que puedas aprovechar al máximo tu maquinaria agrícola.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}