// app/components/Screenshots.tsx
import React from "react";

const Screenshots: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Capturas de Pantalla</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Imágenes simuladas; puedes reemplazar con rutas reales */}
        <img
          src="/images/screenshot1.png"
          alt="Pantalla 1"
          className="shadow-lg rounded-lg"
        />
        <img
          src="/images/screenshot2.png"
          alt="Pantalla 2"
          className="shadow-lg rounded-lg"
        />
        <img
          src="/images/screenshot3.png"
          alt="Pantalla 3"
          className="shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
};

export default Screenshots;
