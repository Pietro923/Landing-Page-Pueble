// app/equipos/case/cosechadoras/arrocera/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const arroceraproducts = [
  {
    id: 1,
    name: "Arrocera 5130 RI",
    category: "Cosechadoras",
    description: "Con la cosechadora 5130 RI es posible realizar una cosecha mucho más fácil, independientemente de la condición en campo.",
    image: "/imagenes/equipment/case/cosechadoras/arrocera/arrocera7130.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "Arrocera 7130 RI",
    category: "Cosechadoras",
    description: "Con la cosechadora 7130, la robustez y el menor costo operacional son destaques en su cosecha.",
    image: "/imagenes/equipment/case/cosechadoras/arrocera/arrocera5130.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
]; 

const arroceraLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={arroceraproducts}
      categoryTitle="Línea Arrocera"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras cosechadoras Arroceras"
    />
  );
};

export default arroceraLinePage;
