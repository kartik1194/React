import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h6 className="heading">use state hook</h6>
      <div className="counter-container">
        <p id="para">Count = {count} </p>
        <button
          id="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increment
        </button>
        <button
          id="btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrement
        </button>
        <button
          id="btn"
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default Counter;
