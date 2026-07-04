/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.9, ease: "easeInOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const highlights = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Approach", value: "Adaptable across technologies and stacks" },
  { label: "Interests", value: "Football, cricket" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 md:py-20 border-t border-border/50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <div className="space-y-14">
        {/* Heading */}
        <motion.div className="space-y-3" variants={fadeUp}>
          <h2 className="text-4xl mb-2 sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
            About Me
          </h2>
          {/* <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div> */}
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 text-lg  text-muted-foreground leading-relaxed max-w-3xl"
          variants={fadeUp}
        >
          <p>
            I am a Full Stack Developer with a strong, practical command of
            modern web technologies, including Next.js, TypeScript, React,
            Node.js, Express, and Prisma. Rather than committing to a single
            stack, I focus on adaptability, learning new tools, frameworks, and
            languages as a project requires, and applying sound engineering
            principles consistently across any technology I work with. I built
            my technical foundation independently, through sustained,
            disciplined study, which has shaped my approach to work: methodical,
            resourceful, and driven to understand a problem thoroughly before
            solving it.
          </p>

          <p>
            I have delivered production applications across multiple client
            projects, working across the full development lifecycle, from
            requirements and architecture through implementation, testing, and
            long-term maintenance. My experience spans building responsive,
            performant user interfaces as well as designing and maintaining
            reliable backend systems and APIs, giving me a well-rounded
            perspective on how software is built end to end.
          </p>

          <p>
            I place a high value on clarity, precision, and maintainability in
            my work, and I approach every task with careful attention to detail
            and a preference for simple, well-reasoned solutions over
            unnecessary complexity. I am comfortable working independently or as
            part of a distributed team, and I communicate clearly to keep
            projects aligned and moving forward.
          </p>

          <p>
            Outside of my professional work, I follow football and cricket
            closely. Both are team sports that reward discipline, preparation,
            and composure under pressure, qualities I try to bring to my own
            work and collaborations.
          </p>
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-stretch divide-y sm:divide-y-0 sm:divide-x divide-border/60 border-t border-border/60 pt-8"
          variants={fadeUp}
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex-1 py-4 sm:py-0 sm:px-8 first:sm:pl-0 space-y-1.5"
            >
              <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {item.label}
              </div>
              <div className="text-base font-semibold text-foreground">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        {/* <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full"></div> */}
      </div>
    </motion.section>
  );
}
