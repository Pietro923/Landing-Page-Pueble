// app/equipos/case/tractores/quantum/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const quantumProducts = [
  {
    id: 1,
    name: "Quantum 65V",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum65.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Quantum/SPEC_QUANTUM_65V_75N_85V_85F.pdf"
  },
  {
    id: 2,
    name: "Quantum 85V",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum85.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Quantum/SPEC_QUANTUM_65V_75N_85V_85F.pdf"
  },
  {
    id: 3,
    name: "Quantum 85F",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum85f.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Quantum/SPEC_QUANTUM_65V_75N_85V_85F.pdf"
  },
  {
    id: 4,
    name: "Quantum 75N",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum75.jpg",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://assets.cnhindustrial.com/caseih/ARGENTINA/ARGENTINAASSETS/Productos/Tractores/Quantum/SPEC_QUANTUM_65V_75N_85V_85F.pdf"
  },
];

const QuantumLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={quantumProducts}
      categoryTitle="Línea Quantum"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestros tractores Quantum."
    />
  );
};

export default QuantumLinePage;
