// src/components/Features.tsx
import React from "react";

type FeatureProps = {
  title: string;
  description: string;
};

const featuresData: FeatureProps[] = [
  {
    title: "Funcionalidad 1",
    description: "Descripción de la funcionalidad 1.",
  },
  {
    title: "Funcionalidad 2",
    description: "Descripción de la funcionalidad 2.",
  },
  {
    title: "Funcionalidad 3",
    description: "Descripción de la funcionalidad 3.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Características Clave</h2>
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
