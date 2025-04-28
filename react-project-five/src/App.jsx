import { useState } from "react";

import "./App.css";
import Loginbtn from "./components/Loginbtn";
import Logoutbtn from "./components/Logoutbtn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  function handleClick() {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <>
      {/* setLoggedIn={setLoggedIn} */}
      {isLoggedIn ? <h1>logged in</h1> : <h1>Logged out</h1>}
      {isLoggedIn ? (
        <Logoutbtn handleClick={handleClick} />
      ) : (
        <Loginbtn handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
