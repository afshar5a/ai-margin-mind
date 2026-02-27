const PoliciesPage = () => (
  <div>
    <section className="section-container">
      <p className="text-sm font-mono text-kicker mb-3">Policies</p>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Independence & Data Policy</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Transparency about how this research is conducted, what data is used, and the lab's independence.
      </p>

      <div className="space-y-8">
        {/* Independence */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">Independence Statement</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Afshar Sanam AI Lab is an independent, personal research project. It is not affiliated with, endorsed by, or connected to any current or former employer.</p>
            <p>All work is conducted outside professional responsibilities and work hours. No employer resources, data, systems, or proprietary information are used in any capacity.</p>
            <p>All examples, figures, and illustrations are generic and intended for research purposes only. Any resemblance to specific company data or systems is coincidental.</p>
          </div>
        </div>

        {/* Data Policy */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">Data Policy</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>This research uses only the following categories of data:</p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">→</span> <strong className="text-card-foreground">Public data:</strong> Government publications (FOMC transcripts, BLS data), publicly filed earnings call transcripts, and openly available financial media.</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">→</span> <strong className="text-card-foreground">Open-licensed data:</strong> Academic datasets, open-source corpora, and Creative Commons licensed content.</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">→</span> <strong className="text-card-foreground">Self-generated data:</strong> Synthetic datasets, simulations, and illustrative examples created specifically for this research.</li>
            </ul>
            <p className="mt-4">No proprietary, confidential, or employer-sourced data is used at any point in the research process.</p>
          </div>
        </div>

        {/* Demos & Interactive Tools */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">Interactive Tools & Demos</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>All interactive demos on this site run client-side. No user input is stored, transmitted, or logged.</p>
            <p>Users are responsible for ensuring they do not input proprietary or confidential data into any demo tool.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PoliciesPage;
