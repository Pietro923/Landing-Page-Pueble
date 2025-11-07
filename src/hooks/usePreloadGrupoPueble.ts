'use client';
import { useEffect } from 'react';

/**
 * Hook para precargar el componente GrupoPueble
 * Se debe llamar en el Hero para que vaya cargando mientras el usuario ve el contenido inicial
 */
export function usePreloadGrupoPueble() {
  useEffect(() => {
    // Solo precargar en el cliente y si hay conexión rápida
    if (typeof window === 'undefined') return;

    // Verificar si la conexión es rápida (opcional, mejora UX)
    const connection = (navigator as any).connection;
    const isSlowConnection = connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
    
    if (isSlowConnection) {
      console.log('Conexión lenta detectada, posponer precarga');
      return;
    }

    // Precargar después de un pequeño delay para no interferir con el Hero
    const timeoutId = setTimeout(() => {
      // Precargar las imágenes críticas del componente
      const imagesToPreload = [
        '/imagenes/inicio/carousel3.webp', // Case IH - primera imagen
        '/imagenes/grupo_Pueble/vehiculos/jcb-construccion.webp', // JCB
        '/imagenes/grupo_Pueble/vehiculos/kia_vehiculo.webp', // KIA
        '/imagenes/grupo_Pueble/vehiculos/ducati_vehiculo.webp', // Ducati
        '/imagenes/grupo_Pueble/vehiculos/a5_audi.webp', // Audi
        '/imagenes/grupo_Pueble/vehiculos/semage_vehiculo.webp', // Semage
      ];

      imagesToPreload.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      console.log('✅ Imágenes de GrupoPueble precargadas');
    }, 2000); // 2 segundos después de montar el Hero

    return () => clearTimeout(timeoutId);
  }, []);
}