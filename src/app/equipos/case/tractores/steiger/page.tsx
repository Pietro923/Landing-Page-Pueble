// app/equipos/case/tractores/steiger/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const steigerProducts: any[] = []; // Array vacío para simular que no hay productos

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
