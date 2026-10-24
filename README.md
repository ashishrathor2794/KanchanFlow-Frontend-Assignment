# KanchanFlow — Manufacturing CRM Marketing Website

A responsive, three-page Next.js marketing website built for the Meru Technosoft Frontend Internship assignment.

## Pages
- `/` — Home: product dashboard mockup, problem/solution, six feature cards, industries, pricing teaser and FAQ.
- `/features` — Feature detail sections and workflow comparison table.
- `/pricing` — Monthly/annual plan toggle, plan cards, interactive demo request form with client-side validation and success state, and pricing FAQ.

## Tech stack
- Next.js App Router
- React
- JavaScript
- CSS variables and custom responsive CSS
- Lucide icons
- `next/font` (Geist and Geist Mono)

## Run locally
1. Install Node.js (LTS) from the official Node.js website.
2. Extract this ZIP and open a terminal in the `kanchanflow-project` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

Create a production build with `npm run build` and run it using `npm start`.

## Deploy to Vercel
1. Create a GitHub repository and push this project folder (do not upload the ZIP as the repository contents).
2. Import the repository into Vercel.
3. Keep the framework preset as Next.js and deploy.
4. Open the deployed website on mobile and desktop and test every navigation link and form.

## Design decisions
- **Palette:** graphite/charcoal for an industrial, confident feel; molten gold accent to reflect the Kanchan name; warm light steel/paper surfaces for readable content.
- **Typography:** Geist for interface and body copy, Geist Mono for technical labels, and restrained Georgia italic accents for contrast.
- **Layout:** reusable Navbar, Footer and FAQ components, shared spacing and colour tokens, responsive layouts for mobile/tablet/desktop, visible focus styles and reduced-motion support.
- **Images:** the home-page product UI is built as a lightweight HTML/CSS mockup instead of a stock screenshot, so it remains sharp and responsive.

## Assumptions and notes
- This is a frontend-only assignment. The demo form validates required fields in the browser and displays a success state; it does not send or store data.
- Pricing is sample UI content to demonstrate a monthly/annual toggle, not verified official KanchanFlow pricing. Confirm commercial details before publishing publicly.
- Social links are omitted rather than linking to unverified profiles.
- The assignment asks for at least 8 meaningful Git commits. Create commits as you complete milestones rather than submitting one single final commit. Suggested milestones: project setup, global design tokens, shared navigation/footer, home hero, home sections, features page, pricing cards, form interactions, responsive/accessibility polish, README.
- Before submission, run Lighthouse on the deployed mobile site and include a screenshot of the actual scores. Do not claim a score until you have measured it.

## Before submitting
- [ ] `npm run build` succeeds.
- [ ] Check 360px, 768px, 1024px and 1440px widths.
- [ ] Test keyboard navigation and the mobile menu.
- [ ] Test the pricing toggle and form success state.
- [ ] Check for console warnings/errors.
- [ ] Capture Lighthouse mobile scores.
- [ ] Deploy and add the real GitHub and live URLs to your submission message.
