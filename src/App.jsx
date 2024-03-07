import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      // errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        // },

        // {
        //   path: "/projects",
        //   element: <Projects />,
        // },
        // {
        //   path: "/resume",
        //   element: <Resume />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
