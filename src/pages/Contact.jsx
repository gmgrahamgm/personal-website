import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in touch</h1>

      <ul className="contact-list">
        <li>
          <strong>Phone:</strong> (817) 946-2517
        </li>
        <li>
          <strong>Email:</strong> gwdungan@gmail.com
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/graham-dungan-420943249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/graham-dungan
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/gmgrahamgm"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gmgrahamgm
          </a>
        </li>
      </ul>

      <h2 className="about-heading">About me</h2>
      <p className="about-text">
        Howdy! My name is Graham Dungan and I am currently a Senior Computer
        Science student at Texas A&M University. I specialize in Software
        Engineering and Security. Have you ever used a service and thought,
        “Wow, how is this free?”. I am a firm believer in free, open source,
        high-quality software, and I want to deliver those kinds of experiences
        to everyone.
        <br></br>
        <br></br>
        Besides programming, my hobbies include art, calisthenics, gaming, and
        travelling! Most of my personal programming projects surround these
        hobbies in some way and give me a great source of inspiration.
      </p>
    </div>
  );
}
