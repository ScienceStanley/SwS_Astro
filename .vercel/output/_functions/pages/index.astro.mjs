import { c as createAstro, a as createComponent, m as maybeRenderHead, f as addAttribute, u as unescapeHTML, b as renderTemplate, r as renderComponent, e as renderScript } from '../chunks/astro/server_DSpow1EJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_qwI1wpVh.mjs';
import { $ as $$PixelButton } from '../chunks/PixelButton_ClwXKW3-.mjs';
import { $ as $$GhibliPixelBanner, a as $$GhibliProjectCard } from '../chunks/GhibliPixelBanner_C31-NFfZ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://smarterwithscience.org");
const $$NeoDevCodeBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NeoDevCodeBlock;
  const {
    code = "",
    language = "javascript",
    title = "science_discovery.js",
    animated = true,
    className = ""
  } = Astro2.props;
  const defaultCode = `// \u{1F9EC} Smarter with Science - Discovery Engine
import { DNA, Community, Impact } from '@sws/core';

const discovery = async () => {
  const researchers = await Community.connect();
  const problems = await researchers.identifyProblems();
  
  for (const problem of problems) {
    const solution = await DNA.sequence(problem);
    const impact = await solution.deploy();
    
    console.log(\`\u{1F4A1} Breakthrough: \${impact.livesChanged} lives improved\`);
  }
  
  return "Science + Community = Exponential Impact";
};

discovery().then(result => {
  console.log(\`\u2728 \${result}\`);
});`;
  const displayCode = code || defaultCode;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`neodev-code-block ${className}`, "class")} data-astro-cid-ibspkhhx> ${title && renderTemplate`<div class="code-header" data-astro-cid-ibspkhhx> <div class="window-controls" data-astro-cid-ibspkhhx> <span class="control close" data-astro-cid-ibspkhhx></span> <span class="control minimize" data-astro-cid-ibspkhhx></span> <span class="control maximize" data-astro-cid-ibspkhhx></span> </div> <span class="file-name" data-astro-cid-ibspkhhx>${title}</span> <span class="language-badge" data-astro-cid-ibspkhhx>${language}</span> </div>`} <div class="code-content" data-astro-cid-ibspkhhx> <div class="line-numbers" data-astro-cid-ibspkhhx> ${displayCode.split("\n").map((_, index) => renderTemplate`<span class="line-number" data-astro-cid-ibspkhhx>${index + 1}</span>`)} </div> <pre class="code-text" data-astro-cid-ibspkhhx><code data-astro-cid-ibspkhhx>${unescapeHTML(displayCode)}</code></pre> ${animated && renderTemplate`<div class="typing-cursor animate-code-cursor" data-astro-cid-ibspkhhx>|</div>`} </div> <div class="code-stats" data-astro-cid-ibspkhhx> <span class="stat" data-astro-cid-ibspkhhx> <span class="stat-icon" data-astro-cid-ibspkhhx>🧬</span> <span class="stat-text" data-astro-cid-ibspkhhx>DNA Sequences: 1,247</span> </span> <span class="stat" data-astro-cid-ibspkhhx> <span class="stat-icon" data-astro-cid-ibspkhhx>⚡</span> <span class="stat-text" data-astro-cid-ibspkhhx>GPU Hours: 24.7K</span> </span> <span class="stat" data-astro-cid-ibspkhhx> <span class="stat-icon" data-astro-cid-ibspkhhx>🌍</span> <span class="stat-text" data-astro-cid-ibspkhhx>Lives Impacted: 47K</span> </span> </div> </div> `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/NeoDevCodeBlock.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen relative" data-astro-cid-j7pv25f6> <!-- Hero Section --> ${renderComponent($$result2, "GhibliPixelBanner", $$GhibliPixelBanner, { "variant": "hero", "className": "neodev-hero", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`       <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" style="transform: translate(30%, 30%)" data-astro-cid-j7pv25f6></div> </div>  <div class="relative z-10 text-center px-6 max-w-5xl mx-auto" data-astro-cid-j7pv25f6> <!-- Science Stanley Introduction --> <div class="mb-8 animate-particle-emergence" data-astro-cid-j7pv25f6> <h1 class="text-5xl md:text-7xl font-display font-black mb-4" data-astro-cid-j7pv25f6> <span class="gradient-text" data-astro-cid-j7pv25f6>Smarter with Science</span> </h1> <p class="text-xl md:text-2xl text-text-secondary font-light" data-astro-cid-j7pv25f6>
Your friendly neighborhood AI scientist here
</p> </div> <!-- Mission Statement --> <div class="mb-12 animate-particle-emergence animation-delay-200" data-astro-cid-j7pv25f6> <h2 class="text-2xl md:text-4xl font-display font-bold text-white mb-4" data-astro-cid-j7pv25f6>
Science + Community = Exponential Impact
</h2> <p class="text-lg md:text-xl text-text-tertiary max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
We're turning the traditional model upside down: instead of scientists begging for resources, 
            resources flow to scientists solving real problems.
</p> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center animate-particle-emergence animation-delay-400" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PixelButton", $$PixelButton, { "variant": "primary", "href": "/get-involved", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Join the Movement
` })} ${renderComponent($$result3, "PixelButton", $$PixelButton, { "variant": "secondary", "href": "/projects", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Explore Projects
` })} </div> <!-- Live Metrics Preview --> <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-particle-emergence animation-delay-600" data-astro-cid-j7pv25f6> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-primary" data-astro-cid-j7pv25f6>1,247</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Active Researchers</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-secondary" data-astro-cid-j7pv25f6>2.4M</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>GPU Hours Donated</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-primary" data-astro-cid-j7pv25f6>89</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Active Projects</div> </div> <div class="glass p-4 rounded-lg hover-glow transition-all" data-astro-cid-j7pv25f6> <div class="text-3xl font-display font-bold text-secondary" data-astro-cid-j7pv25f6>47K</div> <div class="text-sm text-text-secondary" data-astro-cid-j7pv25f6>Lives Impacted</div> </div> </div> </div>  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-j7pv25f6> <svg width="30" height="50" viewBox="0 0 30 50" class="text-primary opacity-40" data-astro-cid-j7pv25f6> <rect x="10" y="10" width="10" height="20" rx="5" stroke="currentColor" stroke-width="1" fill="none" data-astro-cid-j7pv25f6></rect> <circle cx="15" cy="20" r="2" fill="currentColor" class="animate-data-stream" data-astro-cid-j7pv25f6></circle> </svg> </div> ` })} <!-- Code Demo Section --> <section class="py-20 px-6 bg-gradient-to-b from-bg-primary to-bg-secondary" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-display text-center mb-12 text-gradient" data-astro-cid-j7pv25f6>
How Science Gets Smarter
</h2> ${renderComponent($$result2, "NeoDevCodeBlock", $$NeoDevCodeBlock, { "title": "discovery_engine.js", "language": "javascript", "animated": true, "data-astro-cid-j7pv25f6": true })} </div> </section> <!-- Section Divider --> ${renderComponent($$result2, "GhibliPixelBanner", $$GhibliPixelBanner, { "variant": "divider", "height": "80px", "data-astro-cid-j7pv25f6": true })} <!-- Quick Navigation --> <section class="py-20 px-6" data-astro-cid-j7pv25f6> <!-- IMAGE_PROMPT[navigation-section-bg]
      Style: Subtle abstract constellation pattern, very dark and minimal
      Mood: Mysterious, expansive, guiding
      Elements: Faint constellation lines connecting distant stars, subtle purple glow at connection points, mostly dark space
      Colors: Background #101010, very faint purple #a476ff lines (10% opacity), tiny green #A9FF5B star points
      Dimensions: 1920x800
      Variations: 2
      --> <div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-display text-center mb-12 gradient-text" data-astro-cid-j7pv25f6>
Explore the Constellation
</h2> <div class="neodev-grid neodev-grid-3" data-astro-cid-j7pv25f6> <!-- Featured Projects --> ${renderComponent($$result2, "GhibliProjectCard", $$GhibliProjectCard, { "title": "Ocean ViSION", "description": "AI-powered marine ecosystem monitoring to track climate change impacts in real-time", "category": "ocean", "impact": "50,000+ marine species tracked", "status": "active", "collaborators": 23, "computeHours": 2400, "href": "/projects/ocean-vision", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "GhibliProjectCard", $$GhibliProjectCard, { "title": "Rare Disease AI", "description": "Machine learning models trained on community data to identify rare genetic conditions", "category": "medical", "impact": "127 conditions identified faster", "status": "active", "collaborators": 156, "computeHours": 8900, "href": "/projects/rare-disease-ai", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "GhibliProjectCard", $$GhibliProjectCard, { "title": "Quantum Biology Lab", "description": "Exploring quantum effects in photosynthesis to develop efficient solar panels", "category": "quantum", "impact": "3x efficiency improvement", "status": "active", "collaborators": 34, "computeHours": 1200, "href": "/projects/quantum-bio", "data-astro-cid-j7pv25f6": true })} <!-- Navigation Cards --> <a href="/science-sunday" class="neodev-card ghibli-accent" data-astro-cid-j7pv25f6> <h3 class="text-2xl font-display font-bold mb-4 text-ghibli" data-astro-cid-j7pv25f6>
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
