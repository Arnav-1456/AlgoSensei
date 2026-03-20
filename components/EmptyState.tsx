const SUGGESTIONS = [
  "Explain binary search with a visual trace",
  "What's the best way to learn dynamic programming?",
  "Walk me through Dijkstra's algorithm",
  "How do I detect a cycle in a linked list?",
  "Explain time complexity of quicksort",
  "What is a Trie and when should I use it?",
];

interface EmptyStateProps {
  onSuggestionClick: (text: string) => void;
}

export default function EmptyState({ onSuggestionClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10 text-center select-none">
      {/* Logo / Avatar */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-2xl shadow-violet-500/40 ring-2 ring-white/10">
          <span className="text-3xl font-black text-white tracking-tight">AS</span>
        </div>
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl -z-10 scale-110" />
      </div>

      {/* Greeting */}
      <h2 className="text-2xl font-bold text-white mb-2">
        Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">AlgoSensei</span> 👋
      </h2>
      <p className="text-sm text-white/50 max-w-xs mb-8 leading-relaxed">
        Your personal mentor for algorithms, data structures, and competitive programming. Ask me anything!
      </p>

      {/* Suggestion chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-xl">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => onSuggestionClick(s)}
            className="text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 text-sm text-white/70 hover:text-white transition-all duration-200 group"
          >
            <span className="group-hover:text-violet-300 transition-colors">→</span>{" "}
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
