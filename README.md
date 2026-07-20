# Leandro Rocha — Portfólio

Portfólio profissional multilíngue de Leandro Rocha, construído para apresentar sua atuação em Engenharia de Software, desenvolvimento Full Stack, Inteligência Artificial aplicada e AWS/DevOps.

## O que o projeto entrega

- Conteúdo integral em português, inglês e espanhol, com rotas próprias (`/pt`, `/en` e `/es`).
- Posicionamento profissional, experiências, projetos, stack, formação, roadmap e certificações centralizados em uma única fonte de dados.
- Currículo em PDF gerado sob demanda e localizado conforme o idioma selecionado.
- Tema escuro e claro, animações com preferência de movimento reduzido e navegação responsiva.
- Metadados por idioma, canonical, `hreflang`, sitemap, robots, Open Graph dinâmico e dados estruturados de `Person`.
- Contato por e-mail, telefone, LinkedIn, GitHub e WhatsApp.

## Stack

- Next.js 16.2
- React 19
- TypeScript 5.9
- Tailwind CSS 4
- Framer Motion
- React PDF
- next-themes
- Lucide React

## Requisitos

- Node.js 20.9 ou superior
- npm

O projeto inclui `.nvmrc` para facilitar o uso da versão LTS recomendada.

## Desenvolvimento local

```bash
nvm use
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). A raiz redireciona para `/pt`.

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

Ou execute todos os passos:

```bash
npm run check
```

## Estrutura principal

```text
src/
├── app/
│   ├── [locale]/           # Página, layout e Open Graph localizados
│   ├── api/cv/             # Geração do currículo em PDF
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/             # Header e Footer
│   ├── providers/          # Tema e idioma
│   ├── sections/           # Seções do portfólio
│   └── ui/                 # Componentes reutilizáveis
└── lib/
    ├── data.ts             # Conteúdo PT/EN/ES
    ├── i18n.ts             # Configuração de idiomas
    ├── profile.ts          # Contatos e links sociais compartilhados
    └── site.ts             # URL canônica
```

## Atualização de conteúdo

O conteúdo das três línguas está em `src/lib/data.ts`. Cada idioma implementa o contrato `PortfolioContent`, o que ajuda o TypeScript a impedir seções ou rótulos ausentes.

Links sociais compartilhados ficam centralizados em `src/lib/profile.ts`; os contatos exibidos e usados no currículo permanecem localizados em `src/lib/data.ts`.

## URL pública

Por padrão, o projeto usa a URL atual da Vercel. Para outro domínio, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Essa variável alimenta canonical, sitemap, robots e dados estruturados.

## Deploy

O projeto está preparado para deploy na Vercel por integração com o repositório GitHub. Antes de publicar:

1. Execute `npm run check`.
2. Configure `NEXT_PUBLIC_SITE_URL` com o domínio final.
3. Valide as três rotas e os três PDFs localizados.
4. Revise links de demonstração e credenciais.

## Privacidade

O projeto não inclui analytics ou rastreamento por padrão. Qualquer ferramenta de métricas deve ser adicionada conscientemente, com documentação e política de privacidade compatíveis.
