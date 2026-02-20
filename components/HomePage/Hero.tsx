/* eslint-disable react/no-unescaped-entities */
'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from "../../public/images/arafat-removebg-preview.png"

export default function Hero() {
    return (
        <section id='home' className="relative min-h-screen flex items-center justify-center pt-10 pb-10 px-6">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                                Arafat Hossen Joni
                            </h1>

                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight">
                                Web Developer
                            </h3>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Transforming concepts into scalable, high-performance web applications with modern technologies and best practices.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">React</span>
                                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">Next.js</span>
                                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">Redux</span>
                                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">TypeScript</span>
                                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">Node.js</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                            <Link
                                href="https://github.com/arafat717"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="mailto:arafatjibon33@gmail.com"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Profile Photo Section */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-2xl"></div>

                            {/* Photo container */}
                            <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5"></div>
                                <Image
                                    src={img1}
                                    width={1000}
                                    height={1000}
                                    alt="Professional headshot"
                                    className="w-96 h-96 object-cover"
                                />
                            </div>

                            {/* Accent decoration */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}