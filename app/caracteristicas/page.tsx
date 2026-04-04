import Navbar from "../components/Navbar";
import HorizontalShowcase from "../components/HorizontalShowcase";
import ModulesSection from "../components/ModulesSection";
import BentoGrid from "../components/BentoGrid";
import DianSection from "../components/DianSection";
import FinalCTA from "../components/FinalCTA";

export const metadata = {
  title: "Características — Factex",
  description:
    "Descubre los 14 módulos y más de 60 funcionalidades que hacen de Factex el ERP más completo para empresas colombianas.",
};

export default function CaracteristicasPage() {
  return (
    <main className="bg-black">
      <Navbar />
      <HorizontalShowcase />
      <ModulesSection />
      <BentoGrid />
      <DianSection />
      <FinalCTA />
    </main>
  );
}
