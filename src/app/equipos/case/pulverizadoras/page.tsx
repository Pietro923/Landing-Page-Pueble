import EquipmentBrandPage from "@/components/equipo/EquipmentBrandPage";

const PulverizadorasProducts = [
  {
    id: 1,
    name: "Patriot 3330",
    category: "Pulverizadoras",
    description: "El nuevo Patriot 3330 cuenta con un mayor confort operacional gracias a su cabina más amplia logrando un trabajo más eficiente.",
    image: "/imagenes/equipment/case/pulverizadora/patriot3330.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 2,
    name: "Patriot 250",
    category: "Pulverizadoras",
    description: "El Patriot 250 ahora con nueva motorización Tier 3 de 177 cv y 6 cilindros, viene para brindar más potencia, tracción y alto rendimiento, que junto al nuevo Modo Economy brinda hasta 15% de economía de combustible.",
    image: "/imagenes/equipment/case/pulverizadora/patriot250.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
  {
    id: 3,
    name: "Patriot 300",
    category: "Pulverizadoras",
    description: "El nuevo Patriot 300 fue diseñado bajo el concepto de Agronomic Design, con el objetivo de ofrecer una mayor capacidad operacional y mejor tecnología de aplicación.",
    image: "/imagenes/equipment/case/pulverizadora/patriot300.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/59a60db18bed402f82d14d2c5095f44e?v=6e19f11b"
  },
  {
    id: 4,
    name: "Patriot 350",
    category: "Pulverizadoras",
    description: "Case IH también es referencia en productividad cuando se trata de pulverizar. Su suspensión activa asegura la mejor respuesta de partida, el mejor rendimiento en pendientes ascendentes y la mejor uniformidad en la aplicación.",
    image: "/imagenes/equipment/case/pulverizadora/patriot350.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: ""
  },
]

const PulverizadorasPage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={PulverizadorasProducts}
      categoryTitle="Pulverizadoras"
      categoryDescription="Descubra la versatilidad y confiabilidad de nuestras Pulverizadoras."
    />
  );
};

export default PulverizadorasPage;
