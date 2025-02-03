// app/equipos/case/case/agricultura-precision/pantallas.tsx'
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const pantallasproducts = [
  {
    id: 1,
    name: "Pro 700",
    category: "Agricultura y Precisión",
    description: "AFS usa una única pantalla integrada con una interfaz común para todas las plataformas de su equipo Case IH.",
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/pro700.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "XCN-1050",
    category: "Agricultura y Precisión",
    description: "La pantalla XCN-1050 es delgada y fácil de usar; posee un procesador quad-core y el software de aplicación de campo Precision-IQ™.",
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/xcn.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "FM-750",
    category: "Agricultura y Precisión",
    description: "La FM-750 es una pantalla accesible, de guía multi-función que ofrece una característica clave de precisión de agricultura.",
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/fm.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 4,
    name: "XCN-2050",
    category: "Agricultura y Precisión",
    description: "La XCN-2050 es una pantalla táctil avanzada que se ubica dentro de la cabina, construida sobre sistema operativo Android™.",
    image: "/imagenes/equipment/case/agriculturayprecision/pantallas/xcn2050.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  
]; 

const pantallasLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={pantallasproducts}
      categoryTitle="Pantallas"
      categoryDescription="Descubra todas las funciones y posibilidades que brindan nuestras Pantallas."
    />
  );
};

export default pantallasLinePage;
