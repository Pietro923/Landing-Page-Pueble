// app/equipos/case/tractores/farmall/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const FarmallLinePage = () => {
const { t } = useTranslation();

const farmallProducts = [
  {
    id: 1,
    name: "Farmall M",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description1'),
    image: "/imagenes/equipment/case/tractores/farmall/farmallM.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/36d4df9a7ed84dcf8e4d461fbff0459a?v=0ec944a0"
  },
  {
    id: 2,
    name: "Farmall 80",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description2'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall80.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7c55d0a8924f41f69b72bd6462ceacf0?v=41eb35d5"
  },
  {
    id: 3,
    name: "Farmall 90JX",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description3'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall90.webp",
    specs: {
      power: "90 cv (66 kW)",
      weight: "", // Cilindrada: 3,9 L
      capacity: "" // Transmisión: 12 de avance y 12 de retroceso
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 4,
    name: "Farmall 100JX",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description4'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall100.webp",
    specs: {
      power: "100 cv (74 kW)",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 5,
    name: "Farmall 110JX",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description5'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall110.webp",
    specs: {
      power: "110 cv (81 kW)",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 6,
    name: "Farmall JXM55",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description6'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall55.webp",
    specs: {
      power: "55 HP",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/283f908d19a848fd859eac6a5234afa7?v=3abefaf3"
  },
  {
    id: 7,
    name: "Farmall JXM 75",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description7'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall-jxm.webp",
    specs: {
      power: "75 HP",
      weight: "", // hay que cambiar esto por: Cilindrada: 2,9 L
      capacity: "" // hay que cambiar esto por: Transmisión: 12 x 12
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/283f908d19a848fd859eac6a5234afa7?v=3abefaf3"
  },
  {
    id: 8,
    name: "Farmall 120A",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description8'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall120.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d98d9a0d86564fa9b1d0d38e81262082?v=0b791210"
  },
  {
    id: 9,
    name: "Farmall 130A",
    category: t('page.equipos.case.categories1'),
    description:t('case.tractores.farmall.description9'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall130.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d98d9a0d86564fa9b1d0d38e81262082?v=0b791210"
  },
  {
    id: 10,
    name: "Farmall 80 con pala",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.farmall.description10'),
    image: "/imagenes/equipment/case/tractores/farmall/farmall80conpala.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7c55d0a8924f41f69b72bd6462ceacf0?v=41eb35d5"
  },
];


  return <EquipmentBrandPage 
    brand="Case"
    products={farmallProducts}
    categoryTitle={t('case.tractores.farmall.categoryTitles')}
    categoryDescription={t('Descubra la versatilidad y confiabilidad de nuestros tractores Farmall.')}
  />;
};

export default FarmallLinePage;