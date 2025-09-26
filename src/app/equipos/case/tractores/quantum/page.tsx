// app/equipos/case/tractores/quantum/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const quantumProducts = [
  {
    id: 1,
    name: "Quantum 65V",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum65.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 2,
    name: "Quantum 85V",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum85.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 3,
    name: "Quantum 85F",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum85f.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
  },
  {
    id: 4,
    name: "Quantum 75N",
    category: "Tractores",
    description: "Tanto si trabaja viñas, cultiva frutales o requiere un tractor estrecho para otras tareas, las dimensiones reducidas del nuevo Quantum, su radio de giro cerrado y su renovado diseño le proporcionarán las mejores prestaciones.",
    image: "/imagenes/equipment/case/tractores/quantum/quantum75.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/533e3ac5e0d74a14946338a630008652?v=bedcf000"
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
