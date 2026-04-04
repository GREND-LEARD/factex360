"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────────
   ScrollTextReveal — cada palabra se ilumina al scrollear.
   Efecto tipo Apple "Introducing…" que da sensación premium.
   ──────────────────────────────────────────────────────────────────────────── */

const paragraph =
  "Factex no es solo un software. Es la plataforma que conecta tu facturación, inventario, contabilidad, tesorería, compras y reportes en un solo lugar. Diseñada para empresas colombianas que quieren crecer sin límites. Validación DIAN integrada. Cero papeles. Máximo control.";

export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = paragraph.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-black py-32 md:py-44"
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(59,130,246,0.05),_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6">
        <motion.p className="text-2xl font-medium leading-[1.6] tracking-tight sm:text-3xl md:text-4xl md:leading-[1.5]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
          })}
        </motion.p>
      </div>
    </section>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgb(255 255 255 / 0.12)", "rgb(255 255 255 / 1)"]
  );

  return (
    <motion.span className="mr-[0.3em] inline-block" style={{ opacity, color }}>
      {word}
    </motion.span>
  );
}
