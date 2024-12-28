import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

// Company Section
export default function Company() {
  return (
    <section id="empresa" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Empresa</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Instalaciones de Pueble S.A."
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Compromiso con la Excelencia</h3>
            <p className="mb-4">
              En Pueble S.A., nos dedicamos a proporcionar soluciones de maquinaria agrícola de alta calidad.
            </p>
            <p>
              Con más de 40 años de experiencia en el sector, somos líderes en innovación y servicio al cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}