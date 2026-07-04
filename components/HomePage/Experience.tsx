"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "SM Technology",
      location: "On-site",
      duration: "Aug 2025 – Present",
      type: "Full-Time",
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "MongoDB",
        "Mongoose",
        "Stripe",
      ],
      description: [
        "Build and maintain production web applications used by real clients across multiple industries, from dashboards to client-facing portals.",
        "Design reusable, well-typed UI components and establish patterns that keep the codebase consistent as new features are added.",
        "Partner directly with backend engineers and designers to ship features end-to-end, from data model to final UI.",
        "Profile and optimize rendering performance, cutting unnecessary re-renders and improving load times on data-heavy screens.",
        "Ensure every feature is fully responsive and tested across devices and browsers before release.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Inovix Solutions",
      location: "On-site",
      duration: "Oct 2024 – Dec 2024",
      type: "Internship",
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "SCSS",
      ],
      description: [
        "Shipped responsive UI features under senior developer guidance, learning production-grade code review and Git workflows.",
        "Refactored existing components for reusability, reducing duplicate code across related screens.",
        "Diagnosed and fixed cross-browser and cross-device UI bugs reported during QA.",
        "Took part in structured code reviews, absorbing feedback quickly and applying it to later work.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="pt-20 border-t border-border/50 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 pt-8 space-y-10">
        {/* Heading */}
        <div className="space-y-4">
          {/* <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Career
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Frontend-focused, full-stack when needed — building products that
            ship and hold up in production.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.company} · {exp.location} · {exp.type}
                  </p>
                </div>
                <span className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-foreground/80 border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
