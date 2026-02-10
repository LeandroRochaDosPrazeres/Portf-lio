"use client";

import { motion } from "framer-motion";
import { Monitor, Code2, Globe } from "lucide-react";
import { allTechnologies, setupItems, languages } from "@/lib/data";
import { cn } from "@/lib/utils";

// Tech icons mapping (using Lucide as fallback)
const techIcons: Record<string, React.ReactNode> = {
  Python: "🐍",
  Java: "☕",
  JavaScript: "JS",
  TypeScript: "TS",
  HTML: "🌐",
  CSS: "🎭",
  React: "⚛️",
  "Next.js": "▲",
  "Tailwind CSS": "🎨",
  AWS: "☁️",
  LLMs: "🤖",
  APIs: "🔗",
  SQL: "🗃️",
  Git: "📦",
  SAP: "🏭",
  Excel: "📗",
  "Power BI": "📈",
  Pandas: "🐼",
  Automação: "⚡",
  IA: "🧠",
};

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        className={cn("flex gap-8 shrink-0", reverse && "flex-row-reverse")}
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  const icon = techIcons[name] || "💻";

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex items-center gap-3 px-6 py-3 glass rounded-full cursor-default group"
    >
      <span className="text-2xl">{icon}</span>
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
          <Icon className="w-5 h-5 text-white" />
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
  const firstHalf = allTechnologies.slice(0, Math.ceil(allTechnologies.length / 2));
  const secondHalf = allTechnologies.slice(Math.ceil(allTechnologies.length / 2));

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
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As tecnologias e ferramentas que utilizo para transformar ideias em produtos digitais de alta qualidade.
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
          <h3 className="text-2xl font-bold mb-2">Meu Setup</h3>
          <p className="text-muted-foreground">O ambiente que uso para criar</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16 items-start">
          <SetupCard title="Hardware" icon={Monitor} items={setupItems.hardware} />
          <SetupCard title="Software & Ferramentas" icon={Code2} items={setupItems.software} />
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Idiomas</h3>
          <p className="text-muted-foreground">Comunicação global</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl px-6 py-4 flex items-center gap-3"
            >
              <Globe className="w-5 h-5 text-primary" />
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
