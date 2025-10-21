// app/equipos/case/case/agricultura-precision/pantallas.tsx'
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const pantallasLinePage = () => {
const { t } = useTranslation();
const pantallasproducts = [
  {
    id: 1,
    name: "Pro 700",
    category: t('page.equipos.case.categories5'),
    description: t('case.pantalla.desc1'),
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/pro700.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "XCN-1050",
    category: t('page.equipos.case.categories5'),
    description: t('case.pantalla.desc2'),
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/xcn.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "FM-750",
    category: t('page.equipos.case.categories5'),
    description: t('case.pantalla.desc3'),
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/fm.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 4,
    name: "XCN-2050",
    category: t('page.equipos.case.categories5'),
    description: t('case.pantalla.desc4'),
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/xcn2050.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  
]; 


  return (
    <EquipmentBrandPage
      brand="Case"
      products={pantallasproducts}
      categoryTitle={t('case.pantalla.categoryTitle')}
      categoryDescription={t('case.pantalla.categoryDescription')}
    />
  );
};

export default pantallasLinePage;
