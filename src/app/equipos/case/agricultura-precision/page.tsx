"use client"
import ProductLinesPage from "@/components/equipo/ProductLinesPage";
import { useTranslation } from 'react-i18next';

const AgriculturaPrecisionPage = () => {
const { t } = useTranslation();
const agriculturaypreciosionline= [
  {
    id: 'AFS Connect',
    name: 'AFS Connect',
    description: t('case.agricul.equipos.desc1'),
    image: '/imagenes/equipment/case/lines/agriculturayprecision/afsc.webp',
    href: '/equipos/case/agricultura-precision/afsc'
  },
  {
    id: 'Pantallas',
    name: t('case.agricul.equipos.name'),
    description: t('case.agricul.equipos.desc2'),
    image: '/imagenes/equipment/case/lines/agriculturayprecision/pantallas.webp',
    href: '/equipos/case/agricultura-precision/pantallas'
  },
]


  return (
    <ProductLinesPage 
      brand="Case" 
      category={t('case.agricul.equipos.category')}
      lines={agriculturaypreciosionline} 
    />
  );
};

export default AgriculturaPrecisionPage;
