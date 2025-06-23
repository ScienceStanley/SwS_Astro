import { a as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CfrG6S94.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4i83Daw.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Projects - Accelerating Discovery Through Community";
  const pageDescription = "Explore groundbreaking research projects powered by the Smarter with Science community. From ocean conservation to quantum biology, see how collective action drives scientific breakthroughs.";
  const sampleProjects = [
    {
      id: "ocean-vision",
      title: "Ocean ViSION",
      category: "climate",
      description: "AI-powered marine ecosystem monitoring to track climate change impacts in real-time.",
      impact: "50,000+ marine species tracked",
      status: "active",
      image: "ocean-vision",
      computeHours: 2400,
      collaborators: 23
    },
    {
      id: "rare-disease-ai",
      title: "Rare Disease AI Diagnostics",
      category: "health",
      description: "Machine learning models trained on community-contributed data to identify rare genetic conditions.",
      impact: "127 conditions identified faster",
      status: "active",
      image: "rare-disease",
      computeHours: 8900,
      collaborators: 156
    },
    {
      id: "quantum-photosynthesis",
      title: "Quantum Biology Lab",
      category: "food",
      description: "Exploring quantum effects in photosynthesis to develop more efficient solar panels and crops.",
      impact: "3x efficiency improvement",
      status: "active",
      image: "quantum-bio",
      computeHours: 1200,
      collaborators: 34
    },
    {
      id: "community-mesh",
      title: "Resilience Mesh Networks",
      category: "resilience",
      description: "Decentralized communication infrastructure for disaster response and community coordination.",
      impact: "15 communities connected",
      status: "planning",
      image: "mesh-network",
      computeHours: 450,
      collaborators: 89
    },
    {
      id: "steam-vr",
      title: "STEAM VR Labs",
      category: "education",
      description: "Virtual reality experiences that make complex scientific concepts tangible and exciting.",
      impact: "10,000+ students engaged",
      status: "active",
      image: "steam-vr",
      computeHours: 600,
      collaborators: 45
    },
    {
      id: "algae-protein",
      title: "Algae Protein Revolution",
      category: "food",
      description: "Engineering algae strains for sustainable, high-yield protein production.",
      impact: "90% less water usage",
      status: "active",
      image: "algae-protein",
      computeHours: 3200,
      collaborators: 67
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-2hwget37": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-screen flex items-center justify-center overflow-hidden neodev-hero" data-astro-cid-2hwget37> <div class="hero-content text-center" data-astro-cid-2hwget37> <h1 class="text-6xl font-display font-bold mb-6 text-gradient" data-astro-cid-2hwget37>
Projects Gallery
</h1> <p class="text-2xl mb-4 text-ghibli" data-astro-cid-2hwget37>
Where Community Meets Discovery
</p> <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8" data-astro-cid-2hwget37>
Every project here represents a collision of curiosity and capability. Explore how 
        your compute hours, expertise, and passion are accelerating breakthroughs across 
        every field of science.
</p> </div> </section>  <div class="pixel-divider animated" data-astro-cid-2hwget37></div>  <section class="py-20 px-6" style="background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);" data-astro-cid-2hwget37> <div class="max-w-7xl mx-auto" data-astro-cid-2hwget37> <div class="neodev-grid neodev-grid-3" data-astro-cid-2hwget37> ${sampleProjects.map((project) => renderTemplate`<div class="neodev-card" data-astro-cid-2hwget37> <h3 class="text-2xl font-display font-bold mb-4 text-gradient" data-astro-cid-2hwget37>${project.title}</h3> <p class="text-text-secondary mb-4" data-astro-cid-2hwget37>${project.description}</p> <div class="text-sm text-primary mb-2" data-astro-cid-2hwget37>${project.impact}</div> <div class="text-xs text-text-tertiary" data-astro-cid-2hwget37> ${project.collaborators} collaborators • ${project.computeHours.toLocaleString()} GPU hours
</div> </div>`)} </div> </div> </section>  <section class="cta-section" data-astro-cid-2hwget37> <div class="container" data-astro-cid-2hwget37> <div class="cta-card quantum-glass" data-astro-cid-2hwget37> <div class="cta-content" data-astro-cid-2hwget37> <h2 class="cta-title" data-astro-cid-2hwget37>Have a Breakthrough Idea?</h2> <p class="cta-description" data-astro-cid-2hwget37>
We provide the compute power, operational support, and community connections 
            to turn your research vision into reality. No red tape, no barriers—just science.
</p> <div class="cta-features" data-astro-cid-2hwget37> <div class="feature" data-astro-cid-2hwget37> <div class="feature-icon warp-core-mini" data-astro-cid-2hwget37></div> <span data-astro-cid-2hwget37>Free GPU Hours</span> </div> <div class="feature" data-astro-cid-2hwget37> <div class="feature-icon warp-core-mini" data-astro-cid-2hwget37></div> <span data-astro-cid-2hwget37>Expert Mentorship</span> </div> <div class="feature" data-astro-cid-2hwget37> <div class="feature-icon warp-core-mini" data-astro-cid-2hwget37></div> <span data-astro-cid-2hwget37>Global Community</span> </div> </div> <a href="/start-project" class="portal-button magnetic" data-astro-cid-2hwget37> <span data-astro-cid-2hwget37>Start Your Project</span> <div class="button-glow" data-astro-cid-2hwget37></div> </a> </div> <div class="cta-visual" data-astro-cid-2hwget37> <div class="rotating-helix" data-astro-cid-2hwget37></div> </div> </div> </div> </section> ` })}  ${renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/src/pages/projects/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jupyter-stanley/SwS/website/astro/src/pages/projects/index.astro", void 0);

const $$file = "/home/jupyter-stanley/SwS/website/astro/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
