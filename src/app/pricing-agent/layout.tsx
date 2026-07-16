"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import DataImportPanel from "@/components/pricing/DataImportPanel";
import { BusinessDataProvider, useBusinessData } from "./context";
import { LuShieldAlert } from "react-icons/lu";

export default function PricingAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-bold text-slate-600">Loading Pricing Agent...</p>
        </div>
      </div>
    }>
      <BusinessDataProvider>
        <PricingLayoutContent>{children}</PricingLayoutContent>
      </BusinessDataProvider>
    </Suspense>
  );
}

function PricingLayoutContent({ children }: { children: React.ReactNode }) {
  const { businessData, setBusinessData } = useBusinessData();
  const pathname = usePathname();
  const [isImportOpen, setIsImportOpen] = useState(false);

  useEffect(() => {
    // If user lands directly on a sub-page and businessData is null,
    // auto-simulate the mock data loading just like the original dashboard did.
    if (pathname !== "/pricing-agent" && !businessData) {
      setBusinessData({
        materials: [
          { name: "Aluminium Alloy (6061)", currentCost: 380, marketCost: 427.12, supplier: "Bommasandra Metal Casting" },
          { name: "Steel Rods (Mild)", currentCost: 58000, marketCost: 61480, supplier: "Peenya Steel Distributor" }
        ],
        orders: [
          { id: "ORD-221", client: "Client X", margin: "14.2%" },
          { id: "ORD-214", client: "Client Y", margin: "9.5%" }
        ]
      });
    }
  }, [pathname, businessData, setBusinessData]);

  return (
    <div className="design-timespent min-h-screen bg-background text-foreground flex font-sans antialiased">
      {/* Collapsible Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 pl-[170px] min-w-0 flex flex-col">
        {/* Header Bar */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-border-subtle px-6 py-4 flex items-center justify-between z-30 shadow-sm">
          <div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-slate-800">
              Pricing Agent
            </h1>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">
              Updated 4 min ago
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Context Grounding Connection Action */}
            {!businessData ? (
              <button
                onClick={() => setIsImportOpen(true)}
                className="relative inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/50 hover:bg-amber-50 text-amber-700 px-4.5 py-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer animate-pulse"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Connect Business Data
              </button>
            ) : (
              <button
                onClick={() => setIsImportOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-700 px-4.5 py-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                Data Connected
              </button>
            )}

            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black uppercase text-emerald-600 tracking-wider">
                Gemma Live
              </span>
            </div>
          </div>
        </header>

        {/* Inner Container */}
        <main className="flex-1 p-6 space-y-6 w-full">
          {!businessData ? (
            /* Empty State: Prompt to connect data */
            <div className="app-card bg-white p-12 text-center border border-border-subtle max-w-2xl mx-auto space-y-6">
              <div className="h-16 w-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mx-auto">
                <LuShieldAlert size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-slate-800">
                  No Connected Business Data
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md mx-auto">
                  To ground Gemma's reasoning in your actual order histories, customer sensitivities, and locked-in rates, please import a mock invoice quote PDF or spreadsheet.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsImportOpen(true)}
                  className="btn-primary py-2.5 px-6 text-xs"
                >
                  Connect Business Data
                </button>
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>

      {/* Modal Dialog for Data Import */}
      {isImportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setIsImportOpen(false)} 
          />
          <div className="relative w-full max-w-3xl transform transition-all duration-300 animate-in zoom-in-95 duration-200">
            <DataImportPanel 
              onDataImported={(data) => {
                setBusinessData(data);
                setIsImportOpen(false);
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
