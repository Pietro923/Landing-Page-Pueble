import { Skeleton } from "@/components/ui/skeleton";
import Image from 'next/image';

export default function GrupoPuebleSkeleton() {
  return (
    <section
      id="grupo-pueble"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-12 lg:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-8 lg:mb-16">
          <Skeleton className="h-6 w-48 mx-auto mb-4 bg-red-400/20" />
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-white/10" />
          <Image
            src="/imagenes/logos/LogoPueble.webp"
            alt="Logo de Pueble S.A."
            width={230}
            height={200}
            priority
            className="mx-auto mt-4"
          />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mt-4 bg-white/10" />
          <Skeleton className="h-6 w-96 mx-auto mt-2 bg-white/10" />
        </div>

        {/* Galería de empresas - Skeleton */}
        <div className="flex lg:flex-row flex-col min-h-[600px] lg:min-h-[700px] gap-3 lg:gap-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="relative lg:flex-[0.5] flex-[2] flex items-center justify-center min-w-[170px] h-[700px] rounded-3xl overflow-hidden"
            >
              <Skeleton className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50" />
            </div>
          ))}
        </div>

        {/* Indicador de interacción */}
        <div className="text-center mt-6 lg:mt-8">
          <Skeleton className="h-4 w-64 mx-auto bg-gray-400/20" />
        </div>
      </div>
    </section>
  );
}