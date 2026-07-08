import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-dark/80 backdrop-blur-[10px] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>© {currentYear} Masyu Magdy</span>
            <span className="text-primary">•</span>
            <span>Built with</span>
            <span className="text-primary">Next.js</span>
            <span className="text-accent">&</span>
            <span className="text-secondary">TypeScript</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Masyu-Magdy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-primary transition-colors duration-300 hover:bg-primary/10"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/masyu-magdy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-secondary hover:text-secondary transition-colors duration-300 hover:bg-secondary/10"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:masyumagdy@gmail.com"
              className="p-2 rounded-lg text-text-secondary hover:text-accent transition-colors duration-300 hover:bg-accent/10"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}