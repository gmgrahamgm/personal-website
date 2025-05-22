import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* Introductory Segment */}
      <section className="intro-section">
        <div className="intro-left">
          {/* Placeholder for your photo */}
          <span className="placeholder-text">Your Photo</span>
        </div>
        <div className="intro-right">
          <h1 className="text-3xl font-bold mb-4">
            Howdy, I'm <strong>Graham Dungan</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Projects Preview Segment */}
      <section className="project-section">
        <div className="left-project-list">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-2">
            <button className="btn-placeholder">Project A</button>
            <button className="btn-placeholder">Project B</button>
            <button className="btn-placeholder">Project C</button>
          </div>
        </div>

        <div className="right-project-display">
          <h3 className="text-xl font-bold mb-2">Project A</h3>
          <div className="flex items-start">
            <div className="thumbnail-placeholder">
              <span className="placeholder-text">Thumbnail</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet accumsan tortor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
