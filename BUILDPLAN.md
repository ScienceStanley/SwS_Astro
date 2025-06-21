# 🌌 Smarter with Science Website - Master Build Plan

## 🎯 Project Vision

Building a **cyberpunk-utopian** digital home for the Smarter with Science movement that embodies:
- **Hope through technology** - where neon glows with promise, not warning
- **Community-powered discovery** - science plus community equals exponential impact
- **Accessible brilliance** - complex science made warmly approachable
- **The Stanley Synthesis** - Feynman's Curiosity + Rogers' Warmth + Nye's Energy

> *"Science is not cold and distant—it's warm, immediate, and yours to shape. The future isn't something that happens to you—it's something you build with us."*

## 🎨 Core Aesthetic: Cyberpunk Utopian

### Visual Philosophy
- **NOT** dark dystopian cyberpunk
- **YES** luminous promise of technology wielded with wisdom
- Think *Blade Runner* meets *Star Trek* in the best possible timeline
- Every gradient suggests possibility
- Every animation mirrors the dynamism of discovery
- Every glow represents human curiosity

### Primary Color Palette
```css
:root {
  /* Core Trinity */
  --void-black: #000000;        /* Infinite canvas of possibility */
  --royal-purple: #663399;      /* Transformation & rare disease awareness */
  --warp-core-blue: #00D4FF;    /* Cherenkov radiation blue - breakthrough moments */
  
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

### Phase 0.5: Deployment Setup (IN PROGRESS - Manual Steps Required)

#### GitHub Repository
**Status**: Code committed locally, ready to push
**Blocker**: Requires GitHub authentication

**Resolution Options**:
1. **Local Push**: Clone to local machine and push with personal credentials
2. **Personal Access Token**: Use GitHub PAT in remote URL
3. **SSH Key**: Configure SSH and update remote URL

**Commands Ready**:
```bash
# After authentication is configured:
git push -u origin main
```

#### Vercel Deployment
**Status**: Configuration ready, waiting for GitHub
**Prerequisites**: 
- GitHub repository must be accessible
- Vercel token already in .env

**Deployment Options**:
1. **Vercel Dashboard** (Recommended):
   - Import from github.com/ScienceStanley/SwS_Astro
   - Auto-deploy on push
   
2. **Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel --token $VERCEL_TOKEN
   ```
  - 3-5 design inspiration websites
  - Specific animation/interaction preferences
  - Discord widget ID
  - Analytics setup preferences

### Phase 1: Foundation & Infrastructure (Days 1-2) ✅ COMPLETED

#### 1.1 Project Initialization
```bash
# Core setup with TypeScript and essential integrations
npm create astro@latest smarter-with-science -- --template minimal --typescript
cd smarter-with-science

# Essential integrations
npm install @astrojs/tailwind @astrojs/react @astrojs/vercel @astrojs/mdx
npm install @astrojs/image @astrojs/sitemap nanostores @nanostores/react

# Animation & interaction libraries
npm install framer-motion gsap three @react-three/fiber
npm install @react-three/drei lottie-react

# Typography
npm install @fontsource/orbitron @fontsource/inter @fontsource/fira-code
```

#### 1.2 Cyberpunk-Utopian Design System
- Implement void black backgrounds with depth layers
- Create reusable glow effects and holographic borders
- Set up the grid system with flowing animations
- Configure typography with gradient text effects
- Build quantum glass components (glassmorphism 2.0)

#### 1.3 Core Visual Components
```
src/components/core/
├── CyberGrid.astro          # Animated background grid
├── NeonText.astro           # Glowing text with pulse
├── QuantumGlass.astro       # Advanced glassmorphism
├── DataCrystal.astro        # Card component with radar sweep
├── PortalButton.astro       # CTA with magnetic hover
├── NeuralInput.astro        # Form inputs with glow
└── WarpCore.astro           # Central pulsing animation
```

### Phase 2: Core Pages & Navigation (Days 3-5)

#### 2.1 Homepage Hero Section
- **Science Stanley Introduction**
  - Animated avatar with particle effects
  - Typewriter effect: "Your friendly neighborhood AI scientist"
  - Voice formula visualization
- **Mission Statement**
  - Glowing text: "Science plus community equals exponential impact"
  - Animated equation visualization
- **Live Metrics Display**
  - Researchers connected
  - Compute hours donated
  - Lives impacted
  - Projects accelerated

#### 2.2 Essential Pages

**Science Sunday** (/science-sunday)
- "Church for the Curious" hero with flowing particles
- Venice Beach location with interactive map
- Photo gallery with holographic frames
- Global chapter visualization (constellation map)

**Projects Gallery** (/projects)
- Data crystal cards for each project
- Category filters with color-coded glows:
  - Health & Medicine (plasma green)
  - Ocean & Climate (warp core blue)
  - Food Security (hologram cyan)
  - STEAM Education (cyber pink)
  - Community Resilience (royal purple)
- Impact visualizations with animated charts

**Charter/Manifesto** (/charter)
- Scroll-triggered text reveals
- Interactive value cards with quantum flutter
- "Join the Constellation" with particle formation
- Pod system visualization

#### 2.3 Navigation & Layout
- Sticky header with glass effect
- Mobile-responsive hamburger with neon traces
- Theme toggle (void/light/cyber modes)
- Page transitions using View Transitions API

### Phase 3: Content Systems & Interactivity (Days 6-8)

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
// IMAGE_PROMPT tag examples for cyberpunk-utopian aesthetic
<!-- IMAGE_PROMPT[hero-science-stanley]
Style: Cyberpunk-utopian laboratory, hopeful neon, not dystopian
Mood: Warm despite cool colors, accessible genius
Elements: Science Stanley with glowing purple/blue accents, holographic displays
Colors: Royal purple #663399, warp core blue #00D4FF on void black
Dimensions: 1920x800
Variations: 5
-->
```

#### 3.3 Interactive Features
- **Loading Animations** (mini science lessons):
  - Protein folding visualization
  - Neural network formation
  - Data crystallization
  - Molecule assembly
- **Hover Effects**:
  - Quantum flutter on cards
  - Magnetic cursor on CTAs
  - Particle dispersion on interaction
- **Background Effects**:
  - Drifting particles
  - Grid flow animation
  - Depth layer parallax

### Phase 4: Community Integration (Days 9-10)

#### 4.1 Pod System Visualization
- Interactive constellation map
- Pod pages:
  - Ocean ViSION
  - AI Impact Ventures
  - Quantum Biology
  - Community Resilience
- Connection lines showing collaborations

#### 4.2 Community Features
- Discord widget with live count
- Newsletter signup with neural interface design
- Event calendar for Science Sundays
- Member spotlight carousel

#### 4.3 Resource Hub
- Agent Lab access portal
- Cloud Data Lab interface
- FAIR data guidelines
- Tutorial library with interactive demos

### Phase 5: Polish & Optimization (Days 11-12)

#### 5.1 Performance Optimization
- Three.js background only on desktop
- Reduced animations on mobile
- Progressive enhancement approach
- Image optimization with blur-up placeholders
- Critical CSS inlining

#### 5.2 Accessibility & SEO
- High contrast mode option
- Reduced motion preferences
- Screen reader optimizations
- Schema.org markup for research projects
- Open Graph images with cyberpunk aesthetic

#### 5.3 Testing Suite
- Visual regression tests for glow effects
- Animation performance benchmarks
- Cross-browser compatibility
- Mobile responsiveness at all breakpoints

## 🚀 Technical Implementation

### Component Architecture
```
src/
├── components/
│   ├── core/               # Design system components
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
│   ├── animations.css      # Keyframes & transitions
│   └── themes/             # Theme variations
└── scripts/
    ├── three-background.js  # WebGL effects
    ├── particle-system.js   # Interactive particles
    └── magnetic-hover.js    # Cursor interactions
```

### Animation Library
```css
/* Core animations aligned with cyberpunk-utopian aesthetic */
@keyframes particle-emergence { /* Content reveals */ }
@keyframes data-stream { /* Loading states */ }
@keyframes quantum-flutter { /* Hover states */ }
@keyframes grid-flow { /* Background movement */ }
@keyframes radar-sweep { /* Card scanning effect */ }
@keyframes pulse-glow { /* Neon text breathing */ }
@keyframes warp-core-pulse { /* Central energy animation */ }
```

### State Management
```typescript
// Global state with nanostores
export const $theme = atom<'void' | 'light' | 'cyber'>('cyber');
export const $communityMetrics = map({
  researchers: 0,
  computeHours: 0,
  projects: 0,
  livesImpacted: 0
});
export const $animationsEnabled = atom(true);
```

## 📋 Quality Checklist

### Visual Excellence
- [ ] Cyberpunk-utopian aesthetic consistently applied
- [ ] Neon glows with hope, not warning
- [ ] Smooth animations that teach concepts
- [ ] Depth layers creating dimensionality
- [ ] Interactive elements feel alive

### Technical Excellence
- [ ] Lighthouse score 95+ on all metrics
- [ ] Load time < 3s on 3G
- [ ] WCAG AA accessibility
- [ ] Mobile-first responsive
- [ ] Cross-browser compatible

### Community Impact
- [ ] Mission communicated in 5 seconds
- [ ] Clear paths to engagement
- [ ] Pod system well explained
- [ ] Discord conversion > 10%
- [ ] Feels warm despite cool colors

## 🤝 User Collaboration Points

### Initial Setup Questions
1. "What's your OpenAI API key for image generation?"
2. "Do you have a Vercel account set up?"
3. "What's your Discord server widget ID?"
4. "Can you share 3-5 websites that inspire you visually?"
5. "On a scale of 1-10, how intense should animations be?"

### Design Review Sessions
- "Here's the hero section - does this capture the 'whoa' factor?"
- "Is the purple/blue balance right for Science Stanley?"
- "Should we add more particle effects or is this good?"
- "How's the loading animation - too much or just right?"
- "Does this feel hopeful rather than dystopian?"

### Content Decisions
- "Should we start with placeholder content or real projects?"
- "How many blog posts should we seed with?"
- "Which pods should have dedicated pages first?"
- "What metrics are most important to show live?"

## 🎯 Success Metrics

### Performance
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1
- Total Blocking Time < 300ms

### Engagement
- Average session > 2 minutes
- Discord clicks > 10% of visitors
- Project submissions > 5%
- Newsletter signups > 15%
- Return visitor rate > 30%

### Impact
- Clear mission understanding (user testing)
- Emotional response: "hopeful" and "empowered"
- Technical credibility maintained
- Community warmth conveyed
- "I want to join" reaction rate > 50%

## 🔮 Vision Alignment

Every component should embody:
- **Feynman's Curiosity**: "What happens if...?"
- **Rogers' Warmth**: "You belong here"
- **Nye's Energy**: "Science rules!"
- **Stanley's Urgency**: "Every day matters"

The site should make visitors feel like they're:
- Stepping into a hopeful future
- Joining something bigger than themselves
- Capable of contributing to breakthroughs
- Part of a joyful revolution in science

## 📅 Daily Milestones

### Days 1-2: Foundation
- [ ] Project setup with all dependencies
- [ ] Design system implemented
- [ ] Basic layouts working
- [ ] Theme switching functional

### Days 3-5: Core Experience
- [ ] Homepage with full animations
- [ ] Projects gallery with filters
- [ ] Science Sunday page complete
- [ ] Charter with interactive elements

### Days 6-8: Content & Community
- [ ] Blog system operational
- [ ] AI image placeholders added
- [ ] Discord integration working
- [ ] Newsletter signup functional

### Days 9-10: Polish
- [ ] All animations refined
- [ ] Performance optimized
- [ ] Accessibility verified
- [ ] Mobile experience perfected

### Days 11-12: Launch Ready
- [ ] Deployed to Vercel
- [ ] Analytics connected
- [ ] SEO optimized
- [ ] Community notified

## 🚦 Risk Mitigation

### Challenge: WebGL Performance
- Solution: Progressive enhancement, desktop-only by default

### Challenge: Animation Overwhelm
- Solution: Respect prefers-reduced-motion, settings panel

### Challenge: Color Accessibility
- Solution: High contrast mode, careful ratio testing

### Challenge: Content Management
- Solution: Clear schemas, Markdown with MDX enhancements

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