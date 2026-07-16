import { LuBrainCircuit, LuGithub } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                <LuBrainCircuit size={18} />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                AI Advisory <span className="text-primary font-black">Agent</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 max-w-sm">
              Localized reasoning engine explaining pricing, runway, and cash flow decisions for manufacturing SMEs.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="space-y-3">
              <h5 className="text-xs font-black uppercase text-white tracking-widest">Platform</h5>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-black uppercase text-white tracking-widest">Hackathon</h5>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                    <LuGithub size={12} /> GitHub Repo
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Google Build with Gemma</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} AI Advisory Agent. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="px-2.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-wider">
              Google Gemma
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
