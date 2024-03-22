import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },

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
