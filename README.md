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
