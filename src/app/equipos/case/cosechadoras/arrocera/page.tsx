// app/equipos/case/cosechadoras/arrocera/page.tsx
"use client"
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';
import { useTranslation } from 'react-i18next';

const arroceraLinePage = () => {
const { t } = useTranslation();
const arroceraproducts = [
  {
    id: 1,
    name: "Arrocera 5130 RI",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.arrocera.desc1'),
    image: "/imagenes/equipment/case/cosechadoras/arrocera/arrocera7130.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "Arrocera 7130 RI",
    category: t('page.equipos.case.categories2'),
    description: t('case.cosechadora.arrocera.desc2'),
    image: "/imagenes/equipment/case/cosechadoras/arrocera/arrocera5130.webp",
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
      products={arroceraproducts}
      categoryTitle={t('case.cosechadora.arrocera.categoryTitle')}
      categoryDescription={t('case.cosechadora.arrocera.categoryDescription')}
    />
  );
};

export default arroceraLinePage;
