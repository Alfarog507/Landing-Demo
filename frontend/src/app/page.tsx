// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        title="Bienvenido a nuestra tienda"
        subtitle="Compra los mejores productos al mejor precio"
        buttonText="Ver productos"
      />
    </div>
  );
}
