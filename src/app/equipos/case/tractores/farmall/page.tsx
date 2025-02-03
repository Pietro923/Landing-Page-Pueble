// app/equipos/case/tractores/farmall/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const farmallProducts = [
  {
    id: 1,
    name: "Farmall M",
    category: "Tractores",
    description: "Los tractores Farmall® M ActiveDrive 4 de Case IH ofrecen un paquete único en el que cada detalle ha sido meticulosamente diseñado, con características superiores e innovaciones diseñadas para satisfacer las necesidades futuras.",
    image: "/imagenes/equipment/case/tractores/farmallM.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_M_2022.pdf"
  },
  {
    id: 2,
    name: "Farmall 80",
    category: "Tractores",
    description: "Los tractores Farmall tienen un rendimiento inigualable en cualquier actividad. Con un sistema hidráulico de alta capacidad, ofrecen la máxima flexibilidad en las operaciones.",
    image: "/imagenes/equipment/case/tractores/farmall80.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "Farmall 90JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall90.jpg",
    specs: {
      power: "90 cv (66 kW)",
      weight: "3,750 kg", // Cilindrada: 3,9 L
      capacity: "2,300 kg" // Transmisión: 12 de avance y 12 de retroceso
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC-FARMALL-90JX-100JX-110JX.pdf"
  },
  {
    id: 4,
    name: "Farmall 100JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall100.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC-FARMALL-90JX-100JX-110JX.pdf"
  },
  {
    id: 5,
    name: "Farmall 110JX",
    category: "Tractores",
    description: "La alta tecnología y la confiabilidad que sólo la marca Case IH ofrece llegan a los tractores de baja potencia. La línea Farmall es reconocida mundialmente por la robustez, simplicidad de operación y flexibilidad de uso.",
    image: "/imagenes/equipment/case/tractores/farmall110.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC-FARMALL-90JX-100JX-110JX.pdf"
  },
  {
    id: 6,
    name: "Farmall JXM55",
    category: "Tractores",
    description: "Los nuevos tractores Case IH Farmall Serie JXM suministran la potencia y el rendimiento que sus dueños esperan, con el diseño de primera calidad distintivo de Case IH.",
    image: "/imagenes/equipment/case/tractores/farmall55.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_SERIE_JXM-EO.pdf"
  },
  {
    id: 7,
    name: "Farmall JXM 75",
    category: "Tractores",
    description: "Los nuevos tractores Case IH Farmall Serie JXM se ajustan a la demanda de equipos robustos pero cómodos y fáciles de operar. Los modelos vienen en una versión 2WD o 4WD y cuentan con opciones de transmisión",
    image: "/imagenes/equipment/case/tractores/farmall-jxm.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg", // hay que cambiar esto por: Cilindrada: 2,9 L
      capacity: "2,300 kg" // hay que cambiar esto por: Transmisión: 12 x 12
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_SERIE_JXM-EO.pdf"
  },
  {
    id: 8,
    name: "Farmall 120A",
    category: "Tractores",
    description: "Los tractores Farmall son la mejor opción para las economías regionales y con los años, se han ido renovando. Tienen un rendimiento inigualable en cualquier actividad.",
    image: "/imagenes/equipment/case/tractores/farmall120.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_120A_Y_130A.pdf"
  },
  {
    id: 9,
    name: "Farmall 130A",
    category: "Tractores",
    description: "Toda la potencia que necesita, ya sea en la agricultura o la ganadería, la puede encontrar en Farmall 130A.",
    image: "/imagenes/equipment/case/tractores/farmall130.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_120A_Y_130A.pdf"
  },
  {
    id: 10,
    name: "Farmall 80 con pala",
    category: "Tractores",
    description: "Los tractores Farmall tienen un rendimiento inigualable en cualquier actividad. Con un sistema hidráulico de alta capacidad, ofrecen la máxima flexibilidad en las operaciones.",
    image: "/imagenes/equipment/case/tractores/farmall80conpala.jpeg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_SERIE_JXM-EO.pdf"
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