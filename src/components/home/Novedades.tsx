"use client"
import React, { useEffect } from 'react';

const Novedades: React.FC = () => {
  useEffect(() => {
    // Create and load Elfsight script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2 inline-block text-white">
          NOVEDADES
        </h2>
        
        {/* Elfsight Instagram Widget */}
        <div 
          className="elfsight-app-d0552590-a7a9-4c42-a54c-97741aef4604" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default Novedades;