import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Compuute AB — Agentic AI Security",
  description:
    "We secure the AI agent layer. MCP server audits, NIS2 & DORA compliance, and AI agent security assessments for regulated industries.",
  keywords: [
    "MCP security",
    "AI agent security",
    "NIS2 compliance",
    "DORA compliance",
    "MCP audit",
    "agentic AI",
  ],
  authors: [{ name: "Compuute AB" }],
  openGraph: {
    title: "Compuute AB — Agentic AI Security",
    description:
      "We secure the AI agent layer. MCP server audits, NIS2 & DORA compliance.",
    url: "https://compuute.se",
    siteName: "Compuute AB",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
