"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, ChevronRight, Package, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState } from 'react';

const BuscarContent = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const results = [
    { name: 'Cosechadoras', brand: 'Case IH', href: '/equipos/case/cosechadoras', category: 'Agrícola' },
    { name: 'Tractores', brand: 'Case IH', href: '/equipos/case/tractores', category: 'Agrícola' },
    { name: 'Sembradoras', brand: 'Case IH', href: '/equipos/case/sembradoras', category: 'Agrícola' },
    { name: 'Pulverizadoras', brand: 'Case IH', href: '/equipos/case/pulverizadoras', category: 'Agrícola' },
    { name: 'Agricultura de Precisión', brand: 'Case IH', href: '/equipos/case/agricultura-precision', category: 'Tecnología' },
    { name: 'Heno y Forraje', brand: 'Case IH', href: '/equipos/case/heno-forraje', category: 'Agrícola' },
    { name: 'Excavadoras', brand: 'JCB', href: '/equipos/jcb/excavadoras', category: 'Construcción' },
    { name: 'Cargadores Frontales', brand: 'JCB', href: '/equipos/jcb/cargadores-frontales', category: 'Construcción' },
    { name: 'Minicargadores', brand: 'JCB', href: '/equipos/jcb/minicargadores', category: 'Construcción' },
    { name: 'Rolos Compactadores', brand: 'JCB', href: '/equipos/jcb/rolos-compactadores', category: 'Construcción' },
    { name: 'Retroexcavadoras', brand: 'JCB', href: '/equipos/jcb/retroexcavadora', category: 'Construcción' },
    { name: 'Manipuladores Telescópicos', brand: 'JCB', href: '/equipos/jcb/manipuladores-telescopicos', category: 'Construcción' },
    { name: 'Equipos Usados', brand: 'Agroads', href: 'https://www.agroads.com.ar/e/pueble-sa/', category: 'Usados' },
  ];

  // Filtramos los resultados
  const filteredResults = results.filter(result =>
    result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Agrupar por categoría
  const groupedResults = filteredResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, typeof results>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const getBrandColor = (brand: string) => {
    if (brand === 'Case IH') return 'text-red-400 bg-red-500/10 border-red-500/30';
    if (brand === 'JCB') return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
    return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-medium">Búsqueda de Equipos</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ¿Qué estás <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">buscando</span>?
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Encontrá el equipo perfecto para tu operación
          </p>
        </motion.div>

        {/* Barra de búsqueda mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por nombre, marca o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
            />
          </div>
        </motion.div>

        {/* Resultados */}
        <AnimatePresence mode="wait">
          {filteredResults.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-400 px-2">
                <span>{filteredResults.length} resultado{filteredResults.length !== 1 ? 's' : ''} encontrado{filteredResults.length !== 1 ? 's' : ''}</span>
                {searchQuery && (
                  <span>para "{searchQuery}"</span>
                )}
              </div>

              {/* Resultados agrupados por categoría */}
              {Object.entries(groupedResults).map(([category, items]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 px-2">
                    <Package className="w-4 h-4 text-gray-500" />
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-2"
                  >
                    {items.map((result) => (
                      <motion.div key={result.href} variants={itemVariants}>
                        {result.href.startsWith("http") ? (
                          <a
                            href={result.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <div className="relative">
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                              <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                                <CardContent className="p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                      <ExternalLink className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-white font-semibold text-sm sm:text-base truncate group-hover:text-blue-400 transition-colors">
                                        {result.name}
                                      </h4>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getBrandColor(result.brand)}`}>
                                          {result.brand}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </CardContent>
                              </Card>
                            </div>
                          </a>
                        ) : (
                          <Link href={result.href} className="block group">
                            <div className="relative">
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                              <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                                <CardContent className="p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                      <Package className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-white font-semibold text-sm sm:text-base truncate group-hover:text-blue-400 transition-colors">
                                        {result.name}
                                      </h4>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getBrandColor(result.brand)}`}>
                                          {result.brand}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </CardContent>
                              </Card>
                            </div>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-16 text-center"
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Search className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-gray-400 mb-6">
                  No encontramos equipos que coincidan con <span className="font-semibold text-white">"{searchQuery}"</span>
                </p>
                <Button
                  onClick={() => setSearchQuery('')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
                >
                  Limpiar búsqueda
                </Button>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-white/10  backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Contactanos y te ayudamos a encontrar el equipo perfecto
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contacto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Contactar
                </Button>
              </Link>
              <a
                href="https://wa.me/+543814674252?text=Hola! Necesito ayuda para encontrar un equipo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-2">
                  <img src="/imagenes/logos/whatsapp.svg" className="w-5 h-5" alt="WhatsApp" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

const Buscar = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando búsqueda...</p>
        </div>
      </div>
    }>
      <BuscarContent />
    </Suspense>
  );
};

export default Buscar;