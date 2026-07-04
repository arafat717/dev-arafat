/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/arafat-removebg-preview.png";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const easing = [0.16, 1, 0.3, 1] as const;

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

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-10 pb-10 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div className="space-y-8" variants={fadeUp}>
            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">
                  Available for opportunities
                </span>
              </div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
                variants={fadeUp}
              >
                Arafat Hossen Joni
              </motion.h1>

              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight tracking-tight"
                variants={fadeUp}
              >
                Full Stack Developer
              </motion.h3>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                variants={fadeUp}
              >
                Transforming concepts into scalable, high-performance web
                applications with modern technologies and best practices.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  Redux
                </span>
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                  Prisma
                </span>
              </div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
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

            <motion.div
              className="flex items-center gap-4 pt-4 border-t border-border"
              variants={fadeUp}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://github.com/arafat717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub
                    className="text-neutral-900 dark:text-neutral-100"
                    size={30}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.linkedin.com/in/arafat-hossen-joni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin
                    className="text-[#0A66C2] dark:text-[#60A5FA]"
                    size={30}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.facebook.com/arafatjibon.arafatjibon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook
                    className="text-[#1877F2] dark:text-[#60A5FA]"
                    size={30}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://wa.me/8801972041006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-green-500" size={30} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Photo Section */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={fadeUp}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-2xl"></div>

              {/* Photo container */}
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
                  className="w-96 h-96 object-cover"
                />
              </motion.div>

              {/* Accent decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
