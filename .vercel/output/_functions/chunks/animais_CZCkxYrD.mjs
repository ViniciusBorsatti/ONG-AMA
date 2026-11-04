// src/data/animais.ts
var rotulos = {
	especie: {
		cachorro: "Cachorro",
		gato: "Gato"
	},
	sexo: {
		macho: "Macho",
		femea: "Fêmea"
	},
	porte: {
		pequeno: "Porte pequeno",
		medio: "Porte médio",
		grande: "Porte grande"
	},
	status: {
		disponivel: "Disponível",
		adotado: "Adotado"
	}
};
function mesAno(data) {
	if (!data) return "";
	const [ano, mes] = data.split("-").map(Number);
	return `${[
		"jan",
		"fev",
		"mar",
		"abr",
		"mai",
		"jun",
		"jul",
		"ago",
		"set",
		"out",
		"nov",
		"dez"
	][(mes ?? 1) - 1]}/${ano}`;
}
function slugify(texto) {
	return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export { rotulos as n, slugify as r, mesAno as t };
