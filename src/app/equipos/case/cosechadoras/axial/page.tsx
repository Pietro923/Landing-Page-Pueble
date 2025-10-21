// app/equipos/case/cosechadoras/axial/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const AxialcLinePage = () => {
const { t } = useTranslation();
const axialproducts = [
  {
    id: 1,
    name: "Axial-Flow Serie 150",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.axial.desc1'),
    image: "/imagenes/equipment/case/cosechadoras/axial/axial150.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9aa11989582e43e9b229161ce00afe83?v=2e02714b"
  },
  {
    id: 2,
    name: "Axial-Flow Serie 250",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.axial.desc2'),
    image: "/imagenes/equipment/case/cosechadoras/axial/axial250.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/cdbc304c987d40a4a876663f0b76c2a5?v=6e551eca"
  },
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={axialproducts}
      categoryTitle={t('case.cosechadora.axial.categoryTitle')}
      categoryDescription={t('case.cosechadora.axial.categoryDescription')}
    />
  );
};

export default AxialcLinePage;
