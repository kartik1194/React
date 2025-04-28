import React from "react";

const Card = (props) => {
  return (
    <div x>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state ki value in card is {props.name}</p>
    </div>
  );
};

export default Card;
