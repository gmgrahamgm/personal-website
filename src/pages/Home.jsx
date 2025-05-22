import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";
import "./Home.css";

// bundle all your src/assets images into a lookup map
const assetMap = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function Home() {
  const [previewIndex, setPreviewIndex] = useState(0);
  const navigate = useNavigate();

  const photoUrl = assetMap["../assets/graham-sitting.png"];

  const preview = projects[previewIndex];
  const thumbUrl = assetMap[`../assets/${preview.thumbnail}`];

  const goToProject = (idx) => {
    const id = projects[idx].id;
    navigate(`/projects#${id}`);
  };

  return (
    <div>
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-left">
          {photoUrl && (
            <img src={photoUrl} alt="Graham Dungan" className="intro-photo" />
          )}
        </div>
        <div className="intro-right">
          <h1 className="intro-greeting">Howdy, I'm</h1>
          <h1 className="intro-name">Graham Dungan</h1>
          <p className="intro-text">
            A Junior Computer Science student at Texas A&M with a specialization
            in Software Development and Security. Diligent, hardworking, and
            looking to "make good things."
          </p>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="project-section">
        <div className="left-project-list">
          <h2 className="projects-heading">Projects</h2>
          {projects.map((p, idx) => (
            <button
              key={p.id}
              className="btn-project"
              onMouseEnter={() => setPreviewIndex(idx)}
              onClick={() => goToProject(idx)}
            >
              <span>{p.title}</span>
              {/* right‐arrow SVG */}
              <svg
                className="h-5 w-5 flex-shrink-0"
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
          ))}
        </div>

        <div className="right-project-display">
          <h3 className="preview-title">{preview.title}</h3>
          <div className="flex items-start">
            {thumbUrl && (
              <img
                src={thumbUrl}
                alt={`${preview.title} thumbnail`}
                className="thumbnail-preview-large"
              />
            )}
            <p className="preview-blurb">{preview.blurb}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
