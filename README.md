# Portfolio

Personal portfolio site with static export for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output in `out/` directory.

## Deploy

Push to `main` branch. GitHub Actions builds and deploys automatically.

Site: https://alex-projects-master.github.io/Portfolio

## Sections

1. **Hero** - Name (6rem, bold), title, tagline, bouncing chevron
2. **Projects** - 5-card masonry grid with moving background image
3. **About** - Bio paragraphs
4. **Education** - Degree and achievements with moving background
5. **Currently** - Current work
6. **Connect** - GitHub link

Navigation: Fixed top bar (appears when scrolling past Hero), light/dark mode toggle, active section indicator

## Key Features

- **Light/Dark Mode**: Toggle in nav bar, sun/moon icons, different background images per theme
- **Moving Background**: Project and Education cards have animated background image (bottom-left to top-right, 80s cycle, 190% zoom, 80% transparency overlay)
- **Scroll Animations**: Chevron bounces then hides on scroll, nav fades in/out based on scroll position
- **Active Section Tracking**: Nav indicator follows section highest in viewport

## Customization

Edit content in:
- `app/components/Hero.tsx` - name, title, tagline
- `app/components/ProjectGrid.tsx` - projects
- `app/components/About.tsx` - bio
- `app/components/Education.tsx` - education
- `app/components/Currently.tsx` - current work
- `app/components/Connect.tsx` - social links

Add `public/cv.pdf` for CV download.

## Background Images

Project and Education cards use animated backgrounds:
- Light mode: `/assets/background.jpg` with 80% white overlay
- Dark mode: `/assets/background_inverted.jpg` with 80% black overlay
- Animation: 80s bottom-left to top-right drift, 190% zoom, seamless loop

## Tech Stack

- Next.js 14 (static export)
- Tailwind CSS
- Framer Motion
- TypeScript