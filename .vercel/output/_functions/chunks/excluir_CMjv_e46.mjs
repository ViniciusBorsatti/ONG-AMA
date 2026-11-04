import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
import { t as buscarAnimalPorId } from "./db_CNeprd8i.mjs";
import { t as excluirAnimal } from "./salvar_ChBD6j8u.mjs";
// src/pages/admin/[id]/excluir.astro
var excluir_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Excluir,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Excluir = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Excluir;
	const animal = await buscarAnimalPorId(Astro.params.id, Astro.locals.supabase);
	if (!animal) return Astro.redirect("/admin/");
	let erro = null;
	if (Astro.request.method === "POST") {
		erro = await excluirAnimal(Astro.locals.supabase, animal);
		if (!erro) return Astro.redirect("/admin/?ok=excluido");
	}
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": `Excluir ${animal.nome}`,
		"erro": erro,
		"data-astro-cid-zdwsqknh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="confirma" data-astro-cid-zdwsqknh><h1 data-astro-cid-zdwsqknh>Excluir ${animal.nome}?</h1><p data-astro-cid-zdwsqknh>Isso tira ${animal.nome} do site de vez. Se ${animal.sexo === "femea" ? "ela" : "ele"} foi adotad${animal.sexo === "femea" ? "a" : "o"}, o melhor é<strong data-astro-cid-zdwsqknh>marcar como adotado</strong> em vez de excluir: assim aparece nos finais felizes.</p><form method="post" class="form__acoes" data-astro-cid-zdwsqknh><button type="submit" class="btn btn--perigo" data-astro-cid-zdwsqknh>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "x",
		"data-astro-cid-zdwsqknh": true
	})} Sim, excluir</button><a${addAttribute(`/admin/${animal.id}/`, "href")} class="link-simples" data-astro-cid-zdwsqknh>Voltar</a></form></div>` })}`;
}, "/home/claude/ong-ama/src/pages/admin/[id]/excluir.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/[id]/excluir.astro";
var $$url = "/admin/[id]/excluir/";
// \0virtual:astro:page:src/pages/admin/[id]/excluir@_@astro
var page = () => excluir_exports;
export { page };
