// app/equipos/case/case/agricultura-precision/afsc.tsx'
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const afscproducts = [
  {
    id: 1,
    name: "Monitor AFS Connect",
    category: "Agricultura y Precisión",
    description: "Case IH Advanced Farming Systems® (AFS) le devuelve el control, con tecnología de precisión que permite lograr productividad y eficiencia en cada campaña.Los nuevos cabezales 3020 Series proporcionan lo último en tecnologías flex head. Además, este modelo cuenta con el servicio premium de atención MAX Case IH®",
    image: "/imagenes/equipment/case/agriculturayprecision/afsc/monitorafsc.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Agricultura%20de%20Precision%202019/ORIG_FOLLETO_AFS_ESPA%C3%91OL_2022.pdf"
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
