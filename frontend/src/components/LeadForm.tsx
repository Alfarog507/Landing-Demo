// src/components/LeadForm.tsx
import React from "react";
import { useForm } from "react-hook-form";

type LeadFormInputs = {
  name: string;
  email: string;
};

const LeadForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormInputs>();

  const onSubmit = (data: LeadFormInputs) => {
    console.log("Lead submitted:", data);
    // Aquí iría la lógica de integración con CRM o backend
  };

  return (
    <section className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Tu Nombre"
          {...register("name", { required: "El nombre es obligatorio" })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Tu Email"
          {...register("email", { required: "El email es obligatorio" })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          Regístrate
        </button>
      </form>
    </section>
  );
};

export default LeadForm;
