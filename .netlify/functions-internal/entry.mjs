import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.c5076c6a.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.97efe7c7.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/projects.astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.c98052a3.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.c98052a3.css"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-portfolio-uzair.vercel.app","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["D:/CodingProjects/ossified-graham/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/CodingProjects/ossified-graham/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.c98052a3.css","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/safari-pinned-tab.svg","/site.webmanifest","/assets/images/1.png","/assets/images/2.png","/assets/images/3.png","/assets/images/4.png","/assets/images/5.png","/assets/images/6.png","/assets/images/facelogo.jpg","/assets/fonts/Inter/Inter-Black.ttf","/assets/fonts/Inter/Inter-Bold.ttf","/assets/fonts/Inter/Inter-ExtraBold.ttf","/assets/fonts/Inter/Inter-ExtraLight.ttf","/assets/fonts/Inter/Inter-Light.ttf","/assets/fonts/Inter/Inter-Medium.ttf","/assets/fonts/Inter/Inter-Regular.ttf","/assets/fonts/Inter/Inter-SemiBold.ttf","/assets/fonts/Inter/Inter-Thin.ttf","/assets/fonts/Outfit/Outfit-Black.ttf","/assets/fonts/Outfit/Outfit-Bold.ttf","/assets/fonts/Outfit/Outfit-ExtraBold.ttf","/assets/fonts/Outfit/Outfit-ExtraLight.ttf","/assets/fonts/Outfit/Outfit-Light.ttf","/assets/fonts/Outfit/Outfit-Medium.ttf","/assets/fonts/Outfit/Outfit-Regular.ttf","/assets/fonts/Outfit/Outfit-SemiBold.ttf","/assets/fonts/Outfit/Outfit-Thin.ttf"]}), {
	pageMap: pageMap,
	renderers: renderers,
	
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
