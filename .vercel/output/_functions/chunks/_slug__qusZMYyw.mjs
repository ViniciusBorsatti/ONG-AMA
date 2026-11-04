import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Base } from "./Base_Di7-L8rQ.mjs";
import { n as site, t as linkWhatsapp } from "./site_CWQWEC8T.mjs";
import { n as rotulos, t as mesAno } from "./animais_CZCkxYrD.mjs";
import { n as listarAnimais, r as separar } from "./db_CNeprd8i.mjs";
import { n as $$Foto, t as $$CardAnimal } from "./CardAnimal_CIws0f2K.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
// src/pages/animais/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const todos = await listarAnimais();
	const animal = todos.find((a) => a.slug === Astro.params.slug);
	if (!animal) return new Response(null, { status: 404 });
	const { disponiveis } = separar(todos);
	const adotado = animal.status === "adotado";
	const fem = animal.sexo === "femea";
	const outros = disponiveis.filter((a) => a.slug !== animal.slug).slice(0, 3);
	const whatsapp = linkWhatsapp(`Olá! Tenho interesse em adotar ${fem ? "a" : "o"} ${animal.nome} 💚`);
	const fichas = [
		{
			rotulo: "Espécie",
			valor: rotulos.especie[animal.especie]
		},
		{
			rotulo: "Sexo",
			valor: rotulos.sexo[animal.sexo]
		},
		{
			rotulo: "Idade",
			valor: animal.idade
		},
		{
			rotulo: "Porte",
			valor: rotulos.porte[animal.porte].replace("Porte ", "")
		},
		{
			rotulo: fem ? "Castrada" : "Castrado",
			valor: animal.castrado ? "Sim" : "Ainda não (a ONG faz)"
		},
		{
			rotulo: fem ? "Vacinada" : "Vacinado",
			valor: animal.vacinado ? "Sim" : "Em andamento"
		}
	];
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: `${animal.nome} para adoção`,
		description: animal.personalidade,
		url: new URL(Astro.url.pathname, Astro.site).toString(),
		isPartOf: {
			"@type": "WebSite",
			name: site.nome,
			url: site.url
		}
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titulo": `${animal.nome} · ${adotado ? "Adotad" + (fem ? "a" : "o") : "para adoção"}`,
		"descricao": animal.personalidade,
		"jsonLd": jsonLd,
		"data-astro-cid-vu5ehdqt": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="animal" data-astro-cid-vu5ehdqt><div class="container" data-astro-cid-vu5ehdqt><a href="/#animais" class="voltar entra" style="--i:0" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "seta",
		"data-astro-cid-vu5ehdqt": true
	})} Todos os animais</a><div class="animal__grade" data-astro-cid-vu5ehdqt><div class="animal__foto entra-foto" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Foto", $$Foto, {
		"animal": animal,
		"prioridade": true,
		"class": "animal__img",
		"data-astro-cid-vu5ehdqt": true
	})}${adotado && renderTemplate`<span class="animal__faixa" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "casa",
		"data-astro-cid-vu5ehdqt": true
	})} Adotad${fem ? "a" : "o"}${animal.data_adocao ? ` em ${mesAno(animal.data_adocao)}` : ""}</span>`}</div><div class="animal__info" data-astro-cid-vu5ehdqt><span class="rotulo entra" style="--i:1" data-astro-cid-vu5ehdqt>${adotado ? "Final feliz" : "Procurando um lar"}</span><h1 class="entra" style="--i:2" data-astro-cid-vu5ehdqt>${animal.nome} <span class="animal__sexo" data-astro-cid-vu5ehdqt>${fem ? "♀" : "♂"}</span></h1><p class="animal__personalidade entra" style="--i:3" data-astro-cid-vu5ehdqt>${animal.personalidade}</p>${animal.historia && renderTemplate`<p class="animal__historia entra" style="--i:4" data-astro-cid-vu5ehdqt>${animal.historia}</p>`}${animal.tags.length > 0 && renderTemplate`<ul class="animal__tags entra" style="--i:5" data-astro-cid-vu5ehdqt>${animal.tags.map((t) => renderTemplate`<li class="selo" data-astro-cid-vu5ehdqt>${t}</li>`)}</ul>`}<dl class="ficha entra" style="--i:6" data-astro-cid-vu5ehdqt>${fichas.map((f) => renderTemplate`<div data-astro-cid-vu5ehdqt><dt data-astro-cid-vu5ehdqt>${f.rotulo}</dt><dd data-astro-cid-vu5ehdqt>${f.valor}</dd></div>`)}</dl>${adotado ? renderTemplate`<div class="animal__adotado entra" style="--i:7" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "coracao",
		"class": "pulsa",
		"data-astro-cid-vu5ehdqt": true
	})}<p data-astro-cid-vu5ehdqt>${animal.nome} já tem uma família. Mas tem outros bichos esperando. <a href="/#animais" data-astro-cid-vu5ehdqt>Veja quem está disponível.</a></p></div>` : renderTemplate`<div class="animal__acoes entra" style="--i:7" data-astro-cid-vu5ehdqt><a${addAttribute(whatsapp, "href")} target="_blank" rel="noopener" class="btn btn--laranja" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "whatsapp",
		"data-astro-cid-vu5ehdqt": true
	})} Quero adotar ${fem ? "a" : "o"} ${animal.nome}</a><a href="/#como-adotar" class="btn btn--claro" data-astro-cid-vu5ehdqt>Como funciona</a>${animal.post && renderTemplate`<a${addAttribute(animal.post, "href")} target="_blank" rel="noopener" class="animal__post" data-astro-cid-vu5ehdqt>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "instagram",
		"data-astro-cid-vu5ehdqt": true
	})} Ver no Instagram</a>`}</div>`}</div></div></div></article>${outros.length > 0 && renderTemplate`<section class="secao outros" data-astro-cid-vu5ehdqt><div class="container" data-astro-cid-vu5ehdqt><div class="secao-cabeca revela-lado" data-astro-cid-vu5ehdqt><span class="rotulo" data-astro-cid-vu5ehdqt>Mais bichos</span><h2 data-astro-cid-vu5ehdqt>Outros esperando um lar</h2></div><div class="grade grade-revela" data-astro-cid-vu5ehdqt>${outros.map((a) => renderTemplate`${renderComponent($$result, "CardAnimal", $$CardAnimal, {
		"animal": a,
		"data-astro-cid-vu5ehdqt": true
	})}`)}</div></div></section>`}` })}`;
}, "/home/claude/ong-ama/src/pages/animais/[slug].astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/animais/[slug].astro";
var $$url = "/animais/[slug]/";
// \0virtual:astro:page:src/pages/animais/[slug]@_@astro
var page = () => _slug__exports;
export { page };
