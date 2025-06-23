import { c as createAstro, a as createComponent, f as addAttribute, e as renderScript, b as renderTemplate, m as maybeRenderHead, r as renderComponent, d as renderSlot, h as renderHead } from './astro/server_CfrG6S94.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const $$Astro$2 = createAstro("https://smarterwithscience.org");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jupyter-stanley/SwS/website/astro/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro("https://smarterwithscience.org");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { label: "Science Sunday", href: "/science-sunday" },
    { label: "Projects", href: "/projects" },
    { label: "Charter", href: "/charter" },
    { label: "Blog", href: "/blog" },
    { label: "Get Involved", href: "/get-involved" }
  ];
  const { currentPath = "/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="navigation" data-nav data-astro-cid-vzcar27r> <div class="nav-container" data-astro-cid-vzcar27r> <!-- Logo/Home Link --> <a href="/" class="nav-logo magnetic" aria-label="Smarter with Science Home" data-astro-cid-vzcar27r> <div class="logo-wrapper" data-astro-cid-vzcar27r> <img src="/ui-elements/nav-logo-pixelart.png" alt="Smarter with Science Logo" class="logo-image" width="120" height="32" data-astro-cid-vzcar27r> </div> </a> <!-- Desktop Navigation --> <ul class="nav-links desktop-nav" data-astro-cid-vzcar27r> ${navItems.map((item) => renderTemplate`<li data-astro-cid-vzcar27r> <a${addAttribute(item.href, "href")}${addAttribute(["nav-link", { active: currentPath === item.href }], "class:list")} data-astro-cid-vzcar27r> <span class="link-text" data-astro-cid-vzcar27r>${item.label}</span> <span class="link-underline" data-astro-cid-vzcar27r></span> </a> </li>`)} </ul> <!-- CTA Button --> <div class="nav-cta" data-astro-cid-vzcar27r> <a href="https://discord.com/invite/smarter" class="portal-button magnetic" target="_blank" rel="noopener" data-astro-cid-vzcar27r> <span class="button-text" data-astro-cid-vzcar27r>Join Discord</span> <div class="button-glow" data-astro-cid-vzcar27r></div> </a> </div> <!-- Mobile Menu Toggle --> <button class="mobile-toggle" aria-label="Toggle navigation menu" data-mobile-toggle data-astro-cid-vzcar27r> <div class="toggle-lines" data-astro-cid-vzcar27r> <span data-astro-cid-vzcar27r></span> <span data-astro-cid-vzcar27r></span> <span data-astro-cid-vzcar27r></span> </div> </button> </div> <!-- Mobile Navigation --> <div class="mobile-nav" data-mobile-nav data-astro-cid-vzcar27r> <ul class="mobile-nav-links" data-astro-cid-vzcar27r> ${navItems.map((item) => renderTemplate`<li data-astro-cid-vzcar27r> <a${addAttribute(item.href, "href")}${addAttribute(["mobile-nav-link", { active: currentPath === item.href }], "class:list")} data-astro-cid-vzcar27r> <span class="link-text" data-astro-cid-vzcar27r>${item.label}</span> <div class="link-glow" data-astro-cid-vzcar27r></div> </a> </li>`)} <li data-astro-cid-vzcar27r> <a href="https://discord.com/invite/smarter" class="mobile-discord-link" target="_blank" rel="noopener" data-astro-cid-vzcar27r> <span data-astro-cid-vzcar27r>Join Our Discord</span> <div class="link-glow" data-astro-cid-vzcar27r></div> </a> </li> </ul> </div> </nav>  ${renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/src/components/layout/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/layout/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    discover: [
      { label: "Science Sunday", href: "/science-sunday" },
      { label: "Projects", href: "/projects" },
      { label: "Charter", href: "/charter" },
      { label: "Blog", href: "/blog" }
    ],
    community: [
      { label: "Discord", href: "https://discord.com/invite/smarter", external: true },
      { label: "GitHub", href: "https://github.com/SmarterWithScience", external: true },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Events", href: "/events" }
    ],
    pods: [
      { label: "Ocean ViSION", href: "/pods/ocean-vision" },
      { label: "AI Impact Ventures", href: "/pods/ai-impact" },
      { label: "Quantum Biology", href: "/pods/quantum-biology" },
      { label: "Community Resilience", href: "/pods/community-resilience" }
    ],
    resources: [
      { label: "Agent Lab", href: "/resources/agent-lab" },
      { label: "Cloud Data Lab", href: "/resources/cloud-lab" },
      { label: "FAIR Guidelines", href: "/resources/fair-data" },
      { label: "Get Started", href: "/get-started" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-35ed7um5> <div class="footer-bg" data-astro-cid-35ed7um5> <div class="grid-overlay" data-astro-cid-35ed7um5></div> <div class="particle-field" data-astro-cid-35ed7um5></div> </div> <div class="footer-content" data-astro-cid-35ed7um5> <!-- Main Footer Content --> <div class="footer-main" data-astro-cid-35ed7um5> <div class="footer-grid" data-astro-cid-35ed7um5> <!-- Brand Section --> <div class="footer-brand" data-astro-cid-35ed7um5> <div class="brand-header" data-astro-cid-35ed7um5> <div class="warp-core-large" data-astro-cid-35ed7um5></div> <h3 class="brand-title" data-astro-cid-35ed7um5>Smarter with Science</h3> </div> <p class="brand-tagline" data-astro-cid-35ed7um5>Science plus community equals exponential impact.</p> <p class="brand-description" data-astro-cid-35ed7um5>
Accelerating scientific discovery through community power, computational resources, 
            and open collaboration. Every curious mind can spark the next breakthrough.
</p> <div class="social-links" data-astro-cid-35ed7um5> <a href="https://discord.com/invite/smarter" class="social-link" aria-label="Discord" data-astro-cid-35ed7um5> <img src="/ui-elements/icon-discord-pixelart.png" alt="Discord" class="social-icon-pixel" data-astro-cid-35ed7um5> </a> <a href="https://github.com/SmarterWithScience" class="social-link" aria-label="GitHub" data-astro-cid-35ed7um5> <img src="/ui-elements/icon-github-pixelart.png" alt="GitHub" class="social-icon-pixel" data-astro-cid-35ed7um5> </a> <a href="https://twitter.com/ScienceStanley" class="social-link" aria-label="Twitter" data-astro-cid-35ed7um5> <div class="social-icon twitter" data-astro-cid-35ed7um5></div> </a> </div> </div> <!-- Links Sections --> <div class="footer-links" data-astro-cid-35ed7um5> <div class="link-section" data-astro-cid-35ed7um5> <h4 class="section-title" data-astro-cid-35ed7um5>Discover</h4> <ul class="link-list" data-astro-cid-35ed7um5> ${footerLinks.discover.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-35ed7um5> <span class="link-text" data-astro-cid-35ed7um5>${link.label}</span> <span class="link-arrow" data-astro-cid-35ed7um5>→</span> </a> </li>`)} </ul> </div> <div class="link-section" data-astro-cid-35ed7um5> <h4 class="section-title" data-astro-cid-35ed7um5>Community</h4> <ul class="link-list" data-astro-cid-35ed7um5> ${footerLinks.community.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="footer-link"${addAttribute(link.external ? "_blank" : void 0, "target")}${addAttribute(link.external ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-35ed7um5> <span class="link-text" data-astro-cid-35ed7um5>${link.label}</span> <span class="link-arrow" data-astro-cid-35ed7um5>${link.external ? "\u2197" : "\u2192"}</span> </a> </li>`)} </ul> </div> <div class="link-section" data-astro-cid-35ed7um5> <h4 class="section-title" data-astro-cid-35ed7um5>Pods</h4> <ul class="link-list" data-astro-cid-35ed7um5> ${footerLinks.pods.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-35ed7um5> <span class="link-text" data-astro-cid-35ed7um5>${link.label}</span> <span class="link-arrow" data-astro-cid-35ed7um5>→</span> </a> </li>`)} </ul> </div> <div class="link-section" data-astro-cid-35ed7um5> <h4 class="section-title" data-astro-cid-35ed7um5>Resources</h4> <ul class="link-list" data-astro-cid-35ed7um5> ${footerLinks.resources.map((link) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-35ed7um5> <span class="link-text" data-astro-cid-35ed7um5>${link.label}</span> <span class="link-arrow" data-astro-cid-35ed7um5>→</span> </a> </li>`)} </ul> </div> </div> </div> <!-- Newsletter Section --> <div class="newsletter-section" data-astro-cid-35ed7um5> <div class="newsletter-content" data-astro-cid-35ed7um5> <h3 class="newsletter-title" data-astro-cid-35ed7um5>Join the Scientific Revolution</h3> <p class="newsletter-description" data-astro-cid-35ed7um5>
Get weekly updates on breakthrough research, community projects, and opportunities to contribute.
</p> <form class="newsletter-form" data-newsletter-form data-astro-cid-35ed7um5> <div class="input-wrapper" data-astro-cid-35ed7um5> <input type="email" class="neural-input" placeholder="your.email@example.com" required aria-label="Email address" data-astro-cid-35ed7um5> <button type="submit" class="portal-button" data-astro-cid-35ed7um5> <span data-astro-cid-35ed7um5>Subscribe</span> <div class="button-glow" data-astro-cid-35ed7um5></div> </button> </div> </form> </div> </div> </div> <!-- Bottom Bar --> <div class="footer-bottom" data-astro-cid-35ed7um5> <div class="bottom-content" data-astro-cid-35ed7um5> <p class="copyright" data-astro-cid-35ed7um5>
© ${currentYear} Smarter with Science. Building the future, together.
</p> <div class="bottom-links" data-astro-cid-35ed7um5> <a href="/privacy" class="bottom-link" data-astro-cid-35ed7um5>Privacy</a> <a href="/terms" class="bottom-link" data-astro-cid-35ed7um5>Terms</a> <a href="/code-of-conduct" class="bottom-link" data-astro-cid-35ed7um5>Code of Conduct</a> </div> </div> </div> </div> <!-- Stanley Quote --> <div class="stanley-quote" data-astro-cid-35ed7um5> <p data-astro-cid-35ed7um5>"Your curiosity could spark the next breakthrough."</p> <span data-astro-cid-35ed7um5>- Science Stanley</span> </div> </footer>  ${renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/src/components/layout/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/layout/Footer.astro", void 0);

const $$AdvancedBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="advanced-background" aria-hidden="true" data-astro-cid-fq2mjwdt> <!-- Layer 1: Animated Grid --> <div class="grid-layer" data-astro-cid-fq2mjwdt></div> <!-- Layer 2: Gradient Orbs --> <div class="orb-layer" data-astro-cid-fq2mjwdt> <div class="orb orb-1" data-astro-cid-fq2mjwdt></div> <div class="orb orb-2" data-astro-cid-fq2mjwdt></div> <div class="orb orb-3" data-astro-cid-fq2mjwdt></div> </div> <!-- Layer 3: Floating Particles --> <canvas id="particle-canvas" class="particle-layer" data-astro-cid-fq2mjwdt></canvas> <!-- Layer 4: Noise Texture --> <div class="noise-layer" data-astro-cid-fq2mjwdt></div> <!-- Layer 5: Scan Lines --> <div class="scanlines" data-astro-cid-fq2mjwdt></div> </div>  ${renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/src/components/effects/AdvancedBackground.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/effects/AdvancedBackground.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://smarterwithscience.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Smarter with Science - Community-Powered Discovery",
    description = "Where cutting-edge science meets community warmth. Join Science Stanley and the SwS movement to accelerate scientific breakthroughs through collective action.",
    image = "/og-image.png",
    noIndex = false
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="cyber" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="Smarter with Science"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Theme Color --><meta name="theme-color" content="#663399"><!-- View Transitions -->', "<!-- Page Transition Styles --><!-- Critical CSS for immediate render --><style>\n      body {\n        margin: 0;\n        background: #000000;\n        color: white;\n        font-family: system-ui, -apple-system, sans-serif;\n      }\n    </style>", "</head> <body data-astro-cid-37fxchfa> <!-- Advanced Background System --> ", " <!-- Navigation --> ", ' <!-- Main Content --> <main class="main-content" data-astro-cid-37fxchfa> ', " </main> <!-- Footer --> ", " <!-- Theme Script --> <script>\n      // Theme management\n      const theme = localStorage.getItem('sws-theme') || 'cyber';\n      document.documentElement.setAttribute('data-theme', theme);\n      \n      // Page is ready - no loading screen needed with View Transitions\n      \n      // Listen for theme changes\n      window.addEventListener('theme-change', (e) => {\n        const newTheme = e.detail.theme;\n        document.documentElement.setAttribute('data-theme', newTheme);\n        localStorage.setItem('sws-theme', newTheme);\n        \n        // Trigger theme transition animation\n        document.body.classList.add('theme-transitioning');\n        setTimeout(() => {\n          document.body.classList.remove('theme-transitioning');\n        }, 500);\n      });\n    <\/script> <!-- Quantum Ripple Effect --> ", " <!-- Global CSS for theme transitions -->  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-37fxchfa": true }), renderHead(), renderComponent($$result, "AdvancedBackground", $$AdvancedBackground, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Navigation", $$Navigation, { "currentPath": currentPath, "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), renderScript($$result, "/home/jupyter-stanley/SwS/website/astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/home/jupyter-stanley/SwS/website/astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
