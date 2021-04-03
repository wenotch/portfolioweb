import React from "react";
import "./Cards.css"
function Cards(props) {
  return (
    <div className="cards">
      <img src={props.src} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text} <span>{props.span}</span></p>
      <a href={props.link}>Visit</a>
    </div>
  );
}

export default Cards;
