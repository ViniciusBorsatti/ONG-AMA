import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import "./compiler_BgDax1xC.mjs";
import { t as $$Base } from "./Base_Di7-L8rQ.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
// src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titulo": "Página não encontrada",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="erro container" data-astro-cid-ibpinaeu><span class="erro__pata balanca" data-astro-cid-ibpinaeu>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-ibpinaeu": true
	})}</span><h1 class="entra" style="--i:1" data-astro-cid-ibpinaeu>Essa página fugiu.</h1><p class="entra" style="--i:2" data-astro-cid-ibpinaeu>A página que você procurou não existe. Mas os bichos continuam lá na página inicial.</p><a href="/" class="btn entra" style="--i:3" data-astro-cid-ibpinaeu>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "casa",
		"data-astro-cid-ibpinaeu": true
	})} Voltar pro início</a></section>` })}`;
}, "/home/claude/ong-ama/src/pages/404.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/404.astro";
var $$url = "/404/";
// \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
export { page };
