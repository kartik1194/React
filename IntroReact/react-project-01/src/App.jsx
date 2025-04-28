import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <p>
        Hello ji, My name is <span>Kartik Kumar</span>
      </p>
    </>
  );
}

export default App;
