import FactexHero from "./components/FactexHero";
import Navbar from "./components/Navbar";
import ModulesSection from "./components/ModulesSection";
import BentoGrid from "./components/BentoGrid";
import DianSection from "./components/DianSection";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <FactexHero />
      <ModulesSection />
      <BentoGrid />
      <DianSection />
      <FinalCTA />
    </main>
  );
}
