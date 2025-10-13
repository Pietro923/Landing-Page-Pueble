"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const NovedadesLazy = () => {
  const [mostrar, setMostrar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMostrar(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{mostrar && <Novedades />}</div>;
};

export default NovedadesLazy;

// Importamos el componente original
const Novedades = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 px-4">
      <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-red-500 font-semibold uppercase tracking-wider mb-4"
              >
                | Novedades
              </motion.p>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white leading-tight">
                Nuestras novedades en el sector
                
              </h2>
        <div
          className="elfsight-app-d0552590-a7a9-4c42-a54c-97741aef4604"
          data-elfsight-app-lazy
        >

        </div>
    </section>
  );
};
