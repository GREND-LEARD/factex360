import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import FinalCTA from "../components/FinalCTA";

export const metadata = {
  title: "Precios — Factex",
  description:
    "Planes flexibles para cada etapa de tu negocio. Facturación electrónica DIAN incluida. 14 días de prueba gratis.",
};

export default function PreciosPage() {
  return (
    <main className="bg-black">
      <Navbar />
      {/* Spacer para el navbar flotante */}
      <div className="h-24" />
      <PricingSection />
      <FinalCTA />
    </main>
  );
}
