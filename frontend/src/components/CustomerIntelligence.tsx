import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell,
  ReferenceArea,
  ReferenceLine,
  LabelList,
  ComposedChart,
  Bar,
  Line,
  Legend,
  PieChart,
  Pie
} from 'recharts';
import { 
  Users, 
  UserCheck, 
  AlertTriangle, 
  Percent, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  BookOpen,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import type { DashboardData, CustomerRecord } from '../services/api';

interface CustomerIntelligenceProps {
  data: DashboardData;
  onExplain: (section: string) => void;
}

export const CustomerIntelligence: React.FC<CustomerIntelligenceProps> = ({ data, onExplain }) => {
  const { customer_intelligence } = data;
  const [selectedCustKey, setSelectedCustKey] = useState<string>('ABC_Industries');

  const selectedCustomer = customer_intelligence.customers.find(c => c.key === selectedCustKey) 
    || customer_intelligence.customers[0];

  // Prepare data for the Scatter Risk Matrix
  const scatterData = customer_intelligence.customers.map(c => {
    const reliability = Math.max(10, 100 - (c.avg_payment_delay * 4.5)); // delay converts to reliability
    return {
      x: reliability,
      y: c.revenue_share,
      name: c.name,
      risk: c.risk_score,
      key: c.key
    };
  });

  // Pie chart data prep
  const pieData = customer_intelligence.customers.map(c => ({
    name: c.name,
    value: c.revenue_share
  }));

  const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#64748B'];

  // Risk Score Badge styling helper
  const getRiskBadge = (score: string) => {
    switch (score) {
      case 'High':
        return 'bg-rose-50 text-rose-600 border border-rose-100';
      case 'Medium':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      default:
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
    }
  };

  // Trend Arrow indicator helper
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} className="text-rose-500" />;
      case 'down':
        return <TrendingDown size={14} className="text-emerald-500" />;
      default:
        return <Minus size={14} className="text-slate-400" />;
    }
  };

  return (
    <div id="customers" className="flex flex-col gap-6 scroll-mt-6">
      {/* KPI Stats Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              Customer Intelligence
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Deep analysis of customer behaviour & payment patterns</p>
          </div>
        </div>

        {/* Small customer indicators */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Users size={16} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Customers</p>
              <h4 className="text-base font-black text-slate-800">{customer_intelligence.active_customers}</h4>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg"><UserCheck size={16} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Healthy Customers</p>
              <h4 className="text-base font-black text-slate-800">
                {customer_intelligence.healthy_customers_count} ({customer_intelligence.healthy_customers_pct}%)
              </h4>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-amber-100 text-amber-700 rounded-lg"><AlertTriangle size={16} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Medium Risk</p>
              <h4 className="text-base font-black text-slate-800">
                {customer_intelligence.medium_risk_count} ({customer_intelligence.medium_risk_pct}%)
              </h4>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-rose-100 text-rose-700 rounded-lg"><AlertTriangle size={16} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">High Risk</p>
              <h4 className="text-base font-black text-slate-800">
                {customer_intelligence.high_risk_count} ({customer_intelligence.high_risk_pct}%)
              </h4>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3 col-span-2 md:col-span-1">
            <div className="p-2 bg-purple-100 text-purple-700 rounded-lg"><Percent size={16} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Revenue Concentration</p>
              <h4 className="text-base font-black text-slate-800">Top 3 = {customer_intelligence.revenue_concentration_pct}%</h4>
            </div>
          </div>
        </div>

        {/* Matrix, Table, and Trend Chart Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scatter Plot Risk Matrix */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Customer Risk Matrix
              </h4>
              <p className="text-[9px] text-slate-400 mb-3">Revenue Contribution vs Payment Reliability</p>
            </div>
            
            <div className="h-64 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Payment Reliability" 
                    domain={[0, 100]} 
                    stroke="#94A3B8" 
                    tick={false}
                    axisLine={false}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Revenue Share" 
                    domain={[0, 40]} 
                    stroke="#94A3B8" 
                    tick={false}
                    axisLine={false}
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  
                  {/* Grid Lines/Background areas */}
                  <ReferenceLine x={50} stroke="#CBD5E1" strokeWidth={1} strokeDasharray="3 3" />
                  <ReferenceLine y={20} stroke="#CBD5E1" strokeWidth={1} strokeDasharray="3 3" />
                  
                  {/* Quadrant labels */}
                  <ReferenceArea x1={0} x2={50} y1={20} y2={40} fill="transparent" label={{ value: 'High Risk', position: 'insideTopLeft', fill: '#EF4444', fontSize: 10, fontWeight: 'bold' }} />
                  <ReferenceArea x1={50} x2={100} y1={20} y2={40} fill="transparent" label={{ value: 'Strategic (Monitor)', position: 'insideTopRight', fill: '#3B82F6', fontSize: 10, fontWeight: 'bold' }} />
                  <ReferenceArea x1={0} x2={50} y1={0} y2={20} fill="transparent" label={{ value: 'Low Risk', position: 'insideBottomLeft', fill: '#94A3B8', fontSize: 10, fontWeight: 'bold' }} />
                  <ReferenceArea x1={50} x2={100} y1={0} y2={20} fill="transparent" label={{ value: 'Healthy', position: 'insideBottomRight', fill: '#10B981', fontSize: 10, fontWeight: 'bold' }} />

                  <Scatter name="Customers" data={scatterData} fill="#3B82F6">
                    {scatterData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.risk === 'High' ? '#EF4444' : entry.risk === 'Medium' ? '#F59E0B' : '#10B981'}
                        onClick={() => setSelectedCustKey(entry.key)}
                        className="cursor-pointer hover:scale-125 transition-transform"
                      />
                    ))}
                    <LabelList dataKey="name" position="top" style={{ fontSize: 8, fontWeight: 'bold', fill: '#475569' }} />
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-100 pt-2 mt-2">
              <span>← Low Reliability</span>
              <span>High Reliability →</span>
            </div>
          </div>

          {/* Customer Table */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 overflow-x-auto">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Customer Payment Behaviour (Top 6)
            </h4>
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                  <th className="py-2">Customer</th>
                  <th className="py-2 text-right">Rev Share</th>
                  <th className="py-2 text-right">Avg Delay</th>
                  <th className="py-2 text-right">Invoices (Delayed)</th>
                  <th className="py-2 text-center">Trend</th>
                  <th className="py-2 text-center">Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customer_intelligence.customers.map((c) => (
                  <tr 
                    key={c.key} 
                    onClick={() => setSelectedCustKey(c.key)}
                    className={`hover:bg-slate-50 cursor-pointer transition-colors ${
                      selectedCustKey === c.key ? 'bg-blue-50/50 font-semibold' : ''
                    }`}
                  >
                    <td className="py-2 font-bold text-slate-800">{c.name}</td>
                    <td className="py-2 text-right">{c.revenue_share}%</td>
                    <td className="py-2 text-right">{c.avg_payment_delay}d</td>
                    <td className="py-2 text-right font-medium">
                      <span className={c.delayed_invoices > 0 ? 'text-rose-600' : 'text-slate-500'}>
                        {c.delayed_invoices}
                      </span>
                      <span className="text-slate-400">/{c.total_invoices}</span>
                    </td>
                    <td className="py-2 text-center flex justify-center mt-1">{getTrendIcon(c.trend)}</td>
                    <td className="py-2 text-center">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold ${getRiskBadge(c.risk_score)}`}>
                        {c.risk_score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Customer Trend Composed Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Customer Trend (Orders vs Payments)
                </h4>
                <p className="text-[9px] text-slate-400 mb-3">Compare volume and delays</p>
              </div>
              <select
                value={selectedCustKey}
                onChange={(e) => setSelectedCustKey(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-800 text-[10px] font-bold rounded p-0.5 focus:ring-blue-500 outline-none"
              >
                {customer_intelligence.customers.map(c => (
                  <option key={c.key} value={c.key}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="h-60 w-full text-[9px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={selectedCustomer.history} margin={{ top: 10, right: -10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#94A3B8" tickLine={false} />
                  <YAxis yAxisId="left" stroke="#3B82F6" tickLine={false} label={{ value: 'Lakh ₹', angle: -90, position: 'insideLeft', style: { fill: '#3B82F6' } }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#EF4444" tickLine={false} label={{ value: 'Delay (Days)', angle: 90, position: 'insideRight', style: { fill: '#EF4444' } }} />
                  <Tooltip />
                  <Legend verticalAlign="top" height={24} iconSize={8} />
                  <Bar yAxisId="left" dataKey="orders" name="Orders (Lakh ₹)" fill="#3B82F6" radius={[2, 2, 0, 0]} barSize={10} />
                  <Bar yAxisId="left" dataKey="payments" name="Payments (Lakh ₹)" fill="#10B981" radius={[2, 2, 0, 0]} barSize={10} />
                  <Line yAxisId="right" type="monotone" dataKey="delay" name="Payment Delay" stroke="#EF4444" strokeWidth={2} dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Specific Trend and AI Insights Panel */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
          <h3 className="text-sm font-bold text-slate-900">
            AI Customer Insights &mdash; <span className="text-blue-700">{selectedCustomer.name}</span>
          </h3>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${getRiskBadge(selectedCustomer.risk_score)}`}>
            {selectedCustomer.risk_score} Risk Account
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Customer stats summary */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue Contribution</p>
              <h4 className="text-lg font-black text-slate-800 mt-0.5">{selectedCustomer.revenue_share}%</h4>
              <p className="text-[9px] text-slate-400">of total business revenue</p>
            </div>
            <div className="border-t border-slate-200 pt-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Invoices (Last 12W)</p>
              <h4 className="text-sm font-bold text-slate-800 mt-0.5">₹9.84 Lakh <span className="text-xs text-slate-400">({selectedCustomer.total_invoices} invoices)</span></h4>
            </div>
            <div className="border-t border-slate-200 pt-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Payment Delay</p>
              <h4 className="text-sm font-bold text-slate-800 mt-0.5">{selectedCustomer.avg_payment_delay} Days</h4>
            </div>
            <div className="border-t border-slate-200 pt-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                <span>On-time Payment Rate</span>
                <span className={`font-bold ${
                  selectedCustomer.delayed_invoices === 0 ? 'text-emerald-600' : 'text-slate-700'
                }`}>
                  {Math.round(((selectedCustomer.total_invoices - selectedCustomer.delayed_invoices) / selectedCustomer.total_invoices) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* AI Narrative insight block */}
          <div className="lg:col-span-2 bg-blue-50/20 border border-blue-100 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/5 rounded-full translate-x-4 -translate-y-4"></div>
            <div>
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck size={14} />
                AI Analysis
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {selectedCustomer.ai_summary}
              </p>
              <p className="text-xs text-slate-600 mt-2 font-light">
                <span className="font-bold text-slate-700">Observed Behavior: </span>{selectedCustomer.ai_observed_behavior}
              </p>
              <p className="text-xs text-rose-700 mt-2.5 font-medium bg-rose-50/50 p-2 rounded border border-rose-100/50">
                <span className="font-bold">Business Cash Flow Impact: </span>{selectedCustomer.ai_business_impact}
              </p>
            </div>
            <div className="text-[10px] text-slate-400 border-t border-blue-100 pt-2 mt-4 flex justify-between items-center">
              <span>Confidence: <strong className="text-slate-600">{selectedCustomer.ai_confidence}</strong></span>
              <span className="text-blue-700 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
                View Customer Details <ArrowRight size={10} />
              </span>
            </div>
          </div>

          {/* Revenue Contribution by Customer Pie Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Revenue Contribution
            </h4>
            <div className="h-36 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-base font-black text-slate-800 leading-none">₹18.6</span>
                <span className="text-[8px] text-slate-400">Total (Monthly)</span>
              </div>
            </div>
            
            {/* Tiny color indicators for legend */}
            <div className="grid grid-cols-2 gap-1 text-[8px] mt-1 border-t border-slate-100 pt-1.5 text-slate-500">
              {pieData.slice(0, 4).map((entry, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="truncate">{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer specific Recommendations row */}
        <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Top Recommendations for {selectedCustomer.name} (AI)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-slate-800">Actionable Credit Strategy</p>
                <p className="text-[11px] text-slate-600 mt-0.5">{selectedCustomer.ai_recommendation}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-slate-800">Operational Alignment</p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  {selectedCustomer.risk_score === 'High' 
                    ? 'Tighten credit limits and request advance payment before machining operations.' 
                    : 'Maintain current relationship strength and plan capacity allocation for recurring parts.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
