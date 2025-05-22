import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";
import "./Home.css";

// bundle all your src/assets images into a lookup map
const assetMap = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: "url",
});

export default function Home() {
  const [previewIndex, setPreviewIndex] = useState(0);
  const navigate = useNavigate();

  const preview = projects[previewIndex];
  const thumbKey = `../assets/${preview.thumbnail}`;
  const thumbUrl = assetMap[thumbKey];

  const goToProject = (idx) => {
    // pass the project index so Projects.jsx can pick it up
    navigate("/projects", { state: { projectIndex: idx } });
  };

  return (
    <div>
      {/* Intro section stays the same */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="placeholder-text">Your Photo</span>
        </div>
        <div className="intro-right">
          <h1 className="text-3xl font-bold mb-4">
            Howdy, I’m <strong>Graham Dungan</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Projects preview */}
      <section className="project-section">
        <div className="left-project-list">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          {projects.map((p, idx) => (
            <button
              key={p.id}
              className="btn-project"
              onMouseEnter={() => setPreviewIndex(idx)}
              onClick={() => goToProject(idx)}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="right-project-display">
          <h3 className="preview-title">{preview.title}</h3>
          <div className="flex items-start">
            {thumbUrl && (
              <img
                src={thumbUrl}
                alt={`${preview.title} thumbnail`}
                className="thumbnail-preview"
              />
            )}
            <p className="preview-blurb">{preview.blurb}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
