import React from "react";
import "../styles/digitalSolutions.css";

function SolutionCard({ title, text, points, img }) {
  return (
    <article className="solution-card">
      <div className="card-top">
        <img src={img} alt={title} className="card-image" />
        <button className="card-arrow">
          <span>➜</span>
        </button>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>

        <ul className="card-points">
          {points.map((p, i) => (
            <li key={i}>
              <span className="check-icon" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default SolutionCard;
