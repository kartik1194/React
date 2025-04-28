import { useCallback, useState } from "react";

import "./App.css";
import ComponentChild from "./components/ComponentChild";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="container">
      <h1> count:{count}</h1> <br />
      <div>
        <button onClick={handleClick}>increment</button>
      </div>
      <br />
      <div>
        <ComponentChild btnName="click me" />
      </div>
    </div>
  );
}

export default App;
