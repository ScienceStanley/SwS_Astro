import { c as createAstro, a as createComponent, g as defineStyleVars, m as maybeRenderHead, f as addAttribute, b as renderTemplate, d as renderSlot } from './astro/server_DSpow1EJ.mjs';
/* empty css                         */
import 'clsx';
import 'kleur/colors';

const $$Astro$1 = createAstro("https://smarterwithscience.org");
const $$GhibliProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GhibliProjectCard;
  const {
    title,
    description,
    category,
    impact,
    status,
    collaborators,
    computeHours,
    href = "#",
    className = ""
  } = Astro2.props;
  const categoryColors = {
    ocean: { primary: "#1E90FF", secondary: "#20B2AA", accent: "#87CEEB" },
    medical: { primary: "#90EE90", secondary: "#98FB98", accent: "#F0F8FF" },
    quantum: { primary: "#9370DB", secondary: "#8A2BE2", accent: "#DDA0DD" },
    mesh: { primary: "#FF6347", secondary: "#FF7F50", accent: "#FFA07A" },
    vr: { primary: "#FFD700", secondary: "#FFA500", accent: "#FFFFE0" },
    algae: { primary: "#32CD32", secondary: "#90EE90", accent: "#F0FFF0" }
  };
  const categoryElements = {
    ocean: { icon: "\u{1F30A}", spirits: "\u{1F41F}", particles: "\u{1F4A7}" },
    medical: { icon: "\u{1F9EC}", spirits: "\u2695\uFE0F", particles: "\u2728" },
    quantum: { icon: "\u269B\uFE0F", spirits: "\u{1F52C}", particles: "\u26A1" },
    mesh: { icon: "\u{1F310}", spirits: "\u{1F4E1}", particles: "\u{1F4F6}" },
    vr: { icon: "\u{1F97D}", spirits: "\u{1F3AE}", particles: "\u{1F30C}" },
    algae: { icon: "\u{1F331}", spirits: "\u{1F9EA}", particles: "\u{1F49A}" }
  };
  const $$definedVars = defineStyleVars([{
    primaryColor: categoryColors[category].primary,
    secondaryColor: categoryColors[category].secondary,
    accentColor: categoryColors[category].accent
  }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`ghibli-project-card ghibli-${category} ${className}`, "class")} data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="card-background" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="pixel-environment" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="floating-particles" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <span class="particle particle-1" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].particles}</span> <span class="particle particle-2" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].particles}</span> <span class="particle particle-3" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].particles}</span> </div> <div class="ghibli-spirits" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <span class="spirit spirit-1" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].spirits}</span> <span class="spirit spirit-2" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].spirits}</span> </div> <div class="data-crystals" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="crystal crystal-1" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}></div> <div class="crystal crystal-2" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}></div> </div> </div> </div> <div class="card-header" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="project-icon" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${categoryElements[category].icon}</div> <div class="status-indicator"${addAttribute(status, "data-status")} data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}></div> </div> <div class="card-content" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <h3 class="project-title" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${title}</h3> <p class="project-description" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${description}</p> <div class="impact-badge" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <span class="impact-icon" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>📈</span> <span class="impact-text" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${impact}</span> </div> <div class="project-stats" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="stat" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="stat-value" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${collaborators}</div> <div class="stat-label" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>Researchers</div> </div> <div class="stat" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="stat-value" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>${computeHours.toLocaleString()}</div> <div class="stat-label" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>GPU Hours</div> </div> </div> </div> <div class="card-footer" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="progress-bar" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}> <div class="progress-fill"${addAttribute(`${`width: ${status === "completed" ? 100 : status === "active" ? 70 : 30}%`}; ${$$definedVars}`, "style")} data-astro-cid-jffu4kgj></div> </div> <span class="learn-more" data-astro-cid-jffu4kgj${addAttribute($$definedVars, "style")}>Explore Project →</span> </div> </a> `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/GhibliProjectCard.astro", void 0);

const $$Astro = createAstro("https://smarterwithscience.org");
const $$GhibliPixelBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GhibliPixelBanner;
  const {
    variant = "hero",
    height = "auto",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`ghibli-pixel-banner ghibli-${variant} ${className}`, "class")}${addAttribute(`height: ${height}`, "style")} data-astro-cid-dw6trat7> <div class="pixel-forest" data-astro-cid-dw6trat7> <div class="digital-trees" data-astro-cid-dw6trat7> <div class="tree tree-1" data-astro-cid-dw6trat7></div> <div class="tree tree-2" data-astro-cid-dw6trat7></div> <div class="tree tree-3" data-astro-cid-dw6trat7></div> </div> <div class="data-streams" data-astro-cid-dw6trat7> <div class="stream stream-1" data-astro-cid-dw6trat7></div> <div class="stream stream-2" data-astro-cid-dw6trat7></div> <div class="stream stream-3" data-astro-cid-dw6trat7></div> </div> <div class="floating-elements" data-astro-cid-dw6trat7> <div class="crystal crystal-1" data-astro-cid-dw6trat7></div> <div class="crystal crystal-2" data-astro-cid-dw6trat7></div> <div class="spirit spirit-1" data-astro-cid-dw6trat7></div> <div class="spirit spirit-2" data-astro-cid-dw6trat7></div> </div> </div> ${variant === "hero" && renderTemplate`<div class="hero-overlay" data-astro-cid-dw6trat7> ${renderSlot($$result, $$slots["default"])} </div>`} </div> `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/GhibliPixelBanner.astro", void 0);

export { $$GhibliPixelBanner as $, $$GhibliProjectCard as a };
