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
import All from "./All Card/All.jsx";
import Mypost from "./My posts/Mypost.jsx";
import Update from "./Update Post/Update.jsx";
import Request from "./Volunteer request/Request.jsx";
import Error from "./ErrorPage/Error.jsx";
import Private from "./Private/Private.jsx";

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
        element: (
          <Private>
            <Add></Add>
          </Private>
        ),
      },
      {
        path: "/allpost/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
      },
      {
        path: "/apply/:id",
        element: (
          <Private>
            <Volunteer></Volunteer>
          </Private>
        ),
      },
      {
        path: "/allpost",
        element: <All></All>,
      },
      {
        path: "/mypost",
        element: (
          <Private>
            <Mypost></Mypost>
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            <Update></Update>
          </Private>
        ),
      },
      {
        path: "/request",
        element: (
          <Private>
            <Request></Request>
          </Private>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
