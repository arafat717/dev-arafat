"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/arafat717", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arafat-hossen-joni/",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:arafatjibon33@gmail.com", icon: Mail },
  ];

  const stack = ["Next.js", "TypeScript", "Express.js", "PostgreSQL"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Top gradient hairline instead of a flat border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              {"<Arafat />"}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building modern web experiences with clean code and thoughtful
              design.
            </p>

            {/* Social as icon row instead of a text list */}
            {/* <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={link.label}
                    className="group flex items-center justify-center w-10 h-10 rounded-lg border border-border/50 bg-card text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm w-fit"
                >
                  <span className="h-px w-0 bg-primary group-hover:w-3 transition-all duration-300"></span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tech stack as pills */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-foreground">
              Arafat Hossen Joni
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center justify-center w-9 h-9 rounded-lg border border-border/50 bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
