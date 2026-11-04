// Cadastro dos animais. Para marcar um animal como adotado, troque
// `status: 'disponivel'` por `status: 'adotado'` e publique o site.
//
// As fotos ficam em src/assets/img/animais/<foto>. Se o arquivo não existir,
// o site mostra uma ilustração no lugar.

export type Especie = 'cachorro' | 'gato';
export type Sexo = 'macho' | 'femea';
export type Porte = 'pequeno' | 'medio' | 'grande';
export type Status = 'disponivel' | 'adotado';

export interface Animal {
  slug: string;
  nome: string;
  especie: Especie;
  sexo: Sexo;
  porte: Porte;
  idade: string;
  personalidade: string; // uma frase curta, que aparece no card
  historia?: string; // texto maior, que aparece na página do animal
  castrado: boolean;
  vacinado?: boolean;
  foto: string;
  cor: string; // cor de fundo da foto/ilustração (hex)
  status: Status;
  dataAdocao?: string; // 'AAAA-MM'
  tags?: string[];
}

// DADOS DE EXEMPLO (fictícios). Trocar pelos animais reais da ONG.
export const animais: Animal[] = [
  {
    slug: 'orelha',
    nome: 'Orelha',
    especie: 'cachorro',
    sexo: 'macho',
    porte: 'medio',
    idade: '3 anos',
    personalidade: 'Companheiro, calmo e apaixonado por carinho atrás da orelha.',
    historia:
      'Orelha foi resgatado depois de ser encontrado machucado na beira da estrada. Hoje está recuperado, adora dormir no sol e segue quem estiver com a coleira na mão.',
    castrado: true,
    vacinado: true,
    foto: 'orelha.jpg',
    cor: '#E8B97A',
    status: 'disponivel',
    tags: ['dócil', 'bom com crianças'],
  },
  {
    slug: 'mel',
    nome: 'Mel',
    especie: 'gato',
    sexo: 'femea',
    porte: 'pequeno',
    idade: '1 ano',
    personalidade: 'Curiosa e brincalhona. Ronrona só de ouvir o seu nome.',
    historia:
      'Mel chegou filhote, junto com os irmãos, numa caixa deixada na frente do abrigo. É a mais esperta da turma e adora caixas de papelão.',
    castrado: true,
    vacinado: true,
    foto: 'mel.jpg',
    cor: '#F4C7A1',
    status: 'disponivel',
    tags: ['ativa', 'convive com outros gatos'],
  },
  {
    slug: 'thor',
    nome: 'Thor',
    especie: 'cachorro',
    sexo: 'macho',
    porte: 'grande',
    idade: '5 anos',
    personalidade: 'Grandão de coração mole. Quer um quintal e alguém pra correr junto.',
    historia:
      'Thor viveu acorrentado por anos até ser resgatado. Demorou pra confiar, mas hoje é o primeiro a abanar o rabo quando chega visita.',
    castrado: true,
    vacinado: true,
    foto: 'thor.jpg',
    cor: '#C9A27E',
    status: 'disponivel',
    tags: ['precisa de espaço', 'guarda'],
  },
  {
    slug: 'luna',
    nome: 'Luna',
    especie: 'gato',
    sexo: 'femea',
    porte: 'pequeno',
    idade: '4 anos',
    personalidade: 'Independente e elegante. Gosta de colo, mas só quando ela decide.',
    historia:
      'Luna foi encontrada vivendo embaixo de um carro no centro. É tranquila, limpa e perfeita para apartamento.',
    castrado: true,
    vacinado: true,
    foto: 'luna.jpg',
    cor: '#B9B4C7',
    status: 'disponivel',
    tags: ['apartamento', 'tranquila'],
  },
  {
    slug: 'pipoca',
    nome: 'Pipoca',
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'pequeno',
    idade: '8 meses',
    personalidade: 'Pura energia. Pula, corre, late pro vento e dorme no seu pé.',
    historia:
      'Pipoca é filhote de uma mãe resgatada grávida. Nasceu no abrigo e nunca conheceu a rua. Está pronta pra ser a alegria de uma casa.',
    castrado: false,
    vacinado: true,
    foto: 'pipoca.jpg',
    cor: '#F2D28C',
    status: 'disponivel',
    tags: ['filhote', 'muito ativa'],
  },
  {
    slug: 'bento',
    nome: 'Bento',
    especie: 'gato',
    sexo: 'macho',
    porte: 'medio',
    idade: '6 anos',
    personalidade: 'Gato de sofá. Come, dorme, ronrona e repete.',
    historia:
      'Bento foi devolvido depois de uma adoção que não deu certo. Não guarda mágoa: só quer um lugar quentinho e uma pessoa pra chamar de dele.',
    castrado: true,
    vacinado: true,
    foto: 'bento.jpg',
    cor: '#9FB8A4',
    status: 'disponivel',
    tags: ['adulto', 'calmo'],
  },
  {
    slug: 'nina',
    nome: 'Nina',
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'medio',
    idade: '2 anos',
    personalidade: 'Tímida no começo, grudenta depois. Adora passear.',
    castrado: true,
    vacinado: true,
    foto: 'nina.jpg',
    cor: '#D8A48F',
    status: 'adotado',
    dataAdocao: '2026-09',
  },
  {
    slug: 'simba',
    nome: 'Simba',
    especie: 'gato',
    sexo: 'macho',
    porte: 'medio',
    idade: '2 anos',
    personalidade: 'Rei da casa. Laranja, falante e cheio de personalidade.',
    castrado: true,
    vacinado: true,
    foto: 'simba.jpg',
    cor: '#F0A868',
    status: 'adotado',
    dataAdocao: '2026-08',
  },
  {
    slug: 'fred',
    nome: 'Fred',
    especie: 'cachorro',
    sexo: 'macho',
    porte: 'pequeno',
    idade: '7 anos',
    personalidade: 'Senhorzinho simpático que só queria um sofá. Conseguiu.',
    castrado: true,
    vacinado: true,
    foto: 'fred.jpg',
    cor: '#B5A58E',
    status: 'adotado',
    dataAdocao: '2026-06',
  },
];

export const disponiveis = animais.filter((a) => a.status === 'disponivel');
export const adotados = animais
  .filter((a) => a.status === 'adotado')
  .sort((a, b) => (b.dataAdocao ?? '').localeCompare(a.dataAdocao ?? ''));

export const rotulos = {
  especie: { cachorro: 'Cachorro', gato: 'Gato' },
  sexo: { macho: 'Macho', femea: 'Fêmea' },
  porte: { pequeno: 'Porte pequeno', medio: 'Porte médio', grande: 'Porte grande' },
} as const;

export function mesAno(data?: string): string {
  if (!data) return '';
  const [ano, mes] = data.split('-').map(Number);
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return `${meses[(mes ?? 1) - 1]}/${ano}`;
}
