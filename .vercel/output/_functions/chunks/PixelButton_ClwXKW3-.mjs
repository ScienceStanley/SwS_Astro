import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_DSpow1EJ.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://smarterwithscience.org");
const $$PixelButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PixelButton;
  const {
    href,
    type = "button",
    variant = "primary",
    className = "",
    onclick,
    disabled = false
  } = Astro2.props;
  const buttonClass = `pixel-button pixel-button-${variant} ${className}`;
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...href ? { href } : { type }, "class": buttonClass, ...onclick ? { onclick } : {}, ...disabled ? { disabled: true } : {}, ...href && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, "data-astro-cid-l63i4fqe": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/home/jupyter-stanley/SwS/website/astro/src/components/ui/PixelButton.astro", void 0);

export { $$PixelButton as $ };
