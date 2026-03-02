

## Plan: Update accent color from amber/yellow to teal green

Change all color variables in `src/index.css` from the current amber/gold hue (`38 90% 55%`) to a teal green. This affects `--primary`, `--accent`, `--ring`, `--glow`, and all sidebar variants in both light and dark themes.

### Changes

**`src/index.css`** — Update HSL values:
- Light theme: `--primary`, `--accent`, `--ring`, `--glow`, `--sidebar-primary`, `--sidebar-ring` from `38 90% 55%` → `165 70% 40%` (teal green)
- Dark theme: same variables, with `--glow` adjusted to `165 80% 45%`
- `--primary-foreground` / `--accent-foreground` stay as contrasting values (white-ish)

No other files need changes — all components reference CSS variables.

