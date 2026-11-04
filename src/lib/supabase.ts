import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const service = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseConfigurado = Boolean(url && anon);

function novoCliente(chave: string): SupabaseClient {
  return createClient(url, chave, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}

/** Cliente anônimo: leitura pública (site). */
export function supabasePublico(): SupabaseClient {
  return novoCliente(anon);
}

/** Cliente com chave de serviço: só para criar contas da equipe. */
export function supabaseAdmin(): SupabaseClient | null {
  return service ? novoCliente(service) : null;
}

const COOKIE_ACCESS = 'ama-access';
const COOKIE_REFRESH = 'ama-refresh';
const opcoesCookie = {
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: import.meta.env.PROD,
  maxAge: 60 * 60 * 24 * 30,
};

export function salvarSessao(cookies: AstroCookies, access: string, refresh: string) {
  cookies.set(COOKIE_ACCESS, access, opcoesCookie);
  cookies.set(COOKIE_REFRESH, refresh, opcoesCookie);
}

export function limparSessao(cookies: AstroCookies) {
  cookies.delete(COOKIE_ACCESS, { path: '/' });
  cookies.delete(COOKIE_REFRESH, { path: '/' });
}

/** Cliente autenticado com a sessão guardada nos cookies. Renova o token se precisar. */
export async function supabaseDaSessao(cookies: AstroCookies) {
  const access = cookies.get(COOKIE_ACCESS)?.value;
  const refresh = cookies.get(COOKIE_REFRESH)?.value;
  if (!access || !refresh) return { cliente: null, usuario: null };

  const cliente = novoCliente(anon);
  const { data, error } = await cliente.auth.setSession({ access_token: access, refresh_token: refresh });
  if (error || !data.session || !data.user) {
    limparSessao(cookies);
    return { cliente: null, usuario: null };
  }
  if (data.session.access_token !== access) {
    salvarSessao(cookies, data.session.access_token, data.session.refresh_token);
  }
  return { cliente, usuario: data.user };
}
