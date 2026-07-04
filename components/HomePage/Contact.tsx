/* eslint-disable react/no-unescaped-entities */
'use client';

import { Mail, Linkedin, Github, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    {
        name: 'GitHub',
        icon: Github,
        href: 'https://github.com/arafat717',
        description: 'View my code and projects',
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://linkedin.com',
        description: 'Connect professionally',
    },
    {
        name: 'Email',
        icon: Mail,
        href: 'mailto:arafatjibon33@gmail.com',
        description: 'arafatjibon33@gmail.com',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-12 border-t border-border/50 dark:border-border/30">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20 dark:border-primary/10 mb-6">
                        <span className="text-sm font-medium text-primary">Get In Touch</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Let's Work Together
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always interested in hearing about new projects and opportunities.
                        Feel free to reach out!
                    </p>
                </div>

                {/* Main Email Button */}
                <div className="mb-12">
                    <Link
                        href="mailto:your.email@example.com"
                        className="group block p-8 border hover:border-gray-500  rounded-2xl hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-bold mb-1">Send Me an Email</h3>
                                    <p className="text-sm">I'll respond within 24 hours</p>
                                </div>
                            </div>
                            <div className="text-sm font-semibold">
                                arafatjibon33@gmail.com →
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Social Links */}
                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <Link
                                key={index}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group p-6 bg-card dark:bg-card border border-border/50 dark:border-border/30 rounded-xl hover:border-primary/50 dark:hover:border-primary/30 transition-colors duration-300"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/5 rounded-lg mb-4">
                                        <IconComponent className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground mb-2">
                                        {social.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {social.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Availability Status */}
                <div className="p-6 bg-card dark:bg-card border border-border/50 dark:border-border/30 rounded-xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-semibold text-foreground">Available for New Projects</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Response within 24h</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Dhaka</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}