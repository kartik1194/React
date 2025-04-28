import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  // create state
  // manage state
  // change state
  // sabhi state ko child main sync krwa dunga

  const [name, setName] = useState("");

  return (
    <>
      <Card name={name} setName={setName} />
    </>
  );
}

export default App;
