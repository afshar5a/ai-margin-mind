import { Link } from "react-router-dom";

const labTags = ["Computational Economics", "AI Architecture", "Structural Modeling", "Optimization", "Independent Research"];

const AboutPage = () => (
  <div>
    <section className="section-container">
      <p className="text-sm font-mono text-kicker mb-3">About</p>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About the Lab</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Afshar Sanam AI Lab is founded as an independent research space focused on computational economics, AI systems architecture, and structural modeling.
      </p>

      {/* About the lab */}
      <div className="rounded-lg border border-border bg-card p-6 mb-8">
        <h2 className="text-lg font-semibold text-card-foreground mb-4">About the Lab</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The lab's work sits at the intersection of AI systems design and economics. Its core thesis: the margin structure of AI systems is not a business metric — it's an architectural property. Understanding it requires structural modeling, not dashboards.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Research is organized around three tracks: AI systems economics, economic signal analysis, and optimization under constraint. Each track is designed to produce frameworks, not products — reusable ways of thinking about cost, margin, and behavior at scale.
        </p>
        <div className="flex flex-wrap gap-2">
          {labTags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
        </div>
      </div>

      {/* About the founder */}
      <div className="rounded-lg border border-border bg-card p-6 mb-8">
        <h2 className="text-lg font-semibold text-card-foreground mb-4">About the Founder</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Afshar Sanam is a technologist and researcher focused on the structural economics of AI systems. His background spans software engineering, data systems, and applied research in computational economics.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          This lab exists as an independent research project — built outside professional responsibilities, using no employer data or resources. It reflects a long-standing interest in how architectural decisions shape economic outcomes in technology systems.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          The work is exploratory and research-oriented. It is not affiliated with, endorsed by, or connected to any current or former employer.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:afshar@afsharsanam.com" className="text-primary hover:underline">Email →</a>
          <a href="https://linkedin.com/in/afsharsanam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn →</a>
          <a href="https://github.com/afsharsanam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub →</a>
        </div>
      </div>

      {/* Independence note */}
      <div className="p-4 rounded-md bg-[hsl(var(--note-bg))] text-[hsl(var(--note-text))] text-xs leading-relaxed">
        Independence note: all examples are generic and intended for research illustration only. No proprietary or confidential employer data is used.
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Connect about research
        </Link>
        <Link to="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
          View policies →
        </Link>
      </div>
    </section>
  </div>
);

export default AboutPage;
