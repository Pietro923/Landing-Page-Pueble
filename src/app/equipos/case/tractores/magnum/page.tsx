// app/equipos/case/tractores/magnum/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const magnumProducts = [
  {
    id: 1,
    name: "MAGNUM 260/290/315/340/380/400",
    category: "Tractores",
    description: "El nuevo Magnum AFS Connect llegó para ser tu principal aliado en esta evolución de la agricultura digital, para garantizar el control total de tus operaciones, a cada momento, desde donde tú y tu equipo estén.",
    image: "/imagenes/equipment/case/tractores/magnum/magnum340.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Magnum/SPEC_MAGNUM_GENERAL.pdf"
  },
]; 

const MagnumLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={magnumProducts}
      categoryTitle="Línea Magnum"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Magnum."
    />
  );
};

export default MagnumLinePage;
