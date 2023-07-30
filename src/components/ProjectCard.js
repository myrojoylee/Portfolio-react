import React, { useState } from "react";
import "../styles/Project.css";

function ProjectCard({ card: { back, front, link, repo } }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

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
          <div className="project-link-group">
            <a onClick={handleChildClick} href={link}>
              <button className="project-link">Link to deployed app</button>
            </a>
            <a onClick={handleChildClick} href={repo}>
              <button className="project-link">Link to GitHub repo</button>
            </a>
          </div>
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
