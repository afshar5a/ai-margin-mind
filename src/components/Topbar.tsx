import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Framework", to: "/framework" },
  { label: "Research Tracks", to: "/research" },
  { label: "Demos", to: "/demos" },
  { label: "Writing", to: "/writing" },
  { label: "About", to: "/about" },
];

export const Topbar = () => {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2.5 font-mono font-bold text-sm tracking-tight">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground text-xs font-bold">
            AS
          </span>
          <span className="hidden sm:inline text-foreground">Afshar Sanam AI Lab</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                location.pathname.startsWith(item.to)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="mailto:afshar@afsharsanam.com"
            className="ml-2 px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Connect
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted-foreground" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-muted-foreground" aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm rounded-md ${
                location.pathname.startsWith(item.to)
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:afshar@afsharsanam.com"
            className="block px-3 py-2 text-sm font-medium text-primary"
          >
            Connect →
          </a>
        </nav>
      )}
    </header>
  );
};
