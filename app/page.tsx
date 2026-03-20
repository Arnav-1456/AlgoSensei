import Link from "next/link";
import { Terminal, Crosshair, HelpCircle, Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoSensei — AI DSA Coach",
  description: "Your AI-powered DSA interview coach.",
};

const features = [
  {
    icon: Crosshair,
    title: "Pattern Recognition",
    desc: "Learn to spot sliding windows, two pointers, and BFS/DFS before writing a single line of code.",
  },
  {
    icon: HelpCircle,
    title: "Hint-first Learning",
    desc: "A true mentor doesn't just hand over the solution. Get Socratic hints that guide you to the answer.",
  },
  {
    icon: Activity,
    title: "Complexity Analysis",
    desc: "Master Big-O. Get detailed, step-by-step breakdowns of your time and space complexity.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-[#00ff88]/30">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at top, black 40%, transparent 70%)"
          }}
        />
      </div>

      {/* Floating code background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5 flex items-center justify-center font-mono text-xs z-0">
        <div className="absolute top-20 left-[10%] -rotate-12 blur-[1px]">
          <pre>{`def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        midCtx = (l + r) // 2`}</pre>
        </div>
        <div className="absolute bottom-40 right-[15%] rotate-6 blur-[2px]">
          <pre>{`const dp = new Array(n)
  .fill(0)
  .map(() => 
    new Array(m).fill(-1)
  );`}</pre>
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88]">
            <Terminal size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight">AlgoSensei</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 md:pt-32 pb-20 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 border border-[#00ff88]/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-xs text-[#00ff88] font-mono tracking-wide">SYSTEM: ONLINE</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          Your AI-powered <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-emerald-500">
            DSA interview coach
          </span>
        </h1>

        <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
          Master algorithms the right way. No spoon-fed solutions — just Socratic hints, pattern recognition, and rigorous complexity analysis.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/chat"
            className="group flex items-center gap-2 px-8 py-4 rounded-md bg-[#00ff88] text-black font-semibold text-sm hover:bg-[#00ff88]/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Terminal size={16} />
            Start Practicing
            <span className="font-mono text-black/50 ml-2 group-hover:translate-x-1 transition-transform">_</span>
          </Link>
          <div className="text-xs font-mono text-white/40 bg-white/5 border border-white/10 px-4 py-3 rounded-md">
            <span className="text-[#00ff88]">%</span> npx algosensei init
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 pb-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-black/40 border border-[#00ff88]/10 rounded-xl p-8 hover:bg-[#00ff88]/5 hover:border-[#00ff88]/30 transition-colors backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center mb-6 group-hover:bg-[#00ff88]/20 transition-colors">
                <Icon size={24} className="text-[#00ff88]" />
              </div>
              <h3 className="font-semibold text-lg text-white mb-3">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-mono">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center bg-black/40">
        <p className="text-xs font-mono text-white/30">
          AlgoSensei v1.0.0 · <span className="text-[#00ff88]/50">Powered by Google Gemini</span>
        </p>
      </footer>
    </main>
  );
}
