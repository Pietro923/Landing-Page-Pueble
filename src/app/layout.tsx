import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

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
        <main className="pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}