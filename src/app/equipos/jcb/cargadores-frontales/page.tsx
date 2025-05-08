import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const cargadoresProducts = [
  {
    id: 1,
    name: "406",
    category: "Cargadores Frontales",
    description: "La JCB 406 es una cargadora de ruedas compacta altamente productiva con una relación óptima de potencia a peso, lo que la convierte en una portadora de herramientas perfecta.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/406.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/406.pdf"
  },
  {
    id: 2,
    name: "422ZX",
    category: "Cargadores Frontales",
    description: "La cargadora de ruedas JCB 422ZX está diseñada para soportar todo el trabajo duro que se le puede lanzar, con excelentes niveles de productividad y eficiencia.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/422.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/422ZX.pdf"
  },
  {
    id: 3,
    name: "426",
    category: "Cargadores Frontales",
    description: "El cargador frontal JCB 426 pesa 13.3 toneladas y usa un motor Cummins QSB de 6.7 litros que cumple con la directiva Stage 2. Diseñado para ofrecer durabilidad y productividad.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/426.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/426.pdf"
  },
  {
    id: 4,
    name: "427ZX",
    category: "Cargadores Frontales",
    description: "La nueva cargadora JCB 427ZX está diseñada con tecnología innovadora, equipada con un motor cummins de 6 cilindros, que la hace más potente, eficiente y productiva.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/427.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/437ZX.pdf"
  },
  {
    id: 5,
    name: "436",
    category: "Cargadores Frontales",
    description: "El cargador frontal JCB 436 pesa 15.3 toneladas y usa un motor Cummins QSB de 6.7 litros que cumple con la directiva Stage 2. Diseñado para ofrecer durabilidad y productividad.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/436.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/426.pdf"
  },
  {
    id: 6,
    name: "437ZX",
    category: "Cargadores Frontales",
    description: "La nueva cargadora JCB 437ZX está diseñada con tecnología innovadora, equipada con un motor cummins de 6 cilindros, que la hace más potente, eficiente y productiva",
    image: "/imagenes/equipment/jcb/cargadores-frontales/437.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/437ZX.pdf"
  },
  {
    id: 7,
    name: "455ZX",
    category: "Cargadores Frontales",
    description: "Con un peso de 18 toneladas, el nuevo cargador frontal JCB 455ZX está diseñado para ofrecer durabilidad, rendimiento y fácil mantenimiento para lograr una excelente productividad incluso en entornos de construcción remotos.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/455.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/455ZX.pdf"
  },
  {
    id: 8,
    name: "456ZX",
    category: "Cargadores Frontales",
    description: "Existen muchas razones para elegir el cargador JCB 456ZX. Es productiva, eficiente, fácil de mantener y extremadamente duradera.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/456.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/456.pdf"
  },
  {
    id: 9,
    name: "467ZX",
    category: "Cargadores Frontales",
    description: "El cargador frontal JCB 467 ZX de alta gama pesa 24 toneladas y usa un motor Cummins QSM11 de 10,8 litros que cumple con las normativas Fase 3a/Tier 3. Está diseñado para controlar lo que sea.",
    image: "/imagenes/equipment/jcb/cargadores-frontales/467.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Cargadores-Frontales/467ZX.pdf"
  },
];

const cargadoresPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={cargadoresProducts}
    categoryTitle="Cargadores Frontales JCB"
    categoryDescription="Explore nuestra gama de Cargadores Frontales, líderes mundiales en su categoría."
  />;
};

export default cargadoresPage;