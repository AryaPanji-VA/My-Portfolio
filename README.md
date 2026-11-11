# Arya Panji — Personal Portfolio

Static multi-page portfolio. Plain HTML5 + CSS3 + a little vanilla JS,
served and built with Vite. No framework, no Tailwind (the plugin sits in
`vite.config.js` but no CSS imports it — it is inert).

Pages: `index.html` · `music.html` · `computer-science.html`

Design system lives in `css/style.css` (tokens follow the locked Figma
palette: cream / beige / butter / peach / dusty blue / sage / charcoal).
Shared patterns are in `css/components.css`, page layout in
`css/responsive.css`.

## Run

    npm install
    npm run dev

Then open the printed local URL (default http://localhost:5173).

## Build

    npm run build     # outputs to dist/
    npm run preview   # serve the production build

## Structure

    index.html               Home — hero, about, two worlds, selected work, contact
    music.html               Music — hero, about, projects, discography, live, listen
    computer-science.html    CS — hero, journey, software, linux, lab, hardware, tools
    css/style.css            Design tokens, reset, type scale, atoms
    css/components.css       Nav, footer, cards, panels, placeholders
    css/responsive.css       Page hero splits and section grids
    js/main.js               Mobile navigation
    public/assets/icons/     Placeholder motif SVGs (from the Figma design)

## Replace before launch

- All `placeholder` blocks — portrait, stage photo, gallery, covers.
- Contact rows: Instagram, GitHub, LinkedIn (marked PLACEHOLDER in source).
- Music platform links (Spotify / YouTube) — currently `#platforms`.
- Discography entries — structure exists; fill in only real releases.
- EDUBBA project link and description ("Details TBD").
