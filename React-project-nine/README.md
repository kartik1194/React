## React Routing

# import

- step 1: import

import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";

- step 2: create
  const router = createBrowserRouter([
  {
  path: "/hello",
  element: (

  <Navbar />

 <outlet/>
  ),
  children:{
    path:"/hi",
    element:<h1>hey there</h1>
  }
  },
  {},{},]);

- step 3: use
  <RouterProvider router={router} />

# use param

# use navigation
