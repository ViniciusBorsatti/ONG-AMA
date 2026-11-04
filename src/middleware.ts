import { defineMiddleware } from 'astro:middleware';
import { supabaseDaSessao } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const protegido = pathname.startsWith('/admin') && !pathname.startsWith('/admin/login');
  if (!protegido) return next();

  const { cliente, usuario } = await supabaseDaSessao(context.cookies);
  if (!cliente || !usuario) {
    return context.redirect(`/admin/login/?para=${encodeURIComponent(pathname)}`);
  }
  context.locals.supabase = cliente;
  context.locals.usuario = usuario;
  return next();
});
