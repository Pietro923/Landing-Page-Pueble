// app/equipos/jcb/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const jcbProducts = [
  {
    id: 1,
    name: "Retroexcavadora 3CX",
    category: "Retroexcavadoras",
    description: "La retroexcavadora 3CX está diseñada para proveer un óptimo retorno de la inversión a través de una amplia gama de aplicaciones.",
    image: "/imagenes/equipment/jcb/3cx.jpg",
    specs: {
      power: "109 HP",
      weight: "8,070 kg",
      capacity: "1,000 kg"
    },
    pdfUrl: "https://www.semtraco.com.ar/frontend/pdf/semtraco_JCB_general.pdf"
  },
  {
    id: 2,
    name: "Manipulador Telescópico 540-170",
    category: "Manipuladores",
    description: "El manipulador telescópico JCB 540-170 de 4 fases con motor Dieselmax tiene un gran alcance y carga útil para ofrecer una productividad y unos tiempos de ciclo excepcionales.",
    image: "/imagenes/equipment/jcb/540-170.jpg",
    specs: {
      power: "125 HP",
      weight: "12,060 kg",
      capacity: "4,000 kg"
    },
    pdfUrl: "https://www.semtraco.com.ar/frontend/pdf/semtraco_JCB_general.pdf"
  },
  // Agrega más productos JCB aquí
];

const JCBPage = () => {
  return <EquipmentBrandPage brand="JCB" products={jcbProducts} />;
};

export default JCBPage;