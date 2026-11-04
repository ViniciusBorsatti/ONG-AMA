// Cadastro dos animais. Para marcar um animal como adotado, troque
// `status: 'disponivel'` por `status: 'adotado'` e publique o site.
//
// As fotos ficam em src/assets/img/animais/<foto>. Se o arquivo não existir,
// o site mostra uma ilustração no lugar.
//
// ATENÇÃO: os animais abaixo vieram dos posts de adoção do Instagram da ONG
// (campo `post`). Os nomes marcados com "nome provisório" foram inventados
// porque o post não dizia o nome. Confirmar com a ONG: nome, idade, status
// (quem já foi adotado) e se castrou.

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
  cor: string; // cor de fundo enquanto a foto carrega (hex)
  status: Status;
  dataAdocao?: string; // 'AAAA-MM'
  tags?: string[];
  post?: string; // link do post no Instagram
}

export const animais: Animal[] = [
  {
    slug: 'bento',
    nome: 'Bento', // nome provisório
    especie: 'cachorro',
    sexo: 'macho',
    porte: 'medio',
    idade: 'Filhote',
    personalidade: 'Sorriso de orelha a orelha. Vai ser o cão mais feliz da sua rua.',
    historia:
      'Bebê em busca de uma família amorosa e responsável. Porte pequeno para médio quando crescer. Adoção livre de correntes: a ONG faz uma entrevista antes para garantir que ele vai viver solto e feliz.',
    castrado: false,
    vacinado: true,
    foto: 'bandana.jpg',
    cor: '#C9A27E',
    status: 'disponivel',
    tags: ['filhote', 'porte P/M', 'livre de correntes'],
    post: 'https://www.instagram.com/p/DdUowwmmpYx/',
  },
  {
    slug: 'lila',
    nome: 'Lila', // nome provisório
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'medio',
    idade: 'Filhote',
    personalidade: 'Olhar doce e jeito calmo. Vai ser a companhia de todas as horas.',
    historia:
      'Bebê em busca de uma família amorosa e responsável. Porte pequeno para médio quando crescer. Adoção livre de correntes, com entrevista pela ONG.',
    castrado: false,
    vacinado: true,
    foto: 'lila.jpg',
    cor: '#E8C9A0',
    status: 'disponivel',
    tags: ['filhote', 'porte P/M', 'livre de correntes'],
    post: 'https://www.instagram.com/p/DdSYCCwlAyD/',
  },
  {
    slug: 'urso',
    nome: 'Urso', // nome provisório
    especie: 'cachorro',
    sexo: 'macho',
    porte: 'medio',
    idade: 'Filhote',
    personalidade: 'Uma bola de pelo que parece um ursinho. Carinho garantido.',
    historia:
      'Bebê em busca de uma família amorosa e responsável. Porte pequeno para médio quando crescer. Adoção livre de correntes, com entrevista pela ONG.',
    castrado: false,
    vacinado: true,
    foto: 'urso.jpg',
    cor: '#8F7A66',
    status: 'disponivel',
    tags: ['filhote', 'porte P/M', 'peludo'],
    post: 'https://www.instagram.com/p/DdSYQhQlCE4/',
  },
  {
    slug: 'flor',
    nome: 'Flor', // nome provisório
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'medio',
    idade: 'Filhote',
    personalidade: 'Elegante de lacinho e cheia de curiosidade pelo mundo.',
    historia:
      'Bebê em busca de uma família amorosa e responsável. Porte pequeno para médio quando crescer. Adoção livre de correntes, com entrevista pela ONG.',
    castrado: false,
    vacinado: true,
    foto: 'flor.jpg',
    cor: '#D7B088',
    status: 'disponivel',
    tags: ['filhote', 'porte P/M', 'livre de correntes'],
    post: 'https://www.instagram.com/p/DdUpW2VGg1v/',
  },
  {
    slug: 'mel',
    nome: 'Mel', // nome provisório
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'medio',
    idade: '6 meses',
    personalidade: 'Pura alegria. Recebe todo mundo com esse sorriso aí.',
    historia:
      'Mocinha de 6 meses em busca de uma família. Castração garantida pela ONG.',
    castrado: false,
    vacinado: true,
    foto: 'sorriso.jpg',
    cor: '#E3D2B5',
    status: 'disponivel',
    tags: ['jovem', 'muito alegre'],
    post: 'https://www.instagram.com/p/DdShKL8srmC/',
  },
  {
    slug: 'canela',
    nome: 'Canela', // nome provisório
    especie: 'cachorro',
    sexo: 'femea',
    porte: 'pequeno',
    idade: 'Jovem',
    personalidade: 'Dócil e grudenta. Esse olhar derrete qualquer um.',
    historia:
      'Castrada, dócil e pronta para ir pra casa. Faça a diferença na vida de quem precisa: adote esta garota.',
    castrado: true,
    vacinado: true,
    foto: 'canela.jpg',
    cor: '#C79A6B',
    status: 'disponivel',
    tags: ['dócil', 'castrada'],
    post: 'https://www.instagram.com/p/DdsED-gmkxw/',
  },
  {
    slug: 'tomi',
    nome: 'Tomi', // nome provisório
    especie: 'gato',
    sexo: 'macho',
    porte: 'medio',
    idade: 'Adulto',
    personalidade: 'Siamês de olhos azuis, falante e dono da casa.',
    historia:
      'Esse nenê está esperando por uma casa. Macho, castrado e dócil. Perfeito pra apartamento.',
    castrado: true,
    vacinado: true,
    foto: 'tomi.jpg',
    cor: '#B9A99A',
    status: 'disponivel',
    tags: ['dócil', 'castrado', 'apartamento'],
    post: 'https://www.instagram.com/p/DdHj2oRpott/',
  },
  {
    slug: 'teco',
    nome: 'Teco', // nome provisório
    especie: 'gato',
    sexo: 'macho',
    porte: 'grande',
    idade: 'Adulto',
    personalidade: 'Grandão de 7 quilos e coração mole. Só quer um colo.',
    historia:
      'Esse nenê grande de 7 quilos passou por uma cirurgia na boca e está recuperado. Macho, castrado e dócil. Precisa de um lar tranquilo.',
    castrado: true,
    vacinado: true,
    foto: 'preto.jpg',
    cor: '#5B6470',
    status: 'disponivel',
    tags: ['dócil', 'castrado', 'calmo'],
    post: 'https://www.instagram.com/p/DeT_4J8RQbH/',
  },
  {
    slug: 'princesa',
    nome: 'Princesa',
    especie: 'gato',
    sexo: 'femea',
    porte: 'medio',
    idade: 'Adulta',
    personalidade: 'Extremamente dócil. Uma princesa de verdade esperando o castelo dela.',
    historia:
      'Princesa está esperando por uma casinha pra chamar de sua. Fêmea, extremamente dócil. Castração garantida pela ONG.',
    castrado: false,
    vacinado: true,
    foto: 'princesa.jpg',
    cor: '#8A8F96',
    status: 'disponivel',
    tags: ['muito dócil', 'calma'],
    post: 'https://www.instagram.com/p/DfVW-xSncUo/',
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
