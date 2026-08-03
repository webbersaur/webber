# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Webbersaurus (webbersaurus.com) - A static marketing website for a Connecticut-based web development company. The legacy domain `webbersaur.us` 302-redirects to `www.webbersaurus.com`.

## Development

This is a pure static site with no build system. To develop:

1. Open `index.html` directly in a browser, or
2. Use any local HTTP server (e.g., `python3 -m http.server 8000`)

Deployed via Vercel. Platform config lives in `vercel.json` (clean URLs, redirects, security headers, `/llms` rewrite).

## Architecture

**Pages:** HTML files in root. Public/indexable: `index.html`, `about-us.html`, `portfolio.html`, `reviews.html`, `contact.html`, `services.html`, `seo.html`, `gbp-management.html`, `social-media-marketing.html`, `change-portal.html`, `daily-specials.html`, `realtors.html`, `affiliate.html`, `case-study.html`, `case-study-rollin-dough.html`, `local-partners.html`, `review-engine.html`.

`review-engine.html` replaced the retired `rate-your-experience.html` (301 in `vercel.json`). Its copy is ported from the master at `../review-engine/src/onepager-client.html` (the no-pricing variant) - edit the copy there first so the two don't drift, then re-port. The separate `review-engine` repo deploys its own `noindex` one-pagers for sales outreach; this page is the public, indexable version.

`change-portal.html` and `daily-specials.html` are a hub/spoke pair: the portal page is the general pitch, the specials page is the restaurant-specific deep dive. They cross-link in both directions. Their static specials mockups mirror `longleys-static/css/styles.css` (the `.hero-specials` band) on purpose; the live, data-driven version lives only in `weekly-specials-test.html`. Gated/utility (carry `noindex`): `404.html`, `affiliate-login.html`, `affiliate-portal.html`, `affiliate-reset-password.html`, `affiliate-tos.html`, `change-portal-test.html`, `weekly-specials-test.html`. Standalone listing: `avalanche.html` (+ `avalanche-share.html`, `avalanche-sheet.html`, `avalanche-sheet-window.html`).

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

## SEO

- `sitemap.xml` lists all indexable pages; `sitemap-images.xml` covers images. Update `<lastmod>` when changing a page.
- `robots.txt` advertises both sitemaps.
- Every public page has title, meta description, canonical, og:title.
