# Interactions & Animations Documentation

This document details all animations, interactions, hover states, transitions, and dynamic behaviors implemented in the NexaFlow AI website.

## Animation Library

### Technologies Used
- **Framer Motion**: Primary animation library for React components
- **CSS Animations**: Performance-optimized continuous animations
- **Tailwind CSS**: Utility-based transitions

## Page-Level Animations

### Initial Page Load

**Hero Section Entrance:**
```tsx
// Sequential reveal animation
1. Badge fade in + scale (0.5s)
2. Heading fade in + slide up (0.8s, delay 0.2s)
3. Description fade in + slide up (0.8s, delay 0.4s)
4. Buttons fade in + slide up (0.8s, delay 0.6s)
5. Stats cards fade in + slide up (1s, delay 0.8s)
```

**Implementation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

### Scroll-Triggered Animations

**Features Section:**
- Each feature card animates independently
- Triggered when 100px into viewport
- Staggered delay (0.1s per card)
- Fade in + slide up motion

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

**Scanner Section:**
- Section header fades in on scroll
- Stats cards appear with stagger
- Opportunity cards slide in from left

**FAQ Section:**
- Section header fades in
- Accordion items animate on interaction

## Navigation Animations

### Header Scroll Behavior

**Entrance Animation:**
```tsx
initial={{ y: -100 }}    // Start above viewport
animate={{ y: 0 }}       // Slide down
```

**Scroll State Changes:**
- **At top**: Transparent background, no border
- **Scrolled**: Frosted glass effect with border
  - Background: `bg-background/80`
  - Backdrop blur: `backdrop-blur-lg`
  - Border: `border-b border-border`
  - Transition: 300ms ease

**Logo Hover:**
- Scale transform: `scale(1.1)`
- Glow intensity increase
- Duration: 200ms

**Navigation Links:**
- Underline expand on hover
- Width: 0 → 100%
- Color: Primary blue
- Height: 2px (0.5rem)
- Origin: Left
- Transition: 300ms ease

### Mobile Menu

**Menu Icon Transition:**
- Hamburger ↔ X icon
- Crossfade: 200ms

**Mobile Menu Slide:**
```tsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
```

**Menu Items:**
- Staggered fade in
- Slight slide up effect

## Hero Section Interactions

### Background Effects

**Gradient Orbs:**
- Two large circular gradients
- Continuous pulse animation
- Blur: 3xl (48px)
- Duration: 2s
- Cubic bezier easing
- Offset timing (1s delay on second orb)

```css
@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
  }
}
```

### Call-to-Action Buttons

**Primary Button:**
- Background color shift on hover
- Arrow icon slide right
- Transform: `translateX(4px)`
- Group hover effect
- Duration: 200ms

**Secondary Button:**
- Border color change
- Background subtle fill
- Duration: 200ms

### Stats Cards

**Hover Effect:**
```tsx
hover:border-primary/50    // Border color change
hover:shadow-lg            // Shadow increase
hover:shadow-primary/10    // Colored shadow
transition-colors          // Smooth transition
```

### Scroll Indicator

**Continuous Animation:**
```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

**Components:**
- Rounded container with border
- Inner dot with pulse animation
- Infinite loop
- Easing: ease-in-out

## Features Section Interactions

### Feature Cards

**Idle State:**
- Semi-transparent card background
- Subtle border
- Icon in light background

**Hover State:**
```tsx
// Card effects on hover
- border-primary/50        // Border highlight
- shadow-lg                // Shadow elevation
- shadow-primary/10        // Glow effect
- Background gradient      // Subtle gradient overlay
  opacity: 0 → 1

// Icon background
- bg-primary/10 → bg-primary/20
```

**Transition:**
- Duration: 300ms
- All properties
- Ease timing

### Icon Animation

**Icon Container:**
- Background color intensifies
- Size: 48px × 48px
- Border radius: 8px
- Transition: 300ms

## Scanner Section Interactions

### Live Stats Cards

**Real-Time Updates:**
- Number counter animation (planned)
- Fade transition between values
- Icon pulse on update

**Hover Effect:**
- Subtle scale increase
- Border color change
- Duration: 200ms

### Scan Button

**Idle State:**
- Primary background
- Icon + text

**Loading State:**
```tsx
<RefreshCw className="animate-spin" />
```
- Icon rotates continuously
- Button disabled
- Text: "Scanning..."

**Interaction Flow:**
1. Click button
2. Icon starts spinning
3. Wait 2 seconds (API simulation)
4. New data animates in
5. Button returns to idle

### Opportunity Cards

**Entrance Animation:**
```tsx
{opportunities.map((opp, index) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  />
))}
```

**Hover Effect:**
- Border color: `border-primary/50`
- Smooth transition
- Cursor: pointer (on execute button)

**Risk Badge:**
- Color-coded background and text
- Border matches risk level
- Low: Green
- Medium: Yellow
- High: Red

### Execute Button

**Hover Effect:**
- Background lightens
- Arrow icon slides right
- Transform: `translateX(2px)`
- Duration: 200ms

## FAQ Section Interactions

### Accordion Animation

**Open/Close Animation:**
- Height: auto ↔ 0
- Smooth accordion transition
- Built-in Radix UI animation
- Duration: 200ms

**Trigger Hover:**
- No underline (explicitly removed)
- Maintains consistent spacing

**Item State:**
```tsx
// Closed state
border-border

// Open state
border-primary/50
transition-colors
```

**Content Reveal:**
- Fade in with height expansion
- Text color: muted-foreground
- Padding animation

## Footer Interactions

### Social Links

**Hover Effect:**
```tsx
text-muted-foreground     // Default
hover:text-foreground     // Active
transition-colors         // Smooth
```

**Icon Transform:**
- Subtle scale: `scale(1.1)`
- Duration: 200ms

### Navigation Links

**Hover Effect:**
```tsx
text-muted-foreground
hover:text-foreground
transition-colors
```

## Form Interactions (Contact Page)

### Input Fields

**Focus State:**
```tsx
// Default
border-border

// Focus
ring-2
ring-primary
border-primary
```

**Error State:**
- Border: Red
- Ring: Red
- Error message appears below

**Success State:**
- Success toast notification
- Form reset
- Button returns to idle

### Submit Button

**States:**
1. **Idle**: "Send Message" with icon
2. **Loading**: "Sending..." (disabled)
3. **Success**: Toast notification

**Loading Animation:**
- Button disabled
- Text changes
- No spinner (simplified)

### Toast Notifications

**Appearance:**
```tsx
// Slide in from top-right
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 100 }}
```

**Auto-dismiss:**
- Duration: 3 seconds
- Fade out animation

## Card Interactions (Global)

### Standard Card Hover

**All Cards:**
```tsx
hover:border-primary/50
transition-colors
duration-300
```

**With Shadow:**
```tsx
hover:shadow-lg
hover:shadow-primary/10
```

## Link Interactions (Global)

### Text Links

**Default Style:**
```tsx
text-primary
hover:underline
```

**Navigation Links:**
- Animated underline
- Width transition

### Button Links

**Primary:**
- Background color shift
- Shadow on hover (optional)

**Secondary/Outline:**
- Border color change
- Background fill on hover

## Performance Optimizations

### CSS vs JavaScript Animations

**Use CSS for:**
- Simple continuous animations (glow, float)
- Transform/opacity changes
- Better performance, runs on GPU

**Use Framer Motion for:**
- Complex sequences
- Conditional animations
- Scroll-triggered effects
- Component mount/unmount

### Reduced Motion

**Accessibility:**
```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Implementation:**
- Respect user preferences
- Provide static fallbacks
- Maintain functionality

## Animation Timing Reference

### Duration Scale

- **Fast**: 150ms - Micro-interactions
- **Medium**: 300ms - Standard transitions
- **Slow**: 500ms - Major state changes
- **Very Slow**: 800ms+ - Page entrances

### Easing Functions

**Default (ease):**
```
cubic-bezier(0.4, 0, 0.2, 1)
```

**Entrance:**
```
cubic-bezier(0, 0, 0.2, 1)
```

**Exit:**
```
cubic-bezier(0.4, 0, 1, 1)
```

**Bounce:**
```
cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

## Stagger Patterns

### Feature Cards
- Base delay: 0
- Increment: 0.1s per card
- Total stagger: 0.8s (8 cards)

### Opportunity Cards
- Base delay: 0
- Increment: 0.1s per card
- Total stagger: 0.5s (5 cards)

## Loading States

### Skeleton Screens (Future)
- Pulse animation
- Gradient shimmer
- Shape matches content

### Spinner (Future)
- Rotate animation
- 360° continuous
- Duration: 1s

## Error States

### Form Validation
- Red border appears
- Error text fades in
- Icon shake animation (optional)

### Failed Actions
- Toast notification
- Retry button appears
- Shake animation on error

## Success States

### Form Submission
- Green toast
- Success icon
- Form reset animation

### Data Updates
- Highlight flash
- Value transition
- Color change animation

## Interactive Feedback

### Button Press
- Scale: `scale(0.95)`
- Duration: 100ms
- Returns on release

### Card Press (Mobile)
- Subtle background change
- No scale (prevents layout shift)

## Best Practices

### Do's
✓ Use hardware-accelerated properties (transform, opacity)
✓ Respect user motion preferences
✓ Provide visual feedback for all interactions
✓ Use consistent timing and easing
✓ Test animations on lower-end devices

### Don'ts
✗ Animate layout properties (width, height) when possible
✗ Use animations longer than 1 second for UI feedback
✗ Stack multiple animations that compete for attention
✗ Animate on scroll without throttling/debouncing
✗ Use animations for critical information display

## Browser Support

### Modern Browsers
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

### Fallbacks
- CSS animations degrade gracefully
- Framer Motion provides JS fallbacks
- Critical content visible without animations

---

© 2025 NexaFlow AI. All rights reserved.
