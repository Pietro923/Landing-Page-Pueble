import ProductLinesPage from "@/components/equipo/ProductLinesPage";

const cosechadoraLines = [
  {
    id: 'Cosechadora de Caña',
    name: 'Cosechadora de Caña',
    description: 'Las cosechadoras Austoft de Case IH aumentan la calidad y productividad de tu cosecha mecanizada de caña de azúcar. Su potente motor asociado a un sistema hidráulico inteligente, te brinda una mayor capacidad de trabajo con el menor costo operativo. Cuenta con las más modernas tecnologías, como AFS Autopilot y el nuevo sistema de telemetría con conectividad 4G. Todo esto para mejorar la productividad de tu explotación de caña.',
    image: '/imagenes/equipment/case/lines/cosechadora/cosechadoracaña.webp',
    href: '/equipos/case/cosechadoras/cosechadoracana'
  },
  {
    id: 'Axial',
    name: 'Axial-Flow',
    description: 'Case IH ha diseñado, creado y desarrollado el mejor sistema de cosecha del mundo. Sus cosechadoras son reconocidas por el gran rendimiento, la calidad superior de los granos y la excelente productividad en todas las condiciones. Diseñadas para aquellos que exigen más, las cosechadoras Case IH son referencia. Conozca los detalles en las páginas de los productos.',
    image: '/imagenes/equipment/case/lines/cosechadora/axialflow.webp',
    href: '/equipos/case/cosechadoras/axial'
  },
  {
    id: 'Arrocera',
    name: 'Arrocera',
    description: 'Con la cosechadoras Axial-Flow es posible realizar una cosecha mucho más fácil, independientemente de la condición en campo. Destaca para la simplicidad en la descarga del tanque granelero, debido a las nuevas longitudes del tubo de descarga, siendo 32 segundos más rápido frente al principal competidor. La Mesa de Sinfines también puede alcanzar hasta un 26% más de capacidad de transporte y distribución del material cosechado.',
    image: '/imagenes/equipment/case/lines/cosechadora/arrocera.webp',
    href: '/equipos/case/cosechadoras/arrocera'
  },
  {
    id: 'Plataformas de Granos',
    name: 'Plataformas de Granos',
    description: 'MAYOR ALIMENTACIÓN, MEJOR DESEMPEÑO. Las plataformas de granos Case IH poseen comprobado histórico de excelente desempeño en innumerables tipos de cosecha y en diferentes condiciones. Las mismas vienen con enganche rápido - hidráulico y eléctrico - además de dedos retráctiles en toda la extensión del sinfín, lo que promueve una alimentación continua y uniforme.',
    image: '/imagenes/equipment/case/lines/cosechadora/plataformadegranos.webp',
    href: '/equipos/case/cosechadoras/plataformadegranos'
  },
]

const CosechadorasPage = () => {
  return (
    <ProductLinesPage 
      brand="Case" 
      category="Cosechadoras" 
      lines={cosechadoraLines} 
    />
  );
};

export default CosechadorasPage;
