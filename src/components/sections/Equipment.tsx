"Use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

export default function Equipment() {
  const machines = [
    { name: 'Retroexcavadora', description: 'Ideal para excavaciones y movimientos de tierra' },
    { name: 'Tractor', description: 'Potente y versátil para diversas tareas agrícolas' },
    { name: 'Cosechadora', description: 'Eficiente para la recolección de cultivos' },
    { name: 'Sembradora', description: 'Precisión en la siembra para maximizar el rendimiento' },
    { name: 'Fumigadora', description: 'Aplicación uniforme de productos fitosanitarios' },
    { name: 'Empacadora', description: 'Compactación eficiente de forrajes y residuos' },
  ];

  return (
    <section id="equipo" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo de Maquinaria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{machine.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Tractor className="w-24 h-24 text-red-600 mb-4" />
                <p className="text-center">{machine.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}