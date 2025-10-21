// app/equipos/case/cosechadoras/cosechadoracana/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const cosechadoracanaLinePage = () => {
const { t } = useTranslation();
const cosechadoracanaproducts = [
  {
    id: 1,
    name: "Austoft A9000",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.caña.desc'),
    image: "/imagenes/equipment/case/cosechadoras/cosechadoracana/a9000.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5e56ae6115b0440392a82eb66d3da257?v=c87ca7bc"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={cosechadoracanaproducts}
      categoryTitle={t('case.cosechadora.caña.categoryTitle')}
      categoryDescription={t('case.cosechadora.caña.categoryDescription')}
    />
  );
};

export default cosechadoracanaLinePage;
