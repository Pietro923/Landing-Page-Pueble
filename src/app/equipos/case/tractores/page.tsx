// app/equipos/case/tractores/page.tsx
import ProductLinesPage from '@/components/equipo/ProductLinesPage';

const tractorLines = [
  {
    id: 'farmall',
    name: 'Farmall',
    description: 'Los tractores Farmall son versátiles y confiables, ideales para una amplia gama de aplicaciones agrícolas. Combinan potencia y maniobrabilidad con eficiencia en el consumo de combustible.',
    image: '/imagenes/equipment/case/lines/farmall-line.jpg',
    href: '/equipos/case/tractores/farmall'
  },
  {
    id: 'quantum',
    name: 'Quantum',
    description: 'La línea Quantum está diseñada específicamente para trabajos en viñedos y frutales, con un diseño compacto y gran maniobrabilidad.',
    image: '/imagenes/equipment/case/lines/quantum-line.jpg',
    href: '/equipos/case/tractores/quantum'
  },
  {
    id: 'puma',
    name: 'Puma',
    description: 'Los tractores Puma ofrecen la combinación perfecta de potencia y precisión para operaciones agrícolas de mediana y gran escala.',
    image: '/imagenes/equipment/case/lines/puma-line.jpg',
    href: '/equipos/case/tractores/puma'
  },
  {
    id: 'steiger',
    name: 'Steiger',
    description: 'Potencia y robustez definen a la línea Steiger, diseñada para las operaciones más demandantes y de gran escala.',
    image: '/imagenes/equipment/case/lines/steiger-line.jpg',
    href: '/equipos/case/tractores/steiger'
  },
  {
    id: 'magnum',
    name: 'Magnum AFS Connect',
    description: 'La línea Magnum AFS Connect combina potencia superior con tecnología de punta para una agricultura de precisión.',
    image: '/imagenes/equipment/case/lines/magnum-line.jpg',
    href: '/equipos/case/tractores/magnum'
  },
  {
    id: 'quadtrac',
    name: 'Quadtrac AFS Connect',
    description: 'Los tractores Quadtrac AFS Connect ofrecen máxima tracción y mínima compactación del suelo con tecnología avanzada.',
    image: '/imagenes/equipment/case/lines/quadtrac-line.jpg',
    href: '/equipos/case/tractores/quadtrac'
  }
];

const CaseTractorsPage = () => {
  return <ProductLinesPage 
    brand="Case"
    category="Tractores"
    lines={tractorLines}
  />;
};

export default CaseTractorsPage;