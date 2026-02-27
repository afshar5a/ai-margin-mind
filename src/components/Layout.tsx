import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";

export const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Topbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-mono font-bold text-foreground">Afshar Sanam AI Lab</span>
          <span className="ml-2">— Computational Economics, AI Systems Architecture & Structural Modeling</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:afshar@afsharsanam.com" className="hover:text-foreground transition-colors">Contact</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  </div>
);
