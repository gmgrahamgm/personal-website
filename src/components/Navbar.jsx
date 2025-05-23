import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { to: "/home", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/skills", label: "SKILLS" },
    { to: "/contact", label: "CONTACT" },
  ];

  const renderLink = ({ to, label }) => {
    const isActive = pathname === to;
    return (
      <Link
        key={to}
        to={to}
        onClick={() => setMobileOpen(false)}
        className={`
          block px-4 py-3 text-lg md:text-xl
          ${isActive ? "font-bold opacity-100" : "font-normal opacity-50"}
          hover:opacity-100 transition-opacity duration-150
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav>
      <div className="max-w-4xl mx-auto p-4 relative">
        {/* Desktop */}
        <div className="hidden md:flex justify-center space-x-8 items-center">
          {links.map(renderLink)}

          <a
            href="/grahamd_resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="
              px-4 py-3
              text-lg md:text-xl
              font-normal opacity-50
              hover:opacity-100
              transition-opacity duration-150
            "
          >
            RESUME
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-start">
          <button
            className="px-2 py-2 focus:outline-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-[#F7F9F9] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 space-y-2">
              {links.map(renderLink)}
              <a
                href="/grahamd_resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="
                  block px-4 py-3 text-lg font-normal opacity-50
                  hover:opacity-100 transition-opacity duration-300
                "
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
