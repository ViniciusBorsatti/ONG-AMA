import type { APIRoute } from 'astro';
import { listarAnimais } from '../lib/db';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  const animais = await listarAnimais();
  const urls = [`${site.url}/`, ...animais.map((a) => `${site.url}/animais/${a.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
