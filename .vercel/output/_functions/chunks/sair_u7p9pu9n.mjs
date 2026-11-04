import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as limparSessao } from "./supabase_CRplykmZ.mjs";
// src/pages/admin/sair.astro
var sair_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sair,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Sair = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Sair;
	if (Astro.request.method === "POST") limparSessao(Astro.cookies);
	return Astro.redirect("/admin/login/");
}, "/home/claude/ong-ama/src/pages/admin/sair.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/sair.astro";
var $$url = "/admin/sair/";
// \0virtual:astro:page:src/pages/admin/sair@_@astro
var page = () => sair_exports;
export { page };
