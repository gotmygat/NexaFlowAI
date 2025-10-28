# NexaFlow AI Brand Guide

This document outlines the visual identity, design principles, and brand guidelines for NexaFlow AI.

## Brand Identity

### Name
**NexaFlow AI**

The name combines "Nexa" (suggesting next-generation and nexus/connection) with "Flow" (representing seamless market movement and capital flow) and "AI" (highlighting our artificial intelligence technology).

### Tagline
"Unlock Limitless Profit Potential"

### Brand Personality
- **Innovative**: Cutting-edge AI technology
- **Trustworthy**: Enterprise-grade security and reliability
- **Powerful**: Advanced capabilities and performance
- **Professional**: Sophisticated and polished
- **Forward-thinking**: Future of trading technology

## Visual Identity

### Logo

The logo features a stylized lightning bolt (Zap icon) symbolizing:
- Speed and instant execution
- Power and energy
- Electric intelligence (AI)
- Market momentum

**Logo Variations:**
- Primary: Full color with text
- Icon only: For app icons and small spaces
- Monochrome: For single-color applications

**Clear Space:**
Maintain a minimum clear space around the logo equal to the height of the lightning bolt icon.

### Color Palette

#### Primary Colors

**Primary Blue** - `hsl(217, 91%, 60%)` - `#3b82f6`
- Main brand color
- CTAs and interactive elements
- Represents technology, trust, and intelligence

**Accent Green** - `hsl(142, 76%, 36%)` - `#16a34a`
- Success states and positive metrics
- Growth and profitability indicators
- Represents profit and success

#### Neutral Colors

**Background Dark** - `hsl(222, 47%, 11%)` - `#0f172a`
- Main background color
- Creates sophisticated, professional atmosphere

**Secondary Dark** - `hsl(217, 33%, 17%)` - `#1e293b`
- Card backgrounds and secondary surfaces
- Provides subtle depth and hierarchy

**Foreground** - `hsl(210, 40%, 98%)` - `#f8fafc`
- Primary text color
- High contrast for readability

**Muted Text** - `hsl(215, 20%, 65%)` - `#94a3b8`
- Secondary text and descriptions
- Provides visual hierarchy

#### Supporting Colors

**Chart Colors:**
- Chart 1: Primary Blue `hsl(217, 91%, 60%)`
- Chart 2: Accent Green `hsl(142, 76%, 36%)`
- Chart 3: Yellow `hsl(47, 92%, 61%)`
- Chart 4: Purple `hsl(280, 80%, 70%)`
- Chart 5: Pink `hsl(340, 82%, 62%)`

**Risk Indicators:**
- Low Risk: Green `#16a34a`
- Medium Risk: Yellow `#eab308`
- High Risk: Red `#ef4444`

### Typography

**Primary Font:** Inter
- Clean, modern, highly readable
- Used for all text content

**Font Weights:**
- Regular (400): Body text
- Medium (500): Emphasized text
- Semibold (600): Subheadings
- Bold (700): Headings and titles

**Type Scale:**
- Display: 72px / 4.5rem (Hero headlines)
- H1: 56px / 3.5rem
- H2: 48px / 3rem
- H3: 32px / 2rem
- H4: 24px / 1.5rem
- Body Large: 20px / 1.25rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem
- Extra Small: 12px / 0.75rem

**Line Height:**
- Headings: 1.2 (120%)
- Body text: 1.5 (150%)
- Tight (for large displays): 1.1 (110%)

### Spacing System

Based on 8px grid system:

- 0: 0px
- 1: 4px (0.25rem)
- 2: 8px (0.5rem)
- 3: 12px (0.75rem)
- 4: 16px (1rem)
- 6: 24px (1.5rem)
- 8: 32px (2rem)
- 12: 48px (3rem)
- 16: 64px (4rem)
- 24: 96px (6rem)

### Border Radius

- Small: 8px (0.5rem) - Buttons, badges
- Medium: 10px (0.625rem) - Cards, inputs
- Large: 12px (0.75rem) - Large cards, modals

### Shadows

**Subtle Shadow:**
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
```

**Medium Shadow:**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

**Glow Effect (Primary):**
```css
box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
```

**Glow Effect (Accent):**
```css
box-shadow: 0 0 20px rgba(22, 163, 74, 0.4);
```

## UI Components

### Buttons

**Primary Button:**
- Background: Primary Blue
- Text: White
- Hover: Slightly darker primary
- Border radius: 8px
- Padding: 12px 24px

**Secondary Button:**
- Background: Transparent
- Border: 1px solid border color
- Text: Foreground
- Hover: Subtle background

**Button States:**
- Default
- Hover (slight background change)
- Active (pressed state)
- Disabled (reduced opacity)
- Loading (with spinner)

### Cards

- Background: Card color with 50% opacity
- Backdrop blur: Medium
- Border: 1px solid border color
- Hover: Border changes to primary color at 50% opacity
- Border radius: 12px
- Padding: 24px

### Forms

**Input Fields:**
- Background: Input color
- Border: 1px solid border color
- Focus: Border becomes primary color
- Border radius: 8px
- Padding: 12px

**Labels:**
- Font size: 14px
- Font weight: 500
- Margin bottom: 4px

## Animation Guidelines

### Timing

**Duration:**
- Fast: 150ms (micro-interactions)
- Medium: 300ms (standard transitions)
- Slow: 500ms (page transitions)

**Easing:**
- Default: cubic-bezier(0.4, 0, 0.2, 1)
- Entrance: cubic-bezier(0, 0, 0.2, 1)
- Exit: cubic-bezier(0.4, 0, 1, 1)

### Animation Types

**Fade:**
- Entrance: opacity 0 → 1
- Exit: opacity 1 → 0

**Slide:**
- Up: translateY(20px) → translateY(0)
- Down: translateY(-20px) → translateY(0)

**Scale:**
- Entrance: scale(0.95) → scale(1)

**Glow Pulse:**
- Continuous animation for important elements
- Duration: 2s
- Alternates between subtle and pronounced glow

## Iconography

**Icon Library:** Lucide React

**Icon Sizes:**
- Small: 16px
- Medium: 20px
- Large: 24px
- Extra Large: 32px

**Icon Style:**
- Stroke width: 2px
- Style: Outline/Line
- Color: Matches text color

**Common Icons:**
- Zap: Logo, speed, power
- TrendingUp: Growth, profit, success
- Shield: Security, protection
- Brain: AI, intelligence
- Globe: Global, exchanges
- BarChart: Analytics, data

## Responsive Design

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

### Mobile Considerations

- Larger touch targets (minimum 44px)
- Simplified navigation (hamburger menu)
- Stacked layouts
- Reduced motion for accessibility

## Accessibility

### Contrast Ratios

- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Focus States

All interactive elements must have visible focus indicators:
- 2px outline in primary color
- Offset: 2px

### Motion

- Respect `prefers-reduced-motion`
- Provide alternatives to animations
- Never use only motion to convey information

## Voice & Tone

### Voice Characteristics

- **Professional**: Sophisticated and credible
- **Confident**: Assured without being arrogant
- **Clear**: Technical but accessible
- **Innovative**: Forward-thinking and cutting-edge

### Tone Guidelines

**Marketing Copy:**
- Bold and aspirational
- Emphasize benefits and outcomes
- Use power words: "unlock", "harness", "maximize"

**Documentation:**
- Clear and concise
- Instructional and helpful
- Technical but approachable

**Error Messages:**
- Friendly and reassuring
- Provide clear next steps
- Never blame the user

## Usage Guidelines

### Do's

✓ Use the lightning bolt logo consistently
✓ Maintain proper spacing and hierarchy
✓ Use the defined color palette
✓ Ensure sufficient contrast
✓ Keep designs clean and uncluttered
✓ Use animations purposefully

### Don'ts

✗ Distort or reshape the logo
✗ Use colors outside the defined palette
✗ Overcrowd interfaces
✗ Use excessive animations
✗ Sacrifice readability for aesthetics
✗ Use decorative elements without purpose

## Examples

For live examples of the brand in action, visit:
- Homepage: https://nexaflow.ai
- Documentation: https://nexaflow.ai/docs
- Developer Portal: https://nexaflow.ai/developer

---

© 2025 NexaFlow AI. All rights reserved.
