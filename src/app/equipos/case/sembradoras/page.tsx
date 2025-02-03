// app/equipos/case/sembradora/precisiondisk/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const precisiondiskProducts = [
  {
    id: 1,
    name: "Precision Disk",
    category: "Sembradoras",
    description: "La familia de sembradoras neumáticas Case IH Precision Disk presentan diseños que maximizan tu productividad, sin importar las condiciones de los residuos con los que está tratando o los cultivos que siembra.",
    image: "/imagenes/equipment/case/sembradoras/precisiondisk.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Sembradoras/PRESICION%20DISC%20500/PRECISION-DISK-500.pdf"
  },
]; 

const precisiondiskLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={precisiondiskProducts}
      categoryTitle="Sembradora Precision Disk"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras Sembradoras Precision Disk."
    />
  );
};

export default precisiondiskLinePage;
