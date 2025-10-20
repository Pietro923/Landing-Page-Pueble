// app/equipos/case/tractores/puma/page.tsx
"use client"

import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const PumaLinePage = () => {
const { t } = useTranslation();

const pumaProducts = [
  {
    id: 1,
    name: "Puma 190/200/215/230",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.puma.description1'),
    image: "/imagenes/equipment/case/tractores/puma/puma190.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4251b11594db466c97acf141e401e856?v=db1e6043"
  },
  {
    id: 2,
    name: "Puma 140",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.puma.description2'),
    image: "/imagenes/equipment/case/tractores/puma/puma140.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 3,
    name: "Puma 155",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.puma.description3'),
    image: "/imagenes/equipment/case/tractores/puma/puma155.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 4,
    name: "Puma 170",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.puma.description4'),
    image: "/imagenes/equipment/case/tractores/puma/puma170.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
  {
    id: 5,
    name: "Puma 185",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.puma.description5'),
    image: "/imagenes/equipment/case/tractores/puma/puma185.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b22b27e660a449088fd5afec41c7698b?v=cd6a9de3"
  },
]; 


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
