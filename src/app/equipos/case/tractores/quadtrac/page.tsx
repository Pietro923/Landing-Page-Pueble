// app/equipos/case/tractores/quadtrac/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const quadtracProducts = [
  {
    id: 1,
    name: "Quadtrac 500",
    category: "Tractores",
    description: "El nuevo Quadtrac AFS Connect ofrece toda la fuerza y robustez que ya conoces con las ventajas y adicionales agronómicos que solo la agricultura de precisión puede proporcionar.",
    image: "/imagenes/equipment/case/tractores/quadtrac/quadtrac500.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b94671e369eb4e6880aa23208cad4a45?v=542b27f8"
  },
]; // Array vacío para simular que no hay productos

const QuadtracLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={quadtracProducts}
      categoryTitle="Línea Quadtrac"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Quadtrac."
    />
  );
};

export default QuadtracLinePage;
