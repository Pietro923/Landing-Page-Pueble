// app/equipos/case/tractores/farmall/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const farmallProducts = [
  {
    id: 1,
    name: "Farmall JXM 75",
    category: "Tractores",
    description: "...",
    image: "/imagenes/equipment/case/tractores/farmall-jxm.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_SERIE_JXM-EO.pdf"
  },
  // Más productos de la línea Farmall...
];

const FarmallLinePage = () => {
  return <EquipmentBrandPage 
    brand="Case"
    products={farmallProducts}
    categoryTitle="Línea Farmall"
    categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Farmall."
  />;
};

export default FarmallLinePage;