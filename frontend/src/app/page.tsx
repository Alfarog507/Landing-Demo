// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import CommunitySection from "./components/CommunitySection";
import FeaturesGrid from "./components/FeatureGrid";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        title="Bienvenido a nuestra tienda"
        subtitle="Compra los mejores productos al mejor precio"
        buttonText="Ver productos"
      />
      <CommunitySection
        title="Únete a nuestra comunidad"
        subtitle="Conoce a otros usuarios"
        description="Conoce a otros usuarios y comparte tus experiencias"
        imageSrc="/images/comunidad.png"
      />
      <FeaturesGrid />
    </div>
  );
}
