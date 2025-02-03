// app/equipos/case/cosechadoras/axial/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const axialproducts = [
  {
    id: 1,
    name: "Axial-Flow Serie 150",
    category: "Cosechadoras",
    description: "La serie de cosechadoras 150 se creó para proporcionar una atención de excelencia a todos los perfiles de productores de granos que desean profesionalizar más sus negocios.",
    image: "/imagenes/equipment/case/cosechadoras/axial/axial150.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Cosechadoras/Grano/Axial-Flow%20150/FOLLETO-AXIAL-FLOW-150.pdf"
  },
  {
    id: 2,
    name: "Axial-Flow Serie 250",
    category: "Cosechadoras",
    description: "Las nuevas cosechadoras Axial Flow Serie 250 Automation están equipadas con el sistema AFS Harvest Command, un sistema inteligente que se autorregula a través de varios sen​sores en la máquina, con cuatro modos de cosecha, que proporciona hasta un 15% más de productividad.",
    image: "/imagenes/equipment/case/cosechadoras/axial/axial250.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Cosechadoras/Grano/Serie-250/FOLLETO-AXIAL-FLOW-250-26-PAGS.pdf"
  },
]; 

const AxialcLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={axialproducts}
      categoryTitle="Línea Axial-Flow"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras cosechadoras Axial-Flow."
    />
  );
};

export default AxialcLinePage;
