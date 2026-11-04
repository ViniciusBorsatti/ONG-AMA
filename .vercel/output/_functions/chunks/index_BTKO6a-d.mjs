import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as Fragment, O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import "./compiler_BgDax1xC.mjs";
import { t as $$Base } from "./Base_Di7-L8rQ.mjs";
import { n as site, t as linkWhatsapp } from "./site_CWQWEC8T.mjs";
import { n as listarAnimais, r as separar } from "./db_CNeprd8i.mjs";
import { n as $$Foto, t as $$CardAnimal } from "./CardAnimal_CIws0f2K.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
// src/components/Letreiro.astro
var $$Letreiro = createComponent(($$result, $$props, $$slots) => {
	const itens = [...site.letreiro, ...site.letreiro];
	return renderTemplate`${maybeRenderHead($$result)}<div class="letreiro" aria-hidden="true" data-astro-cid-zo2u5n7a><div class="letreiro__trilho" data-astro-cid-zo2u5n7a>${itens.map((t) => renderTemplate`<span class="letreiro__item" data-astro-cid-zo2u5n7a>${t} ${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-zo2u5n7a": true
	})}</span>`)}</div></div>`;
}, "/home/claude/ong-ama/src/components/Letreiro.astro", void 0);
// src/components/Patas.astro
var $$Patas = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="patas" aria-hidden="true" data-astro-cid-yjoqt7ja>${[
		{
			x: "6%",
			y: "12%",
			s: 34,
			rot: -25,
			d: "0s"
		},
		{
			x: "14%",
			y: "70%",
			s: 22,
			rot: 15,
			d: "1.2s"
		},
		{
			x: "46%",
			y: "8%",
			s: 18,
			rot: 35,
			d: "2.4s"
		},
		{
			x: "86%",
			y: "18%",
			s: 28,
			rot: -10,
			d: "0.6s"
		},
		{
			x: "92%",
			y: "72%",
			s: 40,
			rot: 20,
			d: "1.8s"
		},
		{
			x: "60%",
			y: "88%",
			s: 20,
			rot: -35,
			d: "3s"
		}
	].map((p) => renderTemplate`<span class="pata flutua"${addAttribute(`left:${p.x};top:${p.y};--s:${p.s}px;--rot:${p.rot}deg;--d:${p.d}`, "style")} data-astro-cid-yjoqt7ja>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-yjoqt7ja": true
	})}</span>`)}</div>`;
}, "/home/claude/ong-ama/src/components/Patas.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { disponiveis, adotados } = separar(await listarAnimais());
	const destaques = disponiveis.slice(0, 3);
	const caes = disponiveis.filter((a) => a.especie === "cachorro").length;
	const gatos = disponiveis.filter((a) => a.especie === "gato").length;
	const icones = {
		pix: "pix",
		coracao: "coracao",
		mao: "mao",
		caixa: "caixa"
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-lcdefpme": true }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="topo" data-astro-cid-lcdefpme>${renderComponent($$result, "Patas", $$Patas, { "data-astro-cid-lcdefpme": true })}<div class="container topo__grade" data-astro-cid-lcdefpme><div class="topo__texto" data-astro-cid-lcdefpme><span class="rotulo entra" style="--i:0" data-astro-cid-lcdefpme>${site.nomeCompleto}</span><h1 class="entra" style="--i:1" data-astro-cid-lcdefpme>${site.hero.titulo}</h1><p class="topo__p entra" style="--i:2" data-astro-cid-lcdefpme>${site.hero.texto}</p><div class="topo__botoes entra" style="--i:3" data-astro-cid-lcdefpme><a href="#animais" class="btn" data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-lcdefpme": true
	})} ${site.hero.botaoPrincipal}</a><a href="#ajudar" class="btn btn--claro" data-astro-cid-lcdefpme>${site.hero.botaoSecundario}</a></div><ul class="topo__garantias entra" style="--i:4" data-astro-cid-lcdefpme><li data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "check",
		"data-astro-cid-lcdefpme": true
	})} Adoção gratuita</li><li data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "check",
		"data-astro-cid-lcdefpme": true
	})} Vacinados</li><li data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "check",
		"data-astro-cid-lcdefpme": true
	})} Castrados</li></ul></div><div class="topo__fotos entra-foto" aria-hidden="true" data-astro-cid-lcdefpme><div class="topo__blob gira" data-astro-cid-lcdefpme></div>${destaques.map((a, i) => renderTemplate`<a${addAttribute(`/animais/${a.slug}/`, "href")}${addAttribute([
		"topo__foto",
		`topo__foto--${i + 1}`,
		"flutua"
	], "class:list")}${addAttribute(`--d:${i * .9}s`, "style")} data-astro-cid-lcdefpme>${renderComponent($$result, "Foto", $$Foto, {
		"animal": a,
		"prioridade": i === 0,
		"data-astro-cid-lcdefpme": true
	})}<span class="topo__nome" data-astro-cid-lcdefpme>${a.nome}</span></a>`)}<span class="topo__balao flutua" style="--d:2.2s" data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "coracao",
		"class": "pulsa",
		"data-astro-cid-lcdefpme": true
	})} ${disponiveis.length} esperando um lar</span></div></div></section>${renderComponent($$result, "Letreiro", $$Letreiro, { "data-astro-cid-lcdefpme": true })}<section class="numeros" data-astro-cid-lcdefpme><div class="container numeros__grade" data-astro-cid-lcdefpme>${site.numeros.map((n) => renderTemplate`<div class="numero revela" data-astro-cid-lcdefpme><span class="numero__valor" data-astro-cid-lcdefpme><span class="contador"${addAttribute(`--alvo:${n.valor}`, "style")}${addAttribute(n.valor, "data-alvo")} data-astro-cid-lcdefpme></span>${n.sufixo}</span><span class="numero__legenda" data-astro-cid-lcdefpme>${n.legenda}</span></div>`)}</div></section><section class="secao animais" id="animais" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="animais__topo" data-astro-cid-lcdefpme><div class="secao-cabeca revela-lado" data-astro-cid-lcdefpme><span class="rotulo" data-astro-cid-lcdefpme>Adoção</span><h2 data-astro-cid-lcdefpme>${site.adocao.titulo}</h2><p data-astro-cid-lcdefpme>${site.adocao.texto}</p></div><fieldset class="filtro revela" data-astro-cid-lcdefpme><legend class="visualmente-oculto" data-astro-cid-lcdefpme>Filtrar por espécie</legend><input type="radio" name="filtro" id="f-todos" class="visualmente-oculto" checked data-astro-cid-lcdefpme><label for="f-todos" data-astro-cid-lcdefpme>Todos <small data-astro-cid-lcdefpme>${disponiveis.length}</small></label><input type="radio" name="filtro" id="f-cachorro" class="visualmente-oculto" data-astro-cid-lcdefpme><label for="f-cachorro" data-astro-cid-lcdefpme>Cachorros <small data-astro-cid-lcdefpme>${caes}</small></label><input type="radio" name="filtro" id="f-gato" class="visualmente-oculto" data-astro-cid-lcdefpme><label for="f-gato" data-astro-cid-lcdefpme>Gatos <small data-astro-cid-lcdefpme>${gatos}</small></label></fieldset></div><div class="grade grade-revela" data-astro-cid-lcdefpme>${disponiveis.map((a, i) => renderTemplate`${renderComponent($$result, "CardAnimal", $$CardAnimal, {
		"animal": a,
		"prioridade": i < 3,
		"data-astro-cid-lcdefpme": true
	})}`)}</div><p class="vazio" data-astro-cid-lcdefpme>Nenhum animal nessa categoria agora. Volte logo! 🐾</p></div></section>${adotados.length > 0 && renderTemplate`<section class="secao adotados" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="secao-cabeca revela-lado" data-astro-cid-lcdefpme><span class="rotulo" data-astro-cid-lcdefpme>Finais felizes</span><h2 data-astro-cid-lcdefpme>${site.adotados.titulo}</h2><p data-astro-cid-lcdefpme>${site.adotados.texto}</p></div><div class="grade grade--pequena grade-revela" data-astro-cid-lcdefpme>${adotados.map((a) => renderTemplate`${renderComponent($$result, "CardAnimal", $$CardAnimal, {
		"animal": a,
		"data-astro-cid-lcdefpme": true
	})}`)}</div></div></section>`}<section class="secao passos" id="como-adotar" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="secao-cabeca revela-lado" data-astro-cid-lcdefpme><span class="rotulo" data-astro-cid-lcdefpme>Passo a passo</span><h2 data-astro-cid-lcdefpme>${site.comoAdotar.titulo}</h2></div><ol class="passos__lista grade-revela" data-astro-cid-lcdefpme>${site.comoAdotar.passos.map((p, i) => renderTemplate`<li class="passo" data-astro-cid-lcdefpme><span class="passo__numero" data-astro-cid-lcdefpme>${i + 1}</span><h3 data-astro-cid-lcdefpme>${p.titulo}</h3><p data-astro-cid-lcdefpme>${p.texto}</p></li>`)}</ol></div></section><section class="secao ajudar" id="ajudar" data-astro-cid-lcdefpme><div class="container" data-astro-cid-lcdefpme><div class="ajudar__grade" data-astro-cid-lcdefpme><div class="ajudar__texto revela-lado" data-astro-cid-lcdefpme><span class="rotulo" data-astro-cid-lcdefpme>Faça parte</span><h2 data-astro-cid-lcdefpme>${site.ajudar.titulo}</h2><p data-astro-cid-lcdefpme>${site.ajudar.texto}</p><div class="pix" data-astro-cid-lcdefpme><div class="pix__cabeca" data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pix",
		"data-astro-cid-lcdefpme": true
	})} <strong data-astro-cid-lcdefpme>Doe pelo Pix</strong></div>${site.doacao.pix ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="pix__chave" data-astro-cid-lcdefpme>${site.doacao.pix}</span><small data-astro-cid-lcdefpme>Chave ${site.doacao.pixTipo} · ${site.doacao.banco}</small>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="pix__chave pix__chave--pendente" data-astro-cid-lcdefpme>Chave Pix em breve</span><small data-astro-cid-lcdefpme>Enquanto isso, chame a gente no Instagram.</small>` })}`}</div></div><ul class="ajudar__lista grade-revela" data-astro-cid-lcdefpme>${site.ajudar.formas.map((f) => renderTemplate`<li class="ajuda" data-astro-cid-lcdefpme><span class="ajuda__icone" data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": icones[f.icone],
		"data-astro-cid-lcdefpme": true
	})}</span><h3 data-astro-cid-lcdefpme>${f.titulo}</h3><p data-astro-cid-lcdefpme>${f.texto}</p>${f.link ? renderTemplate`<a${addAttribute(f.link, "href")} target="_blank" rel="noopener" class="ajuda__link" data-astro-cid-lcdefpme>${f.linkTexto} ${renderComponent($$result, "Icone", $$Icone, {
		"nome": "seta",
		"data-astro-cid-lcdefpme": true
	})}</a>` : renderTemplate`<a${addAttribute(linkWhatsapp(`Olá! Quero ajudar a ONG AMA: ${f.titulo.toLowerCase()}`), "href")} target="_blank" rel="noopener" class="ajuda__link" data-astro-cid-lcdefpme>Falar com a ONG ${renderComponent($$result, "Icone", $$Icone, {
		"nome": "seta",
		"data-astro-cid-lcdefpme": true
	})}</a>`}</li>`)}</ul></div></div></section><section class="chamada" data-astro-cid-lcdefpme><div class="container chamada__caixa revela" data-astro-cid-lcdefpme>${renderComponent($$result, "Patas", $$Patas, { "data-astro-cid-lcdefpme": true })}<h2 data-astro-cid-lcdefpme>Ainda em dúvida? Vem conhecer eles pessoalmente.</h2><p data-astro-cid-lcdefpme>O abrigo fica em ${site.endereco.cidade}. É só combinar um horário.</p><a${addAttribute(linkWhatsapp("Olá! Quero visitar o abrigo da ONG AMA."), "href")} target="_blank" rel="noopener" class="btn btn--laranja" data-astro-cid-lcdefpme>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "whatsapp",
		"data-astro-cid-lcdefpme": true
	})} Combinar uma visita</a></div></section>` })}`;
}, "/home/claude/ong-ama/src/pages/index.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
