import React from "react";
import "../../styles/Resume.css";
import ResumeMJLeePDF from "../../assets/Resume-bw-mjlee-2.pdf";

export default function Resume() {
  return (
    <section className="resume-detail">
      <h1>Resume</h1>
      <a
        href={ResumeMJLeePDF}
        download="ResumeMJLeePDF"
        target="_blank"
        rel="noreferrer"
      >
        Download PDF
      </a>
      <article className="resume-list">
        <h4>Front-End Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
        </ul>
      </article>
    </section>
  );
}
