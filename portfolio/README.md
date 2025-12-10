# Saif Ahmad - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Overview

This portfolio showcases professional work, writing, and content creation through a clean, single-page application with smooth scroll navigation and dynamic content loading.

**Current Status:** Phase 1 Complete ✓

## Tech Stack

- **Framework:** Next.js 16.0.7 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (Google Fonts)

## Features

### Implemented (Phase 1)

- ✅ **Responsive Navigation** - Sticky navbar with smooth scroll and mobile hamburger menu
- ✅ **Hero Section** - Full viewport introduction with CTA buttons
- ✅ **What I'm Sharing** - Content grid showcasing articles from Medium, Notion, LinkedIn
- ✅ **Work Experience** - Timeline-style layout with technology tags
- ✅ **Projects** - Grid with modal detail views and project descriptions
- ✅ **Get in Touch** - Contact section with email and social links
- ✅ **Data-Driven** - All content loaded from JSON files in `src/data/`
- ✅ **Dark Mode Support** - Automatic dark mode based on system preferences
- ✅ **Fully Responsive** - Mobile-first design across all breakpoints

### Coming Soon (Phase 2)

- Framer Motion animations
- Shadcn UI component integration
- Dark/light mode toggle
- Enhanced micro-interactions

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx      # Navigation bar
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Sharing.tsx     # Content sharing section
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Projects.tsx    # Projects grid with modal
│   │   └── Contact.tsx     # Contact section
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── Card.tsx        # Reusable card component
│       ├── Modal.tsx       # Modal component
│       ├── Tag.tsx         # Technology tag component
│       └── SectionHeading.tsx
├── data/
│   ├── profile.json        # Personal info & social links
│   ├── sharing.json        # Articles & content
│   ├── experience.json     # Work history
│   └── projects.json       # Portfolio projects
└── types/
    └── index.ts            # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Content Management

All content is managed through JSON files in `src/data/`:

- **profile.json** - Update personal info, email, social media links
- **sharing.json** - Add/edit articles and content pieces
- **experience.json** - Manage work history entries
- **projects.json** - Update portfolio projects

No code changes required to update content!

## Development

The project uses:
- TypeScript with strict type checking
- ESLint for code quality
- Tailwind CSS for styling
- Path aliases (`@/*` maps to `src/*`)

## Deployment

This Next.js app can be deployed to:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js

## License

MIT

## Author

Saif Ahmad
