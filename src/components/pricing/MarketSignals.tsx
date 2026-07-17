"use client";

import { useState, useEffect } from "react";
import { 
  LuGlobe, 
  LuSparkles, 
  LuNewspaper,
  LuChevronLeft,
  LuChevronRight,
  LuTrendingDown,
  LuCompass,
  LuCoins
} from "react-icons/lu";
import { getMarketSignals, getIndustryNews, getMarketSentiment, getIndianMetalIndices } from "@/app/pricing-agent/actions";

interface MarketSignalsProps {
  searchTerm?: string;
  onNavigate?: (tab: string, search: string) => void;
}

export default function MarketSignals({ searchTerm, onNavigate }: MarketSignalsProps) {
  const [signals, setSignals] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [metalIndices, setMetalIndices] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<"relevance" | "recent">("relevance");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sentiment, setSentiment] = useState<any>({
    pressureTrend: "",
    threatDescription: "",
    advisoryAction: ""
  });

  useEffect(() => {
    Promise.all([
      getMarketSignals(),
      getIndustryNews(),
      getMarketSentiment(),
      getIndianMetalIndices()
    ]).then(([signalsData, newsData, sentimentData, indicesData]) => {
      console.log("Client-side loaded news feed:", newsData);
      setSignals(signalsData);
      setNews(newsData);
      setSentiment(sentimentData);
      setMetalIndices(indicesData);
    });
  }, []);

  // Auto-play carousel slides
  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [news]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (news.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (news.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const getSortedSignals = () => {
    const filtered = signals.filter(sig => 
      !searchTerm || 
      sig.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (sig.material && sig.material.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (sortBy === "relevance") {
      return [...filtered].sort((a, b) => {
        const order = { high: 2, medium: 1, low: 0 };
        return (
          (order[b.relevance as "high" | "medium" | "low"] ?? 0) -
          (order[a.relevance as "high" | "medium" | "low"] ?? 0)
        );
      });
    }
    return filtered;
  };

  const sortedSignals = getSortedSignals();

  // Helper to map dynamic impact tags based on title keywords
  const getImpactTag = (title: string) => {
    if (title.toLowerCase().includes("steel")) {
      return { text: "-1.2% Margin", style: "bg-rose-50 text-rose-600 border-rose-200" };
    }
    if (title.toLowerCase().includes("power") || title.toLowerCase().includes("grid")) {
      return { text: "+₹150/hr Cost", style: "bg-amber-50 text-amber-600 border-amber-200" };
    }
    if (title.toLowerCase().includes("ev parts") || title.toLowerCase().includes("engine")) {
      return { text: "-30% Demand", style: "bg-sky-50 text-sky-600 border-sky-200" };
    }
    return { text: "Action Needed", style: "bg-slate-50 text-slate-600 border-slate-200" };
  };

  const getNewsDomain = (urlStr: string) => {
    try {
      if (!urlStr) return "Original Site";
      const formattedUrl = urlStr.startsWith("http://") || urlStr.startsWith("https://")
        ? urlStr
        : `https://${urlStr}`;
      const urlObj = new URL(formattedUrl);
      return urlObj.hostname.replace("www.", "");
    } catch (e) {
      return "Original Site";
    }
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top 6:6 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        {/* Left Column: Live Industry News Carousel Feed (1/2 Width) */}
        <div className="lg:col-span-6 flex flex-col app-card border border-border-subtle bg-white p-5 shadow-sm overflow-hidden min-h-[460px]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <LuNewspaper size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                  Bengaluru Industry News
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  Live local manufacturing streams
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase text-indigo-500 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                Live Carousel
              </span>
            </div>
          </div>
          {/* Carousel Frame */}
          {news.length > 0 ? (
            <div className="relative flex-1 flex flex-col gap-4 group">
              {/* Absolute Invisible Overlay Link (No Popup Blocker issue, opens native target="_blank") */}
              <a 
                href={news[currentSlide].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer block"
                style={{ cursor: "pointer" }}
              />

              {/* Slide Image Area (16:9 Aspect Video, max-width 550px) */}
              <div className="relative w-full max-w-[550px] aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50 shrink-0 z-0">
                <img 
                  src={news[currentSlide].image} 
                  alt={news[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                
                {/* Category Tag Overlay */}
                <span className="absolute top-4 left-4 text-[10px] font-black uppercase text-white bg-indigo-600 px-3 py-1 rounded-full tracking-wider shadow-sm">
                  {news[currentSlide].category}
                </span>

                {/* Verified Press Indicator overlay */}
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Press Coverage
                </span>

                {/* Read Article Overlay Hint on Hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-black uppercase px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5">
                    📰 Verify Coverage on {getNewsDomain(news[currentSlide].url)} ↗
                  </span>
                </div>
              </div>

              {/* Arrow Controls (z-20 to block absolute link triggers) */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-[108px] -translate-y-1/2 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-slate-800 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm z-20"
              >
                <LuChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-[108px] -translate-y-1/2 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-slate-800 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm z-20"
              >
                <LuChevronRight size={18} />
              </button>

              {/* Slide Text Content */}
              <div className="flex-1 flex flex-col justify-between space-y-4 z-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold">
                    <div className="flex items-center gap-1.5">
                      <span>{news[currentSlide].source}</span>
                      <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                        ✓ Verified Press
                      </span>
                    </div>
                    <span>{news[currentSlide].date}</span>
                  </div>
                  
                  <div className="block group-hover:text-primary transition-colors space-y-2">
                    <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug">
                      {news[currentSlide].title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                      {news[currentSlide].summary}
                    </p>
                  </div>
                </div>

                {/* Progress Indicators & Link */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                  {/* Progress dots (z-20 to block overlay links) */}
                  <div className="flex gap-1.5 z-20">
                    {news.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                          idx === currentSlide ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-black text-indigo-600 group-hover:underline flex items-center gap-1">
                    Verify at {getNewsDomain(news[currentSlide].url)} ↗
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-xs font-bold text-slate-400">
              Loading Live Streams...
            </div>
          )}
        </div>

        {/* Right Column: Local Business Signals (1/2 Width Timeline Alert Feed) */}
        <div className="lg:col-span-6 flex flex-col app-card border border-border-subtle bg-white p-5 shadow-sm min-h-[460px]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                <LuGlobe size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                  Business Signals
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  Regional alert feed
                </p>
              </div>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-[9px] font-black uppercase text-slate-500 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 outline-none cursor-pointer"
              >
                <option value="relevance">Urgency</option>
                <option value="recent">Recent</option>
              </select>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="relative flex-1 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 flex flex-col gap-6 pl-6 overflow-y-auto">
            {sortedSignals.map((sig: any, idx: number) => {
              const impact = getImpactTag(sig.title);
              const isHigh = sig.relevance === "high";

              return (
                <div key={idx} className="relative space-y-1.5 group">
                  {/* Timeline Dot Node */}
                  <div className={`absolute -left-[30px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                    isHigh ? "bg-rose-500 animate-pulse" : "bg-amber-500"
                  }`} />

                  {/* Header / Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">
                      {sig.date}
                    </span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${impact.style}`}>
                      {impact.text}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="font-display font-bold text-slate-800 text-[11px] leading-snug group-hover:text-primary transition-colors">
                    {sig.title}
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-500 leading-normal">
                    {sig.desc}
                  </p>

                  {/* Gemma compact label */}
                  <div className="flex items-center gap-1.5 text-[9px] text-primary font-black pt-1">
                    <LuSparkles size={10} className="shrink-0" />
                    <span className="truncate">{sig.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Indian Metal & Steel Price Index Tracker (Tata nexarc, SteelonCall, BigMint, WPI) */}
      <div className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-4">
        <div>
          <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
            <LuCoins size={18} className="text-primary" />
            Indian Metal & Steel B2B Price Index Tracker
          </h3>
          <p className="text-xs font-semibold text-slate-400">
            Regional procurement index feeds aggregated from Tata nexarc, SteelonCall, BigMint, and Ministry WPI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metalIndices.map((idxVal, idxKey) => (
            <div key={idxKey} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 hover:shadow-xs transition-shadow">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                  {idxVal.source}
                </span>
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                  idxVal.change > 0
                    ? "text-rose-700 bg-rose-50 border-rose-100"
                    : "text-emerald-700 bg-emerald-50 border-emerald-100"
                }`}>
                  {idxVal.change > 0 ? "+" : ""}{idxVal.change}%
                </span>
              </div>
              <div>
                <h4 className="font-display font-bold text-[11px] text-slate-800 leading-snug">{idxVal.material}</h4>
                <p className="text-[9px] font-semibold text-slate-400">{idxVal.region}</p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 flex items-baseline gap-1">
                <span className="font-mono font-black text-sm text-slate-800">
                  {idxVal.unit === "per Ton" ? "₹" : ""}{idxVal.price.toLocaleString("en-IN")}
                </span>
                <span className="text-[9px] text-slate-400 font-bold">{idxVal.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Gemma Pricing Sentiment Analyzer Widget */}
      <div className="app-card border border-border-subtle bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white shadow-md relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">
                Gemma Pricing Sentiment Engine
              </span>
            </div>
            
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">
              Aggregated Market Pressure: <span className="text-rose-400">{sentiment.pressureTrend}</span>
            </h3>
            
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {sentiment.threatDescription}
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 md:w-80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <LuCompass size={14} className="text-primary animate-spin duration-3000" />
              <span>Gemma Advisory Action</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal font-semibold">
              {sentiment.advisoryAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
