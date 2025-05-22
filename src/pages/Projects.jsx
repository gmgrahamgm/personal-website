import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../data/projects.json";
import "./Projects.css";

const assetMap = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15, ease: "easeInOut" },
};

export default function Projects() {
  const location = useLocation();
  const hashId = location.hash.slice(1);
  const initialFromHash = projects.findIndex((p) => p.id === hashId);
  // fall back to 0 if hash not found
  const [projectIndex, setProjectIndex] = useState(
    initialFromHash >= 0 ? initialFromHash : 0
  );
  const [imageIndex, setImageIndex] = useState(0);

  // whenever projectIndex changes, reset image and update URL hash
  useEffect(() => {
    setImageIndex(0);
    const id = projects[projectIndex].id;
    if (window.location.hash.slice(1) !== id) {
      window.location.hash = id;
    }
  }, [projectIndex]);

  const prevProject = () => {
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  };
  const nextProject = () => {
    setProjectIndex((i) => (i + 1) % projects.length);
  };
  const selectProject = (e) => {
    const idx = projects.findIndex((p) => p.id === e.target.value);
    if (idx >= 0) setProjectIndex(idx);
  };

  const current = projects[projectIndex] || {};
  const imgs = current.images || [];

  const prevImage = () =>
    setImageIndex((i) => (i - 1 + imgs.length) % imgs.length);
  const nextImage = () => setImageIndex((i) => (i + 1) % imgs.length);

  // asset lookups
  const thumbnailKey = `../assets/${current.thumbnail}`;
  const thumbnailUrl = assetMap[thumbnailKey];
  const currentImgKey = `../assets/${imgs[imageIndex]}`;
  const currentImgUrl = imgs.length ? assetMap[currentImgKey] : undefined;

  return (
    <div className="projects-page">
      {/* Navigator */}
      <div className="navigator">
        <button onClick={prevProject} className="nav-arrow">
          {/* Left‐arrow SVG, rotated */}
          <svg
            className="h-6 w-6 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dropdown with custom down‐arrow */}
        <div className="relative">
          <select
            value={current.id}
            onChange={selectProject}
            className="nav-dropdown appearance-none pr-10 pl-6 py-3 bg-white rounded-full
               text-lg md:text-xl"
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>

          {/* rotated SVG arrow */}
          <svg
            className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <button onClick={nextProject} className="nav-arrow">
          {/* Right‐arrow SVG */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* AnimatePresence wraps any keyed motion children */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id} // key by project id
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeVariants}
          transition={fadeVariants.transition}
          className="w-full"
        >
          {/* Project Display */}
          <div className="project-display">
            <h1 className="project-title">{current.title}</h1>
            <p className="project-date">{current.date}</p>
            <div className="project-details">
              {thumbnailUrl && (
                <img
                  src={thumbnailUrl}
                  alt={`${current.title} thumbnail`}
                  className="project-thumb"
                />
              )}
              <div
                className="project-desc"
                dangerouslySetInnerHTML={{ __html: current.description }}
              />
            </div>
          </div>

          {/* Carousel */}
          {imgs.length > 0 && currentImgUrl && (
            <div className="my-8 w-full max-w-3xl">
              {/* mobile */}
              <div className="md:hidden flex flex-col items-center">
                <img
                  src={currentImgUrl}
                  alt={`${current.title} screenshot ${imageIndex + 1}`}
                  className="carousel-img"
                />
                <div className="flex space-x-4 mt-4">
                  <button onClick={prevImage} className="carousel-arrow">
                    ←
                  </button>
                  <button onClick={nextImage} className="carousel-arrow">
                    →
                  </button>
                </div>
              </div>
              {/* desktop */}
              <div className="hidden md:flex justify-center items-center space-x-4">
                <button onClick={prevImage} className="carousel-arrow">
                  ←
                </button>
                <img
                  src={currentImgUrl}
                  alt={`${current.title} screenshot ${imageIndex + 1}`}
                  className="carousel-img"
                />
                <button onClick={nextImage} className="carousel-arrow">
                  →
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
