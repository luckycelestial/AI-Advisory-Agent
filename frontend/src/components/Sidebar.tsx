import React from 'react';
import { 
  LayoutDashboard, 
  Upload, 
  TrendingUp, 
  Users, 
  Globe, 
  FileText, 
  Settings, 
  Briefcase,
  Layers,
  MapPin,
  MessageSquare,
  Sparkles,
  Database
} from 'lucide-react';
import type { DashboardData } from '../services/api';

interface SidebarProps {
  data: DashboardData | null;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenChat: () => void;
  onTriggerUpload: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  data,
  activeSection,
  setActiveSection,
  onOpenChat,
  onTriggerUpload
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Business Data', icon: Upload, onClick: onTriggerUpload },
    { id: 'forecast', label: 'Revenue Intelligence', icon: TrendingUp },
    { id: 'customers', label: 'Customer Intelligence', icon: Users },
    { id: 'market', label: 'Market Intelligence', icon: Globe },
    { id: 'executive', label: 'Executive Advisor', icon: Sparkles },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (item.onClick) {
      item.onClick();
      return;
    }
    setActiveSection(item.id);
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const business = data?.summary || {
    business_name: "Meenakshi Precision Components",
    industry: "CNC Machining | Auto Ancillary",
    location: "Peenya, Bengaluru",
    employees: 18,
    machines: 8,
    last_upload_filename: "history_data.csv",
    last_upload_date: "16 Jul 2026, 10:22 PM",
    total_records_months: 36
  };

  const monthlyRevenue = data 
    ? `${data.kpis.avg_monthly_revenue_lakh} Lakh ₹` 
    : "68.57 Lakh ₹";
  const businessRisk = data 
    ? `${data.kpis.business_risk_category} (${data.kpis.business_risk_score})`
    : "Medium (45)";
  const topCustomer = "ABC Industries";
  const forecastStatus = data ? "Active / Sync" : "Ready";
  const lastAnalysisTime = data ? data.summary.last_upload_date : "16 Jul 2026, 10:22 PM";

  return (
    <div className="w-64 bg-white text-slate-700 min-h-screen p-5 flex flex-col justify-between border-r border-slate-200 flex-shrink-0 no-print font-sans">
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="p-2.5 bg-rose-500 rounded-2xl text-white">
            <Sparkles size={20} className="animate-pulse" />
          </div>
          <div>
            <h1 className="font-extrabold text-slate-900 tracking-tight text-sm font-sans leading-none">FinCent</h1>
            <span className="text-[10px] text-slate-400 font-medium font-sans">Revenue Intelligence</span>
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 text-left ${
                  isActive 
                    ? 'bg-rose-50 text-rose-600 font-bold border-l-4 border-rose-500 rounded-l-none' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Business Profile */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-3">
            <Briefcase size={12} className="text-slate-400" />
            <span>Business Profile</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-950 font-extrabold text-xs tracking-tight">{business.business_name}</h3>
            
            <div className="text-[10px] text-slate-500 flex flex-col gap-1.5 mt-1 border-t border-slate-200 pt-2">
              <div className="flex justify-between">
                <span>Industry:</span>
                <span className="text-slate-800 font-bold truncate max-w-[120px]" title={business.industry}>{business.industry}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-slate-800 font-bold truncate max-w-[120px]" title={business.location}>{business.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Scale:</span>
                <span className="text-slate-700 font-semibold">{business.employees} Empl | {business.machines} CNC</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5">
                <span>Monthly Rev:</span>
                <span className="text-slate-850 font-bold">{monthlyRevenue}</span>
              </div>
              <div className="flex justify-between">
                <span>Top Customer:</span>
                <span className="text-slate-800 font-bold">{topCustomer}</span>
              </div>
              <div className="flex justify-between">
                <span>Business Risk:</span>
                <span className={`font-bold ${
                  data && data.kpis.business_risk_category === 'High' ? 'text-rose-600' :
                  data && data.kpis.business_risk_category === 'Medium' ? 'text-amber-600' : 'text-emerald-600'
                }`}>{businessRisk}</span>
              </div>
              <div className="flex justify-between">
                <span>Forecast:</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  {forecastStatus}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5 text-[9px] text-slate-400">
                <span>Last Analysis:</span>
                <span>{lastAnalysisTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        {/* AI Analyst Support CTA */}
        <button
          onClick={onOpenChat}
          className="flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white p-3 rounded-xl transition-all duration-200 text-left border border-rose-400/20 shadow-md shadow-rose-500/10"
        >
          <div className="p-2 bg-white/15 rounded-lg flex-shrink-0">
            <MessageSquare size={14} />
          </div>
          <div>
            <p className="text-xs font-bold leading-tight">Need help?</p>
            <p className="text-[10px] text-rose-100 mt-0.5">Ask our AI Analyst</p>
          </div>
        </button>

        {/* CNC Owner Profile Widget */}
        <div className="flex items-center gap-3 border-t border-slate-200 pt-4 mt-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">
            N
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 leading-none">CNC Owner</p>
            <span className="text-[10px] text-slate-500 font-medium">Bengaluru Cluster</span>
          </div>
        </div>
      </div>
    </div>
  );
};
