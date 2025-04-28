import { useState } from "react";
//step 1 import
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import Dashboard from "./components/Dashboard";
import "./App.css";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Progress from "./components/Progress";

// step 2 create
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <center>
          <Home />
        </center>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar className="hii" />
        <br />
        <br />
        <br />
        <br />
        <center>
          <About />
        </center>
      </div>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <Param />
      </div>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <center>
          <Dashboard />
        </center>
        <Outlet />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* step 3 */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
