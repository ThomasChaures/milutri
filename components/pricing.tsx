import React from "react";
import { Icon } from "@iconify/react";

const pricing = () => {
  return (
    <>
      <section id="pricing" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Planes diseñados para crecer
            </h2>
            <p className="text-slate-500 text-lg">
              Elige la herramienta perfecta para tu etapa profesional.
            </p>

            {/* Toggle Funcional */}
            {/* <div className="flex items-center justify-center mt-8 gap-3 select-none">
              <span className="text-sm font-medium text-slate-900">
                Mensual
              </span>
              <div
                onClick={() => setIsAnnual(!isAnnual)}
                className="cursor-pointer relative flex items-center"
              >
                <div
                  className={`w-12 h-7 rounded-full transition-colors duration-300 ease-in-out ${isAnnual ? "bg-[#0D9488]" : "bg-slate-200"}`}
                ></div>
                <div
                  className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow transition-transform duration-300 ease-in-out ${isAnnual ? "translate-x-5" : "translate-x-0"}`}
                ></div>
              </div>
              <span className="text-sm font-medium text-slate-500">
                Anual{" "}
                <span className="text-teal-600 text-xs bg-teal-50 px-2 py-0.5 rounded-full ml-1">
                  -20%
                </span>
              </span>
            </div> */}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Card 1: Start */}
            <div className="glass-card rounded-[2rem] p-8 border border-white/40 flex flex-col h-full hover:bg-white transition-colors duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Start
                </h3>
                <p className="text-sm text-slate-500">
                  Para nutricionistas que inician.
                </p>
              </div>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-semibold text-slate-900 tracking-tight">
                  $29
                </span>
                <span className="text-slate-400 ml-2">/mes</span>
              </div>
              <ul className="space-y-5 mb-8 flex-1">
                <li className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <Icon
                      icon="solar:users-group-rounded-linear"
                      className="text-teal-600 flex-shrink-0"
                      width="18"
                    />
                    <span>20 Pacientes incluidos</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-8">
                    + $2 por paciente extra
                  </p>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-600 mt-0.5 flex-shrink-0"
                    width="18"
                  />
                  <span>Agenda básica</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-600 mt-0.5 flex-shrink-0"
                    width="18"
                  />
                  <span>App para pacientes</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Card 2: Pro (Highlighted) */}
            <div className="relative transform md:scale-105 z-10">
              <div className="absolute -inset-1 bg-gradient-to-b from-teal-400 to-teal-600 rounded-[2.2rem] opacity-30 blur-lg -z-10"></div>
              <div className="bg-white rounded-[2rem] p-8 border border-teal-100 shadow-2xl shadow-teal-900/10 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-teal-50 text-teal-700 text-[10px] font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Pro
                  </h3>
                  <p className="text-sm text-slate-500">
                    Automatización total.
                  </p>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-semibold text-slate-900 tracking-tight">
                    $79
                  </span>
                  <span className="text-slate-400 ml-2">/trimestre</span>
                  {/* NOTA: He mantenido "/trimestre" como estaba en tu HTML original */}
                </div>
                <ul className="space-y-5 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="bg-teal-100 rounded-full p-0.5">
                      <Icon
                        icon="solar:check-read-linear"
                        className="text-teal-600 flex-shrink-0 block"
                        width="14"
                      />
                    </div>
                    <span>Todo en Start</span>
                  </li>
                  <li className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <Icon
                        icon="solar:users-group-rounded-linear"
                        className="text-teal-600 flex-shrink-0"
                        width="18"
                      />
                      <span>100 Pacientes activos</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-[10px] text-teal-700 font-medium bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100/50 inline-block">
                        + $1 por paciente extra
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-teal-600 mt-0.5 flex-shrink-0"
                      width="18"
                    />
                    <span>WhatsApp Bot 24/7</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon
                      icon="solar:check-circle-linear"
                      className="text-teal-600 mt-0.5 flex-shrink-0"
                      width="18"
                    />
                    <span>Photo Analysis (AI)</span>
                  </li>
                </ul>
                <button className="w-full py-3.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25">
                  Prueba Pro 14 días
                </button>
              </div>
            </div>

            {/* Card 3: Scale */}
            <div className="glass-card rounded-[2rem] p-8 border border-white/40 flex flex-col h-full hover:bg-white transition-colors duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Scale
                </h3>
                <p className="text-sm text-slate-500">
                  Para clínicas y equipos.
                </p>
              </div>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-semibold text-slate-900 tracking-tight">
                  $290
                </span>
                <span className="text-slate-400 ml-2">/año</span>
                <span className="ml-auto text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">
                  Save 20%
                </span>
              </div>
              <ul className="space-y-5 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-600 mt-0.5 flex-shrink-0"
                    width="18"
                  />
                  <span>Multi-usuario (hasta 5)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-600 mt-0.5 flex-shrink-0"
                    width="18"
                  />
                  <span>Reportes avanzados</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <Icon
                    icon="solar:check-circle-linear"
                    className="text-teal-600 mt-0.5 flex-shrink-0"
                    width="18"
                  />
                  <span>API Access</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default pricing;
