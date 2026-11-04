import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
import { i as supabaseConfigurado, n as salvarSessao, o as supabasePublico } from "./supabase_CRplykmZ.mjs";
// src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Login = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Login;
	let erro = null;
	const para = Astro.url.searchParams.get("para") || "/admin/";
	if (Astro.request.method === "POST") {
		const form = await Astro.request.formData();
		const email = String(form.get("email") ?? "").trim();
		const senha = String(form.get("senha") ?? "");
		if (!supabaseConfigurado) erro = "O painel ainda não está configurado (faltam as chaves do Supabase).";
		else {
			const { data, error } = await supabasePublico().auth.signInWithPassword({
				email,
				password: senha
			});
			if (error || !data.session) erro = "E-mail ou senha incorretos.";
			else {
				salvarSessao(Astro.cookies, data.session.access_token, data.session.refresh_token);
				return Astro.redirect(para.startsWith("/admin") ? para : "/admin/");
			}
		}
	}
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": "Entrar",
		"logado": false,
		"erro": erro,
		"data-astro-cid-xeimgta2": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="login" data-astro-cid-xeimgta2><h1 data-astro-cid-xeimgta2>Painel da ONG</h1><p data-astro-cid-xeimgta2>Entre com o e-mail e a senha que você recebeu.</p><form method="post" class="form" data-astro-cid-xeimgta2><label class="campo" data-astro-cid-xeimgta2><span data-astro-cid-xeimgta2>E-mail</span><input type="email" name="email" required autocomplete="username" inputmode="email" data-astro-cid-xeimgta2></label><label class="campo" data-astro-cid-xeimgta2><span data-astro-cid-xeimgta2>Senha</span><input type="password" name="senha" required autocomplete="current-password" data-astro-cid-xeimgta2></label><div class="form__acoes" data-astro-cid-xeimgta2><button type="submit" class="btn" data-astro-cid-xeimgta2>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-xeimgta2": true
	})} Entrar</button></div></form></div>` })}`;
}, "/home/claude/ong-ama/src/pages/admin/login.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/login.astro";
var $$url = "/admin/login/";
// \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
export { page };
