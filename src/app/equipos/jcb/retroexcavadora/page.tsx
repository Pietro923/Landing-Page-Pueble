// app/equipos/jcb/retroexcavadoras/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const RetroexcavadorasPage = () => {
  const { t } = useTranslation();
const retroProducts = [
  {
    id: 1,
    name: `${t('jcb.retro.name')} | 1CX`,
    category: t('page.equipos.jcb.categories5'),
    description: t('jcb.retro.desc1'),
    image: "/imagenes/equipment/jcb/retroexcavadora/1cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Retroexcavadora/1CX.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.retro.name')} | 3CX`,
    category: t('page.equipos.jcb.categories5'),
    description: t('jcb.retro.desc2'),
    image: "/imagenes/equipment/jcb/retroexcavadora/3cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Retroexcavadora/3CX-4CX.pdf"
  },
  {
    id: 3,
    name: `${t('jcb.retro.name')} | 4CX`,
    category: t('page.equipos.jcb.categories5'),
    description: t('jcb.retro.desc3'),
    image: "/imagenes/equipment/jcb/retroexcavadora/4cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Retroexcavadora/3CX-4CX.pdf"
  },
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={retroProducts}
    categoryTitle={t('jcb.retro.categoryTitle')}
    categoryDescription={t('jcb.retro.categoryDescription')}
  />;
};

export default RetroexcavadorasPage;