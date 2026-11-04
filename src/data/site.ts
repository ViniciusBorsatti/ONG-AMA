// Todo o texto, contato e dados da ONG ficam aqui.
// Para mudar qualquer coisa que aparece no site, edite este arquivo.

export const site = {
  nome: 'ONG AMA',
  nomeCompleto: 'Associação Palmira Gobbi Amigos dos Animais',
  cidade: 'Concórdia/SC',
  slogan: 'Todo bicho merece um lar.',
  descricao:
    'Resgatamos, cuidamos e encontramos famílias para cães e gatos abandonados em Concórdia e região.',
  url: 'https://ong-ama.vercel.app',

  endereco: {
    rua: 'R. Catharina Criselda Kirch, nº 600',
    bairro: 'Guilherme Reich',
    cidade: 'Concórdia',
    uf: 'SC',
    cep: '89709-130',
    mapa: 'https://www.google.com/maps/search/?api=1&query=R.+Catharina+Criselda+Kirch,+600,+Concórdia,+SC',
  },

  // TODO: confirmar com a ONG antes de publicar.
  whatsapp: '', // só números, com DDI. Ex: '5549999999999'
  instagram: 'ongamaconcordia',
  instagramUrl: 'https://www.instagram.com/ongamaconcordia/',
  email: '', // TODO
  doacao: {
    pixTipo: 'CNPJ',
    pix: '27.336.803/0001-78', // CNPJ, conforme a bio do Instagram
    banco: 'Sicoob Crediauc (756) · Ag. 3067 · Conta 347302',
    assinaturas: 'https://picpay.me/ongAMAassinaturas',
  },

  numeros: [
    { valor: 320, sufixo: '+', legenda: 'animais adotados' },
    { valor: 9, sufixo: '', legenda: 'esperando um lar' },
    { valor: 12, sufixo: '', legenda: 'anos de resgates' },
  ],

  hero: {
    titulo: 'Tem alguém esperando por você.',
    texto:
      'Cada cão e gato aqui já passou por muita coisa. O que falta agora é um sofá, uma tigela cheia e uma família. Pode ser a sua.',
    botaoPrincipal: 'Conhecer os animais',
    botaoSecundario: 'Como ajudar',
  },

  letreiro: ['Adote', 'Castre', 'Doe', 'Compartilhe', 'Seja voluntário', 'Apadrinhe'],

  adocao: {
    titulo: 'Procurando um lar',
    texto:
      'Todos os animais são entregues vacinados e vermifugados. A adoção é gratuita e responsável: conversamos com você antes para garantir que vai dar certo.',
  },

  adotados: {
    titulo: 'Já encontraram um lar',
    texto: 'Cada final feliz começou com alguém que decidiu adotar.',
  },

  comoAdotar: {
    titulo: 'Como funciona a adoção',
    passos: [
      { titulo: 'Escolha', texto: 'Veja os animais disponíveis e escolha quem combina com a sua rotina.' },
      { titulo: 'Converse', texto: 'Chame a gente no WhatsApp. Fazemos algumas perguntas e combinamos uma visita.' },
      { titulo: 'Visite', texto: 'Venha conhecer o animal pessoalmente no abrigo. Sem pressa.' },
      { titulo: 'Leve pra casa', texto: 'Assinamos o termo de adoção responsável e o seu novo amigo vai com você.' },
    ],
  },

  ajudar: {
    titulo: 'Como ajudar',
    texto: 'A ONG vive de doações e do trabalho de voluntários. Toda ajuda chega direto nos animais.',
    formas: [
      {
        titulo: 'Doe pelo Pix',
        link: '',
        linkTexto: '',
        texto: 'Qualquer valor vira ração, vacina e remédio.',
        icone: 'pix',
      },
      {
        titulo: 'Apadrinhe um animal',
        texto: 'Uma contribuição mensal cuida de um bicho até ele ser adotado.',
        icone: 'coracao',
        link: 'https://picpay.me/ongAMAassinaturas',
        linkTexto: 'Assinar apadrinhamento',
      },
      {
        titulo: 'Seja voluntário',
        texto: 'Passear, dar banho, ajudar nas feiras de adoção e no brechó.',
        icone: 'mao',
        link: '',
        linkTexto: '',
      },
      {
        titulo: 'Doe ração e itens',
        texto: 'Ração, areia, cobertores, caminhas e produtos de limpeza.',
        icone: 'caixa',
        link: '',
        linkTexto: '',
      },
    ],
  },

  contato: {
    titulo: 'Fale com a gente',
    texto: 'Dúvidas sobre adoção, resgate ou doação? É só chamar.',
  },

  rodape: {
    nota: 'Site feito com carinho, de graça, para a ONG AMA.',
  },
} as const;

export function linkWhatsapp(mensagem?: string): string {
  if (!site.whatsapp) return site.instagramUrl;
  const base = `https://wa.me/${site.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
