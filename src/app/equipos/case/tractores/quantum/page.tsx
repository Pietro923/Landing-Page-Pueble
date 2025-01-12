// app/equipos/case/tractores/quantum/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const quantumProducts: any[] = []; // Array vacío para simular que no hay productos

const QuantumLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={quantumProducts}
      categoryTitle="Línea Quantum"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Quantum."
    />
  );
};

export default QuantumLinePage;
