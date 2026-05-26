import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrains = JetBrains_Mono({
  variable: "--font-JetBrains_Mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alrnamee",
  description: "Made with love by github.com/oreninjas for Alrnamee",
  keywords: ["Alrnamee", "alrnamee startup", "Faiyan", "Faiyan S"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${JetBrains.variable}  antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
