# Prompt for Claude-Code: Building the Smarter with Science Website

## Project Overview

You are tasked with building a website for **Smarter with Science (SwS)**, a community-powered scientific discovery initiative founded by Stanley Bishop (Science Stanley). This website will serve as the digital home for a global movement that accelerates scientific research through community collaboration, computational resources, and open science principles.

## Core Context & Brand Identity

### About Science Stanley & Smarter with Science

**Science Stanley** is an AI scientist and impact venture builder living with a partially undiagnosed rare disease. His personal experience drives the urgency behind SwS - a movement that ensures computational resources and community support are never barriers to scientific discovery.

**The Stanley Voice Formula**: Feynman's Curiosity + Rogers' Warmth + Nye's Energy = Science Stanley

**Core Mission**: Science plus community equals exponential impact. SwS provides full-stack support for researchers: computational infrastructure, operational assistance, and promotional amplification.

### Visual Identity & Design Requirements

**Primary Brand Colors**:
- Black (primary background)
- Royal Purple (#663399) - innovation and rare disease awareness
- Cyberpunk Dark Blue (#0066CC or similar) - trust and technological depth
- Accent colors: Vitality Green (#00AA44), Community Orange (#FF6B35), Sunshine Yellow (#FFD700)

**Design Aesthetic**: Modern, scientific, sleek, sexy, cyberpunk-utopian
- Clean interfaces with plenty of breathing room
- Animated elements and micro-interactions
- Glassmorphism and modern CSS effects
- High contrast for accessibility
- Mobile-first responsive design
- Loading animations that teach mini science concepts

### Key Messaging Themes

1. **Community-Powered Discovery**: "We're turning the traditional model upside down: instead of scientists begging for resources, resources flow to scientists solving real problems."

2. **Urgency with Warmth**: "Every computational cycle matters. Every connection could catalyze a breakthrough. Every day we waste is a day someone doesn't get back."

3. **Joyful Science**: "If we're not having fun saving the world, we're doing it wrong."

## Website Structure & Pages

### 1. **Homepage** (index.astro)
- Hero section with animated Science Stanley introduction
- Concise SwS mission statement
- Visual navigation cards to main sections
- Live project counter/impact metrics
- Call-to-action for joining the community

### 2. **Science Sunday** (/science-sunday)
- Event details: KINN Venice, 1-5pm Sundays
- "Church for the Curious" concept explanation
- Photo gallery of past gatherings
- Sign-up/RSVP functionality
- Global chapter information

### 3. **Projects Gallery** (/projects)
- Visual grid/masonry layout of active projects
- Filter by category: Health & Medicine, Ocean & Climate, Food Security, STEAM Education, Community Resilience
- Each project card shows: visual, title, brief description, impact metrics
- Click-through to project details or external sites
- "Start a Project" CTA

### 4. **Charter/Manifesto** (/charter)
- Full SwS Charter display with engaging typography
- Animated section transitions
- Key quotes highlighted
- Interactive elements for community values
- "Join the Constellation" CTA

### 5. **In the Lab Blog** (/blog)
- Science Stanley's research notes, interviews, insights
- Categories: Research Updates, Community Spotlights, Technical Deep Dives, Impact Stories
- Rich media support (videos, interactive visualizations)
- Comment/discussion integration

### 6. **Resources** (/resources)
- Discord community link with live member count
- Agent Lab and Cloud Data Lab access
- Educational materials and tutorials
- FAIR data guidelines
- Developer documentation

### 7. **Additional Recommended Pages**:
- **About** (/about) - Science Stanley's story and SwS origin
- **Impact** (/impact) - Real-time metrics, success stories, patient testimonials
- **Get Involved** (/get-involved) - Multiple pathways for contribution
- **Partners** (/partners) - Supporter recognition and partnership opportunities

## Technical Implementation Requirements

### File Structure
```
smarter-with-science/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ImpactMetrics.astro
│   │   │   └── NavigationCards.astro
│   │   ├── projects/
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectGrid.astro
│   │   │   └── CategoryFilter.astro
│   │   └── common/
│   │       ├── AnimatedSection.astro
│   │       ├── CallToAction.astro
│   │       └── LoadingAnimation.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── science-sunday.astro
│   │   ├── projects/
│   │   ├── charter.astro
│   │   ├── blog/
│   │   ├── resources.astro
│   │   ├── about.astro
│   │   ├── impact.astro
│   │   └── get-involved.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── animations/
├── public/
│   ├── fonts/
│   └── og-images/
├── astro.config.mjs
├── package.json
├── README.md
├── CLAUDE.md
└── tsconfig.json
```

### README.md Content Structure
1. Project title and tagline
2. Quick start instructions
3. Project structure overview
4. Development guidelines
5. Deployment instructions
6. Contributing guidelines
7. SwS community links

### CLAUDE.md Content Requirements

The CLAUDE.md file should include:

1. **Project Context Summary**
   - SwS mission and values
   - Science Stanley brand voice
   - Target audiences and their needs

2. **Design System Documentation**
   - Color palette with hex codes and usage
   - Typography scale and font choices
   - Component patterns and variations
   - Animation and interaction guidelines

3. **Content Guidelines**
   - Science Stanley voice examples
   - Technical term translations
   - Inclusive language standards
   - SEO optimization practices

4. **Astro-Specific Best Practices**
   ```
   - Use .astro components for static content
   - Implement partial hydration for interactive elements
   - Optimize images with Astro's Image component
   - Use content collections for blog and projects
   - Implement proper meta tags and OG images
   - Set up RSS feed for blog
   - Configure sitemap generation
   ```

5. **Interactive Development Process**
   ```
   When building this site, regularly:
   1. Ask user to test current implementation
   2. Request inspiration websites for specific features
   3. Get feedback on color/style/animation choices
   4. Iterate based on user testing
   5. Optimize for performance and accessibility
   ```

6. **Component Development Patterns**
   - Start with semantic HTML
   - Add Tailwind classes for styling
   - Implement animations with CSS/JS
   - Ensure keyboard navigation
   - Test on multiple devices

7. **Quality Checklist**
   - [ ] Mobile-responsive on all pages
   - [ ] WCAG AA accessibility compliance
   - [ ] Page load under 3 seconds
   - [ ] SEO meta tags on all pages
   - [ ] Open Graph images configured
   - [ ] Analytics integration ready
   - [ ] Form submissions functional
   - [ ] Error pages designed

## Implementation Strategy

### Phase 1: Foundation
1. Set up Astro project with TypeScript
2. Create base layouts and global styles
3. Implement navigation and responsive header/footer
4. Set up content collections for blog and projects

### Phase 2: Core Pages
1. Build homepage with hero and navigation cards
2. Create Science Sunday page with event details
3. Implement projects gallery with filtering
4. Display charter with engaging typography

### Phase 3: Content & Interactivity
1. Set up blog with markdown support
2. Add project detail pages
3. Implement interactive elements and animations
4. Create resources hub

### Phase 4: Polish & Optimize
1. Add micro-interactions and loading states
2. Optimize images and implement lazy loading
3. Set up meta tags and OG images
4. Performance optimization
5. Accessibility audit and fixes

## Key Features to Implement

1. **Animated Science Concepts**: Loading animations that teach (protein folding, neural networks, etc.)
2. **Live Community Metrics**: Real-time display of active researchers, compute hours donated, lives impacted
3. **Project Impact Visualizations**: Interactive charts showing research acceleration
4. **Community Voice Integration**: Rotating quotes from researchers, patients, community members
5. **Dark/Light Mode Toggle**: With cyberpunk themes for both
6. **Newsletter Signup**: Integrated with community platform
7. **Event Calendar**: For Science Sundays and other gatherings
8. **Search Functionality**: Across blog posts and projects

## Design Inspiration Instructions

When starting the project, ask the user to provide:
1. 3-5 websites they admire for visual design
2. 2-3 sites with good scientific/technical aesthetics
3. Examples of effective community websites
4. Specific animation or interaction examples they like
5. Any brand materials or mood boards

## Success Metrics

The website should:
- Communicate SwS mission within 5 seconds
- Convert 10%+ of visitors to Discord community
- Showcase project impact compellingly
- Feel scientifically credible yet warmly approachable
- Load quickly even on slower connections
- Be fully accessible to users with disabilities
- Rank well for "community science" and related terms

## Remember

This website is the digital embodiment of Science Stanley's vision: where cutting-edge science meets community warmth, where complex ideas become accessible adventures, and where every visitor feels they could contribute to the next breakthrough. Build with joy, iterate with purpose, and always ask: "Would this make someone say 'whoa' and want to join our mission?"