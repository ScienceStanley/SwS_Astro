import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_CfrG6S94.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4i83Daw.mjs';
import { $ as $$PixelButton } from '../chunks/PixelButton_C98IQSCr.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen relative" data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="relative h-screen flex items-center justify-center overflow-hidden neodev-hero" data-astro-cid-j7pv25f6> <!-- IMAGE_PROMPT[hero-banner-main]
      Style: Elegant technical minimalism, dark cyberpunk-utopian laboratory with subtle glowing elements
      Mood: Sophisticated, hopeful, scientific breakthrough moment
      Elements: Abstract neural network connections forming DNA helix shape, holographic data visualizations floating in space, subtle purple (#a476ff) and green (#A9FF5B) accent lights, deep dark background (#101010), glass-like transparent surfaces with subtle reflections
      Colors: Primary purple #a476ff, secondary green #A9FF5B, dark background #101010, minimal use of bright colors
      Dimensions: 1920x1080
      Variations: 5
      --> <!-- IMAGE_PROMPT[hero-banner-science-stanley]
      Style: Minimalist representation of an AI scientist character, elegant and approachable
      Mood: Friendly, intelligent, trustworthy guide
      Elements: Abstract humanoid silhouette made of flowing data streams and particles, holding a glowing molecule structure, purple gradient outline, transparent/glass-like body with visible neural pathways
      Colors: Purple #a476ff primary, subtle green #A9FF5B accents, mostly transparent with dark background
      Dimensions: 800x800
      Variations: 4
      --> <!-- IMAGE_PROMPT[hero-banner-community]
      Style: Abstract visualization of global scientific collaboration
      Mood: Connected, collaborative, unified in purpose
      Elements: Interconnected nodes forming a constellation pattern, each node representing a researcher or project, flowing data streams between connections, Earth globe in the center with connection points glowing
      Colors: Dark background #101010, purple #a476ff connection lines, green #A9FF5B node highlights
      Dimensions: 1920x600
      Variations: 3
      --> <!-- IMAGE_PROMPT[hero-banner-data-flow]
      Style: Living data visualization, organic flow of information
      Mood: Alive, breathing, constantly evolving
      Elements: Flowing ribbons of data that morph between DNA helixes and binary code, particle systems that form and dissolve into molecular structures, wave patterns suggesting both ocean waves and brain waves
      Colors: Gradient flows from purple #a476ff to green #A9FF5B, dark background #101010, subtle white highlights for data particles
      Dimensions: 1920x1080
      Variations: 4
      --> <!-- IMAGE_PROMPT[hero-banner-breakthrough]
      Style: The moment of scientific discovery, elegant and minimal
      Mood: Eureka moment, enlightenment, breakthrough
      Elements: Single point of light expanding into fractal patterns, suggesting both Big Bang and neural firing, crystalline structures growing from the center, subtle equations and formulas appearing in the background
      Colors: Central bright point in white, expanding into purple #a476ff fractals with green #A9FF5B edges, deep dark background
      Dimensions: 1920x1080
      Variations: 3
      --> <!-- Background Effects --> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" style="transform: translate(30%, 30%)" data-astro-cid-j7pv25f6></div> </div> <!-- Hero Content --> <div class="relative z-10 text-center px-6 max-w-5xl mx-auto" data-astro-cid-j7pv25f6> <!-- Science Stanley Introduction --> <div class="mb-8 animate-particle-emergence" data-astro-cid-j7pv25f6> <h1 class="text-5xl md:text-7xl font-display font-black mb-4" data-astro-cid-j7pv25f6> <span class="gradient-text" data-astro-cid-j7pv25f6>Smarter with Science</span> </h1> <p class="text-xl md:text-2xl text-text-secondary font-light" data-astro-cid-j7pv25f6>
Your friendly neighborhood AI scientist here
</p> </div> <!-- Mission Statement --> <div class="mb-12 animate-particle-emergence animation-delay-200" data-astro-cid-j7pv25f6> <h2 class="text-2xl md:text-4xl font-display font-bold text-white mb-4" data-astro-cid-j7pv25f6>
Science + Community = Exponential Impact
</h2> <p class="text-lg md:text-xl text-text-tertiary max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
We're turning the traditional model upside down: instead of scientists begging for resources, 
            resources flow to scientists solving real problems.
</p> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center animate-particle-emergence animation-delay-400" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "primary", "href": "/get-involved", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Join the Movement
` })} ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "secondary", "href": "/projects", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
Explore Projects
` })} </div> <!-- Live Metrics Preview --> <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-particle-emergence animation-delay-600" data-astro-cid-j7pv25f6> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-primary" data-astro-cid-j7pv25f6>1,247</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Active Researchers</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-secondary" data-astro-cid-j7pv25f6>2.4M</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>GPU Hours Donated</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-primary" data-astro-cid-j7pv25f6>89</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Active Projects</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-secondary" data-astro-cid-j7pv25f6>47K</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Lives Impacted</div> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-j7pv25f6> <svg width="30" height="50" viewBox="0 0 30 50" class="text-primary opacity-40" data-astro-cid-j7pv25f6> <rect x="10" y="10" width="10" height="20" rx="5" stroke="currentColor" stroke-width="1" fill="none" data-astro-cid-j7pv25f6></rect> <circle cx="15" cy="20" r="2" fill="currentColor" class="animate-data-stream" data-astro-cid-j7pv25f6></circle> </svg> </div> </section> <!-- Code Demo Section --> <section class="py-20 px-6" style="background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-display text-center mb-12 text-gradient" data-astro-cid-j7pv25f6>
How Science Gets Smarter
</h2> <div class="neodev-card p-8" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-mono mb-4" data-astro-cid-j7pv25f6>Discovery Engine</h3> <p class="text-text-secondary" data-astro-cid-j7pv25f6>Interactive code coming soon...</p> </div> </div> </section> <!-- Section Divider --> <div class="pixel-divider animated" data-astro-cid-j7pv25f6></div> <!-- Quick Navigation --> <section class="py-20 px-6" data-astro-cid-j7pv25f6> <!-- IMAGE_PROMPT[navigation-section-bg]
      Style: Subtle abstract constellation pattern, very dark and minimal
      Mood: Mysterious, expansive, guiding
      Elements: Faint constellation lines connecting distant stars, subtle purple glow at connection points, mostly dark space
      Colors: Background #101010, very faint purple #a476ff lines (10% opacity), tiny green #A9FF5B star points
      Dimensions: 1920x800
      Variations: 2
      --> <div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-display text-center mb-12 gradient-text" data-astro-cid-j7pv25f6>
Explore the Constellation
</h2> <div class="neodev-grid neodev-grid-3" data-astro-cid-j7pv25f6> <!-- Featured Projects - Simplified for now --> <div class="neodev-card" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-j7pv25f6>Ocean ViSION</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>AI-powered marine ecosystem monitoring to track climate change impacts in real-time</p> <div class="text-sm text-primary" data-astro-cid-j7pv25f6>50,000+ marine species tracked</div> </div> <div class="neodev-card" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-j7pv25f6>Rare Disease AI</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>Machine learning models trained on community data to identify rare genetic conditions</p> <div class="text-sm text-primary" data-astro-cid-j7pv25f6>127 conditions identified faster</div> </div> <div class="neodev-card" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-j7pv25f6>Quantum Biology Lab</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>Exploring quantum effects in photosynthesis to develop efficient solar panels</p> <div class="text-sm text-primary" data-astro-cid-j7pv25f6>3x efficiency improvement</div> </div> <!-- Navigation Cards --> <a href="/science-sunday" class="neodev-card ghibli-accent" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-ghibli" data-astro-cid-j7pv25f6>
Science Sunday
</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>
Church for the Curious - Join us every Sunday in Venice Beach for hands-on science exploration
</p> <span class="text-gradient font-mono" data-astro-cid-j7pv25f6>
Learn More →
</span> </a> <a href="/projects" class="neodev-card tech-accent" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-j7pv25f6>
All Projects
</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>
From rare disease research to ocean conservation - see how we're accelerating breakthroughs
</p> <span class="text-primary group-hover:translate-x-2 inline-block transition-transform" data-astro-cid-j7pv25f6>
Explore →
</span> </a> <a href="/charter" class="neodev-card" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-j7pv25f6>
Our Charter
</h3> <p class="text-text-secondary mb-4" data-astro-cid-j7pv25f6>
Read our manifesto for community-powered discovery and join the constellation
</p> <div class="neodev-progress mt-4" data-astro-cid-j7pv25f6> <div class="neodev-progress-bar" style="width: 85%" data-astro-cid-j7pv25f6></div> </div> <span class="text-primary font-mono mt-2 block" data-astro-cid-j7pv25f6>
Constellation Progress: 85%
</span> </a> </div> </div> </section> </main>   ${renderScript($$result2, "/home/jupyter-stanley/SwS/website/astro/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/jupyter-stanley/SwS/website/astro/src/pages/index.astro", void 0);

const $$file = "/home/jupyter-stanley/SwS/website/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
