"use client";

import { LuTag, LuMessageSquare, LuSlidersHorizontal, LuArrowRight } from "react-icons/lu";

export default function Features() {
  const features = [
    {
      icon: <LuTag size={20} className="text-primary" />,
      title: "Pricing Agent",
      description: "Reacts instantly when raw material costs shift. Gemma calculates the exact product markup needed to preserve your gross margin, explaining the market reasoning.",
      mock: (
        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50 space-y-2 text-xs">
          <div className="flex justify-between font-bold text-slate-500">
            <span>Copper Index</span>
            <span className="text-red-500">+18%</span>
          </div>
          <div className="p-2 rounded bg-white border border-slate-100 text-[10px]">
            <p className="font-black text-slate-800">Gemma Action Plan:</p>
            <p className="text-slate-600">Raise batch selling price by <span className="text-primary font-bold">₹22/unit</span> to cover the index hike.</p>
          </div>
        </div>
      ),
    },
    {
      icon: <LuMessageSquare size={20} className="text-accent" />,
      title: "Ask Your AI CFO",
      description: "Ask anything in plain language. Get grounded answers backed by your actual transaction sheets, not generic chatbot responses.",
      mock: (
        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50 space-y-2 text-xs">
          <div className="bg-slate-200 text-slate-800 p-2 rounded-lg rounded-tr-none text-[9px] max-w-[85%] ml-auto">
            "Which clients owe me the most this month?"
          </div>
          <div className="bg-sky-50 text-sky-950 p-2 rounded-lg rounded-tl-none text-[9px] max-w-[90%] border border-sky-100">
            <span className="font-bold">Gemma:</span> "Client A (₹4.2L) and Client B (₹3.1L) are past due by 14 days."
          </div>
        </div>
      ),
    },
    {
      icon: <LuSlidersHorizontal size={20} className="text-emerald-500" />,
      title: "What-if Simulator",
      description: "Test high-risk decisions before locking them in. See the projected trajectory on your cash balance, gross margin, and payroll safety.",
      mock: (
        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-bold text-slate-600">Simulate: Hire 2 Machinists</span>
            <span className="text-emerald-600 font-bold">Active</span>
          </div>
          <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-100 text-[9px]">
            <span>Net cash balance (30 days):</span>
            <span className="text-red-500 font-bold">-₹1.4L impact</span>
          </div>
        </div>
      ),
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Key Capabilities</p>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Three Ways to Talk to Your Business Data
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Gemma powers interactions that feel less like checking static dashboards and more like talking directly with a senior business partner.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="p-8 rounded-card border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-800">
                    {feat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {feat.description}
                </p>

                {/* Mockup Visual */}
                <div className="pt-2">
                  {feat.mock}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-6 mt-6 border-t border-slate-100/50">
                <button
                  onClick={() => scrollToSection("cta")}
                  className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2 group-hover:text-primary-dark transition-colors cursor-pointer"
                >
                  <span>See it in action</span>
                  <LuArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
