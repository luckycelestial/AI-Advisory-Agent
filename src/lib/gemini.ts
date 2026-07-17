import { GoogleGenAI } from "@google/genai";
import { prisma } from "./prisma-client";

const apiKey = process.env.GEMMA_API_KEY;
const modelName = process.env.GEMMA_MODEL || "gemma-2-27b-it";

// Initialize client with key. If not provided in environment, it will fail gracefully when called.
const getAIClient = () => {
  if (!apiKey) {
    throw new Error("GEMMA_API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey });
};

interface Material {
  name: string;
  currentCost: number;
  marketCost: number;
  supplier: string;
}

interface Order {
  id: string;
  client: string;
  margin: string;
  material: Material;
}

interface MarketSignal {
  id: number;
  title: string;
  source: string;
  date: string;
  relevance: string;
  tag: string;
  desc: string;
}

export interface RecommendationResponse {
  id: string;
  trigger: string;
  action: string;
  confidence: "high" | "medium" | "low";
  reasoning: string[];
}

export interface ShipmentStepInput {
  name: string;
  status: string;
  sequence: number;
}

export interface ShipmentInput {
  id: number;
  material: string;
  qty: string;
  supplier: string;
  currentNode: string;
  eta: string;
  status: string;
  steps: ShipmentStepInput[];
}

export interface StructuralRiskInput {
  id: number;
  trend: string;
  status: string;
  title: string;
  description: string;
}

export interface ShipmentAnnotationOutput {
  id: number;
  annotation: string;
}

export interface StructuralRiskAdvisoryOutput {
  id: number;
  advisory: string;
}

export interface MarketSignalTagOutput {
  id: number;
  relevance: "high" | "medium" | "low";
  tag: string;
}

export interface MarketSentimentOutput {
  pressureTrend: string;
  threatDescription: string;
  advisoryAction: string;
}

export interface UnifiedAnalysisResponse {
  recommendations: RecommendationResponse[];
  shipmentAnnotations: ShipmentAnnotationOutput[];
  structuralRiskAdvisories: StructuralRiskAdvisoryOutput[];
  marketSignalTags: MarketSignalTagOutput[];
  marketSentiment: MarketSentimentOutput;
}

export function cleanAndParseJson(text: string): any {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch (e) {
    const arrayStart = trimmed.indexOf("[");
    const arrayEnd = trimmed.lastIndexOf("]");
    if (arrayStart !== -1 && arrayEnd !== -1 && arrayEnd > arrayStart) {
      try {
        return JSON.parse(trimmed.substring(arrayStart, arrayEnd + 1));
      } catch (err) {}
    }
    
    const objStart = trimmed.indexOf("{");
    const objEnd = trimmed.lastIndexOf("}");
    if (objStart !== -1 && objEnd !== -1 && objEnd > objStart) {
      try {
        return JSON.parse(trimmed.substring(objStart, objEnd + 1));
      } catch (err) {}
    }
    throw e;
  }
}

export async function runFullGemmaAnalysis(
  orders: Order[],
  materials: Material[],
  signals: MarketSignal[],
  shipments: ShipmentInput[],
  structuralRisks: StructuralRiskInput[]
): Promise<UnifiedAnalysisResponse> {
  const ai = getAIClient();

  const tools: any[] = [{
    functionDeclarations: [
      {
        name: "readInventoryDetails",
        description: "Fetch live CNC shop inventory levels and categories from database",
        parameters: { type: "OBJECT", properties: {} }
      },
      {
        name: "updateClientOrderContractMargin",
        description: "Autonomously update standard client order locked-in contract margin directly in database to hedge against raw material cost surges",
        parameters: {
          type: "OBJECT",
          properties: {
            orderId: { type: "STRING" },
            margin: { type: "STRING", description: "Target margin percentage, format e.g. '14.5%'" }
          },
          required: ["orderId", "margin"]
        }
      },
      {
        name: "reorderStock",
        description: "Re-order buffer stock to replenish low/out of stock inventory items",
        parameters: {
          type: "OBJECT",
          properties: {
            sku: { type: "STRING" },
            qty: { type: "INTEGER" }
          },
          required: ["sku", "qty"]
        }
      }
    ]
  }];

  const prompt = `
You are FinCent's manufacturing and CNC pricing intelligence agent, powered by Gemma.
Your job is to analyze the entire business state and generate structured insights.

Analyze:
1. Current locked-in contract rates vs. live market index rates for raw materials.
2. Active client orders, their current target margins, and their material dependencies.
3. External market signals, news alerts, and cluster cost reports.
4. Active shipments, their current tracking node, delays, and ETA.
5. Long-term structural transition risks (such as ICE-to-EV part demand trends).

If raw material rates have surged, use 'updateClientOrderContractMargin' to protect margins on the active orders. If raw block blocks or tooling inventory is low, use 'reorderStock'. Conduct tool actions before returning your final summary.

Here is the current business state:

--- MATERIALS ---
${materials.map(m => `- ${m.name}: Supplier: ${m.supplier}, Contract Rate: ₹${m.currentCost.toLocaleString("en-IN")}, Live Market Index: ₹${m.marketCost.toLocaleString("en-IN")}`).join("\n")}

--- ACTIVE CLIENT ORDERS ---
${orders.map(o => `- Order ${o.id} for ${o.client}: Current Margin: ${o.margin}, Material: ${o.material.name}`).join("\n")}

--- EXTERNAL MARKET SIGNALS ---
${signals.map(s => `- Signal ID ${s.id} [${s.source}] ${s.title}: Relevance: ${s.relevance}, Info: ${s.desc}`).join("\n")}

--- ACTIVE SHIPMENTS ---
${shipments.map(s => `- Shipment ID ${s.id} for ${s.material}: Current Node: ${s.currentNode}, Status: ${s.status}, ETA: ${s.eta}, Steps: ${s.steps.map(step => `${step.name}(${step.status})`).join(" -> ")}`).join("\n")}

--- STRUCTURAL RISKS ---
${structuralRisks.map(r => `- Risk ID ${r.id} (${r.trend}): Title: ${r.title}, Description: ${r.description}`).join("\n")}
`;

  try {
    const chat = ai.chats.create({
      model: modelName,
      config: {
        systemInstruction: "You are the autonomous CFO pricing agent. Analyze the business state. If raw material rates have surged, use 'updateClientOrderContractMargin' to protect margins. If inventory is low, use 'reorderStock'. Conduct tool actions before returning your final summary.",
        tools: tools,
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            recommendations: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  id: { type: "STRING", description: "Unique recommendation identifier like REC-01, REC-02, REC-03" },
                  trigger: { type: "STRING", description: "The market signal or cost change that triggered this" },
                  action: { type: "STRING", description: "Specific pricing action recommendation" },
                  confidence: { type: "STRING", enum: ["high", "medium", "low"], description: "Confidence level" },
                  reasoning: {
                    type: "ARRAY",
                    items: { type: "STRING" },
                    description: "Step-by-step reasoning details justifying the action"
                  }
                },
                required: ["id", "trigger", "action", "confidence", "reasoning"]
              }
            },
            shipmentAnnotations: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  id: { type: "INTEGER", description: "Matching shipment ID" },
                  annotation: { type: "STRING", description: "Gemma node advisory note (1-2 sentences max)" }
                },
                required: ["id", "annotation"]
              }
            },
            structuralRiskAdvisories: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  id: { type: "INTEGER", description: "Matching risk ID" },
                  advisory: { type: "STRING", description: "Gemma diversification or pricing advisory note" }
                },
                required: ["id", "advisory"]
              }
            },
            marketSignalTags: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  id: { type: "INTEGER", description: "Matching signal ID" },
                  relevance: { type: "STRING", enum: ["high", "medium", "low"], description: "Relevance level" },
                  tag: { type: "STRING", description: "Short Gemma-generated relevance tag" }
                },
                required: ["id", "relevance", "tag"]
              }
            },
            marketSentiment: {
              type: "OBJECT",
              properties: {
                pressureTrend: { type: "STRING", description: "Short trend phrase (e.g. 📈 Strong Upward Trend)" },
                threatDescription: { type: "STRING", description: "Combined threat description sentence" },
                advisoryAction: { type: "STRING", description: "Recommended immediate action" }
              },
              required: ["pressureTrend", "threatDescription", "advisoryAction"]
            }
          },
          required: ["recommendations", "shipmentAnnotations", "structuralRiskAdvisories", "marketSignalTags", "marketSentiment"]
        }
      }
    });

    let response = await chat.sendMessage({ message: prompt });

    let loopCount = 0;
    while (response.functionCalls && response.functionCalls.length > 0 && loopCount < 5) {
      loopCount++;
      const toolResults: any[] = [];

      for (const call of response.functionCalls) {
        console.log(`Gemma Agent triggered tool call: ${call.name} with args:`, call.args);
        let resultData = {};

        if (call.name === "readInventoryDetails") {
          const items = await prisma.inventoryItem.findMany();
          resultData = { items };
        } else if (call.name === "updateClientOrderContractMargin") {
          const { orderId, margin } = call.args as any;
          const updated = await prisma.order.update({
            where: { id: orderId },
            data: { margin }
          });
          resultData = { success: true, updatedOrderId: updated.id, newMargin: updated.margin };
        } else if (call.name === "reorderStock") {
          const { sku, qty } = call.args as any;
          const updated = await prisma.inventoryItem.update({
            where: { sku },
            data: {
              quantity: { increment: qty },
              status: "In Stock",
              lastUpdated: new Date()
            }
          });
          resultData = { success: true, sku: updated.sku, newQty: updated.quantity };
        }

        toolResults.push({
          functionResponse: {
            name: call.name,
            response: resultData
          }
        });
      }

      // Send the tool results back to Gemma
      response = await chat.sendMessage({
        message: toolResults
      });
    }

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from Gemma model");
    }

    return cleanAndParseJson(text) as UnifiedAnalysisResponse;
  } catch (error) {
    console.error("Gemma API invocation failed:", error);
    throw error;
  }
}

export interface ParsedImportData {
  materials: {
    name: string;
    currentCost: number;
    marketCost: number;
    supplier: string;
  }[];
  orders: {
    id: string;
    client: string;
    margin: string;
    materialName: string;
  }[];
  inventory: {
    name: string;
    category: string;
    sku: string;
    quantity: number;
    unit: string;
    location: string;
    minThreshold: number;
    image: string;
  }[];
}

export async function parseUploadedFileWithGemma(
  fileContent: string
): Promise<ParsedImportData> {
  const ai = getAIClient();

  const prompt = `
You are FinCent's manufacturing data extraction agent, powered by Gemma.
Your job is to parse the raw unstructured text of an uploaded file (like a quote, invoice, or excel sheet dump) and extract structured entities.

Analyze this raw file content:
--- FILE CONTENT ---
${fileContent}

You must extract three lists of entities:
1. Materials: Name, unit purchase cost, current live market cost (estimate/lookup based on name, e.g. Aluminium at Rs 380/kg or Steel at Rs 58,000/ton), and supplier name.
2. Orders: Order ID, Client Name, Target/Locked-in margin percentage (e.g. "14.2%"), and the matching Material Name this order depends on.
3. Inventory Items: Name, Category ("Raw Material" | "Tooling" | "WIP" | "Finished"), SKU (unique identifier), quantity, unit ("pcs" | "kg" | "meters"), location (e.g., Rack or Cabinet), minThreshold for alert, and image public path (e.g., "/inventory/aluminum-blocks.png" or "/inventory/carbide-end-mill.png").

Respond strictly in the requested JSON format. Do not return any conversational text outside the JSON output.
`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            materials: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  currentCost: { type: "NUMBER" },
                  marketCost: { type: "NUMBER" },
                  supplier: { type: "STRING" }
                },
                required: ["name", "currentCost", "marketCost", "supplier"]
              }
            },
            orders: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  id: { type: "STRING" },
                  client: { type: "STRING" },
                  margin: { type: "STRING" },
                  materialName: { type: "STRING" }
                },
                required: ["id", "client", "margin", "materialName"]
              }
            },
            inventory: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  category: { type: "STRING", enum: ["Raw Material", "Tooling", "WIP", "Finished"] },
                  sku: { type: "STRING" },
                  quantity: { type: "NUMBER" },
                  unit: { type: "STRING" },
                  location: { type: "STRING" },
                  minThreshold: { type: "NUMBER" },
                  image: { type: "STRING" }
                },
                required: ["name", "category", "sku", "quantity", "unit", "location", "minThreshold", "image"]
              }
            }
          },
          required: ["materials", "orders", "inventory"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from Gemma model");
    }

    return cleanAndParseJson(text) as ParsedImportData;
  } catch (error) {
    console.error("Gemma file parsing failed:", error);
    throw error;
  }
}


