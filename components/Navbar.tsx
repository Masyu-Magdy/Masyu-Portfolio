"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiAward,
  FiMail,
} from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/about", label: "About", icon: FiUser },
  { href: "/projects", label: "Projects", icon: FiBriefcase },
  { href: "/certificates", label: "Certificates", icon: FiAward },
  { href: "/contact", label: "Contact", icon: FiMail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-[20px] border-b border-primary/10 shadow-lg"
            : "bg-dark/80 backdrop-blur-[20px] border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <span className="font-orbitron  font-bold text-xl md:text-xl text-primary hover:text-secondary transition-colors duration-300">
                  &lt; Masyu /&gt;
                </span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={link.href}>
                      <span
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-orbitron transition-all duration-300 ${
                          isActive
                            ? "text-primary bg-primary/10 border-b-2 border-primary"
                            : "text-text-secondary hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <Icon size={16} />
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <FiX size={24} className="text-primary" />
              ) : (
                <FiMenu size={24} className="text-text-secondary" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-[20px] md:hidden pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-orbitron transition-all duration-300 ${
                          isActive
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-text-secondary hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <Icon size={20} />
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-xs text-text-secondary font-orbitron">
                  🔐 SECURE CONNECTION
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
