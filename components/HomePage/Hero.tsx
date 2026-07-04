/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/arafat-removebg-preview.png";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.95, ease: "easeInOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: "easeInOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const skills = [
  "Next.js",
  "TypeScript",
  "Redux",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Mongoose",
];

const socials = [
  { href: "https://github.com/arafat717", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/arafat-hossen-joni/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/arafatjibon.arafatjibon",
    icon: FaFacebook,
    label: "Facebook",
  },
  { href: "https://wa.me/8801972041006", icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative mt-10 md:mt-0 min-h-screen flex items-center justify-center py-16 md:py-10 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Simple, calm background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1"
            variants={fadeUp}
          >
            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">
                  Available for opportunities
                </span>
              </div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
                variants={fadeUp}
              >
                Arafat Hossen Joni
              </motion.h1>

              <motion.h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight"
                variants={fadeUp}
              >
                Full Stack Developer
              </motion.h3>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0"
                variants={fadeUp}
              >
                Transforming concepts into scalable, high-performance web
                applications with modern technologies and best practices.
              </motion.p>
            </motion.div>

            {/* Skills - simple wrapped badges */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3"
              variants={fadeUp}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-md text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                <Link
                  href="/resume/Arafat_Hossen_Joni_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  <Download size={18} />
                  Download Resume
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Photo Section */}
          <motion.div
            className="flex flex-col items-center order-1 md:order-2"
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-2xl"></div>

              <motion.div
                className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl"
                variants={popIn}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5"></div>
                <Image
                  src={img1}
                  width={1000}
                  height={1000}
                  alt="Professional headshot"
                  className="w-86 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] object-cover"
                  priority
                />
              </motion.div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>

            {/* Social icons dock — horizontal row on mobile, vertical + offset on larger screens */}
            <motion.div
              className="mt-6 flex flex-row md:flex-col items-center gap-4 md:gap-4 bg-background/70 backdrop-blur-md border border-border rounded-full px-5 py-3 md:px-3 md:py-5 shadow-xl md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-6 md:translate-x-full md:mt-0"
              variants={fadeUp}
            >
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Icon size={22} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
