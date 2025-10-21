// app/equipos/jcb/retroexcavadoras/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const RoloscompactadoresPage = () => {
const { t } = useTranslation();
const roloscompactadoresProducts = [
  {
    id: 1,
    name: `${t('jcb.rolos.name')} | JCB 116D`,
    category: t('page.equipos.jcb.categories4'),
    description: t('jcb.rolos.desc1'),
    image: "/imagenes/equipment/jcb/roloscompactadores/116.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Compactadores/116D.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.rolos.name')} | VM75/166/200`,
    category: t('page.equipos.jcb.categories4'),
    description: t('jcb.rolos.desc2'),
    image: "/imagenes/equipment/jcb/roloscompactadores/75.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Compactadores/VM75-VM166-VM200"
  },
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={roloscompactadoresProducts}
    categoryTitle={t('jcb.rolos.categoryTitle')}
    categoryDescription={t('jcb.rolos.categoryDescription')}
  />;
};

export default RoloscompactadoresPage;