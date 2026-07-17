"use client";

import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  LuLayoutDashboard, 
  LuTag, 
  LuCombine, 
  LuTrendingUp, 
  LuShieldAlert,
  LuBrainCircuit,
  LuBoxes,
  LuClipboardList,
  LuNetwork
} from "react-icons/lu";

export default function Sidebar() {
  return (
    <Suspense fallback={<div className="w-[170px] bg-white border-r border-border-subtle" />}>
      <SidebarContent />
    </Suspense>
  );
}

function SidebarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard size={18} />,
      path: "/",
      isSub: false,
    },
    {
      name: "Pricing Agent",
      icon: <LuTag size={18} />,
      path: "/pricing-agent",
      isSub: false,
    },
    {
      name: "Active Orders",
      icon: <LuClipboardList size={14} />,
      path: "/pricing-agent?tab=orders",
      isSub: true,
    },
    {
      name: "CNC Inventory",
      icon: <LuBoxes size={14} />,
      path: "/pricing-agent?tab=inventory",
      isSub: true,
    },
    {
      name: "Supply Chain",
      icon: <LuCombine size={14} />,
      path: "/pricing-agent?tab=supply-chain",
      isSub: true,
    },
    {
      name: "Market Signals",
      icon: <LuTrendingUp size={14} />,
      path: "/pricing-agent?tab=intelligence",
      isSub: true,
    },
    {
      name: "Competitor Clusters",
      icon: <LuNetwork size={14} />,
      path: "/pricing-agent/competitor-clusters",
      isSub: true,
    },
  ];

  return (
    <aside className="fixed top-0 left-0 bottom-0 z-40 bg-white border-r border-border-subtle flex flex-col justify-between py-6 w-[170px]">
      <div className="space-y-8">
        {/* Brand Logo */}
        <div className="px-4 flex items-center gap-2 overflow-hidden h-10 shrink-0">
          <div className="h-9 w-9 shrink-0 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
            <LuBrainCircuit size={18} />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-foreground whitespace-nowrap">
            Fin<span className="text-primary font-black">Cent</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            // Determine if item is active
            let isActive = false;
            if (item.path.startsWith("/pricing-agent?tab=")) {
              const itemTab = item.path.split("=")[1];
              isActive = pathname === "/pricing-agent" && tab === itemTab;
            } else if (item.path === "/pricing-agent") {
              isActive = pathname === "/pricing-agent" && (!tab || tab === "control");
            } else {
              isActive = pathname === item.path;
            }

            return (
              <Link
                key={index}
                href={item.path}
                className={`w-full flex items-center gap-3 px-4 text-left relative transition-colors cursor-pointer group ${
                  item.isSub ? "pl-9 py-2" : "py-3"
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
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary" />
                )}

                {/* Sub-item active indicator dot */}
                {isActive && item.isSub && (
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 absolute left-5 top-1/2 -translate-y-1/2" />
                )}

                <div className={`shrink-0 transition-transform duration-200 ${isActive ? "scale-110 text-primary" : "group-hover:scale-105"}`}>
                  {item.icon}
                </div>

                <span
                  className={`transition-opacity duration-200 whitespace-nowrap ${
                    item.isSub ? "text-[11px] font-semibold" : "text-xs font-semibold"
                  } opacity-100`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer Info */}
      <div className="px-4 overflow-hidden shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-600 shrink-0">
            CB
          </div>
          <div className="transition-opacity duration-200 whitespace-nowrap opacity-100">
            <p className="text-[11px] font-bold text-slate-800 leading-none">CNC Owner</p>
            <p className="text-[9px] font-medium text-slate-400 mt-0.5">Bengaluru Cluster</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
