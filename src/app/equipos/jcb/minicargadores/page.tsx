// app/equipos/jcb/retroexcavadoras/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const MinicargadoresPage = () => {
const { t } = useTranslation();
const minicargadoresProducts = [
  {
    id: 1,
    name: `${t('jcb.minic.name')} | 135`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc1'),
    image: "/imagenes/equipment/jcb/minicargadores/135.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.minic.name')} | 155`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc2'),
    image: "/imagenes/equipment/jcb/minicargadores/155.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 3,
    name: `${t('jcb.minic.name')} | 175`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc3'),
    image: "/imagenes/equipment/jcb/minicargadores/175.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 4,
    name: `${t('jcb.minic.name')} | 190`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc4'),
    image: "/imagenes/equipment/jcb/minicargadores/190.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 5,
    name: `${t('jcb.minic.name')} | 205`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc5'),
    image: "/imagenes/equipment/jcb/minicargadores/205.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 6,
    name: `${t('jcb.minic.name')} | 270`,
    category: t('page.equipos.jcb.categories3'),
    description: t('jcb.minic.desc6'),
    image: "/imagenes/equipment/jcb/minicargadores/270.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={minicargadoresProducts}
    categoryTitle={t('jcb.minic.categoryTitle')}
    categoryDescription={t('jcb.minic.categoryDescription')}
  />;
};

export default MinicargadoresPage;