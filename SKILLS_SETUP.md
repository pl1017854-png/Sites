# Landing Page Skills Setup Guide

## ✅ Installed & Configured

This project is now configured for building high-quality landing pages using Claude Code's best design and testing practices.

### Skills to Install in Claude Code

**Essential (Required)**
```
/plugin install frontend-design
/plugin install webapp-testing
```

**Recommended (Optional but useful)**
```
/plugin install web-artifacts-builder
/plugin install dataviz
/plugin install artifact-design
```

### What Each Skill Does

| Skill | Purpose | When to Use |
|-------|---------|------------|
| **frontend-design** | Forces aesthetic decisions before coding | Every design task — this ensures no generic output |
| **webapp-testing** | Playwright testing, screenshots, console logs | Validate the site works real browsers at all breakpoints |
| **web-artifacts-builder** | Quick React + Tailwind prototypes | Fast iteration before committing to the main project |
| **dataviz** | Chart and graph design systems | If landing page includes data visualization |
| **artifact-design** | Artifact publish guidance | Before publishing HTML/React prototypes |

## 🎨 Design Workflow

1. **Get the briefing**
   - What's the product/service?
   - Who's the audience?
   - What's the primary action?

2. **Declare aesthetic first** (mandatory before coding)
   ```
   Direction: [e.g., "Modern B2B SaaS, minimalist, tech-forward"]
   Colors: [e.g., "#0F172A (navy), #1E293B (slate), #06B6D4 (cyan)"]
   Typography: [e.g., "Playfair Display for headings, Plus Jakarta Sans for body"]
   Motion: [e.g., "Subtle fade-in on scroll, no excessive animation"]
   ```

3. **Use the 11-element framework**
   - Follow the structure in CLAUDE.md
   - Each section has a clear purpose
   - No filler

4. **Build & test**
   - Code the landing page (Next.js 14+ with TypeScript)
   - Run `npm run dev` locally
   - Use webapp-testing to capture screenshots at 375px, 768px, 1440px
   - Check Lighthouse scores (target: 95+)

## 🚀 Quick Start Example

```
Claude, build a landing page for [product].
It should:
- Target [audience]
- Highlight [main benefit]
- Include [specific sections]

Before you write code, declare:
1. Aesthetic direction (describe the vibe)
2. Color palette (with hex values)
3. Font pair (choose something distinctive)
4. Motion language (subtle/bold/none)

Then build using Next.js 14, TypeScript, Tailwind, and shadcn/ui.
Use webapp-testing to verify on mobile (375px), tablet (768px), and desktop (1440px).
Target Lighthouse scores: Performance ≥95, Accessibility ≥95.
```

## ❌ Avoid These Pitfalls

- ❌ Using Inter, Roboto, Arial, or Space Grotesk (too generic)
- ❌ Default purple-to-blue gradient
- ❌ Unnecessary 3×3 feature grid
- ❌ Soft shadows on every card (needs intentional hierarchy)
- ❌ Testing only on desktop
- ❌ Skipping keyboard accessibility
- ❌ Installing 10+ skills at once (context bloat)

## 📊 Quality Checklist

Before saying the landing page is done:

- [ ] Lighthouse Performance ≥ 95
- [ ] Lighthouse Accessibility ≥ 95
- [ ] WCAG AA contrast on all text
- [ ] Visible keyboard focus indicators
- [ ] Tested at 375px (mobile)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1440px (desktop)
- [ ] All links working
- [ ] Forms functional
- [ ] No console errors
- [ ] Aesthetic is distinctive (not generic)

## 🔗 Resources

- **Anthropic Cookbook**: Prompting for frontend aesthetics
- **shadcn/ui Docs**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Web Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

## 💡 Pro Tips

1. **Start with a prototype** — Use web-artifacts-builder for fast iteration
2. **Typography first** — Choose fonts before colors
3. **Whitespace is design** — Don't fill every pixel
4. **Test keyboard first** — Keyboard users find everything sighted users do
5. **Motion has purpose** — Ask "why?" before every animation
6. **One design decision per section** — Let each part breathe
