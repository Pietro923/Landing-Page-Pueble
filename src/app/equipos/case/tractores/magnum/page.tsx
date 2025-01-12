// app/equipos/case/tractores/magnum/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const magnumProducts: any[] = []; // Array vacío para simular que no hay productos

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
