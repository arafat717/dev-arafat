/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const EMAIL = "arafatjibon33@gmail.com";
const PHONE_DISPLAY = "+880 1972-041006";
const PHONE_TEL = "+8801972041006";
const WHATSAPP_NUMBER = "8801972041006"; // no +, no spaces — required for wa.me links

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    note: "Best for detailed project briefs",
  },
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: Phone,
    note: "Direct call, Dhaka time (GMT+6)",
  },
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
    note: "Fastest response for quick questions",
    external: true,
  },
];

const social = [
  { name: "GitHub", icon: Github, href: "https://github.com/arafat717" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/arafat-hossen-joni/",
  },
];

export default function Contact() {
  const [time, setTime] = useState<string | null>(null);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const dhaka = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      );
      const hour = dhaka.getHours();

      setTime(
        dhaka.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );

      setGreeting(
        hour < 5
          ? "Probably asleep"
          : hour < 12
            ? "Deep in code this morning"
            : hour < 17
              ? "Mid-afternoon build session"
              : hour < 21
                ? "Evening coding hours"
                : "Late night, still shipping",
      );
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="pt-8 md:pt-20 lg:pt-12 border-t border-border/50"
    >
      <div className="max-w-6xl pt-8 mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 pt-6 sm:pt-8">
          {/* Left: intro + direct channels */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Contact
            </p>

            <div className="border-t border-border/50">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 sm:gap-5 py-5 sm:py-6 border-b border-border/50 active:pl-1 sm:hover:pl-2 transition-all duration-300"
                  >
                    <span className="hidden sm:block text-sm text-muted-foreground/60 tabular-nums w-5 sm:w-6 shrink-0">
                      0{index + 1}
                    </span>

                    <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>

                    <span className="flex-1 min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="block text-base sm:text-lg font-semibold text-foreground truncate">
                        {channel.value}
                      </span>
                      <span className="hidden sm:block text-sm text-muted-foreground mt-0.5">
                        {channel.note}
                      </span>
                    </span>

                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0 group-hover:text-primary sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: availability + location + social */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-border/50 bg-card">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  Right now in Dhaka
                </span>
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground tabular-nums">
                  {time ?? "—"}
                </span>
                <span className="text-sm text-muted-foreground">GMT+6</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {greeting || "Loading..."} — botany textbook within arm's reach,
                editor always open.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/50 bg-card flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  Based in
                </span>
                <span className="block text-base sm:text-lg font-semibold text-foreground truncate">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 p-4 sm:p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {s.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
