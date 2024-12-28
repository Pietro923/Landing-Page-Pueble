import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

// About Section
export default function About() {
  return (
    <section id="nosotros" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quiénes Somos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Somos una empresa líder en la venta y servicio de maquinaria agrícola, comprometidos con el desarrollo del sector agrícola en nuestra región.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Objetivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nuestro objetivo es proporcionar soluciones integrales y de alta calidad para optimizar la producción agrícola de nuestros clientes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Historia</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  1980: Fundación de Pueble S.A.
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  1995: Expansión a nivel nacional
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  2005: Incorporación de tecnología de punta
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  2020: Líder en el mercado de maquinaria agrícola
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}