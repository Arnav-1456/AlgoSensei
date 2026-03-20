import ChatWindow from "@/components/ChatWindow";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat · AlgoSensei",
  description: "Chat with AlgoSensei — your AI mentor for algorithms and data structures.",
};

export default function ChatPage() {
  return (
    <main className="h-[100dvh] bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00ff88]/5 rounded-full blur-[100px]" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center px-4 py-3 border-b border-white/5 flex-shrink-0 bg-black/40 backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors p-2 rounded-lg hover:bg-white/5"
        >
          <ArrowLeft size={15} />
          Home
        </Link>
      </div>

      {/* Chat container */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-3xl mx-auto overflow-hidden">
        <ChatWindow />
      </div>
    </main>
  );
}
