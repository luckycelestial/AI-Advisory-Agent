"use client";

import { useEffect, useMemo, useState } from "react";

type ScenarioKey = "base" | "optimistic" | "conservative";

type ForecastPoint = {
  month: string;
  forecast: number;
  lowerBound: number;
  upperBound: number;
  driver: string;
};

type ForecastPayload = {
  headline: string;
  projectedRevenue: number;
  confidence: number;
  growthRate: number;
  forecastWindow: ForecastPoint[];
  shapDrivers: Array<{ name: string; weight: number; detail: string }>;
  customerSignals: Array<{ name: string; value: string; detail: string }>;
  marketSignals: Array<{ title: string; detail: string }>;
  recommendation: string;
  uploadLabel: string;
};

type Message = {
  role: "assistant" | "user";
  text: string;
};

const scenarioConfig: Record<
  ScenarioKey,
  { label: string; multiplier: number; note: string }
> = {
  base: { label: "Base case", multiplier: 1, note: "Balanced growth with steady upsell conversion." },
  optimistic: { label: "Upside case", multiplier: 1.12, note: "Expansion in enterprise renewals and stronger pricing." },
  conservative: { label: "Caution case", multiplier: 0.92, note: "Delayed renewals and tighter spend in Q4." },
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    text: "I can review the latest revenue trend, explain the strongest drivers, and help you choose the next best move.",
  },
];

export default function RevenueAgentDashboard() {
  const [forecast, setForecast] = useState<ForecastPayload | null>(null);
  const [scenario, setScenario] = useState<ScenarioKey>("base");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [uploadLabel, setUploadLabel] = useState("No file uploaded yet");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const loadForecast = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/revenue");
        if (!response.ok) {
          throw new Error("Unable to load revenue forecast");
        }
        const payload = (await response.json()) as ForecastPayload;
        if (isMounted) {
          setForecast(payload);
          setUploadLabel(payload.uploadLabel);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unexpected error");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadForecast();
    return () => {
      isMounted = false;
    };
  }, []);

  const scenarioForecast = useMemo(() => {
    if (!forecast) {
      return null;
    }

    const multiplier = scenarioConfig[scenario].multiplier;
    return {
      projectedRevenue: Math.round(forecast.projectedRevenue * multiplier),
      growthRate: Number((forecast.growthRate * multiplier).toFixed(1)),
      confidence: Math.max(62, Math.min(94, forecast.confidence + (scenario === "optimistic" ? 3 : scenario === "conservative" ? -4 : 0))),
      window: forecast.forecastWindow.map((point) => ({
        ...point,
        forecast: Math.round(point.forecast * multiplier),
        lowerBound: Math.round(point.lowerBound * multiplier),
        upperBound: Math.round(point.upperBound * multiplier),
      })),
    };
  }, [forecast, scenario]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setUploadLabel(file.name);
    const isCsv = file.name.toLowerCase().endsWith(".csv");
    const isExcel = /\.xlsx?$/.test(file.name.toLowerCase());

    if (!isCsv && !isExcel) {
      setError("Please upload a CSV or Excel file.");
      return;
    }

    setError("");
    const text = await file.text();

    if (isCsv) {
      const rows = text
        .trim()
        .split(/\r?\n/)
        .map((row) => row.split(","));
      const numericRows = rows.slice(1).filter((row) => row.length >= 4);
      const values = numericRows.map((row) => Number(row[1]));
      const validValues = values.filter((value) => Number.isFinite(value));
      if (validValues.length < 2) {
        setError("This CSV does not contain enough numeric revenue values to score the forecast.");
        return;
      }

      const averageGrowth = validValues.slice(1).reduce((acc, value, index) => acc + (value - validValues[index]) / validValues[index], 0) / Math.max(validValues.length - 1, 1);
      const projectedRevenue = Math.round(validValues[validValues.length - 1] * (1 + averageGrowth * 2));
      const window = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((month, index) => ({
        month,
        forecast: Math.round(projectedRevenue * (1 + index * 0.04)),
        lowerBound: Math.round(projectedRevenue * (1 + index * 0.025)),
        upperBound: Math.round(projectedRevenue * (1 + index * 0.055)),
        driver: index % 2 === 0 ? "Renewal velocity" : "Volume expansion",
      }));

      setForecast({
        headline: "Revenue projection refreshed from uploaded dataset",
        projectedRevenue,
        confidence: 86,
        growthRate: Number((averageGrowth * 100).toFixed(1)),
        forecastWindow: window,
        shapDrivers: [
          { name: "Enterprise renewals", weight: 0.39, detail: "Renewals account for the largest lift in the forecast." },
          { name: "Pricing discipline", weight: 0.24, detail: "Improved price realization adds direct margin support." },
          { name: "Segment mix", weight: 0.19, detail: "Higher-value accounts are contributing a larger share of the forecast." },
          { name: "Sales cycle", weight: 0.18, detail: "Shorter deal cycles improve near-term conversion confidence." },
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
        recommendation: "Prioritize expansion offers to your top renewal accounts while preserving price guardrails for the next quarter.",
        uploadLabel: file.name,
      });
    } else {
      setForecast((current) =>
        current
          ? {
              ...current,
              uploadLabel: file.name,
            }
          : null,
      );
    }
  };

  const submitChat = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) {
      return;
    }

    const nextMessages = [
      ...messages,
      { role: "user" as const, text: trimmed },
      {
        role: "assistant" as const,
        text: scenario === "optimistic"
          ? "The upside scenario suggests a stronger expansion motion across premium accounts."
          : scenario === "conservative"
            ? "The conservative view favors tighter account retention and lower discretionary spend."
            : "The balanced plan keeps growth steady while protecting margin and renewal health.",
      },
    ];
    setMessages(nextMessages);
    setChatInput("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 text-slate-600">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          Loading the Revenue Intelligence workspace…
        </div>
      </div>
    );
  }

  if (!forecast || !scenarioForecast) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 text-slate-600">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          {error || "The revenue workspace is currently unavailable."}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                Revenue Intelligence Agent · Gemma 4 31B
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Revenue forecast dashboard with explainable AI signals
              </h1>
              <p className="text-base leading-7 text-slate-600">
                Upload a CSV or Excel export, inspect the forecast, and prompt an AI analyst for recommendation-ready insights.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Dataset</p>
              <p className="mt-1">{uploadLabel}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">Prototype workflow</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Forecast snapshot</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900">{forecast.headline}</h2>
              </div>
              <div className="flex gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
                {Object.entries(scenarioConfig).map(([key, config]) => (
                  <button
                    key={key}
                    type="button"
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${scenario === key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-white"}`}
                    onClick={() => setScenario(key as ScenarioKey)}
                  >
                    {config.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-sm text-slate-300">Projected revenue</p>
                <p className="mt-2 text-3xl font-semibold">${scenarioForecast.projectedRevenue.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Growth rate</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{scenarioForecast.growthRate}%</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Confidence</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{scenarioForecast.confidence}%</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">Scenario note</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{scenarioConfig[scenario].note}</p>
            </div>

            <div className="mt-6 space-y-3">
              {scenarioForecast.window.map((point) => (
                <div key={point.month} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-900">{point.month}</p>
                    <p className="text-sm text-slate-500">{point.driver}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">${point.forecast.toLocaleString()}</p>
                    <p className="text-sm text-slate-500">${point.lowerBound.toLocaleString()} – ${point.upperBound.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Upload data</p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">CSV / Excel intake</h3>
                </div>
                <label className="cursor-pointer rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  Upload file
                  <input type="file" accept=".csv,.xlsx,.xls" className="hidden" onChange={handleUpload} />
                </label>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Attach a revenue history export to refresh the forecast and move from static reporting to an AI-supported operating plan.
              </p>
              {error ? <p className="mt-3 text-sm font-medium text-rose-600">{error}</p> : null}
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Executive recommendation</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{forecast.recommendation}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">SHAP explainability</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Top drivers behind the forecast</h3>
            <div className="mt-6 space-y-4">
              {forecast.shapDrivers.map((driver) => (
                <div key={driver.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-700">{driver.name}</span>
                    <span className="text-slate-500">{Math.round(driver.weight * 100)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-cyan-600" style={{ width: `${driver.weight * 100}%` }} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{driver.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Customer intelligence</p>
            <div className="mt-6 space-y-3">
              {forecast.customerSignals.map((signal) => (
                <div key={signal.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{signal.name}</p>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">{signal.value}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Market intelligence</p>
            <div className="mt-6 space-y-3">
              {forecast.marketSignals.map((signal) => (
                <div key={signal.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{signal.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">AI analyst chat</p>
            <div className="mt-4 flex h-72 flex-col gap-3 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === "assistant" ? "bg-white text-slate-700" : "ml-auto bg-slate-900 text-white"}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask: what should we prioritize next?"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm outline-none focus:border-cyan-500"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    submitChat();
                  }
                }}
              />
              <button type="button" onClick={submitChat} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">
                Send
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
