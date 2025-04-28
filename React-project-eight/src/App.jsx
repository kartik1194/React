import { useState, createContext } from "react";

import "./App.css";
import ChildA from "./components/ChildA";

const userContext = createContext();
const themeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "kartik" });
  const [theme, setTheme] = useState("light");

  return (
    <>
      <themeContext.Provider value={theme}>
        {/* <userContext.Provider value={user}> */}
          <ChildA />
        {/* </userContext.Provider> */}
      </themeContext.Provider>
    </>
  );
}

export default App;
// export { userContext };
export { themeContext };
