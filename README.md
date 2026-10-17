# Developer Profile Page — Week 05 (React)

My developer profile page rebuilt with **React + Vite**, splitting the original
single HTML file into reusable components with props, state and dynamic
rendering.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html              Vite entry point
src/
  main.jsx              React entry (renders <App />)
  App.jsx               Root component — owns theme state, passes props down
  styles.css            Global styles, CSS variables, responsive rules
  data/
    portfolio.js        All content: profile, skills[], projects[]
  components/
    Header.jsx          Nav + dark/light theme toggle (props: theme, onToggleTheme)
    Section.jsx         Reusable section wrapper (props: id, title, subtitle)
    About.jsx           About Me (maps over the paragraph array)
    Skills.jsx          Interactive skills: category filter + click-to-show level
    Projects.jsx        Projects grid with category filter (state)
    Contact.jsx         Controlled contact form (state) — Name, Email, Message
    Footer.jsx          Footer with dynamic year
reference/
  original-index.html   The Week 04 HTML version, kept for reference
```

## How the requirements are covered

| Requirement | Where |
| --- | --- |
| React project set up properly | Vite + React 19 (`vite.config.js`, `package.json`) |
| Separate components | `src/components/*.jsx` |
| JSX structure | Every component |
| Props between components | `App.jsx` → `Header`, `About`, `Skills`, `Projects`, `Contact`, `Footer` |
| Dynamic arrays + `map()` | Skills, projects, stats, nav links, tech stacks |
| State + interactive feature | Theme toggle (`App`), filters (`Skills`, `Projects`), form (`Contact`) |
| Responsive on desktop & mobile | CSS Grid `auto-fill`, media queries at 900px / 640px |

## Bonus features

- 🌙/☀️ **Dark/light mode toggle** — state in `App.jsx`, saved to `localStorage`,
  defaults to the system preference.
- 🎯 **Project filter** — chips filter projects by category (derived from the data).
- 🧠 **Interactive skills section** — filter by category and tap a skill to see
  its proficiency bar.

## Editing content

All text, skills and projects live in [`src/data/portfolio.js`](src/data/portfolio.js).
Edit that one file and the whole page updates — no component changes needed.
