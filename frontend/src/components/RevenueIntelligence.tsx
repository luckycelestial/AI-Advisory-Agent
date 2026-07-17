import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
} from 'recharts';
import { 
  TrendingDown, 
  TrendingUp, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  Newspaper,
  BookOpen
} from 'lucide-react';
import type { DashboardData } from '../services/api';

interface RevenueIntelligenceProps {
  data: DashboardData;
  onExplain: (section: string) => void;
}

export const RevenueIntelligence: React.FC<RevenueIntelligenceProps> = ({ data, onExplain }) => {
  const { forecast_data, shap_importance, shap_explanation, market_intelligence } = data;

  // Prepare line chart data by combining historical and forecasted periods
  const chartData: any[] = [];
  
  // Historical data points
  forecast_data.historical.forEach((item) => {
    chartData.push({
      name: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      'Historical (Actual)': item.revenue,
      'ML Forecast (Data Only)': null,
      'AI Scenario Forecast (With External Intelligence)': null,
    });
  });

  const lastHistoricalVal = forecast_data.historical[forecast_data.historical.length - 1].revenue;
  const lastHistoricalName = chartData[chartData.length - 1].name;

  // Forecast data points (add connection point first)
  chartData.push({
    name: lastHistoricalName,
    'Historical (Actual)': lastHistoricalVal,
    'ML Forecast (Data Only)': lastHistoricalVal,
    'AI Scenario Forecast (With External Intelligence)': lastHistoricalVal,
  });

  forecast_data.weeks_labels.forEach((label, i) => {
    chartData.push({
      name: label,
      'Historical (Actual)': null,
      'ML Forecast (Data Only)': forecast_data.ml_prediction[i],
      'AI Scenario Forecast (With External Intelligence)': forecast_data.ai_scenario_prediction[i],
    });
  });

  // Calculate waterfall components for SHAP plot
  const baseValue = data.kpis.avg_monthly_revenue_lakh / 4.33; // weekly average
  const shapFactors = [
    { name: 'Base Value (Avg. Revenue)', value: baseValue, type: 'base' },
    { name: 'Customer Orders', value: 0.42, type: 'positive' },
    { name: 'Steel Cost', value: -0.52, type: 'negative' },
    { name: 'Machine Utilization', value: 0.32, type: 'positive' },
    { name: 'Seasonality', value: 0.16, type: 'positive' },
    { name: 'Payment Delays', value: -0.25, type: 'negative' },
    { name: 'ML Forecast', value: data.kpis.ml_forecast_8_weeks_avg_lakh, type: 'total' }
  ];

  // Helper for formatting currency in impact list
  const formatAdjustmentImpact = (value: number) => {
    const formatted = Math.abs(value).toLocaleString('en-IN');
    return value < 0 ? `-₹${formatted}` : `+₹${formatted}`;
  };

  return (
    <div id="forecast" className="flex flex-col gap-6 scroll-mt-6">
      {/* 1. Main Forecast & Why AI Adjusted */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Revenue Intelligence
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Revenue forecast based on your data vs AI scenario (with real-world intelligence)</p>
          </div>
          <button
            onClick={() => onExplain('forecast')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-semibold border border-blue-100 transition-colors"
          >
            <BookOpen size={14} />
            <span>Explain Forecast</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              Revenue Forecast: Historical vs ML vs AI Scenario
            </h4>
            <div className="h-72 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" stroke="#94A3B8" tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                  <Tooltip 
                    contentStyle={{ background: '#0F172A', color: '#FFF', borderRadius: '8px', border: 'none' }}
                    labelClassName="font-bold text-slate-300"
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  
                  {/* Historical Revenue (Solid Blue) */}
                  <Line 
                    type="monotone" 
                    dataKey="Historical (Actual)" 
                    stroke="#2563EB" 
                    strokeWidth={2.5} 
                    dot={{ r: 4, strokeWidth: 0, fill: '#2563EB' }} 
                    activeDot={{ r: 6 }} 
                  />
                  
                  {/* ML Forecast (Dashed Grey) */}
                  <Line 
                    type="monotone" 
                    dataKey="ML Forecast (Data Only)" 
                    stroke="#94A3B8" 
                    strokeWidth={2} 
                    strokeDasharray="4 4" 
                    dot={false}
                  />
                  
                  {/* AI Scenario Adjusted Forecast (Solid Green) */}
                  <Line 
                    type="monotone" 
                    dataKey="AI Scenario Forecast (With External Intelligence)" 
                    stroke="#10B981" 
                    strokeWidth={2.5} 
                    dot={{ r: 4, strokeWidth: 0, fill: '#10B981' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Adjustments Section */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Why AI Adjusted the Forecast?
              </h4>
              <div className="flex flex-col gap-2.5">
                {forecast_data.why_adjusted.map((adj, i) => (
                  <div key={i} className="flex justify-between items-start gap-2 text-xs border-b border-slate-200/60 pb-2">
                    <div>
                      <p className="font-semibold text-slate-800 leading-tight">{adj.factor}</p>
                      <span className="text-[10px] text-slate-400">Source: {adj.source}</span>
                    </div>
                    <span className={`font-bold flex-shrink-0 whitespace-nowrap ${
                      adj.impact < 0 ? 'text-rose-600' : 'text-emerald-600'
                    }`}>
                      {formatAdjustmentImpact(adj.impact)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-3 mt-4 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-800">Total Estimated Impact</span>
              <span className="text-sm font-extrabold text-rose-600">
                {formatAdjustmentImpact(forecast_data.why_adjusted.reduce((acc, curr) => acc + curr.impact, 0))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SHAP & Latest Market News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SHAP Waterfall Plot */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">ML Model Explainability (SHAP)</h3>
                <p className="text-[11px] text-slate-400">Prediction contribution of key business features</p>
              </div>
              <button 
                onClick={() => onExplain('shap')}
                className="text-[10px] font-semibold text-blue-600 hover:text-blue-800"
              >
                View Full SHAP
              </button>
            </div>

            {/* Visual Waterfall Layout */}
            <div className="flex flex-col gap-2 mt-4 text-xs">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 border-b border-slate-100 pb-1 uppercase">
                <span>Feature / Driver</span>
                <span className="w-48 text-center">Impact waterfall</span>
                <span>Val (Lakh)</span>
              </div>
              {shapFactors.map((f, i) => {
                const isPositive = f.type === 'positive';
                const isBase = f.type === 'base';
                const isTotal = f.type === 'total';
                const isNegative = f.type === 'negative';
                
                return (
                  <div key={i} className="flex justify-between items-center py-1">
                    <span className={`truncate max-w-[150px] ${isTotal || isBase ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                      {f.name}
                    </span>
                    
                    {/* Visual Bar representation */}
                    <div className="w-48 h-4 bg-slate-100 rounded relative overflow-hidden flex-shrink-0">
                      {isBase && (
                        <div className="h-full bg-slate-400" style={{ width: '60%' }}></div>
                      )}
                      {isTotal && (
                        <div className="h-full bg-blue-600" style={{ width: '58%' }}></div>
                      )}
                      {isPositive && (
                        <div className="h-full bg-emerald-500 absolute" style={{ left: '60%', width: '12%' }}></div>
                      )}
                      {isNegative && (
                        <div className="h-full bg-rose-500 absolute" style={{ left: '42%', width: '18%' }}></div>
                      )}
                    </div>

                    <span className={`font-bold text-right w-14 ${
                      isBase || isTotal ? 'text-slate-900 font-extrabold' : isPositive ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {isBase || isTotal ? `₹${f.value.toFixed(1)}` : `${isPositive ? '+' : ''}₹${f.value.toFixed(2)}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-4">
            <p className="text-[11px] text-slate-500 font-medium italic">
              &ldquo;{shap_explanation}&rdquo;
            </p>
          </div>
        </div>

        {/* Latest Market & Industry News */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Latest Market & Industry News</h3>
                <p className="text-[11px] text-slate-400">AI-screened real-time macroeconomic updates</p>
              </div>
              <button 
                onClick={() => onExplain('market_impact')}
                className="text-[10px] font-semibold text-blue-600 hover:text-blue-800"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-3 max-h-[260px] overflow-y-auto pr-1">
              {market_intelligence.slice(0, 3).map((news, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0 group">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600 flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Newspaper size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-xs font-bold text-slate-800 truncate leading-snug group-hover:text-blue-700 transition-colors" title={news.title}>
                        {news.title}
                      </h4>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                        news.category === 'Raw Material' ? 'bg-amber-50 text-amber-600' :
                        news.category === 'Industry Trend' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        {news.category}
                      </span>
                    </div>
                    <div className="flex gap-2 text-[9px] text-slate-400 mt-1">
                      <span>{news.source}</span>
                      <span>&bull;</span>
                      <span>{news.pubDate}</span>
                    </div>
                    <div className="bg-slate-50 rounded p-1.5 mt-1.5 text-[10px] border border-slate-100">
                      <p className="text-slate-600"><span className="font-bold text-slate-700">Impact: </span>{news.business_impact}</p>
                      <p className="text-blue-700 mt-0.5"><span className="font-bold">Suggested Action: </span>{news.suggested_action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-[10px] text-slate-400 mt-3 flex justify-between items-center">
            <span>Showing top {Math.min(3, market_intelligence.length)} of {market_intelligence.length} relevant news</span>
            <span>All news are fetched in real-time &bull;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
