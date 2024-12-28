import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tractor, Wrench, Users, Building2, Phone, MessageCircle } from 'lucide-react'

// Footer Section
export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Pueble S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}