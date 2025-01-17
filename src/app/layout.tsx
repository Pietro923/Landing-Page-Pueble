import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Header from "@/components/layout/Header"
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
      <body className={inter.className}>
        <Header />
        <main className="pt-[calc(3rem+3rem)]">
          {children}
        </main>
        <Footer />

        {/* Botón flotante WhatsApp */}
        <a
          href="https://wa.me/+5491112345678" // Reemplaza con tu número de WhatsApp
          target="_blank"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white hover:bg-green-600"
          aria-label="Contactar por WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </a>
      </body>
    </html>
  )
}
