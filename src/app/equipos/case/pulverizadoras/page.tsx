"use client"
import EquipmentBrandPage from "@/components/equipo/EquipmentBrandPage";
import { useTranslation } from 'react-i18next';

const PulverizadorasPage = () => {
const { t } = useTranslation();
const PulverizadorasProducts = [
  {
    id: 1,
    name: "Patriot 3330",
    category: t('page.equipos.case.categories4'),
    description: t('case.pulv.desc1'),
    image: "/imagenes/equipment/case/pulverizadora/patriot3330.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "Patriot 250",
    category: t('page.equipos.case.categories4'),
    description: t('case.pulv.desc2'),
    image: "/imagenes/equipment/case/pulverizadora/patriot250.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "Patriot 300",
    category: t('page.equipos.case.categories4'),
    description: t('case.pulv.desc3'),
    image: "/imagenes/equipment/case/pulverizadora/patriot300.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/59a60db18bed402f82d14d2c5095f44e?v=6e19f11b"
  },
  {
    id: 4,
    name: "Patriot 350",
    category: t('page.equipos.case.categories4'),
    description: t('case.pulv.desc4'),
    image: "/imagenes/equipment/case/pulverizadora/patriot350.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
]


  return (
    <EquipmentBrandPage
      brand="Case"
      products={PulverizadorasProducts}
      categoryTitle={t('case.pulv.categoryTitle')}
      categoryDescription={t('case.pulv.categoryDescription')}
    />
  );
};

export default PulverizadorasPage;
