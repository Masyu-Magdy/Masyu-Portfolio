"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiShield, FiCode, FiLock } from "react-icons/fi";

const projects = [
  {
    title: "Movie",
    description: "Movie Discovery Website (Frontend) (Next.js, TypeScript, TailwindCSS) — Responsive movie browsing app consuming the TMDB API, with Supabase-based authentication and watchlist.",
    tech: ["React", "TypeScript", "React Query", "JWT", "REST API", "Encryption"],
    github: "https://github.com/Masyu-Magdy/Movie",
    live: "https://movie-masyu.vercel.app/",
    icon: FiShield,
    color: "#E3A857",
  },
  {
    title: "Fresh Cart",
    description: "Full-featured e-commerce web application with secure authentication, product management, and real-time cart updates.",
    tech: ["React", "TypeScript", "React Query", "JWT", "REST API", "Encryption"],
    github: "https://github.com/Masyu-Magdy/Fresh-Cart",
    live: "https://fresh-cart-two-lovat.vercel.app/",
    icon: FiShield,
    color: "#00ff41",
  },
  {
    title: "DevFolio",
    description: "Modern developer portfolio with interactive animations, dark mode, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Masyu-Magdy/DevFolio",
    live: "https://masyu-magdy.github.io/DevFolio/",
    icon: FiCode,
    color: "#00d4ff",
  },
  {
    title: "Security Dashboard",
    description: "A web application for encrypting and decrypting text using multiple encryption algorithms with a simple, responsive, and user-friendly interface.",
    tech: ["React", "TypeScript"],
    github: "https://github.com/Masyu-Magdy/security-dashboard",
    live: "https://masyu-magdy.github.io/Encryption-Algorithms/",
    icon: FiLock,
    color: "#ff00ff",
  },
];

const projectColors = {
  "Fresh Cart": "#00ff41",
  "Movie": "#E3A857",
  "DevFolio": "#00d4ff",
  "Security Dashboard": "#ff00ff",
};

export default function Projects() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="text-text-secondary">&lt; </span>
            Projects
            <span className="text-text-secondary"> /&gt;</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full border border-primary/30  bg-gray-900 font-semibold text-primary text-md font-orbitron">
            REAL PROJECTS
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const color = projectColors[project.title as keyof typeof projectColors] || "#00ff41";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div
                  className="glass p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                  style={{ borderColor: `${color}30` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon size={24} style={{ color }} />
                    </div>
                    <h3 className="font-orbitron font-normal text-lg text-white">{project.title}</h3>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: `${color}15`,
                          color,
                          border: `1px solid ${color}20`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-primary/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        color,
                        backgroundColor: `${color}10`,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        color: "#00d4ff",
                        backgroundColor: "rgba(0, 212, 255, 0.1)",
                        border: "1px solid rgba(0, 212, 255, 0.2)",
                      }}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}