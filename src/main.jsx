import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Home from "./Component/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Context from "./Context/Context.jsx";
import Add from "./Component/Add Post/Add.jsx";
import Details from "./Post Details/Details.jsx";
import Volunteer from "./Be Volunteer/Volunteer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addpost",
        element: <Add></Add>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/apply/:id",
        element: <Volunteer></Volunteer>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
