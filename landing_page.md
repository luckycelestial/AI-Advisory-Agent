# Screen: Landing Page

## Purpose
Public-facing marketing page for the Gemma-powered SME growth advisory platform. Goal: communicate the core value prop (Gemma as reasoning core, not a dashboard) and drive signups/demo requests from SME owner-operators in Bengaluru's industrial clusters. Single primary CTA throughout — "Try the Demo" / "Get Started".

## Tech Notes
- Framework: Next.js (App Router), Tailwind CSS
- Fully responsive, mobile-first (SME owners often check on mobile)
- No auth required to view this page
- Lightweight — no heavy client-side state, mostly static/marketing content
- Use next/image for any illustrations, lazy-load below-the-fold sections

## Sections (in order)

### 1. Navbar
- Logo + product name (left)
- Nav links: How it works, Features, Pricing (optional for hackathon), FAQ
- Right: "Login" (text link) + "Try Demo" (primary button)
- Sticky on scroll, transparent-to-solid background transition

### 2. Hero Section
- Kicker/badge: "Powered by Google Gemma" (small pill, builds credibility instantly)
- Headline (benefit-driven, not feature-driven): 
  "Your Business Decisions, Explained Before You Make Them"
- Subheadline (one sentence, states the mechanism):
  "Gemma reads your orders, costs, and customer data — then tells you exactly what to do next and why."
- Primary CTA button: "Try the Demo" (links to /demo or /signup)
- Secondary CTA (text link, low friction): "See how it works ↓" (scrolls to How It Works)
- Visual: illustration or product screenshot showing the weekly action plan card with a Gemma explanation snippet visible — must look like a real output, not abstract art
- Trust signal directly below CTA: "Built for Peenya, Jigani & Bommasandra manufacturing SMEs" (hyper-specific > generic)

### 3. Problem Section (Pain Point)
- Section header: "Your Data Has Answers. You're Just Not Seeing Them."
- 3 short pain-point cards (icon + 1-2 lines each):
  - "6 in 10 SMEs seek funding just to manage cash flow — not to grow"
  - "₹30 lakh crore MSME credit gap — most owners fly blind on pricing and collections"
  - "No finance team? Spreadsheets can't tell you why a decision makes sense"
- Keep copy tight — this section exists to create urgency before the solution reveal

### 4. Solution Section
- Section header: "Meet Your AI CFO — Powered by Gemma"
- One paragraph explaining the core mechanism: raw signals (costs, orders, payments) → Gemma correlates across domains → plain-language, ranked action plan
- Visual: simple diagram/flow — Data In → Gemma Reasoning → Action Plan Out (use Mermaid-style flow or illustration, not a stock photo)
- Emphasize the differentiator line: "A rules engine flags a number crossed a line. Gemma explains why it matters for your business, this month."

### 5. Features Grid (3 Core Interactions)
- Section header: "Three Ways to Talk to Your Business Data"
- 3 feature cards, each with icon, title, 1-2 line description, and a small screenshot/mock:
  - **Pricing Agent** — "Reacts instantly when input costs shift, and recommends the exact price change with reasoning."
  - **Ask Your AI CFO** — "Ask anything in plain language — get grounded answers, not generic chatbot fluff."
  - **What-if Simulator** — "Test a decision before you make it. See the projected impact on revenue, margin, and cash flow."
- Each card CTA: "See it in action" → scrolls to or links to relevant demo screen

### 6. How It Works (3-4 Steps)
- Section header: "From Raw Numbers to a Ranked Action Plan"
- Numbered horizontal steps (1-4):
  1. Connect your data (orders, costs, payments)
  2. Gemma correlates signals across pricing, cash flow, and customers
  3. Get a weekly, ranked, explained action plan
  4. Interrogate any recommendation or simulate a decision before acting
- Keep each step to one line + optional small icon

### 7. Social Proof / Credibility (Hackathon Context)
- Since this is a hackathon MVP, replace traditional testimonials with:
  - "Built for Build with Gemma Hackathon" badge
  - Target market stat callout: "Designed for Bengaluru's manufacturing & trading SME clusters"
  - Optional: team credibility line (names, one-liner on background)

### 8. FAQ Section (Accordion)
- 4-5 short Q&As, collapsed by default:
  - "Do I need a finance team to use this?"
  - "What data do I need to connect?"
  - "How is this different from a normal dashboard?"
  - "Is my business data secure?"
  - "What does it cost?" (mark as "Free during hackathon demo" if applicable)

### 9. Final CTA Section
- Bold restatement of core value prop
- Single centered CTA button: "Try the Demo"
- No secondary distractions — this is the last conversion point

### 10. Footer
- Logo + one-line tagline
- Links: Product, How it Works, FAQ, Contact
- Social/GitHub link (relevant for hackathon judges checking credibility)
- Small text: "Built with Google Gemma" + hackathon name/badge

## Design Guidelines
- Color palette: professional, trust-building (deep blue/teal primary, avoid overly playful colors — target audience is serious SME owners)
- Typography: clean sans-serif, high readability, avoid dense paragraphs
- Every section should answer the visitor's next logical question as they scroll (problem → solution → proof → how it works → action)
- Mobile: stack all grids to single column, keep CTA buttons full-width on mobile
- Avoid jargon like "orchestrator," "correlation," "RAG" in copy — keep language plain for non-technical SME owners; save technical depth for pitch/judge-facing content only

## Out of Scope for This Screen
- No live chat widget
- No pricing calculator (unless time permits post-MVP)
- No blog/resources section