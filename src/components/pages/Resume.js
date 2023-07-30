import React from "react";
import "../../styles/Resume.css";
import ResumeMJLeePDF from "../../assets/Resume-bw-mjlee-2.pdf";

export default function Resume() {
  return (
    <section className="resume">
      <article className="resume-detail">
        {" "}
        <h1>Resume</h1>
        <a
          href={ResumeMJLeePDF}
          download="ResumeMJLeePDF"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download PDF</button>
        </a>
      </article>

      <article className="resume-list">
        <div>
          <h4>Front-End Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>HandlebarsJS</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
        </div>
        <div>
          <h4>Back-End Proficiencies</h4>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>APIs</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
