"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Producto", href: "/#producto" },
  { label: "Características", href: "/caracteristicas" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 transition-all duration-500 ${
        scrolled
          ? "rounded-2xl border border-white/10 bg-black/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
          : "rounded-2xl border border-transparent bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-3 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          {/* Icono logo — cubo minimalista */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white"
            >
              <path
                d="M2 5L8 2L14 5V11L8 14L2 11V5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 8V14M8 8L2 5M8 8L14 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Factex
          </span>
        </a>

        {/* Links — Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Iniciar Sesión
          </a>
          <a
            href="#"
            className="inline-flex h-9 items-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
          >
            Empezar Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M5 5L15 15M15 5L5 15" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H17" strokeLinecap="round" />
                <path d="M3 10H17" strokeLinecap="round" />
                <path d="M3 14H17" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-3">
                <a
                  href="#"
                  className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-zinc-400"
                >
                  Iniciar Sesión
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-white py-2.5 text-center text-sm font-semibold text-black"
                >
                  Empezar Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
