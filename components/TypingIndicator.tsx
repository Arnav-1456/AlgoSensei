import { Terminal } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-4 px-4 py-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
        <Terminal size={14} strokeWidth={2.5} />
      </div>

      {/* Dot animation */}
      <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-4 backdrop-blur-sm h-[52px]">
        <span
          className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
          style={{ animationDelay: "0ms", animationDuration: "900ms" }}
        />
        <span
          className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
          style={{ animationDelay: "150ms", animationDuration: "900ms" }}
        />
        <span
          className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"
          style={{ animationDelay: "300ms", animationDuration: "900ms" }}
        />
      </div>
    </div>
  );
}
