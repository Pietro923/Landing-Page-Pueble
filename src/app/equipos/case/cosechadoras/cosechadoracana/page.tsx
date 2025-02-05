// app/equipos/case/cosechadoras/cosechadoracana/page.tsx
import EquipmentBrandPage from '@/components/equipo/EquipmentBrandPage';

const cosechadoracanaproducts = [
  {
    id: 1,
    name: "Austoft A9000",
    category: "Cosechadoras",
    description: "Aumentá la productividad de tu cosecha de caña de azúcar con la Cosechadora Austoft A9000 y obtené la máxima versatilidad. Su eficiente tracción, incluso en terrenos de poco agarre, te proporciona una conducción más suave y estable con una baja compactación del suelo. A esto se suma un mantenimiento simplificado, piloto automático AFS y mucho más.",
    image: "/imagenes/equipment/case/cosechadoras/cosechadoracana/a9000.webp",
    specs: {
      power: "",
      weight: "",
      capacity: ""
    },
    pdfUrl: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5e56ae6115b0440392a82eb66d3da257?v=c87ca7bc"
  },
]; 

const cosechadoracanaLinePage = () => {
  return (
    <EquipmentBrandPage
      brand="Case"
      products={cosechadoracanaproducts}
      categoryTitle="Cosechadoras de Caña"
      categoryDescription="Con el foco puesto en la cosecha y en la rentabilidad de tu negocio."
    />
  );
};

export default cosechadoracanaLinePage;
