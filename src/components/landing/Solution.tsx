import { LuDatabase, LuBrain, LuClipboardList, LuArrowRight } from "react-icons/lu";

export default function Solution() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Solution Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">The Solution</p>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Meet Your AI CFO — Powered by Gemma
              </h2>
            </div>
            
            <p className="text-slate-600 font-medium text-base leading-relaxed">
              AI Advisory Agent pulls raw signals from your spreadsheets, accounting tools, and billing logs. It correlates supply chain price hikes, invoice delay trends, and pending orders to surface high-priority cash flow bottlenecks.
            </p>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 border-l-4 border-l-primary space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-primary">The Differentiator</p>
              <p className="text-sm font-bold text-slate-800 italic leading-relaxed">
                "A standard rules engine flags when a number crosses a line. Gemma explains why it matters for your business, this month."
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Flow Diagram */}
          <div className="lg:col-span-6 w-full bg-white p-8 rounded-card border border-slate-100 shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
            
            <div className="space-y-8">
              <h4 className="font-display font-bold text-slate-800 text-base border-b border-slate-100 pb-3">
                How Gemma Advisory Flows
              </h4>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative">
                {/* Step 1: Input */}
                <div className="flex-1 flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 w-full relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-3">
                    <LuDatabase size={20} />
                  </div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-1">1. Signals In</h5>
                  <p className="text-[10px] font-medium text-slate-500">Invoices, metal indexes, factory costs</p>
                </div>

                {/* Arrow */}
                <LuArrowRight className="hidden sm:block text-slate-300 shrink-0 rotate-90 sm:rotate-0" size={20} />

                {/* Step 2: Reasoning */}
                <div className="flex-1 flex flex-col items-center text-center p-4 rounded-2xl bg-sky-50 border border-sky-100 w-full relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-primary text-white flex items-center justify-center mb-3 shadow-md shadow-primary/20 animate-pulse">
                    <LuBrain size={20} />
                  </div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-primary mb-1">2. Gemma Core</h5>
                  <p className="text-[10px] font-medium text-slate-600">Cross-domain correlation & reasoning</p>
                </div>

                {/* Arrow */}
                <LuArrowRight className="hidden sm:block text-slate-300 shrink-0 rotate-90 sm:rotate-0" size={20} />

                {/* Step 3: Action */}
                <div className="flex-1 flex flex-col items-center text-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100 w-full relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-accent text-white flex items-center justify-center mb-3 shadow-md shadow-accent/20">
                    <LuClipboardList size={20} />
                  </div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-accent mb-1">3. Action Plan</h5>
                  <p className="text-[10px] font-medium text-slate-600">Ranked advisory cards & explanations</p>
                </div>
              </div>

              {/* Connecting lines for mobile visual */}
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs text-slate-400 font-semibold">
                <span>Direct Data Integrations</span>
                <span className="text-primary font-black uppercase">Low Latency Process</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
