'use client';

export default function Experience() {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "SM Technology",
            duration: "Aug 2025 – Present",
            type: "Full-Time",
            description: [
                "Develop and maintain scalable, production-level web applications using modern frontend technologies.",
                "Design and implement reusable UI components and structured architecture to ensure maintainability.",
                "Collaborate closely with backend engineers and designers to deliver new features and improve system performance.",
                "Enhance application performance, optimize rendering, and ensure responsive design across all devices.",
            ],
        },
        {
            role: "Frontend Developer Intern",
            company: "Inovix Solutions",
            duration: "Oct 2024 – Dec 2024",
            type: "Internship",
            description: [
                "Assisted in building responsive user interfaces under the guidance of senior developers.",
                "Contributed to feature implementation and improved component reusability.",
                "Fixed UI bugs and ensured cross-browser and cross-device compatibility.",
                "Participated in code reviews and gained practical experience in production workflows.",
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 border-t border-border/50 relative overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-16">

                {/* Heading */}
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                        Industry Experience
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Experience Cards */}
                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {exp.role}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {exp.company} • {exp.type}
                                    </p>
                                </div>
                                <span className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {exp.duration}
                                </span>
                            </div>

                            <ul className="space-y-3 text-muted-foreground leading-relaxed">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}