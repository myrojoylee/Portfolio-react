import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Project.css";
import Dino from "../assets/trex.jpeg";

const projectCards = [
  {
    id: "1",
    back: Dino,
    front: { description: "this is a dino" },
  },
  {
    id: "2",
    back: Dino,
    front: { description: "this is an identical dino!" },
  },
];
function Project() {
  return (
    <div className="project-card-group">
      {projectCards.map((card) => (
        <ProjectCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Project;
