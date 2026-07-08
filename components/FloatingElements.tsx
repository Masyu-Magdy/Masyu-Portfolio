"use client";

import { motion } from "framer-motion";
import { FiShield, FiLock, FiCpu, FiCode } from "react-icons/fi";

const elements = [
  { icon: FiShield, x: "10%", y: "20%", delay: 0, color: "#00ff41" },
  { icon: FiLock, x: "85%", y: "30%", delay: 1, color: "#00d4ff" },
  { icon: FiCpu, x: "15%", y: "70%", delay: 2, color: "#ff00ff" },
  { icon: FiCode, x: "80%", y: "75%", delay: 3, color: "#ff6b35" },
];

export default function FloatingElements() {
  return (
    <>
      {elements.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.05,
              scale: 1,
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "fixed",
              top: item.y,
              left: item.x,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <Icon size={80} color={item.color} />
          </motion.div>
        );
      })}
    </>
  );
}