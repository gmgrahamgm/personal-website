import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projects.json";
import "./Projects.css";

const assetMap = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: "url",
});

export default function Projects() {
  const location = useLocation();
  const hashId = location.hash.slice(1); // e.g. "project-a"
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
          ←
        </button>
        <select
          value={current.id}
          onChange={selectProject}
          className="nav-dropdown"
        >
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
        <button onClick={nextProject} className="nav-arrow">
          →
        </button>
      </div>

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
          {/* mobile: image above, arrows below */}
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
          {/* desktop: arrows left/right of image */}
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
    </div>
  );
}
