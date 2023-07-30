import React, { useState } from "react";
import Dino from "../assets/trex.jpeg";
import "../styles/Project.css";

function Project() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="main-card">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={isFlipped ? "is-flipped game-card" : "game-card"}
      >
        <div className="card-face card-front">?</div>

        <div className="card-face card-back">
          <img className="trex-img" src={Dino} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Project;
