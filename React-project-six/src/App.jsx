import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("i am onCLick");
  }
  function handleMouseOver() {
    alert("i am MouseOver");
  }
  function handleOnChange(e) {
    console.log("value till now", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // i am writing custom behaviour down
    alert("Form Submit krdu kyan");
  }

  return (
    <>
      <p onMouseOver={handleMouseOver} style={{ color: "red" }}>
        Lorem ipsum dolor sit amet.
      </p>
      <button onClick={handleClick}>Click me</button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => handleOnChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
