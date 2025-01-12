// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const retroProducts = [
  {
    id: 1,
    name: "Retroexcavadora JCB 3CX",
    category: "Retroexcavadoras",
    description: "La retroexcavadora JCB 3CX es una máquina versátil y potente, ideal para construcción y obras públicas. Ofrece excelente rendimiento y bajo consumo de combustible.",
    image: "/imagenes/equipment/jcb/3cx.jpg",
    specs: {
      power: "92 HP",
      weight: "8,070 kg",
      capacity: "1,000 kg"
    },
    pdfUrl: "/docs/jcb/3cx-spec.pdf"
  },
  // Más productos...
];

const JCBBackhoesPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={retroProducts}
    categoryTitle="Retroexcavadoras JCB"
    categoryDescription="Explore nuestra gama de retroexcavadoras JCB, líderes mundiales en su categoría."
  />;
};

export default JCBBackhoesPage;