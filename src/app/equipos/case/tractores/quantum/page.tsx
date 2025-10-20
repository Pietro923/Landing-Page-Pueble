// app/equipos/case/tractores/quantum/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const QuantumLinePage = () => {
const { t } = useTranslation();
const quantumProducts = [
  {
    id: 1,
    name: "Quantum 65V",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.quantum.description1'),
    image: "/imagenes/equipment/case/tractores/quantum/quantum65.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 2,
    name: "Quantum 85V",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.quantum.description2'),
    image: "/imagenes/equipment/case/tractores/quantum/quantum85.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 3,
    name: "Quantum 85F",
    category: t('page.equipos.case.categories1'),
    description: t('case.tractores.quantum.description3'),
    image: "/imagenes/equipment/case/tractores/quantum/quantum85f.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 4,
    name: "Quantum 75N",
    category: t('page.equipos.case.categories1'),
     description: t('case.tractores.quantum.description4'),
    image: "/imagenes/equipment/case/tractores/quantum/quantum75.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
];


  return (
    <EquipmentBrandPage
      brand="Case"
      products={quantumProducts}
      categoryTitle={t('case.tractores.quantum.categoryTitles')}
      categoryDescription={t('case.tractores.quantum.categoryDescription')}
    />
  );
};

export default QuantumLinePage;
