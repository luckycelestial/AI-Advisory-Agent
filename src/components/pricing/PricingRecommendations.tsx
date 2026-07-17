"use client";

import { useState, useEffect } from "react";
import { LuSparkles, LuCheck, LuX, LuMessageSquare, LuChevronDown, LuChevronUp, LuInfo } from "react-icons/lu";
import { getRecommendations, updateRecommendationStatus, triggerGemmaAnalysis, askGemmaAboutRecommendation } from "@/app/pricing-agent/actions";

interface PricingRecommendationsProps {
  onNavigate?: (tab: string, search: string) => void;
}

export default function PricingRecommendations({ onNavigate }: PricingRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [analyzing, setAnalyzing] = useState(false);

  // Chat Modal State
  const [activeChatRec, setActiveChatRec] = useState<any | null>(null);
  const [chatHistory, setChatHistory] = useState<{ sender: "user" | "gemma"; text: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  useEffect(() => {
    getRecommendations().then((data) => {
      setRecommendations(data.map((rec: any) => ({ ...rec, expanded: false })));
    });
  }, []);

  const handleRunAnalysis = async () => {
    setAnalyzing(true);
    try {
      await triggerGemmaAnalysis();
      window.location.reload();
    } catch (err: any) {
      console.error(err);
      alert(`Gemma Analysis Failed: ${err.message || "Please check your environment configurations."}`);
      setAnalyzing(false);
    }
  };

  const toggleExpand = (id: string) => {
    setRecommendations(
      recommendations.map((rec: any) =>
        rec.id === id ? { ...rec, expanded: !rec.expanded } : rec
      )
    );
  };

  const handleAction = async (id: string, type: "accept" | "reject") => {
    await updateRecommendationStatus(id, type === "accept" ? "accepted" : "rejected");
    setRecommendations(
      recommendations.map((rec: any) =>
        rec.id === id
          ? {
              ...rec,
              accepted: type === "accept",
              rejected: type === "reject",
            }
          : rec
      )
    );
  };

  const handleOpenChat = (rec: any) => {
    setActiveChatRec(rec);
    setChatHistory([
      {
        sender: "gemma",
        text: `Hello! I can explain the reasoning behind the recommendation to "${rec.action}". Ask me anything about the raw material index increases, order margins, or specific supplier signals.`
      }
    ]);
    setChatInput("");
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !activeChatRec) return;

    const userMessage = { sender: "user" as const, text: chatInput.trim() };
    setChatHistory((prev) => [...prev, userMessage]);
    setChatInput("");
    setChatLoading(true);

    try {
      const gemmaText = await askGemmaAboutRecommendation(
        activeChatRec.id,
        userMessage.text,
        chatHistory
      );
      setChatHistory((prev) => [...prev, { sender: "gemma", text: gemmaText }]);
    } catch (err: any) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev,
        { sender: "gemma", text: `Error: ${err.message || "Failed to communicate with Gemma."}` }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2">
        <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
          <LuSparkles size={16} className="text-primary animate-pulse" />
          Active Pricing Recommendations
        </h3>
        <button
          onClick={handleRunAnalysis}
          disabled={analyzing}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <LuSparkles size={12} className={analyzing ? "animate-spin" : ""} />
          {analyzing ? "Gemma Reasoning..." : "Run AI Analysis"}
        </button>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => {
          if (rec.rejected) return null;
          return (
            <div
              key={rec.id}
              className={`p-6 rounded-card border transition-all duration-300 relative ${
                rec.accepted
                  ? "bg-emerald-50/50 border-emerald-200"
                  : "bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Confident indicator Badge */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase text-primary tracking-wider">
                    Trigger: {rec.trigger}
                  </span>
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                    {rec.action}
                  </h4>
                </div>
                <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full border shrink-0 ${
                  rec.confidence === "high"
                    ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                    : "bg-amber-50 text-amber-600 border-amber-100"
                }`}>
                  {rec.confidence} Confidence
                </span>
              </div>

              {/* Expandable Reasoning Trail */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => toggleExpand(rec.id)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <span>Reasoning Trail</span>
                  {rec.expanded ? <LuChevronUp size={14} /> : <LuChevronDown size={14} />}
                </button>

                {rec.expanded && (
                  <ul className="space-y-2 list-disc list-inside text-xs text-slate-600 font-medium pl-2 leading-relaxed animate-in fade-in duration-300">
                    {rec.reasoning.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action buttons */}
              {!rec.accepted ? (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100/50">
                  <div className="flex gap-2 items-center flex-wrap">
                    <button
                      onClick={() => handleAction(rec.id, "accept")}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-dark text-white px-5 py-2 text-xs font-bold transition-all active:scale-[0.98]"
                    >
                      <LuCheck size={14} />
                      Accept Price
                    </button>
                    <button
                      onClick={() => handleAction(rec.id, "reject")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 px-5 py-2 text-xs font-bold transition-all"
                    >
                      <LuX size={14} />
                      Ignore
                    </button>
                    {rec.orderId && onNavigate && (
                      <button
                        onClick={() => onNavigate("orders", rec.orderId)}
                        className="inline-flex items-center justify-center gap-1.5 border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold transition-all"
                      >
                        Inspect Order ({rec.orderId})
                      </button>
                    )}
                    {onNavigate && (
                      <button
                        onClick={() => {
                          const matName = rec.trigger.toLowerCase().includes("steel") ? "Steel" : "Aluminium";
                          onNavigate("inventory", matName);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 border border-slate-200 text-slate-500 hover:bg-slate-50 px-4 py-2 rounded-full text-xs font-bold transition-all"
                      >
                        Audit Inventory
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenChat(rec)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    <LuMessageSquare size={14} />
                    <span>Ask Gemma</span>
                  </button>
                </div>
              ) : (
                <div className="mt-4 pt-3 flex items-center gap-2 text-xs text-emerald-600 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                  <LuCheck size={14} />
                  <span>Price adjustment accepted. Inventory price lines updated in database.</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Ask Gemma Chat Modal Dialog */}
      {activeChatRec && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveChatRec(null)} 
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col h-[500px] overflow-hidden transform transition-all duration-300 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <LuSparkles size={18} className="animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-slate-800 text-sm">
                    Gemma Assistant: {activeChatRec.id}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">
                    {activeChatRec.trigger}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setActiveChatRec(null)} 
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <LuX size={18} />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/30">
              {chatHistory.map((msg, index) => {
                const isUser = msg.sender === "user";
                return (
                  <div key={index} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-semibold ${
                      isUser 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-white text-slate-700 border border-slate-100 shadow-xs rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-400 border border-slate-100 shadow-xs rounded-2xl rounded-tl-none p-3.5 text-xs flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
                    </span>
                    <span>Gemma is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 bg-white flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={chatLoading}
                placeholder={`Ask Gemma about this recommendation...`}
                className="flex-1 text-xs font-semibold px-4 py-3 border border-border-subtle rounded-2xl focus:outline-none focus:border-primary disabled:opacity-60 bg-slate-50 focus:bg-white transition-all text-slate-700"
              />
              <button
                type="submit"
                disabled={chatLoading || !chatInput.trim()}
                className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-5 py-3 rounded-2xl transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
