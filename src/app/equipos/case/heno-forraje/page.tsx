import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const HenoforrageProducts = [
  {
    id: 1,
    name: "Cabezal RD165",
    category: "Heno y Forrage",
    description: "Su principal característica es su estilo refinado para una mejor visibilidad del Cabezal así como ideal para grandes superficies y futuros productores de biomasa.",
    image: "/imagenes/equipment/case/heno/rd.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/21099237f20e45beb5e7020758e40444?v=cc7a0e0a"
  },
  {
    id: 2,
    name: "Segadora WD1904",
    category: "Heno y Forrage",
    description: "Manejo suave y alta capacidad de alimentación de material, más de 50 años de ser la mejor del mercado.",
    image: "/imagenes/equipment/case/heno/wd.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "Rotoenfardadora RB565",
    category: "Heno y Forrage",
    description: "Las nuevas Rotoenfardadoras Case IH son la solución para todas sus necesidades en trabajos de pastura.",
    image: "/imagenes/equipment/case/heno/rb.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/f2a3dad5f5ea47e6bea08c5e22648502?v=c9bee521"
  },
  {
    id: 4,
    name: "Enfardadora Prismática SB531",
    category: "Heno y Forrage",
    description: "Las Enfardadoras Prismáticas SB531 de Case IH, son conocidas por producir fardos de mejor calidad y a la vez por recolectar el cultivo del campo de manera más eficiente y confiable.",
    image: "/imagenes/equipment/case/heno/enfardadora.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/407083fd8cfa4ace8300fa43fad3927b?v=952cf777"
  },
  {
    id: 5,
    name: "Enfardadora Gigante LB434 RXL",
    category: "Heno y Forrage",
    description: "Case IH le ofrece equipos que optimizan su tiempo y aumentan su productividad. Puede hacer más de 25 megafardos por hora.",
    image: "/imagenes/equipment/case/heno/enfardadorag.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/289bea62f65b4d24b140b584426ec81e?v=cafe074e"
  },
]; 


const HenoforragePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={HenoforrageProducts}
      categoryTitle="Heno y Forrage"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras maquinas para Heno y Forrage."
    />
  );
};

export default HenoforragePage;
