import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Equipos = () => {
  const equipos = [
    {
      marca: "JCB",
      descripcion: "Equipos innovadores y duraderos para construcción y agricultura.",
      imagen: "/imagenes/equipment/jcb/jcb.png", // Reemplaza con una imagen real
      ruta: "/equipos/jcb",
    },
    {
      marca: "Case",
      descripcion: "Máquinas confiables diseñadas para maximizar la productividad.",
      imagen: "/imagenes/equipment/case/caseih.avif", // Reemplaza con una imagen real
      ruta: "/equipos/case",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50  relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Nuestros Equipos</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {equipos.map((equipo, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader className="flex flex-col items-center">
                <img
                  src={equipo.imagen}
                  alt={equipo.marca}
                  className="h-32 w-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{equipo.marca}</h2>
                <Badge className="mt-2">{`Marca #${index + 1}`}</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{equipo.descripcion}</p>
                <Link href={equipo.ruta}>
                  <Button variant="outline">Ver más</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipos;
