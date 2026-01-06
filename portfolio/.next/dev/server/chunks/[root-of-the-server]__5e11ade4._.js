module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@react-pdf/renderer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================
// DADOS DO PORTFÓLIO - LEANDRO ROCHA
// ============================================
__turbopack_context__.s([
    "allTechnologies",
    ()=>allTechnologies,
    "certifications",
    ()=>certifications,
    "educationItems",
    ()=>educationItems,
    "languages",
    ()=>languages,
    "nextSteps",
    ()=>nextSteps,
    "projectsData",
    ()=>projectsData,
    "setupItems",
    ()=>setupItems,
    "siteConfig",
    ()=>siteConfig,
    "socialLinks",
    ()=>socialLinks,
    "techStack",
    ()=>techStack,
    "timelineData",
    ()=>timelineData
]);
const siteConfig = {
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
    whatsappNumber: "5511966155330"
};
const socialLinks = {
    github: "https://github.com/LeandroRochaDosPrazeres",
    linkedin: "https://www.linkedin.com/in/leandro-rocha-dos-prazeres-387877306"
};
const timelineData = [
    {
        id: "0",
        year: "2025 - Atual",
        title: "Desenvolvedor Full Stack",
        subtitle: "Alest Consultoria",
        description: "Desenvolvimento de aplicações back-end e front-end com Python, Java, HTML e CSS, atuando na integração e criação de soluções com Inteligência Artificial (LLMs) e APIs inteligentes. Experiência em aplicar IA para automação e aprimoramento de processos.",
        type: "work",
        technologies: [
            "Python",
            "Java",
            "HTML",
            "CSS",
            "LLMs",
            "APIs",
            "AWS"
        ],
        achievements: [
            "Integração com Inteligência Artificial",
            "Desenvolvimento de sistemas modernos e escaláveis"
        ]
    },
    {
        id: "1",
        year: "2024 - 2025",
        title: "Estagiário de PCM/PCP",
        subtitle: "Dexco - Deca",
        description: "Programação de manutenções nas linhas de produção via SAP. Tratamento de notas e programação de recursos para paradas de manutenção. Planejamento de atividades preventivas e geração de relatórios e indicadores do setor.",
        type: "work",
        technologies: [
            "SAP",
            "Excel",
            "Análise de Dados",
            "Planejamento"
        ],
        achievements: [
            "Apoio às áreas técnicas para melhorias",
            "Revisão nos planos de manutenção dos equipamentos"
        ]
    },
    {
        id: "2",
        year: "2022 - 2024",
        title: "Estagiário de Engenharia",
        subtitle: "Prefeitura de São Paulo (DRE)",
        description: "Responsável pela análise de dados e gerenciamento do banco de dados do setor, com elaboração de relatórios técnicos sobre os serviços prestados por diferentes unidades.",
        type: "work",
        technologies: [
            "Excel",
            "Banco de Dados",
            "Análise de Dados",
            "Relatórios"
        ],
        achievements: [
            "Gerenciamento completo do banco de dados",
            "Elaboração de relatórios técnicos"
        ]
    }
];
const projectsData = [
    {
        id: "1",
        title: "Portfólio Pessoal",
        description: "Este portfólio moderno construído com Next.js, TypeScript e Tailwind CSS",
        longDescription: "Portfólio profissional com design moderno, animações fluidas, tema dark/light e otimizado para performance.",
        image: "/projects/portfolio.jpg",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/leandrorocha/portfolio",
        featured: true,
        size: "large"
    },
    {
        id: "2",
        title: "Automação com Python",
        description: "Scripts de automação para processos empresariais",
        longDescription: "Conjunto de scripts Python para automatização de tarefas repetitivas, tratamento de dados e geração de relatórios.",
        image: "/projects/automation.jpg",
        technologies: [
            "Python",
            "Pandas",
            "Automação",
            "Excel"
        ],
        githubUrl: "https://github.com/leandrorocha/automacao-python",
        featured: true,
        size: "medium"
    },
    {
        id: "3",
        title: "Automação VBA",
        description: "Macros e automações em Excel com VBA",
        image: "/projects/vba.jpg",
        technologies: [
            "VBA",
            "Excel",
            "Automação"
        ],
        githubUrl: "https://github.com/leandrorocha/vba-automacao",
        featured: false,
        size: "small"
    },
    {
        id: "4",
        title: "Análise de Dados",
        description: "Projetos de análise e visualização de dados",
        image: "/projects/data.jpg",
        technologies: [
            "Python",
            "Pandas",
            "Matplotlib",
            "SQL"
        ],
        githubUrl: "https://github.com/leandrorocha/data-analysis",
        featured: false,
        size: "small"
    },
    {
        id: "5",
        title: "Projetos Acadêmicos",
        description: "Projetos desenvolvidos durante a graduação em Engenharia da Computação",
        image: "/projects/academic.jpg",
        technologies: [
            "Python",
            "C",
            "Algoritmos",
            "IA"
        ],
        githubUrl: "https://github.com/leandrorocha/projetos-academicos",
        featured: true,
        size: "medium"
    }
];
const techStack = [
    {
        name: "Linguagens",
        items: [
            "Python",
            "VBA",
            "JavaScript",
            "TypeScript",
            "C"
        ]
    },
    {
        name: "Ferramentas",
        items: [
            "SAP",
            "Excel",
            "Power BI",
            "SQL",
            "Git"
        ]
    },
    {
        name: "Desenvolvimento",
        items: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "HTML",
            "CSS"
        ]
    },
    {
        name: "Dados & IA",
        items: [
            "Pandas",
            "Análise de Dados",
            "Automação",
            "Machine Learning"
        ]
    },
    {
        name: "Soft Skills",
        items: [
            "Comunicação",
            "Trabalho em Equipe",
            "Resolução de Problemas",
            "Organização"
        ]
    }
];
const allTechnologies = [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Tailwind CSS",
    "AWS",
    "LLMs",
    "APIs",
    "SQL",
    "Git",
    "SAP",
    "Excel",
    "Power BI",
    "Pandas",
    "Automação",
    "IA"
];
const setupItems = {
    hardware: [
        {
            name: "Notebook",
            description: "Samsung Intel i7"
        },
        {
            name: "Memória",
            description: "8GB RAM"
        },
        {
            name: "Teclado",
            description: "Gamer"
        },
        {
            name: "Mouse",
            description: "Gamer"
        }
    ],
    software: [
        {
            name: "Editor",
            description: "VS Code"
        },
        {
            name: "Versionamento",
            description: "Git & GitHub"
        },
        {
            name: "Office",
            description: "Excel & Power BI"
        },
        {
            name: "Automação",
            description: "Python & APIs"
        }
    ]
};
const languages = [
    {
        name: "Português",
        level: "Nativo"
    },
    {
        name: "Inglês",
        level: "Intermediário"
    },
    {
        name: "Espanhol",
        level: "Básico"
    }
];
const educationItems = [
    {
        id: "edu-1",
        institution: "Universidade São Judas",
        course: "Engenharia da Computação",
        period: "2022 — 2027/1",
        description: "Formação abrangendo arquitetura de computadores, circuitos digitais, sistemas embarcados, redes de computadores e inteligência artificial aplicada ao desenvolvimento.",
        focus: [
            "Sistemas Embarcados",
            "Circuitos Digitais",
            "Redes & Segurança",
            "IA Aplicada",
            "Desenvolvedor"
        ]
    }
];
const nextSteps = [
    {
        id: "ns-aws-1",
        title: "AWS Developer Associate",
        description: "Certificação em andamento para aprofundar boas práticas de desenvolvimento serverless, integrações com APIs e observabilidade na AWS.",
        status: "em andamento",
        focus: [
            "Lambda",
            "API Gateway",
            "SQS/SNS",
            "CloudWatch"
        ]
    },
    {
        id: "ns-gcp-2",
        title: "Google ACE Engineer",
        description: "Objetivo de dominar a implementação técnica, gerenciamento de IAM e operações diárias em ambientes cloud através de CLI e Console.",
        status: "planejado",
        focus: [
            "Deploy",
            "IAM",
            "Observabilidade",
            "Automação"
        ]
    },
    {
        id: "ns-gcp-1",
        title: "Digital Leader (Google Cloud)",
        description: "Foco em compreender a infraestrutura global do Google e os principais serviços de IaaS e PaaS para enxergar valor de negócio na nuvem.",
        status: "planejado",
        focus: [
            "Google Cloud",
            "Fundamentos",
            "Estratégia",
            "Infraestrutura"
        ]
    },
    {
        id: "ns-sec-1",
        title: "Cybersecurity Fundamentals",
        description: "Consolidar os pilares de confidencialidade, integridade e disponibilidade, além de criptografia, identidade e segurança de rede.",
        status: "pesquisando",
        focus: [
            "Segurança",
            "Criptografia",
            "Identidade",
            "Blue Team"
        ]
    },
    {
        id: "ns-sec-2",
        title: "CompTIA CySA+",
        description: "Desenvolver habilidades analíticas para detecção de vulnerabilidades, uso de ferramentas de monitoramento e resposta a incidentes.",
        status: "pesquisando",
        focus: [
            "Threat Hunting",
            "SIEM",
            "Resposta a Incidentes",
            "Detecção"
        ]
    },
    {
        id: "ns-sec-3",
        title: "eJPT / CEH",
        description: "Aprofundar práticas ofensivas para compreender como ataques acontecem e assim reforçar defesas.",
        status: "pesquisando",
        focus: [
            "Red Team",
            "Pentest",
            "Recon",
            "Exploração"
        ]
    }
];
const certifications = [
    {
        id: "cert-3",
        title: "Notion Certified: Admin",
        institution: "Notion",
        year: "2025",
        description: "Certificação focada em governança, automações e organização de workspaces colaborativos no Notion.",
        skills: [
            "Notion",
            "Automação",
            "Workspace Management"
        ]
    },
    {
        id: "cert-4",
        title: "Working with Boards",
        institution: "Monday.com",
        year: "2025",
        description: "Capacitação em criação de boards estratégicos, automações e fluxos colaborativos dentro do Monday.com.",
        skills: [
            "Monday.com",
            "Automação",
            "Gestão Visual"
        ]
    },
    {
        id: "cert-1",
        title: "Curso de Python Básico",
        institution: "IMT - Instituto Mauá de Tecnologia",
        year: "2022",
        description: "Fundamentos de programação, lógica e automação com Python.",
        skills: [
            "Python",
            "Lógica de Programação",
            "Automação"
        ]
    },
    {
        id: "cert-2",
        title: "Manutenção de Computadores e Notebooks",
        institution: "ETEC Prof. Camargo Aranha",
        year: "2019",
        description: "Diagnóstico e reparo de hardware, montagem e manutenção preventiva.",
        skills: [
            "Hardware",
            "Diagnóstico",
            "Suporte"
        ]
    }
];
}),
"[project]/src/app/api/cv/CvDocument.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Cores do tema
const colors = {
    primary: "#2563eb",
    dark: "#1e293b",
    gray: "#64748b",
    lightGray: "#e2e8f0",
    white: "#ffffff"
};
const styles = __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["StyleSheet"].create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 9,
        color: colors.dark,
        backgroundColor: colors.white
    },
    // Header
    header: {
        backgroundColor: colors.primary,
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 30
    },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 24,
        color: colors.white,
        marginBottom: 3
    },
    title: {
        fontSize: 12,
        color: colors.white,
        opacity: 0.9,
        marginBottom: 10
    },
    contactRow: {
        flexDirection: "row",
        gap: 8
    },
    contactItem: {
        fontSize: 9,
        color: colors.white,
        opacity: 0.85
    },
    // Corpo
    body: {
        flexDirection: "row"
    },
    // Coluna principal
    mainColumn: {
        width: "62%",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 15
    },
    // Sidebar
    sidebar: {
        width: "38%",
        backgroundColor: "#f8fafc",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 20
    },
    // Seções
    section: {
        marginBottom: 14
    },
    sectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 11,
        color: colors.primary,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        marginBottom: 8,
        paddingBottom: 4,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    sidebarSectionTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
        color: colors.dark,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        marginBottom: 8,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    },
    // Resumo
    summary: {
        fontSize: 9,
        color: colors.dark,
        lineHeight: 1.5
    },
    // Experiência
    experienceItem: {
        marginBottom: 12
    },
    experienceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2
    },
    experienceTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
        color: colors.dark
    },
    experienceCompany: {
        fontSize: 9,
        color: colors.primary,
        fontFamily: "Helvetica-Bold"
    },
    experienceDate: {
        fontSize: 8,
        color: colors.gray
    },
    experienceDescription: {
        fontSize: 8,
        color: colors.gray,
        lineHeight: 1.4,
        marginTop: 3
    },
    achievementItem: {
        fontSize: 8,
        color: colors.dark,
        marginTop: 2,
        marginLeft: 8
    },
    // Projetos
    projectItem: {
        marginBottom: 10
    },
    projectTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        color: colors.dark
    },
    projectDescription: {
        fontSize: 8,
        color: colors.gray,
        marginTop: 2
    },
    projectTech: {
        fontSize: 7,
        color: colors.primary,
        marginTop: 2
    },
    // Educação
    educationItem: {
        marginBottom: 8
    },
    educationCourse: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        color: colors.dark
    },
    educationInstitution: {
        fontSize: 8,
        color: colors.primary
    },
    educationPeriod: {
        fontSize: 8,
        color: colors.gray
    },
    // Skills
    skillCategory: {
        marginBottom: 8
    },
    skillCategoryName: {
        fontFamily: "Helvetica-Bold",
        fontSize: 8,
        color: colors.dark,
        marginBottom: 3
    },
    skillTags: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    skillTag: {
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 4,
        marginBottom: 3,
        borderRadius: 2,
        fontSize: 7,
        color: colors.dark,
        borderWidth: 1,
        borderColor: colors.lightGray
    },
    // Certificações
    certItem: {
        marginBottom: 6
    },
    certTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 8,
        color: colors.dark
    },
    certDetails: {
        fontSize: 7,
        color: colors.gray
    },
    certYear: {
        color: colors.primary,
        fontFamily: "Helvetica-Bold"
    },
    // Idiomas
    languageRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4
    },
    languageName: {
        fontSize: 8,
        color: colors.dark
    },
    languageLevel: {
        fontSize: 8,
        color: colors.gray
    }
});
const CvDocument = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Document"], {
        title: `Currículo - ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].name}`,
        author: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].name,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Page"], {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.name,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].name
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                            lineNumber: 245,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                            style: styles.title,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].title
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                            lineNumber: 246,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.contactRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.contactItem,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].email
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 248,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.contactItem,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 249,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.contactItem,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].phone
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 250,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.contactItem,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 251,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                    style: styles.contactItem,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].location
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 252,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                            lineNumber: 247,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                    lineNumber: 244,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                    style: styles.body,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.mainColumn,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sectionTitle,
                                            children: "Perfil Profissional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 262,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.summary,
                                            children: "Estudante de Engenharia da Computação com interesse em programação, desenvolvimento de software e inteligência artificial. Comprometido em aprender continuamente através de projetos práticos, cursos extracurriculares e orientação de profissionais experientes. Objetivo: aplicar conhecimentos para melhorar processos e gerar soluções eficientes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 263,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 261,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sectionTitle,
                                            children: "Experiência Profissional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 270,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timelineData"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.experienceItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.experienceHeader,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.experienceTitle,
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                        style: styles.experienceCompany,
                                                                        children: item.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.experienceDate,
                                                                children: item.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.experienceDescription,
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.achievements?.map((ach, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                            style: styles.achievementItem,
                                                            children: [
                                                                "• ",
                                                                ach
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 269,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sectionTitle,
                                            children: "Projetos em Destaque"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 290,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectsData"].filter((p)=>p.featured).slice(0, 3).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.projectItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.projectTitle,
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.projectDescription,
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.projectTech,
                                                        children: project.technologies.join(" • ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, project.id, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 289,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                            lineNumber: 259,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                            style: styles.sidebar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sidebarSectionTitle,
                                            children: "Formação Acadêmica"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 308,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["educationItems"].map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.educationItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.educationCourse,
                                                        children: edu.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.educationInstitution,
                                                        children: edu.institution
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.educationPeriod,
                                                        children: edu.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, edu.id, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 307,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sidebarSectionTitle,
                                            children: "Habilidades"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 320,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["techStack"].slice(0, 4).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.skillCategory,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.skillCategoryName,
                                                        children: category.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                        style: styles.skillTags,
                                                        children: category.items.slice(0, 5).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.skillTag,
                                                                children: skill
                                                            }, skill, false, {
                                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, category.name, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 319,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sidebarSectionTitle,
                                            children: "Certificações"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 335,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["certifications"].slice(0, 4).map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.certItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.certTitle,
                                                        children: cert.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.certDetails,
                                                        children: [
                                                            cert.institution,
                                                            " • ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                                style: styles.certYear,
                                                                children: cert.year
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 40
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, cert.id, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 334,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                    style: styles.section,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                            style: styles.sidebarSectionTitle,
                                            children: "Idiomas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                            lineNumber: 348,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["languages"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["View"], {
                                                style: styles.languageRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.languageName,
                                                        children: lang.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["Text"], {
                                                        style: styles.languageLevel,
                                                        children: lang.level
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, lang.name, true, {
                                                fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                                    lineNumber: 347,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                            lineNumber: 305,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/cv/CvDocument.tsx",
                    lineNumber: 257,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/api/cv/CvDocument.tsx",
            lineNumber: 242,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/api/cv/CvDocument.tsx",
        lineNumber: 241,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = CvDocument;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/cv/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@react-pdf/renderer [external] (@react-pdf/renderer, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$cv$2f$CvDocument$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/cv/CvDocument.tsx [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$cv$2f$CvDocument$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$cv$2f$CvDocument$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const revalidate = 3600;
async function streamToBuffer(stream) {
    return new Promise((resolve, reject)=>{
        const chunks = [];
        stream.on("data", (chunk)=>chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", ()=>resolve(Buffer.concat(chunks)));
    });
}
async function GET() {
    try {
        const stream = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$pdf$2f$renderer__$5b$external$5d$__$2840$react$2d$pdf$2f$renderer$2c$__esm_import$29$__["renderToStream"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$cv$2f$CvDocument$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/api/cv/route.tsx",
            lineNumber: 20,
            columnNumber: 41
        }, this));
        const pdfBuffer = await streamToBuffer(stream);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="leandro-rocha-cv.pdf"`,
                "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
            }
        });
    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"]("Erro ao gerar currículo", {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e11ade4._.js.map