"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image"; // Opcional: usa <img> si prefieres no configurar dominios

export default function NutriSaaSPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen text-slate-900 antialiased selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden">
      {/* --- Navegación (Floating Glass) --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="glass backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-sm">
          <a
            href="#"
            className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2"
          >
            <Icon
              icon="solar:leaf-bold-duotone"
              className="text-teal-600"
              width="20"
            />
            Milutri
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a
              href="#features"
              className="hover:text-slate-900 transition-colors"
            >
              Funciones
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-900 transition-colors"
            >
              Precios
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Blog
            </a>
          </div>
          <a
            href="#"
            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-all"
          >
            Proximamente
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-wide uppercase">
              En desarrollo.
            </span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Gestiona tu consultorio
            <br />
            <span className="text-slate-400">desde WhatsApp.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Automatiza citas, analiza fotos de comidas con IA y mantén a tus
            pacientes motivados sin salir de su app favorita.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-all shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 group">
              Comenzar prueba gratis
              <Icon
                icon="solar:arrow-right-linear"
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-full font-medium transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-2">
              <Icon icon="solar:play-circle-linear" width="20" />
              Ver demo
            </button>
          </div>

          {/* --- 3D iPad Mockup (Contenido Exacto) --- */}
          <div className="relative mx-auto max-w-5xl [perspective:2000px]">
            <div className="ipad-frame relative bg-slate-900 rounded-[2.5rem] p-[10px] md:p-[14px] shadow-2xl [transform:rotateX(12deg)] transition-transform duration-700 hover:[transform:rotateX(0deg)] mx-4 md:mx-0">
              {/* Pantalla del iPad */}
              <div className="bg-[#F2F2F7] w-full aspect-[16/10] rounded-[1.8rem] overflow-hidden flex relative text-left">
                <Image
                  src="/sc.png"
                  alt="NutriSaaS Dashboard Preview"
                  fill
                  className="object-cover scale-[1.01]"
                  priority
                />
                <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-16 w-1 bg-slate-800 rounded-l-md opacity-0 md:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      {/* --- Pricing Section (Coming Soon) --- */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        {/* Fondo decorativo sutil detrás de la tarjeta */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto">
          {/* Tarjeta Glass Grande */}
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 text-center border border-white/50 relative overflow-hidden">
            {/* Brillo superior decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

            <div className="flex flex-col items-center justify-center relative z-10">
              {/* Icono animado */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 animate-bounce duration-[3000ms]">
                <Icon
                  icon="solar:rocket-bold-duotone"
                  className="text-teal-600"
                  width="32"
                />
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Precios disponibles{" "}
                <span className="text-teal-600">muy pronto</span>
              </h2>

              <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
                Estamos ajustando los últimos detalles de nuestros planes para
                asegurarnos de ofrecerte la mejor relación valor-precio para tu
                consultorio.
              </p>

              {/* Formulario de Lista de Espera (Visual) */}
              {/* <div className="w-full max-w-md bg-white/50 p-2 rounded-full border border-white/60 shadow-sm flex flex-col sm:flex-row gap-2 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-transparent border-none px-6 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none text-sm"
                />
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-medium transition-all text-sm shadow-lg shadow-slate-900/10">
                  Avísame cuando lancen
                </button>
              </div> */}
            </div>

            {/* Decoración de fondo dentro de la tarjeta */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-400/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 blur-[60px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 px-4 border-t border-slate-200 bg-white/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon
              icon="solar:leaf-bold-duotone"
              className="text-teal-600"
              width="20"
            />
            <span className="font-semibold text-slate-900 tracking-tight">
              Milutri
            </span>
          </div>
          <div className="text-sm text-slate-500">
            © 2026 Milutri Inc. Design by Thomas Chaures.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-teal-600 transition-colors"
            >
              <Icon icon="brandico:twitter-bird" width="20" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-teal-600 transition-colors"
            >
              <Icon icon="brandico:instagram" width="20" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
