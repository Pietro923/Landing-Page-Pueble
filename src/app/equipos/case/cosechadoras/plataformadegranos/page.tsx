// app/equipos/case/cosechadoras/plataformadegranos/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const plataformadegranosproducts = [
  {
    id: 1,
    name: "Plataforma 3020",
    category: "Cosechadoras",
    description: "Los nuevos cabezales 3020 Series proporcionan lo último en tecnologías flex head. Además, este modelo cuenta con el servicio premium de atención MAX Case IH®",
    image: "/imagenes/equipment/case/cosechadoras/plataformadegranos/plataforma3020.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Cosechadoras/Plataformas%20de%20Granos/SPEC-PLATAFORMAS-2020-3020-3162.pdf"
  },
  {
    id: 2,
    name: "Plataforma 3162",
    category: "Cosechadoras",
    description: "El Draper Terraflex 3162 ™, con CentraCut, barra de corte flexible, y la gama de anchos de corte, ofrece la máxima productividad y rendimiento.",
    image: "/imagenes/equipment/case/cosechadoras/plataformadegranos/plataforma3162.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Cosechadoras/Plataformas%20de%20Granos/SPEC-PLATAFORMAS-2020-3020-3162.pdf"
  },
]; 

const plataformadegranosLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={plataformadegranosproducts}
      categoryTitle="Línea Plataformas de Granos"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras cosechadoras Plataformas de Granos."
    />
  );
};

export default plataformadegranosLinePage;
