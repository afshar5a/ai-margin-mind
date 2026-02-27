import { useState } from "react";
import { Search, BarChart3, MessageSquare } from "lucide-react";

const safetyNote = "No proprietary or confidential employer data is used. Use only public or self-provided text.";

// --- Prompt Playground ---
const PromptPlayground = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const demoResponses: Record<string, string> = {
    "cost": "Demo: At 1M requests/month with a 40% cache hit rate, CPER = ($0.002 + $0.0005) / 600,000 ≈ $0.0000042 per effective request. Margin pressure emerges above 2M requests if RPU stays flat.",
    "margin": "Demo: Margin resilience depends on the ratio of variable cost growth to revenue growth. If inference cost grows linearly with users but revenue grows sub-linearly, structural margin erosion is inevitable.",
    "default": "Demo: This is a placeholder response. In production, this would connect to an LLM API. Try typing 'cost' or 'margin' for themed demo outputs.",
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const key = input.toLowerCase().includes("cost") ? "cost" : input.toLowerCase().includes("margin") ? "margin" : "default";
    setOutput(demoResponses[key]);
  };

  return (
    <div>
      <h3 className="font-semibold text-card-foreground mb-3">Prompt Playground</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Demo-mode placeholder outputs. Type a prompt related to AI systems economics. Try "cost" or "margin" for themed responses.
      </p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., What drives CPER at scale?"
        className="w-full h-24 p-3 rounded-md border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Run (Demo)
      </button>
      {output && (
        <div className="mt-4 equation-block">
          <p className="text-xs text-muted-foreground mb-1">Response</p>
          <p>{output}</p>
        </div>
      )}
      <p className="text-xs text-muted-foreground mt-3">Limitations: No real LLM connected. Outputs are hardcoded demo strings.</p>
    </div>
  );
};

// --- Retrieval Demo ---
const RetrievalDemo = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ passage: string; score: number }[]>([]);

  const handleRetrieve = () => {
    if (!text.trim() || !query.trim()) return;
    const sentences = text.split(/[.!?\n]+/).filter((s) => s.trim().length > 10);
    const queryTerms = query.toLowerCase().split(/\s+/);
    const scored = sentences.map((s) => {
      const lower = s.toLowerCase();
      const score = queryTerms.reduce((acc, term) => acc + (lower.includes(term) ? 1 : 0), 0);
      return { passage: s.trim(), score };
    });
    scored.sort((a, b) => b.score - a.score);
    setResults(scored.slice(0, 5).filter((r) => r.score > 0));
  };

  return (
    <div>
      <h3 className="font-semibold text-card-foreground mb-3">Retrieval Demo</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Paste text, then query it. Simple client-side keyword matching shows top passages.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a paragraph or document text here..."
        className="w-full h-28 p-3 rounded-md border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring mb-2"
      />
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search query..."
          className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button
          onClick={handleRetrieve}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Retrieve
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-4 space-y-2">
          {results.map((r, i) => (
            <div key={i} className="equation-block flex items-start gap-3">
              <span className="tag-pill text-[10px] shrink-0">#{i + 1}</span>
              <p className="text-sm">{r.passage}</p>
            </div>
          ))}
        </div>
      )}
      {results.length === 0 && query && (
        <p className="text-xs text-muted-foreground mt-3">No matching passages found. Try different terms.</p>
      )}
      <p className="text-xs text-muted-foreground mt-3">Limitations: Keyword-based only. No embeddings or semantic search.</p>
    </div>
  );
};

// --- Evaluation Dashboard ---
const evalData = [
  { model: "GPT-4o", costPer1kTokens: 0.005, quality: 92, latencyMs: 420, cper: 0.0042 },
  { model: "Claude 3.5 Sonnet", costPer1kTokens: 0.003, quality: 90, latencyMs: 380, cper: 0.0031 },
  { model: "GPT-4o-mini", costPer1kTokens: 0.00015, quality: 78, latencyMs: 210, cper: 0.00018 },
  { model: "Llama 3 70B", costPer1kTokens: 0.0008, quality: 82, latencyMs: 350, cper: 0.0009 },
  { model: "Mixtral 8x7B", costPer1kTokens: 0.0006, quality: 76, latencyMs: 290, cper: 0.0007 },
];

const EvalDashboard = () => {
  const [sortKey, setSortKey] = useState<keyof typeof evalData[0]>("cper");
  const sorted = [...evalData].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey];
    return typeof av === "number" && typeof bv === "number" ? av - bv : 0;
  });

  return (
    <div>
      <h3 className="font-semibold text-card-foreground mb-3">Evaluation Dashboard</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Static built-in data comparing cost, quality, and CPER across models. Click column headers to sort.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {[
                { key: "model", label: "Model" },
                { key: "costPer1kTokens", label: "Cost/1k tokens" },
                { key: "quality", label: "Quality" },
                { key: "latencyMs", label: "Latency (ms)" },
                { key: "cper", label: "CPER" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() => setSortKey(col.key as keyof typeof evalData[0])}
                  className={`text-left py-2 px-3 font-medium cursor-pointer hover:text-primary transition-colors ${
                    sortKey === col.key ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.model} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="py-2 px-3 font-mono text-card-foreground">{row.model}</td>
                <td className="py-2 px-3 text-muted-foreground">${row.costPer1kTokens}</td>
                <td className="py-2 px-3 text-muted-foreground">{row.quality}%</td>
                <td className="py-2 px-3 text-muted-foreground">{row.latencyMs}</td>
                <td className="py-2 px-3 font-mono text-primary">${row.cper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-3">Limitations: Data is illustrative and static. Not sourced from live benchmarks.</p>
    </div>
  );
};

const demoCards = [
  { icon: MessageSquare, id: "prompt" },
  { icon: Search, id: "retrieval" },
  { icon: BarChart3, id: "eval" },
];

const DemosPage = () => {
  const [active, setActive] = useState<string>("prompt");

  return (
    <div>
      <section className="section-container">
        <p className="text-sm font-mono text-kicker mb-3">Demos</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Interactive Demos</h1>
        <p className="text-muted-foreground mb-4 max-w-2xl">
          Explore interactive prototypes that illustrate the lab's research themes. All demos run client-side with no external API calls by default.
        </p>
        <div className="p-3 rounded-md bg-[hsl(var(--note-bg))] text-[hsl(var(--note-text))] text-xs leading-relaxed mb-10">
          {safetyNote}
        </div>

        {/* Demo tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: "prompt", label: "Prompt Playground" },
            { id: "retrieval", label: "Retrieval Demo" },
            { id: "eval", label: "Evaluation Dashboard" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                active === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          {active === "prompt" && <PromptPlayground />}
          {active === "retrieval" && <RetrievalDemo />}
          {active === "eval" && <EvalDashboard />}
        </div>
      </section>
    </div>
  );
};

export default DemosPage;
