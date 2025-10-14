'use client'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from 'next/image'
import { Award, Users, Clock, TrendingUp } from 'lucide-react'
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();
  const stats = [
    { icon: Award, label: t('nosotros.stats1'), value: "20+" },
    { icon: Users, label: t('nosotros.stats2'), value: "1000+" },
    { icon: Clock, label: t('nosotros.stats3'), value: "24/7" },
    { icon: TrendingUp, label: t('nosotros.stats4'), value: "15%" }
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen con overlay de stats - Solo en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/imagenes/inauguracion/gp4.webp"
                alt="Equipo Pueble S.A."
                width={1280}
                height={853}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Stats superpuestos - Solo visible en desktop */}
              <div className="hidden lg:grid absolute bottom-0 left-0 right-0 p-6 grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Icon className="w-6 h-6 text-red-500 mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Stats debajo de la imagen - Solo visible en mobile */}
            <div className="grid lg:hidden grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <Icon className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-red-500 font-semibold uppercase tracking-wider mb-4"
              >
                | {t('nosotros.badge')}
              </motion.p>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white leading-tight">
                {t('nosotros.title')}
                <span className="block text-red-500">{t('nosotros.subtitle')}</span>
              </h2>
              
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4 lg:mb-6">
               {t('nosotros.description1')} <strong className="text-white">CASE IH</strong> y <strong className="text-white">JCB</strong>.
                {t('nosotros.description1.3')}
              </p>
              
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                {t('nosotros.description2')} <strong className="text-white">{t('nosotros.description2.1')}</strong>.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {stats.slice(2).map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 lg:p-5 hover:bg-white/10 transition-all">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 mb-2" />
                    <div className="text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            <Link href="/nosotros">
              <Button 
                className="mt-6 w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white text-base lg:text-lg px-6 lg:px-8 py-5 lg:py-6 shadow-xl hover:shadow-red-500/50 transition-all duration-300 group"
                size="lg"
              >
                {t('nosotros.button')}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}