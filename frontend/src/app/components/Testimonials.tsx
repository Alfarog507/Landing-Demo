// app/components/Testimonials.tsx
import React from "react";

const testimonialsData = [
  {
    name: "Carlos",
    feedback: "La mejor app para llevar el control de mis finanzas.",
  },
  {
    name: "Ana",
    feedback: "Gracias a esta app he mejorado mi organización financiera.",
  },
  {
    name: "Jorge",
    feedback: "Los reportes detallados me ayudan a ver en qué puedo ahorrar.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonios de Usuarios</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white shadow rounded-lg">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="mt-4 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
