import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services"; // <-- 1. Importa

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services /> {/* <-- 2. Añade */}
    </main>
  );
}