"use client";

import { motion } from "framer-motion";

// ─── Bento Grid estilo Apple — muestra las capacidades clave del ERP ────────
// Cada celda tiene tamaños distintos para crear una composición visual dinámica.

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

export default function BentoGrid() {
  return (
    <section className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* Línea superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <span className="h-1 w-1 rounded-full bg-violet-500" />
            Capacidades
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hecho para quienes{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              exigen más.
            </span>
          </h2>
        </motion.div>

        {/* ─── Bento Grid ─────────────────────────────────────────────── */}
        <div className="grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── CELL 1: Facturación avanzada (grande) ────────────────── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group relative row-span-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-blue-500/[0.08] to-transparent p-7 transition-colors hover:border-blue-500/20"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Facturación Avanzada
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                POS completo con búsqueda de clientes, productos con stock, notas
                crédito/débito, soportes de pago, envío por correo y WhatsApp.
              </p>

              {/* Mini tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Notas Crédito", "WhatsApp", "PDF", "Cuotas", "Cotización → Factura"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup flotante */}
            <div className="absolute -right-6 bottom-0 w-52 translate-y-4 opacity-20 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-40">
              <InvoiceMini />
            </div>
          </motion.div>

          {/* ── CELL 2: Inventario por bodegas ───────────────────────── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-teal-500/[0.06] to-transparent p-7 transition-colors hover:border-teal-500/20"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20">
              <svg className="h-5 w-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 8h14M5 8a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Inventario Multi-Bodega</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Ajustes, transferencias entre bodegas, saldos iniciales, trazabilidad
              completa y carga masiva por Excel.
            </p>

            {/* Mini stock bars */}
            <div className="mt-5 space-y-2">
              {[
                { name: "Bodega Central", pct: 87, color: "bg-teal-500" },
                { name: "Bodega Norte", pct: 62, color: "bg-teal-400" },
                { name: "Bodega Sur", pct: 34, color: "bg-amber-500" },
              ].map((b) => (
                <div key={b.name}>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-500">{b.name}</span>
                    <span className="text-zinc-400">{b.pct}%</span>
                  </div>
                  <div className="mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className={`h-full rounded-full ${b.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CELL 3: Tesorería & Caja ─────────────────────────────── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-green-500/[0.06] to-transparent p-7 transition-colors hover:border-green-500/20"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm10 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 8h.01M18 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Tesorería & Caja</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Sesiones de caja, movimientos manuales, transferencias entre
              cuentas, saldos en tiempo real y reportes de cierre.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="flex h-6 items-center rounded-full bg-green-500/10 px-2.5 text-[11px] font-medium text-green-400">
                ● Caja abierta
              </span>
              <span className="text-xs text-zinc-600">$12,450,000</span>
            </div>
          </motion.div>

          {/* ── CELL 4: Compras & Proveedores ────────────────────────── */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-orange-500/[0.06] to-transparent p-7 transition-colors hover:border-orange-500/20"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20">
              <svg className="h-5 w-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-3V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM8 6h5M8 10h8M8 14h3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Compras</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Registro, confirmación, historial por proveedor, estadísticas y
              exportación a Excel.
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <div>
                <div className="text-2xl font-bold text-white">$28.4M</div>
                <div className="text-[11px] text-zinc-500">Compras del mes</div>
              </div>
              <span className="text-xs font-medium text-emerald-400">↑ 12%</span>
            </div>
          </motion.div>

          {/* ── CELL 5: Contabilidad (grande) ────────────────────────── */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="group relative row-span-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-indigo-500/[0.08] to-transparent p-7 transition-colors hover:border-indigo-500/20 lg:col-start-3"
          >
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
                  <path d="M8 7h8M8 11h5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Contabilidad Integrada
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400">
                Plan de cuentas, notas contables, parametrización por empresa.
                Conectada directamente con ventas, compras e inventario.
              </p>

              {/* Reportes contables list */}
              <div className="mt-6 space-y-2">
                {[
                  "Estado de Resultados",
                  "Balance General",
                  "Balance de Prueba",
                  "Libro Diario",
                  "Libro Mayor",
                ].map((r, i) => (
                  <div
                    key={r}
                    className="flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-2 text-xs"
                  >
                    <svg className="h-3.5 w-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
                      <path d="M14 2v6h6" />
                    </svg>
                    <span className="text-zinc-300">{r}</span>
                    <span className="ml-auto text-[10px] text-zinc-600">Excel / PDF</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── CELL 6: Gastos & Egresos ─────────────────────────────── */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-red-500/[0.06] to-transparent p-7 transition-colors hover:border-red-500/20"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Gastos & Egresos</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Control de salidas, pagos a crédito, filtros por
              fecha/usuario, categorías y exportación Excel.
            </p>
          </motion.div>

          {/* ── CELL 7: Reportes Gerenciales ─────────────────────────── */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.06] to-transparent p-7 transition-colors hover:border-cyan-500/20 sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
              <svg className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 16l4-8 4 4 5-10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">15+ Reportes</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Ventas, cartera, descuentos, valorización, bajo stock,
              productos más movidos. Todo exportable a Excel y PDF.
            </p>

            {/* Mini chart */}
            <div className="mt-4 flex items-end gap-1 h-16">
              {[30, 50, 40, 70, 55, 85, 60, 90, 75, 95, 68, 88].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-cyan-600/70 to-cyan-400/50"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Mini invoice mockup para decorar la celda de facturación ───────────────
function InvoiceMini() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-zinc-900/80 p-4 text-[9px]">
      <div className="mb-2 flex justify-between">
        <span className="font-bold text-white/60">INV-00142</span>
        <span className="text-emerald-400">Pagada</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between border-b border-white/[0.04] pb-1">
          <span className="text-zinc-500">Producto A x3</span>
          <span className="text-white/50">$45,000</span>
        </div>
        <div className="flex justify-between border-b border-white/[0.04] pb-1">
          <span className="text-zinc-500">Servicio B x1</span>
          <span className="text-white/50">$120,000</span>
        </div>
        <div className="flex justify-between border-b border-white/[0.04] pb-1">
          <span className="text-zinc-500">IVA 19%</span>
          <span className="text-white/50">$31,350</span>
        </div>
        <div className="flex justify-between pt-1 font-bold">
          <span className="text-zinc-400">Total</span>
          <span className="text-white/70">$196,350</span>
        </div>
      </div>
    </div>
  );
}
