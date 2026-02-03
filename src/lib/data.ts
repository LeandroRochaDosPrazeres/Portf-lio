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
    id: "0",
    year: "2025 - Atual",
    title: "Desenvolvedor Full Stack",
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
    size: "large",
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
    size: "large",
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
    { name: "Notebook", description: "Samsung Intel i7" },
    { name: "Memória", description: "8GB RAM" },
    { name: "Teclado", description: "Gamer" },
    { name: "Mouse", description: "Gamer" },
  ],
  software: [
    { name: "Editor", description: "VS Code" },
    { name: "Versionamento", description: "Git & GitHub" },
    { name: "Office", description: "Excel & Power BI" },
    { name: "Automação", description: "Python & APIs" },
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
  description: string;
  status: "pesquisando" | "em andamento" | "planejado";
  focus: string[];
}

export const nextSteps: NextStepItem[] = [
  {
    id: "ns-gcp-2",
    title: "Google ACE Engineer",
    description:
      "Objetivo de dominar a implementação técnica, gerenciamento de IAM e operações diárias em ambientes cloud através de CLI e Console.",
    status: "planejado",
    focus: ["Deploy", "IAM", "Observabilidade", "Automação"],
  },
  {
    id: "ns-gcp-1",
    title: "Digital Leader (Google Cloud)",
    description:
      "Foco em compreender a infraestrutura global do Google e os principais serviços de IaaS e PaaS para enxergar valor de negócio na nuvem.",
    status: "planejado",
    focus: ["Google Cloud", "Fundamentos", "Estratégia", "Infraestrutura"],
  },
  {
    id: "ns-sec-1",
    title: "Cybersecurity Fundamentals",
    description:
      "Consolidar os pilares de confidencialidade, integridade e disponibilidade, além de criptografia, identidade e segurança de rede.",
    status: "pesquisando",
    focus: ["Segurança", "Criptografia", "Identidade", "Blue Team"],
  },
  {
    id: "ns-sec-2",
    title: "CompTIA CySA+",
    description:
      "Desenvolver habilidades analíticas para detecção de vulnerabilidades, uso de ferramentas de monitoramento e resposta a incidentes.",
    status: "pesquisando",
    focus: ["Threat Hunting", "SIEM", "Resposta a Incidentes", "Detecção"],
  },
  {
    id: "ns-sec-3",
    title: "eJPT / CEH",
    description:
      "Aprofundar práticas ofensivas para compreender como ataques acontecem e assim reforçar defesas.",
    status: "pesquisando",
    focus: ["Red Team", "Pentest", "Recon", "Exploração"],
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
    id: "cert-aws",
    title: "AWS Developer Associate",
    institution: "Amazon Web Services",
    year: "2025",
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
