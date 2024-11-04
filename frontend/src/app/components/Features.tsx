// app/components/Features.tsx
import React from "react";

const featuresData = [
  {
    title: "Seguimiento de Gastos",
    description: "Registra tus gastos y mantén un historial.",
  },
  {
    title: "Creación de Presupuestos",
    description: "Establece y sigue presupuestos mensuales.",
  },
  {
    title: "Reportes Detallados",
    description: "Visualiza reportes que te ayudan a mejorar tus finanzas.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
