# 🧬 CLAUDE.md - Smarter with Science Website Context

> **IMPORTANT**: This is the authoritative context file for all AI agents working on the Smarter with Science website. Read this thoroughly before making any changes or additions to the codebase.

## 🎯 Project Overview

You are working on the website for **Smarter with Science (SwS)**, a community-powered scientific discovery initiative founded by Stanley Bishop (Science Stanley). This is not just a website—it's the digital embodiment of a movement that accelerates scientific research through community collaboration, computational resources, and open science principles.

### Core Mission
**"Science plus community equals exponential impact."**

We provide full-stack support for researchers:
- 🖥️ **Computational Power**: GPU hours for researchers who need them
- 🛠️ **Operational Support**: Project management and infrastructure
- 📢 **Promotional Amplification**: Making research visible and fundable
- 🤝 **Community Integration**: Connecting researchers with those who need solutions

## 🌌 Aesthetic: Cyberpunk Utopian

### What This Means
- **NOT** dark, dystopian cyberpunk
- **YES** luminous promise of technology wielded with wisdom
- Think *Blade Runner* meets *Star Trek* in the best possible timeline
- Neon that glows with hope, not warning
- Data streams that carry cures, not surveillance

### Core Visual Identity

```css
/* Primary Palette - ALWAYS use these variables */
:root {
  --void-black: #000000;        /* Infinite possibility */
  --royal-purple: #663399;      /* Transformation & rare disease */
  --warp-core-blue: #00D4FF;    /* Breakthrough moments */
  
  /* Secondary */
  --cyber-pink: #FF00FF;
  --plasma-green: #00FF88;
  --hologram-cyan: #00FFFF;
  
  /* Signature Gradients */
  --neural-gradient: linear-gradient(135deg, #663399 0%, #00D4FF 100%);
  --singularity-gradient: radial-gradient(circle, #00D4FF 0%, #663399 50%, #000000 100%);
}
```

### Design Principles
1. **Depth through layers** - Multiple visual planes suggesting infinite depth
2. **Purposeful motion** - Every animation teaches or delights
3. **Warm despite cool colors** - Accessibility and humanity first
4. **Grid as foundation** - Organizing chaos into beauty
5. **Glow effects everywhere** - Soft bioluminescence, not harsh neon

## 🗣️ Science Stanley Voice & Brand

### The Stanley Formula
**Feynman's Curiosity + Rogers' Warmth + Nye's Energy = Science Stanley**

### Voice Characteristics
- **Opening Hook**: High-energy, Nye-style excitement
- **Exploration**: Feynman's methodical curiosity with analogies
- **Connection**: Rogers-style emotional validation
- **Personal Stakes**: "As someone living with a rare disease..."

### Language Patterns
```
DO: "Think of it like this..." [everyday analogy]
DO: "Your curiosity right there? That's what drives breakthrough science..."
DO: "Here's where it gets really interesting..."

DON'T: Use jargon without explanation
DON'T: Be condescending or overly technical
DON'T: Forget the human impact behind the science
```

## 🏗️ Technical Architecture

### Stack Overview
- **Framework**: Astro (with TypeScript)
- **Styling**: Tailwind CSS + Custom CSS for effects
- **Interactivity**: React components with Framer Motion
- **3D/WebGL**: Three.js for background effects
- **State**: Nanostores for global state
- **Deployment**: Vercel with edge functions

### Directory Structure
```
src/
├── components/
│   ├── core/           # Design system components
│   ├── layout/         # Header, Footer, Navigation
│   ├── home/           # Homepage sections
│   ├── projects/       # Project gallery components
│   ├── blog/           # Blog components
│   ├── community/      # Community features
│   └── effects/        # Animations and WebGL
├── content/
│   ├── blog/           # Markdown blog posts
│   └── projects/       # Project data
├── layouts/
│   ├── BaseLayout.astro
│   ├── BlogLayout.astro
│   └── PodLayout.astro
├── pages/
│   ├── index.astro
│   ├── science-sunday.astro
│   ├── projects/
│   ├── charter.astro
│   ├── blog/
│   ├── resources.astro
│   └── get-involved.astro
└── styles/
    ├── global.css
    ├── cyberpunk.css
    └── animations.css
```

### Core Components to Always Use

#### `<CyberGrid />` - Background grid effect
```astro
<CyberGrid opacity={0.1} animate={true} />
```

#### `<NeonText />` - Glowing text
```astro
<NeonText color="warp-core-blue" pulse={true}>
  Your text here
</NeonText>
```

#### `<DataCrystal />` - Card component
```astro
<DataCrystal category="health" hover="lift">
  <slot />
</DataCrystal>
```

#### `<PortalButton />` - Primary CTA
```astro
<PortalButton href="/get-involved" magnetic={true}>
  Join the Movement
</PortalButton>
```

## 🎨 AI Image Generation System

### How It Works
1. Add IMAGE_PROMPT tags in your code
2. Run extraction script
3. Generate variations with OpenAI
4. Select best options
5. Auto-integrate into codebase

### Prompt Format
```html
<!-- IMAGE_PROMPT[unique-id]
Style: Cyberpunk-utopian, hopeful neon, warm despite cool colors
Mood: [Emotional tone]
Elements: [Specific items to include]
Colors: Royal purple #663399, warp core blue #00D4FF, void black
Dimensions: WIDTHxHEIGHT
Variations: [number]
-->
```

### Image Categories
- **hero-***: Large banner images (1920x600+)
- **avatar-***: Character representations (512x512)
- **bg-***: Background patterns (varied sizes)
- **icon-***: Small UI elements (64x64 to 256x256)
- **viz-***: Data visualizations (800x400)

## 📝 Content Guidelines

### Page-Specific Requirements

#### Homepage
- Hero with animated Science Stanley introduction
- Live metrics (use real-time data when available)
- Clear navigation to main sections
- Immediate mission communication
- Discord CTA prominent

#### Science Sunday (/science-sunday)
- Event details: KINN Venice, 1-5pm Sundays
- "Church for the Curious" messaging
- Photo gallery from past events
- Global chapter information
- RSVP functionality

#### Projects Gallery (/projects)
- Filterable by category
- Each card shows impact metrics
- Visual distinction between categories
- "Start a Project" CTA
- Success stories highlighted

#### Charter (/charter)
- Full manifesto text (from charter.md)
- Interactive elements for values
- Scroll-triggered animations
- "Join the Constellation" CTA
- Pod system explanation

#### Blog (/blog)
- Categories clearly marked
- Author: Science Stanley variants
- Reading time estimates
- Related projects linked
- Share functionality

## 🚀 Development Workflow

### When Adding New Features
1. **Check design system first** - Use existing components
2. **Follow the aesthetic** - Cyberpunk-utopian, not dystopian
3. **Add IMAGE_PROMPT tags** - For any visual elements
4. **Test animations** - Should teach or delight, not distract
5. **Verify accessibility** - High contrast, screen reader friendly
6. **Mobile-first** - Test on small screens first

### Performance Guidelines
- Keep initial JS bundle < 100KB
- Lazy load images with blur-up placeholders
- Use Astro's partial hydration wisely
- WebGL effects only on desktop by default
- Respect prefers-reduced-motion

### Testing Checklist
- [ ] Lighthouse score 95+ on all pages
- [ ] WCAG AA compliance verified
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive at all breakpoints
- [ ] Animations smooth at 60fps
- [ ] Forms accessible via keyboard
- [ ] Error states handled gracefully

## 🔧 Common Tasks

### Adding a New Page
1. Create page file in `src/pages/`
2. Use `BaseLayout` for consistency
3. Add to navigation in `Header.astro`
4. Include proper meta tags
5. Add IMAGE_PROMPT tags for hero image
6. Test mobile layout

### Creating a Blog Post
1. Add .mdx file to `src/content/blog/`
2. Include all frontmatter fields
3. Use Science Stanley voice
4. Add related projects
5. Include impact metrics if applicable

### Adding a Project
1. Create entry in `src/content/projects/`
2. Include all required fields from schema
3. Add project imagery with proper tags
4. Link to external resources
5. Include impact metrics

## ⚡ Animation Patterns

### Core Animations (Already Defined)
```css
@keyframes particle-emergence { }  /* Content reveals */
@keyframes data-stream { }         /* Loading states */
@keyframes quantum-flutter { }     /* Hover effects */
@keyframes grid-flow { }           /* Background motion */
@keyframes pulse-glow { }          /* Neon breathing */
@keyframes warp-core-pulse { }     /* Central energy */
```

### When to Use Each
- **particle-emergence**: Important content appearing
- **data-stream**: Loading states and progress
- **quantum-flutter**: Subtle hover interactions
- **grid-flow**: Continuous background movement
- **pulse-glow**: CTAs and important text
- **warp-core-pulse**: Central focal points

## 🌍 Community Features

### Pod System
The site must clearly explain the pod structure:
- **Ocean ViSION**: Marine climate solutions
- **AI Impact Ventures**: Purpose-driven companies
- **Quantum Biology**: Open biological research
- **Community Resilience**: Rapid-response science

### Integration Points
- Discord widget (live member count)
- Newsletter signup (ConvertKit/Mailchimp)
- Event calendar (Science Sundays)
- GitHub integration (for open source)

## 🚨 Critical Rules

### NEVER
- ❌ Use dark, dystopian imagery
- ❌ Make science feel cold or inaccessible
- ❌ Forget the human impact
- ❌ Use stock photography
- ❌ Create barriers to understanding
- ❌ Implement features without mobile testing

### ALWAYS
- ✅ Lead with warmth and curiosity
- ✅ Make complex concepts approachable
- ✅ Test with real users when possible
- ✅ Credit community contributions
- ✅ Maintain the cyberpunk-utopian aesthetic
- ✅ Remember: "Every pixel pulses with purpose"

## 📊 Success Metrics

The website succeeds when:
- Mission understood within 5 seconds
- Visitors feel "I want to join this"
- Discord conversion rate > 10%
- Page load time < 3 seconds
- Accessibility score 100%
- Users describe it as "hopeful" and "exciting"

## 🔄 Deployment

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "astro"
}
```

### Environment Variables
```
OPENAI_API_KEY=             # For image generation
PUBLIC_DISCORD_WIDGET_ID=   # Discord server widget
PUBLIC_GA_MEASUREMENT_ID=   # Analytics
METRICS_API_ENDPOINT=       # Live metrics API
```

## 💡 Quick Reference

### CSS Classes You'll Use Often
```css
.cyber-grid               /* Background grid */
.neon-text               /* Glowing text */
.quantum-glass           /* Glassmorphism */
.data-crystal            /* Card styling */
.portal-button           /* Primary CTA */
.neural-input            /* Form inputs */
.floating                /* Depth animation */
.magnetic                /* Cursor interaction */
```

### Component Props Pattern
```astro
---
export interface Props {
  variant?: 'primary' | 'secondary';
  glow?: boolean;
  animate?: boolean;
  intensity?: 1 | 2 | 3 | 4 | 5;
}

const { 
  variant = 'primary',
  glow = true,
  animate = true,
  intensity = 3
} = Astro.props;
---
```

## 🎭 Final Reminders

1. **You're building a portal to the future** - Make it feel like one
2. **Science Stanley is watching** - Keep his voice consistent
3. **Community first** - Every feature should strengthen connections
4. **Performance matters** - Fast sites save lives (literally)
5. **Joy is a feature** - If it's not delightful, iterate

Remember: This website is where cutting-edge science meets community warmth, where complex ideas become accessible adventures, and where every visitor feels they could contribute to the next breakthrough.

**"Your curiosity could spark the next breakthrough."** - Science Stanley

---

## 📋 Current Project Status (June 21, 2024)

### ✅ Completed
- Astro project initialized with all integrations
- Cyberpunk-utopian design system implemented
- Homepage with full animations and effects
- Development environment running
- Git repository initialized and committed

### 🚧 Pending Manual Actions
1. **GitHub Push**: Requires authentication
2. **Vercel Deployment**: Waiting for GitHub

### 🎯 Next Priorities
1. Complete core pages (Science Sunday, Projects, Charter)
2. Build navigation and footer components
3. Implement AI image generation system
4. Add Discord integration
5. Create blog system

See `SESSION_REVIEW.md` for detailed handoff notes.

---

*Last updated: June 21, 2024 - Initial setup complete*
*Next update: After GitHub/Vercel deployment*