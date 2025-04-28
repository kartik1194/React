import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();

  // function handleincrement() {
  //   val.current = val.current + 1;
  //   console.log("value of val", val);
  //   setCount(count + 1);
  // }
  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "yellowgreen";
  // }

  // useEffect(() => {
  //   console.log("i will run on each render");
  // });

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 300);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function reset() {
    stopTimer();
    setTime(0);
  }

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      {/*<div>
      <button ref={btnRef} onClick={handleincrement}>
        increment
      </button>
      <button onClick={changeColor}>Change bg Color of 1st btn</button>

      <br />
      <div>count:{count}</div>
    </div>
    */}

      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
