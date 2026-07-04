"use client";

import { useEffect, useState } from "react";
import {
  Github,
  ArrowUpRight,
  ChevronRight,
  X,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  mainStack: string[];
  link: string;
  github: string; // "#" if no public client repo
  accent: string;
  image: string;
  challenges: string[]; // TODO: replace with what you actually ran into
  improvements: string[]; // TODO: replace with your real next steps
};

const projects: Project[] = [
  {
    title: "Parent Patt",
    category: "Full Stack",
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
    mainStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://cindychng-web-six.vercel.app",
    github: "#",
    accent: "#06B6D4",
    image: "/images/cindy.png",
    challenges: [
      "Keeping the calendar accurate across timezones — activity dates needed to stay fixed on the day they were scheduled regardless of the parent's device timezone.",
      "Reflecting rescheduled or cancelled sessions consistently across the calendar view and the activity detail modal without them briefly re-appearing after a status change.",
    ],
    improvements: [
      "Add push notifications for upcoming activities instead of relying only on in-app alerts.",
      "Support recurring activity templates so parents don't have to recreate the same weekly session manually.",
    ],
  },
  {
    title: "Cleanbubble – Cleaning Service Management Platform",
    category: "Full Stack",
    description:
      "A full-stack service booking system enabling users to schedule residential, commercial, and industrial cleaning services with secure payment integration.",
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
    mainStack: ["Next.js", "Redux", "TypeScript", "Node.js", "Stripe"],
    link: "https://moemin-frontend-nextjs.vercel.app",
    github: "https://github.com/arafat717/refresh-frontend",
    accent: "#3B82F6",
    image: "/images/clean.png",
    challenges: [
      "Handling Stripe payment states reliably — making sure a booking is only confirmed once payment actually succeeds, not just when the checkout form is submitted.",
      "Modeling different service types (residential vs. commercial vs. industrial) with different pricing rules in one consistent booking flow.",
    ],
    improvements: [
      "Add saved payment methods so returning customers can book without re-entering card details.",
      "Build an admin dashboard view for tracking bookings by service type and status.",
    ],
  },
  {
    title: "Asseta Autos – Car Dealing Application",
    category: "Full Stack",
    description:
      "A car dealership platform that allows users to browse, search, and explore vehicles with detailed listings, images, and specifications. Features include user authentication, contact forms for inquiries, and a responsive design to provide a seamless experience across devices.",
    tags: ["React.js", "Node Js", "Mongodb"],
    mainStack: ["React.js", "Node.js", "MongoDB"],
    link: "https://asetta-autos-645ad.web.app",
    github: "https://github.com/arafat717/Asetta-Autos-client",
    accent: "#10B981",
    image: "/images/asseta.png",
    challenges: [
      "Building search and filtering across vehicle listings that stayed fast as the number of listings and images grew.",
      "Getting image-heavy listing pages to load quickly on mobile without sacrificing image quality.",
    ],
    improvements: [
      "Add saved/favorited listings so users can compare vehicles later.",
      "Introduce pagination or infinite scroll for larger inventories.",
    ],
  },
  {
    title: "The Caribbean Note",
    category: "Frontend",
    description:
      "A purpose-driven web application designed to support individuals with Autism, ADHD, Down Syndrome, Cerebral Palsy, and other developmental disabilities. Built with a strong emphasis on accessibility, clarity, and inclusive user experience.",
    tags: ["Next.js", "Redux", "Tailwind CSS", "Shadcn"],
    mainStack: ["Next.js", "Redux", "Tailwind CSS"],
    link: "https://frontend-imandiacosta.vercel.app",
    github: "#",
    accent: "#EC4899",
    image: "/images/iman1.png",
    challenges: [
      "Designing clear, low-friction UI patterns appropriate for an audience that specifically needed accessible, uncluttered layouts rather than typical dense dashboards.",
      "Balancing visual simplicity with the amount of information the platform still needed to communicate.",
    ],
    improvements: [
      "Run a proper accessibility audit (WCAG contrast, screen reader flow, keyboard navigation) rather than relying on visual judgment alone.",
      "Add adjustable text size / reduced-motion settings for users who need them.",
    ],
  },
  {
    title: "Online Appointment",
    category: "Frontend",
    description:
      "An online appointment booking platform frontend with SASS/Scss and Tailwind CSS for sleek UI.",
    tags: ["React.js", "SCSS"],
    mainStack: ["React.js", "SCSS"],
    link: "https://online-appoinment.vercel.app",
    github: "https://github.com/arafat717/online-appointment",
    accent: "#8B5CF6",
    image: "/images/madifax.png",
    challenges: [
      "Structuring SCSS in a way that stayed maintainable as the number of components and page states grew.",
      "Handling date/time slot selection UI so double-booked or past slots were clearly disabled rather than just visually greyed out.",
    ],
    improvements: [
      "Connect to a real backend for live availability instead of static/mock slot data.",
      "Add email or SMS confirmation after a booking is made.",
    ],
  },
  {
    title: "Fresh-grocery-bd",
    category: "Frontend",
    description:
      "Led the fresh-grocery-bd project using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB to create a streamlined, efficient platform for fresh groceries with a responsive, user-centric interface.",
    tags: ["React", "Tailwind CSS"],
    mainStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://fresh-grocery-bd.vercel.app",
    github: "https://github.com/arafat717/desi-bazar",
    accent: "#F59E0B",
    image: "/images/grosery.png",
    challenges: [
      "Keeping the product catalog and cart state in sync across pages without over-fetching data on every navigation.",
      "Designing a responsive grocery grid that stayed usable on small screens with long product names and varying image sizes.",
    ],
    improvements: [
      "Add order history and repeat-order functionality for returning customers.",
      "Introduce category-based filtering and a proper search experience.",
    ],
  },
];

function ProjectCard({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}) {
  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 dark:hover:shadow-zinc-900/60"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="h-[3px] w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: project.accent }}
      />

      <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 h-44">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          width={1000}
          height={1000}
        />
        <span
          className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-full text-white tracking-wide uppercase"
          style={{ background: project.accent }}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[17px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            {project.github !== "#" && (
              <Link
                href={project.github}
                target="_blank"
                aria-label="GitHub"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
              >
                <Github size={15} />
              </Link>
            )}
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

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onViewDetails(project)}
            className="group/btn flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300"
          >
            View Details
            <ChevronRight
              size={15}
              className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 transition-colors shadow-sm"
        >
          <X size={16} />
        </button>

        <div className="relative h-52 sm:h-64 bg-zinc-100 dark:bg-zinc-800">
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

        <div className="p-6 sm:p-8">
          <span
            className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full text-white tracking-wide uppercase mb-3"
            style={{ background: project.accent }}
          >
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
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

          <section className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
              Overview
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
              Main Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.mainStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb
                size={16}
                className="text-zinc-500 dark:text-zinc-400"
              />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Challenges Faced
              </h3>
            </div>
            <ul className="space-y-2">
              {project.challenges.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp
                size={16}
                className="text-zinc-500 dark:text-zinc-400"
              />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Potential Improvements & Future Plans
              </h3>
            </div>
            <ul className="space-y-2">
              {project.improvements.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 pt-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
