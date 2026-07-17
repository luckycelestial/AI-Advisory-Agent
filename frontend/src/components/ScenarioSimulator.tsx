import React, { useState } from 'react';
import { 
  Sliders, 
  Play, 
  HelpCircle, 
  RefreshCw, 
  ShieldAlert, 
  TrendingUp,
  TrendingDown,
  Info,
  Loader2
} from 'lucide-react';
import type { DashboardData, SimulationParams } from '../services/api';
import { runSimulation } from '../services/api';

interface ScenarioSimulatorProps {
  data: DashboardData;
  onSimulationResult: (simulatedData: DashboardData) => void;
  onReset: () => void;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({ 
  data, 
  onSimulationResult,
  onReset
}) => {
  const [ordersMultiplier, setOrdersMultiplier] = useState(1.0);
  const [steelPriceMultiplier, setSteelPriceMultiplier] = useState(1.0);
  const [paymentDelayModifier, setPaymentDelayModifier] = useState(0);
  const [utilizationMultiplier, setUtilizationMultiplier] = useState(1.0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRunSimulation = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await runSimulation({
        ordersMultiplier,
        steelPriceMultiplier,
        paymentDelayModifier,
        utilizationMultiplier,
        filePath: data.summary.last_upload_filename
      });
      onSimulationResult(result);
    } catch (e: any) {
      setError(e.message || "Failed to simulate parameters.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocalReset = () => {
    setOrdersMultiplier(1.0);
    setSteelPriceMultiplier(1.0);
    setPaymentDelayModifier(0);
    setUtilizationMultiplier(1.0);
    onReset();
  };

  return (
    <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl p-6 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full translate-x-8 -translate-y-8"></div>
      
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Sliders size={18} />
          </div>
          <div>
            <h3 className="font-extrabold text-sm tracking-tight text-slate-900 font-sans">Scenario Simulator</h3>
            <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Override operational constraints to recalculate forecasts and risk scores</p>
          </div>
        </div>
        <button 
          onClick={handleLocalReset}
          className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          title="Reset Sliders"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Sliders Block 1: Volume */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-semibold">Orders Volume</span>
            <span className="text-blue-600 font-extrabold">{ordersMultiplier.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0.7" 
            max="1.3" 
            step="0.05"
            value={ordersMultiplier}
            onChange={(e) => setOrdersMultiplier(parseFloat(e.target.value))}
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[9px] text-slate-400 font-medium">
            <span>0.7x (Slowdown)</span>
            <span>1.3x (Surge)</span>
          </div>
        </div>

        {/* Sliders Block 2: Steel Price */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-semibold">Steel Prices Index</span>
            <span className="text-amber-600 font-extrabold">{steelPriceMultiplier.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0.8" 
            max="1.5" 
            step="0.05"
            value={steelPriceMultiplier}
            onChange={(e) => setSteelPriceMultiplier(parseFloat(e.target.value))}
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[9px] text-slate-400 font-medium">
            <span>0.8x (Margin Relief)</span>
            <span>1.5x (Severe Spike)</span>
          </div>
        </div>

        {/* Sliders Block 3: Payment Delay */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-semibold">Payment delays</span>
            <span className="text-rose-600 font-extrabold">
              {paymentDelayModifier > 0 ? `+${paymentDelayModifier}` : paymentDelayModifier} Days
            </span>
          </div>
          <input 
            type="range" 
            min="-5" 
            max="15" 
            step="1"
            value={paymentDelayModifier}
            onChange={(e) => setPaymentDelayModifier(parseInt(e.target.value))}
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          <div className="flex justify-between text-[9px] text-slate-400 font-medium">
            <span>-5 Days (Acceleration)</span>
            <span>+15 Days (Severe Delay)</span>
          </div>
        </div>

        {/* Sliders Block 4: Machine Util */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-semibold">Machine Utilization</span>
            <span className="text-emerald-600 font-extrabold">{utilizationMultiplier.toFixed(2)}x</span>
          </div>
          <input 
            type="range" 
            min="0.8" 
            max="1.2" 
            step="0.05"
            value={utilizationMultiplier}
            onChange={(e) => setUtilizationMultiplier(parseFloat(e.target.value))}
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-[9px] text-slate-400 font-medium">
            <span>0.8x (Downtime)</span>
            <span>1.2x (Optimized capacity)</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 text-left font-medium">
          <Info size={12} className="text-blue-500 flex-shrink-0" />
          <span>Click run to feed the new overridden parameters directly into the XGBoost and Gemma reasoning layer.</span>
        </div>
        
        <button
          onClick={handleRunSimulation}
          disabled={loading}
          className="w-full sm:w-auto px-5 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-slate-950/10 transition-all active:scale-[0.98]"
        >
          {loading ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              <span>Simulating Scenario...</span>
            </>
          ) : (
            <>
              <Play size={12} fill="currentColor" />
              <span>Run Scenario Simulation</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-rose-50 border border-rose-100 text-rose-600 text-xs rounded-xl flex items-center gap-2 font-medium">
          <ShieldAlert size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
