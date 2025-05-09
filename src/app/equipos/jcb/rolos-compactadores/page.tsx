// app/equipos/jcb/retroexcavadoras/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const roloscompactadoresProducts = [
  {
    id: 1,
    name: "JCB 116D",
    category: "Rodillo Compactador",
    description: "La JCB 116D logra una excelente densidad con menor cantidad de pasadas, lo que se traduce en ahorro de dinero.",
    image: "/imagenes/equipment/jcb/roloscompactadores/116.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Compactadores/116D.pdf"
  },
  {
    id: 2,
    name: "VM75/166/200",
    category: "Rodillo Compactador",
    description: "La gama VM de compactadoras de suelo están diseñadas para hacer las cosas más fácil.",
    image: "/imagenes/equipment/jcb/roloscompactadores/75.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "/pdf/Compactadores/VM75-VM166-VM200"
  },
];

const roloscompactadoresPage = () => {
  return <EquipmentBrandPage 
    brand="JCB" 
    products={roloscompactadoresProducts}
    categoryTitle="Rolos Compactadores JCB"
    categoryDescription="Explore nuestra gama de Rolos Compactadores, líderes mundiales en su categoría."
  />;
};

export default roloscompactadoresPage;