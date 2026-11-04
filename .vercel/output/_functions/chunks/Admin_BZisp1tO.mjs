import { A as renderHead, O as renderTemplate, S as renderComponent, T as renderSlot } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { n as $$Icone, t as $$Logo } from "./Logo_BK35kd9S.mjs";
import { n as site } from "./site_CWQWEC8T.mjs";
// src/layouts/Admin.astro
createAstro("https://ong-ama.vercel.app");
var $$Admin = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Admin;
	const { titulo, logado = true, erro = null, aviso = null } = Astro.props;
	const ok = Astro.url.searchParams.get("ok");
	const mensagens = {
		salvo: "Animal salvo! Já está no site.",
		adotado: "Que bom! Marcado como adotado.",
		disponivel: "Voltou pra lista de disponíveis.",
		excluido: "Animal excluído.",
		equipe: "Conta criada. Já pode entrar com e-mail e senha."
	};
	return renderTemplate`<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${titulo} · Painel ${site.nome}</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#2f7a2b">${renderHead($$result)}</head><body class="admin"><header class="admin__topo"><div class="container admin__linha">${renderComponent($$result, "Logo", $$Logo, {})}${logado && renderTemplate`<nav class="admin__nav" aria-label="Painel"><a href="/admin/">Animais</a><a href="/admin/equipe/">Equipe</a><a href="/" target="_blank" rel="noopener">Ver site</a><form method="post" action="/admin/sair/"><button type="submit" class="admin__sair">Sair</button></form></nav>`}</div></header><main class="container admin__main">${ok && mensagens[ok] && renderTemplate`<p class="alerta alerta--ok">${renderComponent($$result, "Icone", $$Icone, { "nome": "check" })} ${mensagens[ok]}</p>`}${aviso && renderTemplate`<p class="alerta alerta--aviso">${aviso}</p>`}${erro && renderTemplate`<p class="alerta alerta--erro">${renderComponent($$result, "Icone", $$Icone, { "nome": "x" })} ${erro}</p>`}${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "/home/claude/ong-ama/src/layouts/Admin.astro", void 0);
export { $$Admin as t };
