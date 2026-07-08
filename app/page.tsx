"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiShield,
  FiCode,
  FiAward,
  FiZap,
  FiDownload,
} from "react-icons/fi";
import Image from "next/image";

const stats = [
  { icon: FiCode, label: "Projects", value: "10+" },
  { icon: FiAward, label: "Certificates", value: "5" },
  { icon: FiZap, label: "Technologies", value: "15+" },
];

const floatingIcons = [
  { icon: FiShield, delay: 0, color: "#00ff41" },
  { icon: FiCode, delay: 1, color: "#00d4ff" },
  { icon: FiAward, delay: 2, color: "#ff00ff" },
  { icon: FiZap, delay: 3, color: "#ff6b35" },
];

export default function Home() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Frontend Developer", "React Developer", "Next.js Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: "█",
        contentType: "html",
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.08,
              scale: 1,
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute pointer-events-none"
            style={{
              top: `${20 + index * 18}%`,
              left: `${5 + index * 15}%`,
            }}
          >
            <Icon size={60} color={item.color} />
          </motion.div>
        );
      })}

      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={`right-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.06,
              scale: 1,
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              delay: item.delay + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute pointer-events-none"
            style={{
              top: `${10 + index * 20}%`,
              right: `${5 + index * 10}%`,
            }}
          >
            <Icon size={50} color={item.color} />
          </motion.div>
        );
      })}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-gray-900 text-primary text-xl font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Frontend Developer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold leading-tight">
              <span className="text-text-secondary">Hello, I'm</span>
              <br />
              <span className="gradient-text">Masyu Magdy</span>
            </h1>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg md:text-xl text-text-secondary">
                <span className="text-primary"></span> I'm a
              </span>
              <span
                ref={typedElement}
                className="text-lg md:text-xl font-orbitron text-primary"
              />
            </div>

            <p className="text-text-secondary max-w-lg text-base md:text-lg leading-relaxed">
              Frontend Developer passionate about building fast, responsive, and
              user-friendly web applications using{" "}
              <span className="text-primary">React</span>,
              <span className="text-secondary"> Next.js</span>, and
              <span className="text-accent"> TypeScript</span>. I enjoy solving
              real-world problems, learning modern technologies, and
              continuously improving my development skills.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-dark font-orbitron font-bold hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/20"
                >
                  View My Work
                  <FiArrowRight />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-orbitron font-bold hover:border-secondary hover:text-secondary transition-all duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Masyu_Magdy_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl  text-primary font-orbitron font-bold hover:bg-red-900 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/20"
              >
                <FiDownload />
                Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Masyu-Magdy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/masyu-magdy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin size={28} />
              </a>
              <a
                href="mailto:masyumagdy@gmail.com"
                className="p-2 rounded-lg text-text-secondary hover:text-accent transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail size={28} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center mb-10 lg:mb-0"
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/10 to-transparent animate-pulse-ring" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-primary/10 animate-spin-slow" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10 group">
                <Image
                  src="/logo.jpg"
                  alt="Masyu Magdy - Frontend Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0a0a]/80 backdrop-blur-[10px] border border-primary/30 text-primary text-xs font-orbitron flex items-center gap-2 group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform duration-300" />
                  AVAILABLE
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 px-4 md:px-6 py-3 rounded-2xl bg-dark/90 backdrop-blur-[10px] border border-primary/10 w-[95%] md:w-auto justify-around">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <Icon size={20} className="text-primary mx-auto" />
                      <div className="text-white font-bold text-sm md:text-base">
                        {stat.value}
                      </div>
                      <div className="text-text-secondary text-[10px] md:text-xs">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
