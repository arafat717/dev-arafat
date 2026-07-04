import { getProjectBySlug, projects } from "@/components/HomePage/projectData";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// ^ adjust this import path to wherever you place projects-data.ts in your project

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 h-64 sm:h-80 mb-8">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
          <div
            className="absolute top-0 left-0 h-[4px] w-full"
            style={{ background: project.accent }}
          />
        </div>

        {/* Title + category */}
        <div className="mb-8">
          <span
            className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full text-white tracking-wide uppercase mb-3"
            style={{ background: project.accent }}
          >
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h1>
        </div>

        {/* Live + GitHub actions */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: project.accent }}
          >
            View Live Project
            <ArrowUpRight size={15} />
          </Link>

          {project.github !== "#" && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Github size={15} />
              Client Repository
            </Link>
          )}
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Overview
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Main tech stack */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Main Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.mainStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={18} className="text-zinc-500 dark:text-zinc-400" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Challenges Faced
            </h2>
          </div>
          <ul className="space-y-2.5">
            {project.challenges.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future improvements */}
        <section className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp
              size={18}
              className="text-zinc-500 dark:text-zinc-400"
            />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Potential Improvements & Future Plans
            </h2>
          </div>
          <ul className="space-y-2.5">
            {project.improvements.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
