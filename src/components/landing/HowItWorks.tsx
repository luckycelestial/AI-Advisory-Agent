import { LuFolderInput, LuCombine, LuCalendarCheck, LuShieldAlert } from "react-icons/lu";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <LuFolderInput className="text-primary" size={24} />,
      title: "Connect your data",
      desc: "Import orders, bills, raw costs, and customer payment logs.",
    },
    {
      step: "02",
      icon: <LuCombine className="text-accent" size={24} />,
      title: "Gemma correlates signals",
      desc: "Finds underlying links between cost fluctuations, delays, and runway.",
    },
    {
      step: "03",
      icon: <LuCalendarCheck className="text-emerald-500" size={24} />,
      title: "Weekly ranked action plan",
      desc: "Get plain-language suggestions ordered by projected cash impact.",
    },
    {
      step: "04",
      icon: <LuShieldAlert className="text-amber-500" size={24} />,
      title: "Interrogate & simulate",
      desc: "Ask follow-up questions or simulate a decision before committing.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Process Flow</p>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            From Raw Numbers to a Ranked Action Plan
          </h2>
          <p className="text-slate-500 font-medium text-base">
            No complex setup. We transform sparse data into reliable operational guidance.
          </p>
        </div>

        {/* Horizontal Steps on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-card border border-slate-100 shadow-sm relative space-y-6 flex flex-col justify-between group hover:shadow-md transition-all duration-300"
            >
              {/* Step counter */}
              <div className="absolute top-4 right-6 font-display font-black text-3xl text-slate-100 group-hover:text-primary/10 transition-colors select-none">
                {item.step}
              </div>

              {/* Icon */}
              <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              {/* Copy */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-base text-slate-800 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
