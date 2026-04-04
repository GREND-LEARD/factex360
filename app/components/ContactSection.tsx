"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────────
   CONTACTO — Formulario premium + info de contacto
   ──────────────────────────────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "contacto@factex.co",
    href: "mailto:contacto@factex.co",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: "Teléfono",
    value: "+57 (601) 123 4567",
    href: "tel:+5716011234567",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "Oficina",
    value: "Bogotá, Colombia",
    href: null,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: "Horario",
    value: "Lun - Vie, 8:00 - 18:00",
    href: null,
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-black py-28 md:py-36">
      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_50%,_rgba(59,130,246,0.04),_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,_rgba(139,92,246,0.04),_transparent_70%)]" />

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/50">
            <svg className="h-3.5 w-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            Hablemos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            ¿Listo para transformar{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              tu negocio?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/40 md:text-lg">
            Cuéntanos sobre tu empresa y te mostramos cómo Factex puede automatizar tu operación. Sin compromiso.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5 md:gap-8 lg:gap-16">
          {/* ─── Form ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-12 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="mt-3 max-w-sm text-sm text-white/40">
                  Nuestro equipo te contactará en las próximas 24 horas. Revisa tu bandeja de entrada.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Enviar otro mensaje →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row: Nombre + Empresa */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/60">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/60">
                      Empresa
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Row: Email + Teléfono */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/60">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/60">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Plan de interés */}
                <div>
                  <label htmlFor="plan" className="mb-2 block text-sm font-medium text-white/60">
                    Plan de interés
                  </label>
                  <select
                    id="plan"
                    className="h-12 w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white/60 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                  >
                    <option value="" className="bg-zinc-900">Selecciona un plan</option>
                    <option value="starter" className="bg-zinc-900">Starter — $89,000/mes</option>
                    <option value="professional" className="bg-zinc-900">Professional — $189,000/mes</option>
                    <option value="enterprise" className="bg-zinc-900">Enterprise — Personalizado</option>
                    <option value="unsure" className="bg-zinc-900">No estoy seguro aún</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/60">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu empresa, cuántos usuarios necesitas, y cómo podemos ayudarte..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cta-shimmer relative flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/30 sm:w-auto sm:px-10"
                >
                  Enviar Mensaje
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── Info sidebar ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6 md:col-span-2"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-white/40 transition-colors group-hover:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/30">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-2 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
              <div className="mb-4 flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span className="text-xs font-semibold text-white/50">CONFIANZA GARANTIZADA</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "14 días de prueba gratis",
                  "Sin tarjeta de crédito requerida",
                  "Migración de datos gratuita",
                  "Soporte en español 24/7",
                  "Certificación DIAN incluida",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/40">
                    <svg className="h-3 w-3 text-emerald-500/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
