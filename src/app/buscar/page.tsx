"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { motion } from "framer-motion";
import { Suspense } from 'react';

const BuscarContent = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');  // Obtenemos el término de búsqueda desde la URL

  const results = [
    { name: 'Cosechadora - Case IH', href: '/equipos/case/cosechadoras' },
    { name: 'Tractor - Case IH', href: '/equipos/case/tractores' },
    { name: 'Sembradoras - Case IH', href: '/equipos/case/sembradoras' },
    { name: 'Pulverizadoras - Case IH', href: '/equipos/case/pulverizadoras' },
    { name: 'Agricultura de Precisión - Case IH', href: '/equipos/case/agricultura-precision' },
    { name: 'Heno y Forraje - Case IH', href: '/equipos/case/heno-forraje' },

    { name: 'Excavadoras - JCB', href: '/equipos/jcb/excavadoras' },
    { name: 'Cargadores Frontales - JCB', href: '/equipos/jcb/cargadores-frontales' },
    { name: 'Minicargadores - JCB', href: '/equipos/jcb/minicargadores' },
    { name: 'Rolos Compacadores - JCB', href: '/equipos/jcb/rolos-compactadores' },
    { name: 'Retroexcavadoras - JCB', href: '/equipos/jcb/retroexcavadora' },
    { name: 'Manipuladores Telescópicos - JCB', href: '/equipos/jcb/manipuladores-telescopicos' },

    { name: 'Usados', href: 'https://www.agroads.com.ar/e/pueble-sa/'},
  ];

  // Filtramos los resultados que coinciden con el término de búsqueda
  const filteredResults = results.filter(result =>
    result.name.toLowerCase().includes(q?.toLowerCase() || '')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r text-gray-300  bg-clip-text">
              Buscar Equipos
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {filteredResults.length > 0 ? (
                <ul className="space-y-4">
                  {filteredResults.map((result) => (
                    <li key={result.href}>
                    {result.href.startsWith("http") ? (
                      // Enlace externo con target="_blank"
                      <a 
                        href={result.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-between">
                          <span>{result.name}</span>
                          <Search className="h-5 w-5 text-gray-400" />
                        </Button>
                      </a>
                    ) : (
                      // Enlace interno con Link de Next.js
                      <Link href={result.href}>
                        <Button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-between">
                          <span>{result.name}</span>
                          <Search className="h-5 w-5 text-gray-400" />
                        </Button>
                      </Link>
                    )}
                  </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-center">No se encontraron resultados para <span className="font-semibold">"{q}"</span>.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const Buscar = () => {
  return (
    <Suspense fallback={<div className="text-center text-gray-300">Cargando...</div>}>
      <BuscarContent />
    </Suspense>
  );
};

export default Buscar;