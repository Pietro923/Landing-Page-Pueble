// app/equipos/case/tractores/steiger/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const SteigerLinePage = () => {
const { t } = useTranslation();

const steigerProducts = [
  {
    id: 1,
    name: "Steiger 450",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.steiger.description1'),
    image: "/imagenes/equipment/case/tractores/steiger/steiger450.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a9aa283c468149599f1f67a10ae0e9ee?v=7b7302f9"
  },
]; // Array vacío para simular que no hay productos


  return (
    <EquipmentBrandPage
      brand="Case"
      products={steigerProducts}
      categoryTitle={t('case.tractores.steiger.categoryTitles')}
      categoryDescription={t('case.tractores.steiger.categoryDescription')}
    />
  );
};

export default SteigerLinePage;
