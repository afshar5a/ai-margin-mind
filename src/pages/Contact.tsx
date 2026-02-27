import { useState } from "react";

const categories = ["Collaboration", "Speaking", "Media", "OSS", "Other"];

const ContactPage = () => {
  const [category, setCategory] = useState("Collaboration");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`[${category}] Research Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\nCategory: ${category}\n\n${message}`);
    window.location.href = `mailto:afshar@afsharsanam.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <section className="section-container">
        <p className="text-sm font-mono text-kicker mb-3">Connect</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Research Inquiry</h1>
        <p className="text-muted-foreground mb-4 max-w-2xl">
          Interested in the lab's research? Reach out for collaboration, speaking, media, or open-source discussions. This is not a consulting or services inquiry form.
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          Direct email: <a href="mailto:afshar@afsharsanam.com" className="text-primary hover:underline">afshar@afsharsanam.com</a>
        </p>

        {sent ? (
          <div className="callout-block">
            <p className="font-semibold mb-1">Email client opened</p>
            <p className="text-sm">Your email client should have opened with the inquiry pre-filled. If not, email directly at afshar@afsharsanam.com.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Research Inquiry
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactPage;
