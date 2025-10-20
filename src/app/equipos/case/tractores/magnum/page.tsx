// app/equipos/case/tractores/magnum/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const MagnumLinePage = () => {
  const { t } = useTranslation();
const magnumProducts = [
  {
    id: 1,
    name: "MAGNUM 260/290/315/340/380/400",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.magnum.description1'),
    image: "/imagenes/equipment/case/tractores/magnum/magnum340.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/bbf0da8d18c9470aaa1f27f64d933693?v=6ced0978"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={magnumProducts}
      categoryTitle={t('case.tractores.magnum.categoryTitles')}
      categoryDescription={t('case.tractores.magnum.categoryDescription')}
    />
  );
};

export default MagnumLinePage;
