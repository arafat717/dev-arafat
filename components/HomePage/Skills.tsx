'use client';

const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'SCSS', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    },
    {
        category: 'Tools & Platforms',
        skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma', 'npm'],
    },
];

export default function Skills() {
    return (
        <div id="skills">
            <section className="py-12 border-t max-w-7xl mx-auto border-border/50 dark:border-border/50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl dark:from-primary/5"></div>

                <div className="relative z-10">
                    <div className="mb-16 space-y-4">
                        <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                            Skills & Technologies
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            A comprehensive overview of the tools and technologies I work with.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="group flex items-center gap-3 p-4 bg-card dark:bg-card rounded-xl border border-border/50 dark:border-border/50 hover:border-primary/50 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/10 hover:bg-primary/5 dark:hover:bg-primary/5"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-primary/50"></div>
                                            <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                                                {skill}
                                            </span>
                                        </div>
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
