import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  Building, 
  HelpCircle, 
  Bell, 
  Globe, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import type { DashboardData } from '../services/api';

interface BusinessSettingsProps {
  data: DashboardData;
  onUpdateBusinessName?: (name: string) => void;
}

export const BusinessSettings: React.FC<BusinessSettingsProps> = ({ data, onUpdateBusinessName }) => {
  const [businessName, setBusinessName] = useState(data.summary.business_name);
  const [industry, setIndustry] = useState(data.summary.industry);
  const [currency, setCurrency] = useState('INR');
  const [horizon, setHorizon] = useState('8');
  const [model, setModel] = useState('gemma-4-31b-it');
  const [theme, setTheme] = useState('navy-slate');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    if (onUpdateBusinessName) {
      onUpdateBusinessName(businessName);
    }
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm max-w-4xl">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
            <Settings size={18} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 font-sans tracking-tight">Business Configuration</h3>
            <p className="text-xs text-slate-500">Configure parameters, reporting preferences, and copilot models</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs text-slate-700 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
              <Building size={12} className="text-blue-500" />
              <span>Company Name</span>
            </label>
            <input 
              type="text" 
              value={businessName} 
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide">Industry Classification</label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-blue-500"
            >
              <option value="CNC Machining | Auto Ancillary">CNC Machining | Auto Ancillary</option>
              <option value="Metal Fabrication | Sheet Metal">Metal Fabrication | Sheet Metal</option>
              <option value="Precision Tools Manufacturing">Precision Tools Manufacturing</option>
              <option value="General Mechanical Workshop">General Mechanical Workshop</option>
            </select>
          </div>

          {/* Currency */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide">Reporting Currency</label>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-blue-500"
            >
              <option value="INR">Lakh Rupees (₹ INR)</option>
              <option value="USD">Thousand Dollars ($ USD)</option>
              <option value="EUR">Thousand Euros (€ EUR)</option>
            </select>
          </div>

          {/* Forecast Horizon */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide">Forecast Horizon</label>
            <select 
              value={horizon} 
              onChange={(e) => setHorizon(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-blue-500"
            >
              <option value="8">8 Weeks (Default)</option>
              <option value="12">12 Weeks</option>
              <option value="24">24 Weeks</option>
            </select>
          </div>

          {/* AI Model */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
              <Cpu size={12} className="text-emerald-500" />
              <span>AI Copilot Model</span>
            </label>
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-emerald-500"
            >
              <option value="gemma-4-31b-it">Gemma 4 31B Instruct (Hackathon default)</option>
              <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
              <option value="gemini-2.5-pro">Gemini 2.5 Pro</option>
            </select>
          </div>

          {/* Visual Theme */}
          <div className="space-y-2">
            <label className="font-bold text-slate-600 uppercase tracking-wide">Interface Theme</label>
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-blue-500"
            >
              <option value="navy-slate">Navy Slate (Premium Dark Sidebar)</option>
              <option value="light">Operational Light Theme</option>
              <option value="dark">Full Dark Mode</option>
            </select>
          </div>
        </div>

        {/* Notifications and news settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
          <div className="space-y-3">
            <label className="font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
              <Bell size={12} className="text-blue-500" />
              <span>Smart Alert Subscriptions</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                <span>Notify me when payment delays on primary accounts exceed 15 days.</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                <span>Notify me when raw steel cost index surges more than 8%.</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
              <Globe size={12} className="text-blue-500" />
              <span>Intelligence News Crawlers</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                <span>Google News crawlers (Indian Manufacturing, PLI policy)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                <span>Moneycontrol steel raw materials indices</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
          <button
            type="submit"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm transition-colors"
          >
            {saved ? (
              <>
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Configurations Saved!</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>Save Configuration</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
