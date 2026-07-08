"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiCode,
  FiAward,
  FiBookOpen,
  FiLayout,
  FiZap,
  FiEye,
  FiHeart,
} from "react-icons/fi";

const skills = [
  { name: "React", level: "Advanced", icon: FiCode, color: "#00ff41" },
  { name: "Next.js", level: "Advanced", icon: FiCode, color: "#00d4ff" },
  { name: "TypeScript", level: "Advanced", icon: FiCode, color: "#ff00ff" },
  { name: "JavaScript", level: "Advanced", icon: FiCode, color: "#ff6b35" },
  { name: "HTML5", level: "Advanced", icon: FiCode, color: "#ff4444" },
  { name: "CSS3", level: "Advanced", icon: FiCode, color: "#4488ff" },
  { name: "Tailwind CSS", level: "Advanced", icon: FiCode, color: "#38bdf8" },
  { name: "Bootstrap", level: "Advanced", icon: FiCode, color: "#ffffff" },
  { name: "Material UI", level: "Advanced", icon: FiCode, color: "#007fff" },
  { name: "Redux Toolkit", level: "Advanced", icon: FiCode, color: "#764abc" },
  { name: "React Query", level: "Advanced", icon: FiCode, color: "#ff4154" },
  { name: "Git", level: "Advanced", icon: FiCode, color: "#f05032" },
  { name: "GitHub", level: "Advanced", icon: FiCode, color: "#ffffff" },
  { name: "REST API", level: "Advanced", icon: FiCode, color: "#00ff41" },
  { name: "Responsive Design", level: "Advanced", icon: FiCode, color: "#00d4ff" },
];

const interests = [
  { icon: FiLayout, label: "UI Design" },
  { icon: FiZap, label: "Performance" },
  { icon: FiEye, label: "Accessibility" },
  { icon: FiShield, label: "Cybersecurity" },
  { icon: FiHeart, label: "Open Source" },
  { icon: FiCpu, label: "AI" },
];

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold md:text-4xl font-orbitron font-bold">
            <span className="text-text-secondary">&lt; </span>
            About Me
            <span className="text-text-secondary"> /&gt;</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full border border-primary/30 bg-gray-900 font-semibold text-primary text-sm font-orbitron">
            FRONTEND DEVELOPER
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold font-orbitron text-primary">Who I Am</h2>

            <p className="text-gray-300 leading-relaxed">
              I'm a <span className="text-primary">Frontend Developer</span>{" "}
              passionate about creating modern, responsive web applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in <span className="text-primary">React.js</span>,
              <span className="text-red-700"> Next.js</span>,
              <span className="text-accent"> TypeScript</span> and{" "}
              <span className="text-primary">REST APIs</span>. I enjoy
              transforming UI designs into clean, maintainable code while
              focusing on performance and user experience.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Alongside frontend development, I'm studying Cybersecurity, which
              helps me write cleaner and more secure applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                <FiShield size={16} />
                Security Focused
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm">
                <FiAward size={16} />
                5+ Certificates
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
                <FiBookOpen size={16} />
                Continuous Learner
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-semibold font-orbitron text-red-700 mb-6">
              Skills & Expertise
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const levelColors = {
                  Advanced: "border-red-700 bg-primary/5 text-primary",
                  Intermediate: "border-secondary/30 bg-secondary/5 text-secondary",
                  Familiar: "border-accent/30 bg-accent/5 text-accent",
                };
                const colorClass = levelColors[skill.level as keyof typeof levelColors] || levelColors.Advanced;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colorClass} transition-all duration-300 hover:shadow-lg hover:shadow-primary/5`}
                  >
                    <Icon size={16} style={{ color: skill.color }} />
                    <div>
                      <div className="text-sm font-medium">{skill.name}</div>
                      <div className="text-[10px] opacity-70">{skill.level}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-semibold font-orbitron text-primary text-center mb-8">
            <span className="text-text-secondary">&lt; </span>
            Interests
            <span className="text-text-secondary"> /&gt;</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 text-center hover:border-primary/30 transition-all duration-300 group"
                >
                  <Icon
                    size={32}
                    className="text-primary mx-auto mb-2 group-hover:text-secondary transition-colors"
                  />
                  <div className="text-sm text-text-secondary font-orbitron">
                    {interest.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}