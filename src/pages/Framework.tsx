import { Link } from "react-router-dom";

const definitions = [
  { name: "Cost per Effective Request (CPER)", eq: "CPER = (TokenCost + Overhead) / EffectiveRequests", desc: "Captures the true unit cost of every request that actually requires model computation — factoring out cached or redundant calls." },
  { name: "Effective Requests", eq: "EffectiveRequests = TotalRequests × (1 − CacheHitRate)", desc: "Separates the requests that hit the model from those served by cache, revealing the real computational demand." },
  { name: "Break-even Revenue per User", eq: "RPU_be = MonthlyCost / MAU", desc: "The minimum revenue each active user must generate for the system to break even at current cost levels." },
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

const FrameworkPage = () => (
  <div>
    <section className="section-container">
      <p className="text-sm font-mono text-kicker mb-3">Framework</p>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        AI systems as economic systems
      </h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        A modeling approach that treats AI systems as economic systems — linking architectural choices to cost, break-even thresholds, and margin resilience under scale.
      </p>

      {/* Framework cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {frameworkCards.map((c) => (
          <div key={c.num} className="rounded-lg border border-border bg-card p-6 card-hover">
            <p className="text-xs font-mono text-primary mb-2">{c.num})</p>
            <h3 className="font-semibold text-card-foreground mb-3">{c.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.tags.map((t) => <span key={t} className="tag-pill text-[10px]">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Core definitions */}
      <h2 className="text-xl font-bold text-foreground mb-6">Core Definitions</h2>
      <div className="space-y-5 mb-8">
        {definitions.map((d) => (
          <div key={d.name}>
            <div className="equation-block mb-2">
              <p className="text-xs text-muted-foreground mb-1">{d.name}</p>
              <p className="font-semibold">{d.eq}</p>
            </div>
            <p className="text-sm text-muted-foreground pl-1">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="callout-block text-sm">
        <p className="font-semibold mb-1">Working principle</p>
        <p>Margin is an architectural property. If architecture ignores economics, growth amplifies inefficiency.</p>
      </div>

      <div className="mt-10">
        <Link to="/research" className="text-sm text-primary hover:underline">
          → Explore research tracks
        </Link>
      </div>
    </section>
  </div>
);

export default FrameworkPage;
