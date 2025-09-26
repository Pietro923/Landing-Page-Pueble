// app/equipos/case/tractores/farmall/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const farmallProducts = [
  {
    id: 1,
    name: "Farmall M",
    category: "Tractores",
    description: "Los tractores Farmall® M ActiveDrive 4 de Case IH ofrecen un paquete único en el que cada detalle ha sido meticulosamente diseñado, con características superiores e innovaciones diseñadas para satisfacer las necesidades futuras.",
    image: "/imagenes/equipment/case/tractores/farmall/farmallM.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/36d4df9a7ed84dcf8e4d461fbff0459a?v=0ec944a0"
  },
  {
    id: 2,
    name: "Farmall 80",
    category: "Tractores",
    description: "Los tractores Farmall tienen un rendimiento inigualable en cualquier actividad. Con un sistema hidráulico de alta capacidad, ofrecen la máxima flexibilidad en las operaciones.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall80.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7c55d0a8924f41f69b72bd6462ceacf0?v=41eb35d5"
  },
  {
    id: 3,
    name: "Farmall 90JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall90.webp",
    specs: {
      power: "90 cv (66 kW)",
      weight: "", // Cilindrada: 3,9 L
      capacity: "" // Transmisión: 12 de avance y 12 de retroceso
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 4,
    name: "Farmall 100JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall100.webp",
    specs: {
      power: "100 cv (74 kW)",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 5,
    name: "Farmall 110JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall110.webp",
    specs: {
      power: "110 cv (81 kW)",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7177f984e44147ba814da6d98588d0cd?v=9e20959a"
  },
  {
    id: 6,
    name: "Farmall JXM55",
    category: "Tractores",
    description: "Los nuevos tractores Case IH Farmall Serie JXM suministran la potencia y el rendimiento que sus dueños esperan, con el diseño de primera calidad distintivo de Case IH.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall55.webp",
    specs: {
      power: "55 HP",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/283f908d19a848fd859eac6a5234afa7?v=3abefaf3"
  },
  {
    id: 7,
    name: "Farmall JXM 75",
    category: "Tractores",
    description: "Los nuevos tractores Case IH Farmall Serie JXM se ajustan a la demanda de equipos robustos pero cómodos y fáciles de operar. Los modelos vienen en una versión 2WD o 4WD y cuentan con opciones de transmisión",
    image: "/imagenes/equipment/case/tractores/farmall/farmall-jxm.webp",
    specs: {
      power: "75 HP",
      weight: "", // hay que cambiar esto por: Cilindrada: 2,9 L
      capacity: "" // hay que cambiar esto por: Transmisión: 12 x 12
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/283f908d19a848fd859eac6a5234afa7?v=3abefaf3"
  },
  {
    id: 8,
    name: "Farmall 120A",
    category: "Tractores",
    description: "Los tractores Farmall son la mejor opción para las economías regionales y con los años, se han ido renovando. Tienen un rendimiento inigualable en cualquier actividad.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall120.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d98d9a0d86564fa9b1d0d38e81262082?v=0b791210"
  },
  {
    id: 9,
    name: "Farmall 130A",
    category: "Tractores",
    description: "Toda la potencia que necesita, ya sea en la agricultura o la ganadería, la puede encontrar en Farmall 130A.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall130.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d98d9a0d86564fa9b1d0d38e81262082?v=0b791210"
  },
  {
    id: 10,
    name: "Farmall 80 con pala",
    category: "Tractores",
    description: "Los tractores Farmall tienen un rendimiento inigualable en cualquier actividad. Con un sistema hidráulico de alta capacidad, ofrecen la máxima flexibilidad en las operaciones.",
    image: "/imagenes/equipment/case/tractores/farmall/farmall80conpala.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7c55d0a8924f41f69b72bd6462ceacf0?v=41eb35d5"
  },
];

const FarmallLinePage = () => {
  return <EquipmentBrandPage 
    brand="Case"
    products={farmallProducts}
    categoryTitle="Línea Farmall"
    categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Farmall."
  />;
};

export default FarmallLinePage;