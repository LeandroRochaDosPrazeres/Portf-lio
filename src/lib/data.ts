import { normalizeLocale, type Locale } from "@/lib/i18n";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  availability: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  whatsappNumber: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education" | "certification" | "personal";
  technologies?: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  video?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  size: "small" | "medium" | "large";
  inDevelopment?: boolean;
  evidence: string;
  demoStatus?: ProjectDemoStatus;
  caseStudy?: ProjectCaseStudy;
}

export type ProjectDemoStatus = "available" | "authenticated" | "maintenance";

export interface ProjectCaseDecision {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  slug: string;
  summary: string;
  status: string;
  problem: string;
  role: string;
  responsibilities: string[];
  decisions: ProjectCaseDecision[];
  architecture: string[];
  challenges: string[];
  validations: string[];
  outcome: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface SetupItem {
  name: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  course: string;
  period: string;
  description: string;
  focus: string[];
}

export type NextStepStatus = "estudando" | "planejado";

export interface NextStepItem {
  id: string;
  title: string;
  subtitle: string;
  stageFocus: string;
  description: string;
  status: NextStepStatus;
  focus: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
}

export interface PortfolioContent {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  siteConfig: SiteConfig;
  header: {
    navigationLabel: string;
    menuLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    readingProgressLabel: string;
    languageLabel: string;
    localeLabels: Record<Locale, string>;
    themeLabel: string;
    lightThemeLabel: string;
    darkThemeLabel: string;
  };
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    projectsCta: string;
    resumeCta: string;
    scrollLabel: string;
    scrollAriaLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    body: string;
    principles: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  education: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    focusLabel: string;
    items: EducationItem[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    technologiesLabel: string;
    achievementsLabel: string;
    expandLabel: string;
    collapseLabel: string;
    items: TimelineItem[];
  };
  nextSteps: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    stepLabel: string;
    focusLabel: string;
    statusLabels: Record<NextStepStatus, string>;
    items: NextStepItem[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    viewLabel: string;
    closeLabel: string;
    imageErrorLabel: string;
    openImageLabel: string;
    certificateAriaLabel: string;
    items: CertificationItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    stats: {
      projects: string;
      technologies: string;
      featured: string;
      inDevelopment: string;
    };
    inDevelopmentLabel: string;
    featuredLabel: string;
    stackLabel: string;
    demoLabel: string;
    sourceLabel: string;
    moreLabel: string;
    detailsAriaLabel: string;
    caseLabel: string;
    caseAriaLabel: string;
    previewLabel: string;
    demoStatusLabels: Record<ProjectDemoStatus, string>;
    githubCta: string;
    closeLabel: string;
    casePage: {
      backLabel: string;
      eyebrow: string;
      statusLabel: string;
      problemLabel: string;
      roleLabel: string;
      responsibilitiesLabel: string;
      decisionsLabel: string;
      architectureLabel: string;
      challengesLabel: string;
      validationsLabel: string;
      outcomeLabel: string;
      linksLabel: string;
      languageLabel: string;
    };
    items: Project[];
  };
  stack: {
    title: string;
    titleAccent: string;
    introduction: string;
    setupTitle: string;
    setupIntroduction: string;
    hardwareLabel: string;
    softwareLabel: string;
    languagesTitle: string;
    languagesIntroduction: string;
    categories: TechCategory[];
    allTechnologies: string[];
    setup: {
      hardware: SetupItem[];
      software: SetupItem[];
    };
    languages: LanguageItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introduction: string;
    directTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    whatsappMessage: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      notProvided: string;
    };
  };
  footer: {
    description: string;
    navigationTitle: string;
    portfolioTitle: string;
    contactTitle: string;
    rights: string;
    backToTop: string;
    backToTopAriaLabel: string;
  };
  cv: {
    documentTitle: string;
    fileName: string;
    profileTitle: string;
    professionalSummary: string;
    experienceTitle: string;
    projectsTitle: string;
    educationTitle: string;
    skillsTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
  };
  common: {
    loadingSectionLabel: string;
  };
}

const sharedContact = {
  name: "Leandro Rocha",
  email: "leandrorocha899@icloud.com",
  phone: "+55 (11) 96615-5330",
  resumeUrl: "/api/cv",
  whatsappNumber: "5511966155330",
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    locale: "pt",
    metadata: {
      title: "Leandro Rocha | Engenharia de Software, IA Aplicada e AWS",
      description:
        "Portfólio de Leandro Rocha, engenheiro de software full stack com atuação em TypeScript, React, Next.js, Python, APIs, IA aplicada, AWS e DevOps.",
      keywords: [
        "engenheiro de software",
        "desenvolvimento full stack",
        "IA aplicada",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "AWS",
        "DevOps",
        "LLMs",
        "automação",
      ],
    },
    siteConfig: {
      ...sharedContact,
      title: "Engenheiro de Software | Full Stack e IA Aplicada",
      headline: "Construo software confiável e potencializo a entrega com IA.",
      subheadline:
        "Atuo de ponta a ponta com TypeScript, React, Next.js, Python, APIs e AWS, usando LLMs e automação para investigar problemas, desenhar soluções e acelerar rotinas — sempre com revisão humana.",
      availability: "Disponível para projetos e oportunidades",
      location: "São Paulo, SP, Brasil",
    },
    header: {
      navigationLabel: "Navegação principal",
      menuLabel: "Menu",
      openMenuLabel: "Abrir menu",
      closeMenuLabel: "Fechar menu",
      readingProgressLabel: "Progresso de leitura da página",
      languageLabel: "Idioma",
      localeLabels: {
        pt: "Português",
        en: "Inglês",
        es: "Espanhol",
      },
      themeLabel: "Tema",
      lightThemeLabel: "Usar tema claro",
      darkThemeLabel: "Usar tema escuro",
    },
    navigation: [
      { label: "Início", href: "#hero" },
      { label: "Sobre", href: "#about" },
      { label: "Formação", href: "#education" },
      { label: "Experiência", href: "#timeline" },
      { label: "Próximos passos", href: "#next-steps" },
      { label: "Certificações", href: "#certifications" },
      { label: "Projetos", href: "#projects" },
      { label: "Tecnologias", href: "#stack" },
      { label: "Contato", href: "#contact" },
    ],
    hero: {
      eyebrow: "Engenharia de Software • Full Stack • IA Aplicada • AWS/DevOps",
      projectsCta: "Ver projetos",
      resumeCta: "Baixar CV",
      scrollLabel: "Explorar",
      scrollAriaLabel: "Ir para a próxima seção",
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia orientada a contexto,",
      titleAccent: "qualidade e evolução contínua",
      introduction:
        "Sou estudante de Engenharia da Computação e engenheiro de software full stack na Alest Consultoria. Minha trajetória combina desenvolvimento de produtos digitais, visão de processos e uso responsável de Inteligência Artificial no trabalho de engenharia.",
      body:
        "No dia a dia, uso IA como apoio para investigar código e registros, comparar alternativas, estruturar documentação e automatizar tarefas repetitivas. A decisão técnica, a validação e a responsabilidade pelo resultado permanecem humanas.",
      principles: [
        {
          id: "engineering",
          title: "Engenharia antes da ferramenta",
          description:
            "Começar pelo problema, pelas restrições e pelo impacto esperado para criar soluções legíveis, sustentáveis e adequadas ao contexto.",
        },
        {
          id: "responsible-ai",
          title: "IA com supervisão humana",
          description:
            "Usar LLMs e automação para ampliar análise e execução, validando saídas, riscos e decisões antes de colocá-las em uso.",
        },
        {
          id: "delivery",
          title: "Entrega como sistema",
          description:
            "Conectar aplicação, nuvem, observabilidade e automação para tornar a entrega mais previsível, segura e simples de operar.",
        },
      ],
    },
    education: {
      eyebrow: "Formação acadêmica",
      title: "Base técnica para uma",
      titleAccent: "carreira em construção",
      introduction:
        "A formação em Engenharia da Computação complementa a prática profissional com fundamentos de software, hardware, redes, dados e Inteligência Artificial.",
      focusLabel: "Principais focos",
      items: [
        {
          id: "edu-1",
          institution: "Universidade São Judas Tadeu",
          course: "Engenharia da Computação",
          period: "ago de 2022 — jul de 2027 (previsão)",
          description:
            "Graduação em andamento com estudos em arquitetura de computadores, circuitos digitais, sistemas embarcados, redes, segurança e fundamentos de Inteligência Artificial aplicados à engenharia.",
          focus: [
            "Engenharia de Software",
            "Sistemas Embarcados",
            "Redes e Segurança",
            "Dados",
            "IA Aplicada",
          ],
        },
      ],
    },
    timeline: {
      eyebrow: "Experiência profissional",
      title: "Uma trajetória que conecta",
      titleAccent: "software, dados e operações",
      introduction:
        "Experiências que desenvolveram minha visão de engenharia, colaboração e melhoria contínua em contextos digitais e operacionais.",
      technologiesLabel: "Tecnologias e ferramentas",
      achievementsLabel: "Principais contribuições",
      expandLabel: "Expandir experiência",
      collapseLabel: "Recolher experiência",
      items: [
        {
          id: "alest-software-engineer",
          year: "fev de 2026 — atual",
          title: "Engenheiro de Software Full Stack Júnior",
          subtitle: "Alest Consultoria",
          description:
            "Atuação no ciclo de engenharia de aplicações web, da investigação e do desenho técnico à implementação e sustentação. Desenvolvimento com Python, Next.js, TypeScript, APIs, SQL e serviços AWS, com IA aplicada como apoio ao trabalho técnico.",
          type: "work",
          technologies: [
            "Python",
            "TypeScript",
            "Next.js",
            "React",
            "APIs",
            "SQL",
            "AWS",
            "Kiro",
            "LLMs",
          ],
          achievements: [
            "Construir e evoluir fluxos full stack integrados a APIs e bancos de dados.",
            "Apoiar diagnósticos por meio da leitura de código, registros e documentação técnica.",
            "Aplicar IA para explorar alternativas, documentar decisões e automatizar tarefas com revisão humana.",
          ],
        },
        {
          id: "alest-software-intern",
          year: "out de 2025 — jan de 2026",
          title: "Estagiário de Desenvolvimento de Software",
          subtitle: "Alest Consultoria",
          description:
            "Participação no desenvolvimento e na manutenção das camadas de interface e servidor de aplicações, apoiando integrações com APIs, automações e experimentos com Inteligência Artificial.",
          type: "work",
          technologies: [
            "Python",
            "Java",
            "HTML",
            "CSS",
            "APIs",
            "AWS",
            "LLMs",
          ],
          achievements: [
            "Colaborar na implementação e manutenção de funcionalidades de software.",
            "Apoiar integrações e automações com documentação e validação técnica.",
          ],
        },
        {
          id: "dexco-pcp-intern",
          year: "ago de 2024 — ago de 2025",
          title: "Estagiário de Planejamento e Controle de Produção",
          subtitle: "Dexco — Deca",
          description:
            "Apoio ao planejamento de manutenção das linhas de produção, tratamento de notas no SAP, programação de recursos e elaboração de relatórios e indicadores para acompanhamento das atividades.",
          type: "work",
          technologies: ["SAP", "Excel", "Power BI", "Análise de Dados", "Planejamento"],
          achievements: [
            "Organizar informações para apoiar a programação de manutenções preventivas.",
            "Colaborar com áreas técnicas na revisão de planos e no acompanhamento de atividades.",
          ],
        },
        {
          id: "prefeitura-engineering-intern",
          year: "ago de 2022 — jul de 2024",
          title: "Estagiário de Engenharia",
          subtitle: "Prefeitura de São Paulo — DRE",
          description:
            "Apoio à análise e à organização de dados do setor, manutenção de bases de informação e elaboração de relatórios técnicos sobre serviços prestados por diferentes unidades.",
          type: "work",
          technologies: ["Excel", "Banco de Dados", "Análise de Dados", "Relatórios"],
          achievements: [
            "Organizar e atualizar dados utilizados pelo setor.",
            "Preparar relatórios técnicos para apoiar acompanhamento e tomada de decisão.",
          ],
        },
      ],
    },
    nextSteps: {
      eyebrow: "Próximos passos",
      title: "Aprofundamento técnico com",
      titleAccent: "direção clara",
      introduction:
        "Um plano de desenvolvimento concentrado nas competências que ampliam minha atuação em engenharia de software, IA aplicada e plataformas em nuvem.",
      stepLabel: "Etapa",
      focusLabel: "Foco",
      statusLabels: {
        estudando: "Em estudo",
        planejado: "Planejado",
      },
      items: [
        {
          id: "ns-architecture",
          title: "Arquitetura de Software e Projeto de Sistemas",
          subtitle: "Sistemas sustentáveis",
          stageFocus: "Aprofundar decisões arquiteturais orientadas a contexto.",
          description:
            "Estudar desenho de sistemas distribuídos, contratos de APIs, mensageria, escalabilidade e compromissos técnicos para construir soluções mais simples de evoluir e operar.",
          status: "estudando",
          focus: ["Projeto de Sistemas", "APIs", "Mensageria", "Escalabilidade"],
        },
        {
          id: "ns-llmops",
          title: "Engenharia de IA e LLMOps",
          subtitle: "IA confiável em produção",
          stageFocus: "Evoluir da integração de modelos para sistemas observáveis e avaliáveis.",
          description:
            "Aprofundar RAG, agentes, avaliação de respostas, observabilidade, segurança e controle de custos para aplicar IA com critérios técnicos claros.",
          status: "estudando",
          focus: ["LLMOps", "RAG", "Avaliação", "Observabilidade"],
        },
        {
          id: "ns-aws-security",
          title: "Confiabilidade e Segurança na AWS",
          subtitle: "Operação responsável",
          stageFocus: "Fortalecer segurança, resiliência e visibilidade operacional.",
          description:
            "Aprofundar IAM, proteção de dados, resposta a incidentes, observabilidade e padrões de arquitetura resiliente em ambientes AWS.",
          status: "planejado",
          focus: ["IAM", "Segurança em Nuvem", "Resiliência", "Observabilidade"],
        },
      ],
    },
    certifications: {
      eyebrow: "Certificações",
      title: "Conhecimento validado,",
      titleAccent: "aprendizado contínuo",
      introduction:
        "Credenciais alinhadas à minha atuação em desenvolvimento, nuvem, DevOps, IA e organização de trabalho digital.",
      viewLabel: "Ver certificado",
      closeLabel: "Fechar",
      imageErrorLabel: "Não foi possível carregar a imagem do certificado.",
      openImageLabel: "Abrir imagem diretamente",
      certificateAriaLabel: "Certificado",
      items: [
        {
          id: "cert-aws-devops",
          title: "AWS Certified DevOps Engineer – Professional",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Certificação profissional sobre entrega contínua, automação de infraestrutura, observabilidade, resposta a incidentes e operação de sistemas na AWS.",
          skills: ["CI/CD", "IaC", "Observabilidade", "Automação", "Confiabilidade"],
          certificateUrl: "/certificates/aws-devops.png",
        },
        {
          id: "cert-aws-developer",
          title: "AWS Certified Developer – Associate",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Certificação associada sobre desenvolvimento, implantação, segurança, diagnóstico, resolução de problemas e monitoramento de aplicações na AWS.",
          skills: ["AWS Lambda", "APIs", "Mensageria", "CloudWatch"],
          certificateUrl: "/certificates/aws-developer.png",
        },
        {
          id: "cert-notion-service-specialist",
          title: "Notion Service Specialist",
          institution: "Notion HQ",
          year: "2026–2028",
          description:
            "Certificação avançada emitida em 24 de abril de 2026, válida até 24 de abril de 2028, sobre descoberta, arquitetura, implementação, gestão da mudança e entrega de soluções Notion orientadas a resultados de negócio.",
          skills: [
            "Liderança da Mudança",
            "Consultoria",
            "Descoberta de Informação",
            "Entrega de Soluções",
            "Desenvolvimento de Soluções",
          ],
          certificateUrl: "/certificates/notion-service-specialist.png",
        },
        {
          id: "cert-salesforce-agentforce",
          title: "Salesforce Certified Agentforce Specialist",
          institution: "Salesforce",
          year: "2025",
          description:
            "Credencial sobre fundamentos do Agentforce, configuração de agentes, uso de dados e desenho de ações para experiências assistidas por IA.",
          skills: ["Agentforce", "Agentes de IA", "Engenharia de Prompts", "Integrações"],
          certificateUrl: "/certificates/salesforce-agentforce.png",
        },
        {
          id: "cert-notion-admin",
          title: "Notion Certified Admin",
          institution: "Notion",
          year: "2025",
          description:
            "Certificação sobre administração de espaços de trabalho, governança, permissões, organização da informação e adoção do Notion.",
          skills: ["Governança", "Permissões", "Espaços de Trabalho", "Gestão do Conhecimento"],
          certificateUrl: "/certificates/notion-admin.png",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos selecionados",
      title: "Software construído para",
      titleAccent: "resolver problemas reais",
      introduction:
        "Projetos pessoais e acadêmicos usados para explorar produto, arquitetura, experiência do usuário, automação e IA aplicada.",
      stats: {
        projects: "Projetos",
        technologies: "Tecnologias",
        featured: "Em destaque",
        inDevelopment: "Em desenvolvimento",
      },
      inDevelopmentLabel: "Em desenvolvimento",
      featuredLabel: "Destaque",
      stackLabel: "Tecnologias",
      demoLabel: "Ver demonstração",
      sourceLabel: "Código-fonte",
      moreLabel: "Ver detalhes",
      detailsAriaLabel: "Ver detalhes do projeto",
      caseLabel: "Explorar estudo de caso",
      caseAriaLabel: "Abrir estudo de caso do projeto",
      previewLabel: "Visão visual do projeto",
      demoStatusLabels: {
        available: "Demonstração pública",
        authenticated: "Acesso com conta",
        maintenance: "Demonstração em manutenção",
      },
      githubCta: "Ver todos os projetos no GitHub",
      closeLabel: "Fechar detalhes do projeto",
      casePage: {
        backLabel: "Voltar aos projetos",
        eyebrow: "Estudo de caso do projeto",
        statusLabel: "Estado atual",
        problemLabel: "Problema",
        roleLabel: "Meu papel",
        responsibilitiesLabel: "Responsabilidades",
        decisionsLabel: "Decisões de engenharia",
        architectureLabel: "Fluxo da solução",
        challengesLabel: "Desafios e limites",
        validationsLabel: "Evidências e validações",
        outcomeLabel: "Resultado",
        linksLabel: "Explorar o projeto",
        languageLabel: "Idioma do estudo de caso",
      },
      items: [
        {
          id: "1",
          title: "IronTrack Ultra",
          description:
            "PWA para organização de treinos de musculação, com suporte sem conexão e acompanhamento da rotina.",
          longDescription:
            "Projeto de produto voltado ao registro de treinos, descanso entre séries e consulta do histórico. Explora arquitetura preparada para uso sem conexão, sincronização de dados, experiência em dispositivos móveis e visualização de informações sem apresentar o projeto como um sistema clínico ou de prescrição.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Zustand",
            "PWA",
            "Dexie.js",
            "Recharts",
          ],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/IronTrack",
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Arquitetura sem conexão documentada",
          demoStatus: "maintenance",
          caseStudy: {
            slug: "irontrack-ultra",
            summary:
              "Uma PWA centrada em dispositivos móveis que investiga como registrar treinos com resposta imediata, persistência local e uma evolução segura para sincronização em nuvem.",
            status: "Protótipo funcional em evolução",
            problem:
              "Durante um treino, conexão instável não pode interromper o registro de séries, tempos de descanso ou histórico. O produto precisava priorizar velocidade no dispositivo e, ao mesmo tempo, preparar os dados para autenticação e sincronização futuras.",
            role:
              "Concepção do produto, modelagem da experiência, arquitetura e desenvolvimento full stack do protótipo.",
            responsibilities: [
              "Modelar programas, modelos de treino, exercícios, sessões e séries.",
              "Desenhar uma experiência móvel com timers e consulta de histórico.",
              "Estruturar persistência local, estado da interface e integração com Supabase.",
              "Documentar limites, estratégia de testes e próximos passos da sincronização.",
            ],
            decisions: [
              {
                title: "Gravar primeiro no dispositivo",
                description:
                  "IndexedDB, acessado por Dexie.js, mantém a escrita disponível mesmo sem rede e evita bloquear a interface durante o treino.",
              },
              {
                title: "Separar estado e persistência",
                description:
                  "Zustand coordena o estado de uso enquanto a camada local preserva dados, reduzindo o acoplamento entre telas e armazenamento.",
              },
              {
                title: "Preparar a sincronização assíncrona",
                description:
                  "Uma fila de operações pendentes foi modelada para conectar o armazenamento local ao Supabase. A resolução completa de conflitos permanece uma evolução explícita.",
              },
              {
                title: "Tratar a PWA como produto móvel",
                description:
                  "Service worker, instalação na tela inicial e componentes focados em toque sustentam o uso no contexto real de treino.",
              },
            ],
            architecture: [
              "Interface React",
              "Estado Zustand",
              "IndexedDB + Dexie",
              "Fila de sincronização",
              "Supabase",
            ],
            challenges: [
              "Definir uma política de conflito antes de ativar sincronização bidirecional em produção.",
              "Manter timers e ações rápidas claros em telas pequenas e durante interrupções.",
              "Apresentar histórico e evolução sem atribuir ao produto caráter clínico ou de prescrição.",
            ],
            validations: [
              "Repositório público com fluxo de dados, esquema e estratégia de operação sem conexão documentados.",
              "TypeScript em modo estrito e tipos de banco gerados a partir do esquema Supabase.",
              "Estratégia documentada de testes com Vitest e React Testing Library.",
              "Configuração PWA e service worker descritos; o deploy público está temporariamente indisponível.",
            ],
            outcome:
              "O projeto consolidou uma base técnica para sessões de treino resilientes à falta de rede e tornou visíveis as decisões ainda pendentes. Este estudo de caso não reivindica usuários ou métricas de negócio, e sinaliza com transparência que a demonstração pública está em manutenção.",
          },
        },
        {
          id: "3",
          title: "LLControl",
          description:
            "PWA para controle de estoque e vendas com integração ao ecossistema do Mercado Livre.",
          longDescription:
            "Aplicação para centralizar produtos, estoque, vendas e indicadores operacionais. O projeto explora autenticação OAuth, webhooks, integração com APIs externas, persistência de dados e uma interface responsiva para rotinas de acompanhamento.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Framer Motion",
            "PWA",
            "Mercado Livre API",
          ],
          demoUrl: "https://ll-controll.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/LLControll",
          featured: true,
          size: "medium",
          evidence: "Aplicação publicada com acesso autenticado",
          demoStatus: "authenticated",
          caseStudy: {
            slug: "llcontrol",
            summary:
              "Uma PWA para reunir estoque, vendas, taxas e eventos do Mercado Livre em uma rotina operacional pensada para dispositivos móveis.",
            status: "Aplicação publicada com acesso autenticado",
            problem:
              "Controlar produtos, vendas e taxas em ferramentas separadas aumenta retrabalho e reduz a visão do resultado de cada operação. A proposta foi centralizar o fluxo e preparar atualizações provenientes do marketplace.",
            role:
              "Concepção do produto, experiência em dispositivos móveis, modelagem de dados e desenvolvimento full stack das integrações.",
            responsibilities: [
              "Organizar dashboard, estoque, vendas, histórico e configurações em um único fluxo.",
              "Modelar autenticação, persistência de dados e armazenamento de imagens com Supabase.",
              "Implementar cálculo configurável de taxas e lucro por venda.",
              "Estruturar o recebimento de eventos do Mercado Livre por webhook.",
            ],
            decisions: [
              {
                title: "Centralizar a operação",
                description:
                  "Produtos, vendas, metas e taxas compartilham o mesmo modelo, reduzindo a troca de contexto no acompanhamento diário.",
              },
              {
                title: "Separar identidade, dados e arquivos",
                description:
                  "Supabase Auth, PostgreSQL e Storage cobrem autenticação, registros operacionais e fotos de produtos com responsabilidades claras.",
              },
              {
                title: "Receber eventos do marketplace",
                description:
                  "Uma rota de webhook prepara a atualização de estoque, registro de venda e cálculo de resultado a partir de eventos de pedidos.",
              },
              {
                title: "Priorizar interação móvel",
                description:
                  "Tab bar inferior, safe areas, gestos e modais deslizantes aproximam a experiência de uma ferramenta operacional nativa.",
              },
            ],
            architecture: [
              "PWA Next.js",
              "Supabase Auth",
              "PostgreSQL + Storage",
              "Webhook Mercado Livre",
              "Dashboard operacional",
            ],
            challenges: [
              "Manter eventos de webhook confiáveis e evitar efeitos duplicados em atualizações de estoque.",
              "Tratar taxas do marketplace como configuração, não como valores permanentes no código.",
              "Demonstrar o produto sem expor dados operacionais ou credenciais de uma conta real.",
            ],
            validations: [
              "Aplicação publicada e protegida por autenticação; a visita pública chega corretamente ao login.",
              "Repositório público documenta funcionalidades, estrutura e integração por webhook.",
              "Fórmula de cálculo de taxas e lucro está documentada com parâmetros configuráveis.",
              "Manifesto e estratégia PWA fazem parte da estrutura documentada do projeto.",
            ],
            outcome:
              "O projeto materializou uma superfície funcional para centralizar a rotina de estoque e vendas. O acesso público comprova o fluxo autenticado, mas dados internos e métricas de negócio não são expostos nem reivindicados neste estudo de caso.",
          },
        },
        {
          id: "5",
          title: "Smart Grid House",
          description:
            "Projeto acadêmico conceitual para monitoramento de consumo de energia em uma residência conectada.",
          longDescription:
            "Estudo acadêmico sobre coleta e visualização de dados de consumo, automação residencial e apoio a decisões de eficiência energética. O projeto é apresentado como exploração técnica e conceitual, não como solução implantada em ambiente real.",
          technologies: ["IoT", "Python", "Sensores", "Visualização de Dados"],
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Estudo acadêmico conceitual",
        },
        {
          id: "2",
          title: "BotLink",
          description:
            "Protótipo educacional sobre IA e automação de candidaturas, apresentado com foco em arquitetura, riscos e limites.",
          longDescription:
            "Projeto de estudo que combina automação de navegador e LLMs para explorar leitura de contexto e estruturação de respostas. O repositório original automatiza ações e traz um aviso legal; por isso, este portfólio o apresenta como experimento educacional, não como solução recomendada para produção. Uma evolução responsável deve exigir revisão humana antes de qualquer ação externa.",
          technologies: ["Python", "Playwright", "OpenAI API", "Flet", "Arquitetura Limpa"],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/BotLink",
          featured: false,
          size: "medium",
          inDevelopment: true,
          evidence: "IA aplicada com riscos explicitados",
          caseStudy: {
            slug: "botlink",
            summary:
              "Um experimento em Python que separa automação de navegador, integração com LLM e interface para estudar possibilidades e riscos de fluxos de candidatura assistidos por IA.",
            status: "Protótipo educacional · não indicado para produção",
            problem:
              "Candidaturas repetem leitura de contexto, dados de currículo e respostas semelhantes. Automatizar esse fluxo parece atraente, mas envolve credenciais, dados pessoais, termos de uso e o risco de uma IA executar ações incorretas em nome do usuário.",
            role:
              "Arquitetura do protótipo, integração técnica entre navegador e LLM e análise dos limites para uma evolução responsável.",
            responsibilities: [
              "Separar regras de domínio, casos de uso, adaptadores externos e interface.",
              "Integrar Playwright para navegação e OpenAI para interpretação de contexto.",
              "Definir limites operacionais, pausas e interrupção após erros consecutivos.",
              "Documentar riscos legais e requisitos de revisão humana para qualquer evolução.",
            ],
            decisions: [
              {
                title: "Isolar dependências externas",
                description:
                  "Clean Architecture separa domínio, aplicação, infraestrutura e apresentação para que navegador ou provedor de IA possam ser substituídos.",
              },
              {
                title: "Limitar a automação",
                description:
                  "O protótipo documenta limites, pausas e abortos após erros para reduzir comportamento descontrolado durante a experimentação.",
              },
              {
                title: "Tratar IA como componente falível",
                description:
                  "Respostas geradas precisam ser consideradas sugestões. Uma versão responsável deve tornar a confirmação humana obrigatória antes de qualquer envio.",
              },
              {
                title: "Não mascarar o risco do produto",
                description:
                  "O estudo de caso diferencia claramente a exploração técnica do uso autorizado em produção e mantém visível o aviso sobre termos de serviço.",
              },
            ],
            architecture: [
              "Interface Flet",
              "Casos de uso",
              "Adaptador Playwright",
              "Adaptador OpenAI",
              "Registros locais",
            ],
            challenges: [
              "Respeitar termos de uso e não contornar mecanismos de proteção de plataformas.",
              "Proteger credenciais, currículo e demais dados pessoais processados pelo fluxo.",
              "Impedir que respostas imprecisas ou ações irreversíveis sejam executadas sem revisão.",
            ],
            validations: [
              "Repositório público com estrutura de Clean Architecture documentada.",
              "Comandos de teste com pytest e cobertura estão documentados.",
              "Limites operacionais e interrupção por erros fazem parte da documentação.",
              "Aviso legal reconhece explicitamente possíveis conflitos com termos de serviço.",
            ],
            outcome:
              "O resultado é um aprendizado reutilizável sobre integração entre navegador e IA, acompanhado de um mapa claro de riscos. O estudo de caso não reivindica automação segura em produção; qualquer próxima versão deve reduzir o escopo para assistência e confirmação humana explícita.",
          },
        },
        {
          id: "4",
          title: "Portfólio Pessoal",
          description:
            "Portfólio multilíngue para apresentar trajetória, projetos, competências e certificações.",
          longDescription:
            "Aplicação web construída com Next.js e TypeScript para consolidar meu posicionamento profissional. O projeto reúne conteúdo estruturado em português, inglês e espanhol, modo claro/escuro, animações, SEO e geração de currículo em PDF.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "React PDF",
          ],
          demoUrl: "https://portf-lio-opal-nine.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/Portf-lio",
          featured: false,
          size: "medium",
          evidence: "Aplicação em produção e código público",
          demoStatus: "available",
        },
      ],
    },
    stack: {
      title: "Tecnologias que sustentam",
      titleAccent: "minha entrega",
      introduction:
        "Uma base tecnológica construída em torno de desenvolvimento full stack, integração de sistemas, IA aplicada e operação em nuvem.",
      setupTitle: "Ambiente de trabalho",
      setupIntroduction: "Ferramentas que apoiam desenvolvimento, investigação e colaboração.",
      hardwareLabel: "Equipamentos",
      softwareLabel: "Programas e ferramentas",
      languagesTitle: "Idiomas",
      languagesIntroduction: "Proficiência para comunicação profissional e aprendizado.",
      categories: [
        {
          name: "Linguagens",
          items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
        },
        {
          name: "Interfaces Web",
          items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "PWA"],
        },
        {
          name: "Servidor e Integrações",
          items: ["APIs REST", "Next.js APIs", "Supabase", "SQL", "Webhooks", "OAuth"],
        },
        {
          name: "IA e Automação",
          items: ["LLMs", "OpenAI API", "Kiro", "Playwright", "Automação", "Revisão Humana"],
        },
        {
          name: "Nuvem e DevOps",
          items: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Observabilidade"],
        },
        {
          name: "Dados e Operações",
          items: ["Pandas", "Power BI", "Excel", "SAP", "Análise de Dados"],
        },
      ],
      allTechnologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "LLMs",
        "OpenAI API",
        "Kiro",
        "Playwright",
        "Supabase",
        "Tailwind CSS",
        "PWA",
        "Pandas",
      ],
      setup: {
        hardware: [
          { name: "MacBook Pro M4", description: "36 GB de RAM" },
          { name: "Teclado mecânico", description: "Digitação e atalhos de desenvolvimento" },
          { name: "Mouse", description: "Navegação e produtividade" },
        ],
        software: [
          { name: "VS Code e Kiro", description: "Desenvolvimento com assistência de IA" },
          { name: "Git e GitHub", description: "Versionamento e colaboração" },
          { name: "Docker", description: "Ambientes reproduzíveis" },
          { name: "AWS Console e CLI", description: "Desenvolvimento e operação em nuvem" },
          { name: "Postman", description: "Exploração e teste de APIs" },
          { name: "Notion e Monday.com", description: "Documentação e organização do trabalho" },
          { name: "Figma", description: "Referências e prototipação de interface" },
          { name: "Terminal (Zsh)", description: "Automação e fluxo de desenvolvimento" },
        ],
      },
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Intermediário" },
        { name: "Espanhol", level: "Básico" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir a",
      titleAccent: "próxima solução",
      introduction:
        "Se você quer conversar sobre engenharia de software, IA aplicada, AWS ou uma oportunidade de colaboração, entre em contato.",
      directTitle: "Contato direto",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      locationLabel: "Localização",
      socialTitle: "Redes profissionais",
      formTitle: "Enviar uma mensagem",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Sobre o que você quer conversar?",
      messageLabel: "Mensagem",
      messagePlaceholder: "Compartilhe o contexto da oportunidade ou do projeto.",
      submitLabel: "Enviar via WhatsApp",
      successMessage: "Abrindo o WhatsApp com sua mensagem...",
      errorMessage: "Preencha os campos obrigatórios antes de continuar.",
      whatsappMessage: {
        title: "Nova mensagem do portfólio",
        name: "Nome",
        email: "E-mail",
        subject: "Assunto",
        message: "Mensagem",
        notProvided: "Não informado",
      },
    },
    footer: {
      description:
        "Engenharia de software full stack com IA aplicada, AWS e responsabilidade sobre cada entrega.",
      navigationTitle: "Navegação",
      portfolioTitle: "Portfólio",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
      backToTopAriaLabel: "Voltar ao início da página",
    },
    cv: {
      documentTitle: "Currículo — Leandro Rocha",
      fileName: "leandro-rocha-cv-pt.pdf",
      profileTitle: "Perfil profissional",
      professionalSummary:
        "Engenheiro de Software Full Stack Júnior e estudante de Engenharia da Computação, com atuação em TypeScript, React, Next.js, Python, APIs, SQL e AWS. Utiliza IA e automação como apoio à investigação, ao desenho de soluções, à documentação e à execução técnica, mantendo validação e responsabilidade humanas.",
      experienceTitle: "Experiência profissional",
      projectsTitle: "Projetos selecionados",
      educationTitle: "Formação acadêmica",
      skillsTitle: "Competências técnicas",
      certificationsTitle: "Certificações",
      languagesTitle: "Idiomas",
    },
    common: {
      loadingSectionLabel: "Carregando seção",
    },
  },
  en: {
    locale: "en",
    metadata: {
      title: "Leandro Rocha | Software Engineering, Applied AI & AWS",
      description:
        "Portfolio of Leandro Rocha, a full stack software engineer working with TypeScript, React, Next.js, Python, APIs, applied AI, AWS, and DevOps.",
      keywords: [
        "software engineer",
        "full stack development",
        "applied AI",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "AWS",
        "DevOps",
        "LLMs",
        "automation",
      ],
    },
    siteConfig: {
      ...sharedContact,
      title: "Software Engineer | Full Stack & Applied AI",
      headline: "I build reliable software and augment delivery with AI.",
      subheadline:
        "I work end to end with TypeScript, React, Next.js, Python, APIs, and AWS, using LLMs and automation to investigate problems, design solutions, and streamline workflows — always with human review.",
      availability: "Open to projects and opportunities",
      location: "São Paulo, SP, Brazil",
    },
    header: {
      navigationLabel: "Main navigation",
      menuLabel: "Menu",
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      readingProgressLabel: "Page reading progress",
      languageLabel: "Language",
      localeLabels: {
        pt: "Portuguese",
        en: "English",
        es: "Spanish",
      },
      themeLabel: "Theme",
      lightThemeLabel: "Use light theme",
      darkThemeLabel: "Use dark theme",
    },
    navigation: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#timeline" },
      { label: "Next steps", href: "#next-steps" },
      { label: "Certifications", href: "#certifications" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Software Engineering • Full Stack • Applied AI • AWS/DevOps",
      projectsCta: "View projects",
      resumeCta: "Download résumé",
      scrollLabel: "Explore",
      scrollAriaLabel: "Go to the next section",
    },
    about: {
      eyebrow: "About",
      title: "Engineering guided by context,",
      titleAccent: "quality, and continuous growth",
      introduction:
        "I am a Computer Engineering student and a full stack software engineer at Alest Consultoria. My path combines digital product development, process thinking, and the responsible use of Artificial Intelligence in engineering work.",
      body:
        "In my daily work, I use AI to support code and log investigation, compare alternatives, structure documentation, and automate repetitive tasks. Technical decisions, validation, and accountability for the outcome remain human.",
      principles: [
        {
          id: "engineering",
          title: "Engineering before tools",
          description:
            "Start with the problem, constraints, and expected impact to create readable, sustainable solutions that fit their context.",
        },
        {
          id: "responsible-ai",
          title: "AI with human oversight",
          description:
            "Use LLMs and automation to extend analysis and execution while validating outputs, risks, and decisions before use.",
        },
        {
          id: "delivery",
          title: "Delivery as a system",
          description:
            "Connect applications, cloud, observability, and automation to make delivery more predictable, secure, and straightforward to operate.",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "A technical foundation for a",
      titleAccent: "career in progress",
      introduction:
        "My Computer Engineering degree complements professional practice with foundations in software, hardware, networks, data, and Artificial Intelligence.",
      focusLabel: "Core areas",
      items: [
        {
          id: "edu-1",
          institution: "Universidade São Judas Tadeu",
          course: "Bachelor's Degree in Computer Engineering",
          period: "Aug 2022 — Jul 2027 (expected)",
          description:
            "Degree in progress covering computer architecture, digital circuits, embedded systems, networks, security, and Artificial Intelligence foundations applied to engineering.",
          focus: [
            "Software Engineering",
            "Embedded Systems",
            "Networks & Security",
            "Data",
            "Applied AI",
          ],
        },
      ],
    },
    timeline: {
      eyebrow: "Professional experience",
      title: "A path connecting",
      titleAccent: "software, data, and operations",
      introduction:
        "Experiences that have shaped my approach to engineering, collaboration, and continuous improvement across digital and operational environments.",
      technologiesLabel: "Technologies and tools",
      achievementsLabel: "Key contributions",
      expandLabel: "Expand experience",
      collapseLabel: "Collapse experience",
      items: [
        {
          id: "alest-software-engineer",
          year: "Feb 2026 — Present",
          title: "Junior Full Stack Software Engineer",
          subtitle: "Alest Consultoria",
          description:
            "Contributing across the web application engineering lifecycle, from investigation and technical design to implementation and support. Development with Python, Next.js, TypeScript, APIs, SQL, and AWS services, with applied AI supporting technical work.",
          type: "work",
          technologies: [
            "Python",
            "TypeScript",
            "Next.js",
            "React",
            "APIs",
            "SQL",
            "AWS",
            "Kiro",
            "LLMs",
          ],
          achievements: [
            "Build and evolve full stack workflows integrated with APIs and databases.",
            "Support troubleshooting through code, log, and technical documentation analysis.",
            "Apply AI to explore alternatives, document decisions, and automate tasks with human review.",
          ],
        },
        {
          id: "alest-software-intern",
          year: "Oct 2025 — Jan 2026",
          title: "Software Development Intern",
          subtitle: "Alest Consultoria",
          description:
            "Contributed to back-end and front-end application development and maintenance, supporting API integrations, automation, and Artificial Intelligence experiments.",
          type: "work",
          technologies: [
            "Python",
            "Java",
            "HTML",
            "CSS",
            "APIs",
            "AWS",
            "LLMs",
          ],
          achievements: [
            "Collaborate on software feature implementation and maintenance.",
            "Support integrations and automation with documentation and technical validation.",
          ],
        },
        {
          id: "dexco-pcp-intern",
          year: "Aug 2024 — Aug 2025",
          title: "Production Planning and Control Intern",
          subtitle: "Dexco — Deca",
          description:
            "Supported production-line maintenance planning, SAP notification handling, resource scheduling, and reporting for activity monitoring.",
          type: "work",
          technologies: ["SAP", "Excel", "Power BI", "Data Analysis", "Planning"],
          achievements: [
            "Organize information to support preventive maintenance scheduling.",
            "Collaborate with technical teams on plan reviews and activity monitoring.",
          ],
        },
        {
          id: "prefeitura-engineering-intern",
          year: "Aug 2022 — Jul 2024",
          title: "Engineering Intern",
          subtitle: "City of São Paulo — Regional Education Office",
          description:
            "Supported data analysis and organization, maintained departmental information bases, and prepared technical reports on services delivered by different units.",
          type: "work",
          technologies: ["Excel", "Databases", "Data Analysis", "Reporting"],
          achievements: [
            "Organize and update data used by the department.",
            "Prepare technical reports to support monitoring and decision-making.",
          ],
        },
      ],
    },
    nextSteps: {
      eyebrow: "Next steps",
      title: "Technical depth with a",
      titleAccent: "clear direction",
      introduction:
        "A roadmap focused on capabilities that expand my work in software engineering, applied AI, and cloud platforms.",
      stepLabel: "Step",
      focusLabel: "Focus",
      statusLabels: {
        estudando: "In progress",
        planejado: "Planned",
      },
      items: [
        {
          id: "ns-architecture",
          title: "Software Architecture & System Design",
          subtitle: "Sustainable systems",
          stageFocus: "Deepen context-driven architectural decisions.",
          description:
            "Study distributed-system design, API contracts, messaging, scalability, and trade-offs to build solutions that are easier to evolve and operate.",
          status: "estudando",
          focus: ["System Design", "APIs", "Messaging", "Scalability"],
        },
        {
          id: "ns-llmops",
          title: "AI Engineering & LLMOps",
          subtitle: "Reliable AI in production",
          stageFocus: "Move from model integration toward observable and evaluable systems.",
          description:
            "Deepen knowledge of RAG, agents, response evaluation, observability, security, and cost control to apply AI with clear technical criteria.",
          status: "estudando",
          focus: ["LLMOps", "RAG", "Evaluation", "Observability"],
        },
        {
          id: "ns-aws-security",
          title: "Reliability & Security on AWS",
          subtitle: "Responsible operations",
          stageFocus: "Strengthen security, resilience, and operational visibility.",
          description:
            "Deepen IAM, data protection, incident response, observability, and resilient architecture patterns in AWS environments.",
          status: "planejado",
          focus: ["IAM", "Cloud Security", "Resilience", "Observability"],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Validated knowledge,",
      titleAccent: "continuous learning",
      introduction:
        "Credentials aligned with my work across development, cloud, DevOps, AI, and digital workspace organization.",
      viewLabel: "View certificate",
      closeLabel: "Close",
      imageErrorLabel: "The certificate image could not be loaded.",
      openImageLabel: "Open image directly",
      certificateAriaLabel: "Certificate",
      items: [
        {
          id: "cert-aws-devops",
          title: "AWS Certified DevOps Engineer – Professional",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Professional certification covering continuous delivery, infrastructure automation, observability, incident response, and systems operations on AWS.",
          skills: ["CI/CD", "IaC", "Observability", "Automation", "Reliability"],
          certificateUrl: "/certificates/aws-devops.png",
        },
        {
          id: "cert-aws-developer",
          title: "AWS Certified Developer – Associate",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Associate certification covering application development, deployment, security, troubleshooting, and monitoring on AWS.",
          skills: ["AWS Lambda", "APIs", "Messaging", "CloudWatch"],
          certificateUrl: "/certificates/aws-developer.png",
        },
        {
          id: "cert-notion-service-specialist",
          title: "Notion Service Specialist",
          institution: "Notion HQ",
          year: "2026–2028",
          description:
            "Advanced certification issued on April 24, 2026 and valid through April 24, 2028, covering discovery, architecture, implementation, change management, and delivery of Notion solutions tied to business outcomes.",
          skills: [
            "Change Leadership",
            "Consulting",
            "Information Discovery",
            "Solution Delivery",
            "Solution Development",
          ],
          certificateUrl: "/certificates/notion-service-specialist.png",
        },
        {
          id: "cert-salesforce-agentforce",
          title: "Salesforce Certified Agentforce Specialist",
          institution: "Salesforce",
          year: "2025",
          description:
            "Credential covering Agentforce fundamentals, agent configuration, data use, and action design for AI-assisted experiences.",
          skills: ["Agentforce", "AI Agents", "Prompting", "Integrations"],
          certificateUrl: "/certificates/salesforce-agentforce.png",
        },
        {
          id: "cert-notion-admin",
          title: "Notion Certified Admin",
          institution: "Notion",
          year: "2025",
          description:
            "Certification covering workspace administration, governance, permissions, information organization, and Notion adoption.",
          skills: ["Governance", "Permissions", "Workspaces", "Knowledge Management"],
          certificateUrl: "/certificates/notion-admin.png",
        },
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Software built to",
      titleAccent: "solve real problems",
      introduction:
        "Personal and academic projects used to explore product thinking, architecture, user experience, automation, and applied AI.",
      stats: {
        projects: "Projects",
        technologies: "Technologies",
        featured: "Featured",
        inDevelopment: "In development",
      },
      inDevelopmentLabel: "In development",
      featuredLabel: "Featured",
      stackLabel: "Technology stack",
      demoLabel: "View demo",
      sourceLabel: "Source code",
      moreLabel: "View details",
      detailsAriaLabel: "View project details",
      caseLabel: "Explore case study",
      caseAriaLabel: "Open project case study",
      previewLabel: "Project visual overview",
      demoStatusLabels: {
        available: "Public demo",
        authenticated: "Account required",
        maintenance: "Demo under maintenance",
      },
      githubCta: "View all projects on GitHub",
      closeLabel: "Close project details",
      casePage: {
        backLabel: "Back to projects",
        eyebrow: "Project case study",
        statusLabel: "Current status",
        problemLabel: "Problem",
        roleLabel: "My role",
        responsibilitiesLabel: "Responsibilities",
        decisionsLabel: "Engineering decisions",
        architectureLabel: "Solution flow",
        challengesLabel: "Challenges and boundaries",
        validationsLabel: "Evidence and validation",
        outcomeLabel: "Outcome",
        linksLabel: "Explore the project",
        languageLabel: "Case study language",
      },
      items: [
        {
          id: "1",
          title: "IronTrack Ultra",
          description:
            "A workout-planning PWA with offline support and routine tracking.",
          longDescription:
            "A product project focused on workout logging, rest periods, and training history. It explores offline-first architecture, data synchronization, mobile experience, and information visualization without positioning the project as a clinical or prescription system.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Zustand",
            "PWA",
            "Dexie.js",
            "Recharts",
          ],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/IronTrack",
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Documented offline-first architecture",
          demoStatus: "maintenance",
          caseStudy: {
            slug: "irontrack-ultra",
            summary:
              "A mobile-first PWA exploring how workout logging can remain responsive through local persistence and evolve safely toward cloud synchronization.",
            status: "Functional prototype in progress",
            problem:
              "During a workout, an unstable connection cannot interrupt set logging, rest timers, or history access. The product had to prioritize on-device speed while preparing data for future authentication and synchronization.",
            role:
              "Product concept, experience modeling, architecture, and full-stack prototype development.",
            responsibilities: [
              "Model programs, workout templates, exercises, sessions, and sets.",
              "Design a mobile experience with timers and training history.",
              "Structure local persistence, interface state, and Supabase integration.",
              "Document boundaries, the testing strategy, and synchronization next steps.",
            ],
            decisions: [
              {
                title: "Write to the device first",
                description:
                  "IndexedDB, accessed through Dexie.js, keeps writes available without a network and avoids blocking the interface during a workout.",
              },
              {
                title: "Separate state from persistence",
                description:
                  "Zustand coordinates active-use state while the local layer preserves data, reducing coupling between screens and storage.",
              },
              {
                title: "Prepare asynchronous synchronization",
                description:
                  "A pending-operation queue was modeled to connect local storage to Supabase. Complete conflict resolution remains an explicit next step.",
              },
              {
                title: "Treat the PWA as a mobile product",
                description:
                  "A service worker, home-screen installation, and touch-focused components support the real workout context.",
              },
            ],
            architecture: [
              "React interface",
              "Zustand state",
              "IndexedDB + Dexie",
              "Synchronization queue",
              "Supabase",
            ],
            challenges: [
              "Define a conflict policy before enabling bidirectional production synchronization.",
              "Keep timers and quick actions clear on small screens and through interruptions.",
              "Present history and progress without positioning the product as clinical or prescriptive.",
            ],
            validations: [
              "Public repository documents the data flow, schema, and offline-first strategy.",
              "Strict TypeScript and database types generated from the Supabase schema are documented.",
              "A Vitest and React Testing Library strategy is documented.",
              "PWA and service-worker setup are described; the public deployment is temporarily unavailable.",
            ],
            outcome:
              "The project established a technical foundation for workout sessions resilient to network loss and made unfinished decisions visible. This case study claims no users or business metrics and transparently marks the public demo as under maintenance.",
          },
        },
        {
          id: "3",
          title: "LLControl",
          description:
            "An inventory and sales PWA integrated with the Mercado Livre ecosystem.",
          longDescription:
            "An application for centralizing products, inventory, sales, and operational indicators. The project explores OAuth authentication, webhooks, external API integration, data persistence, and a responsive interface for daily monitoring.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Framer Motion",
            "PWA",
            "Mercado Livre API",
          ],
          demoUrl: "https://ll-controll.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/LLControll",
          featured: true,
          size: "medium",
          evidence: "Published application with authenticated access",
          demoStatus: "authenticated",
          caseStudy: {
            slug: "llcontrol",
            summary:
              "A PWA bringing inventory, sales, fees, and Mercado Livre events into a mobile-first operational workflow.",
            status: "Published application with authenticated access",
            problem:
              "Managing products, sales, and fees across separate tools creates rework and weakens visibility into each operation. The proposal was to centralize the workflow and prepare updates coming from the marketplace.",
            role:
              "Product concept, mobile experience, data modeling, and full-stack integration development.",
            responsibilities: [
              "Organize dashboard, inventory, sales, history, and settings into one flow.",
              "Model authentication, data persistence, and image storage with Supabase.",
              "Implement configurable fee and per-sale profit calculations.",
              "Structure Mercado Livre event intake through a webhook.",
            ],
            decisions: [
              {
                title: "Centralize operations",
                description:
                  "Products, sales, targets, and fees share one model, reducing context switching in daily monitoring.",
              },
              {
                title: "Separate identity, data, and files",
                description:
                  "Supabase Auth, PostgreSQL, and Storage cover authentication, operational records, and product images with clear responsibilities.",
              },
              {
                title: "Receive marketplace events",
                description:
                  "A webhook route prepares inventory updates, sale records, and result calculations from order events.",
              },
              {
                title: "Prioritize mobile interaction",
                description:
                  "A bottom tab bar, safe areas, gestures, and slide-up modals bring the experience closer to a native operational tool.",
              },
            ],
            architecture: [
              "Next.js PWA",
              "Supabase Auth",
              "PostgreSQL + Storage",
              "Mercado Livre webhook",
              "Operational dashboard",
            ],
            challenges: [
              "Keep webhook events reliable and avoid duplicate effects on inventory updates.",
              "Treat marketplace fees as configuration rather than permanent values in code.",
              "Demonstrate the product without exposing operational data or real-account credentials.",
            ],
            validations: [
              "The application is published and authentication-protected; public visits correctly reach the login flow.",
              "The public repository documents features, structure, and webhook integration.",
              "The fee and profit formula is documented with configurable parameters.",
              "The project structure documents its manifest and PWA strategy.",
            ],
            outcome:
              "The project delivered a functional surface for centralizing inventory and sales routines. Public access demonstrates the authenticated flow, while internal data and business metrics are neither exposed nor claimed in this case study.",
          },
        },
        {
          id: "5",
          title: "Smart Grid House",
          description:
            "An academic concept project for monitoring energy consumption in a connected home.",
          longDescription:
            "An academic study of consumption-data collection and visualization, home automation, and support for energy-efficiency decisions. It is presented as a technical and conceptual exploration, not as a solution deployed in a live environment.",
          technologies: ["IoT", "Python", "Sensors", "Data Visualization"],
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Conceptual academic study",
        },
        {
          id: "2",
          title: "BotLink",
          description:
            "An educational prototype about AI and job-application automation, presented through its architecture, risks, and boundaries.",
          longDescription:
            "A study project combining browser automation and LLMs to explore context reading and answer structuring. The original repository automates actions and includes a legal warning, so this portfolio presents it as an educational experiment rather than a production recommendation. A responsible evolution must require human review before any external action.",
          technologies: ["Python", "Playwright", "OpenAI API", "Flet", "Clean Architecture"],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/BotLink",
          featured: false,
          size: "medium",
          inDevelopment: true,
          evidence: "Applied AI with explicit risk disclosure",
          caseStudy: {
            slug: "botlink",
            summary:
              "A Python experiment separating browser automation, LLM integration, and interface concerns to study both the possibilities and risks of AI-assisted application workflows.",
            status: "Educational prototype · not recommended for production",
            problem:
              "Applications repeatedly involve reading context, résumé data, and similar questions. Automating that flow is tempting, but it involves credentials, personal data, terms of service, and the risk of AI taking incorrect actions on a user's behalf.",
            role:
              "Prototype architecture, technical integration between browser and LLM, and analysis of the boundaries required for responsible evolution.",
            responsibilities: [
              "Separate domain rules, use cases, external adapters, and interface concerns.",
              "Integrate Playwright for browsing and OpenAI for context interpretation.",
              "Define operational limits, pauses, and interruption after consecutive errors.",
              "Document legal risks and human-review requirements for any future version.",
            ],
            decisions: [
              {
                title: "Isolate external dependencies",
                description:
                  "Clean Architecture separates domain, application, infrastructure, and presentation so the browser or AI provider can be replaced.",
              },
              {
                title: "Constrain automation",
                description:
                  "The prototype documents limits, pauses, and error-based aborts to reduce uncontrolled behavior during experimentation.",
              },
              {
                title: "Treat AI as fallible",
                description:
                  "Generated answers must be considered suggestions. A responsible version must make human confirmation mandatory before any submission.",
              },
              {
                title: "Do not hide product risk",
                description:
                  "The case clearly distinguishes technical exploration from authorized production use and keeps the terms-of-service warning visible.",
              },
            ],
            architecture: [
              "Flet interface",
              "Use cases",
              "Playwright adapter",
              "OpenAI adapter",
              "Local records",
            ],
            challenges: [
              "Respect terms of service and never bypass platform protection mechanisms.",
              "Protect credentials, résumé content, and other personal data handled by the flow.",
              "Prevent inaccurate answers or irreversible actions from running without review.",
            ],
            validations: [
              "The public repository documents a Clean Architecture structure.",
              "Pytest and coverage commands are documented.",
              "Operational limits and error-based interruption are part of the documentation.",
              "A legal notice explicitly recognizes potential conflicts with terms of service.",
            ],
            outcome:
              "The outcome is reusable learning about browser-and-AI integration accompanied by a clear risk map. The case does not claim safe production automation; any next version must narrow the scope to assistance with explicit human confirmation.",
          },
        },
        {
          id: "4",
          title: "Personal Portfolio",
          description:
            "A multilingual portfolio presenting my career, projects, skills, and certifications.",
          longDescription:
            "A web application built with Next.js and TypeScript to consolidate my professional positioning. The project brings together structured content in Portuguese, English, and Spanish, light and dark themes, motion, SEO, and PDF résumé generation.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "React PDF",
          ],
          demoUrl: "https://portf-lio-opal-nine.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/Portf-lio",
          featured: false,
          size: "medium",
          evidence: "Live application and public source code",
          demoStatus: "available",
        },
      ],
    },
    stack: {
      title: "Technologies behind",
      titleAccent: "my delivery",
      introduction:
        "A stack centered on full stack development, systems integration, applied AI, and cloud operations.",
      setupTitle: "Work environment",
      setupIntroduction: "Tools supporting development, investigation, and collaboration.",
      hardwareLabel: "Hardware",
      softwareLabel: "Software and tools",
      languagesTitle: "Languages",
      languagesIntroduction: "Proficiency for professional communication and learning.",
      categories: [
        {
          name: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
        },
        {
          name: "Frontend",
          items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "PWA"],
        },
        {
          name: "Backend & Integrations",
          items: ["REST APIs", "Next.js APIs", "Supabase", "SQL", "Webhooks", "OAuth"],
        },
        {
          name: "AI & Automation",
          items: ["LLMs", "OpenAI API", "Kiro", "Playwright", "Automation", "Human Review"],
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Observability"],
        },
        {
          name: "Data & Operations",
          items: ["Pandas", "Power BI", "Excel", "SAP", "Data Analysis"],
        },
      ],
      allTechnologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "LLMs",
        "OpenAI API",
        "Kiro",
        "Playwright",
        "Supabase",
        "Tailwind CSS",
        "PWA",
        "Pandas",
      ],
      setup: {
        hardware: [
          { name: "MacBook Pro M4", description: "36 GB RAM" },
          { name: "Mechanical keyboard", description: "Typing and development shortcuts" },
          { name: "Mouse", description: "Navigation and productivity" },
        ],
        software: [
          { name: "VS Code and Kiro", description: "AI-assisted development" },
          { name: "Git and GitHub", description: "Version control and collaboration" },
          { name: "Docker", description: "Reproducible environments" },
          { name: "AWS Console and CLI", description: "Cloud development and operations" },
          { name: "Postman", description: "API exploration and testing" },
          { name: "Notion and Monday.com", description: "Documentation and work organization" },
          { name: "Figma", description: "Interface references and prototyping" },
          { name: "Terminal (Zsh)", description: "Automation and development workflows" },
        ],
      },
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Intermediate" },
        { name: "Spanish", level: "Basic" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build the",
      titleAccent: "next solution",
      introduction:
        "If you would like to discuss software engineering, applied AI, AWS, or a collaboration opportunity, get in touch.",
      directTitle: "Direct contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      socialTitle: "Professional networks",
      formTitle: "Send a message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What would you like to discuss?",
      messageLabel: "Message",
      messagePlaceholder: "Share the context of the opportunity or project.",
      submitLabel: "Send via WhatsApp",
      successMessage: "Opening WhatsApp with your message...",
      errorMessage: "Complete the required fields before continuing.",
      whatsappMessage: {
        title: "New portfolio message",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        notProvided: "Not provided",
      },
    },
    footer: {
      description:
        "Full stack software engineering with applied AI, AWS, and accountability for every delivery.",
      navigationTitle: "Navigation",
      portfolioTitle: "Portfolio",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      backToTopAriaLabel: "Back to the top of the page",
    },
    cv: {
      documentTitle: "Résumé — Leandro Rocha",
      fileName: "leandro-rocha-resume-en.pdf",
      profileTitle: "Professional profile",
      professionalSummary:
        "Junior Full Stack Software Engineer and Computer Engineering student working with TypeScript, React, Next.js, Python, APIs, SQL, and AWS. Uses AI and automation to support investigation, solution design, documentation, and technical execution while maintaining human validation and accountability.",
      experienceTitle: "Professional experience",
      projectsTitle: "Selected projects",
      educationTitle: "Education",
      skillsTitle: "Technical skills",
      certificationsTitle: "Certifications",
      languagesTitle: "Languages",
    },
    common: {
      loadingSectionLabel: "Loading section",
    },
  },
  es: {
    locale: "es",
    metadata: {
      title: "Leandro Rocha | Ingeniería de Software, IA Aplicada y AWS",
      description:
        "Portafolio de Leandro Rocha, ingeniero de software full stack con experiencia en TypeScript, React, Next.js, Python, APIs, IA aplicada, AWS y DevOps.",
      keywords: [
        "ingeniero de software",
        "desarrollo full stack",
        "IA aplicada",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "AWS",
        "DevOps",
        "LLMs",
        "automatización",
      ],
    },
    siteConfig: {
      ...sharedContact,
      title: "Ingeniero de Software | Full Stack e IA Aplicada",
      headline: "Construyo software confiable y potencio la entrega con IA.",
      subheadline:
        "Trabajo de extremo a extremo con TypeScript, React, Next.js, Python, APIs y AWS, utilizando LLMs y automatización para investigar problemas, diseñar soluciones y agilizar rutinas — siempre con revisión humana.",
      availability: "Disponible para proyectos y oportunidades",
      location: "São Paulo, SP, Brasil",
    },
    header: {
      navigationLabel: "Navegación principal",
      menuLabel: "Menú",
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      readingProgressLabel: "Progreso de lectura de la página",
      languageLabel: "Idioma",
      localeLabels: {
        pt: "Portugués",
        en: "Inglés",
        es: "Español",
      },
      themeLabel: "Tema",
      lightThemeLabel: "Usar tema claro",
      darkThemeLabel: "Usar tema oscuro",
    },
    navigation: [
      { label: "Inicio", href: "#hero" },
      { label: "Sobre mí", href: "#about" },
      { label: "Formación", href: "#education" },
      { label: "Experiencia", href: "#timeline" },
      { label: "Próximos pasos", href: "#next-steps" },
      { label: "Certificaciones", href: "#certifications" },
      { label: "Proyectos", href: "#projects" },
      { label: "Tecnologías", href: "#stack" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      eyebrow: "Ingeniería de Software • Full Stack • IA Aplicada • AWS/DevOps",
      projectsCta: "Ver proyectos",
      resumeCta: "Descargar CV",
      scrollLabel: "Explorar",
      scrollAriaLabel: "Ir a la siguiente sección",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Ingeniería guiada por contexto,",
      titleAccent: "calidad y evolución continua",
      introduction:
        "Soy estudiante de Ingeniería Informática e ingeniero de software full stack en Alest Consultoria. Mi trayectoria combina desarrollo de productos digitales, visión de procesos y uso responsable de la Inteligencia Artificial en el trabajo de ingeniería.",
      body:
        "En el día a día, uso IA para apoyar la investigación de código y registros, comparar alternativas, estructurar documentación y automatizar tareas repetitivas. Las decisiones técnicas, la validación y la responsabilidad sobre el resultado siguen siendo humanas.",
      principles: [
        {
          id: "engineering",
          title: "Ingeniería antes que herramientas",
          description:
            "Empezar por el problema, las restricciones y el impacto esperado para crear soluciones legibles, sostenibles y adecuadas al contexto.",
        },
        {
          id: "responsible-ai",
          title: "IA con supervisión humana",
          description:
            "Usar LLMs y automatización para ampliar el análisis y la ejecución, validando resultados, riesgos y decisiones antes de utilizarlos.",
        },
        {
          id: "delivery",
          title: "La entrega como sistema",
          description:
            "Conectar aplicación, nube, observabilidad y automatización para hacer la entrega más predecible, segura y sencilla de operar.",
        },
      ],
    },
    education: {
      eyebrow: "Formación académica",
      title: "Una base técnica para una",
      titleAccent: "carrera en construcción",
      introduction:
        "La carrera de Ingeniería Informática complementa la práctica profesional con fundamentos de software, hardware, redes, datos e Inteligencia Artificial.",
      focusLabel: "Áreas principales",
      items: [
        {
          id: "edu-1",
          institution: "Universidade São Judas Tadeu",
          course: "Ingeniería Informática",
          period: "ago de 2022 — jul de 2027 (previsión)",
          description:
            "Carrera en curso con estudios de arquitectura de computadores, circuitos digitales, sistemas embebidos, redes, seguridad y fundamentos de Inteligencia Artificial aplicados a la ingeniería.",
          focus: [
            "Ingeniería de Software",
            "Sistemas Embebidos",
            "Redes y Seguridad",
            "Datos",
            "IA Aplicada",
          ],
        },
      ],
    },
    timeline: {
      eyebrow: "Experiencia profesional",
      title: "Una trayectoria que conecta",
      titleAccent: "software, datos y operaciones",
      introduction:
        "Experiencias que han desarrollado mi visión de ingeniería, colaboración y mejora continua en entornos digitales y operativos.",
      technologiesLabel: "Tecnologías y herramientas",
      achievementsLabel: "Principales contribuciones",
      expandLabel: "Ampliar experiencia",
      collapseLabel: "Contraer experiencia",
      items: [
        {
          id: "alest-software-engineer",
          year: "feb de 2026 — actualidad",
          title: "Ingeniero de Software Full Stack Júnior",
          subtitle: "Alest Consultoria",
          description:
            "Participación en el ciclo de ingeniería de aplicaciones web, desde la investigación y el diseño técnico hasta la implementación y el soporte. Desarrollo con Python, Next.js, TypeScript, APIs, SQL y servicios AWS, con IA aplicada como apoyo al trabajo técnico.",
          type: "work",
          technologies: [
            "Python",
            "TypeScript",
            "Next.js",
            "React",
            "APIs",
            "SQL",
            "AWS",
            "Kiro",
            "LLMs",
          ],
          achievements: [
            "Construir y evolucionar flujos full stack integrados con APIs y bases de datos.",
            "Apoyar diagnósticos mediante el análisis de código, registros y documentación técnica.",
            "Aplicar IA para explorar alternativas, documentar decisiones y automatizar tareas con revisión humana.",
          ],
        },
        {
          id: "alest-software-intern",
          year: "oct de 2025 — ene de 2026",
          title: "Practicante de Desarrollo de Software",
          subtitle: "Alest Consultoria",
          description:
            "Participación en el desarrollo y mantenimiento de las capas de interfaz y servidor de aplicaciones, apoyando integraciones con APIs, automatizaciones y experimentos con Inteligencia Artificial.",
          type: "work",
          technologies: [
            "Python",
            "Java",
            "HTML",
            "CSS",
            "APIs",
            "AWS",
            "LLMs",
          ],
          achievements: [
            "Colaborar en la implementación y el mantenimiento de funcionalidades de software.",
            "Apoyar integraciones y automatizaciones con documentación y validación técnica.",
          ],
        },
        {
          id: "dexco-pcp-intern",
          year: "ago de 2024 — ago de 2025",
          title: "Practicante de Planificación y Control de Producción",
          subtitle: "Dexco — Deca",
          description:
            "Apoyo a la planificación del mantenimiento de líneas de producción, tratamiento de avisos en SAP, programación de recursos y elaboración de informes para el seguimiento de actividades.",
          type: "work",
          technologies: ["SAP", "Excel", "Power BI", "Análisis de Datos", "Planificación"],
          achievements: [
            "Organizar información para apoyar la programación de mantenimientos preventivos.",
            "Colaborar con equipos técnicos en la revisión de planes y el seguimiento de actividades.",
          ],
        },
        {
          id: "prefeitura-engineering-intern",
          year: "ago de 2022 — jul de 2024",
          title: "Practicante de Ingeniería",
          subtitle: "Municipalidad de São Paulo — Dirección Regional de Educación",
          description:
            "Apoyo al análisis y la organización de datos del área, mantenimiento de bases de información y elaboración de informes técnicos sobre servicios prestados por diferentes unidades.",
          type: "work",
          technologies: ["Excel", "Bases de Datos", "Análisis de Datos", "Informes"],
          achievements: [
            "Organizar y actualizar los datos utilizados por el área.",
            "Preparar informes técnicos para apoyar el seguimiento y la toma de decisiones.",
          ],
        },
      ],
    },
    nextSteps: {
      eyebrow: "Próximos pasos",
      title: "Profundidad técnica con una",
      titleAccent: "dirección clara",
      introduction:
        "Una hoja de ruta centrada en las capacidades que amplían mi trabajo en ingeniería de software, IA aplicada y plataformas en la nube.",
      stepLabel: "Etapa",
      focusLabel: "Foco",
      statusLabels: {
        estudando: "En curso",
        planejado: "Planificado",
      },
      items: [
        {
          id: "ns-architecture",
          title: "Arquitectura de Software y Diseño de Sistemas",
          subtitle: "Sistemas sostenibles",
          stageFocus: "Profundizar decisiones arquitectónicas orientadas al contexto.",
          description:
            "Estudiar diseño de sistemas distribuidos, contratos de APIs, mensajería, escalabilidad y compensaciones técnicas para construir soluciones más sencillas de evolucionar y operar.",
          status: "estudando",
          focus: ["Diseño de Sistemas", "APIs", "Mensajería", "Escalabilidad"],
        },
        {
          id: "ns-llmops",
          title: "Ingeniería de IA y LLMOps",
          subtitle: "IA confiable en producción",
          stageFocus: "Avanzar de la integración de modelos a sistemas observables y evaluables.",
          description:
            "Profundizar RAG, agentes, evaluación de respuestas, observabilidad, seguridad y control de costos para aplicar IA con criterios técnicos claros.",
          status: "estudando",
          focus: ["LLMOps", "RAG", "Evaluación", "Observabilidad"],
        },
        {
          id: "ns-aws-security",
          title: "Confiabilidad y Seguridad en AWS",
          subtitle: "Operación responsable",
          stageFocus: "Fortalecer seguridad, resiliencia y visibilidad operativa.",
          description:
            "Profundizar IAM, protección de datos, respuesta a incidentes, observabilidad y patrones de arquitectura resiliente en entornos AWS.",
          status: "planejado",
          focus: ["IAM", "Seguridad en la Nube", "Resiliencia", "Observabilidad"],
        },
      ],
    },
    certifications: {
      eyebrow: "Certificaciones",
      title: "Conocimiento validado,",
      titleAccent: "aprendizaje continuo",
      introduction:
        "Credenciales alineadas con mi trabajo en desarrollo, nube, DevOps, IA y organización del trabajo digital.",
      viewLabel: "Ver certificado",
      closeLabel: "Cerrar",
      imageErrorLabel: "No fue posible cargar la imagen del certificado.",
      openImageLabel: "Abrir imagen directamente",
      certificateAriaLabel: "Certificado",
      items: [
        {
          id: "cert-aws-devops",
          title: "AWS Certified DevOps Engineer – Professional",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Certificación profesional sobre entrega continua, automatización de infraestructura, observabilidad, respuesta a incidentes y operación de sistemas en AWS.",
          skills: ["CI/CD", "IaC", "Observabilidad", "Automatización", "Confiabilidad"],
          certificateUrl: "/certificates/aws-devops.png",
        },
        {
          id: "cert-aws-developer",
          title: "AWS Certified Developer – Associate",
          institution: "Amazon Web Services",
          year: "2026",
          description:
            "Certificación asociada sobre desarrollo, despliegue, seguridad, resolución de problemas y monitoreo de aplicaciones en AWS.",
          skills: ["AWS Lambda", "APIs", "Mensajería", "CloudWatch"],
          certificateUrl: "/certificates/aws-developer.png",
        },
        {
          id: "cert-notion-service-specialist",
          title: "Notion Service Specialist",
          institution: "Notion HQ",
          year: "2026–2028",
          description:
            "Certificación avanzada emitida el 24 de abril de 2026 y válida hasta el 24 de abril de 2028, sobre descubrimiento, arquitectura, implementación, gestión del cambio y entrega de soluciones de Notion orientadas a resultados de negocio.",
          skills: [
            "Liderazgo del Cambio",
            "Consultoría",
            "Descubrimiento de Información",
            "Entrega de Soluciones",
            "Desarrollo de Soluciones",
          ],
          certificateUrl: "/certificates/notion-service-specialist.png",
        },
        {
          id: "cert-salesforce-agentforce",
          title: "Salesforce Certified Agentforce Specialist",
          institution: "Salesforce",
          year: "2025",
          description:
            "Credencial sobre fundamentos de Agentforce, configuración de agentes, uso de datos y diseño de acciones para experiencias asistidas por IA.",
          skills: ["Agentforce", "Agentes de IA", "Ingeniería de Prompts", "Integraciones"],
          certificateUrl: "/certificates/salesforce-agentforce.png",
        },
        {
          id: "cert-notion-admin",
          title: "Notion Certified Admin",
          institution: "Notion",
          year: "2025",
          description:
            "Certificación sobre administración de espacios de trabajo, gobernanza, permisos, organización de la información y adopción de Notion.",
          skills: ["Gobernanza", "Permisos", "Espacios de Trabajo", "Gestión del Conocimiento"],
          certificateUrl: "/certificates/notion-admin.png",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos seleccionados",
      title: "Software construido para",
      titleAccent: "resolver problemas reales",
      introduction:
        "Proyectos personales y académicos utilizados para explorar producto, arquitectura, experiencia de usuario, automatización e IA aplicada.",
      stats: {
        projects: "Proyectos",
        technologies: "Tecnologías",
        featured: "Destacados",
        inDevelopment: "En desarrollo",
      },
      inDevelopmentLabel: "En desarrollo",
      featuredLabel: "Destacado",
      stackLabel: "Tecnologías",
      demoLabel: "Ver demostración",
      sourceLabel: "Código fuente",
      moreLabel: "Ver detalles",
      detailsAriaLabel: "Ver detalles del proyecto",
      caseLabel: "Explorar caso",
      caseAriaLabel: "Abrir caso del proyecto",
      previewLabel: "Vista visual del proyecto",
      demoStatusLabels: {
        available: "Demostración pública",
        authenticated: "Acceso con cuenta",
        maintenance: "Demostración en mantenimiento",
      },
      githubCta: "Ver todos los proyectos en GitHub",
      closeLabel: "Cerrar detalles del proyecto",
      casePage: {
        backLabel: "Volver a los proyectos",
        eyebrow: "Caso de proyecto",
        statusLabel: "Estado actual",
        problemLabel: "Problema",
        roleLabel: "Mi papel",
        responsibilitiesLabel: "Responsabilidades",
        decisionsLabel: "Decisiones de ingeniería",
        architectureLabel: "Flujo de la solución",
        challengesLabel: "Desafíos y límites",
        validationsLabel: "Evidencias y validaciones",
        outcomeLabel: "Resultado",
        linksLabel: "Explorar el proyecto",
        languageLabel: "Idioma del caso",
      },
      items: [
        {
          id: "1",
          title: "IronTrack Ultra",
          description:
            "PWA para organizar entrenamientos de musculación, con soporte sin conexión y seguimiento de la rutina.",
          longDescription:
            "Proyecto de producto orientado al registro de entrenamientos, descansos entre series y consulta del historial. Explora una arquitectura preparada para funcionar sin conexión, sincronización de datos, experiencia móvil y visualización de información sin presentarse como un sistema clínico o de prescripción.",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Zustand",
            "PWA",
            "Dexie.js",
            "Recharts",
          ],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/IronTrack",
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Arquitectura sin conexión documentada",
          demoStatus: "maintenance",
          caseStudy: {
            slug: "irontrack-ultra",
            summary:
              "Una PWA centrada en dispositivos móviles que investiga cómo registrar entrenamientos con respuesta inmediata, persistencia local y una evolución segura hacia la sincronización en la nube.",
            status: "Prototipo funcional en evolución",
            problem:
              "Durante un entrenamiento, una conexión inestable no puede interrumpir el registro de series, los tiempos de descanso o el historial. El producto debía priorizar la velocidad en el dispositivo y preparar los datos para autenticación y sincronización futuras.",
            role:
              "Concepción del producto, modelado de la experiencia, arquitectura y desarrollo full stack del prototipo.",
            responsibilities: [
              "Modelar programas, plantillas de entrenamiento, ejercicios, sesiones y series.",
              "Diseñar una experiencia móvil con temporizadores e historial.",
              "Estructurar persistencia local, estado de la interfaz e integración con Supabase.",
              "Documentar límites, estrategia de pruebas y próximos pasos de sincronización.",
            ],
            decisions: [
              {
                title: "Escribir primero en el dispositivo",
                description:
                  "IndexedDB, mediante Dexie.js, mantiene la escritura disponible sin red y evita bloquear la interfaz durante el entrenamiento.",
              },
              {
                title: "Separar estado y persistencia",
                description:
                  "Zustand coordina el estado de uso mientras la capa local conserva los datos, reduciendo el acoplamiento entre pantallas y almacenamiento.",
              },
              {
                title: "Preparar la sincronización asíncrona",
                description:
                  "Se modeló una cola de operaciones pendientes para conectar el almacenamiento local con Supabase. La resolución completa de conflictos sigue siendo una evolución explícita.",
              },
              {
                title: "Tratar la PWA como producto móvil",
                description:
                  "Service worker, instalación en la pantalla de inicio y componentes táctiles sostienen el uso en el contexto real de entrenamiento.",
              },
            ],
            architecture: [
              "Interfaz React",
              "Estado Zustand",
              "IndexedDB + Dexie",
              "Cola de sincronización",
              "Supabase",
            ],
            challenges: [
              "Definir una política de conflictos antes de activar la sincronización bidireccional en producción.",
              "Mantener temporizadores y acciones rápidas claros en pantallas pequeñas y durante interrupciones.",
              "Presentar historial y progreso sin atribuir al producto un carácter clínico o prescriptivo.",
            ],
            validations: [
              "Repositorio público con flujo de datos, esquema y estrategia de funcionamiento sin conexión documentados.",
              "TypeScript estricto y tipos de base generados desde el esquema de Supabase.",
              "Estrategia documentada de pruebas con Vitest y React Testing Library.",
              "Configuración PWA y service worker descritos; el despliegue público está temporalmente indisponible.",
            ],
            outcome:
              "El proyecto consolidó una base técnica para sesiones resistentes a la falta de red y visibilizó las decisiones pendientes. Este caso no reivindica usuarios ni métricas de negocio y señala con transparencia que la demostración pública está en mantenimiento.",
          },
        },
        {
          id: "3",
          title: "LLControl",
          description:
            "PWA para control de inventario y ventas integrada con el ecosistema de Mercado Livre.",
          longDescription:
            "Aplicación para centralizar productos, inventario, ventas e indicadores operativos. El proyecto explora autenticación OAuth, webhooks, integración con APIs externas, persistencia de datos y una interfaz responsiva para rutinas de seguimiento.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Framer Motion",
            "PWA",
            "Mercado Livre API",
          ],
          demoUrl: "https://ll-controll.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/LLControll",
          featured: true,
          size: "medium",
          evidence: "Aplicación publicada con acceso autenticado",
          demoStatus: "authenticated",
          caseStudy: {
            slug: "llcontrol",
            summary:
              "Una PWA que reúne inventario, ventas, tasas y eventos de Mercado Livre en una rutina operacional pensada para dispositivos móviles.",
            status: "Aplicación publicada con acceso autenticado",
            problem:
              "Gestionar productos, ventas y tasas en herramientas separadas genera retrabajo y reduce la visibilidad de cada operación. La propuesta fue centralizar el flujo y preparar actualizaciones provenientes del marketplace.",
            role:
              "Concepción del producto, experiencia móvil, modelado de datos y desarrollo full stack de las integraciones.",
            responsibilities: [
              "Organizar dashboard, inventario, ventas, historial y ajustes en un único flujo.",
              "Modelar autenticación, persistencia de datos y almacenamiento de imágenes con Supabase.",
              "Implementar cálculos configurables de tasas y ganancia por venta.",
              "Estructurar la recepción de eventos de Mercado Livre mediante webhook.",
            ],
            decisions: [
              {
                title: "Centralizar la operación",
                description:
                  "Productos, ventas, objetivos y tasas comparten el mismo modelo, reduciendo el cambio de contexto en el seguimiento diario.",
              },
              {
                title: "Separar identidad, datos y archivos",
                description:
                  "Supabase Auth, PostgreSQL y Storage cubren autenticación, registros operacionales y fotos de productos con responsabilidades claras.",
              },
              {
                title: "Recibir eventos del marketplace",
                description:
                  "Una ruta de webhook prepara actualizaciones de inventario, registros de venta y cálculos de resultado desde eventos de pedidos.",
              },
              {
                title: "Priorizar la interacción móvil",
                description:
                  "Barra inferior, safe areas, gestos y modales deslizantes acercan la experiencia a una herramienta operacional nativa.",
              },
            ],
            architecture: [
              "PWA Next.js",
              "Supabase Auth",
              "PostgreSQL + Storage",
              "Webhook Mercado Livre",
              "Dashboard operacional",
            ],
            challenges: [
              "Mantener confiables los eventos de webhook y evitar efectos duplicados en el inventario.",
              "Tratar las tasas del marketplace como configuración y no como valores permanentes en el código.",
              "Demostrar el producto sin exponer datos operacionales o credenciales de una cuenta real.",
            ],
            validations: [
              "Aplicación publicada y protegida por autenticación; la visita pública llega correctamente al login.",
              "El repositorio público documenta funcionalidades, estructura e integración por webhook.",
              "La fórmula de tasas y ganancia está documentada con parámetros configurables.",
              "El manifiesto y la estrategia PWA forman parte de la estructura documentada.",
            ],
            outcome:
              "El proyecto materializó una superficie funcional para centralizar inventario y ventas. El acceso público demuestra el flujo autenticado, pero los datos internos y las métricas de negocio no se exponen ni se reivindican en este caso.",
          },
        },
        {
          id: "5",
          title: "Smart Grid House",
          description:
            "Proyecto académico conceptual para monitorear el consumo de energía en una vivienda conectada.",
          longDescription:
            "Estudio académico sobre recopilación y visualización de datos de consumo, automatización residencial y apoyo a decisiones de eficiencia energética. Se presenta como una exploración técnica y conceptual, no como una solución implantada en un entorno real.",
          technologies: ["IoT", "Python", "Sensores", "Visualización de Datos"],
          featured: true,
          size: "medium",
          inDevelopment: true,
          evidence: "Estudio académico conceptual",
        },
        {
          id: "2",
          title: "BotLink",
          description:
            "Prototipo educativo sobre IA y automatización de candidaturas, presentado desde su arquitectura, riesgos y límites.",
          longDescription:
            "Proyecto de estudio que combina automatización del navegador y LLMs para explorar lectura de contexto y estructuración de respuestas. El repositorio original automatiza acciones e incluye un aviso legal; por eso este portafolio lo presenta como experimento educativo, no como solución recomendada para producción. Una evolución responsable debe exigir revisión humana antes de cualquier acción externa.",
          technologies: ["Python", "Playwright", "OpenAI API", "Flet", "Arquitectura Limpia"],
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/BotLink",
          featured: false,
          size: "medium",
          inDevelopment: true,
          evidence: "IA aplicada con riesgos explicitados",
          caseStudy: {
            slug: "botlink",
            summary:
              "Un experimento en Python que separa automatización del navegador, integración con LLM e interfaz para estudiar posibilidades y riesgos de flujos de candidatura asistidos por IA.",
            status: "Prototipo educativo · no recomendado para producción",
            problem:
              "Las candidaturas repiten lectura de contexto, datos del currículum y respuestas similares. Automatizar ese flujo resulta atractivo, pero involucra credenciales, datos personales, términos de uso y el riesgo de que una IA actúe incorrectamente en nombre del usuario.",
            role:
              "Arquitectura del prototipo, integración técnica entre navegador y LLM y análisis de los límites necesarios para una evolución responsable.",
            responsibilities: [
              "Separar reglas de dominio, casos de uso, adaptadores externos e interfaz.",
              "Integrar Playwright para navegación y OpenAI para interpretar contexto.",
              "Definir límites operacionales, pausas e interrupción tras errores consecutivos.",
              "Documentar riesgos legales y requisitos de revisión humana para cualquier evolución.",
            ],
            decisions: [
              {
                title: "Aislar dependencias externas",
                description:
                  "Clean Architecture separa dominio, aplicación, infraestructura y presentación para permitir sustituir el navegador o el proveedor de IA.",
              },
              {
                title: "Limitar la automatización",
                description:
                  "El prototipo documenta límites, pausas y abortos por errores para reducir comportamientos descontrolados durante la experimentación.",
              },
              {
                title: "Tratar la IA como falible",
                description:
                  "Las respuestas generadas deben considerarse sugerencias. Una versión responsable debe hacer obligatoria la confirmación humana antes de cualquier envío.",
              },
              {
                title: "No ocultar el riesgo del producto",
                description:
                  "El caso diferencia con claridad la exploración técnica del uso autorizado en producción y mantiene visible el aviso sobre términos de servicio.",
              },
            ],
            architecture: [
              "Interfaz Flet",
              "Casos de uso",
              "Adaptador Playwright",
              "Adaptador OpenAI",
              "Registros locales",
            ],
            challenges: [
              "Respetar términos de uso y no eludir mecanismos de protección de plataformas.",
              "Proteger credenciales, currículum y otros datos personales procesados por el flujo.",
              "Impedir que respuestas imprecisas o acciones irreversibles se ejecuten sin revisión.",
            ],
            validations: [
              "Repositorio público con estructura de Clean Architecture documentada.",
              "Comandos de prueba con pytest y cobertura documentados.",
              "Límites operacionales e interrupción por errores forman parte de la documentación.",
              "Un aviso legal reconoce explícitamente posibles conflictos con términos de servicio.",
            ],
            outcome:
              "El resultado es un aprendizaje reutilizable sobre integración entre navegador e IA acompañado de un mapa claro de riesgos. El caso no reivindica automatización segura en producción; cualquier próxima versión debe reducir el alcance a asistencia con confirmación humana explícita.",
          },
        },
        {
          id: "4",
          title: "Portafolio Personal",
          description:
            "Portafolio multilingüe para presentar mi trayectoria, proyectos, competencias y certificaciones.",
          longDescription:
            "Aplicación web construida con Next.js y TypeScript para consolidar mi posicionamiento profesional. El proyecto reúne contenido estructurado en portugués, inglés y español, temas claro y oscuro, animaciones, SEO y generación de CV en PDF.",
          technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "React PDF",
          ],
          demoUrl: "https://portf-lio-opal-nine.vercel.app",
          githubUrl: "https://github.com/LeandroRochaDosPrazeres/Portf-lio",
          featured: false,
          size: "medium",
          evidence: "Aplicación en producción y código público",
          demoStatus: "available",
        },
      ],
    },
    stack: {
      title: "Tecnologías que sostienen",
      titleAccent: "mi entrega",
      introduction:
        "Una base tecnológica centrada en desarrollo full stack, integración de sistemas, IA aplicada y operación en la nube.",
      setupTitle: "Entorno de trabajo",
      setupIntroduction: "Herramientas que apoyan el desarrollo, la investigación y la colaboración.",
      hardwareLabel: "Equipos",
      softwareLabel: "Programas y herramientas",
      languagesTitle: "Idiomas",
      languagesIntroduction: "Competencia para la comunicación profesional y el aprendizaje.",
      categories: [
        {
          name: "Lenguajes",
          items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
        },
        {
          name: "Interfaces Web",
          items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "PWA"],
        },
        {
          name: "Servidor e Integraciones",
          items: ["APIs REST", "Next.js APIs", "Supabase", "SQL", "Webhooks", "OAuth"],
        },
        {
          name: "IA y Automatización",
          items: ["LLMs", "OpenAI API", "Kiro", "Playwright", "Automatización", "Revisión Humana"],
        },
        {
          name: "Nube y DevOps",
          items: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Observabilidad"],
        },
        {
          name: "Datos y Operaciones",
          items: ["Pandas", "Power BI", "Excel", "SAP", "Análisis de Datos"],
        },
      ],
      allTechnologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "APIs",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "LLMs",
        "OpenAI API",
        "Kiro",
        "Playwright",
        "Supabase",
        "Tailwind CSS",
        "PWA",
        "Pandas",
      ],
      setup: {
        hardware: [
          { name: "MacBook Pro M4", description: "36 GB de RAM" },
          { name: "Teclado mecánico", description: "Escritura y atajos de desarrollo" },
          { name: "Mouse", description: "Navegación y productividad" },
        ],
        software: [
          { name: "VS Code y Kiro", description: "Desarrollo asistido por IA" },
          { name: "Git y GitHub", description: "Control de versiones y colaboración" },
          { name: "Docker", description: "Entornos reproducibles" },
          { name: "AWS Console y CLI", description: "Desarrollo y operación en la nube" },
          { name: "Postman", description: "Exploración y pruebas de APIs" },
          { name: "Notion y Monday.com", description: "Documentación y organización del trabajo" },
          { name: "Figma", description: "Referencias y prototipado de interfaces" },
          { name: "Terminal (Zsh)", description: "Automatización y flujo de desarrollo" },
        ],
      },
      languages: [
        { name: "Portugués", level: "Nativo" },
        { name: "Inglés", level: "Intermedio" },
        { name: "Español", level: "Básico" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos la",
      titleAccent: "próxima solución",
      introduction:
        "Si quieres conversar sobre ingeniería de software, IA aplicada, AWS o una oportunidad de colaboración, ponte en contacto.",
      directTitle: "Contacto directo",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      socialTitle: "Redes profesionales",
      formTitle: "Enviar un mensaje",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿Sobre qué quieres conversar?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Comparte el contexto de la oportunidad o del proyecto.",
      submitLabel: "Enviar por WhatsApp",
      successMessage: "Abriendo WhatsApp con tu mensaje...",
      errorMessage: "Completa los campos obligatorios antes de continuar.",
      whatsappMessage: {
        title: "Nuevo mensaje del portafolio",
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        notProvided: "No informado",
      },
    },
    footer: {
      description:
        "Ingeniería de software full stack con IA aplicada, AWS y responsabilidad sobre cada entrega.",
      navigationTitle: "Navegación",
      portfolioTitle: "Portafolio",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
      backToTopAriaLabel: "Volver al inicio de la página",
    },
    cv: {
      documentTitle: "CV — Leandro Rocha",
      fileName: "leandro-rocha-cv-es.pdf",
      profileTitle: "Perfil profesional",
      professionalSummary:
        "Ingeniero de Software Full Stack Júnior y estudiante de Ingeniería Informática, con experiencia en TypeScript, React, Next.js, Python, APIs, SQL y AWS. Utiliza IA y automatización como apoyo a la investigación, el diseño de soluciones, la documentación y la ejecución técnica, manteniendo validación y responsabilidad humanas.",
      experienceTitle: "Experiencia profesional",
      projectsTitle: "Proyectos seleccionados",
      educationTitle: "Formación académica",
      skillsTitle: "Competencias técnicas",
      certificationsTitle: "Certificaciones",
      languagesTitle: "Idiomas",
    },
    common: {
      loadingSectionLabel: "Cargando sección",
    },
  },
};

export function getPortfolioContent(locale?: Locale | string | null): PortfolioContent {
  return portfolioContent[normalizeLocale(locale)];
}

export function getProjectBySlug(
  locale: Locale | string | null | undefined,
  slug: string,
): Project | undefined {
  return getPortfolioContent(locale).projects.items.find(
    (project) => project.caseStudy?.slug === slug,
  );
}

export function getProjectCaseSlugs(): string[] {
  return portfolioContent.pt.projects.items.flatMap((project) =>
    project.caseStudy ? [project.caseStudy.slug] : [],
  );
}
