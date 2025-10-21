// app/equipos/case/case/agricultura-precision/afsc.tsx'
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const afscproductsLinePage = () => {
const { t } = useTranslation();
const afscproducts = [
  {
    id: 1,
    name: "Monitor AFS Connect",
    category: t('page.equipos.case.categories5'),
    description: t('case.afs.desc1'),
    image: "/imagenes/equipment/case/agriculturayprecision/afsc/monitorafsc.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e9cbbedb11054db391c38206423cc2ed?v=dac96e30"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={afscproducts}
      categoryTitle={t('case.afs.categoryTitle')}
      categoryDescription={t('case.afs.categoryDescription')}
    />
  );
};

export default afscproductsLinePage;
