import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expansiveTask(num) {
    for (let i = 0; i <= 10000000; i++) {}

    return num * 2;
  }

  let doubleValue = useMemo(() => expansiveTask(input), [input]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <center>
        <h1>Count: {count}</h1>
      </center>
      <center>
        <input
          type="number"
          placeholder="enter number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </center>
      <center>
        <h1>Double: {doubleValue}</h1>
      </center>
    </>
  );
}

export default App;
