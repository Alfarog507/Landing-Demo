// app/page.tsx
import Header from "./components/Header";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <div>
      <Header
        title="Bienvenido a Nuestra Landing Page"
        subtitle="Descubre las increíbles características de nuestro producto"
        buttonText="¡Empieza Ahora!"
      />
      <Features />
    </div>
  );
}
