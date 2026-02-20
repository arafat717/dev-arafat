/* eslint-disable react/no-unescaped-entities */
'use client';

export default function About() {
    return (
        <section
            id="about"
            className="py-32 border-t border-border/50 relative overflow-hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-12">

                {/* Heading */}
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                        About Me
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Content */}
                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">

                    <p>
                        I am a professional Web Developer with over one year of industry
                        experience building modern, scalable, and user-focused web
                        applications. I work primarily on frontend development, where I
                        focus on crafting responsive interfaces and delivering seamless
                        digital experiences.
                    </p>

                    <p>
                        Throughout my professional journey, I have contributed to
                        real-world production projects, developing features,
                        improving performance, and maintaining clean, structured codebases.
                        I value clarity, simplicity, and maintainability in everything I build.
                    </p>

                    <p>
                        My goal is not just to write code, but to solve problems effectively.
                        I continuously strengthen my core software engineering fundamentals,
                        refine my logical thinking, and explore better architectural
                        approaches to build reliable and scalable systems.
                    </p>

                    <p>
                        I am committed to long-term growth as a well-rounded engineer —
                        someone who understands both user experience and system design,
                        and who approaches development with professionalism,
                        responsibility, and attention to detail.
                    </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="pt-6">
                    <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

            </div>
        </section>
    );
}