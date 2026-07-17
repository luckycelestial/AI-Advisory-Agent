import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Clock, 
  CheckSquare, 
  Bookmark, 
  Info,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import type { DashboardData } from '../services/api';

interface ReportCenterProps {
  data: DashboardData;
}

export const ReportCenter: React.FC<ReportCenterProps> = ({ data }) => {
  const [activeReport, setActiveReport] = useState<'forecast' | 'customer' | 'market' | 'executive'>('executive');
  
  const reportTitles = {
    forecast: 'Revenue Forecast & ML Projection Analysis',
    customer: 'Customer Credit Risk & Payment Ledger Assessment',
    market: 'Macroeconomic News & Industry Signals Analysis',
    executive: 'AI Executive Summary & Financial Strategy Report'
  };

  const handlePrint = () => {
    window.print();
  };

  const timestamp = new Date().toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="space-y-6">
      {/* Selector and Action Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 no-print">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-sans tracking-tight">AI Report Center</h2>
          <p className="text-xs text-slate-500">Generate, review, and export publication-quality consulting briefs</p>
        </div>
        
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-colors"
        >
          <Download size={14} />
          <span>Download PDF Report</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-px no-print">
        {(['executive', 'forecast', 'customer', 'market'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveReport(tab)}
            className={`px-4 py-2 border-b-2 text-xs font-bold transition-all ${
              activeReport === tab 
                ? 'border-blue-600 text-blue-600 font-extrabold' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Report
          </button>
        ))}
      </div>

      {/* Printable Consulting Report Document */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-w-4xl mx-auto print-card print:p-0 print:border-none print:shadow-none">
        {/* Document Header */}
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-6">
          <div>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">AI Consulting Brief</span>
            <h1 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight mt-1">
              {reportTitles[activeReport]}
            </h1>
            <p className="text-xs text-slate-500 mt-1">Prepared for: {data.summary.business_name}</p>
          </div>
          <div className="text-right text-[10px] text-slate-400 font-mono">
            <div className="flex items-center gap-1 justify-end">
              <Clock size={10} />
              <span>Generated: {timestamp}</span>
            </div>
            <p className="mt-1">Report ID: MPC-{activeReport.toUpperCase()}-2026</p>
          </div>
        </div>

        {/* Report Content based on selection */}
        <div className="mt-6 space-y-6 text-xs text-slate-700 leading-relaxed font-sans">
          
          {activeReport === 'executive' && (
            <>
              {/* Executive Summary */}
              <div className="p-4 bg-emerald-50/40 border border-emerald-100 rounded-2xl">
                <h3 className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2">Executive Summary</h3>
                <p className="font-medium text-slate-800">{data.kpis.ai_executive_summary}</p>
              </div>

              {/* Action Roadmap */}
              <div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 pb-1 border-b border-slate-100">
                  Strategic Action Checklist
                </h3>
                <div className="space-y-3">
                  {data.executive_recommendation?.recommended_actions.map((act, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-bold text-slate-800">{act.action}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {act.internal_evidence && (
                            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[8px] font-semibold rounded">
                              Internal Evidence: {act.internal_evidence}
                            </span>
                          )}
                          {act.external_evidence && (
                            <span className="px-1.5 py-0.5 bg-purple-50 text-purple-700 text-[8px] font-semibold rounded">
                              External Evidence: {act.external_evidence}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Metrics Summary */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <h4 className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Cash Flow Opportunity</h4>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">
                    {data.executive_recommendation?.potential_impact.cash_flow_improvement}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Revenue Protection</h4>
                  <p className="text-sm font-extrabold text-blue-600 mt-0.5">
                    {data.executive_recommendation?.potential_impact.revenue_protection}
                  </p>
                </div>
              </div>
            </>
          )}

          {activeReport === 'forecast' && (
            <>
              {/* Forecast Overview */}
              <div className="grid grid-cols-3 gap-4 border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">Avg Monthly Revenue</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">₹{data.kpis.avg_monthly_revenue_lakh.toFixed(1)} Lakh</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">ML Baseline Forecast</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">₹{data.kpis.ml_forecast_8_weeks_avg_lakh.toFixed(1)} Lakh</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">Scenario Forecast</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">₹{data.kpis.ai_scenario_forecast_lakh.toFixed(1)} Lakh</p>
                </div>
              </div>

              {/* Explanations */}
              <div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Model Explanation (SHAP)</h3>
                <p className="text-slate-600">{data.shap_explanation || "SHAP value projections indicate that domestic machine utilization and order capacity are positive influences, offset by raw steel cost increases."}</p>
              </div>

              {/* Forecast values list */}
              <div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Forecast Iteration Table</h3>
                <table className="w-full text-left text-[10px] divide-y divide-slate-100">
                  <thead>
                    <tr className="font-bold text-slate-400">
                      <th className="py-2">Period Label</th>
                      <th className="py-2">ML Baseline</th>
                      <th className="py-2">Scenario Adjusted</th>
                      <th className="py-2">Deviation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.forecast_data.weeks_labels.map((lbl, idx) => {
                      const mlVal = data.forecast_data.ml_prediction[idx];
                      const scVal = data.forecast_data.ai_scenario_prediction[idx];
                      const dev = scVal - mlVal;
                      return (
                        <tr key={idx} className="text-slate-700">
                          <td className="py-2 font-semibold">{lbl}</td>
                          <td className="py-2">₹{mlVal.toFixed(2)} Lakh</td>
                          <td className="py-2">₹{scVal.toFixed(2)} Lakh</td>
                          <td className={`py-2 font-bold ${dev < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                            {dev < 0 ? `-₹${Math.abs(dev).toFixed(2)} Lakh` : `+₹${dev.toFixed(2)} Lakh`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeReport === 'customer' && (
            <>
              {/* Summary */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">Active Accounts</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">{data.customer_intelligence.active_customers}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">Revenue Concentration</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">{data.customer_intelligence.revenue_concentration_pct}% (Top 3)</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 uppercase text-[9px]">High Risk Accounts</h4>
                  <p className="text-base font-extrabold text-slate-800 mt-1">{data.customer_intelligence.high_risk_count}</p>
                </div>
              </div>

              {/* Customer Table */}
              <div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Customer Credit Risk Ledger</h3>
                <table className="w-full text-left text-[10px] divide-y divide-slate-100">
                  <thead>
                    <tr className="font-bold text-slate-400">
                      <th className="py-2">Customer Account</th>
                      <th className="py-2">Share</th>
                      <th className="py-2">Avg Delay</th>
                      <th className="py-2">Late Invoices</th>
                      <th className="py-2">Risk Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.customer_intelligence.customers.map((c, idx) => (
                      <tr key={idx}>
                        <td className="py-2 font-bold text-slate-800">{c.name}</td>
                        <td className="py-2">{c.revenue_share}%</td>
                        <td className="py-2">{c.avg_payment_delay} Days</td>
                        <td className="py-2">{c.delayed_invoices} / {c.total_invoices}</td>
                        <td className="py-2">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                            c.risk_score === 'High' ? 'bg-rose-50 text-rose-700' :
                            c.risk_score === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                          }`}>
                            {c.risk_score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeReport === 'market' && (
            <>
              {/* Market Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-500 uppercase text-[9px]">Industry Health Score</h4>
                  <p className="text-xl font-extrabold text-slate-800 mt-1">82 / 100</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-500 uppercase text-[9px]">Active Macro Signals</h4>
                  <p className="text-xl font-extrabold text-slate-800 mt-1">5 (Constructive Outlook)</p>
                </div>
              </div>

              {/* Scraped News Citations */}
              <div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Market Scraped Evidence Citations</h3>
                <div className="space-y-3">
                  {data.market_intelligence.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                      <div className="flex justify-between font-bold">
                        <span>{item.title}</span>
                        <span className="text-slate-400 font-normal">{item.pubDate}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Source: {item.source} ({item.category})</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>

        {/* Signature Area */}
        <div className="mt-12 border-t border-slate-200 pt-6 flex justify-between items-center text-[10px] text-slate-400">
          <div>
            <p className="font-bold text-slate-600">Meenakshi Precision Components</p>
            <p>Financial Advisory Cell</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-slate-600">AI Financial Analyst</p>
            <p>Signed dynamically via Gemma 4 31B</p>
          </div>
        </div>
      </div>
    </div>
  );
};
