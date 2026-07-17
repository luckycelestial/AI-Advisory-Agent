"use client";

import { useState, useEffect } from "react";
import { 
  LuNetwork, 
  LuCoins, 
  LuSparkles, 
  LuCompass, 
  LuLoader, 
  LuMapPin, 
  LuAward, 
  LuActivity,
  LuLayers
} from "react-icons/lu";
import { 
  runLeidenCommunityDetection, 
  getCompetitorAnalysisReport 
} from "@/app/pricing-agent/competitor-actions";

interface GraphNode {
  id: string;
  name: string;
  revenue?: string;
  employeeCount?: number;
  margin?: string;
  region?: string;
  material?: string;
  clusterId?: number;
}

interface GraphLink {
  source: string;
  target: string;
  weight: number;
}

export default function CompetitorClusters() {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [links, setLinks] = useState<GraphLink[]>([]);
  const [clusters, setClusters] = useState<any[]>([]);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [advisoryLoading, setAdvisoryLoading] = useState(false);
  const [advisoryReport, setAdvisoryReport] = useState<string>("");

  useEffect(() => {
    loadGraphData();
  }, []);

  const loadGraphData = async () => {
    setLoading(true);
    try {
      const data = await runLeidenCommunityDetection();
      setNodes(data.nodes);
      setLinks(data.links);
      setClusters(data.clusters);
      if (data.nodes.length > 0) {
        setSelectedNode(data.nodes[0]);
      }
    } catch (err) {
      console.error("Failed to load Neo4j clustering data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleQueryAdvisory = async () => {
    if (clusters.length === 0) return;
    setAdvisoryLoading(true);
    setAdvisoryReport("");
    try {
      const report = await getCompetitorAnalysisReport(clusters);
      setAdvisoryReport(report);
    } catch (err) {
      console.error("Failed to generate competitor advisory:", err);
      setAdvisoryReport("Error: Failed to compile competitor advisory report.");
    } finally {
      setAdvisoryLoading(false);
    }
  };

  // Color mapper for clusters (Tailwind class format)
  const getClusterColor = (cId: number) => {
    const colors = [
      "from-rose-500 to-pink-600 bg-rose-500 text-rose-500 border-rose-200 bg-rose-50/50",
      "from-indigo-500 to-blue-600 bg-indigo-500 text-indigo-500 border-indigo-200 bg-indigo-50/50",
      "from-emerald-500 to-teal-600 bg-emerald-500 text-emerald-500 border-emerald-200 bg-emerald-50/50",
      "from-amber-500 to-orange-600 bg-amber-500 text-amber-500 border-amber-200 bg-amber-50/50",
      "from-violet-500 to-fuchsia-600 bg-violet-500 text-violet-500 border-violet-200 bg-violet-50/50"
    ];
    return colors[cId % colors.length];
  };

  // Hex color mapper for precise inline SVG styling
  const getClusterHexColor = (cId: number) => {
    const hexColors = [
      "#f43f5e", // Rose
      "#6366f1", // Indigo
      "#10b981", // Emerald
      "#f59e0b", // Amber
      "#ec4899", // Pink
      "#8b5cf6"  // Violet
    ];
    return hexColors[cId % hexColors.length];
  };

  // Calculate 2D position for SVG graph based on cluster grouping
  const getNodeCoordinates = (nodeId: string, clusterId: number, indexInCluster: number, totalInCluster: number, totalCommunities: number) => {
    if (totalCommunities <= 1) {
      // Large circular layout in the center of the canvas to maximize spacing
      const center = { x: 250, y: 175 };
      const radius = 105;
      const angle = (indexInCluster / totalInCluster) * 2 * Math.PI;
      return {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
        angle
      };
    }

    // Dynamic community centers distributed radially
    const centerRadius = totalCommunities <= 2 ? 85 : 100;
    const centerAngle = (clusterId / totalCommunities) * 2 * Math.PI;
    const cx = 250 + centerRadius * Math.cos(centerAngle);
    const cy = 175 + centerRadius * Math.sin(centerAngle);

    const nodeRadius = totalCommunities <= 2 ? 40 : 28;
    const angle = (indexInCluster / totalInCluster) * 2 * Math.PI + centerAngle;
    return {
      x: cx + nodeRadius * Math.cos(angle),
      y: cy + nodeRadius * Math.sin(angle),
      angle
    };
  };

  // Resolve absolute position lookup map
  const positionsMap = new Map<string, { x: number; y: number; angle: number }>();
  const clusterCounts: { [key: number]: number } = {};
  const nodeIndexInCluster = new Map<string, number>();

  nodes.forEach(n => {
    const cId = n.clusterId ?? 0;
    clusterCounts[cId] = (clusterCounts[cId] || 0) + 1;
  });

  const clusterProgress: { [key: number]: number } = {};
  nodes.forEach(n => {
    const cId = n.clusterId ?? 0;
    const idx = clusterProgress[cId] || 0;
    nodeIndexInCluster.set(n.id, idx);
    clusterProgress[cId] = idx + 1;

    const coords = getNodeCoordinates(n.id, cId, idx, clusterCounts[cId], clusters.length);
    positionsMap.set(n.id, coords);
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] gap-3">
        <LuLoader size={36} className="text-primary animate-spin" />
        <p className="text-xs font-semibold text-slate-500">Querying Neo4j Graph & Running Leiden Clustering...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h2 className="font-display font-bold text-slate-800 text-lg sm:text-2xl flex items-center gap-2">
            <LuNetwork className="text-primary animate-pulse" size={24} />
            Leiden Industrial Clusters & Competitor Intelligence
          </h2>
          <p className="text-xs font-semibold text-slate-500">
            Live Graph Community detection running Leiden partition modularity optimization over Neo4j relationships
          </p>
        </div>
        <button 
          onClick={loadGraphData}
          className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
        >
          🔄 Re-run Leiden Algorithm
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        {/* Left Column: Visual Cluster Graph (7/12 Width) */}
        <div className="lg:col-span-7 flex flex-col app-card border border-border-subtle bg-white p-5 shadow-sm min-h-[460px]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                Community Partition Network Map
              </h3>
              <p className="text-xs font-semibold text-slate-400">
                Nodes grouped into cohesive communities by Leiden partition (weights based on competitive and material linkages)
              </p>
            </div>
            <span className="text-[10px] font-black uppercase text-indigo-500 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded flex items-center gap-1">
              <LuLayers size={10} />
              {clusters.length} Leiden Communities
            </span>
          </div>

          {/* SVG Graph Frame */}
          <div className="relative flex-1 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden min-h-[350px] flex items-center justify-center">
            <svg viewBox="0 0 500 360" className="w-full h-full max-h-[380px]">
              {/* Draw Edges */}
              {links.map((link, idx) => {
                const sCoords = positionsMap.get(link.source);
                const tCoords = positionsMap.get(link.target);
                if (!sCoords || !tCoords) return null;

                const sourceNode = nodes.find(n => n.id === link.source);
                const targetNode = nodes.find(n => n.id === link.target);
                const isSameCommunity = sourceNode?.clusterId === targetNode?.clusterId;

                const strokeColor = isSameCommunity && sourceNode
                  ? `${getClusterHexColor(sourceNode.clusterId ?? 0)}60` // Transparent community color
                  : "#cbd5e1";

                return (
                  <line
                    key={`edge-${idx}`}
                    x1={sCoords.x}
                    y1={sCoords.y}
                    x2={tCoords.x}
                    y2={tCoords.y}
                    stroke={strokeColor}
                    strokeWidth={isSameCommunity ? "2" : "1"}
                    strokeDasharray={isSameCommunity ? undefined : "3 3"}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Draw Nodes */}
              {nodes.map((node) => {
                const coords = positionsMap.get(node.id);
                if (!coords) return null;
                const isSelected = selectedNode?.id === node.id;
                const clusterColor = getClusterHexColor(node.clusterId ?? 0);

                const angle = coords.angle ?? 0;
                // Calculate dynamic offset direction
                const textDistance = 22;
                const tx = textDistance * Math.cos(angle);
                const ty = textDistance * Math.sin(angle) + 4; // slight vertical adjustment
                
                // Set textAnchor dynamically based on which side the label is on
                let textAnchor: "middle" | "start" | "end" = "middle";
                if (Math.cos(angle) > 0.3) {
                  textAnchor = "start";
                } else if (Math.cos(angle) < -0.3) {
                  textAnchor = "end";
                }

                return (
                  <g 
                    key={node.id} 
                    transform={`translate(${coords.x}, ${coords.y})`}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode(node)}
                  >
                    {/* Ring highlight on selection */}
                    <circle
                      r="20"
                      fill="transparent"
                      stroke={clusterColor}
                      strokeWidth={isSelected ? "2.5" : "0"}
                      strokeDasharray="3 2"
                      className="transition-all duration-200 animate-pulse"
                    />

                    {/* Node Circle */}
                    <circle
                      r="14"
                      stroke={clusterColor}
                      strokeWidth={isSelected ? "3" : "2"}
                      className="fill-white transition-all duration-200 group-hover:scale-110 shadow-sm"
                    />
                    
                    {/* Cluster Color Center Indicator */}
                    <circle
                      r="6"
                      fill={clusterColor}
                    />

                    {/* Node Label Text - Offset Radially */}
                    <text
                      x={tx}
                      y={ty}
                      textAnchor={textAnchor}
                      className="text-[9px] font-black fill-slate-700 pointer-events-none drop-shadow-xs font-sans"
                    >
                      {node.name.split(" ").slice(0, 2).join(" ")}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Dynamic Community Legend Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-center pointer-events-none">
              {clusters.map((c) => {
                const color = getClusterHexColor(c.id);
                return (
                  <div 
                    key={c.id} 
                    className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border bg-white/90 backdrop-blur-xs flex items-center gap-1.5 shadow-xs"
                    style={{ color, borderColor: `${color}30` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                    Cluster {c.id}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Competitor Profile Card (5/12 Width) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Competitor Profile Details */}
          {selectedNode ? (
            <div className="app-card border border-border-subtle bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-bold text-slate-800 text-sm">
                  Competitor Profile
                </h3>
                <span className="text-[9px] font-black uppercase text-slate-500 bg-slate-150 px-2 py-0.5 rounded font-mono">
                  {selectedNode.id}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Name</h4>
                  <p className="font-display font-black text-slate-800 text-base">{selectedNode.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <LuCoins size={10} />
                      Revenue
                    </h4>
                    <p className="text-xs font-extrabold text-slate-700">{selectedNode.revenue}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <LuActivity size={10} />
                      Target Margin
                    </h4>
                    <p className="text-xs font-extrabold text-indigo-600">{selectedNode.margin}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <LuMapPin size={10} />
                      Cluster Location
                    </h4>
                    <p className="text-xs font-extrabold text-slate-600">{selectedNode.region}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <LuAward size={10} />
                      Primary Material
                    </h4>
                    <p className="text-xs font-extrabold text-slate-600">{selectedNode.material}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full border ${getClusterColor(selectedNode.clusterId ?? 0).split(" ").slice(1).join(" ")}`}>
                    Leiden Community #{selectedNode.clusterId}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="app-card border border-border-subtle bg-white p-5 shadow-sm text-center py-12 text-xs font-semibold text-slate-400">
              Select a node on the graph to view competitor profiling
            </div>
          )}

          {/* Quick Statistics Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="app-card border border-border-subtle bg-white p-4 shadow-sm">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase">Leiden Clusters</h4>
              <p className="font-display font-black text-slate-800 text-lg sm:text-2xl">{clusters.length}</p>
            </div>
            <div className="app-card border border-border-subtle bg-white p-4 shadow-sm">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase">Graph Nodes</h4>
              <p className="font-display font-black text-slate-800 text-lg sm:text-2xl">{nodes.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Gemma Competitor Risk Advisory Engine */}
      <div className="app-card border border-border-subtle bg-white p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <LuSparkles size={14} />
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-800 text-sm">
                Gemma Competitor Cluster Risk Advisory
              </h3>
              <p className="text-[10px] font-semibold text-slate-400">
                Run cross-database analysis mapping Leiden graph communities to live postgres metal rate surges
              </p>
            </div>
          </div>

          <button
            onClick={handleQueryAdvisory}
            disabled={advisoryLoading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
          >
            {advisoryLoading ? (
              <>
                <LuLoader size={12} className="animate-spin" />
                Compiling Report...
              </>
            ) : (
              <>
                <LuCompass size={12} />
                Ask Gemma Competitor Advisory
              </>
            )}
          </button>
        </div>

        {advisoryReport ? (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-100/80 text-xs font-semibold text-slate-700 leading-relaxed font-sans max-h-[380px] overflow-y-auto space-y-2">
            {parseMarkdown(advisoryReport)}
          </div>
        ) : advisoryLoading ? (
          <div className="flex items-center justify-center py-12 gap-2 text-xs font-semibold text-slate-400">
            <LuLoader size={16} className="animate-spin text-primary" />
            Gemma is currently parsing the Leiden cluster partitions and evaluating local B2B index vulnerability...
          </div>
        ) : (
          <div className="text-center py-10 text-xs font-semibold text-slate-400">
            Click the "Ask Gemma Competitor Advisory" button to generate a community pricing risk report.
          </div>
        )}
      </div>
    </div>
  );
}

function parseMarkdown(text: string) {
  const lines = text.split("\n");
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      return (
        <h3 key={idx} className="text-xs sm:text-sm font-black text-slate-800 border-b border-slate-200/80 pb-2 mb-2 mt-4 first:mt-0">
          {trimmed.slice(2)}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h4 key={idx} className="text-[11px] sm:text-xs font-black text-slate-700 mt-4 mb-2">
          {trimmed.slice(3)}
        </h4>
      );
    }
    if (trimmed.startsWith("* ")) {
      const content = trimmed.slice(2);
      return (
        <li key={idx} className="list-disc list-inside text-[11px] font-semibold text-slate-600 ml-2 py-0.5 leading-relaxed">
          {renderInlineFormatting(content)}
        </li>
      );
    }
    if (trimmed !== "") {
      return (
        <p key={idx} className="text-[11px] font-medium text-slate-600 py-0.5 leading-relaxed">
          {renderInlineFormatting(trimmed)}
        </p>
      );
    }
    return <div key={idx} className="h-1" />;
  });
}

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-black text-slate-800">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
