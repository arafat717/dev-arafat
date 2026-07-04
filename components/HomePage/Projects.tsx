/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Parent Patt",
    description:
      "A comprehensive web application designed for parents to manage and monitor their children's daily activities. Features include activity scheduling, progress tracking, notifications, and real-time updates, ensuring parents stay informed and organized.",
    tags: [
      "NextJs",
      "API Integration",
      "Tailwind CSS",
      "Shadcn/UI",
      "Express Js",
      "Mongodb",
    ],
    link: "https://cindychng-web-six.vercel.app",
    github: "#",
    accent: "#06B6D4",
    image: "/images/cindy.png",
    category: "Full Stack",
  },
  {
    title: "Cleanbubble – Cleaning Service Management Platform",
    description:
      "A full-stack service booking system enabling users to schedule residential, commercial, and industrial cleaning services with secure payment integration..",
    tags: [
      "Next.js",
      "Redux",
      "Typescript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    link: "https://moemin-frontend-nextjs.vercel.app",
    github: "https://github.com/arafat717/refresh-frontend",
    accent: "#3B82F6",
    image: "/images/clean.png",
    category: "Full Stack",
  },
  {
    title: "Asseta Autos – Car Dealing Application",
    description:
      "A car dealership platform that allows users to browse, search, and explore vehicles with detailed listings, images, and specifications. Features include user authentication, contact forms for inquiries, and a responsive design to provide a seamless experience across devices.",
    tags: ["React.js", "Node Js", "Mongodb"],
    link: "https://asetta-autos-645ad.web.app",
    github: "https://github.com/arafat717/Asetta-Autos-client",
    accent: "#10B981",
    image: "/images/asseta.png",
    category: "Full Stack",
  },
  {
    title: "The Caribbean Note",
    description:
      "A purpose-driven web application designed to support individuals with Autism, ADHD, Down Syndrome, Cerebral Palsy, and other developmental disabilities. Built with a strong emphasis on accessibility, clarity, and inclusive user experience.",
    tags: ["Next.js", "Redux", "Tailwind CSS", "Shadcn"],
    link: "https://frontend-imandiacosta.vercel.app",
    github: "#",
    accent: "#EC4899",
    image: "/images/iman1.png",
    category: "Frontend",
  },
  {
    title: "Online Appointment",
    description:
      "An online appointment booking platform frontend with SASS/Scss and Tailwind CSS for sleek UI.",
    tags: ["React.js", "SCSS"],
    link: "https://online-appoinment.vercel.app",
    github: "https://github.com/arafat717/online-appointment",
    accent: "#8B5CF6",
    image: "/images/madifax.png",
    category: "Frontend",
  },
  {
    title: "Fresh-grocery-bd",
    description:
      "Led the fresh-grocery-bd project using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB to create a streamlined, efficient platform for fresh groceries with a responsive, user-centric interface.",
    tags: ["React", "Tailwind CSS"],
    link: "https://fresh-grocery-bd.vercel.app",
    github: "https://github.com/arafat717/desi-bazar",
    accent: "#F59E0B",
    image: "/images/grosery.png",
    category: "Frontend",
  },
];

function ProjectCard({ project, index }: any) {
  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 dark:hover:shadow-zinc-900/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: project.accent }}
      />

      {/* Image */}
      <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 h-44">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
          width={1000}
          height={1000}
        />
        {/* Category pill over image */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-full text-white tracking-wide uppercase"
          style={{ background: project.accent }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title + action buttons */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-[var(--accent)] transition-colors duration-300"
            style={{ "--accent": project.accent } as any}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <Link
              href={project.github}
              target="_blank"
              aria-label="GitHub"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Github size={15} />
            </Link>
            <Link
              href={project.link}
              target="_blank"
              aria-label="Live Preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Divider */}
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Featured Projects
            </h2>
            {/* <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 group"
                        >
                            View all
                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </Link> */}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
