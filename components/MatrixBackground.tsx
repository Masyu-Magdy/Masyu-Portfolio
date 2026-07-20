"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const context = canvasElement.getContext("2d");
    if (!context) return;

    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";
    const fontSize = 14;
    const columns = Math.floor(canvasElement.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvasElement.width, canvasElement.height);

      context.fillStyle = "#00ff41";
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        context.fillText(char, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvasElement.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = window.setInterval(draw, 35);

    const handleResize = () => {
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-[0.03] pointer-events-none z-0 "
    />
  );
}
