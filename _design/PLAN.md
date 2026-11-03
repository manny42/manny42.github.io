# manny42.github.io: Portfolio & Blog Plan

Goal: a fast, professional site that showcases **talks**, **classes taught** and **writing**,
and turns visitors into an **audience** (newsletter + RSS + "invite me to speak").
Adding content = add one Markdown file and `git push`. No database, no Node, no framework.

Designs: `mockup-home.html` (homepage) and `mockup-talk.html` (talk page, generated from one Markdown file),
both styled by the shared `main.css`. Open them directly in a browser; both support light/dark mode with a toggle.

Visual direction: **"Datasheet"**: the site reads like a component's technical datasheet (strict grid, thick rules,
reference numbers like `T-032`, spec tables). Chosen from the options in `style-directions.html`.

---

## 1. Architecture

### Stack decision: plain Jekyll, built by GitHub Pages itself

| Option | Verdict |
|---|---|
| **Jekyll via "Deploy from a branch"** | **Chosen.** GitHub builds it for you on every push: no CI config, no `node_modules`, no build step to maintain. |
| Jekyll 4 / Hugo / Eleventy via GitHub Actions | Upgrade path only if we ever need an unsupported plugin. Adds a workflow file to maintain. |
| Astro / Next.js | Too heavy for this job. |

Facts checked against GitHub's docs and `pages.github.com/versions.json` (Oct 2026):
- GitHub Pages runs **Jekyll 3.10**, Kramdown, Liquid 4, and Rouge for code highlighting. `safe: true` is enforced, so only allowlisted plugins run.
- The allowlisted plugins we use: `jekyll-sitemap` and `jekyll-redirect-from`. Meta/OpenGraph/JSON-LD and `hreflang` tags are written by hand in `_layouts/base.html` (seo-tag can't read the per-language data files), and RSS feeds are plain Liquid templates (one per language).
- The repo is named `manny42.github.io`, so it is a **user site** served at `https://manny42.github.io/`. Publishing source: `master` branch, `/` root.

### Frontend principles (the "fast & smooth" part)
- **Zero frameworks, ~1 KB of JS total**: a theme toggle and a click-to-load YouTube embed. Everything else is HTML + CSS.
- **One CSS file** (~12 KB unminified, see `_design/main.css`) built on CSS variables (design tokens) and `clamp()` for fluid type.
- **Two self-hosted fonts**: Space Grotesk (headings and body) and IBM Plex Mono (labels, references, metadata), as `woff2` subsets in `assets/fonts/` with `font-display: swap` and a `<link rel="preload">` for the main weight. Budget: about 60 KB. The mockups load them from Google Fonts for convenience only.
- **Smoothness without JS**: `@view-transition { navigation: auto; }` gives cross-page fades in Chromium, plus a shared `view-transition-name` on the talk thumbnail and title so a card "morphs" into the talk page. Small hover lifts and a staggered entrance. Everything is disabled under `prefers-reduced-motion`.
- **Lite YouTube embed**: the talk page shows the thumbnail, and the real `youtube-nocookie.com` iframe is only injected on click. This saves about 500 KB of JS per talk page.
- **Images**: WebP, explicit `width`/`height`, and `loading="lazy"` below the fold. If a talk has no image, it gets an automatic typographic cover (reference, event, year and title on a dark dotted grid), so **adding a talk never requires designing an image**.
- Target: Lighthouse 100/100/100/100, under 120 KB transferred on the homepage (fonts included, portrait excluded).

---

## 2. Bilingual site (FR + EN, translated by hand)

The site exists in **French and English, written by Morgan**, with no machine translation. The two versions are
allowed to **position Morgan differently**: French clients and international clients can get a different pitch,
different highlighted topics and formats, a different venue selection, and even different talks.

GitHub Pages only runs allowlisted plugins, so i18n plugins like `jekyll-polyglot` are out. It's done with plain
Jekyll instead, and it stays simple:

- **One language per file.** Every page, talk, course and post has `lang: fr` or `lang: en`, set automatically from
  its folder (`_talks/fr/…`, `_talks/en/…`) through `defaults:` in `_config.yml`.
- **French at the root, English under `/en/`** (`/conferences/…` vs `/en/talks/…`). French is the default because
  it's Morgan's home market; swapping later is a config change plus redirects.
- **Each language version is complete and independent.** A talk can exist in only one language (a French meetup talk
  doesn't need an English page), and the summary and body can be written for that audience rather than translated
  line by line. Shared facts like the video ID are simply repeated in both files.
- **Pairing by `ref`.** Two files with the same `ref` (`T-032`) are translations of each other. The language
  switcher uses it to jump to the counterpart, falling back to the other language's homepage when there isn't one.
- **Positioning lives in data files.** `_data/fr.yml` and `_data/en.yml` hold the interface labels **and** the
  marketing copy: hero title and lead, spec table rows (topics, formats, languages), the venues to show, the
  "invite me" wording and the `mailto:` subject. Changing the pitch for one market means editing one YAML file.
- **Listings and stats filter on the page's language** (`site.talks | where: "lang", page.lang`). The "talks given"
  count uses unique refs across both languages, so a translated talk isn't counted twice.
- **Dates** use the datasheet's numeric formats (`10/2026`, `2026-10-14`), which read the same in both languages
  and avoid Liquid's English-only month names.
- **SEO:** `<html lang>`, `<link rel="alternate" hreflang="fr|en|x-default">` built from `ref`, and `og:locale`
  from `jekyll-seo-tag` (it reads `page.lang`). The sitemap lists both versions.

---

## 3. Information architecture

```
FR (default)                     EN                           Content
/                                /en/                         Home: hero + spec table, featured talk, recent talks, teaching, posts, about, newsletter
/conferences/                    /en/talks/                   All talks by year, with tag filter chips (CSS :has() or ~20 lines of JS)
/conferences/<slug>/             /en/talks/<slug>/            Talk page (see mockup-talk.html)
/formations/                     /en/teaching/                Courses & workshops, framed as an offer (formats, audiences, how to book)
/formations/<slug>/              /en/teaching/<slug>/         Syllabus, materials, outcomes, student feedback
/blog/                           /en/blog/                    Post archive by year
/blog/<slug>/                    /en/blog/<slug>/             Blog post
/a-propos/                       /en/about/                   Bio + speaker kit (bios, headshots, topics, contact)
/feed.xml                        /en/feed.xml                 RSS: posts and talks for that language
/sitemap.xml, /404.html (bilingual)
```

---

## 4. Repository layout

```
.
├── _config.yml              # site title, author, socials, collections, plugins, defaults (lang + permalinks per folder)
├── Gemfile                  # `github-pages` gem (only for local preview)
│
├── index.html               # FR home (layout: home, lang: fr)
├── conferences/index.html   # FR talk listing
├── formations/index.html
├── blog/index.html
├── a-propos.md
├── feed.xml                 # FR RSS (hand-written Liquid template, ~30 lines)
├── en/
│   ├── index.html           # EN home (same layout, lang: en)
│   ├── talks/index.html
│   ├── teaching/index.html
│   ├── blog/index.html
│   ├── about.md
│   └── feed.xml
├── 404.html
│
├── _talks/                  # ← ONE FILE PER TALK AND PER LANGUAGE
│   ├── fr/2026-05-12-livrer-vite.md          # ref: T-032
│   └── en/2026-10-14-shipping-fast.md        # ref: T-032 (same talk, English version)
├── _courses/
│   ├── fr/programmation-systeme-avancee.md   # ref: C-14
│   └── en/advanced-systems-programming.md    # ref: C-14
├── _posts/
│   ├── fr/2026-10-20-retours-etudiants.md
│   └── en/2026-10-20-student-feedback.md
├── _data/
│   ├── fr.yml               # FR labels + FR positioning (hero, specs, venues, CTA)
│   ├── en.yml               # EN labels + EN positioning
│   └── venues.yml           # all venues (name, url, optional logo); fr.yml / en.yml pick which to show
│
├── _layouts/
│   ├── base.html            # <head>, header with FR/EN switcher, footer, {% seo %}, hreflang, theme script
│   ├── home.html
│   ├── talk.html            # = mockup-talk.html with Liquid
│   ├── course.html
│   └── post.html
├── _includes/
│   ├── t.html               # tiny helper: {% include t.html key="subscribe" %} → label in page.lang
│   ├── lang-switch.html     # finds the counterpart by ref, else links to the other home
│   ├── talk-row.html        # row used on home + listings
│   ├── cover.html           # image, or the generated typographic cover
│   ├── video.html           # lite YouTube embed
│   └── newsletter.html      # signup form (sends the language as a Buttondown tag)
│
├── assets/
│   ├── css/main.css         # = _design/main.css
│   ├── js/site.js           # theme toggle + lite embed (~1 KB)
│   ├── fonts/               # Space Grotesk + IBM Plex Mono, woff2 subsets
│   ├── img/                 # portrait, og-default-fr.png, og-default-en.png, talk images
│   └── slides/              # PDFs of decks (or link to Speaker Deck / Google Slides)
│
├── _templates/              # copy-paste starters (ignored by Jekyll because of "_")
│   ├── talk.md
│   ├── course.md
│   └── post.md
└── new                      # optional helper: `./new talk fr "Titre"` → dated file from the template
```

---

## 5. Content model (the "easy to add data" part)

Each item is **one Markdown file per language**. The YAML front matter is the structured data (drives rows,
listings, SEO, stats) and the body is free-form notes. Optional fields can be left out; the layout hides empty
sections. `lang` and the permalink come from the folder, so they never need to be typed.

**Reference numbers are chosen by hand** (`ref:`), and they're required for talks and courses: `T-` for talks,
`C-` for courses, `P-` for posts (optional, only needed to pair translations). The same `ref` in `fr/` and `en/`
links the two versions. Jekyll doesn't check that refs are unique, so the `new` script suggests the next free
number and warns about duplicates.

### Talk: `_talks/en/2026-10-14-shipping-fast.md`
```yaml
---
ref: T-032                   # chosen by hand; same ref as the French version
title: Shipping fast without breaking things
date: 2026-10-14
event: DevConf Paris
event_url: https://devconf.example
kind: Conference talk        # Conference talk | Meetup | Keynote | Workshop | Podcast
language: English            # language the talk was given in (not the page language)
duration: 40 min
audience: 600
rating: 4.8                  # optional
summary: How small teams can deploy dozens of times a day with feature flags, good tests and a blameless culture.
tags: [devops, testing, culture]
video: dQw4w9WgXcQ           # YouTube ID (optional)
slides: /assets/slides/shipping-fast.pdf   # or a Speaker Deck / Google Slides URL (optional)
code: https://github.com/manny42/shipping-fast-demo   # optional
image: /assets/img/talks/shipping-fast.webp           # optional, generated cover used if absent
featured: true               # pin as the homepage hero talk (per language: FR and EN can feature different talks)
also_given:                  # optional, shown as "Revision history"
  - { date: 2026-05-12, event: Lyon JUG, language: French }
---

## What this talk covers
Free Markdown: outline, quotes, links mentioned, feedback…
```

### Course: `_courses/fr/programmation-systeme-avancee.md`
```yaml
---
ref: C-14
title: Programmation système avancée
institution: École 42
period: 2025–2026
format: 12 semaines          # or "Atelier de 2 jours"
students: 60
level: Avancé
summary: Mémoire, processus et concurrence en C, enseignés par projets.
materials:
  - { label: Syllabus, url: /assets/courses/asp-syllabus.pdf }
  - { label: Exercices, url: https://github.com/manny42/asp-exercises }
order: 1                    # optional manual sort
---
```

### Blog post: `_posts/en/2026-10-20-student-feedback.md`
```yaml
---
ref: P-007                  # optional, only to pair it with a French version
title: What I changed after reading 400 student feedback forms
description: The three edits that moved my course ratings the most.
tags: [teaching]
image: /assets/img/posts/feedback.webp   # optional, used for the social preview
---
```

### Adding content: three ways, all just `git push`
1. **From the GitHub website** (no local setup): go to `_talks/fr/` or `_talks/en/` → *Add file* → *Create new file*, paste the template, then commit. The site updates in about 1 minute.
2. **Locally**: `cp _templates/talk.md _talks/fr/2026-11-03-mon-talk.md`, edit it, then `git commit && git push`.
3. **Helper script**: `./new talk fr "Mon titre"` creates `_talks/fr/<today>-mon-titre.md` from the template, suggests the next free `ref`, and opens `$EDITOR`. `./new talk en --from T-032` starts the English version of an existing talk with the shared fields already filled in.

Homepage numbers (talks given, courses taught, people trained) are **computed** from the files
(unique `ref`s, a sum of `students` over unique courses), so they never go stale.

---

## 6. Building an audience

| Lever | Implementation | Cost |
|---|---|---|
| Newsletter | **Buttondown** (or Kit/ConvertKit): a plain HTML `<form action="https://buttondown.com/api/emails/embed-subscribe/USER">`. No JS, works on a static site. The form sits on the home page, after each talk, and after each post. One list, with each subscriber tagged `fr` or `en` by a hidden field, so each audience can get its own emails (check the exact tag field name when setting up the account). | Free tier |
| RSS | One hand-written feed per language (`/feed.xml`, `/en/feed.xml`) covering posts **and** talks; `jekyll-feed` can't filter by language. Buttondown can auto-email new RSS items ("RSS-to-email") to the matching tag. | Free |
| Shareability | `jekyll-seo-tag` → OpenGraph/Twitter cards per page. Talk/post `image` becomes the preview image, with a default branded `og-default-fr.png` / `og-default-en.png` fallback. | Free |
| Discoverability | `jekyll-sitemap`, semantic HTML, JSON-LD `Person` from seo-tag, `hreflang` alternates, and descriptive URLs (`/conferences/livrer-vite/`, `/en/talks/shipping-fast/`). | Free |
| Inbound speaking/teaching | "Invite me to speak" button: a `mailto:` with a prefilled subject in the page's language (or a Formspree form later). The speaker kit (`/a-propos/`, `/en/about/`) makes it easy for organisers to say yes. | Free |
| Analytics (optional) | **GoatCounter** or Plausible: one small script, cookieless, so no consent banner. | Free / paid |
| Comments (optional) | **giscus** (GitHub Discussions), loaded lazily on posts only. | Free |

---

## 7. Implementation steps

**Phase 0: Foundations (½ day)**
1. Add `_config.yml`: title, author, url `https://manny42.github.io`, `lang: fr`, collections `talks`/`courses` with `output: true`, plugins list, `exclude: [_design, README.md, new]`, and `defaults:` per folder that set `lang` and the permalink (`_talks/fr` → `/conferences/:slug/`, `_talks/en` → `/en/talks/:slug/`, same for courses and posts).
2. Add a `Gemfile` with `gem "github-pages", group: :jekyll_plugins` for local preview (`bundle exec jekyll serve --livereload`). Local preview needs Ruby, which works fine on WSL.
3. Settings → Pages → Source: *Deploy from a branch* → `master` / root.

**Phase 1: Design system → layouts (1 day)**
4. Extract the CSS from the mockups into `assets/css/main.css` and the JS into `assets/js/site.js`.
5. Write `_data/fr.yml` and `_data/en.yml` (labels + positioning copy) and the `t.html` helper.
6. Build `base.html` (head, `{% seo %}`, `hreflang` links, feed link for the page's language, header with `aria-current` and the FR/EN switcher, footer, theme bootstrap script).
7. Build the includes: `talk-row`, `cover` (generated cover fallback), `video` (lite embed), `newsletter` (with language tag), `lang-switch`.

**Phase 2: Pages (1 day)**
8. `home.html`: featured talk (`where: "featured", true`), latest 3 talks, courses, latest 3 posts, about, newsletter, all filtered on `page.lang`.
9. Talk listings (FR and EN) grouped by year (`group_by_exp`), tag chips; `talk.html` with prev/next.
10. Teaching listings and `course.html`; blog archives and `post.html` (reading time = `content | number_of_words | divided_by: 200`).
11. About / speaker kit pages in both languages, bilingual `404.html`, and the two RSS feeds.

**Phase 3: Content (ongoing)**
12. Write `_templates/*.md` and the `new` script (next free `ref`, duplicate check, `--from` to start a translation).
13. Migrate real talks, courses and posts, in French and/or English. Write the two positioning files. Replace the placeholder venues, stats and portrait with real data.

**Phase 4: Audience & polish (½ day)**
14. Create the Buttondown account, wire the form with the `fr`/`en` tag, and enable RSS-to-email per language.
15. Add default OG images (FR and EN), favicon/`apple-touch-icon`, and optional GoatCounter.
16. Run Lighthouse and an accessibility pass (contrast in both themes, focus rings, keyboard play button) and fix anything flagged.
17. Optional: custom domain (configure it in Settings → Pages; a `CNAME` file alone doesn't set it), and enforce HTTPS.

---

## 8. Open decisions for Morgan
- Newsletter provider (Buttondown recommended; Substack is easier but you can't embed its form as cleanly).
- Host slides as PDFs in the repo (simple, but adds weight to git) or link out to Speaker Deck/Google Slides. Recommendation: link out for big decks, and commit PDFs only if they're under ~5 MB.
- ~~Accent color~~: decided, a single acid-green signal `#d4ff3a` (`--sig`), used only as a background (highlights, hover, play button).
- ~~Reference numbers~~: decided, chosen by hand in front matter (`ref:`).
- ~~Site language~~: decided, bilingual FR/EN, translated by hand, with a different positioning per market allowed.
- French at `/` and English at `/en/` (current choice), or both under a prefix (`/fr/`, `/en/`)?
- What the two positionings actually say: which topics, formats and venues to lead with for French vs international clients.
- Custom domain or `manny42.github.io`.
