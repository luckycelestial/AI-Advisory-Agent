import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({ 
  subsets: ["latin"], 
  variable: "--font-primary-display",
  display: 'swap',
});

const sansFont = Inter({ 
  subsets: ["latin"], 
  variable: "--font-primary-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AI Advisory Agent | Gemma-Powered SME Growth Platform",
  description: "Gemma correlates orders, costs, and cash flow signals to give Bengaluru's manufacturing SMEs plain-language, ranked action plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}>
      <body className="bg-background text-foreground font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
