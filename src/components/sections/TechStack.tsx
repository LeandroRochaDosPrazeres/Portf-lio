"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Bot,
  Braces,
  Cloud,
  Code2,
  CodeXml,
  Container,
  Database,
  DatabaseZap,
  FileCode2,
  GitBranch,
  Globe,
  Monitor,
  PanelsTopLeft,
  Plug,
  Smartphone,
  Sparkles,
  TableProperties,
  Triangle,
  Wind,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePortfolio } from "@/components/providers/LocaleProvider";

const techIcons: Record<string, LucideIcon> = {
  TypeScript: Braces,
  React: Atom,
  "Next.js": Triangle,
  Python: FileCode2,
  APIs: Plug,
  SQL: Database,
  AWS: Cloud,
  Docker: Container,
  Git: GitBranch,
  "CI/CD": Workflow,
  LLMs: Bot,
  "OpenAI API": Sparkles,
  Kiro: CodeXml,
  Playwright: PanelsTopLeft,
  Supabase: DatabaseZap,
  "Tailwind CSS": Wind,
  PWA: Smartphone,
  Pandas: TableProperties,
};

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden py-4 marquee-container">
      <div
        className={cn(
          "flex gap-8 shrink-0 will-change-transform",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  const Icon = techIcons[name] ?? Code2;

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      className="group flex cursor-default items-center gap-3 rounded-full px-5 py-2.5 glass"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15"
        aria-hidden="true"
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

function SetupCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: { name: string; description: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function TechStack() {
  const { content } = usePortfolio();
  const { stack } = content;
  const firstHalf = stack.allTechnologies.slice(
    0,
    Math.ceil(stack.allTechnologies.length / 2),
  );
  const secondHalf = stack.allTechnologies.slice(
    Math.ceil(stack.allTechnologies.length / 2),
  );

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {stack.title} <span className="gradient-text">{stack.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {stack.introduction}
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="mb-16 -mx-4">
          <Marquee>
            {firstHalf.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </Marquee>
          <Marquee reverse>
            {secondHalf.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </Marquee>
        </div>

        {/* Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">{stack.setupTitle}</h3>
          <p className="text-muted-foreground">{stack.setupIntroduction}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16 items-start">
          <SetupCard title={stack.hardwareLabel} icon={Monitor} items={stack.setup.hardware} />
          <SetupCard title={stack.softwareLabel} icon={Code2} items={stack.setup.software} />
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">{stack.languagesTitle}</h3>
          <p className="text-muted-foreground">{stack.languagesIntroduction}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {stack.languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl px-6 py-4 flex items-center gap-3"
            >
              <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
