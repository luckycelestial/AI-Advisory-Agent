"use client";

import { useState, useEffect } from "react";
import { 
  LuClipboardList, 
  LuSearch, 
  LuPlus, 
  LuShieldAlert, 
  LuTrendingUp, 
  LuTrendingDown, 
  LuUser, 
  LuSparkles,
  LuPercent,
  LuDatabase,
  LuChevronRight,
  LuX,
  LuShieldCheck
} from "react-icons/lu";
import { getOrders, getMaterials, createOrder } from "@/app/pricing-agent/actions";

interface Material {
  id: number;
  name: string;
  currentCost: number;
  marketCost: number;
  supplier: string;
}

interface Order {
  id: string;
  client: string;
  margin: string;
  materialId: number;
  material: Material;
}

interface OrdersViewProps {
  searchTerm?: string;
  onNavigate?: (tab: string, search: string) => void;
}

export default function OrdersView({ searchTerm, onNavigate }: OrdersViewProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState("All");

  useEffect(() => {
    if (searchTerm) {
      setSearch(searchTerm);
    }
  }, [searchTerm]);

  
  // Simulation factor: user can simulate standard supplier cost inflation
  const [costIncrease, setCostIncrease] = useState(0);

  // New Order Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [form, setForm] = useState({
    id: "",
    client: "",
    margin: "12.0%",
    materialId: ""
  });

  // Selected order for detailed pane
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [fetchedOrders, fetchedMaterials] = await Promise.all([
        getOrders(),
        getMaterials()
      ]);
      setOrders(fetchedOrders as any);
      setMaterials(fetchedMaterials as any);
      if (fetchedMaterials.length > 0) {
        setForm(prev => ({ ...prev, materialId: String(fetchedMaterials[0].id) }));
      }
    } catch (error) {
      console.error("Error fetching orders data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.id || !form.client || !form.margin || !form.materialId) {
      alert("Please fill in all fields");
      return;
    }

    // Standardize margin formatting (add % if missing)
    let formattedMargin = form.margin.trim();
    if (!formattedMargin.endsWith("%")) {
      formattedMargin += "%";
    }

    setSubmitLoading(true);
    try {
      const created = await createOrder({
        id: form.id,
        client: form.client,
        margin: formattedMargin,
        materialId: Number(form.materialId)
      });

      // Refetch
      await fetchData();

      setSuccessMessage(`Order ${created.id} created successfully!`);
      // Reset form
      setForm(prev => ({
        id: "",
        client: "",
        margin: "12.0%",
        materialId: materials[0] ? String(materials[0].id) : ""
      }));
      
      // Auto close and clear message
      setTimeout(() => {
        setShowAddForm(false);
        setSuccessMessage("");
      }, 2000);
    } catch (err: any) {
      console.error(err);
      alert(`Error: ${err.message || "Failed to create order. Check duplicate ID."}`);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Filtered orders list
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.client.toLowerCase().includes(search.toLowerCase());
    
    const matchesMaterial = 
      selectedMaterialFilter === "All" || 
      order.material.name === selectedMaterialFilter;
    
    return matchesSearch && matchesMaterial;
  });

  // Calculate stats
  const totalOrders = orders.length;
  const avgMargin = orders.length > 0 
    ? (orders.reduce((sum, o) => sum + parseFloat(o.margin), 0) / orders.length).toFixed(1) + "%"
    : "0.0%";

  // Count at-risk orders
  // Let's assume order is at risk if standard margin falls below 10% after raw cost increases,
  // or if live market rate is significantly higher than locked-in contract rate
  const getSimulatedMargin = (order: Order) => {
    const originalMarginVal = parseFloat(order.margin);
    // Simple logic: raw materials make up 40% of the pricing. So margin is affected by the simulated cost increase
    return Math.max(0, originalMarginVal - (costIncrease * 0.4));
  };

  const getRiskStatus = (order: Order) => {
    const currentMargin = getSimulatedMargin(order);
    const isMarketHigher = order.material.marketCost > order.material.currentCost;
    
    if (currentMargin < 10) return { label: "High Risk", color: "red" };
    if (isMarketHigher || currentMargin < 12) return { label: "At Risk", color: "amber" };
    return { label: "Optimized", color: "emerald" };
  };

  const atRiskCount = orders.filter(o => {
    const risk = getRiskStatus(o);
    return risk.label === "High Risk" || risk.label === "At Risk";
  }).length;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
      
      {/* Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="app-card border border-border-subtle bg-white p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Total Active Orders</p>
            <h3 className="font-display font-black text-2xl text-slate-800">{totalOrders}</h3>
            <p className="text-xs text-slate-400 font-semibold">Tracked client commitments</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-500 flex items-center justify-center">
            <LuClipboardList size={22} />
          </div>
        </div>

        <div className="app-card border border-border-subtle bg-white p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Average Target Margin</p>
            <h3 className="font-display font-black text-2xl text-slate-800">{avgMargin}</h3>
            <p className="text-xs text-slate-400 font-semibold">Standard baseline target</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center">
            <LuPercent size={22} />
          </div>
        </div>

        <div className="app-card border border-border-subtle bg-white p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">At-Risk Orders</p>
            <h3 className={`font-display font-black text-2xl ${atRiskCount > 0 ? "text-amber-600" : "text-slate-800"}`}>
              {atRiskCount}
            </h3>
            <p className="text-xs text-slate-400 font-semibold">Impacted by supplier rates</p>
          </div>
          <div className={`h-12 w-12 rounded-2xl flex items-center justify-center border ${
            atRiskCount > 0 
              ? "bg-amber-50 border-amber-100 text-amber-500" 
              : "bg-slate-50 border-slate-100 text-slate-500"
          }`}>
            <LuShieldAlert size={22} />
          </div>
        </div>
      </div>

      {/* Main Grid: Orders List & Detail view */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        
        {/* Left Side: Filter and Orders Table */}
        <div className="xl:col-span-2 space-y-6">
          <div className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-6">
            
            {/* Header controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-display font-bold text-slate-800 text-base">Active Order Commitments</h3>
                <p className="text-xs font-semibold text-slate-400">View locked-in details, material links, and margin health.</p>
              </div>
              
              <button
                onClick={() => setShowAddForm(true)}
                className="btn-primary flex items-center gap-2 self-start sm:self-auto py-2 px-4 text-xs font-bold shrink-0 cursor-pointer"
              >
                <LuPlus size={14} /> New Order Entry
              </button>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search by Order ID or client name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-xs font-semibold pl-10 pr-4 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-slate-50/50 focus:bg-white transition-all text-slate-700"
                />
              </div>

              <select
                value={selectedMaterialFilter}
                onChange={(e) => setSelectedMaterialFilter(e.target.value)}
                className="text-xs font-semibold px-3 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-white text-slate-700"
              >
                <option value="All">All Materials</option>
                {materials.map(m => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>

            {/* Margin Rise Simulator Slider */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
              <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-wider">
                <span>Simulate Global Material Cost Surcharge</span>
                <span className="text-primary font-bold">+{costIncrease}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={costIncrease}
                onChange={(e) => setCostIncrease(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
              />
              <p className="text-[10px] font-semibold text-slate-400 mt-1">
                Drag to analyze how supplier rate increases erode margins on fixed client orders.
              </p>
            </div>

            {/* Orders list table */}
            {loading ? (
              <div className="text-center py-12">
                <div className="h-8 w-8 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-xs text-slate-400 font-semibold">Fetching orders...</p>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl">
                <LuClipboardList className="mx-auto text-slate-300 mb-2" size={32} />
                <p className="text-xs font-bold text-slate-500">No matching orders found</p>
                <p className="text-[10px] text-slate-400 font-semibold">Try modifying your search or filters.</p>
              </div>
            ) : (
              <div className="overflow-x-auto border border-slate-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Material</th>
                      <th className="py-3 px-4 text-right">Target Margin</th>
                      <th className="py-3 px-4 text-right">Simulated</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredOrders.map((order) => {
                      const risk = getRiskStatus(order);
                      const simMargin = getSimulatedMargin(order);
                      const isSelected = selectedOrder?.id === order.id;

                      return (
                        <tr 
                          key={order.id} 
                          onClick={() => setSelectedOrder(order)}
                          className={`text-xs font-semibold text-slate-700 hover:bg-slate-50/70 transition-colors cursor-pointer ${
                            isSelected ? "bg-primary/5" : ""
                          }`}
                        >
                          <td className="py-4 px-4 font-mono font-bold text-slate-800">
                            <span className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/50">
                              {order.id}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-bold text-slate-800">{order.client}</td>
                          <td className="py-4 px-4 text-slate-500 max-w-[150px] truncate" title={order.material.name}>
                            {order.material.name}
                          </td>
                          <td className="py-4 px-4 text-right font-mono font-bold text-slate-600">
                            {order.margin}
                          </td>
                          <td className={`py-4 px-4 text-right font-mono font-bold ${
                            simMargin < 10 ? "text-red-600 font-black" : simMargin < 12 ? "text-amber-600" : "text-emerald-600"
                          }`}>
                            {simMargin.toFixed(1)}%
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className={`inline-flex items-center gap-1 text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                              risk.color === "red" 
                                ? "text-red-700 bg-red-50 border-red-200" 
                                : risk.color === "amber" 
                                ? "text-amber-700 bg-amber-50 border-amber-200" 
                                : "text-emerald-700 bg-emerald-50 border-emerald-200"
                            }`}>
                              {risk.label}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-400">
                            <LuChevronRight size={14} className={`transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Detailed View Panel */}
        <div className="xl:col-span-1 space-y-6">
          {selectedOrder ? (
            <div className="app-card border border-border-subtle bg-white p-6 shadow-sm space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              
              {/* Detail Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                    <LuUser size={16} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm">{selectedOrder.client}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Commitment details</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="h-6 w-6 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer"
                >
                  <LuX size={14} />
                </button>
              </div>

              {/* Detail Body */}
              <div className="space-y-4 text-xs font-semibold text-slate-700">
                
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Order ID</span>
                  <span className="font-mono font-bold text-slate-800">{selectedOrder.id}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Associated Material</span>
                  <span className="text-slate-800 text-right">{selectedOrder.material.name}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Contract locked-in rate</span>
                  <span className="font-mono font-bold text-slate-800">
                    ₹{selectedOrder.material.currentCost.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Live Market rate</span>
                  <span className="font-mono text-slate-500">
                    ₹{selectedOrder.material.marketCost.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Surcharges & Inflation details */}
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Market Price Delta</span>
                  {selectedOrder.material.marketCost > selectedOrder.material.currentCost ? (
                    <span className="text-red-500 font-bold flex items-center gap-1">
                      <LuTrendingUp size={12} />
                      +{((selectedOrder.material.marketCost - selectedOrder.material.currentCost)/selectedOrder.material.currentCost * 100).toFixed(1)}%
                    </span>
                  ) : (
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <LuTrendingDown size={12} />
                      -{( (selectedOrder.material.currentCost - selectedOrder.material.marketCost)/selectedOrder.material.currentCost * 100).toFixed(1)}%
                    </span>
                  )}
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Baseline Target Margin</span>
                  <span className="font-mono font-bold text-slate-800">{selectedOrder.margin}</span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Simulated Net Margin</span>
                  <span className={`font-mono font-black text-sm ${
                    getSimulatedMargin(selectedOrder) < 10 ? "text-red-600" : "text-emerald-600"
                  }`}>
                    {getSimulatedMargin(selectedOrder).toFixed(1)}%
                  </span>
                </div>

                {/* Alert Warning from Gemma */}
                {selectedOrder.material.marketCost > selectedOrder.material.currentCost && (
                  <div className="p-3.5 bg-amber-50/50 border border-amber-200/60 rounded-xl flex items-start gap-2.5 text-[11px] text-amber-800 leading-relaxed font-semibold">
                    <LuShieldAlert size={14} className="shrink-0 mt-0.5 text-amber-500" />
                    <div>
                      <p className="font-bold text-[10px] uppercase text-amber-700 tracking-wider">Erosion Alert</p>
                      <p className="mt-0.5">
                        Live market rate is higher than contract locked rate. Re-negotiation or surcharge allocation suggested before batch production.
                      </p>
                    </div>
                  </div>
                )}

                {/* Diversification / AI Advice */}
                <div className="p-3.5 bg-violet-50/50 border border-violet-100 rounded-xl flex items-start gap-2.5 text-[11px] text-violet-800 leading-relaxed font-semibold">
                  <LuSparkles size={14} className="shrink-0 mt-0.5 text-violet-500" />
                  <div>
                    <p className="font-bold text-[10px] uppercase text-violet-700 tracking-wider">Gemma Pricing Strategy</p>
                    <p className="mt-0.5">
                      Ensure contract renewal has a dynamic margin formula (+0.5% margin step for every 2% increase in raw index).
                    </p>
                  </div>
                </div>

                {/* Related Context Action Links */}
                {onNavigate && (
                  <div className="pt-3.5 border-t border-slate-100 space-y-2">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Related Context Workflows</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          const keyword = selectedOrder.material.name.toLowerCase().includes("steel") ? "Steel" : "Aluminium";
                          onNavigate("supply-chain", keyword);
                        }}
                        className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer"
                      >
                        Track Shipment
                      </button>
                      <button
                        onClick={() => {
                          const keyword = selectedOrder.material.name.toLowerCase().includes("steel") ? "Steel" : "Aluminium";
                          onNavigate("inventory", keyword);
                        }}
                        className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer"
                      >
                        Check Inventory
                      </button>
                      <button
                        onClick={() => {
                          const keyword = selectedOrder.material.name.toLowerCase().includes("steel") ? "Steel" : "Aluminium";
                          onNavigate("intelligence", keyword);
                        }}
                        className="col-span-2 flex items-center justify-center gap-1.5 border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary px-3 py-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer"
                      >
                        View Market Signals
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ) : (
            <div className="app-card border border-border-subtle bg-white p-6 shadow-sm text-center py-16 text-xs text-slate-400 font-semibold italic">
              <LuClipboardList className="mx-auto text-slate-200 mb-2" size={24} />
              Select an order from the list to view comprehensive cost details and margin trace.
            </div>
          )}

          {/* Supplier details overview card */}
          <div className="app-card border border-border-subtle bg-slate-900 text-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="h-8 w-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                <LuDatabase size={16} />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Contract Governance</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Supplier limits</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
              Client margins are secured based on locked supplier rates. In the case of supplier default or contract breach, live market index pricing becomes active.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-900">
                Secured by Peenya / Jigani Cluster
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Dialog for Order Creation */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => !submitLoading && setShowAddForm(false)} 
          />
          <div className="relative w-full max-w-md transform transition-all duration-300 animate-in zoom-in-95 duration-200 bg-white rounded-3xl border border-border-subtle shadow-xl p-6 space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                  <LuClipboardList size={16} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-800 text-base">New Order Entry</h3>
                  <p className="text-xs font-semibold text-slate-400">Lock in margins for a new client commit.</p>
                </div>
              </div>
              <button
                onClick={() => !submitLoading && setShowAddForm(false)}
                className="h-6 w-6 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer"
                disabled={submitLoading}
              >
                <LuX size={14} />
              </button>
            </div>

            {successMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                  <LuShieldCheck size={24} className="animate-bounce" />
                </div>
                <p className="text-sm font-bold text-emerald-700">{successMessage}</p>
                <p className="text-xs text-slate-400 font-semibold">Updating database records...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Order ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ORD-225"
                    value={form.id}
                    onChange={(e) => setForm(prev => ({ ...prev, id: e.target.value.toUpperCase() }))}
                    className="w-full text-xs font-semibold px-3 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-slate-50/50 focus:bg-white text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Client Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={form.client}
                    onChange={(e) => setForm(prev => ({ ...prev, client: e.target.value }))}
                    className="w-full text-xs font-semibold px-3 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-slate-50/50 focus:bg-white text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Target Margin (%)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 14.5%"
                    value={form.margin}
                    onChange={(e) => setForm(prev => ({ ...prev, margin: e.target.value }))}
                    className="w-full text-xs font-semibold px-3 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-slate-50/50 focus:bg-white text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Material Allocation
                  </label>
                  <select
                    value={form.materialId}
                    onChange={(e) => setForm(prev => ({ ...prev, materialId: e.target.value }))}
                    className="w-full text-xs font-semibold px-3 py-2.5 border border-border-subtle rounded-xl focus:outline-none focus:border-primary bg-white text-slate-700"
                  >
                    {materials.map(m => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
                    disabled={submitLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary px-5 py-2.5 text-xs"
                    disabled={submitLoading}
                  >
                    {submitLoading ? "Adding..." : "Add Order"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
