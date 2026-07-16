# General Project Setup & Configuration Instructions

This guide provides setup, database configuration, and styling guidelines for Next.js applications powered by PostgreSQL in local development and Supabase in production.

---

## 🛠️ Tech Stack Overview
- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (CSS variables, root theme classes, dynamic fonts)
- **Database Client**: `@supabase/supabase-js` (or PostgreSQL client library like `pg`)
- **Development Database**: Local PostgreSQL (running natively on local machine)
- **Production Database**: Hosted Supabase (cloud database instance)
- **Agent Integration**: Database schema and credentials provided to the AI Coding Agent via Model Context Protocol (MCP) servers during development.

---

## ⚙️ Environment Variables Configuration (`.env.local`)

Create a `.env.local` file in the project root:

```bash
# App Mode
NEXT_PUBLIC_APP_ENV="local" # Set to "production" in prod

# Development Database (Local Native PostgreSQL)
DATABASE_URL="postgresql://postgres:password@localhost:5432/dev_db"

# Production Supabase Connection
NEXT_PUBLIC_SUPABASE_URL="https://your-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-production-anon-key"
```

---

## 💾 Database Setup: Local Postgres (Dev) vs. Supabase (Prod)

This workflow separates local development using a native PostgreSQL installation from production which uses Supabase.

### 1. Local Development (Native PostgreSQL)

Local development runs against a native PostgreSQL installation running on `localhost`.

#### Prerequisites:
- PostgreSQL server installed natively and running on your machine (default port: `5432`).
- A local database created for development (e.g., `dev_db`).

#### Steps:
1.  **Start Local Postgres**:
    Ensure the local postgresql service is active.
    - *Windows (PowerShell)*: `Start-Service postgresql-x64`
    - *macOS (Homebrew)*: `brew services start postgresql`
    - *Linux*: `sudo systemctl start postgresql`
2.  **Configure Database URL**:
    Specify the credentials in your local `.env.local` or configuration files.
3.  **Run Migrations / Schema Seeds**:
    Apply database schema structure to local Postgres using your migration CLI of choice:
    ```bash
    npm run db:migrate
    ```
4.  **Seed Local Data**:
    Run seed scripts to insert mock development data:
    ```bash
    npm run db:seed
    ```

---

### 2. Production Deployment (Hosted Supabase)

Production runs on hosted Supabase infrastructure.

#### Steps:
1.  **Push Schema / Migrations**:
    Deploy local SQL schemas directly to the production Supabase project via CLI:
    ```bash
    supabase db push --db-url "production-connection-string"
    ```
2.  **Configure Production Environment**:
    Apply environment settings on your hosting platform (e.g., Vercel / Netlify):
    *   `NEXT_PUBLIC_SUPABASE_URL`
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    *   `NEXT_PUBLIC_APP_ENV="production"`

---

## 🤖 AI Development Integration (MCP Server)

To enable the AI Coding Agent to interact with the database during the development lifecycle:
- **MCP Server Connection**: Run database MCP servers (e.g., PostgreSQL or Supabase MCP) connected to the local development database.
- **Purpose**: Enables the Coding Agent to inspect schema shapes, fetch current state, and execute migrations directly while building features.
- *Note: MCP integration is strictly for development assistance and has no role in the production runtime.*

---

## 🎨 Styling & Theme Configuration

This setup supports a responsive, dynamic theme structure using custom CSS variables mapped in Tailwind.

### 1. Tailwind CSS Config (`globals.css`)
Define colors, roundings, and font variables under Tailwind's `@theme` configuration:

```css
@import "tailwindcss";

@theme {
  /* Fonts */
  --font-display: var(--font-primary-display), system-ui, sans-serif;
  --font-sans: var(--font-primary-sans), system-ui, sans-serif;

  /* Theme Palette Variables */
  --color-background: #fcfcfc;
  --color-foreground: #1f1f1f;
  --color-primary: #ff383c;
  --color-primary-dark: #dc143c;
  --color-surface: #ffffff;
  --color-border-subtle: #e6e6e6;

  /* Border Roundings */
  --radius-card: 24px;
  --radius-button: 9999px;

  /* Shadows */
  --shadow-soft: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}
```

### 2. Custom CSS Utilities & Theme Overrides
You can define layout classes and style states in your globals file:

```css
@layer components {
  /* Dynamic Component Styles */
  .app-card {
    @apply rounded-card border border-border-subtle bg-surface shadow-soft transition-all duration-300;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-button bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary-dark active:scale-[0.98];
  }
}
```

### 3. Font Loading in Layout (`layout.tsx`)
Ensure target fonts are loaded via Next.js Google Fonts and variables are injected into the HTML root:

```tsx
import { Bricolage_Grotesque, Inter } from "next/font/google";

const displayFont = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-primary-display" });
const sansFont = Inter({ subsets: ["latin"], variable: "--font-primary-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 🚀 Running the Application

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```
