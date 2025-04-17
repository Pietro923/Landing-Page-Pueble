// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const retroProducts = [
  {
    id: 1,
    name: "Retroexcavadora 1CX",
    category: "Retroexcavadoras",
    description: "La ligera JCB 1CX es la retroexcavadora más pequeña de nuestra gama. Su huella compacta y estrecha la hace increíblemente versátil y le permite trabajar en los lugares más angostos.",
    image: "/imagenes/equipment/jcb/retroexcavadora/1cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 2,
    name: "Retroexcavadora 3CX",
    category: "Retroexcavadoras",
    description: "La retroexcavadora 3CX está diseñada para proveer un óptimo retorno de la inversión a través de una amplia gama de aplicaciones.",
    image: "/imagenes/equipment/jcb/retroexcavadora/3cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 3,
    name: "Retroexcavadora 4CX",
    category: "Retroexcavadoras",
    description: "La retroexcavadora JCB 4CX es el modelo más grande de nuestra gama, y ofrece un balde con capacidad de 1 m3 y 1.3 m3 opcional, 3 modos de dirección y nuestro potente motor Dieselmax de 74.2 kW.",
    image: "/imagenes/equipment/jcb/retroexcavadora/4cx.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
];

const retroexcavadorasPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={retroProducts}
    categoryTitle="Retroexcavadoras JCB"
    categoryDescription="Explore nuestra gama de retroexcavadoras JCB, líderes mundiales en su categoría."
  />;
};

export default retroexcavadorasPage;