"use client";

import PricingRecommendations from "@/components/pricing/PricingRecommendations";
import PricingDashboardWidgets from "@/components/pricing/PricingDashboardWidgets";

export default function PricingAgentPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 w-full space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* Left: Active Recommendations */}
        <div className="xl:col-span-2">
          <PricingRecommendations />
        </div>

        {/* Right: Watchlists, Alert feeds, Simulators */}
        <div className="xl:col-span-1">
          <PricingDashboardWidgets />
        </div>
      </div>
    </div>
  );
}
