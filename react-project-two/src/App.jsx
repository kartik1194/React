import { useState } from "react";

import "./App.css";
import UserCard from "./components/UserCard";
import Button from "./components/Button";

function App() {
  const [count, setcount] = useState(0);

  function handelClick() {
    setcount(count + 1);
  }
  return (
    <>
      {/* <Button handelClick={handelClick} text={count} /> */}

      <UserCard
        name="kartik"
        desc="kartik's deescription "
        style={{ "background-color": "yellow", color: "black" }}
      />
      <UserCard
        name="kaashu"
        desc="kaashu's deescription"
        style={{ "background-color": "yellow", color: "black" }}
      />
      <UserCard
        name="aryan"
        desc="aryan's deescription"
        style={{ "background-color": "yellow", color: "black" }}
      />
      <UserCard
        name="children"
        desc="children's deescription"
        style={{ "background-color": "yellow", color: "black" }}
      >
        <h1>child1</h1>
        <h1>child2</h1>
        <h1>child3</h1>
      </UserCard>
    </>
  );
}

export default App;
