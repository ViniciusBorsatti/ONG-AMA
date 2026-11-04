import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { O as renderTemplate, P as addAttribute, S as renderComponent, k as maybeRenderHead } from "./sequence_LxxwxQNH.mjs";
import { t as createComponent } from "./astro-component_3Qwf4cC1.mjs";
import { t as createAstro } from "./compiler_BgDax1xC.mjs";
import { t as $$Admin } from "./Admin_BZisp1tO.mjs";
import { n as $$Icone } from "./Logo_BK35kd9S.mjs";
import { r as supabaseAdmin } from "./supabase_CRplykmZ.mjs";
// src/pages/admin/equipe.astro
var equipe_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Equipe,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://ong-ama.vercel.app");
var $$Equipe = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Equipe;
	const admin = supabaseAdmin();
	let erro = null;
	let aviso = admin ? null : "Para criar contas, falta configurar a SUPABASE_SERVICE_ROLE_KEY na Vercel.";
	if (Astro.request.method === "POST" && admin) {
		const form = await Astro.request.formData();
		const email = String(form.get("email") ?? "").trim();
		const senha = String(form.get("senha") ?? "");
		const nome = String(form.get("nome") ?? "").trim();
		if (!email || senha.length < 8) erro = "Informe o e-mail e uma senha com pelo menos 8 caracteres.";
		else {
			const { error } = await admin.auth.admin.createUser({
				email,
				password: senha,
				email_confirm: true,
				user_metadata: { nome }
			});
			if (error) erro = `Não consegui criar: ${error.message}`;
			else return Astro.redirect("/admin/equipe/?ok=equipe");
		}
	}
	const { data } = admin ? await admin.auth.admin.listUsers({ perPage: 100 }) : { data: { users: [] } };
	const pessoas = data?.users ?? [];
	return renderTemplate`${renderComponent($$result, "Admin", $$Admin, {
		"titulo": "Equipe",
		"erro": erro,
		"aviso": aviso,
		"data-astro-cid-chv4ocq6": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin__cabeca" data-astro-cid-chv4ocq6><h1 data-astro-cid-chv4ocq6>Equipe</h1></div><ul class="pessoas" data-astro-cid-chv4ocq6>${pessoas.map((p) => renderTemplate`<li data-astro-cid-chv4ocq6><span class="pessoas__avatar" data-astro-cid-chv4ocq6>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "coracao",
		"data-astro-cid-chv4ocq6": true
	})}</span><span data-astro-cid-chv4ocq6><strong data-astro-cid-chv4ocq6>${p.user_metadata?.nome || p.email}</strong><small data-astro-cid-chv4ocq6>${p.email}${p.id === Astro.locals.usuario.id ? " · você" : ""}</small></span></li>`)}</ul><h2 data-astro-cid-chv4ocq6>Adicionar alguém</h2><form method="post" class="form" data-astro-cid-chv4ocq6><div class="form__linha" data-astro-cid-chv4ocq6><label class="campo" data-astro-cid-chv4ocq6><span data-astro-cid-chv4ocq6>Nome</span><input type="text" name="nome" placeholder="Como ela quer ser chamada" data-astro-cid-chv4ocq6></label><label class="campo" data-astro-cid-chv4ocq6><span data-astro-cid-chv4ocq6>E-mail</span><input type="email" name="email" required inputmode="email" autocomplete="off" data-astro-cid-chv4ocq6></label></div><label class="campo" data-astro-cid-chv4ocq6><span data-astro-cid-chv4ocq6>Senha inicial</span><input type="text" name="senha" required minlength="8" autocomplete="off" placeholder="Mínimo 8 caracteres" data-astro-cid-chv4ocq6><small data-astro-cid-chv4ocq6>Passe a senha pra pessoa por WhatsApp. Ela entra em /admin com o e-mail e essa senha.</small></label><div class="form__acoes" data-astro-cid-chv4ocq6><button type="submit" class="btn"${addAttribute(!admin, "disabled")} data-astro-cid-chv4ocq6>${renderComponent($$result, "Icone", $$Icone, {
		"nome": "pata",
		"data-astro-cid-chv4ocq6": true
	})} Criar conta</button></div></form>` })}`;
}, "/home/claude/ong-ama/src/pages/admin/equipe.astro", void 0);
var $$file = "/home/claude/ong-ama/src/pages/admin/equipe.astro";
var $$url = "/admin/equipe/";
// \0virtual:astro:page:src/pages/admin/equipe@_@astro
var page = () => equipe_exports;
export { page };
