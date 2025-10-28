# Architecture Documentation

This document describes the technical architecture, folder structure, data flow, and routing of the NexaFlow AI website.

## Technology Stack

### Core Framework
- **Next.js 13+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **React 18**: UI library with concurrent features

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Framer Motion**: Production-ready animation library
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing

## Project Structure

```
nexaflow-ai-site/
│
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and CSS variables
│   │
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   │
│   ├── developer/
│   │   └── page.tsx            # Developer portal
│   │
│   └── docs/
│       └── page.tsx            # Documentation hub
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui base components
│   │   ├── accordion.tsx
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── ...                 # Other UI components
│   │
│   ├── navigation.tsx           # Site navigation header
│   ├── footer.tsx               # Site footer
│   ├── hero-section.tsx         # Homepage hero
│   ├── features-section.tsx     # Features showcase
│   ├── scanner-section.tsx      # Live arbitrage scanner
│   └── faq-section.tsx          # FAQ accordion
│
├── hooks/                        # Custom React hooks
│   └── use-toast.ts            # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                # Helper functions (cn, etc.)
│
├── docs/                         # GitHub documentation
│   ├── README.md
│   ├── BRAND_GUIDE.md
│   ├── ARCHITECTURE.md
│   ├── INTERACTIONS.md
│   └── API.md
│
├── public/                       # Static assets
│   └── (images, fonts, etc.)
│
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI
│
├── .env.example                  # Environment variables template
├── components.json               # shadcn/ui configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── LICENSE                      # MIT License
```

## Routing Architecture

### App Router Structure

NexaFlow AI uses Next.js 13+ App Router for file-based routing:

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage with hero, features, scanner, FAQ |
| `/contact` | `app/contact/page.tsx` | Contact form and information |
| `/developer` | `app/developer/page.tsx` | Developer portal and API overview |
| `/docs` | `app/docs/page.tsx` | Documentation hub |

### Layout Hierarchy

```
app/layout.tsx (Root Layout)
├── Metadata (SEO, Open Graph)
├── Global Styles
├── Toast Provider
└── Page Content
    ├── Navigation (on all pages)
    ├── Page-specific content
    └── Footer (on all pages)
```

## Component Architecture

### Component Hierarchy

```
Page Components
├── Navigation (Global)
├── Section Components
│   ├── HeroSection
│   ├── FeaturesSection
│   ├── ScannerSection
│   └── FAQSection
├── UI Components (shadcn/ui)
│   ├── Button
│   ├── Card
│   ├── Badge
│   ├── Accordion
│   └── Form Components
└── Footer (Global)
```

### Component Patterns

#### 1. Server Components (Default)
Most components are Server Components for optimal performance:
- Footer
- Static documentation pages
- Layout components

#### 2. Client Components ("use client")
Components requiring interactivity:
- Navigation (scroll effects, mobile menu)
- HeroSection (animations)
- FeaturesSection (scroll animations)
- ScannerSection (live data, interactions)
- FAQSection (accordion state)
- Contact page (form state)

### State Management

**Local State:**
- React useState for component-level state
- Form state in contact page
- Scanner data simulation
- Navigation menu toggle

**No Global State:**
- Currently no global state management needed
- Future: Consider Zustand or Context API for:
  - User authentication
  - Trading bot settings
  - Real-time market data

## Data Flow

### Current Implementation (Static/Mock Data)

```
Component
  ↓
Mock Data (in component)
  ↓
UI Rendering
  ↓
User Interaction
  ↓
State Update
  ↓
Re-render
```

### Future Implementation (API Integration)

```
Component Mount
  ↓
API Request (fetch/axios)
  ↓
API Response
  ↓
State Update (useState/SWR)
  ↓
UI Rendering
  ↓
Real-time Updates (WebSocket)
  ↓
State Update
  ↓
Re-render
```

## Styling Architecture

### Tailwind CSS Strategy

**Design Tokens:**
- CSS custom properties in `globals.css`
- HSL color format for easy manipulation
- Consistent spacing (8px grid system)

**Component Styling:**
```tsx
// Utility classes with conditional logic
className={`
  base-classes
  ${isActive ? 'active-classes' : 'inactive-classes'}
  hover:hover-classes
  transition-all
`}
```

**Responsive Design:**
```tsx
// Mobile-first approach
className="
  text-4xl          // Mobile
  md:text-5xl       // Tablet
  lg:text-6xl       // Desktop
"
```

### CSS Architecture

```
globals.css
├── Tailwind Directives
├── CSS Variables (Design Tokens)
│   ├── Colors (HSL)
│   ├── Spacing
│   └── Border Radius
├── Base Styles
│   └── Body, Typography
├── Utility Classes
│   └── Custom animations
└── Component-specific Styles
```

## Animation Architecture

### Framer Motion Strategy

**1. Page Entrance Animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**2. Scroll-triggered Animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

**3. Staggered Children:**
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  />
))}
```

**4. Continuous Animations:**
- CSS keyframes for performance
- Glow effects on hero elements
- Floating animations

## Performance Optimizations

### Next.js Features

**1. Automatic Code Splitting:**
- Each route automatically split
- Components lazy-loaded as needed

**2. Image Optimization:**
- Use `next/image` for automatic optimization
- WebP format with fallbacks
- Responsive images

**3. Font Optimization:**
- `next/font` for automatic font optimization
- Self-hosted fonts
- Font display: swap

### Best Practices

**1. Server Components:**
- Default to Server Components
- Only use Client Components when needed

**2. Dynamic Imports:**
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
})
```

**3. Memoization:**
```tsx
const MemoizedComponent = React.memo(Component)
```

## SEO Architecture

### Metadata Strategy

**Root Layout:**
- Default metadata
- Open Graph tags
- Twitter Card tags
- Robots directives

**Page-level Metadata:**
```tsx
export const metadata = {
  title: 'Page Title - NexaFlow AI',
  description: 'Page description',
}
```

### SEO Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Sitemap generation (planned)
- Robots.txt (planned)

## Deployment Architecture

### Vercel (Recommended)

```
GitHub Repository
  ↓ (Git Push)
Vercel Build Process
  ↓
  1. Install dependencies
  2. Run TypeScript check
  3. Run build
  4. Optimize assets
  ↓
Edge Network Deployment
  ↓
Production URL
```

### Environment Variables

**Development:**
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Production:**
```
NEXT_PUBLIC_APP_URL=https://nexaflow.ai
NEXT_PUBLIC_API_URL=https://api.nexaflow.ai/v1
```

## Build Process

### Development
```bash
npm run dev
# Starts Next.js dev server with:
# - Hot module replacement
# - Fast refresh
# - Source maps
# - TypeScript checking
```

### Production
```bash
npm run build
# Runs:
# 1. TypeScript compilation
# 2. Next.js build
# 3. Asset optimization
# 4. Static generation

npm run start
# Starts production server
```

## Security Considerations

### Current Implementation

**1. No Backend Yet:**
- Static site, no server-side secrets
- Form submissions handled client-side (demo)

**2. Dependencies:**
- Regular updates via npm
- Security audits with `npm audit`

### Future Considerations

**1. API Integration:**
- Environment variables for API keys
- Server-side API routes for sensitive operations
- HTTPS only

**2. Authentication:**
- JWT tokens
- Secure cookie storage
- CSRF protection

**3. Input Validation:**
- Zod schemas for form validation
- Sanitize user input
- Rate limiting

## Testing Strategy (Future)

### Unit Tests
```bash
# Jest + React Testing Library
npm run test
```

### E2E Tests
```bash
# Playwright or Cypress
npm run test:e2e
```

### Type Checking
```bash
npm run typecheck
```

## Monitoring & Analytics (Future)

**Performance Monitoring:**
- Vercel Analytics
- Core Web Vitals tracking

**Error Tracking:**
- Sentry integration

**User Analytics:**
- Privacy-focused analytics
- User flow analysis

## Scalability Considerations

### Current Architecture
- Static site generation where possible
- Client-side interactivity
- No backend bottlenecks

### Future Scaling
- Edge functions for API routes
- Database integration (Supabase ready)
- CDN for static assets
- Caching strategies
- Load balancing

## API Integration (Future)

### API Client Structure

```typescript
// lib/api-client.ts
export class NexaFlowAPI {
  async getOpportunities() {}
  async executeTrade() {}
  async getPerformance() {}
}
```

### WebSocket Integration

```typescript
// Real-time market data
const socket = new WebSocket('wss://api.nexaflow.ai/v1/stream')
```

## Maintenance

### Dependency Updates
```bash
# Check for updates
npm outdated

# Update all
npm update

# Update major versions
npm install package@latest
```

### Code Quality
```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Format (if using Prettier)
npm run format
```

---

© 2025 NexaFlow AI. All rights reserved.
