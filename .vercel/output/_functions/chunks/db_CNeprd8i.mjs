import { i as supabaseConfigurado, o as supabasePublico } from "./supabase_CRplykmZ.mjs";
// src/lib/db.ts
function cliente(c) {
	return c ?? supabasePublico();
}
async function listarAnimais(c) {
	if (!supabaseConfigurado) return [];
	try {
		const { data, error } = await cliente(c).from("animais").select("*").order("status", { ascending: true }).order("created_at", { ascending: false });
		if (error) throw new Error(error.message);
		return data ?? [];
	} catch (e) {
		console.error("Falha ao listar animais:", e);
		return [];
	}
}
async function buscarAnimalPorId(id, c) {
	if (!supabaseConfigurado) return null;
	const { data, error } = await cliente(c).from("animais").select("*").eq("id", id).maybeSingle();
	if (error) throw new Error(error.message);
	return data ?? null;
}
function separar(animais) {
	return {
		disponiveis: animais.filter((a) => a.status === "disponivel"),
		adotados: animais.filter((a) => a.status === "adotado").sort((a, b) => (b.data_adocao ?? "").localeCompare(a.data_adocao ?? ""))
	};
}
export { listarAnimais as n, separar as r, buscarAnimalPorId as t };
