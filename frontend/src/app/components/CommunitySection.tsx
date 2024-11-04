// app/components/CommunitySection.tsx
"use client";

import React from "react";

type CommunitySectionProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
};

const CommunitySection: React.FC<CommunitySectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
}) => {
  return (
    <section className="bg-cream text-black py-16 px-8 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-bold leading-tight font-poppins mb-6">
            {title}
          </h2>
          <p className="text-2xl text-gray-700 font-itim mb-4">{subtitle}</p>
          <p className="text-lg text-gray-700 font-itim">{description}</p>
        </div>
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt="Imagen de la comunidad"
            className="w-full h-auto rounded-lg shadow-lg max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
