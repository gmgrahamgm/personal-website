import React, { useState, useEffect } from "react";
import projects from "../data/projects.json";
import "./Projects.css";

// 1) Bundle up all image assets under src/assets
const assetMap = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: "url",
});

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const current = projects[projectIndex] || {};
  const imgs = current.images || [];

  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  const prevProject = () =>
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  const nextProject = () => setProjectIndex((i) => (i + 1) % projects.length);

  const selectProject = (e) => {
    const idx = projects.findIndex((p) => p.id === e.target.value);
    if (idx >= 0) setProjectIndex(idx);
  };

  const prevImage = () =>
    setImageIndex((i) => (i - 1 + imgs.length) % imgs.length);
  const nextImage = () => setImageIndex((i) => (i + 1) % imgs.length);

  // 2) Resolve URLs via assetMap
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
        <div className="carousel my-8">
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
      )}
    </div>
  );
}
