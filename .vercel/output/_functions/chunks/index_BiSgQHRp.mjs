import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
import { n as rotulos, t as mesAno } from "./animais_CZCkxYrD.mjs";
import { n as listarAnimais, r as separar } from "./db_CNeprd8i.mjs";
// src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { disponiveis, adotados } = separar(await listarAnimais(Astro.locals.supabase));
	const grupos = [{
		titulo: "Procurando um lar",
		lista: disponiveis,
		vazio: "Nenhum animal disponível. Cadastre o primeiro!"
	}, {
		titulo: "Já adotados",
		lista: adotados,
		vazio: "Ainda ninguém marcado como adotado."
	}];
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": "Animais",
		"data-astro-cid-nsou3le4": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin__cabeca" data-astro-cid-nsou3le4><h1 data-astro-cid-nsou3le4>Animais</h1><a href="/admin/novo/" class="btn" data-astro-cid-nsou3le4>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-nsou3le4": true
	})} Cadastrar animal</a></div>${grupos.map((g) => renderTemplate`<section class="grupo" data-astro-cid-nsou3le4><h2 data-astro-cid-nsou3le4>${g.titulo} <span class="grupo__n" data-astro-cid-nsou3le4>${g.lista.length}</span></h2>${g.lista.length === 0 && renderTemplate`<p class="grupo__vazio" data-astro-cid-nsou3le4>${g.vazio}</p>`}<ul class="lista" data-astro-cid-nsou3le4>${g.lista.map((a) => renderTemplate`<li${addAttribute(["item", { "item--adotado": a.status === "adotado" }], "class:list")} data-astro-cid-nsou3le4><a${addAttribute(`/admin/${a.id}/`, "href")} class="item__foto" data-astro-cid-nsou3le4>${a.foto ? renderTemplate`<img${addAttribute(a.foto, "src")} alt="" width="96" height="96" loading="lazy" data-astro-cid-nsou3le4>` : renderTemplate`${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-nsou3le4": true
	})}`}</a><div class="item__info" data-astro-cid-nsou3le4><a${addAttribute(`/admin/${a.id}/`, "href")} class="item__nome" data-astro-cid-nsou3le4>${a.nome}</a><span class="item__meta" data-astro-cid-nsou3le4>${rotulos.especie[a.especie]} · ${rotulos.sexo[a.sexo]} · ${a.idade}${a.status === "adotado" && a.data_adocao && ` · adotad${a.sexo === "femea" ? "a" : "o"} em ${mesAno(a.data_adocao)}`}</span><span class="item__selos" data-astro-cid-nsou3le4><span${addAttribute(["selo", a.castrado ? "selo--ok" : "selo--aviso"], "class:list")} data-astro-cid-nsou3le4>${a.castrado ? "Castrado" : "Não castrado"}</span>${!a.foto && renderTemplate`<span class="selo selo--aviso" data-astro-cid-nsou3le4>Sem foto</span>`}</span></div><div class="item__acoes" data-astro-cid-nsou3le4><a${addAttribute(`/admin/${a.id}/`, "href")} class="item__btn" data-astro-cid-nsou3le4>Editar</a><form method="post"${addAttribute(`/admin/${a.id}/status/`, "action")} data-astro-cid-nsou3le4><input type="hidden" name="status"${addAttribute(a.status === "adotado" ? "disponivel" : "adotado", "value")} data-astro-cid-nsou3le4><button type="submit"${addAttribute(["item__btn", { "item__btn--verde": a.status === "disponivel" }], "class:list")} data-astro-cid-nsou3le4>${a.status === "adotado" ? "Voltar p/ disponível" : "Foi adotado 💚"}</button></form></div></li>`)}</ul></section>`)}` })}`;
}, "/home/claude/ong-ama/src/pages/admin/index.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/index.astro";
var $$url = "/admin/";
// \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
export { page };
