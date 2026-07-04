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
const marqueeSkills = [...skills, ...skills];

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
      className="relative min-h-screen flex items-center justify-center pt-10 pb-10 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-0">
        <motion.div
          className="absolute top-[-15%] left-[-10%] w-[550px] h-[550px] rounded-full bg-primary/25 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, 80, -30, 0],
            y: [0, 50, 90, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/25 blur-[110px] mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, -70, 40, 0],
            y: [0, -60, -30, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] w-[380px] h-[380px] rounded-full bg-purple-400/20 blur-[90px] mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, 40, -60, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[15%] w-[320px] h-[320px] rounded-full bg-blue-400/20 blur-[90px] mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[45%] left-[40%] w-[300px] h-[300px] rounded-full bg-pink-400/15 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
          animate={{
            x: [0, 60, -50, 0],
            y: [0, -50, 60, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-foreground/20"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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

            {/* Skills marquee - right to left */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                  className="flex gap-3 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {marqueeSkills.map((skill, idx) => (
                    <span
                      key={`${skill}-${idx}`}
                      className="px-3 py-1 bg-muted rounded-md text-sm font-medium whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
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
          </motion.div>

          {/* Profile Photo Section */}
          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-2xl"></div>

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
                  className="w-[26rem] h-[26rem] xl:w-[30rem] xl:h-[30rem] object-cover"
                  priority
                />
              </motion.div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

              {/* Social icons dock — vertical column, right of image */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -right-6 translate-x-full flex flex-col items-center gap-4 bg-background/70 backdrop-blur-md border border-border rounded-full px-3 py-5 shadow-xl"
                variants={fadeUp}
              >
                {socials.map(({ href, icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 3, scale: 1.1 }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
