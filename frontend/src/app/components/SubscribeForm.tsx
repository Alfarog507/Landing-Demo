// app/components/SubscribeForm.tsx
"use client";

import React, { useState } from "react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suscrito con:", email);
    // Aquí se integraría la lógica para enviar el email a un servicio o CRM
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          Suscribirse
        </button>
      </form>
    </section>
  );
};

export default SubscribeForm;
