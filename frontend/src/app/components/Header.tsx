// app/components/Header.tsx
"use client";

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 md:px-8 bg-cream border-b-2 border-gray-950">
      <div className="flex items-center">
        <img src="/images/Logo.png" alt="Logo de la Empresa" className="h-28" />
        <span className="ml-3 text-xl font-bold text-black">Mi Empresa</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#features" className="text-gray-700 hover:text-black">
          Características
        </a>
        <a href="#testimonials" className="text-gray-700 hover:text-black">
          Testimonios
        </a>
        <a href="#contact" className="text-gray-700 hover:text-black">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
