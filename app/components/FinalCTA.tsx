"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// ─── Counter hook con easing ────────────────────────────────────────────────
function useCounter(target: number, inView: boolean, decimals = 0, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const current = target * eased;
      setValue(current);
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [target, inView, duration]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("es-ES");
}

// ─── Stats + Testimonial + CTA final ────────────────────────────────────────
export default function FinalCTA() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          STATS SECTION — números que impactan
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div ref={statsRef} className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Los números hablan{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                por sí solos.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <StatCard
              value={14}
              label="Módulos integrados"
              sublabel="ERP completo"
              inView={statsInView}
              delay={0}
              color="text-blue-400"
            />
            <StatCard
              value={60}
              suffix="+"
              label="Funcionalidades"
              sublabel="Comercializables"
              inView={statsInView}
              delay={0.1}
              color="text-violet-400"
            />
            <StatCard
              value={90}
              suffix="+"
              label="Operaciones"
              sublabel="Automatizadas"
              inView={statsInView}
              delay={0.2}
              color="text-emerald-400"
            />
            <StatCard
              value={15}
              suffix="+"
              label="Reportes"
              sublabel="Gerenciales y contables"
              inView={statsInView}
              delay={0.3}
              color="text-amber-400"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURE LIST — columnas lado a lado
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Control total.{" "}
              <span className="text-zinc-500">Cada detalle cubierto.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Desde ventas hasta contabilidad, pasando por inventario, cartera y
              tesorería. Un vistazo a todo lo que Factex cubre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureColumn
              title="Ventas & Facturación"
              items={[
                "Facturación avanzada POS",
                "Notas crédito y débito",
                "Soportes de pago",
                "Envío por correo y WhatsApp",
                "Cotizaciones → Facturas",
                "Descarga PDF personalizado",
                "Selección de caja en facturación",
                "Conversión cotización ↔ venta",
              ]}
              color="blue"
              delay={0}
            />
            <FeatureColumn
              title="Inventario & Compras"
              items={[
                "Multi-bodega con transferencias",
                "Ajustes de inventario",
                "Saldos iniciales por Excel",
                "Trazabilidad de movimientos",
                "Variantes y listas de precios",
                "Código de barras / escaneo",
                "Registro y confirmación de compras",
                "Estadísticas por proveedor",
              ]}
              color="teal"
              delay={0.1}
            />
            <FeatureColumn
              title="Finanzas & Contabilidad"
              items={[
                "Sesiones de caja con apertura/cierre",
                "Movimientos manuales + transferencias",
                "Cartera con cuotas y créditos",
                "Saldos a favor y devoluciones",
                "Plan de cuentas PUC",
                "Estado de resultados",
                "Balance general y de prueba",
                "Libros diario y mayor",
              ]}
              color="indigo"
              delay={0.2}
            />
          </div>

          {/* Extra columns */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureColumn
              title="Administración"
              items={[
                "Gestión multiempresa",
                "Sedes / oficinas",
                "Roles y permisos granulares",
                "Categorías de productos y egresos",
                "Impuestos configurables",
                "Métodos de pago",
                "Unidades de medida",
                "Carga inicial masiva",
              ]}
              color="slate"
              delay={0}
            />
            <FeatureColumn
              title="Reportes Gerenciales"
              items={[
                "Reporte de caja y movimientos",
                "Reporte de ventas por producto",
                "Reporte de cartera y créditos",
                "Reporte de descuentos",
                "Valorización de inventario",
                "Análisis de stock y alertas",
                "Exportación Excel / PDF",
                "Dashboard con KPIs en tiempo real",
              ]}
              color="cyan"
              delay={0.1}
            />
            <FeatureColumn
              title="Experiencia & Soporte"
              items={[
                "Notificaciones en tiempo real",
                "WebSocket para actualizaciones",
                "Tema visual personalizable",
                "Centro de ayuda integrado",
                "Autocompletado inteligente",
                "Drag & drop para archivos",
                "Impresión directa desde UI",
                "Suscripciones con Wompi",
              ]}
              color="pink"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA FINAL — full-width con gradiente
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-black pb-32 pt-20 md:pb-40 md:pt-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Glow de fondo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_60%,_rgba(59,130,246,0.12),_transparent)]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Tu negocio merece
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                un ERP de verdad.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
              14 módulos integrados, facturación electrónica DIAN, control total de
              ventas, inventario, compras, cartera, tesorería y contabilidad.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="cta-shimmer group relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-10 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98]">
                <span className="relative z-10">Solicitar Demo Gratis</span>
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
              <button className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-10 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:scale-[0.98]">
                Contactar Ventas
              </button>
            </div>

            <p className="mt-6 text-xs text-zinc-600">
              Sin tarjeta de crédito &middot; Configuración en minutos &middot;
              Soporte incluido
            </p>
          </motion.div>
        </div>

        {/* ─── Footer minimal ────────────────────────────────────────── */}
        <div className="relative mx-auto mt-24 max-w-6xl border-t border-white/[0.05] px-6 pt-8 md:mt-32">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M2 5L8 2L14 5V11L8 14L2 11V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 8V14M8 8L2 5M8 8L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">Factex</span>
            </div>
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Factex. Todos los derechos reservados.
            </p>
            <div className="flex gap-5">
              {["Producto", "Precios", "Contacto", "Términos"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-zinc-500 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Stat Card con counter animado ──────────────────────────────────────────
function StatCard({
  value,
  suffix = "",
  label,
  sublabel,
  inView,
  delay,
  color,
}: {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  inView: boolean;
  delay: number;
  color: string;
}) {
  const display = useCounter(value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 text-center md:p-8"
    >
      <div className={`text-4xl font-bold tracking-tight ${color} md:text-5xl`}>
        {display}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-white">{label}</div>
      <div className="mt-0.5 text-xs text-zinc-500">{sublabel}</div>
    </motion.div>
  );
}

// ─── Feature Column — lista de features con checks ─────────────────────────
function FeatureColumn({
  title,
  items,
  color,
  delay,
}: {
  title: string;
  items: string[];
  color: string;
  delay: number;
}) {
  const colorMap: Record<string, { border: string; bg: string; check: string; ring: string }> = {
    blue: { border: "border-blue-500/10", bg: "bg-blue-500/[0.04]", check: "text-blue-400", ring: "bg-blue-500/20" },
    teal: { border: "border-teal-500/10", bg: "bg-teal-500/[0.04]", check: "text-teal-400", ring: "bg-teal-500/20" },
    indigo: { border: "border-indigo-500/10", bg: "bg-indigo-500/[0.04]", check: "text-indigo-400", ring: "bg-indigo-500/20" },
    slate: { border: "border-slate-500/10", bg: "bg-slate-500/[0.04]", check: "text-slate-400", ring: "bg-slate-500/20" },
    cyan: { border: "border-cyan-500/10", bg: "bg-cyan-500/[0.04]", check: "text-cyan-400", ring: "bg-cyan-500/20" },
    pink: { border: "border-pink-500/10", bg: "bg-pink-500/[0.04]", check: "text-pink-400", ring: "bg-pink-500/20" },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`rounded-2xl border ${c.border} ${c.bg} p-6`}
    >
      <h3 className="mb-4 text-base font-bold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
            <svg
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${c.check}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
