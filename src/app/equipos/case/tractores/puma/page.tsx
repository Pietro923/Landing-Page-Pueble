// app/equipos/case/tractores/puma/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const pumaProducts: any[] = []; // Array vacío para simular que no hay productos

const PumaLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={pumaProducts}
      categoryTitle="Línea Puma"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Puma."
    />
  );
};

export default PumaLinePage;
