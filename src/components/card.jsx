import React from "react";
import "./card.css";

function Card({ title, content }) {
     return (
          <div className="feature-card">
               <h3>{title}</h3>
               <p>{content}</p>
          </div>
     );
}

export default Card;