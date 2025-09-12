import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flowbite";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Blog = lazy(() => import("./pages/Blog.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
