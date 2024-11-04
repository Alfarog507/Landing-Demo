// app/page.tsx
import Header from "./components/Header";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testimonials";
import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <div>
      <Header
        title="Finanzas Inteligentes"
        tagline="Lleva el control de tus finanzas de manera fácil y eficiente"
        buttonText="Descarga la App"
      />
      <Features />
      <Screenshots />
      <Testimonials />
      <SubscribeForm />
    </div>
  );
}
