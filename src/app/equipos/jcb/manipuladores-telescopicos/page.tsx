// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const manipuladorestelescopicosProducts = [
  {
    id: 1,
    name: "530-70",
    category: "Manipuladores Telescópicos",
    description: "El Manipulador telescópico 530-70 es una máquina versatil y durable, diseñada para mover cualquier material de manera rápida y segura.",
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/530.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/530-70.pdf"
  },
  {
    id: 2,
    name: "531-70",
    category: "Manipuladores Telescópicos",
    description: "El manipulador telescópico JCB 531-70 está diseñado para afrontar las dificultades de cualquier trabajo de frente.",
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/531.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 3,
    name: "535-125",
    category: "Manipuladores Telescópicos",
    description: "La JCB 535-125 Alta Visibilidad supone un gran paso en la visibilidad de los manipuladores telescópicos. Es un manipulador telescópico de 3 fases y tamaño normal con un gran alcance y movilidad mejorada.",
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/535.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 4,
    name: "540-170",
    category: "Manipuladores Telescópicos",
    description: "El manipulador telescópico JCB 540-170 de 4 fases con motor Dieselmax tiene un gran alcance y carga útil para ofrecer una productividad y unos tiempos de ciclo excepcionales.",
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/540.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
  {
    id: 5,
    name: "541-70",
    category: "Manipuladores Telescópicos",
    description: "La 541-70 es un manipulador telescópico con motor Dieselmax altamente eficiente. Es potente, productivo, manejable, cómodo y seguro.",
    image: "/imagenes/equipment/jcb/manipuladorestelescopicos/541.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Manipuladores/541-70.pdf"
  },
];

const manipuladorestelescopicosPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={manipuladorestelescopicosProducts}
    categoryTitle="Manipuladores Telescópicos JCB"
    categoryDescription="Explore nuestra gama de Manipuladores Telescópicos, líderes mundiales en su categoría."
  />;
};

export default manipuladorestelescopicosPage;