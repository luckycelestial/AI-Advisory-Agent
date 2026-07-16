import { LuTrendingDown, LuLayers, LuSparkles, LuBookmark } from "react-icons/lu";

export default function StructuralRisk() {
  return (
    <div id="long-term-risks" className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
            <LuLayers size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
              Long-Term Demand Signals
            </h3>
            <p className="text-xs font-semibold text-slate-400">
              Structural market transitions & diversification guidance
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          <LuBookmark size={10} /> Watch List
        </span>
      </div>

      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
        <div className="flex justify-between items-center text-xs font-black uppercase text-slate-400">
          <span>Obsolescence Trend: ICE Part Production</span>
          <span className="text-red-500 font-bold flex items-center gap-1">
            <LuTrendingDown size={14} /> Softening Demand
          </span>
        </div>

        <div className="space-y-3">
          <h4 className="font-display font-bold text-slate-800 text-sm">
            Transition Risk: Traditional Engine Cylinder casting
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            Based on market forecast models, traditional ICE parts orders from Tier-1 auto-component distributors are projected to soften by 30% over the next 18 months due to accelerating EV adoption in Bengaluru's local clusters.
          </p>
        </div>

        {/* Gemma narrative suggestion */}
        <div className="p-4 rounded-xl bg-white border border-slate-100 flex items-start gap-3">
          <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <LuSparkles size={12} />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Gemma Diversification Advisory</p>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              "We recommend diversifying CNC production towards EV structural casings and heat sinks. 45% of your current milling tooling setup can be reprofiled without requiring major capital investments."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
