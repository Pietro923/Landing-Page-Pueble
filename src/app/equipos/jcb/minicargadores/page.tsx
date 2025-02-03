// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const minicargadoresProducts = [
  {
    id: 1,
    name: "135",
    category: "Mini Cargadores",
    description: "El minicargador de elevación radial JCB 135 con plataforma pequeña tiene una capacidad nominal operativa de 612 kg y cabina con acceso lateral. el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/135.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 2,
    name: "155",
    category: "Mini Cargadores",
    description: "El minicargador de elevación radial JCB 155 genera 44.7 kW de potencia, tiene una capacidad nominal operativa de 703 kg y ofrece un alto nivel de seguridad y productividad, lo que lo convierte en el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/155.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 3,
    name: "190",
    category: "Mini Cargadores",
    description: "El nuevo minicargador JCB 190 de plataforma pequeña ,elevación vertical, y 862 kg de capacidad operativa nominal, incorpora nuestro exclusivo diseño de pluma única y entrada lateral.",
    image: "/imagenes/equipment/jcb/minicargadores/190.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 4,
    name: "205",
    category: "Mini Cargadores",
    description: "El nuevo cargador de elevación vertical JCB 205 es el mayor de nuestros minicargadores de plataforma pequeña; tiene una capacidad nominal operativa de 930 kg y una potencia de 44.7 kW. el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/205.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 5,
    name: "270",
    category: "Mini Cargadores",
    description: "El minicargador 270 de plataforma grande Hi-Viz, es una máquina de elevación vertical con un motor JCB DieselMAX de 48,3 kW y una capacidad operativa nominal de 1235 kg.",
    image: "/imagenes/equipment/jcb/minicargadores/270.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
];

const minicargadoresPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={minicargadoresProducts}
    categoryTitle="Mini Cargadores JCB"
    categoryDescription="Explore nuestra gama de Mini Cargadores JCB, líderes mundiales en su categoría."
  />;
};

export default minicargadoresPage;