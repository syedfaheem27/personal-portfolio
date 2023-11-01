import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
