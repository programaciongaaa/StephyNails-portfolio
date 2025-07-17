import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}