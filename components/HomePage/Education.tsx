"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "BSc (Honours) in Botany",
      institution: "National University",
      duration: "2023 – 2027 (Expected)",
      status: "In Progress · 3rd Year",
      note: "Pursuing this out of personal interest in the subject — my career focus and full-time commitment is software development, as reflected in the Experience and Projects sections.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Group",
      duration: "2022",
      status: "GPA 4.42 / 5.00",
    },
  ];

  return (
    <section
      id="education"
      className="py-20  relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 from-primary/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 space-y-10">
        {/* Heading */}
        <div className="space-y-4 pt-8">
          {/* <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Background
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* connecting line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border/50 hidden sm:block"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 shrink-0 z-10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1 p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/30 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-sm font-medium text-foreground/80 mb-2">
                  {edu.status}
                </p>

                {edu.note && (
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
