import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

const ResearchPage = () => (
  <div>
    <section className="section-container">
      <p className="text-sm font-mono text-kicker mb-3">Research</p>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Research Tracks</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Three parallel tracks connecting AI architecture, economics, and structural behavior under constraint.
      </p>
      <div className="grid gap-6">
        {tracks.map((t) => (
          <Link key={t.title} to={t.to} className="rounded-lg border border-border bg-card p-6 card-hover group block">
            <h2 className="text-lg font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
              {t.title} <ArrowRight size={16} className="inline ml-1" />
            </h2>
            <ul className="space-y-2">
              {t.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5 shrink-0">→</span> {item}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default ResearchPage;
