import { useParams, Link } from "react-router-dom";

const trackData: Record<string, { title: string; items: string[]; inProgress: string[] }> = {
  "ai-systems-economics": {
    title: "AI Systems Economics",
    items: [
      "Cost structures of inference, retrieval, and orchestration at scale",
      "CPER (Cost per Effective Request) as a margin diagnostic",
      "Break-even modeling under variable user load",
      "Cache-aware cost modeling and retrieval economics",
    ],
    inProgress: [
      "Multi-model cost comparison framework",
      "Dynamic pricing sensitivity under elastic demand",
      "Real-time CPER monitoring dashboard prototype",
    ],
  },
  "economic-signal-research": {
    title: "Economic Signal Research",
    items: [
      "Macro sentiment regime detection using NLP on earnings calls, FOMC transcripts, and financial media",
      "Structural break detection in economic language patterns",
      "Mapping language shifts to market regime transitions",
    ],
    inProgress: [
      "Earnings call sentiment corpus construction",
      "FOMC language drift analysis pipeline",
      "Cross-asset regime signal validation",
    ],
  },
  "optimization-structural-modeling": {
    title: "Optimization & Structural Modeling",
    items: [
      "Constrained optimization under cost and quality bounds",
      "Multi-objective architecture search for AI systems",
      "Structural simulation of margin behavior at scale",
    ],
    inProgress: [
      "Pareto frontier visualization for cost-quality tradeoffs",
      "Constraint relaxation sensitivity analysis",
      "Simulation engine for architecture scenario testing",
    ],
  },
};

const TrackDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const track = slug ? trackData[slug] : null;

  if (!track) {
    return (
      <div className="section-container">
        <p className="text-muted-foreground">Track not found.</p>
        <Link to="/research" className="text-primary text-sm hover:underline mt-4 inline-block">← Back to research tracks</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="section-container">
        <Link to="/research" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">← Research Tracks</Link>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{track.title}</h1>

        <h2 className="text-lg font-semibold text-foreground mb-4">Research Areas</h2>
        <div className="space-y-3 mb-12">
          {track.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-4">In Progress</h2>
        <div className="space-y-3">
          {track.inProgress.map((item, i) => (
            <div key={i} className="rounded-lg border border-dashed border-border bg-card/50 p-4 text-sm text-muted-foreground flex items-start gap-3">
              <span className="tag-pill text-[10px]">WIP</span>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrackDetail;
