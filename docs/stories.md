# Stories

## 🧱 EPIC 1: Project Setup & Tech Foundation

### ✅ User Story: As a developer, I want to scaffold the project and configure tools so I can build and deploy efficiently.

- [ ] Set up monorepo with Next.js and Tailwind CSS
- [ ] Set up Supabase project with PostgreSQL + Auth
- [ ] Connect Supabase to project (env vars, keys)
- [ ] Add CI/CD via Vercel (connect GitHub, staging/live branches)
- [ ] Set up Prettier, ESLint, Husky for linting and formatting
- [ ] Define project folder structure (components, pages, API, etc.)

---

## 🔐 EPIC 2: Authentication & User Profiles

### ✅ User Story: As a user, I want to sign up and log in using social accounts or email magic links.

- [ ] Integrate Supabase Auth or Clerk
- [ ] Enable Google and Twitter OAuth
- [ ] Implement email magic link flow
- [ ] Create `/dashboard` protected route
- [ ] Add user table in DB to store metadata (handle, plan tier, created_at)

---

## 🧩 EPIC 3: Link-in-Bio Page Builder

### ✅ User Story: As a user, I want to create a personalized landing page with links and embeds.

- [ ] Create schema for `links` and `page_config` (JSON)
- [ ] Create form to add/edit/delete links (title, URL, tags, etc.)
- [ ] Implement dynamic routing: `/u/[username]`
- [ ] Build reusable `LinkBlock`, `EmbedBlock`, and `TextBlock` components
- [ ] Save layout stack in `page_config` for rendering
- [ ] Pre-generate pages with ISR for caching
- [ ] Add mobile-first styling and page preview

---

## 🔗 EPIC 4: Smart Link Management

### ✅ User Story: As a user, I want to manage and organize my links from the dashboard.

- [ ] Build dashboard UI to manage all links
- [ ] Drag-to-reorder functionality (basic version)
- [ ] Display link metadata: click count, tags, visibility toggle
- [ ] Add tags or source indicators (affiliate, internal, etc.)
- [ ] Implement link soft-deletion (archive)

---

## 📊 EPIC 5: Click Tracking & Analytics

### ✅ User Story: As a creator, I want to see how many clicks my links get and where users come from.

- [ ] Implement `/go/[linkId]` redirect route
- [ ] Log click to `clicks` table (IP, timestamp, referrer, linkId)
- [ ] Integrate PostHog, Plausible, or Umami for front-end analytics
- [ ] Add basic dashboard: total clicks, clicks per link, top referrers
- [ ] Add charting (optional: Recharts or Chart.js)

---

## 🎵 EPIC 6: Dynamic Embeds

### ✅ User Story: As a user, I want to embed content like YouTube or Spotify to keep my page fresh.

- [ ] Add support for YouTube oEmbed or manual URL
- [ ] Add support for Spotify, TikTok, or Instagram
- [ ] Allow users to reorder and remove embed blocks
- [ ] Add lazy loading to embeds to improve performance

---

## 💰 EPIC 7: Affiliate Link Tracking

### ✅ User Story: As a user, I want to track affiliate links to understand performance.

- [ ] Append UTM parameters to affiliate links
- [ ] Display affiliate source indicators in dashboard
- [ ] Track redirect conversions (basic: referrer & redirect)
- [ ] (Optional) Webhook or callback support for conversions

---

## 🚀 EPIC 8: Boost Score v1 Engine

### ✅ User Story: As a user, I want to see optimization tips for improving my page performance.

- [ ] Define scoring rules:
  - [ ] Active/inactive links
  - [ ] Dead links (404 check)
  - [ ] Missing embeds
  - [ ] Repetition or link type diversity
- [ ] Write Boost Score engine logic (server-side function)
- [ ] Display score with tips on dashboard
- [ ] (Optional) Cache scores and recalculate periodically

---

## 🔧 EPIC 9: Performance & Mobile Optimization

### ✅ User Story: As a visitor, I want the page to load quickly and look good on mobile.

- [ ] Optimize Lighthouse score
- [ ] Use Tailwind responsive design
- [ ] Enable lazy loading for embeds
- [ ] Use ISR for static gen of high-traffic pages

---

## 🔐 EPIC 10: Privacy & Compliance

### ✅ User Story: As a user, I want to be confident that my data is handled responsibly.

- [ ] Add cookie banner (if using cookies or tracking)
- [ ] Allow account deletion/export (GDPR compliance)
- [ ] Limit data stored (no unnecessary PII)
- [ ] Privacy policy and terms of use pages

---

## 🧪 EPIC 11: QA & Testing

### ✅ User Story: As a dev, I want to ensure the app works well before launch.

- [ ] Write tests for critical features (Jest + Testing Library)
- [ ] End-to-end tests (optional: Playwright or Cypress)
- [ ] Manual testing on mobile + desktop
- [ ] Bug fixing round

---

## 🚨 EPIC 12: Launch Prep

### ✅ User Story: As a developer, I want to prepare for launch with polish and marketing-ready features.

- [ ] Set up SEO (OpenGraph tags, social share image, metadata)
- [ ] Add loading spinners, skeletons, error states
- [ ] Final polish pass: grammar, typos, UI/UX tweaks
- [ ] Set up soft launch user access (via invite?)
- [ ] Create live demo showcase page

---

## ✅ BONUS: Internal Use + Dogfooding

- [ ] Create your own profile page using the system
- [ ] Publish demo link to friends/testers
- [ ] Gather feedback + track metrics

---
