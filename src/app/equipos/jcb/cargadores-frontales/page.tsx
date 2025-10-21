"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from "react-i18next";

const CargadoresPage = () => {
const { t } = useTranslation();
const cargadoresProducts = [
  {
    id: 1,
    name: `${t('jcb.cargador.name')} | 406`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc1'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/406.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/406.pdf"
  },
  {
    id: 2,
    name: `${t('jcb.cargador.name')} | 422ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc2'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/422.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/422ZX.pdf"
  },
  {
    id: 3,
    name: `${t('jcb.cargador.name')} | 426`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc3'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/426.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/426.pdf"
  },
  {
    id: 4,
    name: `${t('jcb.cargador.name')} | 427ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc4'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/427.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/437ZX.pdf"
  },
  {
    id: 5,
    name: `${t('jcb.cargador.name')} | 436`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc5'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/436.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/426.pdf"
  },
  {
    id: 6,
    name: `${t('jcb.cargador.name')} | 437ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc6'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/437.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/437ZX.pdf"
  },
  {
    id: 7,
    name: `${t('jcb.cargador.name')} | 455ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc7'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/455.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/455ZX.pdf"
  },
  {
    id: 8,
    name: `${t('jcb.cargador.name')} | 456ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc8'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/456.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/456.pdf"
  },
  {
    id: 9,
    name: `${t('jcb.cargador.name')} | 467ZX`,
    category: t('page.equipos.jcb.categories2'),
    description: t('jcb.cargador.desc9'),
    image: "/imagenes/equipment/jcb/cargadores-frontales/467.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/467ZX.pdf"
  },
];


  return <EquipmentBrandPage 
    brand="JCB" 
    products={cargadoresProducts}
    categoryTitle={t('jcb.cargador.categoryTitle')}
    categoryDescription={t('jcb.cargador.categoryDescription')}
  />;
};

export default CargadoresPage;