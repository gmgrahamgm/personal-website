import React from "react";
import "./Skills.css";

export default function Skills() {
  const courses = [
    {
      course: "Design and Analysis of Algorithms",
      concepts: "Divide and Conquer, Greedy, DP, Graphs, Complexity",
    },
    {
      course: "Software Security",
      concepts:
        "OWASP, Web Vulnerabilities, Software Vulnerabilities, Scanners and Tools",
    },
    {
      course: "Applied Cryptography",
      concepts:
        "Public and Private Key Cryptography, Hashes, Block Ciphers, Quantum Computing, Post-Quantum Cryptography, Zero Knowledge Proofs",
    },
    {
      course: "Foundations of Software Engineering",
      concepts:
        "Waterfall, Scrum, PostgreSQL, Python, Java, React, HTML, CSS, JavaScript",
    },
    {
      course: "Intro to Computer Systems",
      concepts:
        "C, C++, File Descriptors, System Calls, Process API, Threading, Networks",
    },
    { course: "Database Systems", concepts: "MySQL, NoSQL" },
    { course: "Program Design and Concepts", concepts: "C++" },
    { course: "Data Structures and Algorithms", concepts: "C++, GDB" },
    { course: "Programming Languages", concepts: "Java, Scheme" },
  ];

  const languages = [
    "C",
    "C++",
    "Python",
    "C#",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const tech = [
    "Vite",
    "React",
    "Three.js",
    "Django",
    "Flask",
    "FastAPI",
    "Uvicorn",
    "SQLMap",
    "Metasploit",
    "Docker",
    "MySQL",
    "MongoDB",
  ];

  return (
    <div className="skills-page">
      <h1 className="skills-heading">Skills</h1>
      <p className="skills-intro">
        Here is a collection of concepts, languages, and technologies that I
        have encountered and/or learned through personal projects and school.
      </p>

      {/* Courses Table */}
      <div className="skills-table-container">
        <table className="skills-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Languages / Concepts</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(({ course, concepts }, idx) => (
              <tr key={idx}>
                <td>{course}</td>
                <td>{concepts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tech Sections */}
      <div className="tech-section">
        <h2 className="section-title">Familiar Languages</h2>
        <div className="logo-container">
          {languages.map((lang) => (
            <div key={lang} className="logo-placeholder">
              {lang}
            </div>
          ))}
        </div>
      </div>

      <div className="tech-section">
        <h2 className="section-title">Familiar Tech</h2>
        <div className="logo-container">
          {tech.map((t) => (
            <div key={t} className="logo-placeholder">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
