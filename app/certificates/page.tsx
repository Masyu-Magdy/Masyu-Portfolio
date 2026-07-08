"use client";

import { motion } from "framer-motion";
import { FiAward, FiCode, FiDatabase, FiGlobe, FiShield, FiLock } from "react-icons/fi";

const certificates = [
  {
    title: "Front-End Development Diploma",
    issuer: "Route",
    date: "Mar 2026",
    icon: FiCode,
    color: "#00ff41",
  },
  {
    title: "Database Fundamentals",
    issuer: "MaharaTech",
    date: "May 2024",
    icon: FiDatabase,
    color: "#00d4ff",
  },
  {
    title: "HCIA-Datacom Learning Course",
    issuer: "Huawei ICT Academy - Egypt",
    date: "Sep 2024",
    icon: FiGlobe,
    color: "#ff00ff",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Oct 2024",
    icon: FiCode,
    color: "#ff6b35",
  },
  {
    title: "C++ Programming",
    issuer: "IDEA cademy",
    date: "Jan 2024",
    icon: FiShield,
    color: "#ffdd00",
  },
];

export default function Certificates() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="text-text-secondary">&lt; </span>
            Certificates
            <span className="text-text-secondary"> /&gt;</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full border border-primary/30  bg-gray-900 font-semibold text-primary text-md font-orbitron">
            VERIFIED
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="glass p-6 text-center transition-all duration-300 hover:shadow-xl"
                  style={{ borderColor: `${cert.color}30` }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: `${cert.color}20`,
                      border: `2px solid ${cert.color}30`,
                    }}
                  >
                    <Icon size={32} style={{ color: cert.color }} />
                  </div>

                  <h3 className="font-orbitron text-base text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{cert.issuer}</p>
                  <span
                    className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${cert.color}10`,
                      color: cert.color,
                      border: `1px solid ${cert.color}20`,
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}