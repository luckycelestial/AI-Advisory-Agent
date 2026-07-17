import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Cpu, 
  ShieldAlert, 
  ArrowRightLeft, 
  CheckCircle,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import type { DashboardData } from '../services/api';

interface KPISectionProps {
  data: DashboardData;
}

export const KPISection: React.FC<KPISectionProps> = ({ data }) => {
  const { kpis } = data;

  const formatLakh = (value: number) => {
    return `₹${value.toFixed(1)} Lakh`;
  };

  const formatDifference = (value: number) => {
    const absVal = Math.abs(value * 100000); // convert lakh to rupees
    const formatted = absVal.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    return value < 0 ? `-₹${formatted}` : `+₹${formatted}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* 1. Avg Monthly Revenue */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <DollarSign size={20} />
          </div>
          <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            kpis.revenue_change_pct >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
          }`}>
            {kpis.revenue_change_pct >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{Math.abs(kpis.revenue_change_pct)}%</span>
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Monthly Revenue</p>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            {formatLakh(kpis.avg_monthly_revenue_lakh)}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">vs previous 3M</p>
        </div>
      </div>

      {/* 2. ML Forecast (Next 8 Weeks) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Cpu size={20} />
          </div>
          <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            kpis.forecast_change_pct >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
          }`}>
            {kpis.forecast_change_pct >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{Math.abs(kpis.forecast_change_pct)}%</span>
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ML Forecast (8 Wks)</p>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            {formatLakh(kpis.ml_forecast_8_weeks_avg_lakh)}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">vs last 8 weeks</p>
        </div>
      </div>

      {/* 3. AI Scenario Forecast */}
      <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 bg-emerald-50/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full translate-x-4 -translate-y-4"></div>
        <div className="flex justify-between items-start">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <ShieldAlert size={20} />
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-rose-50 text-rose-600">
            <TrendingDown size={12} />
            <span>-8.1%</span>
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
            AI Scenario Forecast
          </p>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            {formatLakh(kpis.ai_scenario_forecast_lakh)}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">vs last 8 weeks</p>
        </div>
      </div>

      {/* 4. Scenario Impact */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <ArrowRightLeft size={20} />
          </div>
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            (kpis.ai_scenario_forecast_lakh - kpis.ml_forecast_8_weeks_avg_lakh) < 0 ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
          }`}>
            {(() => {
              const diff = kpis.ai_scenario_forecast_lakh - kpis.ml_forecast_8_weeks_avg_lakh;
              const pct = kpis.ml_forecast_8_weeks_avg_lakh > 0 ? Math.round((diff / kpis.ml_forecast_8_weeks_avg_lakh) * 100) : -8;
              return pct < 0 ? `${pct}%` : `+${pct}%`;
            })()}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Scenario Impact</p>
          <h3 className={`text-lg font-extrabold tracking-tight mt-1 ${
            (kpis.ai_scenario_forecast_lakh - kpis.ml_forecast_8_weeks_avg_lakh) < 0 ? 'text-rose-600' : 'text-emerald-600'
          }`}>
            {(kpis.ai_scenario_forecast_lakh - kpis.ml_forecast_8_weeks_avg_lakh) < 0 ? 'Margin Headwind' : 'Margin Growth'}
          </h3>
          <div className="flex flex-col gap-0.5 mt-1.5 text-[9px] text-slate-400">
            <span className="font-semibold text-slate-500">Primary Drivers:</span>
            <div className="flex flex-wrap gap-1 mt-0.5">
              <span className="px-1 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px]">Steel Prices</span>
              <span className="px-1 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px]">Payment Delays</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Business Risk Score & AI Confidence Combined */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl flex items-center gap-1.5">
            <AlertTriangle size={16} />
            <span className="text-[11px] font-bold">Risk: {kpis.business_risk_score}/100</span>
          </div>
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl flex items-center gap-1.5">
            <CheckCircle size={14} />
            <span className="text-[11px] font-bold">Conf: {kpis.confidence_pct}%</span>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Business Risk</span>
            <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded ${
              kpis.business_risk_category === 'High' ? 'bg-rose-50 text-rose-600' :
              kpis.business_risk_category === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
            }`}>
              {kpis.business_risk_category}
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-2 text-[9px] text-slate-500">
            {kpis.risk_factors.slice(0, 2).map((factor, i) => (
              <div key={i} className="flex justify-between border-t border-slate-100 pt-1">
                <span className="truncate max-w-[90px]">{factor.factor}</span>
                <span className="font-bold text-slate-700">{factor.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
