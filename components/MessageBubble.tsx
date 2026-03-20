import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, Terminal } from "lucide-react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface MessageBubbleProps {
  message: Message;
}

// A custom code block component that includes the copy button
function CodeBlock({
  language,
  value,
}: {
  language: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 rounded-xl overflow-hidden bg-black/40 border border-white/10">
      <div className="flex items-center justify-between px-4 py-1.5 bg-white/5 border-b border-white/5">
        <span className="text-xs text-white/40 font-mono lowercase">{language || "text"}</span>
        <button
          onClick={handleCopy}
          className="text-white/40 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        PreTag="div"
        customStyle={{
          margin: 0,
          background: "transparent",
          padding: "1rem",
          fontSize: "0.85rem",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-start gap-4 px-4 py-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg ${
          isUser
            ? "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30 text-white"
            : "bg-gradient-to-br from-violet-500 to-indigo-600 shadow-violet-500/30 text-white"
        }`}
      >
        {isUser ? "You" : <Terminal size={14} strokeWidth={2.5} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-tr-sm shadow-lg shadow-violet-500/20"
            : "bg-white/5 border border-white/10 text-white/90 rounded-tl-sm backdrop-blur-sm"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                code({ inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";
                  const value = String(children).replace(/\n$/, "");

                  return !inline ? (
                    <CodeBlock language={language} value={value} />
                  ) : (
                    <code
                      className="bg-white/10 text-violet-300 px-1.5 py-0.5 rounded text-xs font-mono break-words"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
