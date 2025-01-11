// app/equipos/case/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const caseProducts = [
  {
    id: 1,
    name: "Tractor Farmall JXM 75",
    category: "Tractores",
    description: "Los nuevos tractores Case IH Farmall Serie JXM se ajustan a la demanda de equipos robustos pero cómodos y fáciles de operar. Los modelos vienen en una versión 2WD o 4WD y cuentan con opciones de transmisión.",
    image: "/imagenes/equipment/case/farmall-jxm.jpg",
    specs: {
      power: "75 HP",
      weight: "3,750 kg",
      capacity: "2,300 kg"
    },
    pdfUrl:"https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Farmall/SPEC_FARMALL_SERIE_JXM-EO.pdf"
  },
  {
    id: 2,
    name: "Cosechado Axial-Flow Serie 150",
    category: "Cosechadoras",
    description: "La serie de cosechadoras 150 se creó para proporcionar una atención de excelencia a todos los perfiles de productores de granos que desean profesionalizar más sus negocios.",
    image: "/imagenes/equipment/case/axial-flow.jpg",
    specs: {
      power: "410 HP",
      weight: "18,000 kg",
      capacity: "12,330 L"
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Cosechadoras/Grano/Axial-Flow%20150/FOLLETO-AXIAL-FLOW-150.pdf"
  },
  // Agrega más productos Case aquí
];

const CasePage = () => {
  return <EquipmentBrandPage brand="Case" products={caseProducts} />;
};

export default CasePage;