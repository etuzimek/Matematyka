# Copilot Instructions for AI Agents

## Project Overview
- **Type:** Educational Polish Multiplication App
- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui
- **Purpose:** Interactive multiplication learning tool with a Polish-inspired, accessible design system.

## Key Architecture & Patterns
- **Entry Point:** `src/main.tsx` (mounts `App.tsx`)
- **Pages:** `src/pages/` (e.g., `Index.tsx`, `NotFound.tsx`)
- **Components:**
  - General: `src/components/`
  - UI primitives: `src/components/ui/` (shadcn-ui based, use Tailwind + `@layer` for styling)
- **Styling:**
  - Global styles: `src/index.css` (custom CSS variables, educational color palette, animations)
  - Use Tailwind utility classes and custom CSS variables for consistent theming.
- **Hooks:** Custom hooks in `src/hooks/` (e.g., `use-mobile.tsx`, `use-toast.ts`)
- **Lib:** Shared utilities in `src/lib/utils.ts`

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **No formal test suite detected.**

## Project-Specific Conventions
- **Design tokens:** Use CSS variables defined in `:root` in `index.css` for colors, gradients, shadows, and transitions.
- **Animations:** Use utility classes like `.animate-float`, `.animate-bounce-in` (see `index.css`).
- **Component structure:** Prefer functional React components. Co-locate related files (component, styles, tests if any) in the same folder.
- **UI primitives:** Extend or compose shadcn-ui components in `src/components/ui/` for consistency.
- **No Redux or global state manager detected.** Use React context or props for state sharing.

## Integration & External Services
- **Fonts:** Google Fonts (Nunito) via `@import` in `index.css`.
- **Deployment:** Use Lovable platform (see README for details).
- **Custom domains:** Supported via Lovable project settings.

## Examples
- **Adding a new game mode:** Place new components in `src/components/`, update routing in `App.tsx` or relevant page in `src/pages/`.
- **Styling a button:** Use `<Button />` from `src/components/ui/button.tsx` and apply Tailwind classes or custom CSS variables.

## References
- See `README.md` for setup, deployment, and platform-specific instructions.
- For design system, review `src/index.css` and `src/components/ui/`.

---

If unsure about a pattern or workflow, prefer existing conventions in `src/components/` and `src/pages/`. When in doubt, ask for clarification or reference the Lovable documentation.
