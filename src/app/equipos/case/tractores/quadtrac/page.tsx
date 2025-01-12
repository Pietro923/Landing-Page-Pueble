// app/equipos/case/tractores/quadtrac/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const quadtracProducts: any[] = []; // Array vacío para simular que no hay productos

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
