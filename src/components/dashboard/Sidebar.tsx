"use client";

import { useState, Suspense } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LuLayoutDashboard, 
  LuTag, 
  LuCombine, 
  LuTrendingUp, 
  LuShieldAlert,
  LuBrainCircuit
} from "react-icons/lu";

export default function Sidebar() {
  return (
    <Suspense fallback={<div className="w-[80px] bg-white border-r border-border-subtle" />}>
      <SidebarContent />
    </Suspense>
  );
}

function SidebarContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard size={20} />,
      path: "/",
      isSub: false,
    },
    {
      name: "Pricing Agent",
      icon: <LuTag size={20} />,
      path: "/pricing-agent",
      isSub: false,
    },
    {
      name: "Supply Chain",
      icon: <LuCombine size={16} />,
      path: "/pricing-agent/supply-chain",
      isSub: true,
    },
    {
      name: "Market Signals",
      icon: <LuTrendingUp size={16} />,
      path: "/pricing-agent/market-signals",
      isSub: true,
    },
    {
      name: "Long-Term Risks",
      icon: <LuShieldAlert size={16} />,
      path: "/pricing-agent/long-term-risks",
      isSub: true,
    },
  ];

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed top-0 left-0 bottom-0 z-40 bg-white border-r border-border-subtle flex flex-col justify-between py-6 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isExpanded ? "w-[260px]" : "w-[80px]"
      }`}
    >
      <div className="space-y-8">
        {/* Brand Logo */}
        <div className="px-6 flex items-center gap-3 overflow-hidden h-10 shrink-0">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
            <LuBrainCircuit size={20} />
          </div>
          <span
            className={`font-display text-lg font-bold tracking-tight text-foreground transition-opacity duration-200 whitespace-nowrap ${
              isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            AI Advisory <span className="text-primary font-black">Agent</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            // Determine if item is active
            let isActive = false;
            if (item.path === "/") {
              isActive = pathname === "/";
            } else if (item.path === "/pricing-agent") {
              isActive = pathname === "/pricing-agent";
            } else {
              isActive = pathname === item.path;
            }

            // Collapse sub-items if sidebar is not hovered/expanded
            if (item.isSub && !isExpanded) {
              return null;
            }

            return (
              <Link
                key={index}
                href={item.path}
                className={`w-full flex items-center gap-4 py-3 px-6 text-left relative transition-colors cursor-pointer group ${
                  item.isSub ? "pl-12 py-2" : "py-3.5"
                } ${
                  isActive 
                    ? item.isSub 
                      ? "text-primary font-bold bg-primary/5"
                      : "bg-primary/10 text-primary font-bold" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {/* Active indicator bar - Only show on parent items, not sub-items */}
                {isActive && !item.isSub && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 rounded-r-full bg-primary" />
                )}

                {/* Sub-item active indicator dot */}
                {isActive && item.isSub && (
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 absolute left-8 top-1/2 -translate-y-1/2" />
                )}

                <div className={`shrink-0 transition-transform duration-200 ${isActive ? "scale-110 text-primary" : "group-hover:scale-105"}`}>
                  {item.icon}
                </div>

                <span
                  className={`transition-opacity duration-200 whitespace-nowrap ${
                    item.isSub ? "text-xs font-semibold" : "text-sm font-semibold"
                  } ${
                    isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer Info */}
      <div className="px-6 overflow-hidden shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600 shrink-0">
            CB
          </div>
          <div
            className={`transition-opacity duration-200 whitespace-nowrap ${
              isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-xs font-bold text-slate-800 leading-none">CNC Owner</p>
            <p className="text-[10px] font-medium text-slate-400">Bengaluru Cluster</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
