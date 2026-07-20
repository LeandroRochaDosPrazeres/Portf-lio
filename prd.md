# PRD — Portfólio Profissional Leandro Rocha

| Campo | Valor |
| --- | --- |
| Produto | Portfólio profissional multilíngue |
| Versão | 2.0 |
| Atualização | 20 de julho de 2026 |
| Stack | Next.js, React, TypeScript e Tailwind CSS |
| Status | Implementação e validação |

## 1. Visão

Transformar o portfólio na principal prova pública do posicionamento profissional de Leandro Rocha: Engenharia de Software, desenvolvimento Full Stack, IA aplicada e AWS/DevOps.

O produto deve permitir que recrutadores, líderes técnicos e potenciais parceiros entendam rapidamente:

- o que Leandro entrega;
- como ele aplica IA com responsabilidade e revisão humana;
- quais experiências e credenciais sustentam o posicionamento;
- quais projetos demonstram capacidade técnica e visão de produto;
- como entrar em contato.

## 2. Princípios

1. **Clareza antes do efeito visual:** cada interação deve apoiar a leitura e a conversão.
2. **Prova antes de promessa:** projetos, experiências e certificações devem aparecer antes do roadmap futuro.
3. **IA como amplificador:** o texto deve mostrar investigação, desenho de solução, documentação e automação, preservando validação humana.
4. **Uma marca, três idiomas:** português, inglês e espanhol devem oferecer a mesma profundidade de conteúdo.
5. **Qualidade operacional:** performance, acessibilidade, segurança e SEO fazem parte do produto.

## 3. Público

- Recrutadores técnicos com pouco tempo para avaliar aderência.
- Engineering Managers e Tech Leads interessados em execução e maturidade técnica.
- Clientes ou parceiros buscando desenvolvimento de produtos digitais e automação.
- Profissionais de tecnologia interessados nos projetos e na trajetória.

## 4. Jornada principal

1. Hero comunica posicionamento e direciona para projetos ou CV.
2. Sobre explica método de trabalho e uso responsável de IA.
3. Projetos mostram aplicação prática.
4. Experiência e stack sustentam capacidade de execução.
5. Certificações e formação validam repertório.
6. Roadmap demonstra direção sem competir com provas atuais.
7. Contato converte o interesse em conversa.

## 5. Requisitos funcionais

| Requisito | Status |
| --- | --- |
| Rotas `/pt`, `/en` e `/es` | Implementado |
| Tradução integral da interface e do conteúdo | Implementado |
| Seletor de idioma persistente | Implementado |
| Tema claro/escuro | Implementado |
| Menu responsivo e progresso de leitura | Implementado |
| Hero com CTAs para projetos e CV | Implementado |
| Seção Sobre e princípios de engenharia | Implementado |
| Timeline interativa de experiências | Implementado |
| Projetos com detalhes, demo e repositório quando disponíveis | Implementado |
| Stack, formação, certificações e roadmap | Implementado |
| Currículo PDF por idioma | Implementado |
| Contato por WhatsApp e canais diretos | Implementado |
| SEO localizado, sitemap, robots, Open Graph e JSON-LD | Implementado |
| Evidências visuais próprias para cada projeto | Próxima evolução |
| Analytics com definição de privacidade e eventos | A avaliar |

## 6. Requisitos de qualidade

- Navegação completa por teclado e foco visível.
- Sem controles interativos aninhados.
- Respeito a `prefers-reduced-motion`.
- Contraste compatível com WCAG AA para textos essenciais.
- Imagem principal otimizada e entregue por `next/image`.
- Nenhuma vulnerabilidade conhecida em dependências de produção.
- `lint`, `typecheck` e `build` executados antes do deploy.
- Layout sem rolagem horizontal nos breakpoints principais.

## 7. Conteúdo obrigatório

- Título profissional alinhado ao LinkedIn.
- Experiências Alest, Dexco e Prefeitura com datas e responsabilidades precisas.
- Projetos IronTrack Ultra, LLControl, Smart Grid House, BotLink e Portfólio.
- Stack com TypeScript, React, Next.js, Python, APIs, SQL, AWS, DevOps, LLMs e automação.
- Certificações AWS DevOps Professional, AWS Developer Associate, Salesforce Agentforce e Notion Admin.
- Formação em Engenharia da Computação na Universidade São Judas Tadeu.

## 8. Critérios de aceite

- As três rotas exibem toda a página no idioma correspondente.
- O idioma do documento, metadata e currículo acompanha a rota selecionada.
- Todos os links internos, externos e downloads respondem corretamente.
- O Hero permanece legível em mobile e desktop.
- Menu, timelines, cards e modais podem ser usados por teclado.
- Recursos declarados em metadata e manifest não retornam 404.
- O repositório não contém artefatos de build versionados.
- A validação automatizada termina sem erros.

## 9. Próximas evoluções

1. Capturar screenshots reais e escrever estudos de caso com problema, decisão e resultado.
2. Adicionar testes de fluxo para idioma, modais, navegação e geração de CV.
3. Medir Core Web Vitals em produção e corrigir regressões com dados reais.
4. Avaliar domínio próprio e analytics somente após definir privacidade e eventos úteis.
