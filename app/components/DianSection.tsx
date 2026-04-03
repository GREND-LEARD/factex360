"use client";

import { motion } from "framer-motion";

// ─── Sección dedicada a Facturación Electrónica DIAN ────────────────────────
// Es el diferenciador clave del ERP — merece sección propia estilo Apple.

const dianFeatures = [
  {
    icon: (
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    ),
    title: "Bandeja DIAN",
    desc: "Consulta el estado de cada documento: aceptado, rechazado o pendiente. Filtra por tipo, estado, pago y fechas.",
  },
  {
    icon: (
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    ),
    title: "Envío Individual & Masivo",
    desc: "Envía facturas una por una o en lote. Sincronización automática de estado con la DIAN.",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
    title: "Notas Crédito & Débito",
    desc: "Genera notas electrónicas sobre cualquier factura. Validadas y sincronizadas con la DIAN automáticamente.",
  },
  {
    icon: (
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h.01M12 16h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01" />
    ),
    title: "Rangos de Numeración",
    desc: "Administra tus rangos autorizados por la DIAN. Control de consecutivos y configuración por sede.",
  },
  {
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4" />
    ),
    title: "Consulta Pública",
    desc: "Tus clientes pueden verificar la validez de sus facturas electrónicas con un enlace público seguro.",
  },
  {
    icon: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5M12 15V3" />
      </>
    ),
    title: "Descarga PDF Electrónico",
    desc: "PDF con representación gráfica oficial DIAN. Incluye QR de validación y CUFE.",
  },
];

export default function DianSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* Línea superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Gradiente de fondo sutil — tono institucional azul-cyan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(6,182,212,0.06),_transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-cyan-400">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                Cumplimiento DIAN
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Facturación Electrónica
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  100% válida ante la DIAN.
                </span>
              </h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 lg:mt-0 lg:text-right">
              Toda la resolución de facturación electrónica colombiana resuelta
              en un módulo nativo, sin integraciones de terceros.
            </p>
          </div>
        </motion.div>

        {/* ─── Bandeja DIAN mockup ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.04] px-5 py-3">
            <span className="text-sm font-semibold text-white">Bandeja DIAN</span>
            <div className="flex gap-1.5">
              {["Todas", "Aceptadas", "Rechazadas", "Pendientes"].map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                    i === 0
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button className="ml-auto rounded-lg bg-cyan-500/20 px-3 py-1.5 text-[11px] font-semibold text-cyan-400 transition-colors hover:bg-cyan-500/30">
              Enviar Lote a DIAN
            </button>
          </div>

          {/* Table header */}
          <div className="hidden grid-cols-6 gap-4 border-b border-white/[0.03] px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider text-zinc-600 sm:grid">
            <span>Referencia</span>
            <span>Cliente</span>
            <span>Fecha</span>
            <span>Total</span>
            <span>Estado DIAN</span>
            <span className="text-right">Acciones</span>
          </div>

          {/* Rows */}
          {[
            { ref: "FE-00847", client: "Comercial Éxito S.A.", date: "02 Abr 2026", total: "$4,850,000", status: "Aceptada", color: "text-emerald-400 bg-emerald-500/10" },
            { ref: "FE-00846", client: "TechCorp Ltda.", date: "01 Abr 2026", total: "$1,230,500", status: "Aceptada", color: "text-emerald-400 bg-emerald-500/10" },
            { ref: "FE-00845", client: "Distribuidora Global", date: "01 Abr 2026", total: "$890,000", status: "Pendiente", color: "text-amber-400 bg-amber-500/10" },
            { ref: "NC-00023", client: "Servicios Plus S.A.S.", date: "31 Mar 2026", total: "-$250,000", status: "Aceptada", color: "text-emerald-400 bg-emerald-500/10" },
            { ref: "FE-00844", client: "María Ruiz Ind.", date: "30 Mar 2026", total: "$3,150,750", status: "Rechazada", color: "text-red-400 bg-red-500/10" },
          ].map((row, i) => (
            <motion.div
              key={row.ref}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="grid grid-cols-2 items-center gap-3 border-b border-white/[0.02] px-5 py-3 text-xs transition-colors hover:bg-white/[0.02] sm:grid-cols-6 sm:gap-4"
            >
              <span className="font-mono font-medium text-white/80">{row.ref}</span>
              <span className="text-zinc-400">{row.client}</span>
              <span className="hidden text-zinc-500 sm:block">{row.date}</span>
              <span className="hidden font-medium text-white/70 sm:block">{row.total}</span>
              <span
                className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.color}`}
              >
                {row.status}
              </span>
              <div className="hidden justify-end gap-2 sm:flex">
                <button className="rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400 hover:bg-white/10 hover:text-white">
                  PDF
                </button>
                <button className="rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400 hover:bg-white/10 hover:text-white">
                  Sync
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Feature grid 3x2 ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dianFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 transition-all hover:border-cyan-500/15 hover:bg-white/[0.04]"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-4.5 w-4.5 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feat.icon}
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white">{feat.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-500">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
