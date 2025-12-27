# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Webbersaurus (webbersaur.us) - A static marketing website for a Connecticut-based web development company.

## Development

This is a pure static site with no build system. To develop:

1. Open `index.html` directly in a browser, or
2. Use any local HTTP server (e.g., `python3 -m http.server 8000`)

Deployed via GitHub Pages at: https://webbersaur.github.io/webber/

## Architecture

**Pages:** 5 HTML files in root - `index.html` (home), `about.html`, `portfolio.html`, `reviews.html`, `contact.html`

**Styles:** Single CSS file `css/styles.css` using CSS custom properties (variables) for theming. Key design tokens defined in `:root` include colors (`--color-primary: #FF6B35`), typography scales, and spacing.

**JavaScript:** `js/main.js` handles:
- Mobile menu toggle
- Header scroll effect (shrinks on scroll)
- Smooth scroll for anchor links
- Intersection Observer for scroll animations
- Contact form validation
- Rotating text animation in hero ("Work", "Convert", "Grow", "Succeed")

**External dependencies:**
- Google Fonts (Inter)
- Elfsight widget for Google Reviews integration

**Images:** Portfolio screenshots stored locally in `images/` folder. Logo and some portfolio images load from external webbersaurus.com URLs.
