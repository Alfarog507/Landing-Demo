// app/components/Header.tsx
import React from "react";

type HeaderProps = {
  title: string;
  tagline: string;
  buttonText: string;
};

const Header: React.FC<HeaderProps> = ({ title, tagline, buttonText }) => {
  return (
    <header className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{tagline}</p>
      <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600">
        {buttonText}
      </button>
    </header>
  );
};

export default Header;
