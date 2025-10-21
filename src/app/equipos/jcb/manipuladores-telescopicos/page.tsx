// app/equipos/jcb/retroexcavadoras/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const ManipuladorestelescopicosPage = () => {
    const { t } = useTranslation();
const manipuladorestelescopicosProducts = [
  {
    id: 1,
    name: `${t('jcb.mani.name')} | 530-70`,
    category: t('page.equipos.jcb.categories6'),
    description: t('jcb.mani.desc1'),
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/530.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/530-70.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.mani.name')} | 531-70`,
    category: t('page.equipos.jcb.categories6'),
    description: t('jcb.mani.desc2'),
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/531.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 3,
    name: `${t('jcb.mani.name')} | 535-125`,
    category: t('page.equipos.jcb.categories6'),
    description: t('jcb.mani.desc3'),
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/535.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 4,
    name: `${t('jcb.mani.name')} | 540-170`,
    category: t('page.equipos.jcb.categories6'),
    description: t('jcb.mani.desc4'),
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/540.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 5,
    name: `${t('jcb.mani.name')} | 541-70`,
    category: t('page.equipos.jcb.categories6'),
    description: t('jcb.mani.desc5'),
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/541.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={manipuladorestelescopicosProducts}
    categoryTitle={t('jcb.mani.categoryTitle')}
    categoryDescription={t('jcb.mani.categoryDescription')}
  />;
};

export default ManipuladorestelescopicosPage;