<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Coding Rules

## 1. Comments
- Write short, natural developer-style comments only
- Comment the WHY, not the WHAT — obvious code needs no comment
- Keep it concise; avoid over-explaining

## 2. Types, Interfaces, Enums
- All types, interfaces, and enums go in `src/libs/types/`
- Each domain gets its own file: `chat.types.ts`, `rag.types.ts`, etc.
- Never define types inline in components or API routes

## 3. Component Structure
- **Screen components** → `src/pages/` (state management + section composition only)
- **Section components** → `src/libs/components/<ComponentName>/<ComponentName>.tsx`
- Screens must not contain markup beyond layout — delegate to section components
- Each component file stays under 1000 lines; split further if needed

## 4. Styles
- All styles go in `src/scss/`
  - Global styles: `src/scss/globals.css`
  - Design tokens: `src/scss/_variables.scss`
  - Component styles: `src/scss/components/<ComponentName>.module.scss`
  - Screen styles: `src/scss/screen/<ScreenName>.module.scss`
- **Never use inline `style` props in JSX**
- **Never use Tailwind utility classes directly in JSX** — use SCSS modules instead
- Import SCSS variables with `@use '../variables' as v;`

## 5. Code Quality
- Senior-level TypeScript: strict types, no `any`, no implicit returns
- Each file must stay under 1000 lines — split into sections if it grows
- Services go in `src/libs/services/`
- Data/constants go in `src/data/`
- No barrel (`index.ts`) re-exports unless explicitly needed
