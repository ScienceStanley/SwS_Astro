import { c as createAstro, a as createComponent, m as maybeRenderHead, f as addAttribute, b as renderTemplate, d as renderSlot, r as renderComponent } from '../chunks/astro/server_CfrG6S94.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B4i83Daw.mjs';
import 'clsx';
/* empty css                                         */
import { $ as $$PixelButton } from '../chunks/PixelButton_C98IQSCr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://smarterwithscience.org");
const $$PixelArt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PixelArt;
  const {
    element,
    alt = "",
    className = "",
    size = "medium",
    hover = false,
    animate = false
  } = Astro2.props;
  const sizeClass = {
    small: "pixel-icon-small",
    medium: "pixel-icon",
    large: "pixel-icon-large",
    custom: ""
  }[size];
  const classes = [
    "pixel-perfect",
    sizeClass,
    hover && "pixel-hover-glow",
    animate && "pixel-animate-in",
    className
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(`/ui-elements/${element}.png`, "src")}${addAttribute(alt, "alt")}${addAttribute(classes, "class")} loading="lazy" data-astro-cid-otynkach> `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/PixelArt.astro", void 0);

const $$Astro$1 = createAstro("https://smarterwithscience.org");
const $$PixelCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PixelCard;
  const {
    project,
    className = "",
    hover = true
  } = Astro2.props;
  const cardClasses = [
    "pixel-card",
    project && `pixel-project-card pixel-project-${project}`,
    hover && "pixel-hover-glow",
    className
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cardClasses, "class")} data-astro-cid-jmahyia6> <div class="card-content" data-astro-cid-jmahyia6> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/PixelCard.astro", void 0);

const $$Astro = createAstro("https://smarterwithscience.org");
const $$PixelUiDemo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PixelUiDemo;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pixel UI Demo - SwS Design System", "description": "Preview of the new pixel art UI elements for Smarter with Science", "data-astro-cid-5hcswsjo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-20 px-6 pixel-background" data-astro-cid-5hcswsjo> <div class="max-w-7xl mx-auto" data-astro-cid-5hcswsjo> <!-- Header --> <section class="text-center mb-16" data-astro-cid-5hcswsjo> <h1 class="text-5xl font-display font-black mb-4 gradient-text" data-astro-cid-5hcswsjo>
🎮 Pixel UI Components
</h1> <p class="text-xl text-text-secondary" data-astro-cid-5hcswsjo>
Cyberpunk-Utopian Design System Preview
</p> </section> <!-- Navigation Logo --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Navigation Logo</h2> <div class="flex items-center gap-8" data-astro-cid-5hcswsjo> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelArt", $$PixelArt, { "element": "nav-logo-pixelart", "alt": "SwS Pixel Logo", "className": "pixel-logo", "hover": true, "data-astro-cid-5hcswsjo": true })} <p class="text-sm text-text-secondary mt-2" data-astro-cid-5hcswsjo>Hover for glow effect</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> <div class="flex items-center gap-3 bg-gray-900 p-4 rounded" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelArt", $$PixelArt, { "element": "nav-logo-pixelart", "alt": "SwS Logo", "className": "pixel-logo", "data-astro-cid-5hcswsjo": true })} <span class="text-xl font-display font-bold text-primary" data-astro-cid-5hcswsjo>SwS</span> </div> <p class="text-sm text-text-secondary mt-2" data-astro-cid-5hcswsjo>In navigation context</p> </div> </div> </section> <!-- Section Divider Demo --> <div class="pixel-divider animated" data-astro-cid-5hcswsjo></div> <!-- Buttons --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Pixel Buttons</h2> <div class="flex flex-wrap gap-6" data-astro-cid-5hcswsjo> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "primary", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate`Join Discord` })} <p class="text-sm text-text-secondary mt-2" data-astro-cid-5hcswsjo>Primary Button</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "secondary", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate`Learn More` })} <p class="text-sm text-text-secondary mt-2" data-astro-cid-5hcswsjo>Secondary Button</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "primary", "disabled": true, "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate`Loading...` })} <p class="text-sm text-text-secondary mt-2" data-astro-cid-5hcswsjo>Disabled State</p> </div> </div> </section> <!-- Icons --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Pixel Icons</h2> <div class="grid grid-cols-4 gap-8 max-w-lg" data-astro-cid-5hcswsjo> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelArt", $$PixelArt, { "element": "icon-discord-pixelart", "alt": "Discord", "hover": true, "data-astro-cid-5hcswsjo": true })} <p class="text-xs text-text-secondary mt-2" data-astro-cid-5hcswsjo>Discord</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelArt", $$PixelArt, { "element": "icon-github-pixelart", "alt": "GitHub", "hover": true, "data-astro-cid-5hcswsjo": true })} <p class="text-xs text-text-secondary mt-2" data-astro-cid-5hcswsjo>GitHub</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelArt", $$PixelArt, { "element": "icon-science-pixelart", "alt": "Science Icons", "size": "large", "hover": true, "data-astro-cid-5hcswsjo": true })} <p class="text-xs text-text-secondary mt-2" data-astro-cid-5hcswsjo>Science Set</p> </div> <div class="text-center" data-astro-cid-5hcswsjo> <div class="pixel-spinner" data-astro-cid-5hcswsjo></div> <p class="text-xs text-text-secondary mt-2" data-astro-cid-5hcswsjo>Loading Spinner</p> </div> </div> </section> <!-- Progress Bar --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Progress Indicators</h2> <div class="space-y-6" data-astro-cid-5hcswsjo> <div data-astro-cid-5hcswsjo> <label class="block text-sm font-medium mb-2" data-astro-cid-5hcswsjo>DNA Analysis Progress</label> <div class="pixel-progress" style="--progress: 75%;" data-astro-cid-5hcswsjo></div> </div> <div data-astro-cid-5hcswsjo> <label class="block text-sm font-medium mb-2" data-astro-cid-5hcswsjo>Model Training</label> <div class="pixel-progress" style="--progress: 45%;" data-astro-cid-5hcswsjo></div> </div> </div> </section> <div class="pixel-divider animated" data-astro-cid-5hcswsjo></div> <!-- Project Cards --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Project Pixel Art Placeholders</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "ocean", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>Ocean ViSION</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>AI-powered marine ecosystem monitoring</p> ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "medical", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>Rare Disease AI</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>Machine learning for genetic condition identification</p> ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "quantum", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>Quantum Biology</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>Exploring quantum effects in photosynthesis</p> ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "mesh", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>Mesh Networks</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>Decentralized communication infrastructure</p> ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "vr", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>STEAM VR Labs</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>Virtual reality science education</p> ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "project": "algae", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-2" data-astro-cid-5hcswsjo>Algae Protein</h3> <p class="text-sm text-gray-300" data-astro-cid-5hcswsjo>Sustainable protein production</p> ` })} </div> </section> <div class="pixel-divider animated" data-astro-cid-5hcswsjo></div> <!-- Hero Banner Preview --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Hero Banner Integration</h2> <div class="pixel-hero-banner p-12 rounded-lg text-center" data-astro-cid-5hcswsjo> <h3 class="text-4xl font-display font-bold mb-4 text-white" data-astro-cid-5hcswsjo>
Science + Community = Exponential Impact
</h3> <p class="text-xl text-gray-200 mb-6" data-astro-cid-5hcswsjo>
Background pixel art integrates seamlessly with content
</p> ${renderComponent($$result2, "PixelButton", $$PixelButton, { "variant": "primary", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate`Join the Movement` })} </div> </section> <!-- Card Frame Demo --> <section class="mb-16" data-astro-cid-5hcswsjo> <h2 class="text-3xl font-display font-bold mb-8" data-astro-cid-5hcswsjo>Card Frames</h2> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-5hcswsjo> ${renderComponent($$result2, "PixelCard", $$PixelCard, { "className": "p-8", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold mb-4" data-astro-cid-5hcswsjo>Data Crystal Frame</h3> <p class="text-text-secondary mb-4" data-astro-cid-5hcswsjo>
This card uses pixel art frames for a retro-futuristic aesthetic
              while maintaining readability and accessibility.
</p> ${renderComponent($$result3, "PixelButton", $$PixelButton, { "variant": "secondary", "data-astro-cid-5hcswsjo": true }, { "default": ($$result4) => renderTemplate`Explore` })} ` })} ${renderComponent($$result2, "PixelCard", $$PixelCard, { "className": "p-8", "data-astro-cid-5hcswsjo": true }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold mb-4" data-astro-cid-5hcswsjo>Hover for Glow</h3> <p class="text-text-secondary mb-4" data-astro-cid-5hcswsjo>
Hover effects enhance the cyberpunk theme with subtle
              lighting animations and transforms.
</p> ${renderComponent($$result3, "PixelButton", $$PixelButton, { "variant": "primary", "data-astro-cid-5hcswsjo": true }, { "default": ($$result4) => renderTemplate`Interact` })} ` })} </div> </section> <!-- Integration Notes --> <section class="mb-16" data-astro-cid-5hcswsjo> <div class="glass-surface p-8 rounded-lg" data-astro-cid-5hcswsjo> <h2 class="text-2xl font-display font-bold mb-4" data-astro-cid-5hcswsjo>🔧 Integration Status</h2> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-5hcswsjo> <div data-astro-cid-5hcswsjo> <h3 class="text-lg font-bold mb-3 text-green-400" data-astro-cid-5hcswsjo>✅ Completed</h3> <ul class="space-y-2 text-sm" data-astro-cid-5hcswsjo> <li data-astro-cid-5hcswsjo>• Pixel art generation (18 elements)</li> <li data-astro-cid-5hcswsjo>• CSS component library</li> <li data-astro-cid-5hcswsjo>• Reusable Astro components</li> <li data-astro-cid-5hcswsjo>• Responsive scaling</li> <li data-astro-cid-5hcswsjo>• Accessibility optimizations</li> </ul> </div> <div data-astro-cid-5hcswsjo> <h3 class="text-lg font-bold mb-3 text-yellow-400" data-astro-cid-5hcswsjo>🚧 Next Steps</h3> <ul class="space-y-2 text-sm" data-astro-cid-5hcswsjo> <li data-astro-cid-5hcswsjo>• Replace navigation logo</li> <li data-astro-cid-5hcswsjo>• Update project gallery images</li> <li data-astro-cid-5hcswsjo>• Add section dividers to pages</li> <li data-astro-cid-5hcswsjo>• Integrate hero banner layers</li> <li data-astro-cid-5hcswsjo>• Update social media icons</li> </ul> </div> </div> </div> </section> <!-- Performance Notes --> <section class="mb-16" data-astro-cid-5hcswsjo> <div class="bg-gray-900 p-6 rounded-lg border border-primary/20" data-astro-cid-5hcswsjo> <h3 class="text-lg font-bold mb-3" data-astro-cid-5hcswsjo>📊 Performance Impact</h3> <div class="grid md:grid-cols-3 gap-4 text-sm" data-astro-cid-5hcswsjo> <div data-astro-cid-5hcswsjo> <div class="text-primary font-mono" data-astro-cid-5hcswsjo>+180KB</div> <div class="text-gray-400" data-astro-cid-5hcswsjo>Total image size</div> </div> <div data-astro-cid-5hcswsjo> <div class="text-secondary font-mono" data-astro-cid-5hcswsjo>18 files</div> <div class="text-gray-400" data-astro-cid-5hcswsjo>New assets added</div> </div> <div data-astro-cid-5hcswsjo> <div class="text-green-400 font-mono" data-astro-cid-5hcswsjo>Lazy loaded</div> <div class="text-gray-400" data-astro-cid-5hcswsjo>Loading strategy</div> </div> </div> </div> </section> </div> </main> ` })} `;
}, "/home/jupyter-stanley/SwS/website/astro/src/pages/pixel-ui-demo.astro", void 0);

const $$file = "/home/jupyter-stanley/SwS/website/astro/src/pages/pixel-ui-demo.astro";
const $$url = "/pixel-ui-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PixelUiDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
