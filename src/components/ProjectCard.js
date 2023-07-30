import React, { useState } from "react";
import "../styles/Project.css";

function ProjectCard({ card: { back, front, link, repo } }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="main-card">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={isFlipped ? "is-flipped game-card" : "game-card"}
      >
        <div className="card-face card-back">
          <p>Title: {back.title}</p>
          <p>Details: {back.description}</p>
          <p>Technologies: {back.technologies}</p>
          <a className="project-link" href={link}>
            Link to deployed app
          </a>
          <a className="project-link" href={repo}>
            Link to GitHub repo
          </a>
        </div>

        <div className="card-face card-front">
          <img src={front} alt="" className="project-card-img" />
          <p className="click-me">Click for details</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
