import { LuTrendingDown, LuTrendingUp, LuShieldAlert } from "react-icons/lu";

export default function Problems() {
  const painPoints = [
    {
      icon: <LuTrendingDown size={24} className="text-red-500" />,
      title: "Cash Flow Survival vs Growth",
      description: "6 in 10 SMEs seek working capital funding just to manage daily cash flow — not to grow. They get trapped in credit cycles.",
    },
    {
      icon: <LuTrendingUp size={24} className="text-amber-500" />,
      title: "Flying Blind on Pricing",
      description: "With a ₹30 lakh crore MSME credit gap, most manufacturing owners work on thin margins and fly blind on pricing and collection deadlines.",
    },
    {
      icon: <LuShieldAlert size={24} className="text-rose-500" />,
      title: "Spreadsheets Lack Insight",
      description: "No dedicated finance team? Raw numbers in spreadsheets show what happened, but they cannot explain why it happened or what to do next.",
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Critical Pain Points</p>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Your Data Has Answers.<br />You're Just Not Seeing Them.
          </h2>
          <p className="text-slate-500 font-medium text-base">
            Bengaluru's industrial hubs move fast. Relying on gut feel or lagging accounting books puts your factory at risk.
          </p>
        </div>

        {/* Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-card border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md space-y-4 group"
            >
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                {point.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800 tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
