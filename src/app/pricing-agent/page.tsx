"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PricingRecommendations from "@/components/pricing/PricingRecommendations";
import PricingDashboardWidgets from "@/components/pricing/PricingDashboardWidgets";
import OrdersView from "@/components/pricing/OrdersView";
import CncInventory from "@/components/pricing/CncInventory";
import SupplyChainTracker from "@/components/pricing/SupplyChainTracker";
import MarketSignals from "@/components/pricing/MarketSignals";
import StructuralRisk from "@/components/pricing/StructuralRisk";

export default function PricingAgentPage() {
  const [activeTab, setActiveTab] = useState("control");
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleUrlChange = () => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const tab = params.get("tab") || "control";
        const search = params.get("search") || "";
        setActiveTab(tab);
        setSearchTerm(search);
      }
    };

    // Run once on mount
    handleUrlChange();

    window.addEventListener("popstate", handleUrlChange);
    // Periodically poll for URL updates since Next Link navigation updates URL history without popstate
    const interval = setInterval(handleUrlChange, 200);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      clearInterval(interval);
    };
  }, [pathname]);

  const changeTabWithSearch = (tab: string, searchVal = "") => {
    setActiveTab(tab);
    setSearchTerm(searchVal);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      if (searchVal) {
        url.searchParams.set("search", searchVal);
      } else {
        url.searchParams.delete("search");
      }
      window.history.pushState({}, "", url.toString());
    }
  };

  const tabs = [
    { id: "control", name: "Control Center" },
    { id: "orders", name: "Order Book" },
    { id: "inventory", name: "Shop Inventory" },
    { id: "supply-chain", name: "Supply Chain" },
    { id: "intelligence", name: "Market Intelligence" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 w-full space-y-6">
      {/* Tabs navigation */}
      <div className="border-b border-slate-100 pb-1 flex gap-2 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => changeTabWithSearch(tab.id, "")}
              className={`pb-3 px-4 text-xs font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                isActive 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="w-full">
        {activeTab === "control" && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
            {/* Left: Active Recommendations */}
            <div className="xl:col-span-2">
              <PricingRecommendations onNavigate={changeTabWithSearch} />
            </div>

            {/* Right: Watchlists, Alert feeds, Simulators */}
            <div className="xl:col-span-1">
              <PricingDashboardWidgets />
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <OrdersView searchTerm={searchTerm} onNavigate={changeTabWithSearch} />
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <CncInventory searchTerm={searchTerm} onNavigate={changeTabWithSearch} />
          </div>
        )}

        {activeTab === "supply-chain" && (
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <SupplyChainTracker searchTerm={searchTerm} onNavigate={changeTabWithSearch} />
          </div>
        )}

        {activeTab === "intelligence" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <MarketSignals searchTerm={searchTerm} onNavigate={changeTabWithSearch} />
            </div>
            <div className="lg:col-span-1">
              <StructuralRisk searchTerm={searchTerm} onNavigate={changeTabWithSearch} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


