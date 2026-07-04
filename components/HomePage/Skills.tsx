"use client";

import { useState } from "react";
import { Package } from "lucide-react";

type Skill = {
  name: string;
  icon?: string; // devicon image URL
};

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillCategories: { category: string; skills: Skill[] }[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: `${DEVICON_BASE}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg` },
      {
        name: "TypeScript",
        icon: `${DEVICON_BASE}/typescript/typescript-original.svg`,
      },
      { name: "Redux", icon: `${DEVICON_BASE}/redux/redux-original.svg` },
      { name: "SCSS", icon: `${DEVICON_BASE}/sass/sass-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        name: "Material UI",
        icon: `${DEVICON_BASE}/materialui/materialui-original.svg`,
      },
      {
        name: "Framer Motion",
        icon: `${DEVICON_BASE}/framermotion/framermotion-original.svg`,
      },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
      {
        name: "Express.js",
        icon: `${DEVICON_BASE}/express/express-original.svg`,
      },
      {
        name: "REST APIs",
        icon: `${DEVICON_BASE}/swagger/swagger-original.svg`,
      },
      { name: "MongoDB", icon: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
      {
        name: "Mongoose",
        icon: `${DEVICON_BASE}/mongoose/mongoose-original.svg`,
      },
      {
        name: "PostgreSQL",
        icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
      },
      { name: "Prisma", icon: `${DEVICON_BASE}/prisma/prisma-original.svg` },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${DEVICON_BASE}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON_BASE}/github/github-original.svg` },
      { name: "Vercel", icon: `${DEVICON_BASE}/vercel/vercel-original.svg` },
      {
        name: "VPS Hosting",
        icon: "https://api.iconify.design/mdi:server-network.svg",
      },
      { name: "VS Code", icon: `${DEVICON_BASE}/vscode/vscode-original.svg` },
      { name: "Figma", icon: `${DEVICON_BASE}/figma/figma-original.svg` },
      { name: "npm", icon: `${DEVICON_BASE}/npm/npm-original-wordmark.svg` },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
    ],
  },
];

function SkillTile({ skill }: { skill: Skill }) {
  const [broken, setBroken] = useState(false);
  const showImage = skill.icon && !broken;

  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10">
      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex items-center justify-center w-16 h-16 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={skill.icon}
            alt={`${skill.name} logo`}
            className="w-12 h-12 object-contain"
            loading="lazy"
            onError={() => setBroken(true)}
          />
        ) : (
          <Package className="w-4 h-4 text-primary" />
        )}
      </div>

      <span className="relative text-xs font-medium text-foreground text-center leading-tight group-hover:text-primary transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills">
      <section className="pt-20 max-w-7xl px-6 mx-auto border-border/50 dark:border-border/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl dark:from-primary/5"></div>

        <div className="relative z-10 pt-8">
          <div className="mb-10 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              A comprehensive overview of the tools and technologies I work
              with.
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTile key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
