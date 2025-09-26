// app/equipos/case/sembradora/precisiondisk/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const precisiondiskProducts = [
  {
    id: 1,
    name: "Precision Disk",
    category: "Sembradoras",
    description: "La familia de sembradoras neumáticas Case IH Precision Disk presentan diseños que maximizan tu productividad, sin importar las condiciones de los residuos con los que está tratando o los cultivos que siembra.",
    image: "/imagenes/equipment/case/sembradoras/precisiondisk.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/162381054f174b888b08065ac994e650?v=6ecb1e3b"
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
