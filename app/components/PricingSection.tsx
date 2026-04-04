"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────────
   PRICING SECTION — Tres planes con toggle mensual/anual
   ──────────────────────────────────────────────────────────────────────────── */

const plans = [
  {
    name: "Starter",
    description: "Para emprendedores y negocios pequeños que inician su camino digital.",
    priceMonthly: 89_000,
    priceYearly: 69_000,
    highlight: false,
    badge: null,
    features: [
      "Hasta 3 usuarios",
      "Facturación electrónica DIAN",
      "Módulo de ventas completo",
      "Inventario básico (1 bodega)",
      "Clientes y proveedores",
      "Reportes esenciales",
      "Soporte por correo",
      "Actualizaciones incluidas",
    ],
    cta: "Empezar Gratis",
    gradient: "from-zinc-600 to-zinc-400",
    accent: "text-zinc-400",
    border: "border-white/[0.06]",
    ctaClass:
      "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.08]",
  },
  {
    name: "Professional",
    description: "Para empresas en crecimiento que necesitan control total de su operación.",
    priceMonthly: 189_000,
    priceYearly: 149_000,
    highlight: true,
    badge: "Más Popular",
    features: [
      "Hasta 10 usuarios",
      "Facturación electrónica DIAN ilimitada",
      "Ventas + Compras + Cartera",
      "Inventario multi-bodega + Kardex",
      "Tesorería y conciliación bancaria",
      "Contabilidad + Centros de costo",
      "15+ reportes gerenciales",
      "Soporte prioritario 24h",
      "API de integración",
      "Notas crédito/débito masivas",
    ],
    cta: "Empezar Gratis",
    gradient: "from-blue-500 to-violet-500",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    ctaClass:
      "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/20",
  },
  {
    name: "Enterprise",
    description: "Para empresas grandes con operaciones complejas y necesidades a medida.",
    priceMonthly: null,
    priceYearly: null,
    highlight: false,
    badge: "Personalizado",
    features: [
      "Usuarios ilimitados",
      "Todos los 14 módulos",
      "Multi-empresa / Multi-sucursal",
      "Servidor dedicado",
      "Integración ERP existente",
      "Personalización a medida",
      "SLA 99.9% de disponibilidad",
      "Gerente de cuenta dedicado",
      "Migración de datos incluida",
      "Capacitación presencial",
    ],
    cta: "Contactar Ventas",
    gradient: "from-emerald-500 to-teal-400",
    accent: "text-emerald-400",
    border: "border-white/[0.06]",
    ctaClass:
      "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/[0.08]",
  },
];

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-CO").format(n);
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(59,130,246,0.06),_transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/50">
            <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Planes y precios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Un plan para cada{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              etapa de tu negocio.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/40 md:text-lg">
            Sin sorpresas, sin costos ocultos. Todos los planes incluyen facturación electrónica DIAN y actualizaciones.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !annual
                  ? "bg-white text-black shadow-lg"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                annual
                  ? "bg-white text-black shadow-lg"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Anual
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                -22%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border ${plan.border} bg-white/[0.015] p-8 transition-all duration-500 hover:border-white/[0.12] md:p-9 ${
                plan.highlight ? "ring-1 ring-blue-500/20 md:scale-[1.03]" : ""
              }`}
            >
              {/* Glow for highlighted plan */}
              {plan.highlight && (
                <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
              )}

              {/* Badge */}
              {plan.badge && (
                <span
                  className={`mb-5 inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-gradient-to-r ${plan.gradient} bg-clip-text px-3 py-1 text-xs font-semibold text-transparent`}
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/35">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 mb-8">
                {plan.priceMonthly !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        ${formatPrice(annual ? plan.priceYearly! : plan.priceMonthly)}
                      </span>
                      <span className="text-sm text-white/30">/mes</span>
                    </div>
                    {annual && (
                      <p className="mt-1.5 text-xs text-white/25">
                        Facturado anualmente · ${formatPrice(plan.priceYearly! * 12)}/año
                      </p>
                    )}
                  </>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                      A medida
                    </span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href={plan.priceMonthly ? "#contacto" : "#contacto"}
                className={`mb-8 flex h-12 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${plan.ctaClass}`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div className="mb-6 h-px bg-white/[0.06]" />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/50"
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.accent}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-white/25"
        >
          Todos los precios en COP. Incluye IVA. 14 días de prueba gratis sin tarjeta de crédito.
        </motion.p>
      </div>
    </section>
  );
}
