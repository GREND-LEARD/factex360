"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Los 14 módulos del ERP con iconos SVG inline ──────────────────────────
const modules = [
  {
    name: "Autenticación",
    desc: "Login, roles, permisos y control de sesiones",
    icon: (
      <path d="M12 2C9.24 2 7 4.24 7 7v3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V7c0-2.76-2.24-5-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3Zm0 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    ),
    gradient: "from-zinc-500 to-zinc-600",
  },
  {
    name: "Dashboard",
    desc: "KPIs, analítica de ventas y actividad",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="11" rx="1" />
        <rect x="3" y="13" width="7" height="8" rx="1" />
      </>
    ),
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Facturación POS",
    desc: "Crear facturas, notas, pagos y cuotas",
    icon: (
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
    ),
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Cotizaciones",
    desc: "Crear, exportar y convertir en ventas",
    icon: (
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-2 1 5 5h-5V3ZM8 13h8M8 17h5" />
    ),
    gradient: "from-sky-500 to-sky-600",
  },
  {
    name: "Clientes & Cartera",
    desc: "CRM, créditos, saldos y devoluciones",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    gradient: "from-violet-500 to-violet-600",
  },
  {
    name: "Proveedores",
    desc: "Gestión, historial y compras",
    icon: (
      <path d="M20 7h-3V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM8 6h5M8 10h8M8 14h3" />
    ),
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Productos",
    desc: "Variantes, precios, impuestos, multimedia",
    icon: (
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    ),
    gradient: "from-amber-500 to-amber-600",
  },
  {
    name: "Inventario",
    desc: "Ajustes, bodegas, transferencias, stock",
    icon: (
      <>
        <path d="M5 8h14M5 8a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
        <path d="M10 12h4" />
      </>
    ),
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Tesorería & Caja",
    desc: "Cuentas, sesiones, movimientos, reportes",
    icon: (
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm10 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 8h.01M18 16h.01" />
    ),
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Gastos & Egresos",
    desc: "Control, pagos, exportación y anulación",
    icon: (
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    ),
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "Contabilidad",
    desc: "Plan de cuentas, asientos y libros",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
        <path d="M8 7h8M8 11h5" />
      </>
    ),
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    name: "DIAN Electrónica",
    desc: "Bandeja, envío masivo, rangos, sync",
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </>
    ),
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Administración",
    desc: "Sedes, usuarios, roles, catálogos",
    icon: (
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    ),
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Suscripciones",
    desc: "Multiempresa, pagos, Wompi, historial",
    icon: (
      <>
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </>
    ),
    gradient: "from-pink-500 to-pink-600",
  },
];

// ─── Animación stagger para las cards ───────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ModulesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* Gradiente decorativo superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Ecosistema completo
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            14 módulos.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Un solo sistema.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Desde la autenticación hasta los reportes contables, cada módulo
            está integrado nativamente. Sin plugins, sin parches, sin fricciones.
          </p>
        </motion.div>

        {/* Grid de módulos */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 md:gap-4"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.name}
              variants={cardVariants}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5 text-center transition-all duration-400 hover:border-white/[0.12] hover:bg-white/[0.05]"
            >
              {/* Icono */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${mod.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {mod.icon}
                </svg>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  {mod.name}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-zinc-500">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Línea decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-16 h-px w-full max-w-md bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
      </div>
    </section>
  );
}
