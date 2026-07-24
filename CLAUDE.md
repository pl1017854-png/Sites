# Landing Page Build Guide

## Project Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animation**: Framer Motion

## Design Philosophy

### Estética — Regras Invioláveis
- **Typography**: Never use Inter, Roboto, Arial, or Space Grotesk. Choose a distinctive font pair with personality and justify the choice before coding.
- **Design Declaration**: Before writing any component, declare in one sentence:
  - Direction (aesthetic intent)
  - Color palette (with hex values)
  - Typographic scale
  - Motion language
- **No Generic Defaults**: 
  - Avoid purple-to-blue gradients
  - No standard cards with soft shadows and default border radius
  - No 3×3 grid feature sections without purpose
- **Layout Principles**:
  - Intentional asymmetry over default symmetry
  - Generous whitespace
  - One memorable visual decision per section
- **Animation**:
  - Every animation has a purpose
  - Respect `prefers-reduced-motion`
  - Motion should enhance, not distract

### Landing Page Structure (11 Essential Elements)
1. **Hero** — Clear value proposition
2. **Social Proof** — Testimonials, logos, metrics
3. **Problem** — Address specific pain points
4. **Solution** — How your product solves it
5. **Features** — Benefits, not jargon
6. **Visual Demo** — Screenshots, video, or interactive demo
7. **Testimonials** — Real customer voices
8. **Pricing** — Clear, no surprises
9. **Objections/FAQ** — Address hesitations
10. **Final CTA** — Strong call-to-action
11. **Footer** — Useful links, not fluff

## Quality Standards

### Performance & Accessibility (Mandatory)
- **Lighthouse Scores**: Performance ≥95, Accessibility ≥95
- **WCAG AA Contrast**: All text must meet WCAG AA standards
- **Keyboard Navigation**: Visible focus indicators throughout
- **Responsive Testing**: Verified at 375px, 768px, and 1440px breakpoints

### Before Declaring Done
- Run site locally with `npm run dev`
- Use webapp-testing to take screenshots at all breakpoints
- Check Lighthouse scores
- Verify all links and forms work
- Test keyboard navigation

## Skills Used
- **frontend-design** — Forces aesthetic direction before coding
- **webapp-testing** — Validates UI with Playwright
- **web-artifacts-builder** — Rapid React + Tailwind prototypes

## File Structure
```
/
├── CLAUDE.md (this file)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── components/
├── public/
├── styles/
└── package.json
```

## Common Pitfalls to Avoid
- Installing too many skills (causes context bloat and poor results)
- Generic hero section without clear value prop
- Mismatched typography creating visual chaos
- No breathing room between sections
- Testing only on desktop
- Forgetting about keyboard accessibility
