// app/equipos/case/cosechadoras/plataformadegranos/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const PlataformadegranosLinePage = () => {
const { t } = useTranslation();
const plataformadegranosproducts = [
  {
    id: 1,
    name: "Plataforma 3020",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.grano.desc1'),
    image: "/imagenes/equipment/case/cosechadoras/plataformadegranos/plataforma3020.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7664f90a1de44a9c8b11c161e93039e7?v=9d693c28"
  },
  {
    id: 2,
    name: "Plataforma 3162",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.grano.desc2'),
    image: "/imagenes/equipment/case/cosechadoras/plataformadegranos/plataforma3162.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7664f90a1de44a9c8b11c161e93039e7?v=9d693c28"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={plataformadegranosproducts}
      categoryTitle={t('case.cosechadora.grano.categoryTitle')}
      categoryDescription={t('case.cosechadora.grano.categoryDescription')}
    />
  );
};

export default PlataformadegranosLinePage;
