# 🚀 Smarter with Science Website Build Plan

> Living document tracking the development of the SwS website from concept to launch

## 📅 Last Updated: December 23, 2024

### 🎨 Recent Achievements (December 22-23)
- ✅ Implemented Studio Ghibli-style pixel art UI components
- ✅ Created and integrated pixel art banner with Science Stanley character
- ✅ Applied NeoDiv cyberpunk theme with dark backgrounds and neon accents
- ✅ Fixed Vercel deployment issues (switched from server to static output)
- ✅ Applied space.jpg background across all major pages
- ✅ Simplified homepage layout per requirements
- ✅ Created comprehensive pixel art component library

### 🎯 Next Session Objectives

#### 1. Navigation System Enhancement
- [ ] Complete responsive navigation with pixel art styling
- [ ] Add animated mobile menu with pixel transitions
- [ ] Implement breadcrumb navigation for deeper pages
- [ ] Create sticky header with blur effect
- [ ] Add search functionality with pixel art search icon

#### 2. Content Development
- [ ] Build out Science Sunday page with event details
- [ ] Create Projects gallery with real project data
- [ ] Implement blog system with markdown support
- [ ] Add team/about section with pixel avatars
- [ ] Create resources page with downloadable assets

#### 3. Interactive Features
- [ ] Discord widget integration with live member count
- [ ] Newsletter signup with pixel art form styling
- [ ] Event calendar for Science Sunday
- [ ] Project submission form
- [ ] Interactive pod system visualization

#### 4. Animation Polish
- [ ] Add page transition animations
- [ ] Implement scroll-triggered animations
- [ ] Create loading states with pixel art spinners
- [ ] Add hover effects for all interactive elements
- [ ] Implement particle effects for special sections

#### 5. Performance Optimization
- [ ] Optimize image loading with lazy loading
- [ ] Implement service worker for offline support
- [ ] Add PWA capabilities
- [ ] Optimize font loading
- [ ] Reduce JavaScript bundle size

#### 6. AI Image Generation
- [ ] Complete image generation workflow documentation
- [ ] Generate remaining UI assets (icons, backgrounds)
- [ ] Create project showcase images
- [ ] Generate team avatars in Ghibli style
- [ ] Create social media preview images

## 🎯 Project Vision

Building a **cyberpunk-utopian** digital home for the Smarter with Science movement that embodies:
- **Hope through technology** - where neon glows with promise, not warning
- **Community-powered discovery** - science plus community equals exponential impact
- **Accessible brilliance** - complex science made warmly approachable
- **The Stanley Synthesis** - Feynman's Curiosity + Rogers' Warmth + Nye's Energy

> *"Science is not cold and distant—it's warm, immediate, and yours to shape. The future isn't something that happens to you—it's something you build with us."*

## 🎨 Core Aesthetic: Cyberpunk Utopian + Ghibli Pixel Art

### Visual Philosophy
- **NOT** dark dystopian cyberpunk
- **YES** luminous promise of technology wielded with wisdom
- Think *Blade Runner* meets *Star Trek* meets *Studio Ghibli*
- Every gradient suggests possibility
- Every animation mirrors the dynamism of discovery
- Every glow represents human curiosity
- Pixel art adds warmth and accessibility

### Primary Color Palette
```css
:root {
  /* Core Trinity */
  --void-black: #000000;        /* Infinite canvas of possibility */
  --royal-purple: #663399;      /* Transformation & rare disease awareness */
  --warp-core-blue: #00D4FF;    /* Cherenkov radiation blue - breakthrough moments */
  
  /* NeoDiv Integration */
  --neon-cyan: #00ffff;         /* Electric accent */
  --electric-teal: #00d4aa;     /* Secondary accent */
  
  /* Secondary */
  --cyber-pink: #FF00FF;        /* Accent highlights */
  --plasma-green: #00FF88;      /* Success states */
  --hologram-cyan: #00FFFF;     /* Interactive elements */
  
  /* Signature Gradients */
  --neural-gradient: linear-gradient(135deg, #663399 0%, #00D4FF 100%);
  --singularity-gradient: radial-gradient(circle, #00D4FF 0%, #663399 50%, #000000 100%);
}
```

## 🏗️ Development Phases

### Phase 0: Pre-Build Setup & Planning ✅ COMPLETED
- [x] Review all context documents
- [x] Create comprehensive build plan
- [x] Create CLAUDE.md for future sessions
- [x] Gather from user:
  - [x] OpenAI API key for image generation (secured in .env)
  - [x] Vercel deployment configuration (token in .env)
- [x] Set up development environment

### Phase 1: Foundation & Design System ✅ COMPLETED

#### Completed
- [x] Project setup with Astro + TypeScript
- [x] Cyberpunk-utopian design system
- [x] Core layout components
- [x] Homepage hero section
- [x] Basic navigation structure
- [x] Git repository initialized
- [x] Studio Ghibli pixel art integration
- [x] NeoDiv dark theme implementation
- [x] Pixel art component library
- [x] Vercel deployment (static mode)

#### Recently Added Components
- [x] GhibliPixelBanner component with animated elements
- [x] PixelArtButton with multiple variants
- [x] PixelArtCard for content display
- [x] PixelDivider with animation patterns
- [x] Space background integration

### Phase 2: Core Pages & Content 🚧 IN PROGRESS

#### Completed
- [x] Homepage layout simplification
- [x] Charter page with space background
- [x] Projects page structure

#### In Progress
- [ ] Science Sunday page content
- [ ] Blog system implementation
- [ ] Resources page
- [ ] Get Involved page

#### UI Components Completed
- [x] Pixel art banner with Science Stanley
- [x] Button components with pixel styling
- [x] Card components with corner crystals
- [x] Animated dividers
- [x] Space-themed backgrounds

### Phase 3: Content Systems & Interactivity (Upcoming)

#### 3.1 Blog System ("In the Lab")
- Categories with color coding:
  - Research Updates (warp core blue)
  - Community Spotlights (plasma green)
  - Technical Deep Dives (royal purple)
  - Impact Stories (hologram cyan)
- Reading progress indicator (data stream)
- Author cards with Science Stanley variations

#### 3.2 AI Image Generation Pipeline
```javascript
// IMAGE_PROMPT tag examples for cyberpunk-utopian + Ghibli aesthetic
<!-- IMAGE_PROMPT[hero-science-stanley]
Style: Studio Ghibli pixel art, cyberpunk-utopian laboratory, hopeful neon
Mood: Warm despite cool colors, accessible genius, magical realism
Elements: Science Stanley with glowing purple/blue accents, floating molecules
Colors: Royal purple #663399, warp core blue #00D4FF, electric teal #00d4aa
Dimensions: 1920x800
Variations: 5
-->
```

### Phase 4: Community Integration (Upcoming)

#### 4.1 Pod System Visualization
- Interactive constellation map with pixel art nodes
- Pod pages:
  - Ocean ViSION
  - AI Impact Ventures
  - Quantum Biology
  - Community Resilience
- Connection lines showing collaborations

#### 4.2 Community Features
- Discord widget with live count
- Newsletter signup with pixel art interface
- Event calendar for Science Sundays
- Member spotlight carousel

### Phase 5: Polish & Optimization (Upcoming)

#### 5.1 Performance Optimization
- Image optimization with pixelated rendering
- Progressive enhancement approach
- Critical CSS inlining
- Static site benefits leveraged

#### 5.2 Accessibility & SEO
- High contrast mode option
- Reduced motion preferences
- Screen reader optimizations
- Schema.org markup for research projects
- Open Graph images with pixel art aesthetic

## 🚀 Technical Architecture

### Stack
- Framework: Astro 4.x (Static Output Mode)
- Styling: Tailwind CSS + Custom CSS + Pixel Art Styles
- Interactivity: React + Framer Motion + CSS Animations
- 3D: Three.js (planned)
- State: Nanostores
- Deployment: Vercel (Static Site)
- Image Generation: OpenAI DALL-E 3

### Recent Technical Decisions
- Switched to static output for Vercel compatibility
- Implemented CSS-based pixel art for performance
- Used image-rendering: pixelated for crisp pixel art
- Created modular component system for reusability

### Component Architecture
```
src/
├── components/
│   ├── core/               # Design system components
│   ├── ui/                 # Pixel art UI components
│   ├── layout/             # Header, Footer, Navigation
│   ├── home/               # Homepage sections
│   ├── projects/           # Project gallery & cards
│   ├── blog/               # Blog components
│   ├── community/          # Discord, newsletter, events
│   └── effects/            # Particles, animations, WebGL
├── layouts/
│   ├── BaseLayout.astro    # Global layout with theme
│   ├── BlogLayout.astro    # Blog post wrapper
│   └── PodLayout.astro     # Pod page template
├── pages/
│   ├── index.astro         # Homepage
│   ├── science-sunday.astro
│   ├── projects/
│   ├── charter.astro
│   ├── blog/
│   ├── pods/               # Individual pod pages
│   ├── resources.astro
│   └── get-involved.astro
├── styles/
│   ├── global.css          # Base styles & resets
│   ├── cyberpunk.css       # Core aesthetic
│   ├── neodev-theme.css    # NeoDiv dark theme
│   ├── pixel-ui.css        # Pixel art styles
│   └── animations.css      # Keyframes & transitions
└── scripts/
    ├── image-generator.js   # AI image workflow
    ├── particle-system.js   # Interactive particles
    └── magnetic-hover.js    # Cursor interactions
```

## 📋 Success Metrics

- [ ] Lighthouse score 95+ on all pages
- [ ] WCAG AA compliance
- [x] Page load < 3 seconds (achieved with static site)
- [x] Mobile responsive at all breakpoints
- [ ] Discord conversion > 10%
- [x] "Hopeful" and "exciting" user feedback
- [x] Unique pixel art aesthetic successfully implemented
- [x] Fast deployment times with static generation

## 🎮 Pixel Art Asset Status

### Generated Images
- [x] Studio Ghibli banner (banner-ghibli-sws-1.png)
- [x] Primary button variations
- [x] Secondary button variations
- [x] Icon set for navigation
- [x] Card frame designs

### CSS-Based Components
- [x] GhibliPixelBanner with animations
- [x] Pixel art buttons with hover states
- [x] Animated dividers (wave, zigzag, data, simple)
- [x] Corner crystals for cards
- [x] Data stream effects

## 🤝 User Collaboration Points

### Design Review Questions
- "Does the pixel art style capture the warmth we want?"
- "Is the balance between cyberpunk and Ghibli working?"
- "Should we add more animated elements or keep it minimal?"
- "How's the dark theme - too dark or just right?"

### Content Decisions
- "Which projects should we feature first?"
- "What blog posts should we start with?"
- "Which pods need dedicated pages immediately?"
- "What metrics are most important to show?"

## 🌟 Remember the Mission

We're not just building a website. We're creating:
- A digital embodiment of Science Stanley's vision
- A portal where science meets community
- A catalyst for breakthrough acceleration
- A home for the curious and committed

Every pixel should pulse with purpose. Every interaction should inspire action. Every page should prove that science plus community equals exponential impact.

**"Your curiosity could spark the next breakthrough."**

---

*This build plan is our north star. Let's build something that makes people say "whoa" and immediately want to join our mission.*