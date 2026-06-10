# Motion primitives

Sitewide motion + tech-modernity primitives consumed by page sections. Built on `framer-motion` with shared variants from `@/lib/motion`.

**All primitives respect `prefers-reduced-motion: reduce`.** Either animation is fully disabled, or the component jumps to its final state immediately. Never assume motion will play.

Import from the barrel:

```tsx
import {
  MotionSection,
  MotionCard,
  MotionStat,
  MarqueeStrip,
  GradientMesh,
  GrainOverlay,
  MagneticButton,
  ScrollProgress,
  AnimatedUnderline,
} from "@/app/components/ui/motion";

import { fadeUp, stagger, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
```

---

## MotionSection

Drop-in replacement for `<section>` that fades up its contents as it scrolls into view.

**Props**
- `children` — required
- `className?: string`
- `id?: string`
- `ariaLabel?: string` — OR
- `ariaLabelledby?: string` — prefer this; point to the heading id
- `variants?: Variants` — default `fadeUp`
- `amount?: number` — viewport fraction trigger; default `0.2`
- `once?: boolean` — default `true`
- `role?: string`

**Usage**
```tsx
<MotionSection ariaLabelledby="programme-heading" className="py-24">
  <h2 id="programme-heading">Programme</h2>
  ...
</MotionSection>
```

**Use when**: a whole content section should animate in as the user reaches it.
**Don't use for**: above-the-fold hero (it's already in view — use the variants from `@/lib/motion` with `initial`/`animate` instead so it plays on load).

---

## MotionCard

Animated card wrapper. Fades up on scroll-in, lifts `-4px` on hover. Optional glass morphism.

**Props**
- `children` — required
- `className?: string`
- `id?: string`
- `ariaLabel?: string`
- `variants?: Variants` — default `fadeUp`
- `amount?: number` — default `0.2`
- `once?: boolean` — default `true`
- `glass?: false | "light" | "dark"` — adds backdrop-blur card styling
- `noHover?: boolean` — disable hover lift
- `as?: "div" | "article" | "li" | "section"` — default `"div"`

**Usage**
```tsx
<MotionCard glass="dark" className="rounded-2xl p-6 text-white">
  <h3>Elite Pathway</h3>
  <p>...</p>
</MotionCard>
```

**Use when**: grid / list of cards (pillars, programmes, testimonials).
**Don't use for**: form inputs or anything where translateY on hover hurts usability.

---

## MotionStat

Animated number counter that starts when scrolled into view. Uses Intersection Observer + `requestAnimationFrame` with ease-out cubic. Respects reduced motion (jumps to final value). Includes visually-hidden full-value text for screen readers.

**Props**
- `value: number` — required final value
- `prefix?: string` — e.g. `"$"` or `"+"`
- `suffix?: string` — e.g. `"%"`, `"K"`
- `duration?: number` — ms, default `1600`
- `decimals?: number` — default `0`
- `label: string` — required, for SR
- `className?: string` — numeric span styling
- `labelClassName?: string` — pass `""` to hide visually (still read by SR)

**Usage**
```tsx
<MotionStat
  value={2400}
  suffix="+"
  label="players developed"
  className="text-5xl font-bold text-emerald-600"
  labelClassName="mt-1 text-sm text-slate-500"
/>
```

**Use when**: stats strips, social-proof bands, outcome bands.

---

## MarqueeStrip

Infinite horizontal marquee. Pure CSS animation (more performant than JS). Renders content twice for seamless loop. Edge fade by default.

**Props**
- `children` — required (the row of items, e.g. logos)
- `speed?: number` — px/s, default `50`
- `direction?: "left" | "right"` — default `"left"`
- `pauseOnHover?: boolean` — default `true`
- `gap?: string` — CSS gap between groups, default `"2rem"`
- `className?: string`
- `fadeEdges?: boolean` — default `true`
- `ariaLabel: string` — required, e.g. `"Partner logos"`

**Usage**
```tsx
<MarqueeStrip ariaLabel="Partner organisations" speed={40} className="py-8">
  {partners.map((p) => (
    <img key={p.name} src={p.logo} alt={p.name} className="h-10 opacity-70" />
  ))}
</MarqueeStrip>
```

**Use when**: partner logos, rolling testimonial quotes, alumni names.

---

## GradientMesh

Background gradient mesh — radial gradients composed into a soft "tech ambience" backdrop. Mount inside a `relative` parent. Pointer events disabled.

**Props**
- `variant?: "green" | "green-slate" | "slate"` — default `"green"`
- `animate?: boolean` — default `true` (forced false when reduced-motion)
- `className?: string`
- `opacity?: number` — default `0.5`

**Usage**
```tsx
<section className="relative overflow-hidden bg-slate-950 py-32">
  <GradientMesh variant="green-slate" />
  <GrainOverlay opacity={0.04} />
  <div className="relative z-10">...</div>
</section>
```

**Use when**: dark hero sections, CTA bands, anywhere you want "tech sheen".

---

## GrainOverlay

Subtle SVG film-grain overlay. Mount inside a `relative` parent. Pointer events disabled.

**Props**
- `opacity?: number` — default `0.03`
- `className?: string`
- `blendMode?: "overlay" | "soft-light" | "multiply" | "normal"` — default `"overlay"`

**Usage**
```tsx
<div className="relative">
  <img src="hero.jpg" alt="" />
  <GrainOverlay opacity={0.05} />
</div>
```

**Use when**: layered over photos / gradients to add filmic texture.

---

## MagneticButton

Subtle magnetic-hover wrapper for primary CTAs. Wraps your existing button — does NOT replace it.

**Props**
- `children` — exactly one interactive child
- `strength?: number` — max px offset, default `6`
- `className?: string`

**Usage**
```tsx
<MagneticButton>
  <Button as="a" href="/apply" variant="primary">
    Apply Now
  </Button>
</MagneticButton>
```

**Use when**: primary hero CTA, end-of-page commit CTA.
**Don't use for**: nav links, repeated grid CTAs, anything tappable in dense layouts.

---

## ScrollProgress

Slim fixed brand-green bar at top of viewport showing read progress.

**Props**
- `className?: string`
- `height?: number` — px, default `3`
- `color?: string` — default `"#16A34A"`

**Usage**
```tsx
<ScrollProgress />
```

**Use when**: long content pages (About, programme detail).
**Don't use for**: short pages or any page where a top bar would visually compete with the navbar.

---

## AnimatedUnderline

Pure-CSS inline wrapper that draws an underline on hover/focus from left to right. Use on text links.

**Props**
- `children` — typically a `<Link>` / `<a>`
- `className?: string`
- `color?: string` — default brand green
- `thickness?: number` — px, default `2`

**Usage**
```tsx
<AnimatedUnderline>
  <a href="/about">Learn more</a>
</AnimatedUnderline>
```

**Use when**: text links that want tech-modern polish without weight.

---

## Shared variants (`@/lib/motion`)

For custom one-off animations, import variants directly instead of building bespoke ones:

- `fadeUp`, `fadeUpSm`, `fadeIn`, `blurIn`
- `stagger`, `staggerSlow` — pair with fade variants on children
- `scaleIn`
- `slideInLeft`, `slideInRight`
- `cardHover` — `{rest, hover}` for `motion` hover state
- `defaultViewport` — `{once: true, amount: 0.2}`
- `useReducedMotion` — re-exported from framer-motion

**Always** branch on `useReducedMotion()` in custom motion code:

```tsx
const reduced = useReducedMotion();
return reduced ? <div>{content}</div> : <motion.div variants={fadeUp}>{content}</motion.div>;
```

---

## Utility classes (`src/styles/motion.css`)

For motion without React state:

- `.glass-light` / `.glass-dark` — glass morphism without MotionCard
- `.tech-grid` / `.tech-grid-dark` — dot grid backdrop
- `.text-gradient-brand` — animated brand-green gradient text fill
- `.brand-glow` — green box-shadow hover/focus accent
- `.animated-underline` — used internally by `<AnimatedUnderline>`
