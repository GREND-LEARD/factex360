import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Contacto — Factex",
  description:
    "Contáctanos para una demo personalizada. Nuestro equipo te ayuda a implementar Factex en tu empresa.",
};

export default function ContactoPage() {
  return (
    <main className="bg-black">
      <Navbar />
      {/* Spacer para el navbar flotante */}
      <div className="h-24" />
      <ContactSection />
    </main>
  );
}
