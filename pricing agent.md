# Screen: Pricing Agent

## Purpose
Live, Gemma-powered pricing recommendation engine for CNC/manufacturing SME owners. Reacts to raw material cost shifts, supply chain delays, and external market signals (news, EV transition trends), then recommends specific price adjustments per product/customer with full reasoning. Also accepts the owner's existing business data (Excel/PDF) to ground recommendations in real history rather than defaults.

## Tech Notes
- Framework: Next.js + React, Tailwind CSS
- Backend: FastAPI orchestration layer calling Gemma (function-calling enabled)
- Data sources feeding this screen (via MCP-style tool calls) [web:61][web:64]:
  1. Internal order/cost/customer data (Supabase, seeded via Excel/PDF import)
  2. Supplier & supply chain node data (raw material tracked through each stage)
  3. External news/market data (steel price movements, EV part-demand shifts) via an MCP news tool
- Each data source is exposed to Gemma as a callable tool/function, not hardcoded logic — this is what makes the reasoning per-business and per-month rather than a fixed rule set [web:63][web:74]

## Layout

### 1. Header Bar
- Screen title: "Pricing Agent"
- Status indicator: "Live" (green dot) — shows Gemma is actively monitoring feeds
- Last-checked timestamp (e.g. "Updated 4 min ago")

### 2. Data Import Panel (collapsible, top of screen)
- Card: "Import Your Existing Data"
- Drag-and-drop zone for Excel (.xlsx/.csv) and PDF (invoices, supplier quotes, past price lists)
- Parsing flow: upload → AI extraction (OCR + field detection for PDFs, direct parse for Excel) → preview extracted table → confirm/edit → save to business data store [web:70][web:67]
- Extracted fields to map: material type, unit cost, supplier name, order date, customer, quoted price, payment terms
- Status states: "Parsing...", "Review extracted data", "Imported successfully", "Couldn't parse — try manual entry"
- This import feeds the same Gemma context store used across all screens, not just pricing

### 3. Supply Chain Tracker (raw material journey)
- Visual horizontal stepper/timeline showing nodes the raw material passes through, e.g.:
  Mine/Mill → Distributor → Regional Supplier → Warehouse → CNC Facility
- Each node shows: current stage, expected arrival date, delay risk flag (on-time/at-risk/delayed)
- Card per active material shipment: material name, quantity, current node, ETA, cost locked-in vs current market rate
- Gemma annotation under each shipment: plain-language note on what a delay or node bottleneck means for pricing (e.g. "Steel batch stuck at distributor stage — 4 day delay risk, consider buffer pricing on Order #221")

### 4. External Market Signals Feed
- Card list of relevant news/market events pulled via MCP news tool, e.g.:
  - "Steel prices up 6% this week — [source]"
  - "EV adoption rising — demand for traditional ICE engine parts softening in [region]"
- Each card shows: headline, source, date, and a Gemma-generated relevance tag ("Directly affects Order #214 material cost" or "Long-term risk: 30% of your parts are ICE-specific")
- Filter/sort: Relevance to your business (default) vs. Most recent

### 5. Active Pricing Recommendations (main feed)
- Card per recommendation, ranked by urgency:
  - Trigger: what changed (e.g. "Steel cost +6%", "Customer X order delayed 5 days")
  - Recommended action: specific price adjustment (e.g. "+3% on Product A for new orders")
  - Reasoning trail (expandable): cost data → supply chain status → customer price sensitivity → news signal → conclusion
  - Confidence indicator (High/Medium/Low, based on data completeness)
- Action buttons per card: Accept / Modify / Reject / Ask Gemma to explain further (opens chat with this recommendation pre-loaded as context)

### 6. Structural Risk Panel (EV/parts obsolescence trend)
- Separate section below live recommendations: "Long-Term Demand Signals"
- Highlights parts/product lines at risk from structural shifts (e.g. EV transition reducing demand for ICE-specific CNC parts)
- Gemma narrative: which product lines are exposed, estimated timeline of impact, suggested diversification or pricing strategy
- This is explicitly framed as strategic, not urgent — different visual treatment (muted color, "Watch" tag) vs. live pricing alerts

## Gemma Reasoning Requirements
- Every recommendation must show its reasoning trail, not just output — reference specific data points (order ID, supplier node, news source) [web:41]
- Recommendations must differ based on customer segment/price sensitivity, not apply a flat adjustment across all customers
- If imported data conflicts with default assumptions (e.g. owner's actual margin differs from estimate), Gemma should flag and ask for clarification rather than silently overriding

## States
- Empty state (no data imported yet): prompt to import Excel/PDF or connect a data source first
- Loading state: "Gemma is analyzing your latest data..."
- Error state: MCP news feed unavailable → fallback to last cached signals with timestamp shown

## Out of Scope for This Screen
- No direct supplier ordering/procurement actions (recommendation only, owner acts manually)
- No multi-currency support (INR only for hackathon MVP)