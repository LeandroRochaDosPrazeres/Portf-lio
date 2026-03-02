// ============================================
// DADOS DO PORTFÓLIO - LEANDRO ROCHA
// ============================================

export const siteConfig = {
  name: "Leandro Rocha",
  title: "Desenvolvedor Full Stack",
  headline: "Transformando Ideias em Soluções Reais.",
  subheadline: "Desenvolvedor Full Stack com experiência em Python, Java e Inteligência Artificial. Criando soluções modernas, escaláveis e inovadoras.",
  availability: "Disponível para Projetos e Oportunidades",
  email: "leandrorocha899@icloud.com",
  phone: "+55 (11) 96615-5330",
  location: "São Paulo, SP",
  resumeUrl: "/cv.pdf",
  calendlyUrl: "https://calendly.com/leandrorocha899",
  whatsappNumber: "5511966155330",
};

export const socialLinks = {
  github: "https://github.com/LeandroRochaDosPrazeres",
  linkedin: "https://www.linkedin.com/in/leandro-rocha-dos-prazeres-387877306",
};

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

export const timelineData: TimelineItem[] = [
  {
    id: "00",
    year: "Fev 2026 - Atual",
    title: "Desenvolvedor Full Stack Junior",
    subtitle: "Alest Consultoria",
    description: "Arquitetura e desenvolvimento end-to-end de aplicações escaláveis, liderando a integração de modelos de linguagem (LLMs) em produtos de produção. Responsável por projetar APIs inteligentes, orquestrar pipelines de dados na AWS e entregar soluções que combinam engenharia de software robusta com Inteligência Artificial aplicada.",
    type: "work",
    technologies: ["Python", "Java", "TypeScript", "React", "AWS", "LLMs", "APIs", "Docker"],
    achievements: ["Arquitetura de soluções com IA em ambiente de produção", "Entrega de APIs inteligentes integradas a LLMs", "Automação de processos críticos com ganho de eficiência"],
  },
  {
    id: "0",
    year: "2025 - Fev 2026",
    title: "Estagiário de Desenvolvimento de Software",
    subtitle: "Alest Consultoria",
    description: "Desenvolvimento de aplicações back-end e front-end com Python, Java, HTML e CSS, atuando na integração e criação de soluções com Inteligência Artificial (LLMs) e APIs inteligentes. Experiência em aplicar IA para automação e aprimoramento de processos.",
    type: "work",
    technologies: ["Python", "Java", "HTML", "CSS", "LLMs", "APIs", "AWS"],
    achievements: ["Integração com Inteligência Artificial", "Desenvolvimento de sistemas modernos e escaláveis"],
  },
  {
    id: "1",
    year: "2024 - 2025",
    title: "Estagiário de PCM/PCP",
    subtitle: "Dexco - Deca",
    description: "Programação de manutenções nas linhas de produção via SAP. Tratamento de notas e programação de recursos para paradas de manutenção. Planejamento de atividades preventivas e geração de relatórios e indicadores do setor.",
    type: "work",
    technologies: ["SAP", "Excel", "Análise de Dados", "Planejamento"],
    achievements: ["Apoio às áreas técnicas para melhorias", "Revisão nos planos de manutenção dos equipamentos"],
  },
  {
    id: "2",
    year: "2022 - 2024",
    title: "Estagiário de Engenharia",
    subtitle: "Prefeitura de São Paulo (DRE)",
    description: "Responsável pela análise de dados e gerenciamento do banco de dados do setor, com elaboração de relatórios técnicos sobre os serviços prestados por diferentes unidades.",
    type: "work",
    technologies: ["Excel", "Banco de Dados", "Análise de Dados", "Relatórios"],
    achievements: ["Gerenciamento completo do banco de dados", "Elaboração de relatórios técnicos"],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  video?: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  size: "small" | "medium" | "large";
  inDevelopment?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "IronTrack Ultra",
    description: "App PWA de alta performance para acompanhamento de treinos de musculação",
    longDescription: "Aplicação de musculação desenvolvida para atletas que buscam precisão no acompanhamento de seus treinos. Oferece modo offline-first, cronômetro inteligente de descanso, calculadora de anilhas, mapa de calor muscular para visualizar recuperação, e sincronização automática com Supabase. Projetado como PWA, funciona como app nativo em iOS e Android.",
    image: "/projects/irontrack.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "PWA", "Dexie.js", "Recharts"],
    demoUrl: "https://iron-track-teal.vercel.app",
    githubUrl: "https://github.com/LeandroRochaDosPrazeres/IronTrack",
    featured: true,
    size: "medium",
    inDevelopment: true,
  },
  {
    id: "2",
    title: "BotLink",
    description: "Agente autônomo de automação cognitiva para candidaturas no LinkedIn com IA",
    longDescription: "Sistema de automação inteligente que utiliza GPT-4o para navegar e responder formulários de candidatura no LinkedIn. Extrai informações do currículo automaticamente, implementa medidas de segurança operacional (delays, limites diários, warm-up) para evitar bloqueios, e conta com interface GUI moderna. Arquitetura Clean Architecture com separação clara de responsabilidades.",
    image: "/projects/botlink.jpg",
    technologies: ["Python", "Playwright", "OpenAI GPT-4", "Flet", "Clean Architecture"],
    githubUrl: "https://github.com/LeandroRochaDosPrazeres/BotLink",
    featured: true,
    size: "medium",
    inDevelopment: true,
  },
  {
    id: "3",
    title: "LLControl",
    description: "Sistema de gestão de estoque e vendas integrado com Mercado Livre",
    longDescription: "PWA completo para controle de vendas e estoque com integração nativa ao Mercado Livre via OAuth e Webhooks. Oferece dashboard analítico (diário/semanal/mensal), cálculo automático de taxas e lucros, gestão de inventário com upload de fotos, histórico de vendas com swipe-to-action e design iOS-native com Tab Bar glassmorphism.",
    image: "/projects/llcontrol.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "PWA", "Mercado Livre API"],
    demoUrl: "https://ll-controll.vercel.app",
    githubUrl: "https://github.com/LeandroRochaDosPrazeres/LLControll",
    featured: true,
    size: "medium",
  },
  {
    id: "4",
    title: "Portfólio Pessoal",
    description: "Este portfólio profissional com design moderno e animações fluidas",
    longDescription: "Portfólio web construído com foco em performance e experiência do usuário. Apresenta design Bento Grid com Glassmorphism, animações com Framer Motion, tema dark/light, geração dinâmica de CV em PDF, SEO otimizado, e lazy loading para máxima performance. Score Lighthouse 90+.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React-PDF"],
    demoUrl: "https://portf-lio-opal-nine.vercel.app",
    githubUrl: "https://github.com/LeandroRochaDosPrazeres/Portf-lio",
    featured: false,
    size: "medium",
  },
];

export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Linguagens",
    items: ["Python", "VBA", "JavaScript", "TypeScript", "C"],
  },
  {
    name: "Ferramentas",
    items: ["SAP", "Excel", "Power BI", "SQL", "Git"],
  },
  {
    name: "Desenvolvimento",
    items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Dados & IA",
    items: ["Pandas", "Análise de Dados", "Automação", "Machine Learning"],
  },
  {
    name: "Soft Skills",
    items: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Organização"],
  },
];

export const allTechnologies = [
  "Python", "Java", "JavaScript", "TypeScript", "HTML",
  "CSS", "React", "Next.js", "Tailwind CSS", "AWS",
  "LLMs", "APIs", "SQL", "Git", "SAP",
  "Excel", "Power BI", "Pandas", "Automação", "IA",
];

export const setupItems = {
  hardware: [
    { name: "MacBook Pro", description: "16GB RAM" },
    { name: "Teclado", description: "Mecânico Gamer" },
    { name: "Mouse", description: "Gamer" },
  ],
  software: [
    { name: "VS Code + Copilot", description: "Editor com IA" },
    { name: "Git & GitHub", description: "Versionamento e CI/CD" },
    { name: "Docker", description: "Containerização" },
    { name: "AWS Console & CLI", description: "Cloud & Serverless" },
    { name: "Postman", description: "Testes de APIs" },
    { name: "Notion & Monday.com", description: "Gestão de Projetos" },
    { name: "Figma", description: "Prototipagem UI/UX" },
    { name: "Terminal (Zsh)", description: "Shell customizado" },
  ],
};

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
  { name: "Espanhol", level: "Básico" },
];

export interface EducationItem {
  id: string;
  institution: string;
  course: string;
  period: string;
  description: string;
  focus: string[];
}

export const educationItems: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Universidade São Judas",
    course: "Engenharia da Computação",
    period: "2022 — 2027/1",
    description:
      "Formação abrangendo arquitetura de computadores, circuitos digitais, sistemas embarcados, redes de computadores e inteligência artificial aplicada ao desenvolvimento.",
    focus: ["Sistemas Embarcados", "Circuitos Digitais", "Redes & Segurança", "IA Aplicada", "Desenvolvedor"],
  },
];

export interface NextStepItem {
  id: string;
  title: string;
  subtitle: string;
  stageFocus: string;
  description: string;
  status: "estudando" | "planejado" | "pesquisando" | "objetivo futuro";
  focus: string[];
}

export const nextSteps: NextStepItem[] = [
  {
    id: "ns-architecture",
    title: "Arquitetura de Software & System Design",
    subtitle: "A Base Estrutural",
    stageFocus: "Criar a base estrutural perfeita para o crescimento do SaaS.",
    description:
      "Domínio no desenho de sistemas distribuídos de alta disponibilidade e microsserviços. Foco em criar a base estrutural perfeita para o crescimento do SaaS, definindo padrões de comunicação, APIs e mensageria antes de escrever o código.",
    status: "estudando",
    focus: ["Microsserviços", "System Design", "Escalabilidade", "Arquitetura"],
  },
  {
    id: "ns-llmops",
    title: "Engenharia de IA & LLMOps",
    subtitle: "IA em Produção",
    stageFocus: "Integrar Inteligência Artificial de forma eficiente em produção.",
    description:
      "Aprofundamento na integração eficiente de Inteligência Artificial em produção. Criação de arquiteturas RAG (Retrieval-Augmented Generation), agentes autônomos e otimização de custos de APIs (OpenAI/Agentforce) para processamento de documentos complexos.",
    status: "estudando",
    focus: ["LLMOps", "OpenAI API", "RAG", "IA Generativa"],
  },
  {
    id: "ns-aws-security",
    title: "AWS Certified Security – Specialty",
    subtitle: "Segurança em Nuvem",
    stageFocus: "Blindar a infraestrutura do produto para o mercado B2B.",
    description:
      "Especialização em proteção de dados e compliance corporativo na nuvem. O objetivo é garantir que a infraestrutura do produto atenda aos mais altos padrões de segurança B2B, blindando informações sensíveis de clientes corporativos.",
    status: "planejado",
    focus: ["Cloud Security", "IAM", "Compliance", "Proteção de Dados"],
  },
  {
    id: "ns-scrum",
    title: "Liderança Ágil (Scrum Master)",
    subtitle: "Liderança de Esquadrões",
    stageFocus: "Liderar esquadrões de tecnologia com eficiência.",
    description:
      "Preparação para liderar esquadrões de tecnologia no futuro. Foco em metodologias ágeis (Scrum/Kanban) para remover impedimentos do dia a dia, otimizar a velocidade de entrega e manter o time de engenharia focado.",
    status: "pesquisando",
    focus: ["Scrum Master", "Gestão de Times", "Agile", "Entrega Contínua"],
  },
  {
    id: "ns-product",
    title: "Product Management (Gestão de Produto)",
    subtitle: "Visão Estratégica",
    stageFocus: "Transição da mentalidade técnica para a visão de negócios.",
    description:
      "Transição da mentalidade puramente técnica para a visão estratégica de negócios. Entendimento profundo das dores do cliente corporativo, validação de mercado, criação de roadmaps e priorização de features que geram receita real.",
    status: "pesquisando",
    focus: ["Estratégia de Produto", "Visão B2B", "Negócios", "SaaS"],
  },
  {
    id: "ns-mba",
    title: "MBA em Liderança e Gestão de Tecnologia",
    subtitle: "O Nível Executivo (C-Level)",
    stageFocus: "Preparação para liderar a estratégia da empresa.",
    description:
      "A consolidação executiva (C-Level). Preparação voltada para a gestão financeira de TI, tomada de decisões estratégicas de alto impacto, cultura organizacional e alinhamento total da tecnologia com o faturamento da empresa.",
    status: "objetivo futuro",
    focus: ["C-Level", "Estratégia Corporativa", "Liderança", "Finanças"],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  skills: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: "cert-aws-devops",
    title: "AWS Certified DevOps Engineer – Professional",
    institution: "Amazon Web Services",
    year: "2026",
    description: "Certificação avançada que valida domínio em automação de infraestrutura, pipelines de CI/CD, IaC (Terraform/CloudFormation) e observabilidade para entregas de software rápidas e seguras em escala.",
    skills: ["CI/CD", "IaC", "CloudFormation", "Observabilidade", "SRE"],
  },
  {
    id: "cert-aws",
    title: "AWS Developer Associate",
    institution: "Amazon Web Services",
    year: "2026",
    description: "Certificação que valida boas práticas de desenvolvimento serverless, integrações com APIs e observabilidade na AWS.",
    skills: ["Lambda", "API Gateway", "SQS/SNS", "CloudWatch"],
  },
  {
    id: "cert-5",
    title: "Salesforce: Agentforce Specialist",
    institution: "Salesforce",
    year: "2025",
    description: "Especialização em construção de Agentes de IA autônomos, orquestração de fluxos e integração de LLMs com dados de CRM para automação inteligente.",
    skills: ["Orquestração de IA", "Reasoning Engine", "Gestão de Ações"],
  },
  {
    id: "cert-3",
    title: "Notion Certified: Admin",
    institution: "Notion",
    year: "2025",
    description: "Certificação focada em governança, automações e organização de workspaces colaborativos no Notion.",
    skills: ["Notion", "Automação", "Workspace Management"],
  },
  {
    id: "cert-4",
    title: "Working with Boards",
    institution: "Monday.com",
    year: "2025",
    description: "Capacitação em criação de boards estratégicos, automações e fluxos colaborativos dentro do Monday.com.",
    skills: ["Monday.com", "Automação", "Gestão Visual"],
  },
  {
    id: "cert-1",
    title: "Curso de Python Básico",
    institution: "IMT - Instituto Mauá de Tecnologia",
    year: "2022",
    description: "Fundamentos de programação, lógica e automação com Python.",
    skills: ["Python", "Lógica de Programação", "Automação"],
  },
  {
    id: "cert-2",
    title: "Manutenção de Computadores e Notebooks",
    institution: "ETEC Prof. Camargo Aranha",
    year: "2019",
    description: "Diagnóstico e reparo de hardware, montagem e manutenção preventiva.",
    skills: ["Hardware", "Diagnóstico", "Suporte"],
  },
];
