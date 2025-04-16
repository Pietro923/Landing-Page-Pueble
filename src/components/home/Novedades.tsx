"use client";
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
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-red-500 pb-2 inline-block text-white">
          NOVEDADES
        </h2>
        <div
          className="elfsight-app-d0552590-a7a9-4c42-a54c-97741aef4604"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};
