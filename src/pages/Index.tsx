import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pills = ["AI Systems Economics", "Economic Signals", "Optimization", "Structural Modeling"];

const definitions = [
  { name: "Cost per Effective Request (CPER)", eq: "CPER = (TokenCost + Overhead) / EffectiveRequests" },
  { name: "Effective Requests", eq: "EffectiveRequests = TotalRequests × (1 − CacheHitRate)" },
  { name: "Break-even Revenue per User", eq: "RPU_be = MonthlyCost / MAU" },
];

const frameworkCards = [
  {
    num: "1",
    title: "Architecture → Cost Map",
    desc: "Map every architectural decision — model selection, retrieval layers, orchestration depth — to its cost footprint. No decision is cost-neutral.",
    tags: ["Input/Output tokens", "Overhead per request", "Cache economics"],
  },
  {
    num: "2",
    title: "Margin Resilience",
    desc: "Test how margins respond to shifts in usage volume, input complexity, and retrieval depth. Identify fragility before it scales.",
    tags: ["Sensitivity analysis", "Break-even thresholds", "Risk levels"],
  },
  {
    num: "3",
    title: "Optimization Levers",
    desc: "Define the constraint space — cost ceilings, latency bounds, quality floors — and identify architectural moves that improve margin without sacrificing output quality.",
    tags: ["Constraint modeling", "Cost guardrails", "Architecture tactics"],
  },
];

const tracks = [
  {
    title: "AI Systems Economics",
    to: "/research/ai-systems-economics",
    items: [
      "Cost structures of inference, retrieval, and orchestration at scale",
      "CPER (Cost per Effective Request) as a margin diagnostic",
      "Break-even modeling under variable user load",
      "Cache-aware cost modeling and retrieval economics",
    ],
  },
  {
    title: "Economic Signal Research",
    to: "/research/economic-signal-research",
    items: [
      "Macro sentiment regime detection using NLP on earnings calls, FOMC transcripts, and financial media",
      "Structural break detection in economic language patterns",
      "Mapping language shifts to market regime transitions",
    ],
  },
  {
    title: "Optimization & Structural Modeling",
    to: "/research/optimization-structural-modeling",
    items: [
      "Constrained optimization under cost and quality bounds",
      "Multi-objective architecture search for AI systems",
      "Structural simulation of margin behavior at scale",
    ],
  },
];

const audiences = [
  "Technical leaders evaluating AI system economics at scale",
  "Engineering teams building cost-aware AI architectures",
  "Researchers working at the intersection of economics and AI systems",
  "Product leaders modeling margin risk in AI-integrated products",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-container">
        <div className="max-w-3xl">
          <p className="text-sm font-mono font-medium text-kicker mb-4 animate-fade-in">Independent Research Lab</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AI systems scale. Margins don't.
          </h1>
          <p className="text-lg text-hero-lead leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            As AI adoption grows, inference cost, retrieval depth, and orchestration overhead quietly reshape economic viability. Most organizations measure capability. Few quantify structural margin risk.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/framework" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              View the framework <ArrowRight size={14} />
            </Link>
            <Link to="/research" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors">
              Explore research <ArrowRight size={14} />
            </Link>
          </div>
          <div className="p-3 rounded-md bg-[hsl(var(--note-bg))] text-[hsl(var(--note-text))] text-xs leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.35s" }}>
            Built independently as personal research and experimentation. Developed outside professional responsibilities. No confidential or employer data is used.
          </div>
          <div className="flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {pills.map((p) => (
              <span key={p} className="tag-pill">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Definitions */}
      <section className="section-container border-t border-border">
        <div className="space-y-4 mb-6">
          {definitions.map((d) => (
            <div key={d.name} className="equation-block">
              <p className="text-xs text-muted-foreground mb-1">{d.name}</p>
              <p className="font-semibold">{d.eq}</p>
            </div>
          ))}
        </div>
        <div className="callout-block text-sm">
          <p className="font-semibold mb-1">Working principle</p>
          <p>Margin is an architectural property. If architecture ignores economics, growth amplifies inefficiency.</p>
        </div>
      </section>

      {/* Framework Teaser */}
      <section className="section-container border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Framework</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          A modeling approach that treats AI systems as economic systems — linking architectural choices to cost, break-even thresholds, and margin resilience under scale.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {frameworkCards.map((c) => (
            <div key={c.num} className="rounded-lg border border-border bg-card p-5 card-hover">
              <p className="text-xs font-mono text-primary mb-2">{c.num})</p>
              <h3 className="font-semibold text-card-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="tag-pill text-[10px]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/framework" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Full framework <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Research Tracks Teaser */}
      <section className="section-container border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Research Tracks</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Three parallel tracks connecting AI architecture, economics, and structural behavior under constraint.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {tracks.map((t) => (
            <Link key={t.title} to={t.to} className="rounded-lg border border-border bg-card p-5 card-hover group">
              <h3 className="font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {t.title} <ArrowRight size={14} className="inline ml-1" />
              </h3>
              <ul className="space-y-1.5">
                {t.items.slice(0, 2).map((i, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">• {i}</li>
                ))}
              </ul>
              {t.items.length > 2 && (
                <p className="text-xs text-muted-foreground mt-2">+{t.items.length - 2} more</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-container border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">Who it's for</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          This research is aimed at practitioners and researchers who think structurally about AI systems economics.
        </p>
        <ul className="space-y-2 mb-8">
          {audiences.map((a, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-primary mt-0.5">→</span> {a}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mb-4">
          Engagement is research-led and advisory in nature.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Connect about research
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
            About the founder
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-container border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">About</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Afshar Sanam AI Lab is founded as an independent research space focused on computational economics, AI systems architecture, and structural modeling.
        </p>
        <Link to="/about" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
          Learn more <ArrowRight size={12} />
        </Link>
      </section>
    </div>
  );
};

export default Index;
