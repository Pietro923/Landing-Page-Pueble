// app/equipos/case/sembradora/precisiondisk/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const precisiondiskLinePage = () => {
const { t } = useTranslation();
const precisiondiskProducts = [
  {
    id: 1,
    name: "Precision Disk",
    category: t('page.equipos.case.categories3'),
    description: t('case.sembradora.desc1'),
    image: "/imagenes/equipment/case/sembradoras/precisiondisk.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/162381054f174b888b08065ac994e650?v=6ecb1e3b"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={precisiondiskProducts}
      categoryTitle={t('case.sembradora.categoryTitle')}
      categoryDescription={t('case.sembradora.categoryDescription')}
    />
  );
};

export default precisiondiskLinePage;
