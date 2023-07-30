import React, { useState } from "react";
import "../styles/Project.css";

function ProjectCard({ card: { back, front } }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="main-card">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={isFlipped ? "is-flipped game-card" : "game-card"}
      >
        <div className="card-face card-front">{front.description}</div>

        <div className="card-face card-back">
          <img src={back} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
