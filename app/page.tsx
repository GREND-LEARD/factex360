import FactexHero from "./components/FactexHero";
import Navbar from "./components/Navbar";
import ScrollTextReveal from "./components/ScrollTextReveal";
import ModulesSection from "./components/ModulesSection";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <FactexHero />
      <ScrollTextReveal />
      <ModulesSection />
      <FinalCTA />
    </main>
  );
}
