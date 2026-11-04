import { r as slugify } from "./animais_CZCkxYrD.mjs";
import sharp from "sharp";
// src/lib/salvar.ts
var CORES = [
	"#C9A27E",
	"#E8C9A0",
	"#8F7A66",
	"#D7B088",
	"#B9A99A",
	"#9FB8A4",
	"#B9B4C7",
	"#F0A868"
];
function texto(form, campo) {
	return String(form.get(campo) ?? "").trim();
}
async function tratarFoto(arquivo) {
	const entrada = Buffer.from(await arquivo.arrayBuffer());
	return sharp(entrada).rotate().resize(1e3, 1e3, {
		fit: "cover",
		position: "attention"
	}).jpeg({
		quality: 84,
		mozjpeg: true
	}).toBuffer();
}
async function salvarAnimal(supabase, form, existente) {
	const nome = texto(form, "nome");
	if (!nome) return {
		ok: false,
		erro: "Falta o nome do animal."
	};
	const especie = texto(form, "especie");
	const sexo = texto(form, "sexo");
	const porte = texto(form, "porte");
	if (!["cachorro", "gato"].includes(especie)) return {
		ok: false,
		erro: "Escolha se é cachorro ou gato."
	};
	if (!["macho", "femea"].includes(sexo)) return {
		ok: false,
		erro: "Escolha o sexo."
	};
	if (![
		"pequeno",
		"medio",
		"grande"
	].includes(porte)) return {
		ok: false,
		erro: "Escolha o porte."
	};
	const status = texto(form, "status") === "adotado" ? "adotado" : "disponivel";
	const dataAdocao = texto(form, "data_adocao");
	const tags = texto(form, "tags").split(",").map((t) => t.trim()).filter(Boolean);
	let slug = existente?.slug ?? slugify(nome);
	if (!existente) {
		const { data: iguais } = await supabase.from("animais").select("slug").like("slug", `${slug}%`);
		const usados = new Set((iguais ?? []).map((r) => r.slug));
		let n = 2;
		const base = slug;
		while (usados.has(slug)) slug = `${base}-${n++}`;
	}
	let foto = existente?.foto ?? null;
	const arquivo = form.get("foto");
	if (arquivo instanceof File && arquivo.size > 0) {
		if (!arquivo.type.startsWith("image/")) return {
			ok: false,
			erro: "O arquivo da foto precisa ser uma imagem."
		};
		if (arquivo.size > 15728640) return {
			ok: false,
			erro: "A foto é muito grande (máximo 15 MB)."
		};
		let jpeg;
		try {
			jpeg = await tratarFoto(arquivo);
		} catch {
			return {
				ok: false,
				erro: "Não consegui ler essa foto. Tente outra (JPG ou PNG)."
			};
		}
		const caminho = `${slug}-${Date.now()}.jpg`;
		const { error: erroUpload } = await supabase.storage.from("fotos").upload(caminho, jpeg, {
			contentType: "image/jpeg",
			cacheControl: "31536000",
			upsert: false
		});
		if (erroUpload) return {
			ok: false,
			erro: `Não consegui enviar a foto: ${erroUpload.message}`
		};
		foto = supabase.storage.from("fotos").getPublicUrl(caminho).data.publicUrl;
	}
	const registro = {
		slug,
		nome,
		especie,
		sexo,
		porte,
		idade: texto(form, "idade"),
		personalidade: texto(form, "personalidade"),
		historia: texto(form, "historia") || null,
		castrado: form.get("castrado") === "on",
		vacinado: form.get("vacinado") === "on",
		foto,
		cor: existente?.cor ?? CORES[Math.floor(Math.random() * CORES.length)],
		status,
		data_adocao: status === "adotado" ? dataAdocao || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : null,
		tags,
		post: texto(form, "post") || null
	};
	if (existente) {
		const { error } = await supabase.from("animais").update(registro).eq("id", existente.id);
		if (error) return {
			ok: false,
			erro: `Não consegui salvar: ${error.message}`
		};
		return {
			ok: true,
			id: existente.id
		};
	}
	const { data, error } = await supabase.from("animais").insert(registro).select("id").single();
	if (error) return {
		ok: false,
		erro: `Não consegui salvar: ${error.message}`
	};
	return {
		ok: true,
		id: data.id
	};
}
async function mudarStatus(supabase, id, status) {
	const { error } = await supabase.from("animais").update({
		status,
		data_adocao: status === "adotado" ? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : null
	}).eq("id", id);
	return error ? error.message : null;
}
async function excluirAnimal(supabase, animal) {
	const { error } = await supabase.from("animais").delete().eq("id", animal.id);
	if (error) return error.message;
	const marca = "/storage/v1/object/public/fotos/";
	if (animal.foto && animal.foto.includes(marca)) {
		const caminho = animal.foto.split(marca)[1];
		if (caminho) await supabase.storage.from("fotos").remove([caminho]);
	}
	return null;
}
export { mudarStatus as n, salvarAnimal as r, excluirAnimal as t };
