import React from "react";
import { useLocation } from "react-router-dom";

const ProjectNavigator = ({ projects, projectIndex, setProjectIndex }) => {
  const location = useLocation();
  const current = projects[projectIndex];

  const prevProject = () =>
    setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  const nextProject = () => setProjectIndex((i) => (i + 1) % projects.length);
  const selectProject = (e) => {
    const idx = projects.findIndex((p) => p.id === e.target.value);
    if (idx >= 0) setProjectIndex(idx);
  };

  return (
    <div className="navigator">
      <button onClick={prevProject} className="nav-arrow">
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

      <div className="relative">
        <select
          value={current.id}
          onChange={selectProject}
          className="nav-dropdown appearance-none pr-12 pl-6 py-3 bg-white rounded-full text-lg md:text-xl"
        >
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
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
  );
};

export default ProjectNavigator;
