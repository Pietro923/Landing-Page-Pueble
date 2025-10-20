// app/equipos/case/tractores/quadtrac/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const QuadtracLinePage = () => {
const { t } = useTranslation();
const quadtracProducts = [
  {
    id: 1,
    name: "Quadtrac 500",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.quadtrac.description1'),
    image: "/imagenes/equipment/case/tractores/quadtrac/quadtrac500.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b94671e369eb4e6880aa23208cad4a45?v=542b27f8"
  },
]; // Array vacío para simular que no hay productos


  return (
    <EquipmentBrandPage
      brand="Case"
      products={quadtracProducts}
      categoryTitle={t('case.tractores.quadtrac.categoryTitles')}
      categoryDescription={t('case.tractores.quadtrac.categoryDescription')}
    />
  );
};

export default QuadtracLinePage;
