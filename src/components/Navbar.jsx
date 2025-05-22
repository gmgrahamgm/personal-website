import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        className={`
          block px-3 py-2
          ${isActive ? "font-bold opacity-100" : "font-normal opacity-50"}
          hover:opacity-100
        `}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-4xl mx-auto px-4 py-3 relative">
        {/* Desktop links */}
        <div className="hidden md:flex justify-center space-x-6 items-center">
          {links.map(renderLink)}

          {/* Direct Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-normal opacity-50 hover:opacity-100"
          >
            RESUME
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            // X icon
            <svg
              className="h-6 w-6"
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
            // Hamburger icon
            <svg
              className="h-6 w-6"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F7F9F9] px-4 pb-4 space-y-1">
          {links.map(renderLink)}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 font-normal opacity-50 hover:opacity-100"
            onClick={() => setMobileOpen(false)}
          >
            RESUME
          </a>
        </div>
      )}
    </nav>
  );
}
