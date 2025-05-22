import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in touch</h1>

      <ul className="contact-list">
        <li>
          <strong>Phone:</strong> (123) 456-7890
        </li>
        <li>
          <strong>Email:</strong> your.email@example.com
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/your-profile
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/your-username
          </a>
        </li>
      </ul>

      <h2 className="about-heading">About me</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
