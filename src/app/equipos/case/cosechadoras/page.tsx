"use client"
import ProductLinesPage from "@/components/equipo/ProductLinesPage";
import { useTranslation } from "react-i18next";

const CosechadorasPage = () => {
  const { t } = useTranslation();
const cosechadoraLines = [
  {
    id: 'Cosechadora de Caña',
    name: t('case.cosechadoras.line1.name'),
    description: t('case.cosechadoras.description1'),
    image: '/imagenes/equipment/case/lines/cosechadora/cosechadoracaña.webp',
    href: '/equipos/case/cosechadoras/cosechadoracana'
  },
  {
    id: 'Axial',
    name: t('case.cosechadoras.line2.name'),
    description: t('case.cosechadoras.description2'),
    image: '/imagenes/equipment/case/lines/cosechadora/axialflow.webp',
    href: '/equipos/case/cosechadoras/axial'
  },
  {
    id: 'Arrocera',
    name: t('case.cosechadoras.line3.name'),
    description: t('case.cosechadoras.description3'),
    image: '/imagenes/equipment/case/lines/cosechadora/arrocera.webp',
    href: '/equipos/case/cosechadoras/arrocera'
  },
  {
    id: 'Plataformas de Granos',
    name: t('case.cosechadoras.line4.name'),
   description: t('case.cosechadoras.description4'),
    image: '/imagenes/equipment/case/lines/cosechadora/plataformadegranos.webp',
    href: '/equipos/case/cosechadoras/plataformadegranos'
  },
]


  return (
    <ProductLinesPage 
      brand="Case" 
      category={t('case.cosechadoras.categoryTitles')}
      lines={cosechadoraLines} 
    />
  );
};

export default CosechadorasPage;
