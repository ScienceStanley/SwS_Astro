# Astro Framework Mastery Guide for Smarter with Science

## Core Astro Development Patterns & Best Practices

### 1. **Component Architecture Philosophy**

#### Component Types & When to Use Them

```astro
<!-- Static Component (.astro) - Use for content that doesn't change -->
<!-- src/components/StaticHero.astro -->
---
const { title, subtitle } = Astro.props;
---
<section class="hero">
  <h1>{title}</h1>
  <p>{subtitle}</p>
</section>

<!-- Interactive Component - Use client directive for hydration -->
<!-- src/components/InteractiveChart.astro -->
---
import Chart from './Chart.jsx';
---
<Chart client:visible data={researchMetrics} />
```

**Client Directives Best Practices**:
- `client:load` - Critical interactive elements (navigation menus)
- `client:idle` - Important but not immediate (comment sections)
- `client:visible` - Below-the-fold components (data visualizations)
- `client:media` - Responsive components (mobile-only features)
- `client:only` - Skip SSR entirely (real-time dashboards)

#### Component Composition Patterns

```astro
<!-- Slot-based composition for maximum flexibility -->
<!-- src/components/ScienceCard.astro -->
---
const { gradient = 'purple-blue' } = Astro.props;
---
<article class={`science-card gradient-${gradient}`}>
  <slot name="icon" />
  <div class="content">
    <slot name="title" />
    <slot />
  </div>
  <slot name="actions" />
</article>
```

### 2. **Performance Optimization Strategies**

#### Image Optimization Pipeline

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/science-stanley-hero.jpg';
---

<!-- Automatic format conversion and responsive images -->
<Image 
  src={heroImage}
  alt="Science Stanley in the lab"
  widths={[400, 800, 1200, 1600]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  format="avif"
  quality={85}
  loading="eager"
  class="hero-image"
/>
```

#### Asset Optimization Checklist
- [ ] Use Astro's Image component for all images
- [ ] Implement progressive image loading for galleries
- [ ] Configure image CDN for production (Cloudinary/Imgix)
- [ ] Use WebP/AVIF with fallbacks
- [ ] Implement blur-up placeholders for hero images

#### Critical CSS & Font Loading

```astro
<!-- src/layouts/BaseLayout.astro -->
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <!-- Preload critical fonts -->
  <link rel="preload" href="/fonts/science-display.woff2" as="font" crossorigin>
  
  <!-- Inline critical CSS -->
  <style is:inline>
    /* Critical path CSS for above-the-fold content */
    :root {
      --color-black: #000000;
      --color-purple: #663399;
      --color-cyber-blue: #0066CC;
    }
    
    body {
      margin: 0;
      background: var(--color-black);
      color: white;
    }
    
    .hero {
      min-height: 100vh;
      display: grid;
      place-items: center;
    }
  </style>
  
  <!-- Async load non-critical styles -->
  <link rel="stylesheet" href="/styles/animations.css" media="print" onload="this.media='all'">
  
  <ViewTransitions />
</head>
```

### 3. **Content Collections & Data Management**

#### Advanced Content Collection Setup

```typescript
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default('Science Stanley'),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    tags: z.array(z.string()),
    category: z.enum(['research', 'community', 'impact', 'technical']),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),
    relatedProjects: z.array(z.string()).optional(),
    scientificField: z.string().optional(),
    impactMetrics: z.object({
      peopleHelped: z.number().optional(),
      researchAccelerated: z.string().optional(),
      computeHoursSaved: z.number().optional()
    }).optional()
  })
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['health', 'climate', 'education', 'community', 'food']),
    status: z.enum(['active', 'completed', 'planning']),
    featured: z.boolean().default(false),
    thumbnail: z.string(),
    gallery: z.array(z.string()).optional(),
    description: z.string(),
    impact: z.string(),
    timeline: z.object({
      start: z.date(),
      end: z.date().optional()
    }),
    team: z.array(z.object({
      name: z.string(),
      role: z.string(),
      avatar: z.string().optional()
    })),
    links: z.object({
      website: z.string().optional(),
      github: z.string().optional(),
      paper: z.string().optional(),
      demo: z.string().optional()
    }),
    metrics: z.record(z.string(), z.number()).optional()
  })
});

export const collections = { blog, projects };
```

#### Dynamic Content Loading Patterns

```astro
---
// src/pages/projects/[category]/[page].astro
import { getCollection } from 'astro:content';
import type { GetStaticPaths } from 'astro';

export const getStaticPaths: GetStaticPaths = async ({ paginate }) => {
  const projects = await getCollection('projects');
  const categories = ['health', 'climate', 'education', 'community', 'food'];
  
  return categories.flatMap(category => {
    const categoryProjects = projects
      .filter(p => p.data.category === category)
      .sort((a, b) => b.data.featured ? 1 : -1);
    
    return paginate(categoryProjects, {
      params: { category },
      pageSize: 12
    });
  });
};
---
```

### 4. **State Management & Interactivity**

#### Nano Stores for Global State

```typescript
// src/stores/scienceStore.ts
import { atom, map, computed } from 'nanostores';

// User preferences
export const $theme = atom<'dark' | 'light' | 'cyber'>('cyber');
export const $animationsEnabled = atom(true);

// Live metrics
export const $communityMetrics = map({
  activeResearchers: 0,
  computeHoursDonated: 0,
  projectsActive: 0,
  livesImpacted: 0
});

// Computed values
export const $impactScore = computed($communityMetrics, metrics => {
  return Math.round(
    metrics.activeResearchers * 10 +
    metrics.computeHoursDonated * 0.1 +
    metrics.projectsActive * 100 +
    metrics.livesImpacted * 1000
  );
});

// Actions
export function updateMetrics(newMetrics: Partial<typeof $communityMetrics>) {
  $communityMetrics.setKey('activeResearchers', newMetrics.activeResearchers || 0);
}
```

#### React Integration for Complex UI

```jsx
// src/components/ProjectDashboard.jsx
import { useStore } from '@nanostores/react';
import { $communityMetrics, $theme } from '../stores/scienceStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDashboard({ projects }) {
  const metrics = useStore($communityMetrics);
  const theme = useStore($theme);
  
  return (
    <motion.div 
      className={`dashboard theme-${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence mode="wait">
        {projects.map(project => (
          <motion.article
            key={project.id}
            layout
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            className="project-card"
          >
            {/* Project content */}
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
```

### 5. **Advanced Styling Architecture**

#### CSS Architecture with Tailwind + Custom Properties

```css
/* src/styles/global.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer base {
  :root {
    /* Semantic color tokens */
    --color-primary: theme('colors.purple.600');
    --color-secondary: theme('colors.blue.600');
    --color-accent: theme('colors.orange.500');
    
    /* Fluid typography scale */
    --fluid-min-width: 320;
    --fluid-max-width: 1440;
    --fluid-min-size: 16;
    --fluid-max-size: 20;
    --fluid-min-ratio: 1.2;
    --fluid-max-ratio: 1.333;
    
    /* Animation tokens */
    --transition-base: 250ms ease-out;
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    --spring-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  /* Cyber theme overrides */
  [data-theme="cyber"] {
    --color-primary: #ff00ff;
    --color-secondary: #00ffff;
    --gradient-cyber: linear-gradient(135deg, #ff00ff, #00ffff);
  }
}

@layer components {
  .gradient-border {
    @apply relative overflow-hidden rounded-lg;
    
    &::before {
      content: '';
      @apply absolute inset-0 p-[2px] -z-10;
      background: var(--gradient-cyber);
      mask: linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }
  }
  
  .glow-effect {
    filter: drop-shadow(0 0 20px currentColor);
    transition: filter var(--transition-base);
    
    &:hover {
      filter: drop-shadow(0 0 40px currentColor);
    }
  }
}

@layer utilities {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
}
```

#### Dynamic Theming System

```astro
---
// src/components/ThemeProvider.astro
---
<script>
  // Theme management with persistence
  const themes = ['dark', 'light', 'cyber'];
  const savedTheme = localStorage.getItem('sws-theme') || 'cyber';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Listen for theme changes
  window.addEventListener('theme-change', (e) => {
    const newTheme = e.detail.theme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sws-theme', newTheme);
    
    // Trigger animations on theme change
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 500);
  });
</script>

<style>
  :global(.theme-transitioning *) {
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
</style>
```

### 6. **Testing Strategies**

#### Unit Testing Components

```typescript
// tests/components/ProjectCard.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import ProjectCard from '../src/components/ProjectCard.astro';

test('ProjectCard renders with correct data', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ProjectCard, {
    props: {
      title: 'Ocean ViSION',
      category: 'climate',
      impact: '50000 data points collected'
    }
  });
  
  expect(result).toContain('Ocean ViSION');
  expect(result).toContain('climate');
  expect(result).toContain('50000 data points');
});
```

#### E2E Testing with Playwright

```typescript
// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SwS Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  
  test('should navigate to Science Sunday page', async ({ page }) => {
    await page.click('text=Science Sunday');
    await expect(page).toHaveURL('/science-sunday');
    await expect(page.locator('h1')).toContainText('Church for the Curious');
  });
  
  test('should filter projects by category', async ({ page }) => {
    await page.goto('/projects');
    await page.click('[data-category="health"]');
    
    const projects = page.locator('.project-card');
    const count = await projects.count();
    
    for (let i = 0; i < count; i++) {
      const category = await projects.nth(i).getAttribute('data-project-category');
      expect(category).toBe('health');
    }
  });
  
  test('should handle theme switching', async ({ page }) => {
    const themeToggle = page.locator('[data-theme-toggle]');
    
    // Start in cyber theme
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'cyber');
    
    // Switch to light theme
    await themeToggle.click();
    await page.locator('text=Light').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    
    // Verify persistence
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});
```

#### Performance Testing

```typescript
// tests/performance/lighthouse.test.ts
import { test, expect } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test('Homepage performance metrics', async ({ page, browserName }) => {
  if (browserName !== 'chromium') {
    test.skip();
  }
  
  await page.goto('/');
  
  const result = await playAudit({
    page,
    thresholds: {
      performance: 90,
      accessibility: 95,
      'best-practices': 90,
      seo: 90,
      pwa: 80,
    },
    reports: {
      formats: {
        html: true,
        json: true,
      },
    },
  });
  
  expect(result.lhr.categories.performance.score * 100).toBeGreaterThan(90);
});
```

### 7. **Cloud Deployment & Infrastructure**

#### Multi-Environment Configuration

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

const SITE_URL = process.env.SITE_URL || 'https://smarterwithscience.org';

export default defineConfig({
  site: SITE_URL,
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      customPages: ['https://smarterwithscience.org/api/projects.json'],
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'animation-vendor': ['framer-motion', 'gsap'],
            'utility-vendor': ['date-fns', 'nanoid'],
          },
        },
      },
    },
  },
});
```

#### GitHub Actions CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20'
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: |
          npm run test:unit
          npm run test:e2e
      
      - name: Build
        run: npm run build
        
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/projects
            http://localhost:3000/science-sunday
          uploadArtifacts: true
          temporaryPublicStorage: true

  deploy-preview:
    needs: test
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel Preview
        run: |
          npm i -g vercel@latest
          vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
          vercel build --token=${{ secrets.VERCEL_TOKEN }}
          vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    needs: test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel Production
        run: |
          npm i -g vercel@latest
          vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
          vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
          vercel deploy --prod --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```

#### Edge Function Examples

```typescript
// api/metrics.ts - Edge function for live metrics
export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  const metrics = await fetch('https://api.smarterwithscience.org/metrics', {
    headers: {
      'Authorization': `Bearer ${process.env.METRICS_API_KEY}`,
    },
    next: { revalidate: 60 }, // Cache for 1 minute
  });
  
  const data = await metrics.json();
  
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}
```

### 8. **Iterative Development Process with User**

#### Interactive Design Refinement Workflow

```markdown
## Design Iteration Protocol

### 1. Initial Review Session
- Deploy preview URL to Vercel
- Screen share with user for live feedback
- Use browser DevTools to make real-time CSS adjustments
- Document all feedback in structured format

### 2. Style Variation Testing
Ask user to:
- Provide 3-5 inspiration websites
- Share mood boards or color palettes
- Describe emotional response goals
- Identify specific interactions they love

### 3. A/B Testing Components
Create variant components:
\```astro
<!-- ComponentA.astro -->
<div class="hero-variant-a">...</div>

<!-- ComponentB.astro -->
<div class="hero-variant-b">...</div>

<!-- Usage -->
{import.meta.env.VARIANT === 'B' ? <ComponentB /> : <ComponentA />}
\```

### 4. Progressive Enhancement Questions
During each review, ask:
- "How does this feel on mobile?"
- "Is the loading experience smooth?"
- "Do the animations enhance or distract?"
- "Is the information hierarchy clear?"
- "What would make you say 'wow'?"

### 5. Performance Impact Review
After each iteration:
- Run Lighthouse audit
- Check bundle size impact
- Verify accessibility scores
- Test on throttled connection
```

#### Feature Flag System for Testing

```typescript
// src/utils/features.ts
export const features = {
  newNavigation: import.meta.env.PUBLIC_FEATURE_NEW_NAV === 'true',
  animatedCharts: import.meta.env.PUBLIC_FEATURE_ANIMATED_CHARTS === 'true',
  aiChatbot: import.meta.env.PUBLIC_FEATURE_AI_CHATBOT === 'true',
  advancedSearch: import.meta.env.PUBLIC_FEATURE_ADVANCED_SEARCH === 'true',
};

// Usage in components
---
import { features } from '../utils/features';
---

{features.newNavigation ? (
  <NewNavigation />
) : (
  <ClassicNavigation />
)}
```

#### Visual Regression Testing

```typescript
// tests/visual/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  const pages = ['/', '/projects', '/science-sunday', '/charter'];
  const viewports = [
    { width: 375, height: 667 },  // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];
  
  for (const page of pages) {
    for (const viewport of viewports) {
      test(`${page} at ${viewport.width}x${viewport.height}`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(page);
        await page.waitForLoadState('networkidle');
        
        await expect(page).toHaveScreenshot({
          fullPage: true,
          animations: 'disabled',
        });
      });
    }
  }
});
```

### 9. **Extension & Plugin Development**

#### Custom Astro Integration

```typescript
// integrations/science-metrics/index.ts
import type { AstroIntegration } from 'astro';

export default function scienceMetrics(): AstroIntegration {
  return {
    name: 'science-metrics',
    hooks: {
      'astro:config:setup': ({ config, command, injectScript }) => {
        if (command === 'build') {
          injectScript(
            'page',
            `
            // Track science engagement metrics
            window.trackScienceEngagement = (action, data) => {
              if (window.gtag) {
                gtag('event', action, {
                  event_category: 'science_engagement',
                  ...data
                });
              }
            };
            `
          );
        }
      },
      'astro:build:done': async ({ dir, routes }) => {
        // Generate metrics dashboard
        const metrics = routes.map(route => ({
          path: route.pathname,
          type: route.type,
        }));
        
        await fs.writeFile(
          path.join(dir.pathname, 'metrics.json'),
          JSON.stringify(metrics, null, 2)
        );
      },
    },
  };
}
```

#### Custom Remark Plugin for Science Content

```javascript
// plugins/remark-science-terms.mjs
export default function remarkScienceTerms() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const scienceTerms = /\b(DNA|RNA|GPU|AI|ML|FAIR)\b/g;
      
      if (scienceTerms.test(node.value)) {
        const parts = node.value.split(scienceTerms);
        const newNodes = [];
        
        parts.forEach((part, i) => {
          if (part) newNodes.push({ type: 'text', value: part });
          
          if (i < parts.length - 1) {
            newNodes.push({
              type: 'html',
              value: `<abbr class="science-term" title="${getDefinition(matches[i])}">${matches[i]}</abbr>`
            });
          }
        });
        
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
```

### 10. **Production Monitoring & Optimization**

#### Real User Monitoring Setup

```typescript
// src/layouts/BaseLayout.astro
---
const isProduction = import.meta.env.PROD;
---

{isProduction && (
  <script>
    // Web Vitals monitoring
    import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
    
    function sendToAnalytics(metric) {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        page: window.location.pathname,
      });
      
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/metrics', body);
      }
    }
    
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  </script>
)}
```

#### Error Boundary Implementation

```jsx
// src/components/ErrorBoundary.jsx
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    if (window.Sentry) {
      window.Sentry.captureException(error, {
        contexts: {
          react: { componentStack: errorInfo.componentStack }
        }
      });
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong with this experiment</h2>
          <p>Science is about learning from failures. We're on it!</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

### 11. **Continuous Improvement Checklist**

```markdown
## Weekly Design Review Checklist

### Performance
- [ ] Run Lighthouse audits on all main pages
- [ ] Check Core Web Vitals in real user data
- [ ] Review bundle size trends
- [ ] Audit third-party script impact

### Accessibility
- [ ] Keyboard navigation test
- [ ] Screen reader testing with NVDA/JAWS
- [ ] Color contrast verification
- [ ] Focus indicator visibility

### Design Consistency
- [ ] Component visual regression tests passing
- [ ] Design tokens properly applied
- [ ] Responsive breakpoints working
- [ ] Animation performance smooth

### User Feedback Integration
- [ ] Review user session recordings
- [ ] Analyze heatmaps for UX issues
- [ ] Check form completion rates
- [ ] Monitor error rates

### Content Updates
- [ ] Blog posts optimized for SEO
- [ ] Project galleries loading efficiently
- [ ] Video content properly compressed
- [ ] Image alt texts descriptive

### Security
- [ ] Dependencies updated
- [ ] Security headers configured
- [ ] CSP policy appropriate
- [ ] API keys properly secured
```

### 12. **Advanced Interactive Features**

#### WebGL Background with Three.js

```astro
---
// src/components/CyberBackground.astro
---
<canvas id="cyber-bg"></canvas>

<script>
  import * as THREE from 'three';
  
  class CyberBackground {
    constructor() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('cyber-bg'),
        alpha: true,
        antialias: true,
      });
      
      this.init();
    }
    
    init() {
      // Particle system for cyberpunk effect
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      
      for (let i = 0; i < 5000; i++) {
        vertices.push(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );
      }
      
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      
      const material = new THREE.PointsMaterial({
        color: 0x6633ff,
        size: 2,
        blending: THREE.AdditiveBlending,
      });
      
      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);
      
      this.camera.position.z = 500;
      this.animate();
    }
    
    animate() {
      requestAnimationFrame(() => this.animate());
      
      this.particles.rotation.x += 0.0005;
      this.particles.rotation.y += 0.001;
      
      this.renderer.render(this.scene, this.camera);
    }
  }
  
  // Initialize only on desktop for performance
  if (window.innerWidth > 1024) {
    new CyberBackground();
  }
</script>

<style>
  #cyber-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
  }
</style>
```

## Final Implementation Notes

This comprehensive guide provides the agentic system with deep knowledge of Astro best practices, testing strategies, deployment patterns, and iterative development processes. The system should use these patterns to build a robust, performant, and visually stunning website that embodies Science Stanley's vision while maintaining technical excellence.

Remember to:
1. Start with performance budgets and stick to them
2. Test on real devices early and often
3. Prioritize accessibility from the beginning
4. Use progressive enhancement for complex features
5. Maintain a balance between "wow factor" and usability
6. Document decisions for future contributors
7. Celebrate both technical achievements and community impact

The goal is not just to build a website, but to create a digital experience that accelerates scientific discovery through community power - making every visitor feel they could contribute to the next breakthrough.