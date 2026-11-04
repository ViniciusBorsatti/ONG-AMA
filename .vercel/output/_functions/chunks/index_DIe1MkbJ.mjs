import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { t as $$FormAnimal } from "./FormAnimal_paRxAA-B.mjs";
import { t as buscarAnimalPorId } from "./db_CNeprd8i.mjs";
import { r as salvarAnimal } from "./salvar_ChBD6j8u.mjs";
// src/pages/admin/[id]/index.astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const animal = await buscarAnimalPorId(Astro.params.id, Astro.locals.supabase);
	if (!animal) return Astro.redirect("/admin/");
	let erro = null;
	let valores = {};
	if (Astro.request.method === "POST") {
		const form = await Astro.request.formData();
		const r = await salvarAnimal(Astro.locals.supabase, form, animal);
		if (r.ok) return Astro.redirect("/admin/?ok=salvo");
		erro = r.erro ?? "Erro desconhecido.";
		for (const [k, val] of form.entries()) if (typeof val === "string") valores[k] = val;
	}
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": `Editar ${animal.nome}`,
		"erro": erro
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin__cabeca"><h1>Editar ${animal.nome}</h1><a${addAttribute(`/animais/${animal.slug}/`, "href")} target="_blank" rel="noopener" class="link-simples">Ver no site ↗</a></div>${renderComponent($$result, "FormAnimal", $$FormAnimal, {
		"animal": animal,
		"valores": valores
	})}` })}`;
}, "/home/claude/ong-ama/src/pages/admin/[id]/index.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/[id]/index.astro";
var $$url = "/admin/[id]/";
// \0virtual:astro:page:src/pages/admin/[id]/index@_@astro
var page = () => _id__exports;
export { page };
