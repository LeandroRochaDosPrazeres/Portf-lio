// ============================================
// DADOS DO PORTFÓLIO - LEANDRO ROCHA
// ============================================

export const siteConfig = {
  name: "Leandro Rocha",
  title: "Desenvolvedor Full Stack",
  headline: "Transformando Ideias em Soluções Reais.",
  subheadline: "Desenvolvedor Full Stack com experiência em Python, Java e Inteligência Artificial. Criando soluções modernas, escaláveis e inovadoras.",
  availability: "Disponível para Projetos",
  email: "leandrorocha899@icloud.com",
  phone: "+55 (11) 96615-5330",
  location: "São Paulo, SP",
  resumeUrl: "/cv.pdf",
  calendlyUrl: "https://calendly.com/leandrorocha899",
  whatsappNumber: "5511966155330",
};

export const socialLinks = {
  github: "#", // Link será adicionado futuramente
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
  {
    id: "3",
    year: "2022 - 2027",
    title: "Engenharia da Computação",
    subtitle: "Universidade São Judas",
    description: "Graduação em Engenharia da Computação com foco em programação, desenvolvimento de software e inteligência artificial.",
    type: "education",
    technologies: ["Python", "Algoritmos", "Estruturas de Dados", "IA"],
  },
  {
    id: "4",
    year: "2025",
    title: "AWS Developer Associate",
    subtitle: "Amazon Web Services - Em Estudo",
    description: "Preparação para a certificação AWS Certified Developer Associate.",
    type: "certification",
    technologies: ["AWS", "Cloud"],
  },
  {
    id: "5",
    year: "2022",
    title: "Curso de Python Básico",
    subtitle: "IMT - Instituto Mauá de Tecnologia",
    description: "Curso extracurricular de fundamentos de programação em Python.",
    type: "certification",
    technologies: ["Python", "Lógica de Programação"],
  },
  {
    id: "6",
    year: "2019",
    title: "Manutenção de Computadores e Notebooks",
    subtitle: "ETEC - Prof. Camargo Aranha",
    description: "Curso técnico de manutenção de hardware, diagnóstico e reparo de computadores e notebooks.",
    type: "certification",
    technologies: ["Hardware", "Diagnóstico", "Manutenção"],
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
    title: "Portfólio Pessoal",
    description: "Este portfólio moderno construído com Next.js, TypeScript e Tailwind CSS",
    longDescription: "Portfólio profissional com design moderno, animações fluidas, tema dark/light e otimizado para performance.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com/leandrorocha/portfolio",
    featured: true,
    size: "large",
  },
  {
    id: "2",
    title: "Automação com Python",
    description: "Scripts de automação para processos empresariais",
    longDescription: "Conjunto de scripts Python para automatização de tarefas repetitivas, tratamento de dados e geração de relatórios.",
    image: "/projects/automation.jpg",
    technologies: ["Python", "Pandas", "Automação", "Excel"],
    githubUrl: "https://github.com/leandrorocha/automacao-python",
    featured: true,
    size: "medium",
  },
  {
    id: "3",
    title: "Automação VBA",
    description: "Macros e automações em Excel com VBA",
    image: "/projects/vba.jpg",
    technologies: ["VBA", "Excel", "Automação"],
    githubUrl: "https://github.com/leandrorocha/vba-automacao",
    featured: false,
    size: "small",
  },
  {
    id: "4",
    title: "Análise de Dados",
    description: "Projetos de análise e visualização de dados",
    image: "/projects/data.jpg",
    technologies: ["Python", "Pandas", "Matplotlib", "SQL"],
    githubUrl: "https://github.com/leandrorocha/data-analysis",
    featured: false,
    size: "small",
  },
  {
    id: "5",
    title: "Projetos Acadêmicos",
    description: "Projetos desenvolvidos durante a graduação em Engenharia da Computação",
    image: "/projects/academic.jpg",
    technologies: ["Python", "C", "Algoritmos", "IA"],
    githubUrl: "https://github.com/leandrorocha/projetos-academicos",
    featured: true,
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
