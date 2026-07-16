"use client";

import { useRouter } from "next/navigation";
import { LuSparkles } from "react-icons/lu";

export default function CTA() {
  const router = useRouter();

  return (
    <section id="cta" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-50/30 to-white -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-sans font-bold text-xs uppercase tracking-wider">
          <LuSparkles size={12} />
          <span>Google Gemma Integration</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Explain Your Next Business Move.
        </h2>

        <p className="text-slate-500 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Stop flying blind. Let Gemma read your transaction streams and deliver a ranked, clear operational action plan. Try the hackathon demo now.
        </p>

        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            onClick={() => router.push("/pricing-agent")}
            className="btn-primary w-full sm:w-auto text-center text-sm font-black py-4 px-10 cursor-pointer shadow-xl shadow-primary/20"
          >
            Try the Demo
          </button>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Free sandbox access • No credit card required
          </span>
        </div>
      </div>
    </section>
  );
}
