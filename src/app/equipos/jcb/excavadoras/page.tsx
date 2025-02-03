// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const excavadorasProducts = [
  {
    id: 1,
    name: "8008 CTS",
    category: "Excavadoras",
    description: "Con solo 875 kg, la microexcavadora JCB 8008 CTS es la incorporación más pequeña de la gama. Incorpora un motor de primera clase de 9 kW y un bastidor inferior extensible.",
    image: "/imagenes/equipment/jcb/excavadora/8008.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 2,
    name: "8025 ZTS",
    category: "Excavadoras",
    description: "La miniexcavadora JCB 8025 ZTS cuenta con un motor Perkins de 20.9 kW y 1.5 litros y un motor de orugas de dos velocidades.",
    image: "/imagenes/equipment/jcb/excavadora/8025.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 3,
    name: "8026 CTS",
    category: "Excavadoras",
    description: "La novedosa miniexcavadora 8026 CTS es la primera miniexcavadora de cola convencional de JCB dentro de la categoría de 2.5 a 3.5 toneladas que se puede remolcar con un vehículo de 3.5 toneladas.",
    image: "/imagenes/equipment/jcb/excavadora/8026.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 4,
    name: "JS145W",
    category: "Excavadoras",
    description: "La excavadora de ruedas JS145W es el modelo de 14.5 toneladas dentro de nuestra gama. El sistema hidráulico avanzado y el motor Dieselmax proporcionan potencia, ahorro de combustible y productividad.",
    image: "/imagenes/equipment/jcb/excavadora/145.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 5,
    name: "JS160W",
    category: "Excavadoras",
    description: "La JS160W es el modelo de 17 toneladas en nuestra gama de excavadoras de ruedas. Un diseño hidráulico avanzado y un motor Dieselmax proporcionan ahorro de combustible, productividad y una larga vida útil.",
    image: "/imagenes/equipment/jcb/excavadora/160.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 6,
    name: "JS175W",
    category: "Excavadoras",
    description: "La excavadora de ruedas JS175W es el modelo de 17.5 toneladas dentro de nuestra gama. El sistema hidráulico avanzado y el motor Isuzu proporcionan potencia, ahorro de combustible y productividad.",
    image: "/imagenes/equipment/jcb/excavadora/175.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 7,
    name: "JS200W",
    category: "Excavadoras",
    description: "La excavadora de ruedas JS200W es el modelo de 22 toneladas de nuestra gama. El sistema hidráulico avanzado y el motor Isuzu proporcionan potencia, ahorro de combustible y productividad.",
    image: "/imagenes/equipment/jcb/excavadora/200.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 8,
    name: "JS20MH",
    category: "Excavadoras",
    description: "El JCB JS20MH es un manipulador de materiales sobre ruedas diseñado para proporcionar la mayor productividad, eficiencia y rendimiento para su inversión, a la vez que protege rigurosamente a los operadores y transeúntes por igual.",
    image: "/imagenes/equipment/jcb/excavadora/20.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 9,
    name: "JS130LC",
    category: "Excavadoras",
    description: "La JS130 LC es una excavadora de orugas de 13 toneladas que ha sido diseñada, probada y fabricada sin condicionamientos. En su corazón está el nuevo motor JCB EcoMAX, la última palabra en eficiencia, rendimiento y productividad.",
    image: "/imagenes/equipment/jcb/excavadora/130.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 10,
    name: "205 NXT",
    category: "Excavadoras",
    description: "Descubra el nivel NXT de eficiencia con JCB 205 NXT",
    image: "/imagenes/equipment/jcb/excavadora/205.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 11,
    name: "JS220",
    category: "Excavadoras",
    description: "La JS220 es una excavadora de orugas de 22 toneladas que ha sido diseñada, probada y fabricada sin condicionamientos. En su corazón está el nuevo motor JCB DieselMAX, la última palabra en eficiencia, rendimiento y productividad.",
    image: "/imagenes/equipment/jcb/excavadora/220.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 12,
    name: "JS300",
    category: "Excavadoras",
    description: "La JCB JS300 está en el extremo superior de nuestra gama de excavadoras pesadas. Con un peso aproximado de 30 toneladas, está diseñada con una excepcional fuerza, productividad, eficiencia, confort, seguridad y facilidad de mantenimiento.",
    image: "/imagenes/equipment/jcb/excavadora/300.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  {
    id: 13,
    name: "JS370",
    category: "Excavadoras",
    description: "La más grande de nuestras excavadoras sobre orugas, la JCB JS370 de 37 toneladas, ofrece ahorros sustanciales de combustible en comparación con los modelos anteriores.",
    image: "/imagenes/equipment/jcb/excavadora/370.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Pueble_JCB_general.pdf"
  },
  
];

const excavadorasPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={excavadorasProducts}
    categoryTitle="Excavadoras JCB"
    categoryDescription="Explore nuestra gama de Excavadoras, líderes mundiales en su categoría."
  />;
};

export default excavadorasPage;