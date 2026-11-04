import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { n as rotulos, t as mesAno } from "./animais_CZCkxYrD.mjs";
import { t as linkWhatsapp } from "./site_CWQWEC8T.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
// src/components/Foto.astro
createAstro("https://ong-ama.vercel.app");
var $$Foto = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Foto;
	const { animal, class: cls, prioridade = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["foto", cls], "class:list")}${addAttribute(`--cor:${animal.cor}`, "style")} data-astro-cid-wijo5dqd>${animal.foto ? renderTemplate`<img${addAttribute(animal.foto, "src")}${addAttribute(`${animal.nome}, ${animal.especie === "cachorro" ? "cachorro" : "gato"} para adoção`, "alt")} width="1000" height="1000"${addAttribute(prioridade ? "eager" : "lazy", "loading")}${addAttribute(prioridade ? "high" : "auto", "fetchpriority")} decoding="async" data-astro-cid-wijo5dqd>` : renderTemplate`<span class="foto__vazia" data-astro-cid-wijo5dqd>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-wijo5dqd": true
	})}<span data-astro-cid-wijo5dqd>${animal.nome}</span></span>`}</div>`;
}, "/home/claude/ong-ama/src/components/Foto.astro", void 0);
// src/components/CardAnimal.astro
createAstro("https://ong-ama.vercel.app");
var $$CardAnimal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CardAnimal;
	const { animal, prioridade = false } = Astro.props;
	const adotado = animal.status === "adotado";
	const href = `/animais/${animal.slug}/`;
	const whatsapp = linkWhatsapp(`Olá! Tenho interesse em adotar ${animal.sexo === "femea" ? "a" : "o"} ${animal.nome} 💚`);
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(["card", { "card--adotado": adotado }], "class:list")}${addAttribute(animal.especie, "data-especie")}${addAttribute(animal.porte, "data-porte")} data-astro-cid-777kr6ai><a${addAttribute(href, "href")} class="card__foto"${addAttribute(`Ver ${animal.nome}`, "aria-label")} data-astro-cid-777kr6ai>${renderComponent($$result, "Foto", $$Foto, {
		"animal": animal,
		"prioridade": prioridade,
		"data-astro-cid-777kr6ai": true
	})}<span class="card__especie selo selo--neutro" data-astro-cid-777kr6ai>${rotulos.especie[animal.especie]}</span>${adotado ? renderTemplate`<span class="card__faixa" data-astro-cid-777kr6ai>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "casa",
		"data-astro-cid-777kr6ai": true
	})} Adotad${animal.sexo === "femea" ? "a" : "o"}${animal.data_adocao ? ` em ${mesAno(animal.data_adocao)}` : ""}</span>` : renderTemplate`<span class="card__pata" data-astro-cid-777kr6ai>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-777kr6ai": true
	})}</span>`}</a><div class="card__corpo" data-astro-cid-777kr6ai><header class="card__cabeca" data-astro-cid-777kr6ai><h3 data-astro-cid-777kr6ai><a${addAttribute(href, "href")} data-astro-cid-777kr6ai>${animal.nome}</a></h3><span class="card__sexo"${addAttribute(rotulos.sexo[animal.sexo], "title")}${addAttribute(rotulos.sexo[animal.sexo], "aria-label")} data-astro-cid-777kr6ai>${animal.sexo === "femea" ? "♀" : "♂"}</span></header><p class="card__texto" data-astro-cid-777kr6ai>${animal.personalidade}</p><ul class="card__selos" aria-label="Informações" data-astro-cid-777kr6ai><li class="selo selo--neutro" data-astro-cid-777kr6ai>${animal.idade}</li><li class="selo selo--neutro" data-astro-cid-777kr6ai>${rotulos.porte[animal.porte].replace("Porte ", "")}</li>${animal.castrado ? renderTemplate`<li class="selo selo--ok" data-astro-cid-777kr6ai>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "check",
		"data-astro-cid-777kr6ai": true
	})} Castrad${animal.sexo === "femea" ? "a" : "o"}</li>` : renderTemplate`<li class="selo selo--aviso" data-astro-cid-777kr6ai>Castração pela ONG</li>`}</ul>${!adotado && renderTemplate`<a class="btn card__btn"${addAttribute(whatsapp, "href")} target="_blank" rel="noopener" data-astro-cid-777kr6ai>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "coracao",
		"class": "pulsa",
		"data-astro-cid-777kr6ai": true
	})} Quero adotar</a>`}</div></article>`;
}, "/home/claude/ong-ama/src/components/CardAnimal.astro", void 0);
export { $$Foto as n, $$CardAnimal as t };
