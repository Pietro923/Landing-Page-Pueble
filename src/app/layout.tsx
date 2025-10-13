import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://pueblemaquinarias.com.ar/"),
  title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
  description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
  keywords: ["maquinaria agrícola","maquinaria de construcción", "construcción","agricultura", "equipos agrícolas", "Pueble SA", "implementos agrícolas", "repuestos agrícolas", "venta maquinaria", "servicio técnico agrícola"],
  authors: [{ name: "Pueble S.A." }],
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
    url: "http://pueblemaquinarias.com.ar/",
    title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
    description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: [
      {
        url: "/pueblemeta.jpg", 
        width: 1200,
        height: 630,
        alt: "Pueble S.A. Maquinaria Agrícola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
    description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: ["/pueblemeta.jpg"], 
    creator: "@pueblesa", 
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

      {/* Patrón SVG global (rejilla + puntos) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="global-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-pattern)" />
        </svg>
      </div>
      
        <main className="min-h-screen pt-20 font-titillium">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}