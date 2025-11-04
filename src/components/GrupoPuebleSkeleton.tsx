// Crea un archivo, ej: components/GrupoPuebleSkeleton.tsx

export default function GrupoPuebleSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      {/* Placeholder para el título */}
      <div className="text-center mb-8 lg:mb-16">
        <div className="h-4 bg-gray-700 rounded w-1/4 mx-auto mb-4" />
        <div className="h-10 bg-gray-700 rounded w-1/2 mx-auto mb-4" />
        <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto" />
      </div>
      
      {/* Placeholder para las tarjetas */}
      <div className="flex lg:flex-row flex-col min-h-[600px] lg:min-h-[700px] gap-3 lg:gap-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="relative lg:flex-[0.5] flex-[2] min-w-[170px] h-[700px] rounded-3xl bg-gray-800 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}