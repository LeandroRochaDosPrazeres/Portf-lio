# PRD - Portfólio Pessoal: "Trajetória & Impacto"

| Metadado | Detalhes |
| :--- | :--- |
| **Projeto** | Web Portfólio Pessoal |
| **Versão** | 1.0.0 |
| **Status** | Especificação de Requisitos |
| **Plataforma** | Web (Responsivo / Mobile-First) |
| **Data** | 04 de Dezembro de 2025 |

---

## 1. Visão do Produto
Criar uma aplicação web que transcenda o formato de currículo tradicional. O objetivo é apresentar a **trajetória pessoal e profissional** do usuário através de uma experiência narrativa imersiva. O site deve atuar como a peça central de *branding* pessoal, validando competência técnica através da própria execução do projeto e convertendo visitantes em oportunidades (contratação ou parcerias).

### 1.1. Princípios de Design (North Star)
* **"Show, Don't Just Tell":** Usar interações e visuais para demonstrar habilidades, não apenas texto.
* **Performance é Funcionalidade:** O site deve carregar instantaneamente. Animações não podem travar o scroll.
* **Narrativa Cronológica:** A história deve fluir de onde você veio para onde você está indo.
* **Estética "Future-Proof":** Design minimalista, tipografia ousada e uso inteligente de espaço negativo.

---

## 2. Público-Alvo e User Personas
1.  **O Recrutador Técnico:** Tem pouco tempo. Quer ver a Stack, baixar o CV resumido e verificar o GitHub rapidamente.
2.  **O Hiring Manager / Cliente:** Busca "fit" cultural, capacidade de resolver problemas e qualidade visual dos projetos entregues.
3.  **Peers (Outros Devs/Designers):** Visitam para inspiração. Se impressionados, compartilham o portfólio, gerando tráfego orgânico.

---

## 3. Conceito Visual & UX (Diferenciais)

> **Estilo Visual Proposto:** *Bento Grid & Glassmorphism*
> Uma organização em grades modulares (como widgets da Apple ou Linear.app) combinada com efeitos de vidro fosco e gradientes sutis.

* **Tipografia:** Sans-serif geométrica moderna (Ex: *Inter*, *Satoshi* ou *Space Grotesk*) para passar modernidade.
* **Tema:** Dark Mode como padrão (pela elegância), com um *toggle* fluido para Light Mode.
* **Motion Design:**
    * **Scroll Reveal:** Elementos aparecem suavemente conforme o usuário desce a página.
    * **Micro-interações:** Botões reagem magneticamente ao cursor; links têm sublinhados animados.
    * **Noise Texture:** Uma textura de granulação sutil no fundo para dar um aspecto "premium/físico" e menos digital estéril.

---

## 4. Requisitos Funcionais (Features)

### 4.1. Header & Navegação
- [ ] Logotipo minimalista (iniciais ou ícone abstrato).
- [ ] Menu de navegação que se esconde ao rolar para baixo e reaparece ao rolar para cima.
- [ ] Botão de alternância de Tema (Sol/Lua) com animação SVG.
- [ ] Indicador de progresso de leitura no topo da página.

### 4.2. Hero Section (A Primeira Impressão)
- [ ] **Headline:** Frase de impacto grande (H1). Ex: *"Engenharia com Propósito. Design com Alma."*
- [ ] **Sub-headline:** Breve resumo (quem sou, o que faço).
- [ ] **Visual Key:** Um elemento 3D interativo (Spline) ou um Avatar animado (Memoji ou foto profissional com fundo dinâmico).
- [ ] **Status:** Um pequeno "badge" pulsante indicando disponibilidade. Ex: 🟢 *Disponível para Freelance*.
- [ ] **CTA:** Botões "Ver Projetos" e "Baixar CV".

### 4.3. Timeline da Trajetória (O Core)
- [ ] Layout de linha do tempo vertical conectando pontos.
- [ ] **Logica Híbrida:** Misturar marcos profissionais (Cargos) com marcos de aprendizado (Cursos/Certificações) e marcos pessoais relevantes.
- [ ] **Interatividade:** Ao clicar em um marco, expandir para mostrar detalhes (stack usada, conquistas, lições aprendidas).

### 4.4. Showcase de Projetos (Bento Grid)
- [ ] Cards de tamanhos variados organizados em grid.
- [ ] **Hover Preview:** Ao passar o mouse, a imagem estática do projeto vira um vídeo curto (autoplay mudo) mostrando o software em uso.
- [ ] Tags de tecnologias utilizadas em cada card.
- [ ] Links diretos para: *Live Demo* e *Repositório GitHub*.

### 4.5. "O Que Eu Uso" (Tech Stack & Tools)
- [ ] Carrossel infinito (Marquee) com ícones das tecnologias.
- [ ] Seção "Setup": Lista de hardware/software que utilizo (VS Code theme, Terminal, Equipamento), pois gera curiosidade técnica.

### 4.6. Rodapé e Contato
- [ ] Formulário de contato funcional (sem redirect).
- [ ] Links sociais grandes (LinkedIn, GitHub, Twitter/X, Instagram).
- [ ] Botão "Vamos tomar um café?" que leva direto ao WhatsApp ou Calendly.
- [ ] Copyright dinâmico (atualiza o ano automaticamente).

---

## 5. Arquitetura Técnica

Para garantir que o portfólio seja **rápido, escalável e moderno**, a seguinte stack é mandatória:

| Componente | Tecnologia | Motivo |
| :--- | :--- | :--- |
| **Core** | **Next.js 14+ (App Router)** | Renderização híbrida (SSR/SSG), SEO otimizado e rotas rápidas. |
| **Linguagem** | **TypeScript** | Segurança de tipos e facilidade de manutenção. |
| **Estilos** | **Tailwind CSS** | Produtividade, design system consistente e bundle size pequeno. |
| **Animações** | **Framer Motion** | Padrão da indústria para animações complexas e gestos em React. |
| **Ícones** | **Lucide React** | Ícones leves, consistentes e modernos. |
| **Emails** | **Resend** ou **EmailJS** | Para envio de formulários sem backend complexo. |
| **CMS** | **Sanity.io** (Opcional) | Para gerenciar textos e projetos sem editar código. |
| **Hospedagem** | **Vercel** | Integração nativa com Next.js e CDN global (Edge Network). |

---

## 6. Requisitos Não-Funcionais (QoS)

1.  **Lighthouse Score:** Deve atingir 90+ em Performance, Acessibilidade, Melhores Práticas e SEO.
2.  **Responsividade Extrema:** O layout *Bento Grid* deve se reorganizar elegantemente em mobile (stack vertical).
3.  **SEO Técnico:** Implementação correta de Meta Tags, Open Graph (imagem que aparece ao compartilhar o link) e sitemap.xml.
4.  **Acessibilidade (a11y):** Navegação completa por teclado e contraste de cores adequado (WCAG AA).

---

## 7. Roadmap de Implementação

### Fase 1: Fundação (Semana 1)
- [ ] Setup do Repositório e Next.js.
- [ ] Configuração do Tailwind e Design System (Cores, Fontes).
- [ ] Criação dos Componentes Base (Botões, Cards, Container).

### Fase 2: Estrutura e Conteúdo (Semana 2)
- [ ] Desenvolvimento da Hero Section.
- [ ] Desenvolvimento do componente Timeline.
- [ ] Desenvolvimento do Grid de Projetos.
- [ ] Redação dos textos (Copywriting).

### Fase 3: Refinamento e "Wow Factor" (Semana 3)
- [ ] Implementação das animações com Framer Motion (Entrance, Hover, Scroll).
- [ ] Adição do modo Dark/Light.
- [ ] Testes de responsividade e ajustes finos.

### Fase 4: Launch (Semana 4)
- [ ] Configuração de SEO e Analytics.
- [ ] Deploy na Vercel.
- [ ] Divulgação no LinkedIn.

---

## 8. Definição de Sucesso (KPIs)
* Tempo médio de permanência na página > 45 segundos.
* Click-through rate (CTR) nos projetos > 20%.
* Feedback qualitativo positivo sobre o design e fluidez.