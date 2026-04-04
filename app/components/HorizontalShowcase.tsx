"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────────
   Showcase cards — cada una es una "pantalla" que se desplaza horizontalmente
   mientras el usuario scrollea verticalmente.
   ──────────────────────────────────────────────────────────────────────────── */

const showcaseItems = [
  {
    title: "Dashboard en Tiempo Real",
    description:
      "Visión completa de tu negocio. Ingresos, facturas, cobros y gastos desde un solo panel con cifras actualizadas al segundo.",
    gradient: "from-blue-600 to-blue-400",
    bg: "bg-blue-500/5",
    accent: "text-blue-400",
    mockup: "dashboard",
  },
  {
    title: "Facturación Electrónica",
    description:
      "Emite facturas validadas por la DIAN en segundos. Envío individual o masivo, notas crédito/débito, y consulta pública.",
    gradient: "from-cyan-500 to-teal-400",
    bg: "bg-cyan-500/5",
    accent: "text-cyan-400",
    mockup: "invoice",
  },
  {
    title: "Control de Inventario",
    description:
      "Multi-bodega, kardex automático, traslados entre sedes, control de lotes y alertas de stock mínimo todo en un clic.",
    gradient: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/5",
    accent: "text-violet-400",
    mockup: "inventory",
  },
  {
    title: "Tesorería Inteligente",
    description:
      "Gestión de cartera, recaudos, egresos y caja menor. Conciliación bancaria automática y flujo de caja proyectado.",
    gradient: "from-emerald-500 to-green-400",
    bg: "bg-emerald-500/5",
    accent: "text-emerald-400",
    mockup: "treasury",
  },
  {
    title: "Reportes Gerenciales",
    description:
      "Más de 15 reportes con filtros avanzados. Exportación a Excel, PDF y API. Toma decisiones con datos, no intuición.",
    gradient: "from-amber-500 to-yellow-400",
    bg: "bg-amber-500/5",
    accent: "text-amber-400",
    mockup: "reports",
  },
];

/* ─── Mini mockups CSS puro ─────────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-blue-400" />
        <div className="h-2 w-20 rounded-full bg-white/10" />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-3">
        {["$48.2K", "127", "94%"].map((v, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3"
          >
            <div className="text-[10px] text-white/30">
              {["Ingresos", "Facturas", "Cobrado"][i]}
            </div>
            <div className="mt-1 text-sm font-semibold text-white">{v}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5">
        {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-blue-400"
            style={{ height: `${h}%`, maxHeight: 80 }}
          />
        ))}
      </div>
    </div>
  );
}

function InvoiceMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-cyan-500/20" />
          <span className="text-xs font-medium text-white/60">FE-001247</span>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
          DIAN ✓
        </span>
      </div>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="mb-2 flex items-center justify-between border-b border-white/[0.04] pb-2"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-16 rounded bg-white/10" />
          </div>
          <div className="h-2 w-10 rounded bg-white/8" />
        </div>
      ))}
      <div className="mt-3 flex justify-between">
        <span className="text-[10px] text-white/30">Total</span>
        <span className="text-sm font-bold text-cyan-400">$1,842,500</span>
      </div>
    </div>
  );
}

function InventoryMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-violet-400" />
        <span className="text-[10px] text-white/40">Bodega Principal</span>
      </div>
      {["Producto A", "Producto B", "Producto C", "Producto D"].map(
        (name, i) => (
          <div
            key={i}
            className="mb-2 flex items-center justify-between text-[10px]"
          >
            <span className="text-white/50">{name}</span>
            <div className="flex items-center gap-2">
              <div
                className="h-1.5 rounded-full bg-violet-500/40"
                style={{ width: [64, 40, 80, 24][i] }}
              />
              <span className="w-6 text-right text-white/30">
                {[128, 64, 256, 12][i]}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

function TreasuryMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="mb-3 text-[10px] text-white/30">Flujo de caja</div>
      <div className="mb-4 text-xl font-bold text-emerald-400">
        $124.5M
      </div>
      <div className="flex items-end gap-1">
        {[30, 45, 25, 60, 50, 70, 40, 80, 55, 90].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col gap-0.5">
            <div
              className="rounded-t bg-emerald-500/50"
              style={{ height: h * 0.6 }}
            />
            <div
              className="rounded-b bg-red-500/30"
              style={{ height: (100 - h) * 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] text-white/40">Reporte Mensual</span>
        <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] text-amber-400">
          PDF
        </span>
      </div>
      {[
        { label: "Ventas", pct: 85 },
        { label: "Compras", pct: 62 },
        { label: "Margen", pct: 73 },
        { label: "Gastos", pct: 45 },
      ].map((r, i) => (
        <div key={i} className="mb-2">
          <div className="mb-1 flex justify-between text-[9px]">
            <span className="text-white/40">{r.label}</span>
            <span className="text-white/30">{r.pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
              style={{ width: `${r.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const mockups: Record<string, () => React.JSX.Element> = {
  dashboard: DashboardMockup,
  invoice: InvoiceMockup,
  inventory: InventoryMockup,
  treasury: TreasuryMockup,
  reports: ReportsMockup,
};

/* ────────────────────────────────────────────────────────────────────────────
   Componente principal — Horizontal Scroll Showcase
   ──────────────────────────────────────────────────────────────────────────── */
export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Translate horizontally based on vertical scroll
  // Each card is ~80vw on mobile, ~42vw on desktop + 2rem gap
  // We move from 0 to enough to show the last card
  const translateX = useTransform(
    smoothProgress,
    [0, 1],
    ["0vw", `-${(showcaseItems.length - 1) * 46}vw`]
  );

  // Progress line width
  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="features" ref={containerRef} className="relative h-[350vh]">
      {/* Sticky container — horizontal scroll illusion */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center pt-24 pb-8 md:pt-28 md:pb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/50"
          >
            <svg
              className="h-3.5 w-3.5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Desplaza para explorar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Todo lo que necesitas.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Nada que te falte.
            </span>
          </motion.h2>
        </div>

        {/* Progress line */}
        <div className="mx-auto mb-8 h-px w-full max-w-6xl bg-white/[0.06]">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Horizontal track */}
        <div className="relative flex-1">
          <motion.div
            className="absolute top-0 left-0 flex h-full items-stretch gap-6 px-[5vw]"
            style={{ x: translateX }}
          >
            {showcaseItems.map((item, i) => {
              const Mockup = mockups[item.mockup];
              return (
                <div
                  key={i}
                  className={`group relative flex w-[85vw] flex-shrink-0 flex-col overflow-hidden rounded-3xl border border-white/[0.06] ${item.bg} p-8 transition-all duration-500 hover:border-white/[0.12] sm:w-[70vw] md:w-[44vw] md:p-10`}
                >
                  {/* Glow on hover */}
                  <div
                    className={`pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20`}
                  />

                  {/* Number */}
                  <span
                    className={`mb-4 text-sm font-semibold ${item.accent} opacity-60`}
                  >
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-8 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
                    {item.description}
                  </p>

                  {/* Mockup */}
                  <div className="mt-auto h-48 w-full md:h-56">
                    <Mockup />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
