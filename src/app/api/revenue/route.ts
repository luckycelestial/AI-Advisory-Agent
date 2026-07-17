import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    headline: "Revenue forecast refreshed from latest prototype signals",
    projectedRevenue: 1845000,
    confidence: 88,
    growthRate: 16.4,
    forecastWindow: [
      { month: "Jun", forecast: 1820000, lowerBound: 1710000, upperBound: 1930000, driver: "Renewal velocity" },
      { month: "Jul", forecast: 1880000, lowerBound: 1770000, upperBound: 1990000, driver: "Volume expansion" },
      { month: "Aug", forecast: 1940000, lowerBound: 1830000, upperBound: 2050000, driver: "Enterprise upsell" },
      { month: "Sep", forecast: 2010000, lowerBound: 1890000, upperBound: 2140000, driver: "Pricing discipline" },
      { month: "Oct", forecast: 2085000, lowerBound: 1960000, upperBound: 2210000, driver: "Expansion readiness" },
      { month: "Nov", forecast: 2142000, lowerBound: 2010000, upperBound: 2280000, driver: "Strategic renewals" },
    ],
    shapDrivers: [
      { name: "Enterprise renewals", weight: 0.4, detail: "Renewal health is the most influential signal in the forecast." },
      { name: "Pricing discipline", weight: 0.25, detail: "Better realized pricing is cushioning margin pressure." },
      { name: "Segment mix", weight: 0.2, detail: "High-value accounts are growing faster than the average account." },
      { name: "Sales cycle", weight: 0.15, detail: "Shorter cycle times are strengthening near-term conversion confidence." },
    ],
    customerSignals: [
      { name: "Northwind Labs", value: "+14%", detail: "Expansion request received for three additional seats." },
      { name: "Aster Manufacturing", value: "+8%", detail: "Renewal probability increased after strategic rollout." },
      { name: "Helio Logistics", value: "+11%", detail: "Upsell qualified for premium package in July." },
    ],
    marketSignals: [
      { title: "Demand recovery", detail: "Pipeline conversion is trending above the prior quarter baseline." },
      { title: "Margin pressure", detail: "Overhead inflation remains a watch item for the next two months." },
    ],
    recommendation: "Prioritize expansion offers to top renewal accounts while protecting price guardrails for the next quarter.",
    uploadLabel: "sample-revenue-history.csv",
  });
}
