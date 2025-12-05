# 🚀 Trajetória & Impacto - Portfólio Pessoal

Um portfólio profissional moderno construído com Next.js 14+, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Features

- **Design Moderno**: Bento Grid, Glassmorphism e animações fluidas
- **Dark/Light Mode**: Toggle de tema com transição suave
- **Responsivo**: Layout adaptável para todos os dispositivos
- **Performance**: Otimizado para Lighthouse 90+
- **SEO**: Meta tags, Open Graph e sitemap configurados
- **Acessibilidade**: WCAG AA compliant

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilos**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Tema**: next-themes

## 🚀 Como Usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Personalizar seus dados

Edite o arquivo `src/lib/data.ts` com suas informações:

```typescript
export const siteConfig = {
  name: "Seu Nome",
  title: "Seu Título",
  headline: "Sua Frase de Impacto",
  // ... demais configurações
};
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

### 4. Build para produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Design System e estilos globais
│   ├── layout.tsx       # Layout principal com SEO
│   ├── page.tsx         # Página principal
│   ├── sitemap.ts       # Sitemap dinâmico
│   └── robots.ts        # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Header com navegação
│   │   └── Footer.tsx   # Rodapé
│   ├── sections/
│   │   ├── Hero.tsx     # Seção Hero
│   │   ├── Timeline.tsx # Timeline interativa
│   │   ├── Projects.tsx # Grid de projetos
│   │   ├── TechStack.tsx# Stack de tecnologias
│   │   └── Contact.tsx  # Formulário de contato
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   └── ui/
│       ├── Button.tsx   # Botão com efeito magnético
│       └── ThemeToggle.tsx
└── lib/
    ├── data.ts          # ⚠️ SEUS DADOS AQUI
    └── utils.ts         # Utilitários
```

## 📝 Personalizações Necessárias

### 1. Dados Pessoais (`src/lib/data.ts`)

- `siteConfig`: Nome, título, headline, contatos
- `socialLinks`: Links das redes sociais
- `timelineData`: Sua trajetória profissional
- `projectsData`: Seus projetos
- `techStack`: Suas tecnologias
- `setupItems`: Seu setup de trabalho

### 2. Imagens

Adicione na pasta `public/`:
- `avatar.jpg` - Sua foto
- `og-image.png` - Imagem para compartilhamento (1200x630)
- `cv.pdf` - Seu currículo
- `projects/` - Imagens dos projetos

### 3. Formulário de Contato

Integre com EmailJS ou Resend em `src/components/sections/Contact.tsx`

### 4. Domínio

Atualize as URLs em:
- `src/app/layout.tsx` (openGraph.url)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 🎨 Customização Visual

### Cores (em `globals.css`)

```css
@theme inline {
  --color-primary: #8b5cf6;    /* Roxo */
  --color-secondary: #3b82f6;  /* Azul */
  --color-accent: #22d3ee;     /* Ciano */
}
```

### Fontes

Altere em `src/app/layout.tsx` usando Google Fonts.

## 📦 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Outras plataformas

```bash
npm run build
npm run start
```

## 📄 Licença

MIT - Sinta-se livre para usar e modificar!
