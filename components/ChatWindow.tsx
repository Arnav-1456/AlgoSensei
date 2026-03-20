"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, RotateCcw } from "lucide-react";
import MessageBubble, { Message } from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import EmptyState from "./EmptyState";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${Math.min(ta.scrollHeight, 160)}px`;
    }
  }, [input]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMsg].map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok || !res.body) throw new Error("API error");

        // Stream the response with artificial throttling
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantContent = "";
        let queue = "";
        let isReading = true;
        const assistantId = crypto.randomUUID();

        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: "" },
        ]);
        setIsLoading(false);

        // Reader loop - just fills the queue
        const readStream = async () => {
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              queue += decoder.decode(value, { stream: true });
            }
          } finally {
            isReading = false;
          }
        };

        readStream();

        // Render loop - empties the queue gradually (throttle writing to UI)
        await new Promise<void>((resolve) => {
          const interval = setInterval(() => {
            if (queue.length > 0) {
              // Take up to 3 characters at a time to smooth the visual typing
              const chunk = queue.slice(0, 3);
              queue = queue.slice(3);
              assistantContent += chunk;
              
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: assistantContent }
                    : m
                )
              );
            } else if (!isReading) {
              clearInterval(interval);
              resolve();
            }
          }, 15); // Adjust this MS value to change typing speed
        });
      } catch {
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "⚠️ Something went wrong. Please check your API key and try again.",
          },
        ]);
      }
    },
    [messages, isLoading]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-black text-white shadow-lg shadow-violet-500/30">
            AS
          </div>
          <div>
            <p className="text-sm font-semibold text-white">AlgoSensei</p>
            <p className="text-xs text-white/40">Algorithm Expert · Always online</p>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            title="Clear conversation"
          >
            <RotateCcw size={13} />
            Clear
          </button>
        )}
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.length === 0 && !isLoading ? (
          <EmptyState onSuggestionClick={(s) => sendMessage(s)} />
        ) : (
          <>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
          </>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 px-4 py-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-end gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 focus-within:border-violet-500/60 transition-colors">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about an algorithm, data structure, or problem..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 resize-none outline-none py-1.5 max-h-40 leading-relaxed"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 hover:from-violet-400 hover:to-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Send size={15} />
          </button>
        </div>
        <p className="text-center text-xs text-white/20 mt-2">
          Press Enter to send · Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
