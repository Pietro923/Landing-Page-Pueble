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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_STEIGER_450.pdf"
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
