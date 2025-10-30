import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { ThemeProvider } from "@/components/layout/themeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pueblemaquinarias.com.ar"),
  title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
  description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
  keywords: [
    "maquinaria agrícola",
    "maquinaria de construcción",
    "construcción",
    "agricultura",
    "equipos agrícolas",
    "Pueble SA",
    "implementos agrícolas",
    "repuestos agrícolas",
    "venta maquinaria",
    "servicio técnico agrícola"
  ],
  authors: [{ name: "Pueble S.A." }],
  
  // Apple Web App
  appleWebApp: {
    title: "Pueble S.A",
    statusBarStyle: "default",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph - CON URL ABSOLUTA
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.pueblemaquinarias.com.ar/",
    siteName: "Pueble S.A.",
    title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
    description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: [
      {
        url: "https://www.pueblemaquinarias.com.ar/og_image.png", // ✅ URL ABSOLUTA
        width: 1200,
        height: 630,
        alt: "Pueble S.A. Maquinaria Agrícola",
      },
    ],
  },
  
  // Twitter - CON URL ABSOLUTA
  twitter: {
    card: "summary_large_image",
    title: "Pueble S.A. | Maquinaria Agrícola y de construcción de Alta Calidad",
    description: "Tu socio confiable en maquinaria agrícola y de construcción de alta calidad. Venta, servicio técnico y repuestos para equipos agrícolas.",
    images: ["https://www.pueblemaquinarias.com.ar/og_image.png"], // ✅ URL ABSOLUTA
    creator: "@pueblesa",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Patrón SVG global - Fixed para evitar problemas de superposición */}
          <div className="fixed inset-0 opacity-10 pointer-events-none -z-10">
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

          <Navbar />
          
          <main className="relative min-h-screen pt-20 font-titillium">
            {children}
          </main>
          
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}