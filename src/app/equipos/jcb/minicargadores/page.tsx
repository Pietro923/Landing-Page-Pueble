// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const minicargadoresProducts = [
  {
    id: 1,
    name: "135",
    category: "Mini Cargadores",
    description: "El minicargador de elevación radial JCB 135 con plataforma pequeña tiene una capacidad nominal operativa de 612 kg y cabina con acceso lateral. el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/135.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 2,
    name: "155",
    category: "Mini Cargadores",
    description: "El minicargador de elevación radial JCB 155 genera 44.7 kW de potencia, tiene una capacidad nominal operativa de 703 kg y ofrece un alto nivel de seguridad y productividad, lo que lo convierte en el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/155.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 3,
    name: "175",
    category: "Mini Cargadores",
    description: "El minicargador JCB 175, de elevación vertical, y plataforma pequeña tiene una capacidad nominal operativa de 794 kg e incorpora un exclusivo brazo único y cabina con acceso lateral. El motor Perkins de 54,4 Hp que posee este minicargador ofrece excelente desempeño",
    image: "/imagenes/equipment/jcb/minicargadores/175.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 4,
    name: "190",
    category: "Mini Cargadores",
    description: "El nuevo minicargador JCB 190 de plataforma pequeña ,elevación vertical, y 862 kg de capacidad operativa nominal, incorpora nuestro exclusivo diseño de pluma única y entrada lateral.",
    image: "/imagenes/equipment/jcb/minicargadores/190.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 5,
    name: "205",
    category: "Mini Cargadores",
    description: "El nuevo cargador de elevación vertical JCB 205 es el mayor de nuestros minicargadores de plataforma pequeña; tiene una capacidad nominal operativa de 930 kg y una potencia de 44.7 kW. el minicargador más seguro de la industria.",
    image: "/imagenes/equipment/jcb/minicargadores/205.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
  },
  {
    id: 6,
    name: "270",
    category: "Mini Cargadores",
    description: "El minicargador 270 de plataforma grande Hi-Viz, es una máquina de elevación vertical con un motor JCB DieselMAX de 48,3 kW y una capacidad operativa nominal de 1235 kg.",
    image: "/imagenes/equipment/jcb/minicargadores/270.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Minicargadores/SSL-Folleto-Gama-Completa-Espanol-Latam-LR.pdf"
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