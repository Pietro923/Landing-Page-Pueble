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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Heno-y-Forraje/Cabezal%20de%20Discos/Spec_Cabezal_RD165.pdf"
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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Heno-y-Forraje/Segadoras/Segadora-Autopropulsada-WD1904/SPEC-SEGADORA-WINDROWER-WD1904.pdf"
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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Heno-y-Forraje/Rotoenfardadoras/Rotoenfardadoras-RB565/SPEC-ROTOENFARDADORA-RB565.pdf"
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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Heno-y-Forraje/Enfardadoras/SPEC-ENFARDADORA-PRISMATICA-SB531.pdf"
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
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Heno-y-Forraje/Enfardadoras/LB434RXL/SPEC-ENFARDADORA-GIGANTE-LB434RXL.pdf"
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
