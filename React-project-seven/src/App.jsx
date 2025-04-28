import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(20);
  const [total, setTotal] = useState(0);

  function handleCLick() {
    setCount(count + 1);
  }
  function handleCLickTotal() {
    setTotal(total + 1);
  }

  // first -> side effect func
  // second -> cleanup function
  // third -> comma seprated dependency list

  // variation 1:
  // run on every render
  // useEffect(() => {
  //   alert("runs on each render");
  // });

  // variation 2:
  // run on first render
  // useEffect(() => {
  //   alert("runs on first render");
  // },[]);

  //variation 3
  // on paticular render
  // useEffect(() => {
  //   alert("runs every time when count is updated!");
  // }, [count]);

  // variation 4
  // multiple particular render
  // useEffect(() => {
  //   alert("runs every time when count or total is updated!");
  // }, [count, total]);

  //variation 5
  // count is unmounted
  // first -> side effect func
  // second -> cleanup function
  // third -> comma seprated dependency list

  // variation 1:
  // run on every render
  // useEffect(() => {
  //   alert("runs on each render");
  // });

  // variation 2:
  // run on first render
  // useEffect(() => {
  //   alert("runs on first render");
  // },[]);

  //variation 3
  // on paticular render
  // useEffect(() => {
  //   alert("runs every time when count is updated!");
  // }, [count]);

  // variation 4
  // multiple particular render
  // useEffect(() => {
  //   alert("runs every time when count or total is updated!");
  //   }, [count, total]);

  // variation 5

  // with clean up function

  useEffect(() => {
    alert("count is updated");
    return () => {
      alert("old count is unmount");
    };
  }, [count]);

  return (
    <>
      <div>
        <button onClick={handleCLick}>add count</button>
        <br />
        <h1>count is : {count}</h1>
      </div>

      <br />

      <div>
        <button onClick={handleCLickTotal}>add total</button>
        <br />

        <h1>total is : {total}</h1>
      </div>
    </>
  );
}

export default App;
