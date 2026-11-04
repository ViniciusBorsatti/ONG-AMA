import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { n as mudarStatus } from "./salvar_ChBD6j8u.mjs";
// src/pages/admin/[id]/status.astro
var status_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Status,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Status = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Status;
	if (Astro.request.method !== "POST") return Astro.redirect("/admin/");
	const status = (await Astro.request.formData()).get("status") === "adotado" ? "adotado" : "disponivel";
	const erro = await mudarStatus(Astro.locals.supabase, Astro.params.id, status);
	return Astro.redirect(erro ? "/admin/" : `/admin/?ok=${status}`);
}, "/home/claude/ong-ama/src/pages/admin/[id]/status.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/[id]/status.astro";
var $$url = "/admin/[id]/status/";
// \0virtual:astro:page:src/pages/admin/[id]/status@_@astro
var page = () => status_exports;
export { page };
