import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aryan Milind Keskar | UCSD MS CS Student & AI Engineer",
  description: "Portfolio of Aryan Milind Keskar, Incoming MS CS student at UC San Diego & AI Engineer at Appzoy. Projects in Agentic Systems, Deep RL, and Quantitative Control.",
  keywords: [
    "Aryan Milind Keskar",
    "Aryan Keskar",
    "UCSD",
    "UC San Diego",
    "Appzoy",
    "AI Engineer",
    "Perception Systems",
    "Agentic Systems",
    "Deep Reinforcement Learning",
    "Hawkes Process",
    "Quant"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0B0F19] text-[#F0F6FC]`}
      >
        {children}
      </body>
    </html>
  );
}

