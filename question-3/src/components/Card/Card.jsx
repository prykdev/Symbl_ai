import React from "react";
import './Card.css'
export const Card = (props) => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="front">
          <h3>{props.id}</h3>
          <p>Hover to see name </p>
          
        </div>
        <div class="back">
          <h3>{props.name}</h3>
         
        </div>
      </div>
    </div>
  );
}
