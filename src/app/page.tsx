import Hero from '@/components/home/Hero'
import Marcas from '@/components/home/Marcas'
import Nosotros from '@/components/home/Nosotros'
import Contacto from '@/components/home/Contacto'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Marcas />
      <Nosotros />
      <Contacto />
    </main>
  )
}