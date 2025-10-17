// app/equipos/case/tractores/page.tsx
"use client"
import ProductLinesPage from '@/components/equipo/ProductLinesPage';
import { useTranslation } from "react-i18next";

const CaseTractorsPage = () => {
  const { t } = useTranslation();
const tractorLines = [
  {
    id: 'farmall',
    name: 'Farmall',
    description: t('case.tractores.type1.desc'),
    image: '/imagenes/equipment/case/lines/tractores/farmall-line.webp',
    href: '/equipos/case/tractores/farmall'
  },
  {
    id: 'quantum',
    name: 'Quantum',
    description: 'La línea Quantum está diseñada específicamente para trabajos en viñedos y frutales, con un diseño compacto y gran maniobrabilidad.',
    image: '/imagenes/equipment/case/lines/tractores/quantum-line.webp',
    href: '/equipos/case/tractores/quantum'
  },
  {
    id: 'puma',
    name: 'Puma',
    description: 'Los tractores Puma ofrecen la combinación perfecta de potencia y precisión para operaciones agrícolas de mediana y gran escala.',
    image: '/imagenes/equipment/case/lines/tractores/puma-line.webp',
    href: '/equipos/case/tractores/puma'
  },
  {
    id: 'steiger',
    name: 'Steiger',
    description: 'Potencia y robustez definen a la línea Steiger, diseñada para las operaciones más demandantes y de gran escala.',
    image: '/imagenes/equipment/case/lines/tractores/steiger-line.webp',
    href: '/equipos/case/tractores/steiger'
  },
  {
    id: 'magnum',
    name: 'Magnum AFS Connect',
    description: 'La línea Magnum AFS Connect combina potencia superior con tecnología de punta para una agricultura de precisión.',
    image: '/imagenes/equipment/case/lines/tractores/magnum-line.webp',
    href: '/equipos/case/tractores/magnum'
  },
  {
    id: 'quadtrac',
    name: 'Quadtrac AFS Connect',
    description: 'Los tractores Quadtrac AFS Connect ofrecen máxima tracción y mínima compactación del suelo con tecnología avanzada.',
    image: '/imagenes/equipment/case/lines/tractores/quadtrac-line.webp',
    href: '/equipos/case/tractores/quadtrac'
  }
];


  
  return <ProductLinesPage 
    brand="Case"
    category={t('case.tractores.category')}
    lines={tractorLines}
  />;
};

export default CaseTractorsPage;