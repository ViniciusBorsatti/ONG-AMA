import { t as sequence, vt as defineMiddleware } from "./chunks/sequence_LxxwxQNH.mjs";
import { a as supabaseDaSessao } from "./chunks/supabase_CRplykmZ.mjs";
// src/middleware.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;
	if (!(pathname.startsWith("/admin") && !pathname.startsWith("/admin/login"))) return next();
	const { cliente, usuario } = await supabaseDaSessao(context.cookies);
	if (!cliente || !usuario) return context.redirect(`/admin/login/?para=${encodeURIComponent(pathname)}`);
	context.locals.supabase = cliente;
	context.locals.usuario = usuario;
	return next();
});
// \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
export { onRequest };
