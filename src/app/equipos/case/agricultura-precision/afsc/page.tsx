// app/equipos/case/case/agricultura-precision/afsc.tsx'
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const afscproducts = [
  {
    id: 1,
    name: "Monitor AFS Connect",
    category: "Agricultura y Precisión",
    description: "Case IH Advanced Farming Systems® (AFS) le devuelve el control, con tecnología de precisión que permite lograr productividad y eficiencia en cada campaña.Los nuevos cabezales 3020 Series proporcionan lo último en tecnologías flex head. Además, este modelo cuenta con el servicio premium de atención MAX Case IH®",
    image: "/imagenes/equipment/case/agriculturayprecision/afsc/monitorafsc.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e9cbbedb11054db391c38206423cc2ed?v=dac96e30"
  },
]; 

const afscproductsLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={afscproducts}
      categoryTitle="AFS Connect"
      categoryDescription="Descubra todas las funciones que trae AFS Connect"
    />
  );
};

export default afscproductsLinePage;
