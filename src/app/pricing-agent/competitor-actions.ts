"use server";

import { getNeo4jDriver } from "@/lib/neo4j-client";
import { runLeidenClustering, GraphNode, GraphLink } from "@/lib/leiden";
import { GoogleGenAI } from "@google/genai";
import { getIndianMetalIndices } from "./actions";

const getAIClient = () => {
  const apiKey = process.env.GEMMA_API_KEY;
  if (!apiKey) {
    throw new Error("GEMMA_API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey });
};

export async function getCompetitorGraph() {
  const driver = getNeo4jDriver();
  const session = driver.session();

  try {
    // 1. Fetch Companies
    const companyRes = await session.run("MATCH (c:Company) RETURN c");
    const companies = companyRes.records.map(rec => {
      const prop = rec.get("c").properties;
      return {
        id: prop.id as string,
        name: prop.name as string,
        revenue: prop.revenue as string,
        employeeCount: prop.employeeCount ? Number(prop.employeeCount) : 0,
        margin: prop.margin as string
      };
    });

    // 2. Fetch Locations
    const locRes = await session.run("MATCH (c:Company)-[:LOCATED_IN]->(l:ClusterRegion) RETURN c.id, l.name");
    const locationMap = new Map<string, string>();
    locRes.records.forEach(rec => {
      locationMap.set(rec.get("c.id") as string, rec.get("l.name") as string);
    });

    // 3. Fetch Materials
    const matRes = await session.run("MATCH (c:Company)-[:USES_MATERIAL]->(m:Material) RETURN c.id, m.name");
    const materialMap = new Map<string, string>();
    matRes.records.forEach(rec => {
      materialMap.set(rec.get("c.id") as string, rec.get("m.name") as string);
    });

    // Attach metadata to company nodes
    const nodes: GraphNode[] = companies.map(c => ({
      ...c,
      region: locationMap.get(c.id) || "Unknown",
      material: materialMap.get(c.id) || "Unknown"
    }));

    // 4. Fetch Competitor Links
    const linkRes = await session.run("MATCH (a:Company)-[r:COMPETES_WITH]->(b:Company) RETURN a.id, b.id");
    const links: GraphLink[] = linkRes.records.map(rec => ({
      source: rec.get("a.id") as string,
      target: rec.get("b.id") as string,
      weight: 1.0 // Base competitive weight
    }));

    return { nodes, links };
  } catch (err) {
    console.error("Failed to query Neo4j graph:", err);
    throw err;
  } finally {
    await session.close();
  }
}

export async function runLeidenCommunityDetection() {
  const { nodes, links } = await getCompetitorGraph();

  // Compute cohesive edge weights:
  // - Direct competitor edge: weight = 1.0
  // - Sharing same cluster region: weight = 2.0
  // - Sharing same material: weight = 1.5
  const weightedLinks: GraphLink[] = [...links];

  // Add virtual weight bridges for sharing location and materials
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const u = nodes[i];
      const v = nodes[j];
      let weight = 0;

      if (u.region !== "Unknown" && u.region === v.region) {
        weight += 2.0; // Cohesive location factor
      }
      if (u.material !== "Unknown" && u.material === v.material) {
        weight += 1.5; // Cohesive raw material factor
      }

      if (weight > 0) {
        weightedLinks.push({
          source: u.id,
          target: v.id,
          weight
        });
      }
    }
  }

  // Run the Leiden community detection
  const clusterMapping = runLeidenClustering(nodes, weightedLinks);

  // Group nodes by cluster ID
  const clusters: { [key: number]: GraphNode[] } = {};
  nodes.forEach(node => {
    const cId = clusterMapping.get(node.id) ?? 0;
    if (!clusters[cId]) clusters[cId] = [];
    clusters[cId].push(node);
  });

  return {
    nodes: nodes.map(n => ({
      ...n,
      clusterId: clusterMapping.get(n.id) ?? 0
    })),
    links,
    clusters: Object.entries(clusters).map(([cId, cNodes]) => ({
      id: Number(cId),
      members: cNodes
    }))
  };
}

export async function getCompetitorAnalysisReport(clusters: any[]) {
  const ai = getAIClient();
  const indexPrices = await getIndianMetalIndices();

  // Create prompt detailing current clusters and materials
  const prompt = `
You are FinCent's expert competitor intelligence advisor, powered by Gemma.
Analyze the following competitor clusters discovered via the Leiden community detection algorithm:

--- LEIDEN COMPETITOR CLUSTERS ---
${clusters.map(c => `Cluster ${c.id}:
Members:
${c.members.map((m: any) => `- Name: ${m.name}, Region: ${m.region}, Material Dependency: ${m.material}, Profit Margin: ${m.margin}, Revenue: ${m.revenue}`).join("\n")}`).join("\n\n")}

--- LIVE B2B PROCUREMENT RATE UPDATES ---
${indexPrices.map((p: any) => `- [${p.source}] ${p.material} in ${p.region}: ₹${p.price.toLocaleString("en-IN")} ${p.unit} (${p.change > 0 ? "+" : ""}${p.change}% change)`).join("\n")}

Provide a professional, executive-level competitor risk advisory report in Markdown format. The report should contain:
1. **Cluster Dynamics Summary**: What makes each Leiden cluster unique (shared location, shared raw materials).
2. **Pricing Vulnerability Analysis**: Which competitors are at highest risk of margin bleed based on live price hikes (e.g. Tata nexarc steel hikes vs. Peenya CNC Cluster).
3. **Recommended Counter-Pricing Strategy**: Steps our shop (Peenya-based machining company) should take to defend market share and maintain healthy client margins without sparking a price war.

Keep the response extremely short, terse, and highly compressed (maximum 150 words total, absolute max 2 short bullet points per section). Keep reasoning dense.
`;

  try {
    const modelName = process.env.GEMMA_MODEL || "gemma-4-31b-it";
    const modelToUse = modelName;
    const response = await ai.models.generateContent({
      model: modelToUse,
      contents: prompt,
      config: {
        maxOutputTokens: 1200,
        temperature: 0.2,
      }
    });
    return response.text || "No analysis could be generated.";
  } catch (err) {
    console.error("Gemma competitor report generation failed:", err);
    throw err;
  }
}
