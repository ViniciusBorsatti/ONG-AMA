import { A as renderHead, F as unescapeHTML, O as renderTemplate, P as addAttribute, S as renderComponent, T as renderSlot, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { n as $$Icone, t as $$Logo } from "./Logo_BK35kd9S.mjs";
import { n as site, t as linkWhatsapp } from "./site_CWQWEC8T.mjs";
// src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="cabecalho" data-astro-cid-nen7h5rs><div class="container cabecalho__linha" data-astro-cid-nen7h5rs>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-nen7h5rs": true })}<input type="checkbox" id="menu" class="visualmente-oculto menu__toggle" data-astro-cid-nen7h5rs><label for="menu" class="menu__botao" aria-label="Abrir menu" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span></label><nav class="menu" aria-label="Principal" data-astro-cid-nen7h5rs>${[
		{
			href: "/#animais",
			texto: "Adotar"
		},
		{
			href: "/#como-adotar",
			texto: "Como funciona"
		},
		{
			href: "/#ajudar",
			texto: "Ajudar"
		},
		{
			href: "/#contato",
			texto: "Contato"
		}
	].map((l) => renderTemplate`<a${addAttribute(l.href, "href")} data-astro-cid-nen7h5rs>${l.texto}</a>`)}<a href="/#ajudar" class="btn btn--laranja menu__cta" data-astro-cid-nen7h5rs>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "coracao",
		"data-astro-cid-nen7h5rs": true
	})} Doar</a></nav></div></header>`;
}, "/home/claude/ong-ama/src/components/Header.astro", void 0);
// src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const ano = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="rodape" id="contato" data-astro-cid-jo6i4kqk><div class="container rodape__grade" data-astro-cid-jo6i4kqk><div class="rodape__sobre" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Logo", $$Logo, {
		"class": "rodape__logo",
		"data-astro-cid-jo6i4kqk": true
	})}<p data-astro-cid-jo6i4kqk>${site.nomeCompleto}</p><p class="rodape__descricao" data-astro-cid-jo6i4kqk>${site.descricao}</p></div><div class="rodape__coluna" data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>${site.contato.titulo}</h4><p data-astro-cid-jo6i4kqk>${site.contato.texto}</p><div class="rodape__links" data-astro-cid-jo6i4kqk><a${addAttribute(linkWhatsapp(), "href")} target="_blank" rel="noopener" class="rodape__link" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "whatsapp",
		"data-astro-cid-jo6i4kqk": true
	})} ${site.whatsapp ? "WhatsApp" : "Mensagem pelo Instagram"}</a><a${addAttribute(site.instagramUrl, "href")} target="_blank" rel="noopener" class="rodape__link" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "instagram",
		"data-astro-cid-jo6i4kqk": true
	})} @${site.instagram}</a>${site.email && renderTemplate`<a${addAttribute(`mailto:${site.email}`, "href")} class="rodape__link" data-astro-cid-jo6i4kqk>${site.email}</a>`}</div></div><div class="rodape__coluna" data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Onde estamos</h4><address data-astro-cid-jo6i4kqk>${site.endereco.rua}<br data-astro-cid-jo6i4kqk>${site.endereco.bairro}, ${site.endereco.cidade}/${site.endereco.uf}<br data-astro-cid-jo6i4kqk>CEP ${site.endereco.cep}</address><a${addAttribute(site.endereco.mapa, "href")} target="_blank" rel="noopener" class="rodape__link" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "mapa",
		"data-astro-cid-jo6i4kqk": true
	})} Ver no mapa</a></div></div><div class="container rodape__base" data-astro-cid-jo6i4kqk><span data-astro-cid-jo6i4kqk>© ${ano} ${site.nome}. Todos os bichos reservados. 🐾</span><span data-astro-cid-jo6i4kqk>${site.rodape.nota}</span></div></footer>`;
}, "/home/claude/ong-ama/src/components/Footer.astro", void 0);
// src/layouts/Base.astro
createAstro("https://ong-ama.vercel.app");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { titulo, descricao = site.descricao, imagem = "/og.png", jsonLd } = Astro.props;
	const tituloCompleto = titulo ? `${titulo} · ${site.nome}` : `${site.nome} · Adoção de cães e gatos em ${site.cidade}`;
	const canonical = new URL(Astro.url.pathname, Astro.site);
	const organizacao = {
		"@context": "https://schema.org",
		"@type": "NGO",
		name: site.nomeCompleto,
		alternateName: site.nome,
		url: site.url,
		logo: `${site.url}/favicon.svg`,
		sameAs: [site.instagramUrl],
		address: {
			"@type": "PostalAddress",
			streetAddress: site.endereco.rua,
			addressLocality: site.endereco.cidade,
			addressRegion: site.endereco.uf,
			postalCode: site.endereco.cep,
			addressCountry: "BR"
		}
	};
	return renderTemplate`<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${tituloCompleto}</title><meta name="description"${addAttribute(descricao, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="sitemap" href="/sitemap.xml"><meta name="theme-color" content="#2f7a2b"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(tituloCompleto, "content")}><meta property="og:description"${addAttribute(descricao, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(new URL(imagem, Astro.site), "content")}><meta property="og:locale" content="pt_BR"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd ?? organizacao))}<\/script>${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/claude/ong-ama/src/layouts/Base.astro", void 0);
export { $$Base as t };
