import { createClient } from "@supabase/supabase-js";
// src/lib/supabase.ts
var url = "https://vwfcfuvtrmadccpmqwlo.supabase.co";
var anon = "sb_publishable_hrG2SnMClZ8iC-GL5A-rhw_W_FerY1Q";
var supabaseConfigurado = Boolean(anon);
function novoCliente(chave) {
	return createClient(url, chave, { auth: {
		persistSession: false,
		autoRefreshToken: false,
		detectSessionInUrl: false
	} });
}
/** Cliente anônimo: leitura pública (site). */
function supabasePublico() {
	return novoCliente(anon);
}
/** Cliente com chave de serviço: só para criar contas da equipe. */
function supabaseAdmin() {
	return null;
}
var COOKIE_ACCESS = "ama-access";
var COOKIE_REFRESH = "ama-refresh";
var opcoesCookie = {
	path: "/",
	httpOnly: true,
	sameSite: "lax",
	secure: true,
	maxAge: 2592e3
};
function salvarSessao(cookies, access, refresh) {
	cookies.set(COOKIE_ACCESS, access, opcoesCookie);
	cookies.set(COOKIE_REFRESH, refresh, opcoesCookie);
}
function limparSessao(cookies) {
	cookies.delete(COOKIE_ACCESS, { path: "/" });
	cookies.delete(COOKIE_REFRESH, { path: "/" });
}
/** Cliente autenticado com a sessão guardada nos cookies. Renova o token se precisar. */
async function supabaseDaSessao(cookies) {
	const access = cookies.get(COOKIE_ACCESS)?.value;
	const refresh = cookies.get(COOKIE_REFRESH)?.value;
	if (!access || !refresh) return {
		cliente: null,
		usuario: null
	};
	const cliente = novoCliente(anon);
	const { data, error } = await cliente.auth.setSession({
		access_token: access,
		refresh_token: refresh
	});
	if (error || !data.session || !data.user) {
		limparSessao(cookies);
		return {
			cliente: null,
			usuario: null
		};
	}
	if (data.session.access_token !== access) salvarSessao(cookies, data.session.access_token, data.session.refresh_token);
	return {
		cliente,
		usuario: data.user
	};
}
export { supabaseDaSessao as a, supabaseConfigurado as i, salvarSessao as n, supabasePublico as o, supabaseAdmin as r, limparSessao as t };
