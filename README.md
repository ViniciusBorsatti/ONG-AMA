# ONG AMA · site de adoção

Site da ONG AMA (Associação Palmira Gobbi Amigos dos Animais), de Concórdia/SC.
Astro, zero JavaScript no navegador, animações só em CSS.

## Rodar

```
npm install
npm run dev
```

## Editar conteúdo

- `src/data/site.ts`: textos, contato, Pix, endereço.
- `src/data/animais.ts`: os animais. Para marcar como adotado, troque `status: 'disponivel'` por `status: 'adotado'`.
- Fotos em `src/assets/img/animais/<arquivo>` (o nome fica no campo `foto` de cada animal). Sem foto, o site mostra uma ilustração.

## Painel (/admin)

As voluntárias cadastram e editam os animais em `/admin`, pelo celular mesmo.
Dados e fotos ficam no Supabase (projeto "ONG AMA"); o site lê de lá a cada acesso.

- Variáveis: ver `.env.example`. Na Vercel, `SUPABASE_SERVICE_ROLE_KEY` é necessária só para a página Equipe (criar contas).
- Primeira conta: criar em Supabase → Authentication → Users → Add user. Depois, as outras pelo próprio painel em /admin/equipe.
