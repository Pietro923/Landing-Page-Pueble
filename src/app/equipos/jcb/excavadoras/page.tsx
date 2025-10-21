// app/equipos/jcb/retroexcavadoras/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const ExcavadorasPage = () => {
const { t } = useTranslation();
const excavadorasProducts = [
  {
    id: 1,
    name: `${t('jcb.excavadora.name')} | 8008 CTS`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc1'),
    image: "/imagenes/equipment/jcb/excavadora/8008.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/8008.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.excavadora.name')} | 8025 ZTS`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc2'),
    image: "/imagenes/equipment/jcb/excavadora/8025.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/8025.pdf"
  },
  {
    id: 3,
    name: `${t('jcb.excavadora.name')} | 8026 CTS`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc3'),
    image: "/imagenes/equipment/jcb/excavadora/8026.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/8025.pdf"
  },
  {
    id: 4,
    name: `${t('jcb.excavadora.name')} | JS145W`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc4'),
    image: "/imagenes/equipment/jcb/excavadora/145.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS145W-JS160W.pdf"
  },
  {
    id: 5,
    name: `${t('jcb.excavadora.name')} | JS160W`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc5'),
    image: "/imagenes/equipment/jcb/excavadora/160.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS145W-JS160W.pdf"
  },
  {
    id: 6,
    name: `${t('jcb.excavadora.name')} | JS175W`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc6'),
    image: "/imagenes/equipment/jcb/excavadora/175.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS175W.pdf"
  },
  {
    id: 7,
    name: `${t('jcb.excavadora.name')} | JS200W`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc7'),
    image: "/imagenes/equipment/jcb/excavadora/200.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS200W.pdf"
  },
  {
    id: 8,
    name: `${t('jcb.excavadora.name')} | JS20MH`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc8'),
    image: "/imagenes/equipment/jcb/excavadora/20.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS20MH.pdf"
  },
  {
    id: 9,
    name: `${t('jcb.excavadora.name')} | JS130LC`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc9'),
    image: "/imagenes/equipment/jcb/excavadora/130.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS130LC.pdf"
  },
  {
    id: 10,
    name: `${t('jcb.excavadora.name')} | 205 NXT`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc10'),
    image: "/imagenes/equipment/jcb/excavadora/205.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/205NXT.pdf"
  },
  {
    id: 11,
    name: `${t('jcb.excavadora.name')} | JS220`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc11'),
    image: "/imagenes/equipment/jcb/excavadora/220.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS220.pdf"
  },
  {
    id: 12,
    name: `${t('jcb.excavadora.name')} | JS300`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc12'),
    image: "/imagenes/equipment/jcb/excavadora/300.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS300.pdf"
  },
  {
    id: 13,
    name: `${t('jcb.excavadora.name')} | JS370`,
    category: t('page.equipos.jcb.categories1'),
    description: t('jcb.excavadora.desc13'),
    image: "/imagenes/equipment/jcb/excavadora/370.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Excavadoras/JS370.pdf"
  },
  
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={excavadorasProducts}
    categoryTitle={t('jcb.excavadora.categoryTitle')}
    categoryDescription={t('jcb.excavadora.categoryDescription')}
  />;
};

export default ExcavadorasPage;