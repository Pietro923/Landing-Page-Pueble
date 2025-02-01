import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pueble S.A. | Maquinaria Agrícola de Alta Calidad",
  description: "Tu socio confiable en maquinaria agrícola de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
  keywords: ["maquinaria agrícola", "agricultura", "equipos agrícolas", "Pueble SA", "implementos agrícolas", "repuestos agrícolas", "venta maquinaria", "servicio técnico agrícola"],
  authors: [{ name: "Pueble S.A." }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://landing-page-pueble.vercel.app/",
    title: "Pueble S.A. | Maquinaria Agrícola",
    description: "Tu socio confiable en maquinaria agrícola de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: [
      {
        url: "/pueblemeta.jpg", // Reemplaza con la ruta correcta de tu imagen
        width: 1200,
        height: 630,
        alt: "Pueble S.A. Maquinaria Agrícola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pueble S.A. | Maquinaria Agrícola",
    description: "Tu socio confiable en maquinaria agrícola de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: ["/pueblemeta.jpg"], // Reemplaza con la ruta correcta de tu imagen
    creator: "@pueblesa", // Si tienes cuenta de Twitter
  },
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