// app/equipos/case/tractores/puma/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const pumaProducts = [
  {
    id: 1,
    name: "Puma 190/200/215/230",
    category: "Tractores",
    description: "Ahora con el nuevo software APM y el cambio Full Powershift, su tractor Puma tendrá un consumo de combustible 14% menor. A su vez, la nueva barra de tracción con mayor robustez permite más capacidad de carga vertical. Su nuevo caudal hidráulico de 180 L/Min, le proporciona más rapidez y capacidad en el accionar de los implementos. Con la nueva serie Puma, usted podrá trabajar en cualquier momento del día y la noche, ya que cuentan con nuevas luces LED, 6 delanteras y 6 traseras.",
    image: "/imagenes/equipment/case/tractores/puma/puma190.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4251b11594db466c97acf141e401e856?v=db1e6043"
  },
  {
    id: 2,
    name: "Puma 140",
    category: "Tractores",
    description: "Siguiendo su estrategia de ofrecer un sistema de mecanización agrícola completa, Case IH presenta al mercado una línea de tractores de media potencia de la familia Puma.",
    image: "/imagenes/equipment/case/tractores/puma/puma140.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 3,
    name: "Puma 155",
    category: "Tractores",
    description: "En busca de crear soluciones cada vez más completas, Case IH presenta los nuevos tractores Puma 155.",
    image: "/imagenes/equipment/case/tractores/puma/puma155.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 4,
    name: "Puma 170",
    category: "Tractores",
    description: "En busca de crear soluciones cada vez más completas, Case IH presenta los nuevos tractores Puma 170.",
    image: "/imagenes/equipment/case/tractores/puma/puma170.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 5,
    name: "Puma 185",
    category: "Tractores",
    description: "En busca de crear soluciones cada vez más completas, Case IH presenta los nuevos tractores Puma 170.",
    image: "/imagenes/equipment/case/tractores/puma/puma185.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
]; 

const PumaLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={pumaProducts}
      categoryTitle="Línea Puma"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Puma."
    />
  );
};

export default PumaLinePage;
