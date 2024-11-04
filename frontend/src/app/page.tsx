// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import CommunitySection from "./components/CommunitySection";
import FeaturesGrid from "./components/FeatureGrid";
import TestimonialsSection from "./components/TestimonialSection";
import SubscribeForm from "./components/SubscribeForm";
import Footer from "./components/Footer";

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
        description="Conoce a otros usuarios y comparte tus experiencias"
        imageSrc="/images/comunidad.png"
      />
      <FeaturesGrid />
      <TestimonialsSection />
      <SubscribeForm />
      <Footer />
    </div>
  );
}
