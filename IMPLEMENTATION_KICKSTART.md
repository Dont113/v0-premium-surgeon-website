# IMPLEMENTATION KICKSTART
## Dr. Vance Premium Plastic Surgery Website

---

## Project Type
**Frontend-Only Prototype**
- No state management libraries required
- No backend logic
- No data persistence
- No API integrations
- Full-width single-page layout
- Revision-ready structure

---

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | App Router, SSR/SSG |
| React | 19 | UI Components |
| TypeScript | Latest | Type Safety |
| Tailwind CSS | 4.2 | Styling |
| GSAP | Latest | Animations |
| shadcn/ui | Latest | Base UI Components |

---

## Design System

### Color Palette
```css
--primary-dark: #0F0F0F;      /* Background */
--primary-white: #FFFFFF;      /* Text/Cards */
--accent-gold: #C9A961;        /* CTA/Highlights */
--secondary-gray: #2A2A2A;     /* Card backgrounds */
--border-subtle: #3D3D3D;      /* Dividers */
--text-muted: #A0A0A0;         /* Secondary text */
```

### Typography
| Usage | Font | Weights |
|-------|------|---------|
| Headings | Cormorant Garamond | 400, 500, 600, 700 |
| Body/UI | Montserrat | 400, 500, 600 |

### Animation Guidelines
| Type | Implementation | Duration |
|------|----------------|----------|
| Scroll reveals | Fade-in (GSAP) | 0.4-0.6s |
| Hover effects | Scale 1.02, opacity | 0.2s |
| Micro-interactions | Subtle transforms | 0.15s |
| Page transitions | None (single page) | N/A |

**Animation Rules:**
- Mobile/tablet compatible (tested)
- Respect `prefers-reduced-motion`
- No heavy motion or parallax
- Premium and minimal only

---

## Layout Architecture

### Page Structure
```
Full-Width Single Page Layout
├── Sticky Header (logo + nav anchors)
├── Section 1: Hero
├── Section 2: About
├── Section 3: Procedures
├── Section 4: Before/After Gallery
├── Section 5: Testimonials
├── Section 6: Process
├── Section 7: Pricing
├── Section 8: FAQ
├── Section 9: Credentials
├── Section 10: Final CTA
├── Section 11: Footer
├── Contact Modal (overlay)
├── GDPR Consent Banner
└── Back to Top Button
```

### Directory Structure
```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Custom styles, animations
├── components/
│   ├── sections/           # 11 section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProceduresSection.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FooterSection.tsx
│   ├── common/             # Shared components
│   │   ├── Header.tsx
│   │   ├── ContactModal.tsx
│   │   ├── GDPRConsent.tsx
│   │   └── BackToTopButton.tsx
│   └── animations/         # Animation utilities
│       ├── FadeInOnScroll.tsx
│       └── gsap-config.ts
├── lib/
│   └── demo-content.ts     # All placeholder data
└── public/
    └── images/             # Placeholder images
```

---

## Section Specifications

### 1. HeroSection
- Full-viewport height
- Large hero background (placeholder)
- Dr. Vance name + tagline
- Single CTA button: "Book Private Consultation"
- Scroll indicator (chevron down)
- Fade-in text animation on load

### 2. AboutSection
- Professional portrait placeholder
- 2-3 paragraph bio
- Specialty highlights (3-4 bullet points)
- Scroll-triggered fade-in

### 3. ProceduresSection
- Grid of 4 procedure cards
- Icon + name + short description
- Hover scale effect
- Procedures: Rhinoplasty, Facelift, Breast Augmentation, Liposuction

### 4. BeforeAfterSection
- Grid layout (2x2 or 3-column)
- 4 case studies with before/after pairs
- Patient age + procedure name overlay
- Autoplay slider (GSAP-powered, 4s intervals)
- Manual navigation dots
- Pause on hover

### 5. TestimonialsSection
- 3-4 testimonial cards
- Demo names and transformations
- 5-star ratings display
- Horizontal scroll on mobile
- Hover lift effect

### 6. ProcessSection
- 4-step timeline
- Steps: Initial Consultation, Personalized Plan, Surgery Day, Recovery & Follow-up
- Numbered visual indicators
- Brief description per step

### 7. PricingSection
- Demo pricing cards
- Consultation: £150 (redeemable)
- Procedure ranges (placeholder):
  - Rhinoplasty: £5,500 - £8,000
  - Facelift: £8,000 - £12,000
  - Breast Augmentation: £6,000 - £9,000
  - Liposuction: £3,500 - £6,000
- CTA button per card

### 8. FAQSection
- Accordion component
- 6 demo FAQs (3-4 lines max each)
- Topics: Consultation, Recovery, Results, Safety, Financing, Scheduling
- Smooth expand/collapse

### 9. CredentialsSection
- Demo accreditations: GMC, BAAPS, BAPRAS
- Years of experience badge
- Certification icons/badges
- No awards (per specification)

### 10. CTASection
- Final conversion push
- Compelling headline
- Single CTA button (opens modal)
- Subtle background pattern

### 11. FooterSection
- Contact info (demo data)
- Social links (placeholder)
- Legal links: Privacy Policy, Terms
- Copyright notice
- Back-to-top trigger

---

## Component Specifications

### ContactModal
```typescript
// Frontend-only, no API submission
Fields:
- Name (required)
- Email (required, validated)
- Phone (required)
- Message (optional)
- GDPR consent checkbox (required)

Behavior:
- Opens on any CTA click
- Form validation with Zod
- Success state shows confirmation message
- No actual data submission
- Close on backdrop or X button
```

### GDPRConsent
```typescript
// Frontend-only consent banner
- Appears on first visit
- "Accept" and "Decline" buttons
- Stores preference in localStorage
- Includes link to Privacy Policy
- Disappears after interaction
```

### BackToTopButton
```typescript
// Appears after 300px scroll
- Smooth scroll to top
- Fade-in/out animation
- Fixed position bottom-right
- Respects smooth scroll behavior
```

### FadeInOnScroll
```typescript
// GSAP-powered scroll animation wrapper
- Uses Intersection Observer
- Triggers at 100px from viewport bottom
- 0.4s fade-in duration
- Works on mobile/tablet
- Respects prefers-reduced-motion
```

---

## Demo Content Requirements

### Testimonials (3-4)
```
- 5-star ratings
- First name + last initial
- Procedure mentioned
- Positive outcome description
- 2-3 sentences each
```

### FAQs (6)
```
1. What happens during the initial consultation?
2. How long is the recovery period?
3. What results can I expect?
4. Is the procedure safe?
5. Do you offer financing options?
6. How do I schedule my appointment?

Answers: 3-4 lines maximum each
```

### Credentials
```
- General Medical Council (GMC) registered
- British Association of Aesthetic Plastic Surgeons (BAAPS)
- British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)
- 15+ years of experience
```

---

## SEO Implementation

### Meta Tags
```html
title: "Dr. Alexander Vance | Premium Plastic Surgery London"
description: "Expert cosmetic surgery in London. Rhinoplasty, facelift, breast augmentation by Dr. Alexander Vance. Book your private consultation today."
```

### Target Keywords
- plastic surgeon London
- cosmetic surgery UK
- rhinoplasty specialist London
- facelift surgery London
- breast augmentation UK

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Alexander Vance",
  "specialty": "Plastic Surgery",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "UK"
  }
}
```

---

## Interaction Patterns

### Single CTA Strategy
- One action: "Book Private Consultation"
- All CTAs open the ContactModal
- No email capture forms
- No newsletter signups
- No secondary actions

### Smooth Scrolling
- Global `scroll-behavior: smooth`
- Header nav links scroll to sections
- Back-to-top smooth scroll
- 80px offset for sticky header

### Hover Effects
- Scale: 1.02 on cards
- Opacity shift on buttons
- Border/shadow on interactive elements
- 0.2s transition duration

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 85+ |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |
| Largest Contentful Paint | < 2.5s |

### Optimization Strategies
- Next.js Image with lazy loading
- GSAP tree-shaking
- CSS-in-Tailwind (no runtime CSS-in-JS)
- Minimal JavaScript bundles
- Font subsetting

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Stack, full-width |
| Tablet | 640px - 1024px | 2-column grids |
| Desktop | > 1024px | Full layouts, 3-4 columns |

---

## Implementation Order

### Phase 1: Foundation
1. Update `app/layout.tsx` (fonts, metadata)
2. Create `app/globals.css` (colors, animations)
3. Install GSAP dependency
4. Create `lib/demo-content.ts`

### Phase 2: Common Components
1. `components/common/Header.tsx`
2. `components/common/ContactModal.tsx`
3. `components/common/GDPRConsent.tsx`
4. `components/common/BackToTopButton.tsx`
5. `components/animations/FadeInOnScroll.tsx`

### Phase 3: Section Components
1. HeroSection
2. AboutSection
3. ProceduresSection
4. BeforeAfterSection
5. TestimonialsSection
6. ProcessSection
7. PricingSection
8. FAQSection
9. CredentialsSection
10. CTASection
11. FooterSection

### Phase 4: Integration
1. Create `app/page.tsx` (orchestrate all sections)
2. Wire up smooth scrolling
3. Connect modal to CTAs
4. Test responsive layouts

### Phase 5: Polish
1. Add all GSAP animations
2. Test mobile/tablet
3. Validate SEO
4. Performance audit

---

## Files to Create (Total: ~20)

**App Layer:**
- `app/layout.tsx` (update)
- `app/page.tsx` (create)
- `app/globals.css` (update)

**Section Components (11):**
- `components/sections/HeroSection.tsx`
- `components/sections/AboutSection.tsx`
- `components/sections/ProceduresSection.tsx`
- `components/sections/BeforeAfterSection.tsx`
- `components/sections/TestimonialsSection.tsx`
- `components/sections/ProcessSection.tsx`
- `components/sections/PricingSection.tsx`
- `components/sections/FAQSection.tsx`
- `components/sections/CredentialsSection.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/FooterSection.tsx`

**Common Components (4):**
- `components/common/Header.tsx`
- `components/common/ContactModal.tsx`
- `components/common/GDPRConsent.tsx`
- `components/common/BackToTopButton.tsx`

**Utilities (2):**
- `components/animations/FadeInOnScroll.tsx`
- `lib/demo-content.ts`

---

## Constraints

- Frontend only - no backend
- No state management libraries
- No data persistence
- No API calls
- Single page layout
- Placeholder images throughout
- Demo content only
- Revision-ready structure

---

## Success Criteria

- [ ] Single-page with 11 sections rendered
- [ ] Full-width layout throughout
- [ ] Sticky header with smooth scroll nav
- [ ] Modal contact form opens on CTA
- [ ] GDPR consent banner displays
- [ ] GSAP fade-in animations work
- [ ] Hover effects on interactive elements
- [ ] Before/After autoplay slider functional
- [ ] Back-to-top button works
- [ ] Mobile/tablet responsive
- [ ] SEO meta tags in place
- [ ] Structured data implemented
- [ ] No console errors
- [ ] Premium, minimal aesthetic maintained

---

## Ready for Implementation

This document serves as the complete specification for building the Dr. Vance premium plastic surgery website prototype. All components are frontend-only with placeholder content, designed for easy future backend integration.

**Next Step:** Begin Phase 1 - Foundation setup
