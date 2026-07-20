# Leandro Rocha — Portfólio

Portfólio profissional multilíngue de Leandro Rocha, construído para apresentar sua atuação em Engenharia de Software, desenvolvimento Full Stack, Inteligência Artificial aplicada e AWS/DevOps.

## O que o projeto entrega

- Conteúdo integral em português, inglês e espanhol, com rotas próprias (`/pt`, `/en` e `/es`).
- Posicionamento profissional, experiências, projetos, stack, formação, roadmap e certificações centralizados em uma única fonte de dados.
- Currículo em PDF gerado sob demanda e localizado conforme o idioma selecionado.
- Tema escuro e claro, animações com preferência de movimento reduzido e navegação responsiva.
- Metadados por idioma, canonical, `hreflang`, sitemap, robots, Open Graph dinâmico e dados estruturados de `Person`.
- Cases de projetos compartilháveis, localizados e preparados para indexação.
- Contato por e-mail, telefone, LinkedIn, GitHub e WhatsApp.
- Métricas anônimas de navegação, eventos de conversão e Core Web Vitals pela Vercel.

## Stack

- Next.js 16.2
- React 19
- TypeScript 5.9
- Tailwind CSS 4
- Framer Motion
- React PDF
- next-themes
- Lucide React
- Vercel Web Analytics e Speed Insights

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
npm run check:links
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
│   │   ├── privacy/        # Transparência sobre métricas e privacidade
│   │   └── projects/       # Cases localizados e compartilháveis
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
4. Execute `npm run check:links` para validar demos e repositórios.
5. Ative Web Analytics e Speed Insights no painel do projeto da Vercel.

## Privacidade

O projeto utiliza Vercel Web Analytics e Speed Insights para dados agregados de navegação, conversão e desempenho. Eventos personalizados nunca devem conter nome, e-mail, mensagem ou qualquer outro dado pessoal. Cada idioma possui uma página pública em `/<locale>/privacy` explicando essa coleta.

Os links de demos e repositórios também são verificados no CI e por uma rotina semanal do GitHub Actions, reduzindo o risco de publicar novamente uma demonstração indisponível.
