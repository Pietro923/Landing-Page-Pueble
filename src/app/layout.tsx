import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Phone } from "lucide-react" // Si usas un ícono de Lucide

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pueble S.A.",
  description: "Tu socio confiable en maquinaria agrícola de alta calidad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />

        {/* Botón flotante WhatsApp */}
        <a
          href="https://web.whatsapp.com/send?phone=5493816618632&text=Hola%20estoy%20en%20la%20pagina%20web%20y%20quiero%20hacer%20una%20consulta!" 
          target="_blank"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-transform transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
         <img src="/imagenes/whatsapp.svg" className="w-6 h-6" alt="WhatsApp" />
        </a>
      </body>
    </html>
  )
}
