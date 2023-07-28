import React from "react";
import Project from "../Project";
import "../../styles/Project.css";

export default function Portfolio() {
  return (
    <section className="project-detail">
      <article className="project-detail-text"></article>
      <h1>My Work</h1>
      <p>See selected projects below!</p>
      <article className="project-detail-cards">
        <Project />
      </article>
    </section>
  );
}
