"use client";

import { useState, useEffect } from "react";
import { LuTruck, LuSparkles, LuCheck } from "react-icons/lu";
import { getShipments } from "@/app/pricing-agent/actions";

interface SupplyChainTrackerProps {
  searchTerm?: string;
  onNavigate?: (tab: string, search: string) => void;
}

export default function SupplyChainTracker({ searchTerm, onNavigate }: SupplyChainTrackerProps) {
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    getShipments().then((data) => {
      setShipments(data);
    });
  }, []);

  const filteredShipments = shipments.filter((ship) =>
    !searchTerm || ship.material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="supply-chain" className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <LuTruck size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
              Supply Chain Node Tracker
            </h3>
            <p className="text-xs font-semibold text-slate-400">
              Raw material stage track & pricing impact
            </p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase text-slate-400">
          {filteredShipments.length} Active Shipments
        </span>
      </div>

      <div className="space-y-8">
        {filteredShipments.map((ship: any, idx: number) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-5">
            {/* Shipment Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-display font-bold text-sm text-slate-800">{ship.material.name}</h4>
                <p className="text-[10px] font-semibold text-slate-400">
                  Qty: {ship.qty} • Supplier: {ship.supplier}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                  ETA: {ship.eta}
                </span>
                <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
                  ship.status === "delayed" 
                    ? "bg-red-50 text-red-600 border-red-200" 
                    : "bg-emerald-50 text-emerald-600 border-emerald-200"
                }`}>
                  {ship.status}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="relative pt-2 pb-4">
              {/* Connecting line */}
              <div className="absolute top-[28px] left-4 right-4 h-0.5 bg-slate-200 -z-0" />
              
              <div className="grid grid-cols-5 text-center relative z-10">
                {ship.steps.map((step: any, sIdx: number) => {
                  let stepColor = "bg-slate-200 text-slate-400 border-slate-200";
                  if (step.status === "completed") {
                    stepColor = "bg-primary text-white border-primary";
                  } else if (step.status === "delayed") {
                    stepColor = "bg-red-500 text-white border-red-500 animate-pulse";
                  } else if (step.status === "on-time") {
                    stepColor = "bg-emerald-500 text-white border-emerald-500";
                  }
                  
                  return (
                    <div key={sIdx} className="flex flex-col items-center space-y-2">
                      <div className={`h-8 w-8 rounded-full border flex items-center justify-center font-display font-bold text-xs shadow-sm ${stepColor}`}>
                        {step.status === "completed" ? <LuCheck size={14} /> : sIdx + 1}
                      </div>
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter hidden sm:block">
                        {step.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gemma Advisory annotation banner */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 flex items-start gap-3">
              <div className="h-6 w-6 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <LuSparkles size={12} className="animate-spin duration-1000" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-primary tracking-wider">Gemma Node Advisory</p>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  "{ship.gemmaAnnotation}"
                </p>
              </div>
            </div>

            {/* Related Action Link */}
            {onNavigate && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => onNavigate("control", "")}
                  className="inline-flex items-center justify-center gap-1.5 border border-slate-200 text-slate-500 hover:bg-slate-50 px-4 py-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer shadow-xs"
                >
                  Review Pricing Advisory
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

