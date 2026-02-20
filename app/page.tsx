"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const reviewsRow1 = [
  {
    id: 1,
    text: "Desde que uso NutriSaaS, he recuperado mis fines de semana. La integración con WhatsApp es simplemente genial.",
    name: "Sofia Martinez",
    role: "Nutricionista Clínica",
  },
  {
    id: 2,
    text: "La tasa de retención de mis pacientes aumentó un 40% gracias al seguimiento automatizado.",
    name: "Dr. Alejandro V.",
    role: "Deportólogo",
  },
  {
    id: 3,
    text: "La IA detecta comidas mejor que yo a veces. Es como tener un asistente 24/7.",
    name: "Carla Rossi",
    role: "Nutrition Coach",
  },
  {
    id: 4,
    text: "Mis pacientes aman no tener que descargar otra app. Todo por WhatsApp es el futuro.",
    name: "Miguel Ángel",
    role: "Nutricionista",
  },
];

const reviewsRow2 = [
  {
    id: 5,
    text: "Excelente soporte y una plataforma muy intuitiva. Me cambió la vida profesional.",
    name: "Dra. Lucia M.",
    role: "Health Coach",
  },
  {
    id: 6,
    text: "La mejor herramienta que he probado. Vale cada centavo por el tiempo que ahorro.",
    name: "Roberto Diaz",
    role: "Nutriólogo",
  },
  {
    id: 7,
    text: "Increíblemente fácil de usar. Mis pacientes mayores lo entienden a la primera.",
    name: "Elena Gomez",
    role: "Geriatra",
  },
  {
    id: 8,
    text: "La facturación automática y los recordatorios de citas son un plus enorme.",
    name: "Javier P.",
    role: "Clínica Vital",
  },
];

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: `No. NutriSaaS está diseñado para ser "plug and play". Te registras, conectas tu número de WhatsApp Business en 2 clicks y estás listo para recibir pacientes.`,
  },
  {
    q: "¿Qué tan precisa es la IA de fotos?",
    a: "Nuestra IA tiene una precisión del 92% en identificación de alimentos comunes. Sin embargo, tú siempre tienes la última palabra para ajustar porciones o ingredientes antes de que se guarde en el expediente.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, no hay contratos forzosos. Puedes cancelar tu suscripción mensual en cualquier momento desde tu panel de configuración.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} icon="solar:star-bold" width="16" />
      ))}
    </div>
  );
}

function ReviewCard({
  id,
  text,
  name,
  role,
}: {
  id: number;
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="w-80 md:w-96 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 flex-shrink-0">
      <Stars />
      <p className="text-sm text-slate-600 leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3 mt-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.pravatar.cc/150?u=${id}`}
          className="w-10 h-10 rounded-full object-cover bg-slate-100"
          alt={name}
        />
        <div>
          <p className="text-xs font-bold text-slate-900">{name}</p>
          <p className="text-[10px] text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-white rounded-2xl border transition-colors duration-300 ${open ? "border-teal-200" : "border-slate-200"}`}
    >
      <button
        className="flex justify-between items-center font-medium w-full text-left p-5 text-slate-800"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <Icon
          icon="solar:alt-arrow-down-linear"
          width="20"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="text-slate-500 px-5 pb-5 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NutriSaaSPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const basicPrice = isAnnual ? 24 : 29;
  const proPrice = isAnnual ? 49 : 59;

  return (
    <main className="min-h-screen text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden bg-white">
      {/* ── Estilos globales (animaciones custom) ───────────────────────── */}
      <style>{`
        .glass {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(0,0,0,0.06);
        }
        .feature-card {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -10px rgba(0,0,0,0.05);
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 60s linear infinite reverse;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .price-amount {
          transition: opacity 0.15s ease-in-out;
        }
      `}</style>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="glass flex transition-all md:gap-10 z-50 w-full max-w-4xl rounded-full mt-3 pt-3 pr-5 pb-3 pl-5 shadow-2xl backdrop-blur-xl gap-x-8 items-center justify-between border border-white/10 ring-1 ring-black/5">
          <a
            href="#"
            className="flex items-center gap-2 group text-base font-medium text-slate-950 tracking-tight"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-300 flex items-center justify-center text-slate-900 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Icon icon="solar:leaf-bold" width="16" />
            </div>
            Milutri
          </a>
          <div className="hidden md:flex gap-6 text-sm font-normal text-slate-950 items-center">
            <a
              href="#features"
              className="hover:text-teal-600 transition-colors"
            >
              Funciones
            </a>
            <a
              href="#pricing"
              className="hover:text-teal-600 transition-colors"
            >
              Precios
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              Nosotros
            </a>
          </div>
          <a
            href="#"
            className="px-5 py-2 text-xs font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            Ingresar
          </a>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="md:px-4 md:pt-4 pt-24 pr-2 pb-12 pl-2">
        <section className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-teal-50/50 to-white border border-slate-100 shadow-sm">
          {/* Blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-200/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-200/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />

          <div className="z-10 lg:pt-32 lg:pb-20 pt-20 pr-4 pb-0 pl-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-teal-100 backdrop-blur-sm text-[10px] md:text-xs font-bold tracking-widest text-teal-600 uppercase shadow-sm">
                  Software para Nutricionistas
                </span>
              </div>

              {/* Headlines */}
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1] mb-8 text-slate-900 mx-auto max-w-4xl">
                Tu consultorio,
                <br />
                <span className="text-slate-400/80">ahora en WhatsApp.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                Automatiza tus citas, analiza fotos de comidas con IA y mantén a
                tus pacientes motivados sin que salgan de su app favorita.
              </p>

              {/* CTA */}
              <div className="flex justify-center mb-16 md:mb-24">
                <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium text-sm transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 group active:scale-95 duration-200">
                  Comenzar prueba gratis
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>

              {/* Dashboard Mockup */}
              <div className="relative mx-auto max-w-5xl group animate-float-slow">
                <div className="absolute inset-0 bg-teal-300/20 blur-3xl -z-10 transform scale-90 translate-y-10" />
                <div className="relative bg-white rounded-[24px] p-2 md:p-3 shadow-2xl ring-1 ring-slate-900/5 mx-auto max-w-5xl">
                  <div className="bg-[#F2F2F7] w-full aspect-[5/3] rounded-[1.8rem] overflow-hidden relative">
                    <Image
                      src="/core.png"
                      alt="NutriSaaS Dashboard Preview"
                      fill
                      sizes="100vh"
                      className="object-cover object-top-left scale-108"
                      priority
                    />
                    {/* Fade hacia abajo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F2F2F7]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-24 px-4 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 mb-6 uppercase tracking-wider">
              Características
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Optimiza tu consulta con <br className="hidden md:block" />
              <span className="text-slate-400">funciones inteligentes</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Herramientas de nivel clínico diseñadas con la simplicidad de una
              app moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 (2/3) */}
            <div className="md:col-span-2 feature-card group bg-slate-50 rounded-[2rem] border border-slate-200/60 p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white hover:border-slate-300 cursor-default relative overflow-hidden">
              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Registro Total del Paciente
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Gestiona expedientes, historia clínica y datos antropométricos
                  de forma centralizada. Todo en un solo lugar.
                </p>
              </div>
              <div className="relative h-auto w-full md:w-1/2 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center gap-4 w-4/5 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-10 h-10">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-slate-100"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="100"
                        strokeDashoffset="30"
                        className="text-teal-500"
                      />
                    </svg>
                    <Icon
                      icon="solar:user-id-linear"
                      className="absolute text-teal-600 text-[10px]"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      1,850 kcal
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Objetivo diario
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 (1/3) */}
            <div className="md:col-span-1 feature-card group bg-slate-50 rounded-[2rem] border border-slate-200/60 p-8 flex flex-col justify-between hover:bg-white hover:border-slate-300 cursor-default">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Registro de Comidas
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Registro de comidas integrado con el paciente: fotos y
                  análisis automático.
                </p>
              </div>
              <div className="relative h-24 w-full flex items-center justify-center">
                <div className="flex -space-x-4 items-center justify-center group-hover:space-x-1 transition-all duration-300">
                  <div className="w-14 h-16 bg-white rounded-lg shadow-sm border border-slate-100 p-2 flex flex-col items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full border-[3px] border-slate-100 border-t-orange-400 border-r-orange-400 rotate-45 mb-1" />
                    <span className="text-[8px] font-bold text-slate-400">
                      CARBS
                    </span>
                  </div>
                  <div className="w-14 h-16 bg-white rounded-lg shadow-sm border border-slate-100 p-2 flex flex-col items-center justify-center z-20 scale-110">
                    <div className="w-8 h-8 rounded-full border-[3px] border-slate-100 border-t-blue-500 border-l-blue-500 -rotate-12 mb-1" />
                    <span className="text-[8px] font-bold text-slate-400">
                      PROT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 (1/3) */}
            <div className="md:col-span-1 feature-card group relative bg-slate-50 rounded-[2rem] border border-slate-200/60 p-8 flex flex-col hover:bg-white hover:border-slate-300 cursor-default overflow-hidden min-h-[280px]">
              <div className="relative z-10 mb-12">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Gestión de Citas
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Flujo de gestión de citas integrado con WhatsApp: agenda y
                  confirma.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
                <div className="absolute bottom-6 right-6 w-32 h-32">
                  <svg className="w-full h-full transform rotate-180 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-teal-500">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      style={{ animation: "spin 10s linear infinite" }}
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-teal-100 shadow-sm flex items-center gap-2 whitespace-nowrap">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-semibold text-slate-600">
                      Sync Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 (2/3) */}
            <div className="md:col-span-2 feature-card group relative bg-slate-50 rounded-[2rem] border border-slate-200/60 p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-white hover:border-slate-300 cursor-default overflow-hidden">
              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Facilitación del Proceso
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Elimina barreras tecnológicas para maximizar la adherencia de
                  tus pacientes al tratamiento nutricional.
                </p>
              </div>
              <div className="relative w-48 h-24 flex items-end justify-center">
                <div className="relative w-40 h-20 overflow-hidden">
                  <div className="absolute w-40 h-40 bg-slate-200 rounded-full top-0 left-0" />
                  <div
                    className="absolute w-40 h-40 bg-indigo-500 rounded-full top-0 left-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                      transform: "rotate(145deg)",
                      transformOrigin: "center",
                    }}
                  />
                  <div className="absolute w-32 h-32 bg-slate-50 group-hover:bg-white transition-colors duration-300 rounded-full top-4 left-4 flex items-end justify-center pb-2 z-10">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">
                      85
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────── */}
      <section className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-[#FAFAFA] border border-slate-100 shadow-sm mx-2 md:mx-4 py-24 my-12">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-500 mb-6 tracking-wide">
            Reseñas
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Historias Reales, Resultados Reales
          </h2>
        </div>

        <div className="flex flex-col gap-6 mb-24 marquee-mask relative z-10">
          {/* Row 1 – left */}
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-4">
            {[...reviewsRow1, ...reviewsRow1].map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
          {/* Row 2 – right */}
          <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] px-4">
            {[...reviewsRow2, ...reviewsRow2].map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
          {[
            { value: "10k+", label: "Nutricionistas" },
            { value: "99.9%", label: "Retención" },
            { value: "500M+", label: "Comidas Analizadas" },
          ].map(({ value, label }) => (
            <div key={label} className="p-4">
              <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-2">
                {value}
              </h3>
              <p className="text-sm text-slate-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="overflow-hidden hidden pt-24 pr-4 pb-24 pl-4 relative"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300/10 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Planes diseñados para crecer
            </h2>
            <p className="text-slate-500 text-lg">
              Elige la herramienta perfecta para tu etapa profesional.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center mt-8 gap-3">
              <span className="text-sm font-medium text-slate-900">
                Mensual
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? "bg-slate-900" : "bg-slate-200"}`}
                role="switch"
                aria-checked={isAnnual}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
              <span className="text-sm font-medium text-slate-500">
                Anual{" "}
                <span className="text-teal-700 text-[10px] font-bold uppercase bg-teal-100/50 border border-teal-200 px-2 py-0.5 rounded-full ml-1">
                  -20%
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Basic */}
            <div className="group relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="solar:leaf-bold" width="24" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
                  Básico
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Todo lo necesario para organizar tu consultorio digital.
                </p>
              </div>
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-5xl font-semibold text-slate-900 tracking-tighter price-amount">
                  ${basicPrice}
                </span>
                <span className="text-slate-400 text-lg font-medium">/mes</span>
              </div>
              <p
                className={`text-xs text-teal-600 font-medium h-6 transition-opacity mb-6 ${isAnnual ? "opacity-100" : "opacity-0"}`}
              >
                Facturado $288 anualmente
              </p>
              <div className="w-full h-px bg-slate-100 mb-8" />
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Hasta 20 Pacientes activos",
                  "Expediente clínico digital",
                  "Agenda con recordatorios",
                  "App para pacientes (PWA)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-slate-700"
                  >
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-teal-500 mt-0.5 flex-shrink-0"
                      width="18"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-semibold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Comenzar Gratis
              </button>
            </div>

            {/* Pro */}
            <div className="group flex flex-col overflow-hidden text-white bg-slate-900 h-full ring-4 ring-slate-900/5 rounded-[2rem] p-8 relative shadow-2xl shadow-slate-900/20">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-teal-500/30 transition-colors duration-500" />
              <div className="mb-6 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon icon="solar:stars-bold-duotone" width="24" />
                  </div>
                  <span className="py-1.5 px-3 rounded-full bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-teal-500/20">
                    Recomendado
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                  Profesional
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Automatización total e IA para escalar tu consultorio.
                </p>
              </div>
              <div className="mb-2 flex items-baseline gap-1 relative z-10">
                <span className="text-5xl font-semibold text-white tracking-tighter price-amount">
                  ${proPrice}
                </span>
                <span className="text-slate-400 text-lg font-medium">/mes</span>
              </div>
              <p
                className={`text-xs text-teal-300 font-medium h-6 transition-opacity mb-6 relative z-10 ${isAnnual ? "opacity-100" : "opacity-0"}`}
              >
                Facturado $588 anualmente
              </p>
              <div className="w-full h-px bg-white/10 mb-8 relative z-10" />
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {[
                  <>
                    <strong>Pacientes Ilimitados</strong>
                  </>,
                  "Bot de WhatsApp con IA 24/7",
                  "Análisis de Fotos de Comidas (IA)",
                  "Recordatorios Automáticos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-medium text-slate-200"
                  >
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-teal-400 mt-0.5 flex-shrink-0"
                      width="18"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold transition-all shadow-lg shadow-teal-500/25 relative z-10 active:scale-95 duration-200">
                Prueba 14 días gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="md:p-16 overflow-hidden text-center bg-slate-900 max-w-4xl rounded-[2.5rem] mx-auto px-8 py-8 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="z-10 relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Recupera 10 horas de tu semana.
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Deja de perseguir pacientes por WhatsApp. Únete a los
              nutricionistas que ya automatizaron su consultorio.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium transition-transform hover:scale-105 shadow-xl shadow-white/10 flex items-center justify-center gap-2 mx-auto">
              Crear cuenta gratis
              <Icon icon="solar:arrow-right-linear" />
            </button>
            <p className="text-slate-500 text-xs mt-6">
              No requiere tarjeta de crédito • 14 días de prueba
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="py-12 px-4 backdrop-blur-xl border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
              <Icon icon="solar:leaf-bold" width="14" />
            </div>
            <span className="font-medium text-slate-900 tracking-tight text-sm">
              Milutri
            </span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Contacto
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Icon icon="ri:twitter-x-line" width="18" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-rose-500 transition-colors"
            >
              <Icon icon="ri:instagram-line" width="18" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
