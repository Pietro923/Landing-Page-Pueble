'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24 text-white">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
        <p className="text-xl ">Estamos aquí para responder tus consultas y brindarte la mejor atención</p>
      </div>

      <div className="lg:w-1/2 mx-auto">
        <Card className="bg-white shadow-md p-4">
          <CardHeader className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-red-600" />
            <CardTitle>Envíanos un Mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Nombre" className="bg-white/50" />
                <Input type="email" placeholder="Correo Electrónico" className="bg-white/50" />
              </div>
              <Input placeholder="Asunto" className="bg-white/50" />
              <Textarea placeholder="Mensaje" className="bg-white/50 min-h-[120px]" />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
