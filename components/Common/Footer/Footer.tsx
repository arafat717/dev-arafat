'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/arafat717' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:arafatjibon33@gmail.com' },
  ];

  return (
    <footer className="border-t border-border/50 dark:border-border/50 py-16 mt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent dark:from-primary/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text hover:opacity-80 transition-opacity">
              {"<Arafat />"}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building modern web experiences with clean code and thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Social</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Tech Stack</h4>
            <div className="space-y-3">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <div key={tech} className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 dark:border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} <span className="font-semibold text-foreground">Arafat Hossen Joni</span>. All rights reserved.
          </p>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
