import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Component/Layout/Main";
import Home from "./Component/Home/Home";
import OrderReview from "./Component/OrderReview/OrderReview";
import Grandpa from "./Component/Grandpa/Grandpa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "/review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "/grandpa",
        element: <Grandpa></Grandpa>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
