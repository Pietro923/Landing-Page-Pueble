// app/equipos/case/tractores/steiger/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const steigerProducts = [
  {
    id: 1,
    name: "Steiger 450",
    category: "Tractores",
    description: "Ideal para las condiciones de suelo más difíciles, la administración de potencia de su motor proporciona un adicional de hasta 63 cv, un 10% de su potencia.",
    image: "/imagenes/equipment/case/tractores/steiger/steiger450.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a9aa283c468149599f1f67a10ae0e9ee?v=7b7302f9"
  },
]; // Array vacío para simular que no hay productos

const SteigerLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={steigerProducts}
      categoryTitle="Línea Steiger"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Steiger."
    />
  );
};

export default SteigerLinePage;
