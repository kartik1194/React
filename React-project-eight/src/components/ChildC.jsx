import React, { useContext } from "react";
import { userContext } from "../App";

function ChildC() {
  // const user = useContext(userContext);
  const theme=useContext(themeContext);
  return <div>{user.name}</div>;
}

export default ChildC;
