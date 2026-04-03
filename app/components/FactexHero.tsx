"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  type MotionValue,
} from "framer-motion";

// ─── Iconos SVG inline para las features (evita dependencias externas) ──────
function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 5-10" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ─── Datos de las features ──────────────────────────────────────────────────
const features = [
  {
    title: "Facturas Rápidas",
    description:
      "Crea y envía facturas profesionales en segundos. Plantillas inteligentes que se adaptan a tu marca.",
    icon: IconBolt,
    gradient: "from-amber-500 to-orange-600",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    title: "Reportes Inteligentes",
    description:
      "Dashboards en tiempo real con analítica predictiva. Conoce tu negocio antes que nadie.",
    icon: IconChart,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    title: "Gestión de Clientes",
    description:
      "CRM integrado con historial completo de facturas, pagos y comunicaciones en un solo lugar.",
    icon: IconUsers,
    gradient: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.15)",
  },
];

// ─── Datos de métricas animadas ─────────────────────────────────────────────
const metrics = [
  { value: 50000, suffix: "+", label: "Facturas creadas" },
  { value: 99.9, suffix: "%", label: "Uptime garantizado", decimals: 1 },
  { value: 3, suffix: "seg", label: "Tiempo promedio" },
  { value: 4.9, suffix: "/5", label: "Valoración", decimals: 1 },
];

// ─── Animated Counter — cuenta de 0 al valor final ─────────────────────────
function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  progress,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  progress: MotionValue<number>;
}) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      // Las métricas empiezan a contar cuando el scroll está entre 60–75%
      const t = Math.min(1, Math.max(0, (v - 0.6) / 0.15));
      const current = value * t;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("es-ES")
      );
    });
    return unsubscribe;
  }, [value, decimals, progress]);

  return (
    <span>
      {display}
      <span className="text-blue-400">{suffix}</span>
    </span>
  );
}

// ─── Feature Card con icono, borde gradiente hover y glow ───────────────────
function FeatureCard({
  feature,
  index,
  progress,
}: {
  feature: (typeof features)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.52 + index * 0.06;
  const end = start + 0.1;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [80, 0]);
  const scale = useTransform(progress, [start, end], [0.92, 1]);
  const Icon = feature.icon;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] md:p-8"
    >
      {/* Glow detrás de la card al hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.glowColor}, transparent 60%)`,
        }}
      />

      {/* Icono con gradiente */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* Mockup preview — UI simulada */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-zinc-900/80">
        <DashboardMockup variant={index} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {feature.description}
        </p>
      </div>

      {/* Flecha "ver más" — aparece al hover */}
      <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">
        <span>Explorar</span>
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </motion.div>
  );
}

// ─── Dashboard Mockup en CSS puro (3 variantes) ─────────────────────────────
// Simula las pantallas de la app sin necesitar imágenes externas.
function DashboardMockup({ variant }: { variant: number }) {
  if (variant === 0) {
    // Crear factura
    return (
      <div className="flex h-full flex-col gap-2 p-3 text-[10px]">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-white/80">Nueva Factura</div>
          <div className="h-4 w-14 rounded bg-blue-500/60 text-center text-[8px] leading-4 text-white/90">
            Enviar
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-16 rounded bg-white/10" />
            <div className="h-5 rounded bg-white/[0.06] ring-1 ring-white/10" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-12 rounded bg-white/10" />
            <div className="h-5 rounded bg-white/[0.06] ring-1 ring-white/10" />
          </div>
        </div>
        <div className="mt-1 flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="flex gap-2 border-b border-white/5 pb-1.5">
            <div className="h-2 w-20 rounded bg-white/10" />
            <div className="h-2 w-8 rounded bg-white/10" />
            <div className="h-2 w-12 rounded bg-white/10" />
            <div className="h-2 w-10 rounded bg-white/10" />
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2 border-b border-white/[0.03] py-1.5">
              <div className="h-2 w-20 rounded bg-white/[0.06]" />
              <div className="h-2 w-8 rounded bg-white/[0.06]" />
              <div className="h-2 w-12 rounded bg-white/[0.06]" />
              <div className="h-2 w-10 rounded bg-emerald-500/40" />
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-2 w-10 rounded bg-white/10" />
          <div className="h-2.5 w-16 rounded bg-blue-500/50 text-center text-[7px] leading-2.5 font-bold text-white/80">
            $12,450
          </div>
        </div>
      </div>
    );
  }
  if (variant === 1) {
    // Dashboard con gráfico
    return (
      <div className="flex h-full flex-col gap-2 p-3 text-[10px]">
        <div className="font-semibold text-white/80">Dashboard</div>
        <div className="flex gap-2">
          {["$48.2K", "127", "94%"].map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.03] p-2 text-center"
            >
              <div className="text-xs font-bold text-white/90">{val}</div>
              <div className="mt-0.5 h-1.5 w-full rounded bg-white/[0.04]">
                <div
                  className="h-full rounded bg-blue-500/60"
                  style={{ width: `${60 + i * 15}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Mini chart bars */}
        <div className="flex flex-1 items-end gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
            <div key={i} className="flex-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-blue-600/80 to-blue-400/60"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Gestión de clientes
  return (
    <div className="flex h-full flex-col gap-2 p-3 text-[10px]">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-white/80">Clientes</div>
        <div className="h-4 w-4 rounded bg-white/10" />
      </div>
      {["Ana García", "Carlos López", "María Ruiz", "Pedro Silva"].map(
        (name, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] p-2 transition-colors"
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[7px] font-bold text-white ${
                ["bg-blue-500/70", "bg-violet-500/70", "bg-emerald-500/70", "bg-amber-500/70"][i]
              }`}
            >
              {name[0]}
            </div>
            <div className="flex-1">
              <div className="text-white/70">{name}</div>
              <div className="h-1.5 w-16 rounded bg-white/[0.04]" />
            </div>
            <div
              className={`h-3.5 w-12 rounded-full text-center text-[7px] leading-3.5 ${
                i % 2 === 0
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-amber-500/20 text-amber-400"
              }`}
            >
              {i % 2 === 0 ? "Al día" : "Pendiente"}
            </div>
          </div>
        )
      )}
    </div>
  );
}

// ─── Floating particles — decoración ambient ────────────────────────────────
function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-px rounded-full bg-blue-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            opacity: [0, 0.6 + Math.random() * 0.4, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Componente principal: Hero + Feature Reveal ────────────────────────────
export default function FactexHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring suavizante para las transformaciones, da sensación "elástica" premium
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ─── Transformaciones del laptop ──────────────────────────────────────
  const laptopScale = useTransform(smoothProgress, [0, 0.3, 0.45], [0.85, 1.4, 1.6]);
  const laptopY = useTransform(smoothProgress, [0, 0.3, 0.45], [40, -40, -80]);
  const laptopOpacity = useTransform(smoothProgress, [0, 0.32, 0.42, 0.48], [1, 1, 0.8, 0]);
  const laptopRotateX = useTransform(smoothProgress, [0, 0.2], [2, 0]);

  // ─── Transformaciones del texto hero ──────────────────────────────────
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.22], [0, -100]);
  const heroTextScale = useTransform(smoothProgress, [0, 0.22], [1, 0.95]);

  // ─── Glow central ────────────────────────────────────────────────────
  const glowOpacity = useTransform(smoothProgress, [0.15, 0.35, 0.5], [0, 0.7, 0]);
  const glowScale = useTransform(smoothProgress, [0.15, 0.4], [0.5, 2]);

  // ─── Features section ────────────────────────────────────────────────
  const featuresOpacity = useTransform(smoothProgress, [0.42, 0.5], [0, 1]);
  const featuresTitleY = useTransform(smoothProgress, [0.42, 0.52], [50, 0]);
  const featuresTitleOpacity = useTransform(smoothProgress, [0.42, 0.52], [0, 1]);

  // ─── Métricas ────────────────────────────────────────────────────────
  const metricsOpacity = useTransform(smoothProgress, [0.74, 0.82], [0, 1]);
  const metricsY = useTransform(smoothProgress, [0.74, 0.82], [40, 0]);

  // ─── CTA final ───────────────────────────────────────────────────────
  const ctaOpacity = useTransform(smoothProgress, [0.86, 0.93], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.86, 0.93], [30, 0]);

  return (
    <section ref={containerRef} className="relative h-[450vh] bg-black">
      {/* ─── Sticky viewport ─────────────────────────────────────────── */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* ─── Fondos decorativos ─────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(59,130,246,0.12),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(139,92,246,0.06),_transparent_50%)]" />

        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Partículas flotantes */}
        <FloatingParticles />

        {/* ════════════════════════════════════════════════════════════════
            HERO TEXT
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{
            opacity: heroTextOpacity,
            y: heroTextY,
            scale: heroTextScale,
          }}
          className="relative z-10 mb-10 flex flex-col items-center px-6 text-center md:mb-14"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-4 py-1.5 text-sm font-medium text-blue-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            Nuevo: Facturación inteligente con IA
          </motion.div>

          {/* Título con efecto de reveal por líneas */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              La Facturación
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                del Futuro
              </span>
              , Hoy.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
          >
            Automatiza, controla y escala tu facturación con la plataforma más
            potente y elegante del mercado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* Botón principal con shimmer */}
            <button className="cta-shimmer group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-500 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98]">
              <span className="relative z-10">Pedir Demo</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:scale-[0.98]">
              Ver Características
            </button>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            LAPTOP MOCKUP
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{
            scale: laptopScale,
            y: laptopY,
            opacity: laptopOpacity,
            rotateX: laptopRotateX,
          }}
          className="relative z-10 w-full max-w-3xl px-6"
        >
          {/* Glow central */}
          <motion.div
            style={{ opacity: glowOpacity, scale: glowScale }}
            className="pointer-events-none absolute inset-0 -m-32 rounded-full bg-gradient-to-tr from-blue-500/25 to-violet-500/20 blur-3xl"
          />

          <div
            className="relative mx-auto w-full"
            style={{ perspective: "1200px" }}
          >
            {/* Pantalla del laptop */}
            <div className="relative overflow-hidden rounded-t-2xl border border-white/[0.08] bg-zinc-950 shadow-2xl shadow-black/60 ring-1 ring-white/[0.05]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.04] bg-zinc-900/60 px-4 py-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10 transition-colors hover:bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10 transition-colors hover:bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10 transition-colors hover:bg-green-500/80" />
                </div>
                <div className="mx-auto flex h-6 w-56 items-center justify-center gap-1.5 rounded-lg bg-white/[0.04] text-[11px] text-zinc-500">
                  <svg className="h-3 w-3 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  app.factex.io
                </div>
              </div>

              {/* Dashboard content — mockup completo en CSS */}
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4">
                <LaptopDashboardContent />
                {/* Overlay reflejo */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
              </div>
            </div>

            {/* Bisagra & base */}
            <div className="relative">
              <div className="h-2 rounded-b-lg bg-gradient-to-b from-zinc-700 to-zinc-800">
                <div className="absolute left-1/2 top-0 h-[3px] w-12 -translate-x-1/2 rounded-b-sm bg-zinc-600/80" />
              </div>
              <div className="relative h-1 rounded-b-xl bg-gradient-to-b from-zinc-800 to-zinc-900" />
            </div>
            {/* Sombra ovalada */}
            <div className="mx-auto mt-2 h-3 w-[60%] rounded-full bg-blue-500/[0.06] blur-xl" />
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            FEATURES REVEAL
        ════════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{ opacity: featuresOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6"
        >
          {/* Etiqueta superior de la sección */}
          <motion.div
            style={{ opacity: featuresTitleOpacity, y: featuresTitleY }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500"
          >
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            Características
          </motion.div>

          {/* Título de features */}
          <motion.div
            style={{ opacity: featuresTitleOpacity, y: featuresTitleY }}
            className="mb-10 text-center md:mb-14"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Todo lo que necesitas.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Nada que te sobre.
              </span>
            </h2>
          </motion.div>

          {/* Grid de Feature Cards */}
          <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={i}
                progress={smoothProgress}
              />
            ))}
          </div>

          {/* ─── Métricas animadas ─────────────────────────────────────── */}
          <motion.div
            style={{ opacity: metricsOpacity, y: metricsY }}
            className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-5 text-center"
              >
                <span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={m.decimals}
                    progress={smoothProgress}
                  />
                </span>
                <span className="mt-1 text-xs text-zinc-500">{m.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ─── CTA final ─────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="mt-10 flex flex-col items-center gap-3 md:mt-14"
          >
            <button className="cta-shimmer group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-10 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98]">
              <span className="relative z-10">Comenzar Ahora — Es Gratis</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <span className="text-xs text-zinc-600">
              Sin tarjeta de crédito &middot; Configuración en 2 minutos
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Dashboard mockup completo para dentro del laptop ───────────────────────
// Render en CSS puro — no necesita imágenes externas
function LaptopDashboardContent() {
  return (
    <div className="flex h-full gap-3 text-[9px] md:text-[10px]">
      {/* Sidebar izquierdo */}
      <div className="hidden w-28 flex-shrink-0 flex-col gap-3 rounded-lg border border-white/[0.04] bg-white/[0.02] p-2.5 md:flex">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-gradient-to-br from-blue-500 to-violet-600" />
          <span className="font-bold text-white/70">Factex</span>
        </div>
        <div className="space-y-0.5">
          {["Dashboard", "Facturas", "Clientes", "Reportes", "Config"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded px-2 py-1 ${
                  i === 0 ? "bg-blue-500/20 text-blue-400" : "text-zinc-500"
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white/80">Dashboard</span>
          <div className="flex gap-1.5">
            <div className="h-4 w-4 rounded bg-white/[0.06]" />
            <div className="h-4 w-4 rounded-full bg-blue-500/60" />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Ingresos", val: "$48.2K", change: "+12%" },
            { label: "Facturas", val: "127", change: "+8%" },
            { label: "Cobrado", val: "94%", change: "+3%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-2"
            >
              <div className="text-zinc-500">{s.label}</div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="text-sm font-bold text-white/90">{s.val}</span>
                <span className="text-emerald-400">{s.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="flex flex-1 items-end gap-[3px] rounded-lg border border-white/[0.04] bg-white/[0.02] p-2">
          {[35, 55, 40, 65, 50, 75, 45, 80, 60, 90, 70, 95, 55, 85].map(
            (h, i) => (
              <div key={i} className="flex flex-1 flex-col justify-end h-full">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-blue-600/70 to-blue-400/50"
                  style={{ height: `${h}%` }}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
