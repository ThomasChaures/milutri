// "use client";

// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import { useRouter } from "next/navigation";
// import { onboarding } from "@/services/nutritionist";
// import { redirectToWorkspace, workspaceHref } from "@/lib/utils/url";

// export default function OnboardingPage() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Estado para los datos (Simulado)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     // Validación paso 1
//     if (step === 1 && (!formData.firstName || !formData.lastName)) {
//       setError("Completá tu nombre y apellido.");
//       return;
//     }
//     // Validación paso 2
//     if (step === 2 && !formData.phone) {
//       setError("Ingresá tu número de WhatsApp.");
//       return;
//     }
//     setError("");

//     setStep((prev) => prev + 1);
//   };
//   const prevStep = () => {
//     setError("");
//     setStep((prev) => prev - 1);
//   };

//   // Simulación de finalización
//   const handleFinish = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const slug = await onboarding({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         phone: formData.phone,
//       });

//       const isProd = process.env.NODE_ENV === "production";
//       if (isProd) {
//         window.location.href = `https://${slug}.milutri.site`;
//       } else {
//         router.push(`/${slug}`);
//       }
//     } catch (err: any) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-center p-4">
//       {/* --- HEADER SIMPLE --- */}
//       <div className="mb-8 text-center animate-in fade-in slide-in-from-top-4 duration-700">
//         <div className="w-12 h-12 bg-ios-teal rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm mx-auto mb-4">
//           N
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
//           Configuremos tu cuenta
//         </h2>
//         <p className="text-gray-500 text-sm mt-1">Solo tomará unos minutos.</p>
//       </div>

//       {/* --- TARJETA PRINCIPAL --- */}
//       <div className="bg-white w-full max-w-lg rounded-[2.5rem] border border-gray-200 p-8 relative overflow-hidden shadow-sm">
//         {/* Barra de Progreso */}
//         <div className="flex justify-between items-center mb-8 px-2">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="flex items-center">
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
//                   step >= i
//                     ? "bg-ios-teal text-white"
//                     : "bg-gray-100 text-gray-400"
//                 }`}
//               >
//                 {step > i ? (
//                   <Icon icon="solar:check-read-linear" width="16" />
//                 ) : (
//                   i
//                 )}
//               </div>
//               {i < 3 && (
//                 <div
//                   className={`w-12 h-1 rounded-full mx-2 transition-all duration-300 ${
//                     step > i ? "bg-ios-teal" : "bg-gray-100"
//                   }`}
//                 ></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* --- PASO 1: DATOS PERSONALES --- */}
//         {step === 1 && (
//           <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
//             <div className="text-center">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 ¿Cómo te llamas?
//               </h3>
//               <p className="text-sm text-gray-400">
//                 Tus pacientes verán este nombre en su App.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-gray-500 ml-1">
//                   Nombre
//                 </label>
//                 <input
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Ej. Ana"
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all"
//                 />
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-gray-500 ml-1">
//                   Apellido
//                 </label>
//                 <input
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="García"
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={nextStep}
//               className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3.5 rounded-xl transition-all active:scale-[0.98]"
//             >
//               Continuar
//             </button>
//           </div>
//         )}

//         {/* --- PASO 2: WHATSAPP BOT --- */}
//         {step === 2 && (
//           <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Icon icon="solar:chat-round-dots-linear" width="24" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Conecta tu WhatsApp
//               </h3>
//               <p className="text-sm text-gray-400 max-w-xs mx-auto">
//                 Necesario para que el Bot envíe recordatorios y reciba las fotos
//                 de comidas.
//               </p>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-semibold text-gray-500 ml-1">
//                 Número de celular
//               </label>
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-300 pr-2">
//                   <Icon
//                     icon="solar:smartphone-linear"
//                     className="text-gray-400"
//                     width="18"
//                   />
//                   <span className="text-sm font-medium text-gray-600">+54</span>
//                 </div>
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   type="tel"
//                   placeholder="11 1234 5678"
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-24 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all"
//                 />
//               </div>
//               <p className="text-[10px] text-gray-400 ml-1 flex items-center gap-1">
//                 <Icon icon="solar:shield-check-linear" width="10" />
//                 No enviaremos spam. Solo notificaciones del sistema.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={prevStep}
//                 className="flex-1 bg-white border border-gray-200 text-gray-600 font-medium py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
//               >
//                 Atrás
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="flex-[2] bg-gray-900 hover:bg-black text-white font-medium py-3.5 rounded-xl transition-all active:scale-[0.98]"
//               >
//                 Continuar
//               </button>
//             </div>
//           </div>
//         )}

//         {/* --- PASO 3: TRIAL & PAGOS --- */}
//         {step === 3 && (
//           <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
//             <div className="text-center">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Comienza tu prueba gratis
//               </h3>
//               <p className="text-sm text-gray-400">
//                 7 días gratis, luego $20/mes. Cancela cuando quieras.
//               </p>
//             </div>

//             {/* Resumen del Trial (Caja de confianza) */}
//             <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 flex justify-between items-center">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-ios-teal">
//                   <Icon icon="solar:calendar-mark-bold-duotone" width="18" />
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm font-bold text-gray-800">
//                     Plan Profesional
//                   </p>
//                   <p className="text-xs text-teal-700">7 días de prueba</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm font-bold text-gray-900">$0.00</p>
//                 <p className="text-[10px] text-gray-500">Hoy</p>
//               </div>
//             </div>

//             {/* Formulario de Tarjeta (Mockup visual) */}
//             <div className="space-y-3">
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-gray-500 ml-1">
//                   Número de tarjeta
//                 </label>
//                 <div className="relative">
//                   <Icon
//                     icon="solar:card-linear"
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                     width="18"
//                   />
//                   <input
//                     name="cardNumber"
//                     type="text"
//                     placeholder="0000 0000 0000 0000"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all font-mono text-sm"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-gray-500 ml-1">
//                     Vencimiento
//                   </label>
//                   <input
//                     name="expiry"
//                     type="text"
//                     placeholder="MM/AA"
//                     className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all text-center"
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-gray-500 ml-1">
//                     CVC
//                   </label>
//                   <div className="relative">
//                     <Icon
//                       icon="solar:lock-password-linear"
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                       width="16"
//                     />
//                     <input
//                       name="cvc"
//                       type="text"
//                       placeholder="123"
//                       className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-teal-500/20 focus:border-ios-teal outline-none transition-all"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleFinish}
//               className="w-full bg-ios-teal hover:bg-teal-700 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-teal-500/30 active:scale-[0.98] flex items-center justify-center gap-2"
//             >
//               <Icon icon="solar:rocket-2-linear" width="20" />
//               Iniciar Prueba Gratis
//             </button>

//             <p className="text-center text-[10px] text-gray-400">
//               Pago seguro encriptado con SSL de 256 bits.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Footer simple */}
//       <div className="mt-8 flex gap-6 text-xs text-gray-400">
//         <span>Ayuda</span>
//         <span>Privacidad</span>
//         <span>Términos</span>
//       </div>
//     </div>
//   );
// }
