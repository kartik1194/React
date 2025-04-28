import React from "react";
import k from "../assets/k.png";

function UserCard(props) {
  const img =
    "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg";
  return (
    <div className="user-container" style={props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={img} alt="kartik" />
      <p>{props.desc}</p>
      <div>{props.children}</div>
    </div>
  );
}

export default UserCard;
