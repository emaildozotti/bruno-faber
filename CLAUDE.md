# Landing Page — Bruno Faber

Repositório standalone da LP do Bruno Faber (Psicólogo Clínico, Análise do Comportamento).

## Stack
- React 19 + Vite 6 + Tailwind v4 + Framer Motion v12
- Fontes: Fraunces (display) + Source Sans 3 (sans) via @fontsource

## Estrutura
- `src/site.config.ts` — dados centralizados (nome, WA link, fotos)
- `src/index.css` — @theme com 8 tokens de cor + 2 fontes
- `src/components/` — 11 componentes com COPY fixo por cliente
- `public/foto-hero.jpg` + `public/foto-about.jpg` — substituir com fotos reais

## Deploy
- Vercel: https://bruno-faber-lp.vercel.app
- Push para `main` dispara deploy automático
- `npm run build` antes de commitar para verificar erros

## Regras
- NUNCA modificar estrutura JSX dos componentes
- Editar apenas COPY objects e site.config.ts
- ZERO travessão (—) em texto visível
- Acentuação completa obrigatória
