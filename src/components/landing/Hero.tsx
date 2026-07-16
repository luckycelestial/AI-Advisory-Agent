"use client";

import { LuSparkles, LuArrowDown, LuShieldCheck, LuTrendingUp, LuDollarSign } from "react-icons/lu";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-sans font-bold text-xs uppercase tracking-wider">
            <LuSparkles size={14} className="animate-spin duration-1000" />
            <span>Powered by Google Gemma</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Your Business Decisions, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Explained
            </span> Before You Make Them.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
            Gemma reads your orders, costs, and customer data — then tells you exactly what to do next and why. No complex dashboards, just plain-language action plans.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => router.push("/pricing-agent")}
              className="btn-primary text-center cursor-pointer"
            >
              Try the Demo
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="btn-secondary flex items-center justify-center gap-2 group"
            >
              <span>See how it works</span>
              <LuArrowDown className="transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          {/* Trust Signal */}
          <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
            <LuShieldCheck className="text-accent shrink-0" size={18} />
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
              Built for Peenya, Jigani & Bommasandra manufacturing SMEs
            </p>
          </div>
        </div>

        {/* Right Column: Visual Mockup of Gemma Action Plan */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          {/* Main Card Backdrop */}
          <div className="w-full max-w-[450px] bg-white rounded-card shadow-2xl border border-slate-100 p-6 space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-sky-100">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Weekly Action Plan</p>
                <h4 className="font-display font-bold text-slate-800 text-lg">Platform Advisory</h4>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-black text-amber-700 bg-amber-50 rounded-full border border-amber-200 uppercase">
                Attention Required
              </span>
            </div>

            {/* Simulated Signal Graph Block */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">Input Material: Aluminium Alloy</span>
                <span className="text-xs font-black text-red-600 flex items-center gap-1">
                  <LuTrendingUp size={14} /> +12.4% cost
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Gemma Advisory Box (Highlighted Reasoning) */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 space-y-4 relative">
              <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LuSparkles size={14} />
              </div>
              <h5 className="font-display font-bold text-slate-800 text-sm flex items-center gap-2">
                Gemma Reasoning Core
              </h5>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl border border-sky-100/50 shadow-sm">
                  <p className="text-xs font-bold text-primary uppercase mb-1">Recommended Action:</p>
                  <p className="text-sm font-black text-slate-800">
                    Adjust Batch Selling Price to ₹412/kg (from ₹380) for metal casting orders.
                  </p>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Aluminum foundry prices surged 12.4% in Bommasandra cluster yesterday. Inaction will decrease your net cash runway below the 45-day safety threshold by next month."
                </p>
              </div>
            </div>

            {/* Footnote */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <LuDollarSign size={12} /> Projected Runway Safeguarded: 30 days
              </span>
              <span>Ref: G-352A</span>
            </div>
          </div>

          {/* Floating accent badge decoration */}
          <div className="absolute -bottom-6 -right-2 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 hidden sm:block max-w-[200px] animate-bounce duration-1000">
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Simulated Impact</p>
            <p className="text-lg font-black text-emerald-400">+14.2% Net Margin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
