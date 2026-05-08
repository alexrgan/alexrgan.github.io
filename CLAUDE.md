# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a Create React App project (react-scripts 5) deployed to GitHub Pages.

- `npm start` — local dev server (http://localhost:3000)
- `npm run build` — production build into `build/`
- `npm test` — Jest in watch mode (no tests currently exist)
- `npm run deploy` — runs `predeploy` (`npm run build`) then publishes `build/` to the `gh-pages` branch via the `gh-pages` package, which is what serves https://alexrgan.github.io (set in `package.json` `homepage`).

There is no linting setup beyond CRA's default `eslintConfig` (`react-app`, `react-app/jest`).

## Architecture

Single-page personal portfolio. All rendering happens client-side from `src/index.js` → `App.jsx`.

**Theme state** lives in `src/context.js`: a `ThemeContext` backed by `useReducer` with a single `TOGGLE` action flipping `darkMode`. The provider wraps `<App/>` in `index.js`. Inside `App.jsx`, the same `darkMode` flag drives both:
- inline styles on the top-level divs (background/foreground colors), and
- an MUI `ThemeProvider` (`muiDarkTheme`/`muiLightTheme` from `@mui/material/styles`) that wraps the lower sections so MUI components (used heavily in `experiences/experience_accordion.jsx`) pick up the right palette.

The `Toggle` component is the only thing that dispatches `TOGGLE`; every other component reads `ThemeContext` and styles itself accordingly.

**Page structure** is a fixed vertical scroll: `Intro` (full-viewport hero with `particles-bg` canvas behind it) → `About` → `Experiences` → `Contact`. `Projects` exists in `src/components/projects/` but is currently commented out in `App.jsx`. The viewport-height fix in `App.jsx` (`--app-height` CSS var updated on resize) works around mobile browser address-bar height changes; CSS files reference `var(--app-height)` instead of `100vh`.

**Experiences** are hardcoded as JS dicts inside `experiences.jsx` (company, position, date, logo, details[]) and rendered through the shared `ExperienceAccordion` component. To add/edit a job, edit the dicts and the `experiences` array in that file — there is no external data source.

**Assets**: images in `src/img/` (imported directly in JSX), resume PDF in `src/pdfs/` (linked from `Intro`/`About`). `public/` only contains `index.html` and a Google site-verification file.

**`old_website/`** is a preserved static HTML/CSS/JS version of an earlier site — not part of the React build. Leave it alone unless explicitly asked.

## Conventions

- Components are organized one-folder-per-component under `src/components/<name>/`, each with a `<name>.jsx` and `<name>.css`. Mixed class and functional components — match whatever style the file already uses when editing.
- CSS is plain CSS (not modules); class names are namespaced with a short prefix per component (e.g. `.e-` for experiences, `.a-` for about) to avoid collisions.
- React 17 (not 18) — uses `ReactDOM.render`, not `createRoot`. Don't migrate without being asked.
