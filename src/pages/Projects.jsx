import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../data/projects.json";
import ProjectNavigator from "../components/ProjectNavigator";
import ProjectCarousel from "../components/ProjectCarousel";
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

  const [projectIndex, setProjectIndex] = useState(
    initialFromHash >= 0 ? initialFromHash : 0
  );
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
    const id = projects[projectIndex].id;
    if (window.location.hash.slice(1) !== id) {
      window.location.hash = id;
    }
  }, [projectIndex]);

  const current = projects[projectIndex] || {};
  const imgs = current.images || [];

  const prevImage = () =>
    setImageIndex((i) => (i - 1 + imgs.length) % imgs.length);
  const nextImage = () => setImageIndex((i) => (i + 1) % imgs.length);

  const thumbnailUrl = assetMap[`../assets/${current.thumbnail}`];
  const currentImgUrl = imgs.length
    ? assetMap[`../assets/${imgs[imageIndex]}`]
    : undefined;

  return (
    <div className="projects-page">
      <ProjectNavigator
        projects={projects}
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeVariants}
          transition={fadeVariants.transition}
          className="w-full"
        >
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

          <ProjectCarousel
            imgs={imgs}
            imageIndex={imageIndex}
            currentImgUrl={currentImgUrl}
            prevImage={prevImage}
            nextImage={nextImage}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
