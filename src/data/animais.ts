// Tipos e rótulos dos animais. Os dados em si ficam no Supabase
// (tabela `animais`) e são editados pelo painel em /admin.

export type Especie = 'cachorro' | 'gato';
export type Sexo = 'macho' | 'femea';
export type Porte = 'pequeno' | 'medio' | 'grande';
export type Status = 'disponivel' | 'adotado';

export interface Animal {
  id: string;
  slug: string;
  nome: string;
  especie: Especie;
  sexo: Sexo;
  porte: Porte;
  idade: string;
  personalidade: string; // uma frase curta, que aparece no card
  historia: string | null; // texto maior, que aparece na página do animal
  castrado: boolean;
  vacinado: boolean;
  foto: string | null; // URL completa (ou caminho em /img/animais/ para as fotos iniciais)
  cor: string; // cor de fundo enquanto a foto carrega (hex)
  status: Status;
  data_adocao: string | null; // 'AAAA-MM-DD'
  tags: string[];
  post: string | null; // link do post no Instagram
  created_at: string;
}

export const rotulos = {
  especie: { cachorro: 'Cachorro', gato: 'Gato' },
  sexo: { macho: 'Macho', femea: 'Fêmea' },
  porte: { pequeno: 'Porte pequeno', medio: 'Porte médio', grande: 'Porte grande' },
  status: { disponivel: 'Disponível', adotado: 'Adotado' },
} as const;

export function mesAno(data?: string | null): string {
  if (!data) return '';
  const [ano, mes] = data.split('-').map(Number);
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return `${meses[(mes ?? 1) - 1]}/${ano}`;
}

export function slugify(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
