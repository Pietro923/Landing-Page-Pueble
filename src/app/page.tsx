import Hero from '@/components/home/Hero'
import Marcas from '@/components/home/Marcas'
import Nosotros from '@/components/home/Nosotros'
import Contacto from '@/components/home/Contacto'

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-br from-red-900 via-black to-gray-900 opacity-95 z-0">
      <Hero />
      <Marcas />
      <Nosotros />
      <Contacto />
    </main>
  )
}