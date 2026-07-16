"use client";

import { useState } from "react";
import { LuTrendingUp, LuGlobe, LuFilter, LuSparkles } from "react-icons/lu";

export default function MarketSignals() {
  const signalsData = [
    {
      title: "Global Steel Index Surges 6% Post Import Tariff Adjustment",
      source: "MetalBulletin News",
      date: "2 hours ago",
      relevance: "high", // high | medium | low
      tag: "Directly affects Mild Steel Rod order pricing (Order #221)",
      desc: "Supplier costs for Mild Steel Rods are set to escalate by ₹3,400/ton by next week.",
    },
    {
      title: "Bengaluru EV Parts Cluster Demand Increases by 30% YoY",
      source: "EconomicTimes Industry",
      date: "1 day ago",
      relevance: "medium",
      tag: "Long-term risk: 30% of your tooling output is ICE-specific",
      desc: "Traditional engine components face shrinking order volume. Shift to EV casing casting recommended.",
    },
    {
      title: "Bommasandra Power Grid Announces 4-Hour Scheduled Daily Maintenance",
      source: "BESCOM Notification",
      date: "2 days ago",
      relevance: "high",
      tag: "Affects CNC facility operational overhead costs",
      desc: "Generator fuel backup costs will rise by ₹150/hour, reducing net margins on batch casting orders.",
    }
  ];

  const [sortBy, setSortBy] = useState<"relevance" | "recent">("relevance");

  return (
    <div id="market-signals" className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <LuGlobe size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
              External Market Signals
            </h3>
            <p className="text-xs font-semibold text-slate-400">
              Real-time feeds pulled via MCP tool
            </p>
          </div>
        </div>
        
        {/* Filter controls */}
        <div className="flex items-center gap-2">
          <LuFilter size={14} className="text-slate-400" />
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 rounded px-2.5 py-1 focus:outline-none"
          >
            <option value="relevance">By Relevance</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {signalsData.map((sig, idx) => (
          <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-all duration-300 space-y-3 relative group">
            
            {/* Tag / Header */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                {sig.source} • {sig.date}
              </span>
              <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                sig.relevance === "high" 
                  ? "bg-red-50 text-red-600" 
                  : "bg-amber-50 text-amber-600"
              }`}>
                {sig.relevance} Relevance
              </span>
            </div>

            {/* Headline */}
            <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm group-hover:text-primary transition-colors">
              {sig.title}
            </h4>

            {/* Description */}
            <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
              {sig.desc}
            </p>

            {/* Gemma relevance annotation */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[10px] text-primary font-bold">
              <LuSparkles size={12} className="shrink-0" />
              <span>Gemma Relevance: {sig.tag}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
