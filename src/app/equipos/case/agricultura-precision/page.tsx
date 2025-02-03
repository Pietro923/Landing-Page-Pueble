import ProductLinesPage from "@/components/equipo/ProductLinesPage";

const agriculturaypreciosionline= [
  {
    id: 'AFS Connect',
    name: 'AFS Connect',
    description: 'AFS Connect: Nuestra tecnología más avanzada, al servicio de su campo. AFS Connect es el sistema de administración agrícola que le brinda acceso instantáneo a la información correspondiente a cada máquina de su flota, incluida la ubicación de la máquina, diagnósticos y estadísticas de combustible y motor. De esta forma, es posible monitorear los datos en tiempo real para tomar decisiones sobre la administración del desempeño tanto del operador como del equipo.',
    image: '/imagenes/equipment/case/lines/agriculturayprecision/afsc.jpg',
    href: '/equipos/case/agricultura-precision/afsc'
  },
  {
    id: 'Pantallas',
    name: 'Pantallas',
    description: 'Explore las pantallas y descubra el mejor modelo para controlar las funciones del equipo y rastrear información importante, todo desde la silla de su operador.',
    image: '/imagenes/equipment/case/lines/agriculturayprecision/pantallas.jpg',
    href: '/equipos/case/agricultura-precision/pantallas'
  },
]

const AgriculturaPrecisionPage = () => {
  return (
    <ProductLinesPage 
      brand="Case" 
      category="Agricultura y Precisión" 
      lines={agriculturaypreciosionline} 
    />
  );
};

export default AgriculturaPrecisionPage;
