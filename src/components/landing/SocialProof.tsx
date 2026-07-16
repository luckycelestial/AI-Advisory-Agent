import { LuAward, LuMapPin, LuGitBranch } from "react-icons/lu";

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Badge 1 */}
          <div className="flex items-center gap-6 p-6 rounded-card border border-slate-100 bg-slate-50/50">
            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm shrink-0">
              <LuAward size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Competition Entry</p>
              <h4 className="font-display font-bold text-slate-800 text-sm">Build with Gemma Hackathon</h4>
              <p className="text-[11px] text-slate-500 font-medium">Fine-tuned model using local business datasets.</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-6 p-6 rounded-card border border-slate-100 bg-slate-50/50">
            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-accent shadow-sm shrink-0">
              <LuMapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Target Geographies</p>
              <h4 className="font-display font-bold text-slate-800 text-sm">Bengaluru Clusters Focus</h4>
              <p className="text-[11px] text-slate-500 font-medium">Tailored metrics for Peenya, Bommasandra, & Jigani.</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-6 p-6 rounded-card border border-slate-100 bg-slate-50/50">
            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
              <LuGitBranch size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Open Infrastructure</p>
              <h4 className="font-display font-bold text-slate-800 text-sm">Open weights & Reproducible</h4>
              <p className="text-[11px] text-slate-500 font-medium">Gemma 2B/9B weights running on localized nodes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
