import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlgoSensei — DSA Interview Coach",
  description:
    "AlgoSensei is your AI-powered mentor for Data Structures & Algorithms. Get instant explanations, optimized code, and interview prep powered by Google Gemini.",
  openGraph: {
    images: ["/og-image.png"],
  },
  keywords: ["algorithms", "data structures", "competitive programming", "AI tutor", "LeetCode", "coding interview"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
