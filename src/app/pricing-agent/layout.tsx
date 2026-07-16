"use client";

import { Suspense, useEffect } from "react";
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
      <div className="flex-1 pl-20 min-w-0 flex flex-col">
        {/* Header Bar */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-border-subtle px-8 py-5 flex items-center justify-between z-30 shadow-sm">
          <div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-slate-800">
              Pricing Agent
            </h1>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">
              Updated 4 min ago
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-black uppercase text-emerald-600 tracking-wider">
              Gemma Live
            </span>
          </div>
        </header>

        {/* Inner Container */}
        <main className="flex-1 p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Data Import Panel always at top */}
          <DataImportPanel onDataImported={setBusinessData} />

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
                  To ground Gemma's reasoning in your actual order histories, customer sensitivities, and locked-in rates, please import a mock invoice quote PDF or spreadsheet in the panel above.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  Simulate by clicking 'Upload PDF' or 'Upload Excel' above
                </span>
              </div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}
