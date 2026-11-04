import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { t as $$FormAnimal } from "./FormAnimal_paRxAA-B.mjs";
import { r as salvarAnimal } from "./salvar_ChBD6j8u.mjs";
// src/pages/admin/novo.astro
var novo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Novo,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Novo = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Novo;
	let erro = null;
	let valores = {};
	if (Astro.request.method === "POST") {
		const form = await Astro.request.formData();
		const r = await salvarAnimal(Astro.locals.supabase, form, null);
		if (r.ok) return Astro.redirect("/admin/?ok=salvo");
		erro = r.erro ?? "Erro desconhecido.";
		for (const [k, val] of form.entries()) if (typeof val === "string") valores[k] = val;
	}
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": "Cadastrar animal",
		"erro": erro
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin__cabeca"><h1>Cadastrar animal</h1></div>${renderComponent($$result, "FormAnimal", $$FormAnimal, {
		"animal": null,
		"valores": valores
	})}` })}`;
}, "/home/claude/ong-ama/src/pages/admin/novo.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/novo.astro";
var $$url = "/admin/novo/";
// \0virtual:astro:page:src/pages/admin/novo@_@astro
var page = () => novo_exports;
export { page };
