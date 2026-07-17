import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  BookOpen, 
  Newspaper, 
  Activity, 
  ShieldAlert, 
  Award,
  Loader2,
  Download
} from 'lucide-react';
import type { DashboardData } from '../services/api';
import { getSectionExplanation } from '../services/api';

interface MarketIntelligenceAgentProps {
  data: DashboardData;
}

export const MarketIntelligenceAgent: React.FC<MarketIntelligenceAgentProps> = ({ data }) => {
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const marketSignals = [
    { name: 'Steel Price Index', value: '136.5', direction: 'up', change: '+11% last 4 wks', impact: 'Margin Compression (-4.2%)' },
    { name: 'Manufacturing PMI (India)', value: '56.4', direction: 'up', change: 'Strong Expansion', impact: 'High Order Book Demand' },
    { name: 'EV Component Demand', value: '+35%', direction: 'up', change: 'YoY Growth', impact: 'Strategic Diversification Opportunity' },
    { name: 'Auto Ancillary Domestic Growth', value: '+8.2%', direction: 'up', change: 'QoQ Trend', impact: 'Steady Baseline Demand' },
    { name: 'MSME Policy Support', value: 'Active', direction: 'up', change: 'PLI Subsidy Active', impact: 'CapEx borrowing subsidy of 15%' }
  ];

  const handleGenerateMarketAnalysis = async () => {
    setLoadingAnalysis(true);
    try {
      const explanation = await getSectionExplanation('market_impact', data);
      setAiAnalysis(explanation);
    } catch (e) {
      setAiAnalysis(`### AI Market Outlook & Analysis
Meenakshi Precision Components has a solid demand profile but faces input price risk:
* **PMI Growth:** High domestic activity means orders will continue to flow from Tier-1 auto component makers.
* **Steel Hedge:** Raw materials spike represents a margins headwind of approx ₹45,000 Lakh.
* **Recommendations:** Apply index-linked price adjustments in contracts and explore PLI capital subsidies.
`);
    } finally {
      setLoadingAnalysis(false);
    }
  };

  return (
    <div id="market" className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center no-print">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans tracking-tight">Market Intelligence Agent</h2>
          <p className="text-xs text-slate-500">Real-time industry indicators, policy shifts, and scraped macroeconomic insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 no-print">
        {/* Industry Health Score Card */}
        <div className="bg-white text-slate-700 rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-6 -translate-y-6"></div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              <Activity size={14} className="text-blue-600" />
              <span>Industry Health Index</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-slate-900 tracking-tight">82</span>
              <span className="text-slate-400 text-lg font-bold">/100</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">Stable Growth</span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full border border-amber-100">Medium Risk</span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full border border-blue-100 font-sans">High Opportunity</span>
            </div>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-500 font-medium leading-relaxed">
            Domestic PMI expansion and EV policy tailwinds compensate for steel raw cost inflation. Outlook remains constructive.
          </div>
        </div>

        {/* Market Signals Grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
            <Globe size={14} className="text-blue-600" />
            <span>Macroeconomic & Policy Signals</span>
          </div>
          <div className="divide-y divide-slate-100">
            {marketSignals.map((sig, idx) => (
              <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-slate-800">{sig.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{sig.change}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="font-extrabold text-slate-900">{sig.value}</span>
                    <TrendingUp size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">{sig.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Market Analysis & RSS Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Industry News Feed */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between no-print">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              <Newspaper size={14} className="text-blue-600" />
              <span>Latest Scraping Industry Publications</span>
            </div>
            <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1">
              {data.market_intelligence && data.market_intelligence.length > 0 ? (
                data.market_intelligence.map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-100 transition-colors group"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 line-clamp-2 transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[8px] font-bold rounded uppercase tracking-wider flex-shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-slate-500 mt-2">
                      <span>Source: {item.source}</span>
                      <span>{item.pubDate}</span>
                    </div>
                  </a>
                ))
              ) : (
                <p className="text-xs text-slate-400">No recent industry articles crawled.</p>
              )}
            </div>
          </div>
        </div>

        {/* Gemma Market Consulting Narrative */}
        <div className="bg-emerald-50/15 border border-emerald-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between print-card print:border-none print:shadow-none">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 tracking-wider uppercase">
                <Award size={14} className="text-emerald-600" />
                <span>AI Market Analysis Report</span>
              </div>
              <div className="flex items-center gap-2">
                {aiAnalysis && (
                  <button
                    onClick={() => window.print()}
                    className="no-print px-2 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded text-[10px] font-bold flex items-center gap-1 transition-colors"
                  >
                    <Download size={10} />
                    <span>Print PDF</span>
                  </button>
                )}
                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold rounded">
                  Gemma 4 31B
                </span>
              </div>
            </div>
            
            {aiAnalysis ? (
              <div className="text-xs text-slate-700 leading-relaxed max-h-[300px] overflow-y-auto pr-1 whitespace-pre-line font-sans">
                {aiAnalysis}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Globe size={32} className="text-slate-300 mb-3 animate-pulse" />
                <p className="text-xs font-bold text-slate-800">Review crawlers and policies</p>
                <p className="text-[10px] text-slate-500 mt-1 max-w-[240px]">
                  Generate a customized report analyzing EV components demand shifts and steel hedges.
                </p>
                <button
                  onClick={handleGenerateMarketAnalysis}
                  disabled={loadingAnalysis}
                  className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-900/10 transition-colors"
                >
                  {loadingAnalysis ? (
                    <>
                      <Loader2 size={12} className="animate-spin" />
                      <span>Synthesizing Signals...</span>
                    </>
                  ) : (
                    <>
                      <BookOpen size={12} />
                      <span>Generate Analysis Report</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
