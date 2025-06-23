import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_KIKUPvWy.mjs';
import { manifest } from './manifest_Yv2fGw9p.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/charter.astro.mjs');
const _page2 = () => import('./pages/pixel-ui-demo.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/science-sunday.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/charter.astro", _page1],
    ["src/pages/pixel-ui-demo.astro", _page2],
    ["src/pages/projects/index.astro", _page3],
    ["src/pages/science-sunday.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9cc16f34-d788-49de-855d-b9e76a751fee",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
