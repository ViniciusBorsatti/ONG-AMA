import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as listarAnimais } from "./db_CNeprd8i.mjs";
import { n as site } from "./site_CWQWEC8T.mjs";
// src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	const animais = await listarAnimais();
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[`${site.url}/`, ...animais.map((a) => `${site.url}/animais/${a.slug}/`)].map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
// \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
export { page };
